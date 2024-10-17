(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/images/z_1.png", id:"z_1"},
		{src:"assets/images/z_10.png", id:"z_10"},
		{src:"assets/images/z_11.png", id:"z_11"},
		{src:"assets/images/z_12.png", id:"z_12"},
		{src:"assets/images/z_13.png", id:"z_13"},
		{src:"assets/images/z_14.png", id:"z_14"},
		{src:"assets/images/z_15.png", id:"z_15"},
		{src:"assets/images/z_2.png", id:"z_2"},
		{src:"assets/images/z_3.png", id:"z_3"},
		{src:"assets/images/z_4.png", id:"z_4"},
		{src:"assets/images/z_5.png", id:"z_5"},
		{src:"assets/images/z_6.png", id:"z_6"},
		{src:"assets/images/z_7.png", id:"z_7"},
		{src:"assets/images/z_8.png", id:"z_8"},
		{src:"assets/images/z_9.png", id:"z_9"}
	]
};



// symbols:



(lib.z_1 = function() {
	this.initialize(img.z_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,90);


(lib.z_10 = function() {
	this.initialize(img.z_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,83);


(lib.z_11 = function() {
	this.initialize(img.z_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,80);


(lib.z_12 = function() {
	this.initialize(img.z_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,94);


(lib.z_13 = function() {
	this.initialize(img.z_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,94);


(lib.z_14 = function() {
	this.initialize(img.z_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,78);


(lib.z_15 = function() {
	this.initialize(img.z_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,91);


(lib.z_2 = function() {
	this.initialize(img.z_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,91);


(lib.z_3 = function() {
	this.initialize(img.z_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,71);


(lib.z_4 = function() {
	this.initialize(img.z_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,85);


(lib.z_5 = function() {
	this.initialize(img.z_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,85);


(lib.z_6 = function() {
	this.initialize(img.z_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,104);


(lib.z_7 = function() {
	this.initialize(img.z_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,104);


(lib.z_8 = function() {
	this.initialize(img.z_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.z_9 = function() {
	this.initialize(img.z_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,83);


(lib.Rodant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.z_3();
	this.instance.setTransform(-23,-36);

	this.instance_1 = new lib.z_4();
	this.instance_1.setTransform(-30,-43);

	this.instance_2 = new lib.z_5();
	this.instance_2.setTransform(-30,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-36,45,71);


(lib.Molar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.z_14();
	this.instance.setTransform(-30,-39);

	this.instance_1 = new lib.z_15();
	this.instance_1.setTransform(-36,-46);

	this.instance_2 = new lib.z_2();
	this.instance_2.setTransform(-36,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-39,60,78);


(lib.Incisor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.z_11();
	this.instance.setTransform(-18,-40);

	this.instance_1 = new lib.z_12();
	this.instance_1.setTransform(-25,-47);

	this.instance_2 = new lib.z_13();
	this.instance_2.setTransform(-25,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-40,36,80);


(lib.Carnassial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.z_8();
	this.instance.setTransform(-32,-35);

	this.instance_1 = new lib.z_9();
	this.instance_1.setTransform(-39,-42);

	this.instance_2 = new lib.z_10();
	this.instance_2.setTransform(-39,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-35,63,69);


(lib.Cannie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.z_1();
	this.instance.setTransform(-30.5,-45);

	this.instance_1 = new lib.z_6();
	this.instance_1.setTransform(-36,-52);

	this.instance_2 = new lib.z_7();
	this.instance_2.setTransform(-36,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-45,60,90);


// stage content:
(lib.RadioBtn_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rodant
	this.instance = new lib.Rodant();
	this.instance.setTransform(400.5,108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// carnassial
	this.instance_1 = new lib.Carnassial();
	this.instance_1.setTransform(121.5,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// Molar
	this.instance_2 = new lib.Molar();
	this.instance_2.setTransform(407.5,213.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// Cannie
	this.instance_3 = new lib.Cannie();
	this.instance_3.setTransform(138.5,194);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

	// Incisor
	this.instance_4 = new lib.Incisor();
	this.instance_4.setTransform(262,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364.5,241,348,211.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;