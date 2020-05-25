// //challenge 1: your age in days
// function ageinDays()
// {
// var birthyear = prompt('whats your birth year');
// var ageinDayss = (2020 - birthyear)*365;
//  var h1 = document.createElement('h1');
//  var textarea = document.createTextNode("You are " + ageinDayss + "Days old");
// h1.setAttribute("id", "ageinDays");
// h1.appendChild(textarea);
// document.getElementById('flex-box-result').appendChild(h1);
// console.log(ageinDayss);
// }

// function reset(){

//     //document.getElementById('flex-box-result').innerHTML = "";
//     //or
//     document.getElementById('ageinDays').remove();
// }

function generateCat() {

    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}