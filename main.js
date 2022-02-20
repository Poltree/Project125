NoseX=""
NoseY=""
RightWristX=""
LeftWristX=""
difference = ""
function setup(){
vid = createCapture(VIDEO);
vid.size(700,700);
vid.position(0,250);
canvas = createCanvas(1000,700);
canvas.position(850,250);
model = ml5.poseNet(vid,ModelLoaded);
model.on("pose",gotResult)

}
function ModelLoaded(){
    console.log("Model IS Loaded");
}
function gotResult(results){
    if (results.length > 0){
        console.log(results)
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        RightWristX=results[0].pose.rightWrist.x;
        LeftWristX=results[0].pose.leftWrist.x;
        difference=floor(LeftWristX-RightWristX)
    }

}
function draw(){
    background("#3dffb1")
    fill("#FF0023")
    stroke("#4170F1")
    document.getElementById("Size").innerHTML = difference + " PX"
text("Word",NoseX,NoseY)
fill("#FFF8E7")
stroke("#FFF8E7")
textSize(difference)
}