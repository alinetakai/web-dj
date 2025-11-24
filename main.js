let song = "";
let scoreRightWrist = 0;
let scoreLeftWrist = 0;
let rightWristX = 0;
let rightWristY = 0;
let leftWristX = 0;
let leftWristY = 0;
let canvas;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    //canvas.position(650,200);
}

