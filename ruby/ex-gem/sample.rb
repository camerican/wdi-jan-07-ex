moods = %w(Happy Sad Angry Grumpy Sleepy Placid Contemplative)

moods.map(&:upcase).each do |mood|
  puts mood
end