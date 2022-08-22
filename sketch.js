
  function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(180, 180);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(0,0,0)
    stroke(0, 0, 0);
    circle(50, 426, 80);
    circle(590, 50, 80);
    circle(50, 50, 80); 
    circle(590, 426, 80);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 25, 295);
    rect(580, 90, 25, 295);
}

function take_snapshot() {
    console.log("successfully Saved")
    save('random({[\<+>/]}).png');
}