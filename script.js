function changeSentence(){
    console.log(outputSentence(document.getElementById("textToChange").value));
    document.getElementById("textToChange").value = outputSentence(document.getElementById("textToChange").value);
    copy(document.getElementById("textToChange"));
}

function outputSentence(inputSentence){
    

    let senteceChanging = inputSentence.toUpperCase();
    senteceChanging = senteceChanging.replace(/U/g, "Ü");
    senteceChanging = senteceChanging.replace(/O/g, "0");
    senteceChanging = senteceChanging.replace(/I/g, "i");
    senteceChanging = senteceChanging.replace(/A/g, "4");
    senteceChanging = senteceChanging.replace(/E/g, "3");

    let random10 = Math.floor(Math.random() * 10);

    if (random10 < 3){
        let XD = "X";
        for (i=0; i < Math.floor(Math.random() * 7)+1; i++){
            XD=XD+"D";
        }
        senteceChanging = senteceChanging + " " + XD;
    }else if (random10 < 6){
        let HA = "";
        for (i=0; i < Math.floor(Math.random() * 7)+5; i++){
            if(Math.floor(Math.random() * 2) == 1){
                HA=HA+"A";
            }else{
                HA=HA+"H";
            }
        }
        senteceChanging = senteceChanging + " " + HA;
    }


    
    return(senteceChanging);
}

function copy(field) {
    
    var copyText = field;
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
}