

function resetDogsState(dogsObject){
    console.log('states reseted')
    const toChange = dogsObject
    toChange.dogs.forEach((dog)=>{
        if(dog.state !== 2){

            dog.state = 0
        }
    })

    return toChange

}

module.exports = resetDogsState