class ApplicationController < ActionController::Base
  include ::KaminariApiMetaData
  skip_before_action :verify_authenticity_token
end
