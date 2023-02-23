const startButton = document.querySelector('#startButton');
const travelDistance = document.querySelector('#travelDistance');
const userName = document.querySelector('#userName');
const userAge = document.querySelector('#userAge');
const distancePrice = 0.21;
const userJuniorDiscount = 20;
const userSeniorDiscount = 40;
let userTravelPrice;
let ticketType;

startButton.addEventListener('click', function(){
    console.log(parseInt(travelDistance.value));
    console.log(userAge.value)
    console.log('pulsante premuto')

    userTravelPrice = parseInt(travelDistance.value) * distancePrice;
    console.log(`prezzo base: ${userTravelPrice}`);


    switch(userAge.value){
        case '1':
            console.log('maggiorenne');
            ticketType = 'Biglietto Standard';
            break;
        case '2':
            console.log('minorenne');
            userTravelPrice -= ((userTravelPrice * userJuniorDiscount) / 100);
            ticketType = 'Biglietto Junior';
            break;
        case '3':
            console.log('senior');
            userTravelPrice -= ((userTravelPrice * userSeniorDiscount) / 100);
            ticketType = 'Biglietto Senior';
            break;
    }

    const trainCarriage = Math.floor((Math.random() * 10)) + 1; // numeri casuali da 1 a 10
    const cpCode = Math.floor((Math.random() * 10000)) + 90000; // numeri casuali da 90000 a 99999

    console.log(`Il prezzo del biglietto è: ${userTravelPrice.toFixed(2)}€`);
    console.log(`La tariffa applicata è quella relativa a: ${ticketType}`);
    console.log(`La carrozza assegnata è la numero: ${trainCarriage}`);
    console.log(`Il codice CP assegnato è: ${cpCode}`)
});