
function init() {
    let rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.marginLeft = '0px';
    rocket.style.marginTop = '0px';
    for (button of ['takeoff', 'landing', 'missionAbort']) {
        document.getElementById(button).addEventListener("click", executeSpecificAction);
    }
    for (moveButton of ['up', 'down', 'right', 'left']) {
        document.getElementById(moveButton).addEventListener("click", moveRocket);
    }
}

function executeSpecificAction(event) {
    let response;
    responseObject = {
        takeoff: {
            flightStatus: "Shuttle in flight.",
            shuttleBackground: "blue",
            shuttleHeigth: String(10000)},
        landing: {
            flightStatus: "The shuttle has landed.",
            shuttleBackground: "green",
            shuttleHeigth: String(0)},
        missionAbort: {
            flightStatus: "Mission aborted.",
            shuttleBackground: "green",
            shuttleHeigth: String(0)},
    }

    if (event.target.id === "takeoff"){
        response = confirm("Confirm that the shuttle is ready for takeoff.");
    } else if (event.target.id === "landing") {
        alert("The shuttle is landing. Landing gear engaged.");
        response = true;
    } else if (event.target.id === "missionAbort") {
        response = confirm("Confirm that you want to abort the mission.");
    }
    if (response) {
        document.getElementById("flightStatus").innerHTML = responseObject[event.target.id]['flightStatus'];
        document.getElementById("shuttleBackground").style.backgroundColor = responseObject[event.target.id]['shuttleBackground'];
        document.getElementById("spaceShuttleHeight").innerHTML = responseObject[event.target.id]['shuttleHeigth'];
    }
}

function moveRocket(event) {
    let buttonPressed = event.target.id;
    let rocket = document.getElementById('rocket');
    
    let num = Number(rocket.style.marginTop.slice(0, rocket.style.marginTop.indexOf('px')));
    let shuttleHeigth = document.getElementById("spaceShuttleHeight");
    rocket.style.marginTop = (buttonPressed === "up") ? `${num - 10}px` : (buttonPressed === "down") ? `${num + 10}px` : rocket.style.marginTop;
    let tmp = (buttonPressed === "up") ? 10000 : (buttonPressed === "down") ? -10000 : 0;
    shuttleHeigth.innerHTML = String(Number(shuttleHeigth.innerHTML)+tmp)

    num = Number(rocket.style.marginLeft.slice(0, rocket.style.marginLeft.indexOf('px')));
    rocket.style.marginLeft = (buttonPressed === "right") ? `${num + 10}px` : (buttonPressed === "left") ? `${num - 10}px` : rocket.style.marginLeft ;
}

window.addEventListener("load", function() {
    console.log('window loaded');
});

window.onload = init;
