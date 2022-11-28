let celsius = document.getElementById('celsius');
let Fahrenheit = document.getElementById('Fahrenheit');
celsius.oninput = function(){
    let f= (parseFloat(celsius.value)*9)/5+32;
    Fahrenheit.value = parseFloat(f.toFixed(2));
}
Fahrenheit.oninput = function(){
    let c=((parseFloat(Fahrenheit.value)-32)*5)/9;
    celsius.value = parseFloat(c.toFixed(2));
}