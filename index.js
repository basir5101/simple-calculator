// select all button 
const buttons = document.querySelectorAll('button');

// select the display
const display = document.querySelector('.display');


// calculator function 
const calculator = event =>{
    //clicked the button 
    const clickButtonValue = event.target.value;
    if(clickButtonValue === '='){
        if(display.value !== ''){
            //calculate 
            display.value = eval(display.value);
        }
    }else if( clickButtonValue == 'C'){
        display.value = '';
    } else if(clickButtonValue === 'X'){
        display.value = display.value.slice(0, -1)
    }else{
        display.value += clickButtonValue;
    }
    
}

buttons.forEach(function(button){
    button.addEventListener('click', calculator);
})