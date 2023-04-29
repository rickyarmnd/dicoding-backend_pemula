class Tiger {

    constructor(){
        this.strength = Math.floor(Math.random() * 100 );
    }

    growl(){
        console.log('grrrrr!')
    }
}

module.exports = Tiger

// let model = new tiger()

// console.log(model)

// console.log(Math.random() * 100)