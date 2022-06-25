class DisastersController < ApplicationController
  def index
    @disasters = Disaster.order('happened_on desc').page(params[:page]).per(params[:per_page] || 5)
    render json: { disasters: @disasters, meta: meta_data(@disasters) }
  end

  def show
    @distater = Disaster.find(params[:id])
    render json: @distater
  end
end