document.getElementById("QR code").onclick = function Generate_QR_code(){
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
