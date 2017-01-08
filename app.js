document.getElementById('heading').innerHTML = localStorage['title'] || 'Just Write'; // default text
document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second :) ';

setInterval(function() { //function that is saving the innerHTML of the div
    localStorage['title'] = document.getElementById('heading').innerHTML;
    localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);
