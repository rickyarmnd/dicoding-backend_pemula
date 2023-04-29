
const Tiger = require('./tiger')
const Wolf = require('./wolf')

const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return
    }   
    if (wolf.strength > tiger.strength){
        wolf.howl();
        return
    }

    console.log ('Memiliki Kekuatan Yang Sama')
}

const tiger = new Tiger()
const wolf = new Wolf()

fighting(tiger,wolf)