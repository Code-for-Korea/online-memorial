class DisastersController < ApplicationController
  def index
    @disasters = Disaster.all
    render json: @disasters
  end

  def show
    @distater = Disaster.find(params[:id])
    render json: @distater
  end
end