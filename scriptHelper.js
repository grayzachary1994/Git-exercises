const { findByPlaceholderText } = require('@testing-library/dom');

// Write your helper functions here!
require('isomorphic-fetch');




function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
    
}

function validateInput(testInput) {
    if(testInput === ""){
        alert("All fields are required!");
        return "Empty";
    }
    else if(isNaN(Number(testInput))){
        return "Not a Number";
    }
    else if(!isNaN(Number(testInput))){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotNameInput = document.querySelector("input[name=pilotName");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    list.style.visibility = "hidden";

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if(fuelLevelInput.value<10000){
        fuelStatus.innerHTML = "Fuel level too low for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
        return;
    } else if(cargoMassInput.value>10000){
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
        return;
    } else{
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        launchStatus.innerHTML = "Shuttle Ready for Launch";
        launchStatus.style.color = "green";
        list.style.visibility = "visible";
        return list;
    }
}

async function myFetch() {
    let planetsReturned = [];

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()

});

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
    }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
