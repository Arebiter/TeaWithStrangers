class Api::TeaTimesController < ApplicationController


    def index
        @tea_times = TeaTime.all
        render :index
    end

    def show
        @tea_time = TeaTime.find(params[:id])
        render :show
    end

    def create
        @tea_time = TeaTime.new(tea_times_params)
        if @tea_time.save
            render :show
        else
            render json: @tea_time.errors.full_messages, status: 422
        end
    end

    def update
        @tea_time = TeaTime.find(params[:id])
        if @tea_time.update(tea_times_params)
            redirect_to :show
        else
            render json: @tea_time.errors.full_messages, status: 404
        end
    end

    def destroy
        @tea_time = TeaTime.find(params[:id])
        if @tea_time
            @tea_time.destroy
        end
        redirect_to :index
    end

    private

    def tea_times_params
        params.require(:tea_time).permit(:location, :start_time, :end_time, :date, :city_id, :host_id, :description)
    end
end