export class Pilot{
      constructor(name, yearsWorking, monthlyTraining){
        this.name = name;
        this.yearsWorking = yearsWorking;
        this.monthlyTraining = monthlyTraining
      }

      xp(){
          return (this.monthlyTraining + (this.yearsWorking*30)) / 100
      }
  }
