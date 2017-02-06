# main.rb
require 'geolocater'

puts "Please enter the name of a website"
website = gets.strip

p Geolocater.geolocate_ip( website )
# to do: clean up the output to look better