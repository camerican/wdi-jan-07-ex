# main.rb
require 'geolocater'
require 'rainbow'

puts "Please enter the name of a " + Rainbow("website").blue
website = gets.strip
results = `dig +short #{website}`.split("\n")

geo_results = Geolocater.geolocate_ip( results[0] )

puts "#{website} is located in " + Rainbow(geo_results['city']).red + ", #{geo_results['region_name']} #{geo_results['country_name']}"
