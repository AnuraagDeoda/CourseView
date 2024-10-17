(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#6385A4",
	manifest: [
		{src:"assets/images/arrow.png", id:"arrow"},
		{src:"assets/images/arrow2.png", id:"arrow2"},
		{src:"assets/images/scheme_01.png", id:"scheme_01"},
		{src:"assets/images/scheme_02_part_01.png", id:"scheme_02_part_01"},
		{src:"assets/images/scheme_02_part_02.png", id:"scheme_02_part_02"},
		{src:"assets/images/scheme_03_part_01.png", id:"scheme_03_part_01"},
		{src:"assets/images/scheme_03_part_02.png", id:"scheme_03_part_02"},
		{src:"assets/images/scheme_04.png", id:"scheme_04"},
		{src:"assets/images/scheme_05_part_01.png", id:"scheme_05_part_01"},
		{src:"assets/images/scheme_05_part_02.png", id:"scheme_05_part_02"}
	]
};



// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,130);


(lib.arrow2 = function() {
	this.initialize(img.arrow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,102);


(lib.scheme_01 = function() {
	this.initialize(img.scheme_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,168);


(lib.scheme_02_part_01 = function() {
	this.initialize(img.scheme_02_part_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,122);


(lib.scheme_02_part_02 = function() {
	this.initialize(img.scheme_02_part_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,126);


(lib.scheme_03_part_01 = function() {
	this.initialize(img.scheme_03_part_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,102);


(lib.scheme_03_part_02 = function() {
	this.initialize(img.scheme_03_part_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,106);


(lib.scheme_04 = function() {
	this.initialize(img.scheme_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,162);


(lib.scheme_05_part_01 = function() {
	this.initialize(img.scheme_05_part_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,96);


(lib.scheme_05_part_02 = function() {
	this.initialize(img.scheme_05_part_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,104);


(lib.scheme_05_part_02_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_05_part_02();
	this.instance.setTransform(-21.7,-25.7,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-21.7,-25.7,49,52);
p.frameBounds = [rect];


(lib.scheme_05_part_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_05_part_01();
	this.instance.setTransform(-25,-24,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,48);
p.frameBounds = [rect];


(lib.scheme_04_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_04();
	this.instance.setTransform(-10,-40.5,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-10,-40.5,20,81);
p.frameBounds = [rect];


(lib.scheme_03_part_02_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_03_part_02();
	this.instance.setTransform(-12,-26.5,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-12,-26.5,24,53);
p.frameBounds = [rect];


(lib.scheme_03_part_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_03_part_01();
	this.instance.setTransform(-12.5,-25.5,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-25.5,25,51);
p.frameBounds = [rect];


(lib.scheme_02_part_02_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_02_part_02();
	this.instance.setTransform(-15,-31.5,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-15,-31.5,30,63);
p.frameBounds = [rect];


(lib.scheme_02_part_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_02_part_01();
	this.instance.setTransform(-15,-30.5,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-15,-30.5,30,61);
p.frameBounds = [rect];


(lib.scheme_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.scheme_01();
	this.instance.setTransform(-29.5,-42,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-29.5,-42,59,84);
p.frameBounds = [rect];


(lib.arrows = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-6.5,-32.5,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.5,-32.5,13,65);
p.frameBounds = [rect];


(lib.arrow2s = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow2();
	this.instance.setTransform(-6.5,-25.5,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.5,-25.5,13,51);
p.frameBounds = [rect];


(lib.scheme_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.scheme_05_part_01_1("synched",0);
	this.instance.setTransform(1176.3,66.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:72.3},24).to({startPosition:0},1).to({y:66.3},29).wait(1));

	// Layer 4
	this.instance_1 = new lib.scheme_05_part_02_1("synched",0);
	this.instance_1.setTransform(1174.2,112.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:109.4},24).to({startPosition:0},1).to({y:112.4},29).wait(1));

	// Layer 2
	this.instance_2 = new lib.arrow2s("synched",0);
	this.instance_2.setTransform(1110.9,63.6,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:66.6},24).to({startPosition:0},1).to({y:63.6},29).wait(1));

	// Layer 1
	this.instance_3 = new lib.arrow2s("synched",0);
	this.instance_3.setTransform(1110.9,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:115.8},24).to({startPosition:0},1).to({y:120},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1104.4,38.1,97,107.4);
p.frameBounds = [rect, new cjs.Rectangle(1104.4,38.3,97,107.1), new cjs.Rectangle(1104.4,38.4,97,106.8), new cjs.Rectangle(1104.4,38.5,97,106.5), new cjs.Rectangle(1104.4,38.6,97,106.2), new cjs.Rectangle(1104.4,38.8,97,105.9), new cjs.Rectangle(1104.4,38.9,97,105.6), new cjs.Rectangle(1104.4,39,97,105.3), new cjs.Rectangle(1104.4,39.1,97,105), new cjs.Rectangle(1104.4,39.3,97,104.7), new cjs.Rectangle(1104.4,39.4,97,104.4), new cjs.Rectangle(1104.4,39.5,97,104.1), new cjs.Rectangle(1104.4,39.6,97,103.8), new cjs.Rectangle(1104.4,39.8,97,103.5), new cjs.Rectangle(1104.4,39.9,97,103.2), new cjs.Rectangle(1104.4,40,97,102.9), new cjs.Rectangle(1104.4,40.1,97,102.6), new cjs.Rectangle(1104.4,40.3,97,102.3), new cjs.Rectangle(1104.4,40.4,97,102), new cjs.Rectangle(1104.4,40.5,97,101.7), new cjs.Rectangle(1104.4,40.6,97,101.4), new cjs.Rectangle(1104.4,40.8,97,101.1), new cjs.Rectangle(1104.4,40.9,97,100.8), new cjs.Rectangle(1104.4,41,97,100.5), rect=new cjs.Rectangle(1104.4,41.1,97,100.2), rect, new cjs.Rectangle(1104.4,41,97,100.4), new cjs.Rectangle(1104.4,40.9,97,100.7), new cjs.Rectangle(1104.4,40.8,97,101), new cjs.Rectangle(1104.4,40.7,97,101.2), new cjs.Rectangle(1104.4,40.6,97,101.4), new cjs.Rectangle(1104.4,40.5,97,101.7), new cjs.Rectangle(1104.4,40.4,97,101.9), new cjs.Rectangle(1104.4,40.3,97,102.2), new cjs.Rectangle(1104.4,40.2,97,102.5), new cjs.Rectangle(1104.4,40.1,97,102.7), new cjs.Rectangle(1104.4,40,97,103), new cjs.Rectangle(1104.4,39.9,97,103.2), new cjs.Rectangle(1104.4,39.8,97,103.5), new cjs.Rectangle(1104.4,39.7,97,103.7), new cjs.Rectangle(1104.4,39.6,97,103.9), new cjs.Rectangle(1104.4,39.5,97,104.2), new cjs.Rectangle(1104.4,39.4,97,104.4), new cjs.Rectangle(1104.4,39.3,97,104.7), new cjs.Rectangle(1104.4,39.2,97,104.9), new cjs.Rectangle(1104.4,39.1,97,105.2), new cjs.Rectangle(1104.4,39,97,105.4), new cjs.Rectangle(1104.4,38.8,97,105.7), new cjs.Rectangle(1104.4,38.7,97,106), new cjs.Rectangle(1104.4,38.6,97,106.2), new cjs.Rectangle(1104.4,38.5,97,106.4), new cjs.Rectangle(1104.4,38.4,97,106.7), new cjs.Rectangle(1104.4,38.3,97,106.9), new cjs.Rectangle(1104.4,38.2,97,107.2), new cjs.Rectangle(1104.4,38.1,97,107.4)];


(lib.scheme_04_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.scheme_04_1("synched",0);
	this.instance_1.setTransform(1004.9,90.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:102.8},24).to({startPosition:0},1).to({y:90.8},24).wait(1));

	// Layer 1
	this.instance_2 = new lib.arrows("synched",0);
	this.instance_2.setTransform(941,88.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:106.7},24).to({startPosition:0},1).to({y:88.7},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(934.5,50.3,80.4,81);
p.frameBounds = [rect, new cjs.Rectangle(934.5,50.8,80.4,81), new cjs.Rectangle(934.5,51.3,80.4,81), new cjs.Rectangle(934.5,51.8,80.4,81), new cjs.Rectangle(934.5,52.3,80.4,81), new cjs.Rectangle(934.5,52.8,80.4,81), new cjs.Rectangle(934.5,53.3,80.4,81), new cjs.Rectangle(934.5,53.8,80.4,81), new cjs.Rectangle(934.5,54.3,80.4,81), new cjs.Rectangle(934.5,54.8,80.4,81), new cjs.Rectangle(934.5,55.3,80.4,81), new cjs.Rectangle(934.5,55.8,80.4,81), new cjs.Rectangle(934.5,56.3,80.4,81), new cjs.Rectangle(934.5,56.8,80.4,81), new cjs.Rectangle(934.5,57.3,80.4,81), new cjs.Rectangle(934.5,57.8,80.4,81), new cjs.Rectangle(934.5,58.3,80.4,81), new cjs.Rectangle(934.5,58.8,80.4,81), new cjs.Rectangle(934.5,59.3,80.4,81), new cjs.Rectangle(934.5,59.8,80.4,81), new cjs.Rectangle(934.5,60.3,80.4,81), new cjs.Rectangle(934.5,60.8,80.4,81), new cjs.Rectangle(934.5,61.3,80.4,81), new cjs.Rectangle(934.5,61.8,80.4,81), rect=new cjs.Rectangle(934.5,62.3,80.4,81), rect, new cjs.Rectangle(934.5,61.8,80.4,81), new cjs.Rectangle(934.5,61.3,80.4,81), new cjs.Rectangle(934.5,60.8,80.4,81), new cjs.Rectangle(934.5,60.3,80.4,81), new cjs.Rectangle(934.5,59.8,80.4,81), new cjs.Rectangle(934.5,59.3,80.4,81), new cjs.Rectangle(934.5,58.8,80.4,81), new cjs.Rectangle(934.5,58.3,80.4,81), new cjs.Rectangle(934.5,57.8,80.4,81), new cjs.Rectangle(934.5,57.3,80.4,81), new cjs.Rectangle(934.5,56.8,80.4,81), new cjs.Rectangle(934.5,56.3,80.4,81), new cjs.Rectangle(934.5,55.8,80.4,81), new cjs.Rectangle(934.5,55.3,80.4,81), new cjs.Rectangle(934.5,54.8,80.4,81), new cjs.Rectangle(934.5,54.3,80.4,81), new cjs.Rectangle(934.5,53.8,80.4,81), new cjs.Rectangle(934.5,53.3,80.4,81), new cjs.Rectangle(934.5,52.8,80.4,81), new cjs.Rectangle(934.5,52.3,80.4,81), new cjs.Rectangle(934.5,51.8,80.4,81), new cjs.Rectangle(934.5,51.3,80.4,81), new cjs.Rectangle(934.5,50.8,80.4,81), new cjs.Rectangle(934.5,50.3,80.4,81)];


(lib.scheme_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scheme_03_part_01.png
	this.instance = new lib.scheme_03_part_01_1("synched",0);
	this.instance.setTransform(833.9,63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:66.7},24).wait(1).to({startPosition:0},0).to({y:63.7},24).wait(1));

	// scheme_03_part_02.png
	this.instance_1 = new lib.scheme_03_part_02_1("synched",0);
	this.instance_1.setTransform(833.4,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:112.7},24).wait(1).to({startPosition:0},0).to({y:115.7},24).wait(1));

	// Layer 6
	this.instance_2 = new lib.arrow2s("synched",0);
	this.instance_2.setTransform(791.2,66.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:77.3},24).wait(1).to({startPosition:0},0).to({y:66.5},24).wait(1));

	// Layer 1
	this.instance_3 = new lib.arrow2s("synched",0);
	this.instance_3.setTransform(771.2,118.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:105.4},24).wait(1).to({startPosition:0},0).to({y:118.6},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(764.7,38.2,81.7,106);
p.frameBounds = [rect, new cjs.Rectangle(764.7,38.3,81.7,105.3), new cjs.Rectangle(764.7,38.4,81.7,104.6), new cjs.Rectangle(764.7,38.6,81.7,103.9), new cjs.Rectangle(764.7,38.7,81.7,103.3), new cjs.Rectangle(764.7,38.8,81.7,102.8), new cjs.Rectangle(764.7,38.9,81.7,102.5), new cjs.Rectangle(764.7,39.1,81.7,102.3), new cjs.Rectangle(764.7,39.2,81.7,102), new cjs.Rectangle(764.7,39.3,81.7,101.8), new cjs.Rectangle(764.7,39.4,81.7,101.5), new cjs.Rectangle(764.7,39.6,81.7,101.3), new cjs.Rectangle(764.7,39.7,81.7,101), new cjs.Rectangle(764.7,39.8,81.7,100.8), new cjs.Rectangle(764.7,39.9,81.7,100.5), new cjs.Rectangle(764.7,40.1,81.7,100.3), new cjs.Rectangle(764.7,40.2,81.7,100), new cjs.Rectangle(764.7,40.3,81.7,99.8), new cjs.Rectangle(764.7,40.4,81.7,99.5), new cjs.Rectangle(764.7,40.6,81.7,99.3), new cjs.Rectangle(764.7,40.7,81.7,99), new cjs.Rectangle(764.7,40.8,81.7,98.8), new cjs.Rectangle(764.7,40.9,81.7,98.5), new cjs.Rectangle(764.7,41.1,81.7,98.3), rect=new cjs.Rectangle(764.7,41.2,81.7,98), rect, new cjs.Rectangle(764.7,41.1,81.7,98.3), new cjs.Rectangle(764.7,40.9,81.7,98.5), new cjs.Rectangle(764.7,40.8,81.7,98.8), new cjs.Rectangle(764.7,40.7,81.7,99), new cjs.Rectangle(764.7,40.6,81.7,99.3), new cjs.Rectangle(764.7,40.4,81.7,99.5), new cjs.Rectangle(764.7,40.3,81.7,99.8), new cjs.Rectangle(764.7,40.2,81.7,100), new cjs.Rectangle(764.7,40.1,81.7,100.3), new cjs.Rectangle(764.7,39.9,81.7,100.5), new cjs.Rectangle(764.7,39.8,81.7,100.8), new cjs.Rectangle(764.7,39.7,81.7,101), new cjs.Rectangle(764.7,39.6,81.7,101.3), new cjs.Rectangle(764.7,39.4,81.7,101.5), new cjs.Rectangle(764.7,39.3,81.7,101.8), new cjs.Rectangle(764.7,39.2,81.7,102), new cjs.Rectangle(764.7,39.1,81.7,102.3), new cjs.Rectangle(764.7,38.9,81.7,102.5), new cjs.Rectangle(764.7,38.8,81.7,102.8), new cjs.Rectangle(764.7,38.7,81.7,103.3), new cjs.Rectangle(764.7,38.6,81.7,103.9), new cjs.Rectangle(764.7,38.4,81.7,104.6), new cjs.Rectangle(764.7,38.3,81.7,105.3), new cjs.Rectangle(764.7,38.2,81.7,106)];


(lib.scheme_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.scheme_02_part_02_1("synched",0);
	this.instance.setTransform(682.7,111.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:92},24).wait(1).to({startPosition:0},0).to({y:111.1},24).wait(1));

	// Layer 2
	this.instance_1 = new lib.scheme_02_part_01_1("synched",0);
	this.instance_1.setTransform(672.5,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:89},24).wait(1).to({startPosition:0},0).to({y:72},24).wait(1));

	// Layer 6
	this.instance_2 = new lib.arrows("synched",0);
	this.instance_2.setTransform(620.6,102.8,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:91.9},24).wait(1).to({startPosition:0},0).to({y:102.8},24).wait(1));

	// Layer 1
	this.instance_3 = new lib.arrows("synched",0);
	this.instance_3.setTransform(601.6,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:91.9},24).wait(1).to({startPosition:0},0).to({y:82},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(595.1,41.5,102.6,101.1);
p.frameBounds = [rect, new cjs.Rectangle(595.1,42.2,102.6,99.6), new cjs.Rectangle(595.1,42.9,102.6,98), new cjs.Rectangle(595.1,43.7,102.6,96.5), new cjs.Rectangle(595.1,44.4,102.6,95.1), new cjs.Rectangle(595.1,45.1,102.6,93.6), new cjs.Rectangle(595.1,45.8,102.6,92.1), new cjs.Rectangle(595.1,46.5,102.6,90.6), new cjs.Rectangle(595.1,47.2,102.6,89), new cjs.Rectangle(595.1,47.9,102.6,87.5), new cjs.Rectangle(595.1,48.6,102.6,86), new cjs.Rectangle(595.1,49.3,102.6,84.5), new cjs.Rectangle(595.1,50,102.6,83.1), new cjs.Rectangle(595.1,50.7,102.6,81.6), new cjs.Rectangle(595.1,51.4,102.6,80), new cjs.Rectangle(595.1,52.2,102.6,78.5), new cjs.Rectangle(595.1,52.9,102.6,77), new cjs.Rectangle(595.1,53.6,102.6,75.5), new cjs.Rectangle(595.1,54.3,102.6,74), new cjs.Rectangle(595.1,55,102.6,72.5), new cjs.Rectangle(595.1,55.7,102.6,71.1), new cjs.Rectangle(595.1,56.4,102.6,69.5), new cjs.Rectangle(595.1,57.1,102.6,68.2), new cjs.Rectangle(595.1,57.8,102.6,67), rect=new cjs.Rectangle(595.1,58.5,102.6,65.9), rect, new cjs.Rectangle(595.1,57.8,102.6,67), new cjs.Rectangle(595.1,57.1,102.6,68.2), new cjs.Rectangle(595.1,56.4,102.6,69.5), new cjs.Rectangle(595.1,55.7,102.6,71.1), new cjs.Rectangle(595.1,55,102.6,72.5), new cjs.Rectangle(595.1,54.3,102.6,74), new cjs.Rectangle(595.1,53.6,102.6,75.5), new cjs.Rectangle(595.1,52.9,102.6,77), new cjs.Rectangle(595.1,52.2,102.6,78.5), new cjs.Rectangle(595.1,51.4,102.6,80), new cjs.Rectangle(595.1,50.7,102.6,81.6), new cjs.Rectangle(595.1,50,102.6,83.1), new cjs.Rectangle(595.1,49.3,102.6,84.5), new cjs.Rectangle(595.1,48.6,102.6,86), new cjs.Rectangle(595.1,47.9,102.6,87.5), new cjs.Rectangle(595.1,47.2,102.6,89), new cjs.Rectangle(595.1,46.5,102.6,90.6), new cjs.Rectangle(595.1,45.8,102.6,92.1), new cjs.Rectangle(595.1,45.1,102.6,93.6), new cjs.Rectangle(595.1,44.4,102.6,95.1), new cjs.Rectangle(595.1,43.7,102.6,96.5), new cjs.Rectangle(595.1,42.9,102.6,98), new cjs.Rectangle(595.1,42.2,102.6,99.6), new cjs.Rectangle(595.1,41.5,102.6,101.1)];


(lib.scheme_01_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance_1 = new lib.scheme_01_1("synched",0);
	this.instance_1.setTransform(499.7,81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:97.1},24).wait(1).to({startPosition:0},0).to({y:81.1},24).wait(1));

	// Layer 1
	this.instance_2 = new lib.arrows("synched",0);
	this.instance_2.setTransform(431.6,79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:95.2},24).wait(1).to({startPosition:0},0).to({y:79.2},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(425.1,39.1,104.1,84);
p.frameBounds = [rect, new cjs.Rectangle(425.1,39.7,104.1,84), new cjs.Rectangle(425.1,40.4,104.1,84), new cjs.Rectangle(425.1,41.1,104.1,84), new cjs.Rectangle(425.1,41.7,104.1,84), new cjs.Rectangle(425.1,42.4,104.1,84), new cjs.Rectangle(425.1,43.1,104.1,84), new cjs.Rectangle(425.1,43.7,104.1,84), new cjs.Rectangle(425.1,44.4,104.1,84), new cjs.Rectangle(425.1,45.1,104.1,84), new cjs.Rectangle(425.1,45.7,104.1,84), new cjs.Rectangle(425.1,46.4,104.1,84), new cjs.Rectangle(425.1,47.1,104.1,84), new cjs.Rectangle(425.1,47.7,104.1,84), new cjs.Rectangle(425.1,48.4,104.1,84), new cjs.Rectangle(425.1,49.1,104.1,84), new cjs.Rectangle(425.1,49.7,104.1,84), new cjs.Rectangle(425.1,50.4,104.1,84), new cjs.Rectangle(425.1,51.1,104.1,84), new cjs.Rectangle(425.1,51.7,104.1,84), new cjs.Rectangle(425.1,52.4,104.1,84), new cjs.Rectangle(425.1,53.1,104.1,84), new cjs.Rectangle(425.1,53.7,104.1,84), new cjs.Rectangle(425.1,54.4,104.1,84), rect=new cjs.Rectangle(425.1,55.1,104.1,84), rect, new cjs.Rectangle(425.1,54.4,104.1,84), new cjs.Rectangle(425.1,53.7,104.1,84), new cjs.Rectangle(425.1,53.1,104.1,84), new cjs.Rectangle(425.1,52.4,104.1,84), new cjs.Rectangle(425.1,51.7,104.1,84), new cjs.Rectangle(425.1,51.1,104.1,84), new cjs.Rectangle(425.1,50.4,104.1,84), new cjs.Rectangle(425.1,49.7,104.1,84), new cjs.Rectangle(425.1,49.1,104.1,84), new cjs.Rectangle(425.1,48.4,104.1,84), new cjs.Rectangle(425.1,47.7,104.1,84), new cjs.Rectangle(425.1,47.1,104.1,84), new cjs.Rectangle(425.1,46.4,104.1,84), new cjs.Rectangle(425.1,45.7,104.1,84), new cjs.Rectangle(425.1,45.1,104.1,84), new cjs.Rectangle(425.1,44.4,104.1,84), new cjs.Rectangle(425.1,43.7,104.1,84), new cjs.Rectangle(425.1,43.1,104.1,84), new cjs.Rectangle(425.1,42.4,104.1,84), new cjs.Rectangle(425.1,41.7,104.1,84), new cjs.Rectangle(425.1,41.1,104.1,84), new cjs.Rectangle(425.1,40.4,104.1,84), new cjs.Rectangle(425.1,39.7,104.1,84), new cjs.Rectangle(425.1,39.1,104.1,84)];


// stage content:



(lib.types_of_teeth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.scheme_05("synched",0);
	this.instance.setTransform(49.4,23.1,1,1,0,0,0,49.4,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 4
	this.instance_1 = new lib.scheme_04_2("synched",0);
	this.instance_1.setTransform(49.4,23.1,1,1,0,0,0,49.4,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// Layer 3
	this.instance_2 = new lib.scheme_03("synched",0);
	this.instance_2.setTransform(49.4,23.1,1,1,0,0,0,49.4,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Layer 2
	this.instance_3 = new lib.scheme_02("synched",0);
	this.instance_3.setTransform(49.4,23.1,1,1,0,0,0,49.4,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// Layer 1
	this.instance_4 = new lib.scheme_01_2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(640,360,1280,720);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;