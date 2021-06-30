

function addInfoDependingOnMode(dogData, state, isSameDay){

    const dog = dogData;
    // console.log('dog', dog);

    const date = new Date();

    //State 0 didnt go, state 1 go and back ; state 2 kinder

    // if(!isSameDay){

            // if hotel or assist,
            if (state === 2) {

                console.log('hotel');
                console.log(dog.name);
                dog.state = 2;
                dog.kindergarten.isIn = true;
                dog.mode = 2;

            } else {
                console.log('not hotel')
                // Mode 0 = training; Mode 1 = Recreation;
                dog.state = 1

                switch (dog.mode) {
                    case 0:
                        console.log('training');
                        console.log(dog.name);
                        dog.training.daysAmount += 1;
                        dog.training.dates.push(`${date.toDateString()} ${date.toTimeString()}`);

                        break
                    case 1:
                        console.log('recreation');
                        console.log(dog.name);
                        dog.recreations.daysAmount += 1;
                        dog.recreations.dates.push(`${date.toDateString()} ${date.toTimeString()}`);


                        break
                    default:
                        console.log('recreation')
                        console.log(dog.name);
                        dog.recreations.daysAmount += 1;
                        dog.recreations.dates.push(`${date.toDateString()} ${date.toTimeString()}`);

                        break
                }
            }
    // }








    console.log('AFTER UPDATE ===============================');
    console.log(dog);

    return dog
}

module.exports = addInfoDependingOnMode