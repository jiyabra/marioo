function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCaputure(VIDEO);
	video.size(600, 300);
	video.parent('game_console');

	posenet = ml5.poseNet(video, modalLoaded);
	posenet.on('pose', gotPoses)
}

function modalLoaded() {
	console.log('Modal Loaded! <3');
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

		console.log("nosex = " + noseX + ", nosey = " + noseY);
	}
}

function draw() {
	game()
}






