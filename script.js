function calculate() {
    let hours = document.getElementById('PerDay').value;
    console.log(hours);
    let age = document.getElementById('age').value;
    console.log(age);
    let result = 80 - age;
    console.log(result);
    let sleepYears = (result * hours) / 24;
    console.log(sleepYears)
    return document.getElementById("result").innerHTML = sleepYears;
}