class Api::V1::GreetingsController < ApplicationController
  def hello
    @signs = get_sign
  end

  def message
    begin
      sign_response = save_sign

      if sign_response.present?
        @message_response = sign_response
      end
    rescue JSON::ParserError => err
      Rails.logger.error('SIGN JSON::ParserError')
      Rails.logger.error(err.inspect)
    end
  end

private
  def get_sign
    rest_response = RestClient::Request.execute(
      timeout: 30,
      method: :get,
      url: ENV['CAMPAIGNS_SIGNS_RECENT_URL']
    )
    signs = begin
      JSON.parse(rest_response.body) if rest_response.code == 200
    rescue JSON::ParserError => err
      Rails.logger.error('GET SIGNS JSON::ParserError')
      Rails.logger.error(err.inspect)
    end
    signs || []
  end

  def save_sign
    rest_response = RestClient::Request.execute(
      timeout: 30,
      method: :post,
      url: ENV['CAMPAIGNS_SIGN_URL'],
      payload: {
        sign: {
          campaign_id: ENV['CAMPAIGNS_CAMPAIGN_ID'],
          signer_name: 'a123', # params[:name],
          body: 'b456' # params[:message]
        }
      },
      headers: {
        x_api_key: ENV['CAMPAIGNS_CAMPAIGN_SECURE_KEY']
      }
    )
    JSON.parse(rest_response.body)
  rescue RestClient::ExceptionWithResponse => err
    rest_response = JSON.parse(err&.response&.body.presence || '')

    if rest_response.blank? || rest_response['errors'].blank?
      Rails.logger.error('SIGN CAMPAIGNS ERROR : unknown')
      if rest_response.blank?
        Rails.logger.error(err.inspect)
      else
        Rails.logger.error(err.response.body)
      end
      flash[:alert] = t('errors.unknown')
      return
    end

    error_code = rest_response['errors'].first&.fetch('code')

    if error_code.present? && I18n.exists?("messages.sign.#{error_code}", locale)
      Rails.logger.error("SIGN CAMPAIGNS WARNING : #{error_code}")
      Rails.logger.error(params.inspect)
      flash[:alert] = t("messages.sign.#{error_code}")
    else
      Rails.logger.error('SIGN CAMPAIGNS ERROR : unknown code')
      Rails.logger.error(err.response.body)
      flash[:alert] = t('errors.unknown')
    end

    nil
  end
end
