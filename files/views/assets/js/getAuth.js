function getAuth() {
       var bytes = Crypto.charenc.Binary.stringToBytes('asap:manageit');
       var base64 = Crypto.util.bytesToBase64(bytes);
       return "Basic " + base64;
    }