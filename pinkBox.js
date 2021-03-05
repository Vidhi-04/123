class pinkBox {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y,30, 40,options);
      World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 2.5){
            var pos =this.body.position;
            push();
            translate(pos.x, pos.y);
            stroke("black")
            strokeWeight(2);
            fill("pink")
            rect(0, 0,30, 40);
            pop();
          }
          else{
              World.remove(world, this.body)
          }
    }
  }