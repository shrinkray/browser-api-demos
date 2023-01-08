const click_me = document.getElementById('click_me');
const click_value = document.getElementById('click_value');
const change_me = document.getElementById('change_me');
const card = document.querySelector('.card');

console.log(typeof click_value.value) // returns string

// need to convert to number
let value = parseInt(click_value.value);
console.log("value", value)

click_me.addEventListener('click', () => {
    value += 1
    click_value.value = value
});

// shows input upon blur if the input has changed
change_me.addEventListener('change', () => {
    console.log("change", change_me.value)
});

// shows input after clicking outside of input
// (not reliant on change)
change_me.addEventListener('blur', () => {
    console.log("blur", change_me.value)
});

// shows changed input value by character
change_me.addEventListener('input', (event) => {
    console.log("input", event)
});

// shows input value before change (not usable for IE)
change_me.addEventListener('beforeinput', () => {
    console.log("beforeinput", change_me.value)
});

// composedPath() returns an array of the elements on which events were dispatched .. works on Firefox but not Chrome
card.addEventListener("click", (event) => { 
    console.log(event.composedPath);
});

/**
 * In the above example, the event is dispatched on the card element, What we find is the by clicking on the button element, it bubbles up to the parent card element and the console log shows us it's info, for what we've requested.
 */