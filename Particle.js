class Particle
{
    constructor(x, y)
    {
        var options = {
            restituition: 1,
            density: 0.5,
            friction: 0.5,
            isStatic: false

        } 
        this.body = Bodies.circle(x, y, 10, options);
        this.width = 10;
        this.height = 10;
        this.color = color(random(0,255),random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display()
    {
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
   
}