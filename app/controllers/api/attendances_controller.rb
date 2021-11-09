class Api::AttendancesController < ApplicationController

    def index
        @attendances = Attendance.all
        render :index
    end

    def create
        @attendance = Attendance.new(attendance_params)
        if @attendance.save
            render :show
        else
            render json: @attendance.errors.full_messages, status: 422
        end
    end

    def destroy
        @attendance = Attendance.find(params[:id])
        if @attendance
            @attendance.destroy
        end
        redirect_to :index
    end

    private

    def attendance_params
        params.require(:attendance).permit(:user_id, :teatime_id)
    end


end
