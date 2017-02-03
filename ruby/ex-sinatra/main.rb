# main.rb
require 'sinatra'

get '/' do
  erb :index
end

get '/team' do
  @patriots_fans = ["Kyle","Ber"]
  erb :team
end

get '/winners_lounge' do
  "Hello Falcons!"
end

get "/profile/#{person}" do
  person
end



