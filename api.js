let pos = []
let servidorOnline = true;

export const finished = (racer) => {
  return new Promise((resolve, reject) => {
      if (!servidorOnline) reject('OFF')
      pos.push(racer)
      resolve(pos) 
  })
}

export const record = () => {
  return new Promise((resolve, reject) => {
      if (!servidorOnline) reject('OFF')
      resolve(pos[0])
  })
}
