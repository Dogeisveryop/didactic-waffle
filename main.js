Status ="";
object=[];


function setup() {
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    Objectdetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("do").innerHTML="Detecting Objects";
}

function draw() {
    
    image(video,0,0,480,380);

    if (Status !="") {
        Objectdetector.detect(video,gotresults);

        for ( i = 0; i < object.length; i++) {
      document.getElementById("do").innerHTML=" Objects Detected";
      document.getElementById("bf").innerHTML=" Baby detected " ; 
      
      fill("Red");
      percent = floor(object[i].confidence*100);
      text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
      noFill();
      stroke("black");
      rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    } 
}

function modelloaded() {
    console.log("Modelloaded");
    Status = true;
}

function gotresults(error,results) {
    if (error) {
        console.log(error);
    } 
    console.log(results);
    object = results;
}