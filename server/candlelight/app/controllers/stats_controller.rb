class StatsController < ApplicationController
  def year
    @stat = Stat.find_by(year: params[:year])
    render json: @stat
  end
end