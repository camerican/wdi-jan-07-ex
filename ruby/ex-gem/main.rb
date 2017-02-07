# main.rb
require 'geolocater'
require 'rainbow'
require 'sinatra'
require 'json'

set :menu, [
  {title: "Home",
   route: "/"},
  {title: "About",
   route: "/about"},
  {title: "Contact",
   route: "/contact"}
]

get '/' do
  @bodyId = "home"
  @roster = %w(Alfe Jarvis Robert Sel Joel Nick Ber Kyle Mauricio Eric James Steve Angie Hak)
  @moods = %w(Happy Sad Mad Grumpy Sleepy Placid Contemplative)
  erb :index
end

get '/about' do
  erb :about
end

get '/contact' do
  <<-SOMEHTMLHERE
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Contact Us</title>
  </head>
  <body>
  <h1>Contact Us</h1>
  <label>Email</label><input/>
  </body>
  </html>
  SOMEHTMLHERE
end


get "/locate/:site" do
  content_type :json
  params[:site]
  # WARNING: THIS IS A BAD IDEA
  # We don't want to run terminal commands using USER INPUT (EVER)
  site = params[:site]
  # unless (site =~ /^[\w\.]+$/) == 0
  unless /^[\w\.]+$/.match site
    return "BOGUS! YOU JERK"
  end
  results = `dig +short #{site}`.split("\n")
  Geolocater.geolocate_ip( results[0] ).to_json
end

# puts "Please enter the name of a " + Rainbow("website").blue
# website = gets.strip
# results = `dig +short #{website}`.split("\n")

# geo_results = Geolocater.geolocate_ip( results[0] )

# puts "#{website} is located in " + Rainbow(geo_results['city']).red + ", #{geo_results['region_name']} #{geo_results['country_name']}"

