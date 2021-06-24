Webcam.set({
    width:350, 
    height: 300,
    image_format: 'png',
    png_quality: 90
}); 

camera = document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerhtml = '<img id="capture_img" src="' + data_uri + '">'
    });
}

console.log('Ml5_version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DWXSosiPG/model.json",Model_loaded);

function Model_loaded(){
    console.log("teachable machine has been initialized")
}

function speak() {
    var synth = window.speechSynthesis;
    speak_1 = "First Prediction is " + prediction_1;
    speak_2 = " And the second Prediction is " + prediction_2;
var utterthis = new SpeechSynthesisUtterance(speak_1 + speak_2)
synth.speak(utterthis);
}