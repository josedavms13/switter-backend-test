

function checkIfSameDay(date){

    const currentDate = new Date().toDateString();

    if(date===currentDate){
        console.log('the same day');
        return true
    }else{
        console.log('new day');
    }


    console.log('Date Sat Up')

    return date===currentDate;
}


module.exports = checkIfSameDay