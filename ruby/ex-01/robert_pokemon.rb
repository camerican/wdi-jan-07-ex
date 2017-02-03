class Pokemon
  attr_reader :weaknesses
  attr_accessor :name, :evolve
  def initialize options
    @name = options[:name]
    @evolve = options[:evolve]
    @weaknesses = []
    options[:weaknesses].each do |weaknesses|
      @weaknesses.push ['water', 'fire', 'leaf', 'rock', 'ghost', 'ice', 'bug'][weaknesses]
    end
  end
end
class Water < Pokemon
  attr_reader :moves
  def initialize options
    p other
    p moves
    super(other)
    @moves = ['bubblebeam', 'watergun', 'tackle', 'surf', 'bubbles', '-'][options[:moves]]
  end
end
$pokemon1 = Pokemon.new( 
  name:  'Squirtle', 
  evolve: 'Wartortle', 
  weaknesses: [2, 5],
  moves: 2
)


