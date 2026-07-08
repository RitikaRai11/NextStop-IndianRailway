// TRAIN DATABASE (You can add more!)
let trains = {
    12951: { name: "Mumbai Rajdhani Express", route: "New Delhi → Mumbai", days: "Runs Daily" },
    12009: { name: "Shatabdi Express", route: "Mumbai → Ahmedabad", days: "Mon–Sat" },
    12290: { name: "Duronto Express", route: "Mumbai → Nagpur", days: "Tue–Fri" },
    22436: { name: "Vande Bharat Express", route: "Delhi → Katra", days: "Daily" }
};


// SHOW INFO BOX
function showInfo(name, route, days) {
    let box = document.getElementById("trainInfoBox");
    box.style.display = "block";
    box.innerHTML = `
        <h3>${name}</h3>
        <p>Route: ${route}</p>
        <p>Running Days: ${days}</p>
    `;
}


// SEARCH TRAIN
function searchTrain() {
    let num = document.getElementById("searchInput").value;
    let result = document.getElementById("searchResult");

    if (trains[num]) {
        result.innerHTML = `
            <b>Train Found:</b><br>
            Name: ${trains[num].name}<br>
            Route: ${trains[num].route}<br>
            Days: ${trains[num].days}
        `;
    } else {
        result.innerHTML = "❌ Train Not Found!";
    }
}


// FARE CALCULATOR
function calculateFare() {
    let km = parseInt(document.getElementById("distance").value);
    let type = parseInt(document.getElementById("classType").value);

    if (!km) {
        document.getElementById("fareResult").innerHTML = "Enter valid distance!";
        return;
    }

    let cost = km * type;

    document.getElementById("fareResult").innerHTML =
        `Estimated Fare: <b>₹${cost}</b>`;
}


// RANDOM PNR
function generatePNR() {
    let pnr = Math.floor(1000000000 + Math.random() * 9000000000);
    document.getElementById("pnrBox").innerHTML = `
        Your PNR: <b>${pnr}</b><br>
        Status: <b>CONFIRMED</b> (Demo)
    `;
}