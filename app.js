function ageIndays() {
    var birthYear = prompt("which year you born");
    var ageIndayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textaAnswer = document.createTextNode('you are' + ageIndayss + 'days in old');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textaAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    console.log(ageIndayss);

}

function reset() {
    document.getElementById("ageIndays").remove();

}