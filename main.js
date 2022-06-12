sound=""
sound_2=""

function preload(){
sound= loadSound("BELIEVER.mp3")

}

function setup()
{
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function draw()
{
    image(video,0,0,600,500)
}

function song_name()
{
    sound.play();
   
}