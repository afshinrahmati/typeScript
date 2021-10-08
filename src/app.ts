interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse'
  runnigSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed

  switch (animal.type) {
    case 'bird':
      speed = animal.type
      console.log(`${animal.flyingSpeed} id Bird`)
      break
    case 'horse':
      speed = animal.type
      console.log(`${animal.runnigSpeed} id Horse`)
      break
    default:
      console.log('Dont exit')
      break
  }

  console.log(`${speed} is winner`)
}
moveAnimal({ type: 'bird', flyingSpeed: 20 })

const paragraph = document.querySelector('p')
