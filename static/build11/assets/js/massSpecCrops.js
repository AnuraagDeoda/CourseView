(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/images/_01_molecules_correct.png", id:"_01_molecules_correct"},
		{src:"assets/images/_01_molecules_incorrect.png", id:"_01_molecules_incorrect"},
		{src:"assets/images/_01_molecules_Normal.png", id:"_01_molecules_Normal"},
		{src:"assets/images/_02_molecules_correct.png", id:"_02_molecules_correct"},
		{src:"assets/images/_02_molecules_incorrect.png", id:"_02_molecules_incorrect"},
		{src:"assets/images/_02_molecules_Normal.png", id:"_02_molecules_Normal"},
		{src:"assets/images/_03_molecules_correct.png", id:"_03_molecules_correct"},
		{src:"assets/images/_03_molecules_incorrect.png", id:"_03_molecules_incorrect"},
		{src:"assets/images/_03_molecules_Normal.png", id:"_03_molecules_Normal"},
		{src:"assets/images/_04_molecules_correct.png", id:"_04_molecules_correct"},
		{src:"assets/images/_04_molecules_incorrect.png", id:"_04_molecules_incorrect"},
		{src:"assets/images/_04_molecules_Normal.png", id:"_04_molecules_Normal"},
		{src:"assets/images/_05_molecules_correct.png", id:"_05_molecules_correct"},
		{src:"assets/images/_05_molecules_incorrect.png", id:"_05_molecules_incorrect"},
		{src:"assets/images/_05_molecules_Normal.png", id:"_05_molecules_Normal"},
		{src:"assets/images/_06_molecules_correct.png", id:"_06_molecules_correct"},
		{src:"assets/images/_06_molecules_incorrect.png", id:"_06_molecules_incorrect"},
		{src:"assets/images/_06_molecules_Normal.png", id:"_06_molecules_Normal"}
	]
};



// symbols:



(lib._01_molecules_correct = function() {
	this.initialize(img._01_molecules_correct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,52);


(lib._01_molecules_incorrect = function() {
	this.initialize(img._01_molecules_incorrect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,52);


(lib._01_molecules_Normal = function() {
	this.initialize(img._01_molecules_Normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,52);


(lib._02_molecules_correct = function() {
	this.initialize(img._02_molecules_correct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,70);


(lib._02_molecules_incorrect = function() {
	this.initialize(img._02_molecules_incorrect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,70);


(lib._02_molecules_Normal = function() {
	this.initialize(img._02_molecules_Normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,70);


(lib._03_molecules_correct = function() {
	this.initialize(img._03_molecules_correct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,63);


(lib._03_molecules_incorrect = function() {
	this.initialize(img._03_molecules_incorrect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,63);


(lib._03_molecules_Normal = function() {
	this.initialize(img._03_molecules_Normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,63);


(lib._04_molecules_correct = function() {
	this.initialize(img._04_molecules_correct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,73);


(lib._04_molecules_incorrect = function() {
	this.initialize(img._04_molecules_incorrect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,73);


(lib._04_molecules_Normal = function() {
	this.initialize(img._04_molecules_Normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,73);


(lib._05_molecules_correct = function() {
	this.initialize(img._05_molecules_correct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,73);


(lib._05_molecules_incorrect = function() {
	this.initialize(img._05_molecules_incorrect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,73);


(lib._05_molecules_Normal = function() {
	this.initialize(img._05_molecules_Normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,73);


(lib._06_molecules_correct = function() {
	this.initialize(img._06_molecules_correct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,73);


(lib._06_molecules_incorrect = function() {
	this.initialize(img._06_molecules_incorrect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,73);


(lib._06_molecules_Normal = function() {
	this.initialize(img._06_molecules_Normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,73);


(lib.molecules6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._06_molecules_Normal();

	this.instance_1 = new lib._06_molecules_incorrect();

	this.instance_2 = new lib._06_molecules_correct();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,68,73);
p.frameBounds = [rect, rect, rect];


(lib.molecules5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._05_molecules_Normal();

	this.instance_1 = new lib._05_molecules_incorrect();

	this.instance_2 = new lib._05_molecules_correct();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,111,73);
p.frameBounds = [rect, rect, rect];


(lib.molecules4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._04_molecules_Normal();

	this.instance_1 = new lib._04_molecules_incorrect();

	this.instance_2 = new lib._04_molecules_correct();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,111,73);
p.frameBounds = [rect, rect, rect];


(lib.molecules3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._03_molecules_Normal();

	this.instance_1 = new lib._03_molecules_incorrect();

	this.instance_2 = new lib._03_molecules_correct();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,61,63);
p.frameBounds = [rect, rect, rect];


(lib.molecules2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._02_molecules_Normal();

	this.instance_1 = new lib._02_molecules_incorrect();

	this.instance_2 = new lib._02_molecules_correct();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,97,70);
p.frameBounds = [rect, rect, rect];


(lib.molecules1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01_molecules_Normal();

	this.instance_1 = new lib._01_molecules_incorrect();

	this.instance_2 = new lib._01_molecules_correct();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,52);
p.frameBounds = [rect, rect, rect];


// stage content:
(lib.crops = function() {
	this.initialize();

	// 06_molecules
	this.instance = new lib.molecules6();
	this.instance.setTransform(30,26,1,1,0,0,0,30,26);

	// 05_molecules
	this.instance_1 = new lib.molecules5();
	this.instance_1.setTransform(30,26,1,1,0,0,0,30,26);

	// 04_molecules
	this.instance_2 = new lib.molecules4();
	this.instance_2.setTransform(30,26,1,1,0,0,0,30,26);

	// 03_molecules
	this.instance_3 = new lib.molecules3();
	this.instance_3.setTransform(30,26,1,1,0,0,0,30,26);

	// 02_molecules
	this.instance_4 = new lib.molecules2();
	this.instance_4.setTransform(30,26,1,1,0,0,0,30,26);

	// 01_molecules
	this.instance_5 = new lib.molecules1();
	this.instance_5.setTransform(30,26,1,1,0,0,0,30,26);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(640,360,111,73);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;