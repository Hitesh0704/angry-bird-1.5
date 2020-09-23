class baseClass{
    constructor(x,y,w,h,angle){
       var options={
          restitution:0.8 ,
          friction:1.5,
          density:1.5
       } 
       this.w=w;
       this.h=h;
       this.body=Bodies.rectangle(x,y,w,h,options);
       this.image=loadImage("sprites/base.png");
       World.add(world,this.body);
     }   
    display(){
       imageMode(CENTER);
       fill("red"); 
       var pos=this.body.position;
       var angle=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       strokeWeight(4);
       stroke("green");
       image(this.image,0,0,this.w,this.h);
       pop();
    }  
    }