function calculate() {
    let hours = document.getElementById('perDay').value;
    
    let age = document.getElementById('age').value;
    
    let result = 80 - age;
    
    let sleepYear = (result * hours) / 24;

    return document.getElementById("result").innerHTML =(sleepYear.toFixed(2) + " anos");
} 