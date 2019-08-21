class Currency < ApplicationRecord
  def calculate_value(amount)
    query = {
      "symbol" => self.currency_symbol,
      "amount" => amount,
      "convert" => "USD"
    }
    request = HTTParty.get(URL, query: query, headers: HEADERS)
    response = JSON.parse(request.body).dig("data", "quote", "USD", "price").round(4)
  end

  private

  URL = 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion'
  HEADERS = {
    "X-CMC_PRO_API_KEY" => "9d71e0b5-803c-446a-927d-b63fa0d25520"
  }
  private_constant :URL
  private_constant :HEADERS
end
