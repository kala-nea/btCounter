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
let ammoAdd = document.getElementById("ammoAdd");
let lessAmmo = document.getElementById("lessAmmo");

// hp subtract inputs
let areaInput = document.getElementById("areaInput");
let damgeTaken = parseInt(document.getElementById("damgeTaken").value);

// ammo inputs
let ac2a = document.getElementById("ac2a");
let ac5a = document.getElementById("ac5a");
let ac10a = document.getElementById("ac10a");
let ac20a = document.getElementById("ac20a");
let mga = document.getElementById("mga");
let lrm5a = document.getElementById("lrm5a");
let lrm10a = document.getElementById("lrm10a");
let lrm15a = document.getElementById("lrm15a");
let lrm20a = document.getElementById("lrm20a");
let srm2a = document.getElementById("srm2a");
let srm4a = document.getElementById("srm4a");
let srm6a = document.getElementById("srm6a");

// ammo displays
let ac2i = document.getElementById("ac2i");
let ac5i = document.getElementById("ac5i");
let ac10i = document.getElementById("ac10i");
let ac20i = document.getElementById("ac20i");
let mgi = document.getElementById("mgi");
let lrm5i = document.getElementById("lrm5i");
let lrm10i = document.getElementById("lrm10i");
let lrm15i = document.getElementById("lrm15i");
let lrm20i = document.getElementById("lrm20i");
let srm2i = document.getElementById("srm2i");
let srm4i = document.getElementById("srm4i");
let srm6i = document.getElementById("srm6i");

// I goofed the ammo naming conventions X(

// ammo subtract inputs
let wfInput = document.getElementById("wfInput");
let afInput = document.getElementById("afInput");

// rtb inputs
let gsInput = parseInt(document.getElementById("gsInput").value);
let moveInput = document.getElementById("moveInput");
let tmoveInput = parseInt(document.getElementById("tmoveInput").value);
let tmTypeInput = document.getElementById("tmTypeInput");
let lwNum = parseInt(document.getElementById("lwNum").value);
let hwNum = parseInt(document.getElementById("hwNum").value);
let w1Num = parseInt(document.getElementById("w1Num").value);
let w2Num = document.getElementById("w2Num");
let pcCheck = document.getElementById("pcCheck");
let rangeInput = document.getElementById("rangeInput");
let mRange = parseInt(document.getElementById("mRange").value);
let tRange = parseInt(document.getElementById("tRange").value);

// rtb mods
let gsMod = document.getElementById("gsMod");
let amtMod = document.getElementById("amtMod");
let tmvMod = document.getElementById("tmvMod");
let tmtMod = document.getElementById("tmtMod");
let lwMod = document.getElementById("lwMod");
let hwMod = document.getElementById("hwMod");
let w1Mod = document.getElementById("w1Mod");
let pcMod = document.getElementById("pcMod");
let rMod = document.getElementById("rMod");


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


// ammo tracking

// function
function setAmmo () {
    if (ac2a > 0) {
        ac2i.textContent = ac2a;
    } else {
        ac2i.textContent = "Empty";
    }

    if (ac5a > 0) {
        ac5i.textContent = ac5a;
    } else {
        ac5i.textContent = "Empty";
    }

    if (ac10a > 0) {
        ac10i.textContent = ac10a;
    } else {
        ac10i.textContent = "Empty";
    }

    if (ac20a > 0) {
        ac20i.textContent = ac20a;
    } else {
        ac20i.textContent = "Empty";
    }

    if (mga > 0) {
        mgi.textContent = mga;
    } else {
        mgi.textContent = "Empty";
    }

    if (lrm5a > 0) {
        lrm5i.textContent = lrm5a;
    } else {
        lrm5i.textContent = "Empty";
    }

    if (lrm10a > 0) {
        lrm10i.textContent = lrm10a;
    } else {
        lrm10i.textContent = "Empty";
    }

    if (lrm15a > 0) {
        lrm15i.textContent = lrm15a;
    } else {
        lrm15i.textContent = "Empty";
    }

    if (lrm20a > 0) {
        lrm20i.textContent = lrm20a;
    } else {
        lrm20i.textContent = "Empty";
    }

    if (srm2a > 0) {
        srm2i.textContent = srm2a;
    } else {
        srm2i.textContent = "Empty";
    }

    if (srm4a > 0) {
        srm4i.textContent = srm4a;
    } else {
        srm4i.textContent = "Empty";
    }

    if (srm6a > 0) {
        srm6i.textContent = srm6a;
    } else {
        srm6i.textContent = "Empty";
    }
}

// make button work
ammoAdd.addEventListener("click", setAmmo);


// subtarct ammo (i did that one on purpose)
function subAmmo () {
    switch (wfInput.value) {
        case "0":
            ac2i -= parseInt(afInput.value);
            break;
        case "1":
            ac5i -= parseInt(afInput.value);
            break;
        case "2":
            ac10i -= parseInt(afInput.value);
            break;
        case "3":
            ac20i -= parseInt(afInput.value);
            break;
        case "4":
            mgi -= parseInt(afInput.value);
            break;
        case "5":
            lrm5i -= parseInt(afInput.value);
            break;
        case "6":
            lrm10i -= parseInt(afInput.value);
            break;
        case "7":
            lrm15i -= parseInt(afInput.value);
            break;
        case "8":
            lrm20i -= parseInt(afInput.value);
            break;
        case "9":
            srm2i -= parseInt(afInput.value);
            break;
        case "10":
            srm4i -= parseInt(afInput.value);
            break;
        case "11":
            srm6i -= parseInt(afInput.value);
            break;
    }

    setAmmo();
}

// button
lessAmmo.addEventListener("click", subAmmo);


// rtb

// function
function getRTB () {
    let rtb = 0;
    console.log(rtb);

    rtb += gsInput;
    gsMod.textContent = "+" + gsInput;
    console.log(rtb);

    switch (moveInput.value) {
        case "0":
            amtMod.textContent = "+0";
            break;
        case "1":
            rtb += 1;
            amtMod.textContent = "+1";
            break;
        case "2":
            rtb += 2;
            amtMod.textContent = "+2";
            break;
        case "3":
            rtb += 3;
            amtMod.textContent = "+3";
            break;
        case "4":
            rtb += 2;
            amtMod.textContent = "+2";
            break;
    }
    console.log(rtb);

    if (tmoveInput >= 25) {
        rtb += 6;
        tmvMod.textContent = "+6";
    } else if (tmoveInput >= 18) {
        rtb += 5;
        tmvMod.textContent = "+5";
    } else if (tmoveInput >= 10) {
        rtb += 4;
        tmvMod.textContent = "+4";
    } else if (tmoveInput >= 7) {
        rtb += 3;
        tmvMod.textContent = "+3";
    } else if (tmoveInput >= 5) {
        rtb += 2;
        tmvMod.textContent = "+2";
    } else if (tmoveInput >= 3) {
        rtb += 1;
        tmvMod.textContent = "+1";
    } else {
        tmvMod.textContent = "+0";
    }
    console.log(rtb);

    switch (tmTypeInput.value) {
        case "0":
            tmtMod.textContent = "+0";
            break;
        case "1":
            rtb += 1;
            tmtMod.textContent = "+1";
            break;
        case "2":
            rtb -= 4;
            tmtMod.textContent = "-4";
            break;
        case "3":
            rtb -= 2;
            tmtMod.textContent = "-2";
            break;
        case "4":
            rtb += 1;
            tmtMod.textContent = "+1";
            break;
    }
    console.log(rtb);

    rtb += lwNum;
    lwMod.textContent = "+" + lwNum;
    console.log(rtb);

    rtb += 2 * hwNum;
    hwMod.textContent = "+" + hwNum;
    console.log(rtb);

    rtb += w1Num;
    w1Mod.textContent = "+" + w1Num;
    console.log(rtb);

    if (w2Num > 0) {
        rtb = 12;
    }
    console.log(rtb);

    if (pcCheck.value == true) {
        rtb += 1;
        pcMod.textContent = "+1";
    } else {
        pcMod.textContent = "+0";
    }
    console.log(rtb);

    switch (rangeInput.value) {
        case "0":
            rMod.textContent = "+0";
            break;
        case "1":
            rtb += 2;
            rMod.textContent = "+2";
            break;
        case "2":
            rtb += 4;
            rMod.textContent = "+4";
            break;
        case "3":
            rtb += mRange - tRange + 1;
            rMod.textContent = "+6";
            break;
    }
    console.log(rtb);

    if (rtb <= 12) {
        alert("You can hit this 'Mech with a roll of " + rtb + " or higher");
    } else {
        alert("You cannot hit this 'Mech");
    }
}

rtbGo.addEventListener("click", getRTB);