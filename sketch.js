//created based off the Shaders tutorial by @Oren Shoham

let myShader;
let graphic;

function preload() {
	myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
	createCanvas(400, 400, WEBGL);
	noStroke();
	
	graphic = createGraphics(100, 100);
	
	shader(myShader);
}

function draw() {
	// lets map the mouseX to frequency and mouseY to amplitude
  // try playing with these to get a more or less distorted effect
  // 10 and 0.25 are just magic numbers that I thought looked good
  let freq = map(mouseX, 0, width, 0, 10.0);
  let amp = map(mouseY, 0, height, 0, 0.25);
	
	graphic.background(0,0,255);
  graphic.noStroke();
  graphic.ellipse(graphic.width / 2, graphic.height / 2, 50, 50);
	graphic.fill(0,255,0);

  myShader.setUniform('frequency', freq);
  myShader.setUniform('amplitude', amp);
	myShader.setUniform('time', frameCount * 0.02);
	myShader.setUniform('tex', graphic);
	
	rect(0, 0, width, height);
}