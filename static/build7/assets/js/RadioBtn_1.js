(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 540,
	height: 303,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/images/Carnivore_B.png", id:"Carnivore_B"},
		{src:"assets/images/Carnivore_G.png", id:"Carnivore_G"},
		{src:"assets/images/Carnivore_R.png", id:"Carnivore_R"},
		{src:"assets/images/Herbivore_B.png", id:"Herbivore_B"},
		{src:"assets/images/Herbivore_G.png", id:"Herbivore_G"},
		{src:"assets/images/Herbivore_R.png", id:"Herbivore_R"},
		{src:"assets/images/Insectivore_B.png", id:"Insectivore_B"},
		{src:"assets/images/Insectivore_G.png", id:"Insectivore_G"},
		{src:"assets/images/Insectivore_R.png", id:"Insectivore_R"},
		{src:"assets/images/Omnivore_B.png", id:"Omnivore_B"},
		{src:"assets/images/Omnivore_G.png", id:"Omnivore_G"},
		{src:"assets/images/Omnivore_R.png", id:"Omnivore_R"},
		{src:"assets/images/rodent_B.png", id:"rodent_B"},
		{src:"assets/images/Rodent_G.png", id:"Rodent_G"},
		{src:"assets/images/Rodent_R.png", id:"Rodent_R"},
		{src:"assets/images/tb.png", id:"tb"},
		{src:"assets/images/tbR.png", id:"tbR"},
		{src:"assets/images/tbW.png", id:"tbW"}
	]
};



// symbols:



(lib.Carnivore_B = function() {
	this.initialize(img.Carnivore_B);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,592,343);


(lib.Carnivore_G = function() {
	this.initialize(img.Carnivore_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,98);


(lib.Carnivore_R = function() {
	this.initialize(img.Carnivore_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,98);


(lib.Herbivore_B = function() {
	this.initialize(img.Herbivore_B);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584,323);


(lib.Herbivore_G = function() {
	this.initialize(img.Herbivore_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,98);


(lib.Herbivore_R = function() {
	this.initialize(img.Herbivore_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,98);


(lib.Insectivore_B = function() {
	this.initialize(img.Insectivore_B);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,262);


(lib.Insectivore_G = function() {
	this.initialize(img.Insectivore_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,84);


(lib.Insectivore_R = function() {
	this.initialize(img.Insectivore_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,84);


(lib.Omnivore_B = function() {
	this.initialize(img.Omnivore_B);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,372);


(lib.Omnivore_G = function() {
	this.initialize(img.Omnivore_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,111);


(lib.Omnivore_R = function() {
	this.initialize(img.Omnivore_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,111);


(lib.rodent_B = function() {
	this.initialize(img.rodent_B);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,357);


(lib.Rodent_G = function() {
	this.initialize(img.Rodent_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,107);


(lib.Rodent_R = function() {
	this.initialize(img.Rodent_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,107);


(lib.tb = function() {
	this.initialize(img.tb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,736,160);


(lib.tbR = function() {
	this.initialize(img.tbR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,168);


(lib.tbW = function() {
	this.initialize(img.tbW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,168);


(lib.textBox_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tb();
	this.instance.setTransform(-92,-20,0.25,0.25);

	this.instance_1 = new lib.tbR();
	this.instance_1.setTransform(-93,-21,0.25,0.25);

	this.instance_2 = new lib.tbW();
	this.instance_2.setTransform(-93,-21,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-20,184,40);
p.frameBounds = [rect, rect=new cjs.Rectangle(-93,-21,186,42), rect];


(lib.Rodent_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rodent_B();
	this.instance.setTransform(-74.2,-46.3,0.25,0.25);

	this.instance_1 = new lib.Rodent_G();
	this.instance_1.setTransform(-82,-54);

	this.instance_2 = new lib.Rodent_R();
	this.instance_2.setTransform(-82,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.2,-46.3,145,89.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-82,-54,163,107), rect];


(lib.Omnivore_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Omnivore_B();
	this.instance.setTransform(-53.9,-47.9,0.25,0.25);

	this.instance_1 = new lib.Omnivore_G();
	this.instance_1.setTransform(-62,-56);

	this.instance_2 = new lib.Omnivore_R();
	this.instance_2.setTransform(-62,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.9,-47.9,106,93);
p.frameBounds = [rect, rect=new cjs.Rectangle(-62,-56,124,111), rect];


(lib.Insectivore_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Insectivore_B();
	this.instance.setTransform(-70.7,-34.1,0.25,0.25);

	this.instance_1 = new lib.Insectivore_G();
	this.instance_1.setTransform(-79,-42);

	this.instance_2 = new lib.Insectivore_R();
	this.instance_2.setTransform(-79,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-34.1,140,65.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-79,-42,158,84), rect];


(lib.Herbivore_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Herbivore_B();
	this.instance.setTransform(-73.8,-41.5,0.25,0.25);

	this.instance_1 = new lib.Herbivore_G();
	this.instance_1.setTransform(-82,-49);

	this.instance_2 = new lib.Herbivore_R();
	this.instance_2.setTransform(-82,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.8,-41.5,146,80.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-82,-49,164,98), rect];


(lib.Carnivore_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Carnivore_B();
	this.instance.setTransform(-74.7,-44.1,0.25,0.25);

	this.instance_1 = new lib.Carnivore_G();
	this.instance_1.setTransform(-80,-49);

	this.instance_2 = new lib.Carnivore_R();
	this.instance_2.setTransform(-80,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.7,-44.1,148,85.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-80,-49,160,98), rect];


// stage content:
(lib.RadioBtn_1 = function() {
	this.initialize();

	// TextBox
	this.instance = new lib.textBox_main();
	this.instance.setTransform(270,151.9);

	// Omnivore
	this.instance_1 = new lib.Omnivore_main();
	this.instance_1.setTransform(270,152);

	// Rodent
	this.instance_2 = new lib.Rodent_main();
	this.instance_2.setTransform(269.9,152);

	// Herbivore
	this.instance_3 = new lib.Herbivore_main();
	this.instance_3.setTransform(270,152);

	// Insectivore
	this.instance_4 = new lib.Insectivore_main();
	this.instance_4.setTransform(270,152);

	// Carnivore
	this.instance_5 = new lib.Carnivore_main();
	this.instance_5.setTransform(270,151.9);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(448,255.6,184,93);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;