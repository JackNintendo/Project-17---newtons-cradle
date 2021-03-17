class Ball {
    constructor(x, y, width, height) {
      var options = {
           //the more restitution, the more bounce something has
          'restitution':2.0,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("black");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  