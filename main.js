import {Car} from './Veiculo.js'
import {finished , record} from './api.js'
import {Pilot} from './Piloto.js'
import {Race} from './Corrida.js'
import express from 'express'

// AV1 - DESENVOLVIMENTO DE APLICAÇÕES MÓVEIS - TURMA 823
// ALUNOS:
// 2017200349 - ALEXANDRE RANGEL SEIDEL 
// 2016201748 - DANIEL DE OLIVEIRA 
// 2018101845 - LEONARDO HENRIQUE 
// 2015102491 - RENAN ROMUALDO 
// 2018102115 - WILLIAM NOPOMOCENO NASCIMENTO

const app = express()

let raceInstance = new Race()
raceInstance.raceStart()

app.get('/', async function(req, res){
  res.json(raceInstance.listPodium)
})

app.get('/recordistas', async function(req, res){
  res.json(raceInstance.recordists)
})

app.get('/largada', async function(req, res){
  raceInstance.raceStart()
  res.json(raceInstance.listPodium)
})

app.get('/buscar/:nome', async function(req, res){
  await raceInstance.getRecordistas(req.params.nome)
  res.json(await raceInstance.result)
})

app.listen(3000, function(){
  console.log("Servidor rodando na porta 3000...")
})
