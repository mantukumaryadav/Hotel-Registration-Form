function BookClick(){
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblDate").innerHTML = document.getElementById("date").value;
    document.getElementById("lblDays").innerHTML = document.getElementById("day").value;
    document.getElementById("lblPersons").innerHTML = document.getElementById("person").value;

    var days = parseInt(document.getElementById("day").value);
    var persons = parseInt(document.getElementById("person").value);

    var roomType = "";
    var roomCost = 0;

    var amenity = "";
    var amenityCost = 0;

    var total = 0;

    var optDelux = document.getElementById("optDelux");
    var optSuite = document.getElementById("optSuite");
    var roomPic = document.getElementById("roomPic");

     if (optDelux.checked) {
        roomPic.src = "Images/deluxe1.jpg";
        roomType = optDelux.value;
        roomCost = 3000;
    }
    if (optSuite.checked) {
        roomPic.src = "Images/suite.jpg";
        roomType = optSuite.value;
        roomCost = 5000;
    }

    var optAc = document.getElementById("optAc");
    var optSafelock = document.getElementById("optSafelock");

    if (optAc.checked) {
        amenity += optAc.value + "<br>";
        amenityCost = 1000;
        roomCost += amenityCost;
    }
    if (optSafelock.checked) {
        amenity += optSafelock.value + "<br>";
        amenityCost = 300;
        roomCost += amenityCost;
    }

    total = roomCost * days;
    if(persons > 2){
        total = (total + 1000) * (persons - 2);
    }
    var advanceamt = document.getElementById("advanceamt").value;
    document.getElementById("lblRoom").innerHTML = roomType;
    document.getElementById("lblAmenity").innerHTML = amenity;
    document.getElementById("lblAdvance").innerHTML = advanceamt;
    document.getElementById("lblBalance").innerHTML = total - advanceamt;
}