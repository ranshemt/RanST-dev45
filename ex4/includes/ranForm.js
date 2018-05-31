

window.onload = function(){
    var validBtn=document.getElementById("adrVailidate");
    validBtn.addEventListener("click", validateAdr);
   
    //disable submit button.
    var subBtn=document.getElementById("sub");
    subBtn.disabled=true;      //subBtn.setAttribute("disabled", "");
    updateSubBtnTxt();
}

function validateAdr() {
    var adrs=["Herzliya", "Tel - Aviv", "Haifa", "Jerusalem", "Ramat Gat"];
    var adr=document.getElementById("adrText");
    var subBtn=document.getElementById("sub");
    var feedback_h4=document.getElementById("errInPnt");

    //validate address
    for(var i=0; i<adrs.length; i++){
        if(adr.value == adrs[i]){
            //update flag
            subBtn.disabled=false;
            //print message
            var message="Address Validated to: ";
            message.concat(adrs[i]);
            feedback_h4.innerHTML = message;
            updateSubBtnTxt();
            return;
        }
    } //invalid address outside for

    //print message
    feedback_h4.innerHTML = "Invalid address. Retype & Vaildate again";
    updateSubBtnTxt();
}

function updateSubBtnTxt(){
    var subBtn=document.getElementById("sub");

     if(subBtn.disabled == true){
        subBtn.disabled=false;
        subBtn.setAttribute("value", "can't submit! fix address error");
        subBtn.disabled=true;
        //wait a moment
        //take user back to that place in the html page
    } else{
        subBtn.setAttribute("value", "Submit");
    }
}