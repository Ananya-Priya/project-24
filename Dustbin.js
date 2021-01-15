class Dustbin
{
    constructor(x,y,width,height)
    {
        var opitions={
            isStatic:true,
            friction:0.3
        }
      
        this.body=Bodies.rectangle(x,y,width,height,opitions);
        this.width=width
        this.height=height
        
      
        World.add(world,this.body);

    }
   
    display()
    {
            push();
            
            rectMode(CENTER);
            strokeWeight(7);
            stroke("green");
            fill("orange");

            rect(this.body.position.x,this.body.position.y, this.width  ,  this.height );
            pop();


    }
    
}