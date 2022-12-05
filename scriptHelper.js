// Write your helper functions here!
require('isomorphic-fetch');
let pilotNameInput = document.querySelector("input[name=pilotName");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === ""){
        alert("All fields are required!");
        return console.log("Empty");
    }
    else if(isNaN(testInput)){
        return console.log("Not a Number")
    }
    else if(!(isNan(testInput))){
        return console.log("Is a Number")
    }
}

console.log(validateInput("10"))
console.log(validateInput("ten"))
console.log(validateInput(""))
    
    
    
    
    
    /*if(pilotNameInput===""){
        alert("All Fields are required!")
        return "Empty"
    }
    else if(copilotNameInput ===""){
        alert("All Fields are required!")
        return "Empty"
    }
    else if(isNaN(fuelLevelInput)){
        alert("All Fields are required!")
        return "Not a Number"
    }
    else if(isNan(cargoMassInput)){
        alert("All Fields are required!")
        return "Not a Number"
    }
    else{
         return
    }
}*/


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilotNameInput.addEventListener('input',function(){
        pilotStatus.innerHTML = pilotNameInput.Value;
    })
    }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
