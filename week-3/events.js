//events
//event listening
//event handling - HTML elements (element.addEventListener('event', handlerFunction(){}))
document.getElementById('my-button').addEventListener('click', function() {
    alert('Button was clicked!');
});

function handleSubmit(){
            alert('you submitted your request');
            console.log('you submitted your request');
        
        
        }
document.getElementById('submit-btn').addEventListener('click', handleSubmit);

//event.clientX - returns the horizontal coordinate of the mouse pointer when the event was triggered
//event.clientY - returns the vertical coordinate of the mouse pointer when the event was triggered

document.addEventListener('click', function(event) {
    console.log('Mouse clicked at:', event.clientX, event.clientY);
});