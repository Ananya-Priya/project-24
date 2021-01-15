class Paper
    {
  constructor(x,y,r){

    var opitions=
{
  
    restitution : 1.0,
    friction :0.3,
    density : 1.2
    


}
this.body=Bodies.circle(x,y,r,opitions)
this.r=r
World.add(world,this.body);



  }





display()
{
  push()
translate(this.body.position.x,this.body.position.y);

    




fill("brown");


ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r);
pop()
}
}