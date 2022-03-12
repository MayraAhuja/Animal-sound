function startApp() {
    navigator.mediaDevices.getUserMedia({audio:true});
myModel=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7QEpy5soU/model.json", modelLoaded);
}

function modelLoaded() {
    console.log("Model is loaded")
    myModel.classify(getResult);
}

function getResult(errorsArray, reasultsArray) {
    console.log("We got  the results!!!!!!!!!!!");
}