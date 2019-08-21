class CurrenciesController < ApplicationController
  before_action :set_current_currency

  def index; end

  def search
    @currencies = Currency.where('LOWER(name) like ?', "%#{ params[:search].downcase }%")
    render json: { currencies: @currencies }
  end

  def calculate
    @currency = Currency.find_by_id(params[:id])
    amount = params[:amount]
    render json: {
      currency: @currency,
      current_price: @currency.calculate_value(1),
      amount: amount,
      value: @currency.calculate_value(amount)
    }
  end

  private

  def set_current_currency
    @currency ||= Currency.find_by_id(params[:id])
  end
end