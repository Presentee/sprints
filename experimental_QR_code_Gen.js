// this is a further dev of the stable version on the main branch uploaded by me. In this one I am trying to get a aysnc await server to client system working
let QR;
let UID;
let type;

const QR_button = document.querySelector("#QR_Button");

// add the server connection , to obtain QR code using async awaits
function Request_QR() {
  fetch("/QR", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title: "Request_QR",
        body: "Type : " + type,
        userId: UID
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
  

  intervalId = setInterval(wait_time, 800);
}


// potentially used by the server side
function Generate_QR_code(){
    //new var that is of type qr code
    var qrcode = new QRCode("qrcode");
    //function that makes the code
    function makeCode () {
        // sub function that makes randomNumbers
        function randomNumber(len) {
        var randomNumber;
        var n = '';
        // for loop in range of count
        for(var count = 0; count < len; count++) {
        //floor the random number and times 10
            randomNumber = Math.floor(Math.random() * 10);
            //concatenate the strings to get the final random number
            n += randomNumber.toString();
        }
        //return the random number
        return n;
    }
    // gives the length of random number here
    var value = randomNumber(// in put the length here);
        var elText = value;
        // this part generates the actual qr code
        qrcode.makeCode(elText);
    }
    makeCode();
});
