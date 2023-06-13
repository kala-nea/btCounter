// get things

// health displays
let hHP = document.getElementById("hHP");
let ctHP = document.getElementById("ctHP");
let ltHP = document.getElementById("ltHP");
let rtHP = document.getElementById("rtHP");
let laHP = document.getElementById("laHP");
let raHP = document.getElementById("raHP");
let llHP = document.getElementById("llHP");
let rlHP = document.getElementById("rlHP");

// health inputs
let hHPi = document.getElementById("hHPi").value;
let ctHPi = document.getElementById("ctHPi").value;
let ltHPi = document.getElementById("ltHPi").value;
let rtHPi = document.getElementById("rtHPi").value;
let laHPi = document.getElementById("laHPi").value;
let raHPi = document.getElementById("raHPi").value;
let llHPi = document.getElementById("llHPi").value;
let rlHPi = document.getElementById("rlHPi").value;

// buttons
let setHP = document.getElementById("hpSet");
let subGo = document.getElementById("subGo");
let rtbGo = document.getElementById("rtbGo");

// subtract inputs
let areaInput = document.getElementById("areaInput");
let damgeTaken = parseInt(document.getElementById("damgeTaken").value);

// rtb inputs
let moveInput = document.getElementById("moveInput");
let tmoveInput = parseInt(document.getElementById("tmoveInput").value);
let tmoveInput1 = document.getElementById("tmoveInput1");
let lwNum = parseInt(document.getElementById("lwNum").value);
let hwNum = parseInt(document.getElementById("hwNum").value);
let w1Num = parseInt(document.getElementById("w1Num").value);
let w2Num = document.getElementById("w2Num");
let pcCheck = document.getElementById("pcCheck");
let rangeInput = document.getElementById("rangeInput");
let mRange = parseInt(document.getElementById("mRange").value);
let tRange = parseInt(document.getElementById("tRange").value);


// set health

// function
function setHealth () {
    if (hHPi > 0) {
        hHP.textContent = hHPi;
    } else {
        hHP.textContent = "Destroyed";
    }
    
    if (ctHPi > 0) {
        ctHP.textContent = ctHPi;
    } else {
        ctHP.textContent = "Destroyed";
    }
    
    if (ltHPi > 0) {
        ltHP.textContent = ltHPi;
    } else {
        ltHP.textContent = "Destroyed";
    }
    
    if (rtHPi > 0) {
        rtHP.textContent = rtHPi;
    } else {
        rtHP.textContent = "Destroyed";
    }
    
    if (laHPi > 0) {
        laHP.textContent = laHPi;
    } else {
        laHP.textContent = "Destroyed";
    }
    
    if (raHPi > 0) {
        raHP.textContent = raHPi;
    } else {
        raHP.textContent = "Destroyed";
    }
    
    if (llHPi > 0) {
        llHP.textContent = llHPi;
    } else {
        llHP.textContent = "Destroyed";
    }
    
    if (rlHPi > 0) {
        rlHP.textContent = rlHPi;
    } else {
        rlHP.textContent = "Destroyed";
    }
}

// make button work
setHP.addEventListener("click", setHealth);


// subtract health

function subtract () {
    switch (areaInput.value) {
        case "0":
            hHPi -= damgeTaken;
            break;
        case "1":
            ctHPi -= damgeTaken;
            break;
        case "2":
            ltHPi -= damgeTaken;
            break;
        case "3":
            rtHPi -= damgeTaken;
            break;
        case "4":
            laHPi -= damgeTaken;
            break;
        case "5":
            raHPi -= damgeTaken;
            break;
        case "6":
            llHPi -= damgeTaken;
            break;
        case "7":
            rlHPi -= damgeTaken;
            break;
    }
    
    setHealth();
}

// make button work
subGo.addEventListener("click", subtract);


// rtb

// function
function getRTB () {
    let rtb = 0;
    console.log(rtb);

    switch (moveInput.value) {
        case "1":
            rtb += 1;
            break;
        case "2":
            rtb += 2;
            break;
        case "3":
            rtb += 3;
            break;
        case "4":
            rtb += 2;
            break;
    }
    console.log(rtb);

    if (tmoveInput >= 25) {
        rtb += 6;
    } else if (tmoveInput >= 18) {
        rtb += 5;
    } else if (tmoveInput >= 10) {
        rtb += 4;
    } else if (tmoveInput >= 7) {
        rtb += 3;
    } else if (tmoveInput >= 5) {
        rtb += 2;
    } else if (tmoveInput >= 3) {
        rtb += 1;
    }
    console.log(rtb);

    switch (tmoveInput1) {
        case "1":
            rtb += 1;
            break;
        case "2":
            rtb -= 4;
            break;
        case "3":
            rtb -= 2;
            break;
        case "4":
            rtb += 1;
    }
    console.log(rtb);

    rtb += lwNum;
    console.log(rtb);

    rtb += 2 * hwNum;
    console.log(rtb);

    rtb += w1Num;
    console.log(rtb);

    if (w2Num > 0) {
        rtb = 12;
    }
    console.log(rtb);

    if (pcCheck.value == true) {
        rtb += 1;
    }
    console.log(rtb);

    switch (rangeInput.value) {
        case "1":
            rtb += 2;
            break;
        case "2":
            rtb += 4;
            break;
        case "3":
            rtb += mRange - tRange + 1;
    }
    console.log(rtb);

    alert("You must roll a(n) " + rtb + " or higher");
}

rtbGo.addEventListener("click", getRTB);