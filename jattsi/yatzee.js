

var antSpillere = 0 // brukes hovedsakelig i funksjonen under, men opptrer andre seteder i koden. det er hvor mange spillere som spiller
function start() {
    /* funksjonen under skal gi spilleren en promt der en kan velge hvor mange spillere det skal være med i spillet
    man skal også kunne velge navn 
    */
    antSpillere = Number(prompt("antall spillere (maks 8)"));
    if (antSpillere == 1) {
        let navn1 = prompt("navnet ditt");
        person1.innerHTML = navn1;
    }

    else if (antSpillere == 2) {
        let navn1 = prompt("navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("navnet til spiller 2");
        person2.innerHTML = navn2;
    }

    else if (antSpillere == 3) {
        let navn1 = prompt("navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("navnet til spiller 2");
        person2.innerHTML = navn2;
        let navn3 = prompt("navnet til spiller 3");
        person3.innerHTML = navn3;
    }

    else if (antSpillere == 4) {
        let navn1 = prompt("navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("navnet til spiller 2");
        person2.innerHTML = navn2;
        let navn3 = prompt("navnet til spiller 3");
        person3.innerHTML = navn3;
        let navn4 = prompt("navnet til spiller 4");
        person4.innerHTML = navn4;
    }

    else if (antSpillere == 5) {
        let navn1 = prompt("navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("navnet til spiller 2");;
        person2.innerHTML = navn2;
        let navn3 = prompt("navnet til spiller 3");
        person3.innerHTML = navn3;
        let navn4 = prompt("navnet til spiller 4");
        person4.innerHTML = navn4;
        let navn5 = prompt("navnet til person 5");
        person5.innerHTML = navn5;
    }

    else if (antSpillere == 6) {
        let navn1 = prompt("navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("navnet til spiller 2");
        person2.innerHTML = navn2;
        let navn3 = prompt("navnet til spiller 3");
        person3.innerHTML = navn3;
        let navn4 = prompt("navnet til spiller 4");
        person4.innerHTML = navn4;
        let navn5 = prompt("navnet til person 5");
        person5.innerHTML = navn5;
        let navn6 = prompt("navnet til spiller 6");
        person6.innerHTML = navn6;
    }
    else if (antSpillere == 7) {
        let navn1 = prompt("navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("navnet til spiller 2");
        person2.innerHTML = navn2;
        let navn3 = prompt("navnet til spiller 3");
        person3.innerHTML = navn3;
        let navn4 = prompt("navnet til spiller 4");
        person4.innerHTML = navn4;
        let navn5 = prompt("navnet til person 5");
        person5.innerHTML = navn5;
        let navn6 = prompt("navnet til spiller 6");
        person6.innerHTML = navn6;
        let navn7 = prompt("navnet til spiller 7");
        person7.innerHTML = navn7;
    }
    else if (antSpillere == 8) {
        let navn1 = prompt("navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("navnet til spiller 2");
        person2.innerHTML = navn2;
        let navn3 = prompt("navnet til spiller 3");
        person3.innerHTML = navn3;
        let navn4 = prompt("navnet til spiller 4");
        person4.innerHTML = navn4;
        let navn5 = prompt("navnet til person 5");
        person5.innerHTML = navn5;
        let navn6 = prompt("navnet til spiller 6");
        person6.innerHTML = navn6;
        let navn7 = prompt("navnet til spiller 7");
        person7.innerHTML = navn7;
        let navn8 = prompt("navnet til spiller 8");
        person8.innerHTML = navn8;
    }



}




var sumEn = 0;// brukes i funksjonen sumerSummen som lagring for hvor mange poeng en har

var runde = 0; // denne variabelen brukes mange steder i koden. fungerer som rundene till spillet. når runde = 1 så er det spiller 1 sin tur osv osv

// denne funk bestemmer hvilken kolonne som ble klikket på 
var aktuelTag1 = document.getElementsByClassName("1");
var aktuelTag2 = document.getElementsByClassName("2");
var aktuelTag3 = document.getElementsByClassName("3");
var aktuelTag4 = document.getElementsByClassName("4");
var aktuelTag5 = document.getElementsByClassName("5");
var aktuelTag6 = document.getElementsByClassName("6");
var aktuelTag9= document.getElementsByClassName("9");
var aktuelTag10 = document.getElementsByClassName("10");
var aktuelTag11 = document.getElementsByClassName("11");
var aktuelTag12 = document.getElementsByClassName("12");
var aktuelTag13 = document.getElementsByClassName("13");
var aktuelTag14 = document.getElementsByClassName("14");
var aktuelTag15 = document.getElementsByClassName("15");
var aktuelTag16 = document.getElementsByClassName("16");
var aktuelTag17 = document.getElementsByClassName("17");
var aktuelTag18 = document.getElementsByClassName("18");

// daktuellTagSum er en array for sum kolonnen
var aktuelTagSum = document.getElementsByClassName("7");
var aktuelBonus= document.getElementsByClassName("8")
var aktuelTag = [aktuelTag1, aktuelTag2, aktuelTag3, aktuelTag4, aktuelTag5, aktuelTag6, aktuelTagSum, aktuelBonus, aktuelTag9, aktuelTag10, aktuelTag11, aktuelTag12, aktuelTag13, aktuelTag14, aktuelTag15, aktuelTag16, aktuelTag17, aktuelTag18];
    

// denn funksjonen skal fargelegge ruten med navnet til den spillerens som nå spiller
var PPerson1 = document.getElementById("person1")
var PPerson2 = document.getElementById("person2")
var PPerson3 = document.getElementById("person3")
var PPerson4 = document.getElementById("person4")
var PPerson5 = document.getElementById("person5")
var PPerson6 = document.getElementById("person6")
var PPerson7 = document.getElementById("person7")
var PPerson8 = document.getElementById("person8")
var Spillere = ["PPerson1", PPerson2, PPerson3, PPerson4, PPerson5, PPerson6, PPerson7, PPerson8];// denne funker ikke og gjør enn så lenge ingenting


function runder(){
    // denne funksjonen sørger for å markere hvilke kolonner som ikke brukes
    alert(PPerson3)
    Spillere[0].style.backgroundColor = "black";
    
};


function simpleTall(tall) {
    /* denne funksjonen sjekker om terningen har samme verdi som du spiller for (trykker du på enere ser den etter treere)
    derreter summerer den terningene og sender ut svaret til riktig rute ved bruk av arrayen aktuellTag som har alle 
    */
   sumEn = 0
    stopKast();
    sumEn = 0;
    if (tærningen1 == tall) {
        sumEn = sumEn + tærningen1;
    };
    if (tærningen2 == tall) {
        sumEn = sumEn + tærningen2;
    };
    if (tærningen3 == tall) {
        sumEn = sumEn + tærningen3;
    };
    if (tærningen4 == tall) {
        sumEn = sumEn + tærningen4;
    };
    if (tærningen5 == tall) {
        sumEn = sumEn + tærningen5;
    };
   
    
    aktuelTag[tall-1][runde - 1].innerHTML = sumEn;
    aktuelTag[6][runde].innerHTML = Number(sumerSummen(verdie));


};

var verdie = 0;
var verdie1 = 0;
var verdie2 = 0;
var verdie3 = 0;
var verdie4 = 0;
var verdie5 = 0;
var verdie6 = 0;
var verdie7 = 0;
var verdie8 = 0;

function sumerSummen() {
    // denne funksjonen legger sammen og lagrer poengene til de forksjellige spillerne, samt den leger til 50 bonuspoeng hvis en kommer seg ove 63 poeng
    if (runde == 1){
        verdie1 = verdie1 + sumEn;
        verdie = verdie1;
        if(verdie >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
    if (runde == 2){
        verdie2 = verdie2 + sumEn;
        verdie = verdie2;
        if(verdie >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
    if (runde == 3){
        verdie3 = verdie3 + sumEn;
        verdie = verdie3;
        if(verdie >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
    if (runde == 4){
        verdie4 = verdie4 + sumEn;
        verdie = verdie4;
        if(verdie >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
    if (runde == 5){
        verdie5 = verdie5 + sumEn;
        verdie = verdie5;
        if(verdie >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
    if (runde == 6){
        verdie6 = verdie6 + sumEn;
        verdie = verdie6;
        if(verdie >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
    if (runde == 7){
        verdie7 = verdie7 + sumEn;
        verdie = verdie7;
        if(verdie >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
    if (runde == 8){
        verdie8 = verdie8 + sumEn;
        verdie = verdie8;
        if(verdir >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50;
        };
        return verdie;
    };
};

var parAntall = 0;
function par1(){
    // denne funksjonen e
    stopKast();
    parAntall = 0;
    if(tærningen1 ==tærningen2||tærningen1 == tærningen3||tærningen1 == tærningen4||tærningen1 == tærningen5){
        parAntall = tærningen1 * 2;
    };
    if(tærningen2 ==tærningen3||tærningen2== tærningen4||tærningen2 == tærningen5) {
        parAntall = tærningen2 * 2;
    };
    if(tærningen3 == tærningen4||tærningen3 == tærningen5){
        parAntall = tærningen3 * 2;
    };
    if(tærningen4 == tærningen5){
        parAntall = tærningen4 * 2;
    };
    aktuelTag[8][runde-1].innerHTML = parAntall;

};

function resett() {
    // denne  funksjonen sørger for at spiller en kan spille igjenn etter nsiste spiller ( hvsi runde er større eller lik antall spillere, så¨skal runde bli 0)
    if (runde >= antSpillere) {
        runde=0;
    };
};
function stopKast() {
    //denne funksjonen legger till en verdi på runde ( brukes til å holde styr på hvilken spiller som nå spiller)
    // samt funksjonen sørger for at man bare kan kaste tærningene 3 ganger perr runde, og at de blir resatt etter hvert 3. kast. den resetter også hvor mange ganger en kan kaste mend kastnummer = 3
    runde++;
    document.getElementById("kast").disabled = false;
    kastNummer = 3;
    ikkBehold1();
    ikkBehold2();
    ikkBehold3();
    ikkBehold4();
    ikkBehold5();
    sumEn = 0;
    nummer1.innerHTML = "";
    nummer2.innerHTML = "";
    nummer3.innerHTML = "";
    nummer4.innerHTML = "";
    nummer5.innerHTML = "";
};
function startKast(){
    // denne funskjonen gjør kast knappen klikkelig igjenn
    document.getElementById("kast").disabled = true;
    
};
function kastalle() {
    // denne funskjonen aktiverer alle kast terningen funskjonene
    kastTerning1();
    kastTerning2();
    kastTerning3();
    kastTerning4();
    kastTerning5();
    kastNummer--;
    if (kastNummer == 0) {
        startKast();
    };
};


/* de neste fem funksjonene gjør det samme 
 funksjonene vil gi et tilfeldig tall mellom 1 og 6, deretter vil de vise dette tallet på hver sin terning*/
var tærningen1 = 0;
var tærningen2 = 0;
var tærningen3 = 0;
var tærningen4 = 0;
var tærningen5 = 0;



var kastNummer = 3; // kastnummer brukes som en lagring av anntall kast. brukes i funksjonene kastalle og stoppKast
var terning1 = false; // de neste setningenen brukes til å holde tærningene, slik at de ikke blir kastet, brukes i funskjonen beholdter
var terning2 = false;
var terning3 = false;
var terning4 = false;
var terning4 = false;
var terning5 = false;
let terning = [1, 2, 3, 4, 5, 6];

function kastTerning1() {
    if (terning1 == false) {
        let tilfeldig1 = terning[Math.floor(Math.random() * terning.length)];
        nummer1.innerHTML = tilfeldig1
        tærningen1 = tilfeldig1
    };
};

function kastTerning2() {
    if (terning2 == false) {
        let tilfeldig2 = terning[Math.floor(Math.random() * terning.length)];
        nummer2.innerHTML = tilfeldig2;
        tærningen2 = tilfeldig2;
    };
};

function kastTerning3() {
    if (terning3 == false) {
        let tilfeldig3 = terning[Math.floor(Math.random() * terning.length)];
        nummer3.innerHTML = tilfeldig3;
        tærningen3 = tilfeldig3;
    };
};

function kastTerning4() {
    if (terning4 == false) {
        let tilfeldig4 = terning[Math.floor(Math.random() * terning.length)];
        nummer4.innerHTML = tilfeldig4;
        tærningen4 = tilfeldig4;
    };
};

function kastTerning5() {
    if (terning5 == false) {
        let tilfeldig5 = terning[Math.floor(Math.random() * terning.length)];
        nummer5.innerHTML = tilfeldig5;
        tærningen5 = tilfeldig5;
    };
}

// de neste fem funksjonene gjør at hvis du dobbeltklikker på en terning så vil den ikke bli kastet på nytt
function beholdTer1() {
    terning1 = true;
};
function beholdTer2() {
    terning2 = true;
};
function beholdTer3() {
    terning3 = true;
};
function beholdTer4() {
    terning4 = true;
};
function beholdTer5() {
    terning5 = true;
};

/*de neste fem funksjonene gjør at hvis en dobbeltklikker på en terning som ikke vill bli kastet på nytt,
så vil den bli kastet igjenn */
function ikkBehold1() {
    terning1 = false;
};
function ikkBehold2() {
    terning2 = false;
};
function ikkBehold3() {
    terning3 = false;
};
function ikkBehold4() {
    terning4 = false;
};
function ikkBehold5() {
    terning5 = false;
};


