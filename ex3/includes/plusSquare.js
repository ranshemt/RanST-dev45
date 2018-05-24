window.onload=function(){
    var myPlus=document.getElementById("plus");
    var myMain=document.getElementById("MAIN");
    var inPoint = document.getElementById("insertionPoint"); 

    for(i=0; i<4;i++){
        addSquare();
    }

    myPlus.onclick = function (){
        addSquare();
    }

    function addSquare(){
        var sqr=document.createElement("div");
        myMain.insertBefore(sqr, inPoint);

        sqr.classList.add('box');
        sqr.style.opacity=Math.random();
    }
}