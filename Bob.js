class Bob{
    constructor(a, b){
        var Ball_properties = {
            restitution: 1,
          friction: 0,
          frictionAir: 0.0,
          slop:1,
          inertia: Infinity
        }
        this.bodies = Bodies.circle(a, b, 20, Ball_properties)
        World.add(world, this.bodies)
    }
    display(){
    ellipseMode(RADIUS)
    fill("purple") 
    ellipse(this.bodies.position.x, this.bodies.position.y, 20)
    }
}
class Pendulum{
    constructor(x, y, color){
      var options = {
          restitution: 1,
          friction: 0,
          frictionAir: 0.0,
          slop:1,
          inertia: Infinity
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);;
      this.x = x
      this.y = y
      this.color = color
      World.add(wolrd, this.body)
    }
  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    roatate(angle)
    nosStroke()
    fill(this.color)
    ellipse(0, 0, 60, 60)
    pop()
  }
}  