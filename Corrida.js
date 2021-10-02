import { Car } from './Veiculo.js'
import { finished, record } from './api.js'
import { Pilot } from './Piloto.js'

export class Race{
  constructor(){
    this.listPodium = []
    this.recordists = []
    this.result = {}
  }
  
  raceStart = async function(){

    let pil1 = new Pilot('Daniel',3,15)
    
    let pil2 = new Pilot('Leonardo',4,19)

    let pil3 = new Pilot('Renan',3,12)

    let pil4 = new Pilot('William',4,30)

    let carrango = new Car('carro','corsa',2000,'cinza',100)
    let ferrari = new Car('carro','ferrari',2021,'vermelha',400)

    ferrari.speedUp(pil2, this.relatorio, this.listPodium, this.recordists)
    ferrari.speedUp(pil4, this.relatorio, this.listPodium, this.recordists)
    carrango.speedUp(pil3,this.relatorio, this.listPodium, this.recordists)
    carrango.speedUp(pil1, this.relatorio, this.listPodium, this.recordists)
    
    return this.listPodium
  }.bind(this)
    
  relatorio = async function(obj, podium, recordists){
    let pilot = {
      "tempo": obj.feedback,
      "piloto": obj.pilot,
      "carro": obj.model
    }
  
    finished(pilot).then((respostaDistancia) => {

    podium.push(pilot)

    if (respostaDistancia.length == Car.totalCars){
          record().then((resposta) => {
            
            console.log("PÓDIO: ")
            podium.forEach(function(corredor, i){
              if(podium[i-1] == undefined){
                console.log(`${i+1}º Lugar: ${corredor.piloto}           Tempo: ${corredor.tempo}s    `)
              } else {
                console.log(`${i+1}º Lugar: ${corredor.piloto}           Tempo: ${corredor.tempo}s    Diferença ${i}° Lugar: ${corredor.tempo-podium[i-1].tempo}`)
              }
            });

            recordists.push(resposta)
          }).catch(erro => console.log(erro))
    }

  }).catch(erro => console.log(erro)).b
  }
 
  getRecordistas = async function (nome){
    this.result = {"msg": "Nenhum piloto encontrado!"}
    this.recordists.forEach(corredor => {
    if(nome.toUpperCase() == corredor.piloto.toUpperCase()){
      this.result = corredor
      return  this.result
    }
  });
  return {}
}
}

