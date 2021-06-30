class Pokemon {
    static pokemons = []
  
    constructor(name, number, type, hp){
      this.name = name
      this.number = number
      this.type = type
      this.hp = hp
      this.constructor.pokemon.push(this)
    }
  
    static nameIsString(name) {
      if(typeof name === 'string'){
        return true
      } else {
        return false
      }
    }
  
    static numberIsTypeNumber(pokemonNumber) {
      if(typeof pokemonNumber === 'number')
        return true
     } else {
       return false
     }
    }
  
    static isValidType(type) {
      const elements = ['fire', 'water', 'electricity', 'earth']
      const result = elements.indexOf(type) 
      return (result != -1) true : false
    }
  
    static isValidHp(hp) {
      if(hp > 0) {
        return true
      } else{
        return false
      }
    }
  
  }
  
  const pokemon1 = new Pokemon('Picachu', 21, 'electricity', 200  )
  const pokemon2 = new Pokemon('Picachu', 21, 'electricity', 200  )
  const pokemon3
   = new Pokemon('Picachu', 21, 'electricity', 200  )
  
  
  
  
  
  Pokemon.nameIsString(1234)
  Pokemon.numberIsType(1234)
  Pokemon.numberIsValid(1234)
  