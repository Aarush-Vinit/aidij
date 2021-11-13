song = "";

function preload()
{
	song = loadSound("music.mp3");
}
scoreRightWrist = 0;
scoreLeftWrist = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.position(350, 200, 600, 500);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
 function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

if(results.length > 0)
  {
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    scoreLeftWrist =  results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
  }
  
function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
