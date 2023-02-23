const startButton = document.querySelector('#startButton');
const travelDistance = document.querySelector('#travelDistance');
const userName = document.querySelector('#userName');
const userAge = document.querySelector('#userAge');
const distancePrice = 0.21;


startButton.addEventListener('click', function(){
    console.log(parseInt(travelDistance.value));
    console.log(userAge.value)
    console.log('pulsante premuto')
    switch(userAge.value){
        case '1':
            console.log('maggiorenne');
            break;
        case '2':
            console.log('minorenne');
            break;
        case '3':
            console.log('senior');
            break;
    }

});