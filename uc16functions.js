/**
 * Uses AJAX to query an internet data source for trivia questions and their answers
 * @param {string} answeId The element id that has the user's answer
 */

function findArrests(crimeId) {
    //answer from html textbox
    var crime_type = crimeId;
    console.log(crime_type);
    //now mak a HTTP request


    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
          if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful!
                displayNumber(this.responseText);
            } else if (this.status === 404){
                console.log("Successful Request!");
                //Answer is incorrect
                displayNumber('{"teams[0].Team" : "none"}')
            } else {
                console.log("We have a problem. Sever never responded")
            }
        } else {
            //Waiting for a response...
    }
};

    var url ="http://nflarrest.com/api/v1/crime/topTeams/" + crime_type;
    httpRequest.open("GET", url, true);
    httpRequest.send();



/**
 * Displays the number of arrests of an NFL given the JSON data
 * @param {string} data JSON data representing the number of arrests for given team
 */

function displayNumber(data){
    var teams = JSON.parse(data);
    if(teams[0].Team === "none") {
        document.getElementById("output").className = "alert alert-warning";
        document.getElementById("output").innerHTML = "No team matches your search."
    } else {
        document.getElementById("output").className = "alert alert-success";
        document.getElementById("output").innerHTML = "The " + teams[0].Team_city + " " + teams[0].Team_name + " has " + teams[0].arrest_count + " "+ crime_type + " arrests. The most of any NFL team.";
    }
}

}
