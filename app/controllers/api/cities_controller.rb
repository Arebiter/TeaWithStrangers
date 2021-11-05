class Api::CitiesController < ApplicationController

    def index
        @cities = City.all
        render :index
    end


    def city_params
        params.require(:city).permit(:city_name)
    end


end
