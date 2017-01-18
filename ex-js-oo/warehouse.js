

function Warehouse( ) {
  this.storage = [];
  this.addItem = function( item ) {
    // to do: check and make sure this is an item
    this.storage.push( item );
    return this;
  }
}

function Item( name, width, height, length, weight ) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.length = length;
  this.weight = weight;
} 

var myWarehouse = new Warehouse();
myWarehouse.addItem( new Item( "Box1", 34, 34, 34, 500 )).addItem( 
                     new Item( "Box2", 34, 34, 34, 500 ));



