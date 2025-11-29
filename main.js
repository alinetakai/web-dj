let song = "";
let scoreRightWrist = 0;
let scoreLeftWrist = 0;
let rightWristX = 0;
let rightWristY = 0;
let leftWristX = 0;
let leftWristY = 0;
let canvas;
let video;
let poseNet;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    //canvas.position(650,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        leftWristX = results[0].pose.leftWrist.x;
        lefttWristY = results[0].pose.leftWrist.y;
    }    
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);

        if(rightWristY > 0 && rightWristY <= 100){
            document.getElementById("speed") = "Velocidade = 0.5x";
            song.rate(0.5);
        }
        else if(rightWristY > 100 && rightWristY <= 200){
            document.getElementById("speed") = "Velocidade = 1x";
            song.rate(1);    
        }
        else if(rightWristY > 200 && rightWristY <= 300){
            document.getElementById("speed") = "Velocidade = 1.5x";
            song.rate(1.5);    
        }
        else if(rightWristY > 300 && rightWristY <= 400){
            document.getElementById("speed") = "Velocidade = 2x";
            song.rate(2);    
        }
        else if(rightWristY > 400){
            document.getElementById("speed") = "Velocidade = 2.5x";
            song.rate(2.5);    
        }
    }
}