export class Car {
  constructor(type, model, year, color, enginePower) {
  Car.totalCars = 0;
  this.type = type;
  this.model = model;
  this.year = year;
  this.color = color;
  this.enginePower = enginePower
  this.feedback = null
  }
  
  speedUp = function(pilot, cb, podium, recordists){

    if (!pilot){
      console.log('No pilot found.')
      return 
    }else{
      Car.totalCars +=1
    }
    
    if (this.feedback) return this.feedback
    var aux = 50;
    if (this.enginePower <= 100) {
      aux = 0.9
    } else if (this.enginePower > 100 && this.enginePower <= 200) {
      aux = 0.7
    } else if (this.enginePower > 200 && this.enginePower <= 300) {
      aux = 0.6
    }else if (this.enginePower > 300) {
      aux = 0.2
    }
  
    var start = new Date().getTime();
    var speed = 0 
    var animacao = '.'
    var interval = setInterval(() => {
      speed += 1
      animacao = animacao == '.' ? '..' : 
        (animacao == '..' ? '...' : 
          (animacao == '...' ? '.' : '' )
        )
  
      
      if (speed === 100){
      clearInterval(interval)
      var end = new Date().getTime();
      this.pilot = pilot.name
      this.feedback = (end - start)/ 1000.0
      cb(this, podium, recordists)
      
    }
      
    }, 100 * (aux/pilot.xp()));
  
  }
}
