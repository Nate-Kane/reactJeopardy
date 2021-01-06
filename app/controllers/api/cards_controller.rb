class Api::CardsController < ApplicationController
  def index
    render json: Card.all
  end

  def show
  end
end
