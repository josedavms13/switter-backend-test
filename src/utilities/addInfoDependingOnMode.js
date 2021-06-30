

function addInfoDependingOnMode(dog, state){

    // console.log('dog', dog);


    //State 0 didnt go, state 1 go and back ; state 3 kinder


    const date = new Date;


    // if hotel or assist,
    if(state !== 0){

        if(state === 2){

            console.log('hotel');
            dog.state = 2;

        }else{
            console.log('not hotel')
            switch(dog.mode){
                case 0:
                    console.log('training');
                    console.log(dog.name);



                    break
                case 1:
                    console.log('recreation');
                    console.log(dog.name);


                    break
                default:
                    console.log('recreation')
                    break
            }
        }




    }





    console.log(dog);

}

module.exports = addInfoDependingOnMode