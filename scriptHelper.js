// Write your helper functions here!
require('isomorphic-fetch');

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
    let pilotName = document.querySelector("input[name=pilotName");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    if(pilotName===""){
        alert("All Fields are required!")
        event.preventDefault();
        return "Empty"
    }
    else if(copilotName ===""){
        alert("All Fields are required!")
        event.preventDefault();
        return "Empty"
    }
    else if(isNaN(fuelLevel)){
        alert("All Fields are required!")
        event.preventDefault();
        return "Not a Number"
    }
    else if(isNan(cargoMass)){
        alert("All Fields are required!")
        event.preventDefault();
        return "Not a Number"
    }
    else{
         return
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector("launchForm");
        form.addEventListener("submit", function(){

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
