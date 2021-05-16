class Snow{
 constructor(x,y,width,height)
   {
     var options = { 
      'friction':3,
     'density':1.0
    };
   this.body=Bodies.rectangle(x, y,width,height, options);
   this.width=width;
   this.height=height;
   this.body.setAngle;
   this.image = loadImage("snow2.jpg");
   World.add(world, this.body);

          }
          display()
          {
            var angle = this.Matter.Body.setAngle;
           var pos = this.body.position;
             push()
             translate(pos.x, pos.y);
        rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height)
   
    pop()     
          }
      }