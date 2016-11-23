var hytteindex    = 0;
var today         = new Date();
var todayFormat   = formatDate(today)

var timepris      = [45,    55,    70,    40,    60,    75,    50,    65,    80];
var dognpris      = [685,   790,   905,   640,   780,   895,   690,   890,   1025];
var soverom       = [2,     2,     3,     2,     2,     3,     2,     3,     4];
var senger        = [4,     6,     8,     4,     5,     7,     5,     8,     12];
var harVann       = [false, true,  true,  true,  true,  true,  false, false, true];
var harStrom      = [false, true,  true,  false, true,  true,  false, true,  true];
var harUtedo      = [true,  false, false, false, false, false, true,  true,  false];
var harWifi       = [false, false, true,  false, false, true,  false, true,  true];
var harBat        = [false, false, false, false, true,  true,  false, false, false];
var bilder        = ["månetoppen.jpg", "tiurtoppen_stue.jpg", "fjell.jpg",
                     "fjordgløtt.jpg", "lykkeli.jpg", "nettbua.jpg",
                     "bjørnehiet.jpg", "furubo.jpg", "trollstua_stue.jpg"];

var arrivalDate   = today;
var departureDate = today;

var antallDager   = 1;
var antallTimer   = 0;
var vaskepris     = 500;
var medlemsrabatt = 0.15;
var totalpris     = 0;



updatePriceForOneDayStay(0);


var arrival = document.getElementById("arrival");
var departure = document.getElementById("departure");

arrival.setAttribute("min", todayFormat);
arrival.value = todayFormat;
departure.value = todayFormat;
updateDeparturePicker(arrivalDate);
updateForm();

function updateDeparturePicker(newArrivalDate) {
    // set the min date of departure to the same date as arrival
    var departureInput = document.getElementById("departure");
    departureInput.value = document.getElementById("arrival").value;
    departureInput.setAttribute("min", formatDate(newArrivalDate));
    // add 14 days
    newArrivalDate.setDate(newArrivalDate.getDate() + 14);
    // et the max date of departure to a forthnight after arrival.
    departureInput.setAttribute("max", formatDate(newArrivalDate));
}

// creates a string format that the html date input type can use from a javascript date datatype.
function formatDate(theDate) {
    var dd = theDate.getDate();
    var mm = theDate.getMonth()+1; //January is 0!
    var yyyy = theDate.getFullYear();
    // add leading zeroes to date and month as the html date input type will act in unexpected
    // ways if it is not there. At the very least, I could not get max date to work
    // properly in at least one case (the date of making this), without this part.
    dd = (dd<10 ? '0'+dd: dd)
    mm = (mm<10 ? '0'+mm: mm)
    theDate = yyyy+'-'+mm+'-'+dd;
    return theDate;
}

function updatePriceForOneDayStay(index) {
    antallTimer = document.getElementById("antall-timer").value;
    document.getElementById("timepris").innerHTML = timepris[index];
    document.getElementById("total-timepris").innerHTML = timepris[index] * antallTimer;
    updateTotal();
}

function updateForm() {
    var hytteliste = document.getElementById("hytteliste");
    hytteindex = parseInt(hytteliste.selectedIndex);
    updatePriceForOneDayStay(hytteindex);
    document.getElementById("bestillingsbilde") .setAttribute("src", "./images/hyttebilder/" + bilder[hytteindex]);
    document.getElementById("output-timepris")  .innerHTML = timepris[hytteindex];
    document.getElementById("output-døgnpris")  .innerHTML = dognpris[hytteindex];
    document.getElementById("output-soverom")   .innerHTML = soverom[hytteindex];
    document.getElementById("output-senger")    .innerHTML = senger[hytteindex];
    document.getElementById("output-vann")      .innerHTML = harVann[hytteindex]   ? "Ja": "Nei";
    document.getElementById("output-strøm")     .innerHTML = harStrom[hytteindex]  ? "Ja": "Nei";
    document.getElementById("output-utedo")     .innerHTML = harUtedo[hytteindex]  ? "Ja": "Nei";
    document.getElementById("output-wifi")      .innerHTML = harWifi[hytteindex]   ? "Ja": "Nei";
    document.getElementById("output-båt")       .innerHTML = harBat[hytteindex]    ? "Ja": "Nei";

}

function updateTotal() {
    if (antallDager == 1) {
        totalpris = timepris[hytteindex]*antallTimer;
    } else {
        totalpris = Math.abs(dognpris[hytteindex]*(antallDager - 1));
    }
    if (document.getElementById("vaskesjekk").checked){
        totalpris+=vaskepris;
    }
    if (document.getElementById("tf-medlem").checked){
        totalpris-=(totalpris*medlemsrabatt);
    }
    document.getElementById("totalpris").innerHTML = totalpris;
}

function calculateDays(first, second) {
    var msDay = 24*60*60*1000;
    var days = Math.round((second.getTime() - first.getTime())/(msDay));
    return days + 1;
}

$(document).ready(function() {
    toggleBoatVisibility();

    $("#arrival").change(function() {
        setHourlyPriceVisibility();

        arrivalDate = new Date(document.getElementById("arrival").value);
        departureDate = arrivalDate;

        updateDeparturePicker(arrivalDate);
        antallDager = calculateDays(arrivalDate, departureDate);

        updateForm();
        updateTotal();
        setHourlyPriceVisibility();
    });

    $("#hytteliste").change(function() {
        toggleBoatVisibility();
    });

    function toggleBoatVisibility() {
        if (hytteindex >= 3 && hytteindex <= 5) {
            $("#rowboat").show();
        } else {
            $("#rowboat").hide();
        }
    }

    $("#departure").change(function() {
        setHourlyPriceVisibility();

        arrivalDate = new Date(document.getElementById("arrival").value);
        departureDate = new Date(document.getElementById("departure").value);

        antallDager = calculateDays(arrivalDate, departureDate);

        updateForm();
        updateTotal();
    });

    $("#vaskesjekk").click(function(){
        updateTotal();
    });

    $("#tf-medlem").click(function(){
        updateTotal();
    });

    $("#lestBrukeravtale").click(function() {
        if (document.getElementById("lestBrukeravtale").checked) {
            $("#bestillingsKnapp").removeAttr("disabled");
        } else {
            $("#bestillingsKnapp").attr("disabled", "disabled");
        }
    })

    function setHourlyPriceVisibility() {
        if ($("#arrival").val() == $("#departure").val()) {
            $("#timeteller").show();
            $("#antall-timer").prop("disabled", false);
        } else {
            $("#timeteller").hide();
            $("#antall-timer").prop("disabled", true);
        }
    }
});