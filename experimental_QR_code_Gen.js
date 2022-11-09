    //function that makes the code
    function makeCode (user_name, presentation_name, session_id) {
        // sub function that makes randomNumbers
        let result = user_name.concat(presentation_name, session_id);
        // master hash to go off from
        // this is a sha 256 function from github
        async function sha256(message) {
          // encode as UTF-8
          const msgBuffer = new TextEncoder().encode(message);                    
          // hash the message
          const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
          // convert ArrayBuffer to Array
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          // convert bytes to hex string                  
          const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
          return hashHex;
          }
          var seed = sha256(result);
          new QRious({
            element: qrcodeContainer,
            value: seed
          });
      }
});
