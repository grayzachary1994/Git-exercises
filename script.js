
// Write your JavaScript code here!
window.addEventListener("load", function() {

    let form = document.querySelector("form")
    let pilotNameInput = document.querySelector("input[name=pilotName");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let list = document.querySelector("div[id=faultyItems]");
    list.style.visibility = "hidden";


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets)
       console.log(pickedPlanet);
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })
   
form.addEventListener("submit", function(event){
    let document = window.document
    if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput === "" || cargoMassInput === ""){
        alert("All Fields are required.");
        event.preventDefault();
        return
    }
    else if(validateInput(pilotNameInput.value) === "Is a Number"){
        alert("Please Enter a valid name.");
        event.preventDefault();
        return
    }
    else if(validateInput(copilotNameInput.value) === "Is a Number"){
        alert("Please Enter a valid name.");
        event.preventDefault();
        return
    }   
    else if(validateInput(fuelLevelInput.value) === "Not a Number"){
        alert("Please enter a valid number.");
        event.preventDefault();
        return
    }
    else if(validateInput(cargoMassInput.value) === "Not a Number"){
        alert("Please enter a valid number.");
        event.preventDefault();
        return
    }
    else{
        let pilotStatus = document.querySelector("li[id=pilotStatus]");
        let copilotStatus = document.querySelector("li[id=copilotStatus]");
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        event.preventDefault();   
        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        event.preventDefault();   

    }
        
})


});
