# test.rb
puts "Get on with it!"
puts "James"
# console.log( "Get on with it!");

# PI = 3.14159
# PI = "Delicious"

$my_variable = 21

$superbowl = {
  winner: "Falcons",
  loser: "Patriots"
}
$superbowl[:loser] 
# => 


# puts "Who is going to win on Sunday?"

# winner = gets.strip

# puts "You said #{winner} would win" 

puts "How many points will the Patriots win by?"

margin = gets.to_i

puts "You said they would win by #{margin}"

### Our Notes
### String is a collection of characters enclosed between quotes
"hello"

### A Fixednum is an integer, a number that doesn't have a decimal point
4

### A Float is a floating point number iwth a decimal point that can move around
3.14159

### A Boolean value is either true or false
true
false

### An array is just like from the JavaScript world...  it is a collection of assorted values
[1,4,3,"This is a party","I like fishes"]

### A hash contains a collection of key value pairs
{:this => "value", :hey => "hello"}
# There's also the short-hand syntax...
{this: "value", hey: "hello"}

#### Symbols...
### Symbols are a little mysterious but they essentially are just immutable values that are convenient to use as keys within hashes.
### No need to worry about them too much.

for i in 7..13
  puts "#{i} Mississippi"
end

roster = ["Alfe","Jarvis","Robert","James","Sel","Nick","Joel","Steve","Angie","Hak","Eric","Oliver","Kyle","Mauricio","Ber"]

puts "each loop"
roster.each_with_index do |person,index|
  puts "#{index}: #{person}"
end
puts "for loop"
for i in 0...roster.length
  puts "#{i}: #{roster[i]}"
end



i = 0
while i < 5
  puts i 
  i += 1 # i = i + 1
end

arr = [35, 45, 32,0,4,-24]

# def max fried_fish
#   fried_fish.sort[-1]
# end

# def max arr
#   # look for the largest element in the array...
#   # one at at time 
#   biggest = arr[0]
#   arr.each do |num|
#     if num > biggest
#       biggest = num
#     end
#   end
#   biggest
# end

def max arr
  arr.reduce do |accumulater,current|
    current > accumulater ? current : accumulater
  end
end

def sum arr
  arr.reduce(0) do |accumulater,current|
    accumulater + current
  end
end

def sum arr
  arr.reduce &:+
end

keys = [:red,:green,:blue]
values = [34,155,255]

color = {}
keys.each_with_index do |key,index|
  color[key] = values[index]
end


puts max arr

class Team
  @@total = 0
  attr_accessor :city, :name
  def initialize name, city
    @name = name
    @city = city
  end
  def to_s
    "The " + @city + " " + @name
  end
  def self.total
    @@total
  end
end

class Pokemon
  attr_reader :type, :weaknesses
  attr_accessor :name
  @@types = ["water","fire","leaf","rock","ice","bug"]
  def initialize name, type, *weaknesses
    @name = name
    @type = @@types[type]
    @weaknesses = []
    weaknesses.each do |weakness|
      @weaknesses.push @@types[weakness]
    end
  end
end
pokemon1 = Pokemon.new "Squirtle", 0, 1, 2


# - Try creating your own object with at least two attributes and one instance method

# - Instantiate a new copy of the object and assign it to a variable

# - Change the attributes of your instance and try calling the method you've created on it

# - Once you've been able to do this successfully, create a new method that references the two attributes
class Pog
  attr_reader :popularity
  attr_accessor :color
  def initialize color, popularity
    @color = color
    @popularity = popularity
  end
  def isCool?
    calculated_coolness = 0
    if @color == "red"
      calculated_coolness = @popularity * 3
    else
      calculated_coolness = @popularity
    end
    if calculated_coolness > 10 
      true
    else
      false
    end
  end
end

pog_collection = []
20.times do 
  pog_collection.push( Pog.new ["red","blue","green"].sample, rand(20) )
end

class Game
  attr_accessor :title
end

class CardGame < Game
  attr_accessor :decks
end

















