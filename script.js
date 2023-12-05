// Import html tags

// check boxes
let communication = document.getElementById("a");
let SAT = document.getElementById("b");
let entertainment = document.getElementById("c");
let compSci = document.getElementById("d");
let BCA = document.getElementById("e");
let textbook = document.getElementById("f");
let math = document.getElementById("g");
let education = document.getElementById("h");
let robotics = document.getElementById("i");

// links
let schoology = document.getElementById("j");
let collegeboard = document.getElementById("k");
let powerschool = document.getElementById("l");
let outlook = document.getElementById("m");
let blinklearning = document.getElementById("n");
let pearsonbio = document.getElementById("o");
let khanacademy = document.getElementById("p");
let natgeo = document.getElementById("q");
let aldaily = document.getElementById("r");
let youtube = document.getElementById("s");
let webtoon = document.getElementById("t");
let bcadashboard = document.getElementById("u");
let turnitin = document.getElementById("v");
let yourbcabus = document.getElementById("w");
let desmos = document.getElementById("x");
let bcaathletics = document.getElementById("y");
let bcamainwebsite = document.getElementById("z");

communication.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'none';
        collegeboard.style.display = 'none';
        powerschool.style.display = 'inline-block';
        outlook.style.display = 'inline-block';
        blinklearning.style.display = 'none';
        pearsonbio.style.display = 'none';
        khanacademy.style.display = 'none';
        natgeo.style.display = 'inline-block';
        aldaily.style.display = 'inline-block';
        youtube.style.display = 'none';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'none';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

SAT.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'none';
        collegeboard.style.display = 'inline-block';
        powerschool.style.display = 'none';
        outlook.style.display = 'none';
        blinklearning.style.display = 'none';
        pearsonbio.style.display = 'none';
        khanacademy.style.display = 'inline-block';
        natgeo.style.display = 'inline-block';
        aldaily.style.display = 'inline-block';
        youtube.style.display = 'none';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'none';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

entertainment.addEventListener("change", function entertainment () {   
    if (this.checked) {
        warning();
        schoology.style.display = 'none';
        collegeboard.style.display = 'none';
        powerschool.style.display = 'none';
        outlook.style.display = 'none';
        blinklearning.style.display = 'none';
        pearsonbio.style.display = 'none';
        khanacademy.style.display = 'none';
        natgeo.style.display = 'none';
        aldaily.style.display = 'none';
        youtube.style.display = 'inline-block';
        webtoon.style.display = 'inline-block';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'none';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

compSci.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'inline-block';
        collegeboard.style.display = 'inline-block';
        powerschool.style.display = 'inline-block';
        outlook.style.display = 'none';
        blinklearning.style.display = 'none';
        pearsonbio.style.display = 'none';
        khanacademy.style.display = 'none';
        natgeo.style.display = 'none';
        aldaily.style.display = 'none';
        youtube.style.display = 'none';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'none';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

BCA.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'inline-block';
        collegeboard.style.display = 'inline-block';
        powerschool.style.display = 'inline-block';
        outlook.style.display = 'inline-block';
        blinklearning.style.display = 'none';
        pearsonbio.style.display = 'none';
        khanacademy.style.display = 'none';
        natgeo.style.display = 'none';
        aldaily.style.display = 'none';
        youtube.style.display = 'none';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'inline-block';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'inline-block';
        desmos.style.display = 'none';
        bcaathletics.style.display ='inline-block';
        bcamainwebsite.style.display = 'inline-block';     
    } else {
        displayAll();
    }   
});

textbook.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'inline-block';
        collegeboard.style.display = 'none';
        powerschool.style.display = 'none';
        outlook.style.display = 'none';
        blinklearning.style.display = 'inline-block';
        pearsonbio.style.display = 'inline-block';
        khanacademy.style.display = 'none';
        natgeo.style.display = 'none';
        aldaily.style.display = 'none';
        youtube.style.display = 'none';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'none';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

math.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'inline-block';
        collegeboard.style.display = 'inline-block';
        powerschool.style.display = 'inline-block';
        outlook.style.display = 'none';
        blinklearning.style.display = 'none';
        pearsonbio.style.display = 'none';
        khanacademy.style.display = 'inline-block';
        natgeo.style.display = 'none';
        aldaily.style.display = 'none';
        youtube.style.display = 'none';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'inline-block';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

education.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'inline-block';
        collegeboard.style.display = 'inline-block';
        powerschool.style.display = 'inline-block';
        outlook.style.display = 'inline-block';
        blinklearning.style.display = 'inline-block';
        pearsonbio.style.display = 'inline-block';
        khanacademy.style.display = 'inline-block';
        natgeo.style.display = 'inline-block';
        aldaily.style.display = 'inline-block';
        youtube.style.display = 'none';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'inline-block';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'inline-block';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

robotics.addEventListener("change", function () {   
    if (this.checked) {
        schoology.style.display = 'none';
        collegeboard.style.display = 'none';
        powerschool.style.display = 'none';
        outlook.style.display = 'inline-block';
        blinklearning.style.display = 'none';
        pearsonbio.style.display = 'none';
        khanacademy.style.display = 'none';
        natgeo.style.display = 'none';
        aldaily.style.display = 'none';
        youtube.style.display = 'inline-block';
        webtoon.style.display = 'none';
        bcadashboard.style.display = 'none';
        turnitin.style.display = 'none';
        yourbcabus.style.display = 'none';
        desmos.style.display = 'none';
        bcaathletics.style.display ='none';
        bcamainwebsite.style.display = 'none';     
    } else {
        displayAll();
    }   
});

function warning() {
    alert("Are you sure you want to proceed? Make sure you stay on task.");
}

function displayAll() {
    console.log("hi");
    schoology.style.display = 'inline-block';
    collegeboard.style.display = 'inline-block';
    powerschool.style.display = 'inline-block';
    outlook.style.display = 'inline-block';
    blinklearning.style.display = 'inline-block';
    pearsonbio.style.display = 'inline-block';
    khanacademy.style.display = 'inline-block';
    natgeo.style.display = 'inline-block';
    aldaily.style.display = 'inline-block';
    youtube.style.display = 'inline-block';
    webtoon.style.display = 'inline-block';
    bcadashboard.style.display = 'inline-block';
    turnitin.style.display = 'inline-block';
    yourbcabus.style.display = 'inline-block';
    desmos.style.display = 'inline-block';
    bcaathletics.style.display = 'inline-block';
    bcamainwebsite.style.display = 'inline-block';
}
