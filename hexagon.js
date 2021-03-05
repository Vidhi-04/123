class Hexagon {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.image = loadImage("Hexagon.png")
      this.body = Bodies.rectangle(x, y,40, 40,options);

      World.add(world, this.body);
    }
    display(){
        
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      //rect(100, 200, 40, 40)
      imageMode(CENTER)
      image(this.image, 0, 0, 40, 40)
      pop();
    }
  }