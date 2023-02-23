const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const ticketDiscount = document.querySelector('#ticketDiscount');
const ticketCarriage = document.querySelector('#ticketCarriage');
const ticketCP = document.querySelector('#ticketCP');
const ticketPrice = document.querySelector('#ticketPrice');
const nameSlot = document.querySelector('#nameSlot');
const ticketSlot = document.querySelector('#ticketSlot')
const ticketError = document.querySelector('#ticketError')
const ticketInfoSlot = document.querySelector('#ticketInfoSlot')
let travelDistance = document.querySelector('#travelDistance');
let userName = document.querySelector('#userName');
let userAge = document.querySelector('#userAge');
const distancePrice = 0.21;
const userJuniorDiscount = 20;
const userSeniorDiscount = 40;
let userTravelPrice;
let ticketType;

startButton.addEventListener('click', function(){

    //Pulizia preventiva di ticketSlot
    
    ticketSlot.classList.add('d-none');
    ticketSlot.classList.remove('d-block');
    ticketError.classList.add('d-none');
    ticketError.classList.remove('d-block');
    ticketSlot.classList.add('d-none');
    ticketSlot.classList.remove('d-block');
    ticketInfoSlot.classList.add('d-none');
    ticketInfoSlot.classList.remove('d-block');

    console.log(parseInt(travelDistance.value));
    console.log(userAge.value);
    console.log('pulsante premuto');

    userTravelPrice = parseInt(travelDistance.value) * distancePrice;
    console.log(`prezzo base: ${userTravelPrice}`);
    console.log(userName.value);
    console.log(parseInt(travelDistance.value))
    
    if(!userName.value || !travelDistance.value || isNaN(parseInt(travelDistance.value)) || userAge.value == 0){
        console.log('Non sono stati compilati tutti i campi del form oppure alcuni dei dati inseriti potrebbero non essere considerati validi');
        ticketSlot.classList.remove('d-none');
        ticketSlot.classList.add('d-block');
        ticketError.classList.remove('d-none');
        ticketError.classList.add('d-block');
    } else {
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
        console.log(`Il codice CP assegnato è: ${cpCode}`);


        ticketDiscount.innerHTML = ticketType;
        ticketCarriage.innerHTML = trainCarriage;
        ticketCP.innerHTML = cpCode;
        ticketPrice.innerHTML = userTravelPrice.toFixed(2) + '€';
        nameSlot.innerHTML = userName.value;
        ticketSlot.classList.remove('d-none');
        ticketSlot.classList.add('d-block');
        ticketInfoSlot.classList.remove('d-none');
        ticketInfoSlot.classList.add('d-block');


    }
});

resetButton.addEventListener('click', function(){
    console.log('reset');
    userName.value = '';
    userAge.value = 0;
    travelDistance.value = '';
    ticketSlot.classList.add('d-none');
    ticketSlot.classList.remove('d-block');
    ticketError.classList.add('d-none');
    ticketError.classList.remove('d-block');
    ticketSlot.classList.add('d-none');
    ticketSlot.classList.remove('d-block');
    ticketInfoSlot.classList.add('d-none');
    ticketInfoSlot.classList.remove('d-block');
})

