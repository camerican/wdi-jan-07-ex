# main.rb
require 'geolocater'

puts "Please enter the name of a website"
website = gets.strip
results = `dig +short #{website}`.split("\n")

geo_results = Geolocater.geolocate_ip( results[0] )

puts "#{website} is located in #{geo_results['city']}, #{geo_results['region_name']} #{geo_results['country_name']}"
