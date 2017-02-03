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





















