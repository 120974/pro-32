class Plinko
{
    constructor(x, y)
    {
        var options ={
            isStatic: true
        } 
        this.body = Bodies.circle(x, y, 10, options);
        this.width = 8;
        this.height = 8;
        World.add(world, this.body);
    }
    display()
    {
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}