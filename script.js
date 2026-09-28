function searchFlights() {

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const passengers = document.getElementById("passengers").value;

    if (from === "" || to === "" || date === "") {
        alert("Please enter From, To and Departure Date.");
        return;
    }

    alert(
        "Searching flights...\n\n" +
        "From: " + from +
        "\nTo: " + to +
        "\nDate: " + date +
        "\nPassengers: " + passengers
    );
}

function bookFlight(airline) {

    alert(
        "Booking selected!\n\n" +
        "Airline: " + airline +
        "\n\nThank you for choosing SkyFly."
    );
}