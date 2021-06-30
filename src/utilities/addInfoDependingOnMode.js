function addInfoDependingOnMode(dogData, state, isSameDay) {

    const dog = dogData;
    // console.log('dog', dog);

    const date = new Date();

    //State 0 didnt go, state 1 go and back ; state 2 kinder

    if (state === 0) {
        if (dog.state === 2) {
            console.log('hotel sale');
            dog.state = 0;
            dog.kindergarten.isIn = false;
            dog.kindergarten.dates[dog.kindergarten.dates.length - 1].dogExit = date;
        }
    }
    if (state === 2) {

        if (dog.state !== 2) {

            console.log('hotel entra');
            console.log(dog.name);
            dog.state = 2;
            dog.kindergarten.isIn = true;
            dog.mode = 2;
            dog.kindergarten.dates.push({dogEnter: date}, {dogExit: ''});
        }
        if (!isSameDay) {

            // if hotel or assist,


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
    }


    console.log('AFTER UPDATE ===============================');
    console.log(dog);

    return dog
}

module.exports = addInfoDependingOnMode