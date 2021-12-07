class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end
    
    def create
        @review = Review.new(reviews_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(reviews_params)
            redirect_to :show
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review
            @review.destroy
        end
        # render :index
    end

    private

    def reviews_params
        params.require(:review).permit(:user_id, :host_id, :rating, :review)
    end
end
