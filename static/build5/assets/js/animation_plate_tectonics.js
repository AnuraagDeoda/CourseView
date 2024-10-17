(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#666666",
	manifest: [
		{src:"assets/images/_01.png", id:"_01"},
		{src:"assets/images/_02.png", id:"_02"},
		{src:"assets/images/_03.png", id:"_03"},
		{src:"assets/images/_04.png", id:"_04"},
		{src:"assets/images/_05.png", id:"_05"},
		{src:"assets/images/plate_t_010.png", id:"plate_t_010"},
		{src:"assets/images/plate_t_011.png", id:"plate_t_011"},
		{src:"assets/images/plate_t_012.png", id:"plate_t_012"},
		{src:"assets/images/plate_t_02.png", id:"plate_t_02"},
		{src:"assets/images/plate_t_03.png", id:"plate_t_03"},
		{src:"assets/images/plate_t_04.png", id:"plate_t_04"},
		{src:"assets/images/plate_t_05.png", id:"plate_t_05"},
		{src:"assets/images/plate_t_06.png", id:"plate_t_06"},
		{src:"assets/images/plate_t_07.png", id:"plate_t_07"},
		{src:"assets/images/plate_t_08.png", id:"plate_t_08"},
		{src:"assets/images/plate_t_09.png", id:"plate_t_09"}
	]
};



// symbols:



(lib._01 = function() {
	this.initialize(img._01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,39);


(lib._02 = function() {
	this.initialize(img._02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,49);


(lib._03 = function() {
	this.initialize(img._03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,58);


(lib._04 = function() {
	this.initialize(img._04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,56);


(lib._05 = function() {
	this.initialize(img._05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,53);


(lib.plate_t_010 = function() {
	this.initialize(img.plate_t_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,260);


(lib.plate_t_011 = function() {
	this.initialize(img.plate_t_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,140);


(lib.plate_t_012 = function() {
	this.initialize(img.plate_t_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,713,98);


(lib.plate_t_02 = function() {
	this.initialize(img.plate_t_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,11);


(lib.plate_t_03 = function() {
	this.initialize(img.plate_t_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,108);


(lib.plate_t_04 = function() {
	this.initialize(img.plate_t_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,87);


(lib.plate_t_05 = function() {
	this.initialize(img.plate_t_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,709,191);


(lib.plate_t_06 = function() {
	this.initialize(img.plate_t_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,27);


(lib.plate_t_07 = function() {
	this.initialize(img.plate_t_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,260);


(lib.plate_t_08 = function() {
	this.initialize(img.plate_t_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,260);


(lib.plate_t_09 = function() {
	this.initialize(img.plate_t_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,260);


(lib.plate_t_059 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjaCHQhRgxAIhHQAHhGBdhAQBchAB/ABQCAABBFAuQBEAtAABQQAABOhYA5QhZA6h+AAQh/AAhRgwg");
	this.shape.setTransform(1.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjjCZQhhg/ABhaQgBhZBhg/QBfg9CEgBQCFABBeA9QBiA/gBBZQABBahiA/QheA9iFABQiEgBhfg9gAi0hrQhdBAgHBFQgHBIBRAwQBQAwB+ABQB/AABZg7QBYg5ABhPQgBhPhEgtQhFguiAAAIgEgBQh8AAhbBAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-21.5,65,43);
p.frameBounds = [rect];


(lib.plate_t_056 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F4527").s().p("Ag0A2QgYgLgHgCIAAgJQAAgRAQgMQAPgLA0gHQBIguAKAAQAKABgiBGQgFgDgOADQgPADgMAZQgMAZgdgNQAIAMgIAAQgGAAgRgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-6.2,17,12.4);
p.frameBounds = [rect];


(lib.plate_t_039 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Crust (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAojAJuIkzgBIzLgEMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFNgyEogYQEqgZC/gJQB+gEgUgCIFYgCITIgEIEzgCIKigDIA9Tgg");
	var mask_graphics_1 = new cjs.Graphics().p("EgoxAJdIq9qnIEFiVIFKgVIDbDnIDSgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFMgyEpgYQErgZC9gJQB/gEgVgCMAnQgALIA9Tgg");
	var mask_graphics_2 = new cjs.Graphics().p("EgofAJdIq8qnIEEiVIFLgVIDbDnIDTgeIImiqQAFgDCzgyQCzgxEdhCQEchCFCg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAmqgALIA9Tgg");
	var mask_graphics_3 = new cjs.Graphics().p("EgoMAJdIq8qnIEEiVIFKgVIDcDnIDTgeIImiqQAFgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC/gJQB+gEgVgCMAmEgALIA9Tgg");
	var mask_graphics_4 = new cjs.Graphics().p("Egn5AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEchCFCg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAlfgALIA8Tgg");
	var mask_graphics_5 = new cjs.Graphics().p("EgnmAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAk5gALIA8Tgg");
	var mask_graphics_6 = new cjs.Graphics().p("EgnTAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAkTgALIA8Tgg");
	var mask_graphics_7 = new cjs.Graphics().p("EgnAAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAjtgALIA8Tgg");
	var mask_graphics_8 = new cjs.Graphics().p("EgmtAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCygxEehCQEbhBFDg1QFMgyEpgYQEqgZC+gJQB/gEgVgCMAjHgALIA8Tgg");
	var mask_graphics_9 = new cjs.Graphics().p("EgmaAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCygxEehCQEbhBFDg1QFMgyEpgYQEqgZC+gJQB/gEgVgCMAihgALIA8Tgg");
	var mask_graphics_10 = new cjs.Graphics().p("EgmHAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCygxEehCQEbhBFDg1QFKgyErgYQEqgZC+gJQB/gEgVgCMAh7gALIA8Tgg");
	var mask_graphics_11 = new cjs.Graphics().p("Egl0AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC5g1QCygxEdhCQEbhBFDg1QFLgyErgYQEqgZC+gJQB/gEgVgCMAhVgALIA8Tgg");
	var mask_graphics_12 = new cjs.Graphics().p("EglhAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC5g1QCygxEdhCQEbhBFEg1QFKgyErgYQEqgZC+gJQB/gEgVgCMAgvgALIA8Tgg");
	var mask_graphics_13 = new cjs.Graphics().p("EglOAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC5g1QCygxEehCQEahBFEg1QFKgyEqgYQErgZC+gJQB+gEgUgCMAgJgALIA8Tgg");
	var mask_graphics_14 = new cjs.Graphics().p("Egk7AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC4g1QCygxEfhCQEahBFDg1QFLgyEqgYQErgZC+gJQB+gEgUgCIfjgLIA8Tgg");
	var mask_graphics_15 = new cjs.Graphics().p("EgkoAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCzgxEdhCQEbhBFDg1QFLgyEqgYQEqgZC/gJQB/gEgVgCIe9gLIA8Tgg");
	var mask_graphics_16 = new cjs.Graphics().p("EgkVAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCxgxEehCQEbhBFEg1QFJgyEsgYQEpgZC/gJQB/gEgVgCIeXgLIA8Tgg");
	var mask_graphics_17 = new cjs.Graphics().p("EgkCAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCxgxEehCQEbhBFEg1QFJgyEsgYQEpgZC/gJQB/gEgVgCIdxgLIA8Tgg");
	var mask_graphics_18 = new cjs.Graphics().p("EgjvAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEfhCQEahBFEg1QFKgyEqgYQEqgZC/gJQB+gEgUgCIdLgLIA8Tgg");
	var mask_graphics_19 = new cjs.Graphics().p("EgjcAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEehCQEahBFEg1QFLgyEqgYQErgZC+gJQB+gEgUgCIclgLIA8Tgg");
	var mask_graphics_20 = new cjs.Graphics().p("EgjJAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEehCQEahBFEg1QFLgyEqgYQErgZC+gJQB+gEgUgCIb/gLIA8Tgg");
	var mask_graphics_21 = new cjs.Graphics().p("Egi2AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEehCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIbZgLIA8Tgg");
	var mask_graphics_22 = new cjs.Graphics().p("EgijAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIazgLIA8Tgg");
	var mask_graphics_23 = new cjs.Graphics().p("EgiQAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIaNgLIA8Tgg");
	var mask_graphics_24 = new cjs.Graphics().p("Egh9AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIZngLIA8Tgg");
	var mask_graphics_25 = new cjs.Graphics().p("EghqAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEZhBFFg1QFKgyErgYQEqgZC/gJQB+gEgUgCIZBgLIA8Tgg");
	var mask_graphics_26 = new cjs.Graphics().p("EghYAJdIq8qnIEEiVIFLgVIDbDnIDTgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgVgCIJHgGIPVgFIA9Tgg");
	var mask_graphics_27 = new cjs.Graphics().p("EghFAJdIq7qnIEDiVIFKgVIDdDnIDSgeIIliqQAIgDCxgyQCxgxEfhCQEZhBFDg1QFMgyErgYQEqgZC/gJQB+gEgUgCIFYgCIDIgEIPVgFIA9Tgg");
	var mask_graphics_28 = new cjs.Graphics().p("AY4JpMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAIgDCxgyQCwgxEghCQEZhBFDg1QFMgyErgYQEqgZC+gJQB/gEgUgCIFXgCICjgEIPVgFIA9Tgg");
	var mask_graphics_29 = new cjs.Graphics().p("Af9JuIkzgBIh/gEMg5pgAMIq9qnIEFiVIFKgVIDbDnIDSgeIImiqQAIgDCxgyQCxgxEfhCQEZhBFDg1QFMgyErgYQEqgZC+gJQB/gEgUgCIFXgCIB9gEIEzgCIKigDIA9Tgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:961,y:475.4}).wait(1).to({graphics:mask_graphics_1,x:962.9,y:475.4}).wait(1).to({graphics:mask_graphics_2,x:964.8,y:475.4}).wait(1).to({graphics:mask_graphics_3,x:966.7,y:475.4}).wait(1).to({graphics:mask_graphics_4,x:968.6,y:475.4}).wait(1).to({graphics:mask_graphics_5,x:970.5,y:475.4}).wait(1).to({graphics:mask_graphics_6,x:972.4,y:475.4}).wait(1).to({graphics:mask_graphics_7,x:974.3,y:475.4}).wait(1).to({graphics:mask_graphics_8,x:976.2,y:475.4}).wait(1).to({graphics:mask_graphics_9,x:978.1,y:475.4}).wait(1).to({graphics:mask_graphics_10,x:980,y:475.4}).wait(1).to({graphics:mask_graphics_11,x:981.9,y:475.4}).wait(1).to({graphics:mask_graphics_12,x:983.8,y:475.4}).wait(1).to({graphics:mask_graphics_13,x:985.7,y:475.4}).wait(1).to({graphics:mask_graphics_14,x:987.6,y:475.4}).wait(1).to({graphics:mask_graphics_15,x:989.5,y:475.4}).wait(1).to({graphics:mask_graphics_16,x:991.4,y:475.4}).wait(1).to({graphics:mask_graphics_17,x:993.3,y:475.4}).wait(1).to({graphics:mask_graphics_18,x:995.2,y:475.4}).wait(1).to({graphics:mask_graphics_19,x:997,y:475.4}).wait(1).to({graphics:mask_graphics_20,x:998.9,y:475.4}).wait(1).to({graphics:mask_graphics_21,x:1000.8,y:475.4}).wait(1).to({graphics:mask_graphics_22,x:1002.7,y:475.4}).wait(1).to({graphics:mask_graphics_23,x:1004.6,y:475.4}).wait(1).to({graphics:mask_graphics_24,x:1006.5,y:475.4}).wait(1).to({graphics:mask_graphics_25,x:1008.4,y:475.4}).wait(1).to({graphics:mask_graphics_26,x:1010.3,y:475.4}).wait(1).to({graphics:mask_graphics_27,x:1012.2,y:475.4}).wait(1).to({graphics:mask_graphics_28,x:1014.1,y:475.4}).wait(1).to({graphics:mask_graphics_29,x:1016,y:475.4}).wait(5).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 1
	this.instance = new lib.plate_t_010();
	this.instance.setTransform(275,333);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},34).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(628,412.9,666,125);
p.frameBounds = [rect, new cjs.Rectangle(631.8,412.9,662.2,125), new cjs.Rectangle(635.6,412.9,658.4,125), new cjs.Rectangle(639.4,412.9,654.6,125), new cjs.Rectangle(643.2,412.9,650.9,125), new cjs.Rectangle(647,412.9,647.1,125), new cjs.Rectangle(650.8,412.9,643.3,125), new cjs.Rectangle(654.6,412.9,639.5,125), new cjs.Rectangle(658.4,412.9,635.7,125), new cjs.Rectangle(662.2,412.9,631.9,125), new cjs.Rectangle(666,412.9,628.1,125), new cjs.Rectangle(669.7,412.9,624.3,125), new cjs.Rectangle(673.5,412.9,620.5,125), new cjs.Rectangle(677.3,412.9,616.7,125), new cjs.Rectangle(681.1,412.9,612.9,125), new cjs.Rectangle(684.9,412.9,609.1,125), new cjs.Rectangle(688.7,412.9,605.3,125), new cjs.Rectangle(692.5,412.9,601.5,125), new cjs.Rectangle(696.3,412.9,597.7,125), new cjs.Rectangle(700.1,412.9,594,125), new cjs.Rectangle(703.9,412.9,590.2,125), new cjs.Rectangle(707.7,412.9,586.4,125), new cjs.Rectangle(711.5,412.9,582.6,125), new cjs.Rectangle(715.3,412.9,578.8,125), new cjs.Rectangle(719.1,412.9,575,125), new cjs.Rectangle(722.9,412.9,571.2,125), new cjs.Rectangle(726.6,412.9,567.4,125), new cjs.Rectangle(730.4,412.9,563.6,125), new cjs.Rectangle(734.2,412.9,559.8,125), rect=new cjs.Rectangle(738,412.9,556,125), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_038 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Crust (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCDQIAAIGngBQDUAABtgCIF9gHIepABIA9RyMhvOABGg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg3yAG6QCQkIDJjyIA9hIQCrjICoikQBHhFA/g7QBwhpBWhIICJh0QgFgFApgSQBQgMBvAWQAZAFAfALIAwATQA6AZBOApIA9AfQB8BECHBQIAHAFQCoBlB3BMIBFAsIA2AjIFCAqIL4BeQFeAGE1ADIERAAQDRAABugCIF8gHIMJAAIQ/ABIBVADIA9RtIhXADMhtSABDg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg2jAOwIg7n5QCOkHDJjwIA8hJQCqjHCoijQBGhFA/g6QBvhpBVhIQCBhuAIgFQgEgGAogRQBPgPBtAUQAaAEAdALIAwARQA6AYBOAoIA9AfQB7BCCHBQIAIAFQCmBkB3BLIBFAsIA2AjIE/AuIClAYIJPBHQFbAIE0ADIEQABQDOAABwgCIF6gGIMGAAIQ6AAIBTAFIA7RoIhSAGMhrmABEg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg2QAOtIg7n3QCOkGDHjwIA8hIQCpjGCniiQBGhFA+g6QBuhoBVhJQB+hrALgIQgEgFAngSQBQgQBqASQAaADAcAKIAvAQQA5AWBQAnIA8AeQB6BBCHBQIAJAFQCkBjB4BMIBEArIA2AjQChAaCbAYICkAaIJMBHQFYAIE0AFIEPAAQDMAABxgCIF4gGIMDAAIQ1ABIBQAIIA7RiIhPAJMhrGABEg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg19AOpIg8n1QCOkEDGjvIA8hIQCojFCmiiQBGhEA+g7QBthnBUhIQB8hqANgJQgDgGAmgRQBPgTBoAQQAaACAbALQATAGAcAIQA4AVBRAmIA8AdQB5A/CIBRIAIAFQCjBhB4BMIBEArIA2AiQCgAdCZAZICiAcIJKBHQFWAJEyAGIEOABQDKgBBygBIF3gGIL/AAIQwAAIBOALIA6RdIhLALMhqmABEg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg1rAOlIg6nyQCMkEDFjtIA8hIQCnjEClihQBFhEA+g7QBthmBUhIICIhzQgCgGAlgRQBQgVBkAOQAbABAaAKQARAGAdAGQA3AUBSAlIA8AdQB2A9CKBRIAIAFQCiBgB4BMIBEArIA2AiQCfAfCWAaICgAfIJIBGQFUAKEyAHIENABQDFAAB2gCIF0gFIL9AAIQrAAIBKANIA6RXIhJAPMhqFABEg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg1YAOhIg6nwQCMkCDEjsIA7hIQCmjDCkihQBFhDA+g7QBrhmBUhIQB4hmAPgMQgBgHAkgRQBQgXBiANQAbAAAZAJQAQAGAeAFQA2ASBSAkIA8AcQB2A8CKBRIAIAFQCgBfB5BMIBEAqIA2AjQCeAhCUAcICfAgIJEBGQFSALExAIIEMABQDDAAB3gBIFzgFIL5gBIQmAAIBHAQIA6RSIhFARMhpmABEg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg1FAOeIg6nuQCLkBDDjrIA7hHQCljDCjigQBEhDA+g6QBrhmBUhIICGhyQgBgHAkgQQBQgZBfAKQAbgBAYAJQAQAFAdAEQA2ARBTAjIA8AcQB0A6CLBRIAIAFQCfBeB5BLIBDArIA2AiQCeAkCSAdICdAiIJCBGIJ/AVIELABQDBAAB4gBIFxgFIL3AAIQggBIBEATIA6RNIhCATMhpFABEg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg0zAOaIg5nrQCKkADCjqIA6hHQCljCCiifQBEhDA9g6QBrhlBThIICGhyQAAgHAigRQBQgbBdAJQAbgDAXAJQAPAFAeADQA0APBUAjIA8AaQBzA5CMBRIAIAFQCeBdB5BMIBDAqIA2AiQCdAmCPAeICcAkII/BGIJ8AXIEKACIE3gCIFxgEILzgBIQbAAIBBAVIA6RIIg/AVMholABFg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg0gAOWIg5noQCKj/DAjpIA6hHQCkjAChifQBDhDA9g6QBqhkBThIICFhyQABgHAhgQQBRgeBaAIQAbgEAWAIQAOAEAfACQAzAOBVAiIA8AaQBxA2CMBSIAJAFQCcBbB6BMIBCAqIA2AiQCdApCMAfICbAmII8BFIJ5AaIEJABIE2gBIFvgEILwAAIQWgBIA+AXIA6RDIg8AYMhoFABFg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg0NAOTIg5nmQCKj9C/jpIA5hGQCji/CgifQBDhCA9g6QBphjBThJQBthfAYgSQABgIAggQQBRgfBWAFQAcgFAVAIQANAEAgABQAyANBWAgIA7AZQBwA1CNBSIAJAFQCbBaB6BMIBDAqIA1AiQCcArCKAhICZAoII5BEIJ2AdIEIABIE1gBIFugEILtgBIQRgBIA7AaIA5Q+Ig5AbMhnkABFg");
	var mask_graphics_11 = new cjs.Graphics().p("Egz6AORIg5nkQCJj8C+jnIA5hGQCii/CgieQBChCA8g6QBphiBShJICEhxQACgIAggPQBQgiBVAEQAcgHAUAIQAMADAfAAQAyALBWAgIA8AZQBvAzCOBSIAIAFQCaBZB6BMIBCApIA2AiQCbAtCIAiICXArII3BEIJzAeIEHACIE0gBIFrgEILqAAIQMgCIA4AdIA5Q4Ig1AeMhnFABFg");
	var mask_graphics_12 = new cjs.Graphics().p("EgznAOOIg5nhQCIj7C9jnIA5hFQChi+CfidQBBhCA9g6QBnhiBThIICDhxQADgIAegQQBRgjBRABQAdgHATAHQALADAggBQAxAKBXAfIA8AXQBtAyCPBSIAIAFQCYBYB7BMIBCApIA2AiQCaAvCFAkICWAsII0BEIJwAhIEGABQCzAACAgBIFqgDILngBIQGgBIA1AfIA5QzIgyAgMhmlABFg");
	var mask_graphics_13 = new cjs.Graphics().p("EgzUAOMIg5nfQCHj6C8jlIA6hGQCgi9CdicQBBhCA9g5QBmhiBShIICDhxQADgIAegQQBQglBPAAQAdgJASAGQAKADAhgCQAvAJBYAeIA8AWQBsAxCQBSIAJAFQCWBXB7BMIBCAoIA2AiQCZAyCDAlICUAuIIxBEIJtAiIEFACIEygBIFogDILkgBQIXAAHqgBIAzAiIA4QtIgvAjMhmEABFg");
	var mask_graphics_14 = new cjs.Graphics().p("EgzCAOJIg4ncQCHj5C6jkIA5hFQCgi8CcicQBAhBA9g6QBlhhBShIICChxQAFgIAcgPQBRgoBNgCQAcgKARAGQAJACAhgDQAvAHBZAeIA8AWQBqAuCRBSIAJAFQCUBWB8BMIBBApIA2AhQCZA1CBAmICSAwIIvBDIJpAlIEEACIExgBIFmgDILhAAIP8gCIAwAkIA4QpIgsAlMhlkABFg");
	var mask_graphics_15 = new cjs.Graphics().p("EgyvAOHIg4naQCGj4C5jjIA5hEQCei8CbicQBBhAA8g5QBlhhBShIICChxQAEgJAcgOQBRgqBJgEQAdgKAQAFQAJABAhgDQAuAFBaAcIA8AWQBoAtCSBSIAIAFQCUBVB7BMIBCAoIA1AiQCZA2B+AoICRAyIIsBDIJmAnIEDABQCrABCFgBIFlgDILdAAIP4gCIAsAnIA4QjIgpAoMhlEABFg");
	var mask_graphics_16 = new cjs.Graphics().p("EgydAOGIg3nYQCFj3C4jiIA5hEQCdi6CaicQBBhAA7g5QBlhgBRhIICBhwQAFgKAbgOQBSgsBGgFQAdgMAPAFQAHABAjgFQAtAEBbAbIA7AVQBnArCTBTIAIAFQCTBTB8BMIBAApIA2AhQCZA5B7ApICPA0IIpBDIJjApIEDABQCnABCHgBIFjgCILbgBIPxgCIAqAqIA4QdIgmArMhkjABFg");
	var mask_graphics_17 = new cjs.Graphics().p("EgyKAOEIg3nVQCFj2C3jhIA4hDQCci6CaibQA/g/A8g6QBjhfBRhIICBhxQAGgJAZgOQBSguBEgHQAdgNAOAEQAHAAAjgFQAsADBbAaIA8AUQBlApCUBTIAIAGQCRBRB9BNIBBAnIA1AiQCYA8B4ApICOA3IInBCIJfArIECACIEtgBIFigCILXAAQIVAAHYgCIAnAsIA3QYIgjAuMhkDABFg");
	var mask_graphics_18 = new cjs.Graphics().p("Egx3AOCIg3nSQCEj1C2jgIA4hDQCbi4CZibQA/g/A7g5QBjhfBRhIICAhwQAHgKAYgOQBSgwBBgJQAdgOANAEQAGAAAkgHQAqACBdAZIA8ATQBjAoCVBTIAIAFQCQBRB9BNIBAAnIA1AhQCYA+B2AsICMA4IIkBBIJcAuIEBABIEsAAIFggBILVgBQITAAHUgCIAkAvIA3QSIggAxMhjjABFg");
	var mask_graphics_19 = new cjs.Graphics().p("EgxkAOBIg3nRQCDjzC2jeIA3hEQCai4CYiZQA+g/A8g5QBiheBQhIICAhwQAHgKAYgOQBRgyA/gLQAegPAMADIAogIQAqAABdAZIA9ASQBiAnCVBTIAIAFQCPBQB9BMIBAAnIA1AhQCWBAB1AtICKA7IIiBBIJZAvID/ACIErAAIFfgBILRgBIPigDIAhAyIA3QOIgcAzMhjDABFg");
	var mask_graphics_20 = new cjs.Graphics().p("EgxRAOAIg3nPQCDjxC0jeIA3hDQCai3CWiZQA+g/A7g5QBhhdBRhIQBWhNApgjQAIgKAWgOQBSg0A8gNQAegQALADIAogKQApgBBeAYIA8ARQBhAlCWBTIAJAFQCMBPB+BMIBAAnIA1AhQCWBDBxAuICJA9IIfBBIJWAxID+ACIErAAIFcgBILPgBQIRAAHLgDIAfA1IA2QIIgZA2MhijABFg");
	var mask_graphics_21 = new cjs.Graphics().p("Egw+AN+Ig3nMQCDjwCyjdIA3hDQCYi2CWiYQA+g/A6g4QBhhdBQhIQBUhLAqglQAJgKAWgNQBSg3A5gOQAegSAKADIAogMQAogCBfAXIA8ARQBfAjCXBTIAJAFQCLBOB+BMIBAAnIA1AhQCVBEBvAwICHA/IIcBAIJTA0ID+ACIEpAAIFbgBILLAAQIRgBHGgDIAcA3IA2QDIgWA5MhiDABFg");
	var mask_graphics_22 = new cjs.Graphics().p("EgwsAN9Ig2nKQCCjvCxjcIA2hCQCYi1CViYQA9g+A7g5QBghcBPhIIB+hvQAKgLAUgNQBSg5A3gQQAegTAJACQACgBAmgLQAngFBfAXIA8AQQBeAhCYBUIAJAFQCKBMB+BNIA/AmIA1AhQCVBHBsAxICGBAIIZBBIJQA2ID9ACIEnAAIFaAAILIgBQIQgBHCgDIAZA6IA2P+IgTA6MhhjABGg");
	var mask_graphics_23 = new cjs.Graphics().p("EgwZAN8Ig2nIQCBjuCwjbIA2hCQCXi0CUiXQA9g+A6g4QBfhcBQhIIB9hvQAKgLATgNQBTg6AzgTQAfgUAIACQABgCAmgMQAngGBgAWIA8APQBcAgCZBTIAJAFQCIBMB+BMIBAAnIA1AgQCUBKBpAyICFBCIIXBBIJMA4ID8ACIEmAAIFZAAILFgBIPMgEIAWA9IA2P4IgQA9MhhCABGg");
	var mask_graphics_24 = new cjs.Graphics().p("EgwGAN6Ig1nFQB/jtCwjZQAagiAbggQCXizCSiXQA8g+A7g4QBehbBPhIQBNhGAwgpQAKgLATgNQBTg8AxgUQAegWAIACQAAgDAmgNQAlgHBhAVQAcAGAhAIQBaAeCaBUIAJAFQCHBKB/BNIA/AmIA1AgQCTBMBnA0ICDBEIIUBAIJKA6ID6ADIEmAAIFWAAILCgBQIOgBG5gDIATA/IA1P0IgLA/MhgjABGg");
	var mask_graphics_25 = new cjs.Graphics().p("EgvzAN5Ig2nCQCAjsCujZIA1hBQCViyCSiXQA8g9A6g4QBehaBOhIQBLhEAxgrQAMgMARgMQBUg/AugVQAegXAHABQgBgDAngOQAkgJBiAUIA8AOQBaAcCaBUIAJAFQCFBJCABNIA/AmIA0AgID3CDICDBHIIQA/IJGA9ID6ACIEkABIFVAAQFCAAF9gBQIOgBG1gDIAPBBIA1PuIgIBDMhgDABGg");
	var mask_graphics_26 = new cjs.Graphics().p("EgvhAN4Ig1nAQB/jrCtjXIA1hBQCViyCRiVQA7g9A5g4QBdhaBPhIQBIhCAzgsQANgMAQgMQBThBArgYQAggXAFAAQgCgDAogPQAjgKBjASIA8AOQBYAaCbBVIAJAFQCEBICABMIA+AmIA1AgID0CGICABJIIPA/IJDA/ID4ACIEkABIFTABIK8gBQIMgCGxgDIANBEIA1PpIgGBFMhfiABGg");
	var mask_graphics_27 = new cjs.Graphics().p("EgvOAN3Ig1m+QB/jpCrjXIA1hBQCTiwCRiVQA6g9A6g4QBchZBOhIQBGhAA1guQANgMAPgMQBUhDAogZQAggZAEAAQgDgEAogQQAjgLBkARIA7ANQBXAZCcBUIAJAFQCDBHB/BNIA/AlIA1AgIDxCKIB+BLIIMA/IJABBID4ACIEiABIFSABQE7AAF9gBQIMgCGsgDIAKBHIA1PkIgDBHMhfCABGg");
	var mask_graphics_28 = new cjs.Graphics().p("EgvwAG7QB9joCsjWIAzhBQCTivCQiVQA5g8A5g4QBchYBOhIQBEg/A3gvIAcgYQBThFAlgcQAhgZADgBQgEgEApgRQAhgNBlARIA8AMQBVAXCdBVIAJAFQCBBFCABNIA+AlIA1AgIDuCOIB9BNIIJA+II9BDID3ACIEhACIFPABIK2gBQILgCGogDIAHBJIA0PeIABBLMheiABGg");
	var mask_graphics_29 = new cjs.Graphics().p("EgvfAG8QCQkJDLjzQDMj1DHjBQDDi+CJh0QCGhyAFgCQgGgFAqgSQApgSCYAfQBVAWCdBVQCjBXClBkQC0BtBrBEIB7BPIRACDQICAIQVgEQIKgBGjgEIA9RyMheDABGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:930.2,y:409.2}).wait(1).to({graphics:mask_graphics_1,x:932.1,y:409.4}).wait(1).to({graphics:mask_graphics_2,x:933.9,y:409.7}).wait(1).to({graphics:mask_graphics_3,x:935.8,y:409.8}).wait(1).to({graphics:mask_graphics_4,x:937.7,y:410}).wait(1).to({graphics:mask_graphics_5,x:939.6,y:410.1}).wait(1).to({graphics:mask_graphics_6,x:941.5,y:410.3}).wait(1).to({graphics:mask_graphics_7,x:943.4,y:410.4}).wait(1).to({graphics:mask_graphics_8,x:945.3,y:410.5}).wait(1).to({graphics:mask_graphics_9,x:947.2,y:410.6}).wait(1).to({graphics:mask_graphics_10,x:949.1,y:410.7}).wait(1).to({graphics:mask_graphics_11,x:950.9,y:410.7}).wait(1).to({graphics:mask_graphics_12,x:952.8,y:410.7}).wait(1).to({graphics:mask_graphics_13,x:954.7,y:410.7}).wait(1).to({graphics:mask_graphics_14,x:956.6,y:410.7}).wait(1).to({graphics:mask_graphics_15,x:958.5,y:410.7}).wait(1).to({graphics:mask_graphics_16,x:960.4,y:410.6}).wait(1).to({graphics:mask_graphics_17,x:962.3,y:410.6}).wait(1).to({graphics:mask_graphics_18,x:964.2,y:410.5}).wait(1).to({graphics:mask_graphics_19,x:966.1,y:410.4}).wait(1).to({graphics:mask_graphics_20,x:967.9,y:410.3}).wait(1).to({graphics:mask_graphics_21,x:969.8,y:410.2}).wait(1).to({graphics:mask_graphics_22,x:971.7,y:410.1}).wait(1).to({graphics:mask_graphics_23,x:973.6,y:410}).wait(1).to({graphics:mask_graphics_24,x:975.5,y:409.9}).wait(1).to({graphics:mask_graphics_25,x:977.4,y:409.7}).wait(1).to({graphics:mask_graphics_26,x:979.3,y:409.6}).wait(1).to({graphics:mask_graphics_27,x:981.2,y:409.5}).wait(1).to({graphics:mask_graphics_28,x:983.1,y:409.3}).wait(1).to({graphics:mask_graphics_29,x:985.2,y:409.2}).wait(5).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 1
	this.instance = new lib.plate_t_09();
	this.instance.setTransform(0,269.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},34).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(571.2,313.7,708.9,191);
p.frameBounds = [rect, new cjs.Rectangle(575,314.4,705.1,190.2), new cjs.Rectangle(578.8,314.8,701.3,189.8), new cjs.Rectangle(582.6,315.1,697.5,189.5), new cjs.Rectangle(586.3,315.4,693.7,189.2), new cjs.Rectangle(590.1,315.7,689.9,188.9), new cjs.Rectangle(593.9,316,686.1,188.6), new cjs.Rectangle(597.7,316.3,682.3,188.3), new cjs.Rectangle(601.5,316.5,678.5,188.2), new cjs.Rectangle(605.3,316.7,674.7,187.9), new cjs.Rectangle(609.1,316.8,670.9,187.9), new cjs.Rectangle(612.9,316.8,667.2,187.8), new cjs.Rectangle(616.7,316.9,663.4,187.8), new cjs.Rectangle(620.5,316.9,659.6,187.8), new cjs.Rectangle(624.3,316.9,655.8,187.8), new cjs.Rectangle(628.1,316.9,652,187.8), new cjs.Rectangle(631.9,316.7,648.2,188), new cjs.Rectangle(635.7,316.5,644.4,188.1), new cjs.Rectangle(639.5,316.3,640.6,188.3), new cjs.Rectangle(643.2,316.2,636.8,188.5), new cjs.Rectangle(647,316,633,188.7), new cjs.Rectangle(650.8,315.8,629.2,188.9), new cjs.Rectangle(654.6,315.5,625.4,189.1), new cjs.Rectangle(658.4,315.3,621.6,189.3), new cjs.Rectangle(662.2,315.1,617.8,189.6), new cjs.Rectangle(666,314.8,614,189.8), new cjs.Rectangle(669.8,314.6,610.3,190.1), new cjs.Rectangle(673.6,314.3,606.5,190.3), new cjs.Rectangle(677.4,314,602.7,190.6), rect=new cjs.Rectangle(681.2,313.7,598.9,191), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Crust (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpjAGoInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GIgOQGHgND1AFQD3AFAIACIcmAAIAJNag");
	var mask_graphics_1 = new cjs.Graphics().p("EgpQAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEDhHGXhbQGYhbHHg+QG3g3GHgOQGIgND1AFQD2AFAIACIcBAAIAKNag");
	var mask_graphics_2 = new cjs.Graphics().p("Ego9AGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGXhbHHg+QG4g3GHgOQGHgND2AFQD2AFAIACIbbAAIAKNag");
	var mask_graphics_3 = new cjs.Graphics().p("EgorAGoIn0nUIFehaIC+DaIGkgyQAJgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GHgOQGIgND1AFQD3AFAHACIa3AAIAKNag");
	var mask_graphics_4 = new cjs.Graphics().p("EgoYAGoIn0nUIFehaIC+DaIGkgyQAJgEEChFQEDhHGYhbQGXhbHHg+QG4g3GHgOQGHgND2AFQD2AFAIACIaRAAIAKNag");
	var mask_graphics_5 = new cjs.Graphics().p("EgoGAGoInznUIFdhaIC/DaIGjgyQAJgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GHgOQGIgND1AFQD3AFAHACIZtAAIAJNag");
	var mask_graphics_6 = new cjs.Graphics().p("EgnzAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEChHGZhbQGWhbHIg+QG3g3GHgOQGIgND1AFQD3AFAHACIZHAAIAKNag");
	var mask_graphics_7 = new cjs.Graphics().p("EgngAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGWhbHIg+QG4g3GHgOQGIgND1AFQD2AFAIACIYhAAIAKNag");
	var mask_graphics_8 = new cjs.Graphics().p("EgnNAGoIn0nUIFehaIC+DaIGkgyQAHgEEEhFQEDhHGYhbQGVhaHJg/QG3g3GIgOQGHgND2AFQD2AFAIACIX8AAIAJNag");
	var mask_graphics_9 = new cjs.Graphics().p("Egm7AGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGWhaHJg/QG3g3GHgOQGIgND1AFQD2AFAIACIXXAAIAKNag");
	var mask_graphics_10 = new cjs.Graphics().p("EgmoAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGVhaHJg/QG4g3GHgOQGIgND1AFQD2AFAIACIWxAAIAKNag");
	var mask_graphics_11 = new cjs.Graphics().p("EgmWAGoIn0nUIFehaIC+DaIGkgyQAJgEEDhFQEChHGZhbQGVhaHJg/QG3g3GHgOQGJgND0AFQD3AFAHACIWNAAIAKNag");
	var mask_graphics_12 = new cjs.Graphics().p("EgmDAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGZhbQGUhaHJg/QG4g3GHgOQGJgND0AFQD3AFAHACIVnAAIAKNag");
	var mask_graphics_13 = new cjs.Graphics().p("EglxAGoInznUIFehaIC+DaIGjgyQAIgEEEhFQEChHGZhbQGVhaHJg/QG3g3GHgOQGKgNDzAFQD4AFAGACIVDAAIAJNag");
	var mask_graphics_14 = new cjs.Graphics().p("EgleAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEChHGZhbQGUhaHKg/QG3g3GHgOQGJgND0AFQD3AFAHACIUdAAIAKNag");
	var mask_graphics_15 = new cjs.Graphics().p("EglLAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGVhaHJg/QG4g2GHgPQGJgND0AFQD3AFAHACIT3AAIAKNag");
	var mask_graphics_16 = new cjs.Graphics().p("Egk4AGoIn1nUIFehaIC+DaIGlgyQAHgEEEhFQEChHGZhbQGUhaHKg/QG4g2GHgPQGJgND0AFQD2AFAIACITSAAIAJNag");
	var mask_graphics_17 = new cjs.Graphics().p("EgkmAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEChHGZhbQGUhaHKg/QG4g2GHgPQGJgND0AFQD3AFAHACIStAAIAKNag");
	var mask_graphics_18 = new cjs.Graphics().p("EgkTAGoIn0nUIFehaIC+DaIGkgyQAHgEEEhFQEChHGZhbQGUhaHKg/QG4g2GHgPQGJgND0AFQD3AFAHACISHAAIAKNag");
	var mask_graphics_19 = new cjs.Graphics().p("EgkBAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEChHGZhbQGThaHLg/QG3g2GHgPQGKgNDzAFQD3AFAHACIRjAAIAKNag");
	var mask_graphics_20 = new cjs.Graphics().p("EgjuAGoIn0nUIFehaIC+DaIGkgyQAHgEEFhFQEBhHGahbQGThaHKg/QG4g2GHgPQGKgNDzAFQD3AFAHACIQ9AAIAKNag");
	var mask_graphics_21 = new cjs.Graphics().p("EgjcAGoInznUIFehaIC+DaIGjgyQAIgEEEhFQEChHGZhbQGThaHLg/QG3g2GIgPQGKgNDyAFQD4AFAGACIQZAAIAJNag");
	var mask_graphics_22 = new cjs.Graphics().p("EgjJAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEBhHGahbQGShaHKg/QG5g2GHgPQGKgNDzAFQD3AFAHACIPzAAIAKNag");
	var mask_graphics_23 = new cjs.Graphics().p("Egi2AGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEChHGZhbQGThaHJg/QG6g2GHgPQGKgNDzAFQD3AFAHACIPNAAIAKNag");
	var mask_graphics_24 = new cjs.Graphics().p("EgijAGoIn1nUIFehaIC+DaIGlgyQAHgEEEhFQEChHGZhbQGShaHKg/QG6g2GGgPQGLgNDzAFQD2AFAHACIOpAAIAJNag");
	var mask_graphics_25 = new cjs.Graphics().p("EgiRAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEChHGZhbQGShaHKg/QG6g2GHgPQGLgNDyAFQD4AFAGACIODAAIAKNag");
	var mask_graphics_26 = new cjs.Graphics().p("Egh+AGoIn0nUIFehaIC+DaIGkgyQAHgEEEhFQEChHGZhbQGShaHKg/QG6g2GHgPQGLgNDyAFQD3AFAHACINdAAIAKNag");
	var mask_graphics_27 = new cjs.Graphics().p("EghsAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEBhHGahbQGRhaHLg/QG5g2GHgPQGLgNDyAFQD4AFAGACIM5AAIAKNag");
	var mask_graphics_28 = new cjs.Graphics().p("EghZAGoIn0nUIFehaIC+DaIGkgyQAHgEEFhFQEBhHGahbQGQhaHMg/QG5g2GHgPQGLgNDyAFQD3AFAHACIMTAAIAKNag");
	var mask_graphics_29 = new cjs.Graphics().p("EghHAGoInznUIFehaIC+DaIGkgyQAHgEEEhFQEChHGZhbQGRhaHLg/QG5g2GIgPQGLgNDxAFQD4AFAHACILuAAIAJNag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:966.2,y:490.5}).wait(1).to({graphics:mask_graphics_1,x:968,y:490.5}).wait(1).to({graphics:mask_graphics_2,x:969.9,y:490.5}).wait(1).to({graphics:mask_graphics_3,x:971.7,y:490.5}).wait(1).to({graphics:mask_graphics_4,x:973.6,y:490.5}).wait(1).to({graphics:mask_graphics_5,x:975.5,y:490.5}).wait(1).to({graphics:mask_graphics_6,x:977.3,y:490.5}).wait(1).to({graphics:mask_graphics_7,x:979.2,y:490.5}).wait(1).to({graphics:mask_graphics_8,x:981.1,y:490.5}).wait(1).to({graphics:mask_graphics_9,x:982.9,y:490.5}).wait(1).to({graphics:mask_graphics_10,x:984.8,y:490.5}).wait(1).to({graphics:mask_graphics_11,x:986.6,y:490.5}).wait(1).to({graphics:mask_graphics_12,x:988.5,y:490.5}).wait(1).to({graphics:mask_graphics_13,x:990.4,y:490.5}).wait(1).to({graphics:mask_graphics_14,x:992.2,y:490.5}).wait(1).to({graphics:mask_graphics_15,x:994.1,y:490.5}).wait(1).to({graphics:mask_graphics_16,x:996,y:490.5}).wait(1).to({graphics:mask_graphics_17,x:997.8,y:490.5}).wait(1).to({graphics:mask_graphics_18,x:999.7,y:490.5}).wait(1).to({graphics:mask_graphics_19,x:1001.5,y:490.5}).wait(1).to({graphics:mask_graphics_20,x:1003.4,y:490.5}).wait(1).to({graphics:mask_graphics_21,x:1005.3,y:490.5}).wait(1).to({graphics:mask_graphics_22,x:1007.1,y:490.5}).wait(1).to({graphics:mask_graphics_23,x:1009,y:490.5}).wait(1).to({graphics:mask_graphics_24,x:1010.9,y:490.5}).wait(1).to({graphics:mask_graphics_25,x:1012.7,y:490.5}).wait(1).to({graphics:mask_graphics_26,x:1014.6,y:490.5}).wait(1).to({graphics:mask_graphics_27,x:1016.4,y:490.5}).wait(1).to({graphics:mask_graphics_28,x:1018.3,y:490.5}).wait(1).to({graphics:mask_graphics_29,x:1020.2,y:490.5}).wait(5).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 1
	this.instance = new lib.plate_t_07();
	this.instance.setTransform(0,275.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},34).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(650.2,447.1,629.9,86.9);
p.frameBounds = [rect, new cjs.Rectangle(653.9,447.1,626.2,86.9), new cjs.Rectangle(657.6,447.1,622.4,86.9), new cjs.Rectangle(661.3,447.1,618.7,86.9), new cjs.Rectangle(665.1,447.1,615,86.9), new cjs.Rectangle(668.8,447.1,611.3,86.9), new cjs.Rectangle(672.5,447.1,607.5,86.9), new cjs.Rectangle(676.2,447.1,603.8,86.9), new cjs.Rectangle(680,447.1,600.1,86.9), new cjs.Rectangle(683.7,447.1,596.4,86.9), new cjs.Rectangle(687.4,447.1,592.6,86.9), new cjs.Rectangle(691.1,447.1,588.9,86.9), new cjs.Rectangle(694.9,447.1,585.2,86.9), new cjs.Rectangle(698.6,447.1,581.5,86.9), new cjs.Rectangle(702.3,447.1,577.7,86.9), new cjs.Rectangle(706,447.1,574,86.9), new cjs.Rectangle(709.8,447.1,570.3,86.9), new cjs.Rectangle(713.5,447.1,566.6,86.9), new cjs.Rectangle(717.2,447.1,562.8,86.9), new cjs.Rectangle(720.9,447.1,559.1,86.9), new cjs.Rectangle(724.7,447.1,555.4,86.9), new cjs.Rectangle(728.4,447.1,551.7,86.9), new cjs.Rectangle(732.1,447.1,547.9,86.9), new cjs.Rectangle(735.8,447.1,544.2,86.9), new cjs.Rectangle(739.6,447.1,540.5,86.9), new cjs.Rectangle(743.3,447.1,536.8,86.9), new cjs.Rectangle(747,447.1,533,86.9), new cjs.Rectangle(750.7,447.1,529.3,86.9), new cjs.Rectangle(754.5,447.1,525.6,86.9), rect=new cjs.Rectangle(758.2,447.1,521.9,86.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_035 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AQlJpMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFNgyEogYQEqgZC/gJQB+gEgUgCIFYgCMAidgAJIA9Tgg");
	var mask_graphics_1 = new cjs.Graphics().p("EgpEAJeIq8qnIEBiUIFIgWIDbDhIDOgXIIjioIANgDQAGgDCjguIAQgEQCtgwEQg/IASgEQEThAE0gxIAYgFQC2gbCvgUQB3gOBvgJIAqgDQEAgWCygIIA2gDIAwgCQBJgEgOgBIFCgFMAiygAIIA9Thg");
	var mask_graphics_2 = new cjs.Graphics().p("EgpEAJfIq8qnIEBiUIFIgWIDbDhIDPgXIIiioIANgDQAGgDCjguIAQgEQCtgwEQg/IASgEQEThAE1gxIAXgFQC2gcCwgSQB3gOBvgKIAqgDQEAgVCxgIIA3gDIAwgCQBJgEgPgBIFCgHMAiygAIIA9Thg");
	var mask_graphics_3 = new cjs.Graphics().p("EgpEAJeIq8qmIEBiVIFIgVIDcDiIDOgZIIiinIANgEQAIgDChgtIAQgEQCugwEQg/IASgEQEShAE1gyIAXgEQC2gbCxgUQB2gMBwgKIApgDQEAgUCygJIA3gCIAwgDQBIgEgOgCIFCgJMAixgAHIA9TgIg1ADg");
	var mask_graphics_4 = new cjs.Graphics().p("EgpEAJgIq8qmIEBiVIFIgVIDcDhIDOgYIIjinIAMgFICpgvIAQgFQCugwEQg/IASgEQEShAE1gyIAYgDQC0gbCzgUQB2gMBwgJIApgDQD+gVC0gHIA3gEIAwgCQBHgEgNgCIFBgMMAiNgAJIAkACIA9ThIg0AEg");
	var mask_graphics_5 = new cjs.Graphics().p("EgpEAJhIq8qmIEBiVIFIgVIDcDhIDOgYIIjinIANgFICpgvIAQgFQCtgwEQg/IASgEQEThAE1gyIAXgDQC0gcCzgSQB3gMBwgKIApgCQD+gUC0gIIA4gDIAvgCQBHgFgNgCIFBgPMAiNgAJIAjADIA9ThIgzAFg");
	var mask_graphics_6 = new cjs.Graphics().p("EgpEAJiIq8qmIEBiVIFIgVIDcDhIDOgYIIjioIANgEQAJgDCggtIAQgEQCugwEQg/IASgEQEShAE1gyIAYgEQCygbC1gSQB4gMBugJIApgDQD+gTC1gIIA4gDIAvgCQBGgFgMgCIFAgSMAiNgAJIAjAEIA9ThIgyAGg");
	var mask_graphics_7 = new cjs.Graphics().p("EgpDAJjIq9qmIEBiVIFIgVIDcDhIDOgYIIjioIANgEQAKgDCfgtIAQgEQCtgwERg/IASgEQEShAE1gyIAYgEQCygaC2gSQB3gMBvgJIApgDQD9gTC2gIIA4gCIAvgCQBFgGgLgCIE/gVMAiOgAJIAiAFIA9ThIgxAHg");
	var mask_graphics_8 = new cjs.Graphics().p("EgpDAJkIq9qnIECiUIFHgWIDcDiIDPgYIIjioIANgEQAKgECfgsIAPgEQCugwERg/IASgFQESg/E1gyIAYgEQCxgaC2gSQB4gMBvgIIApgDQD9gTC2gHIA3gDIAwgCQBFgGgKgDIE+gWMAiOgAJIAiAEIA7TiIgvAHg");
	var mask_graphics_9 = new cjs.Graphics().p("EgpDAJlIq9qnIECiUIFIgWIDcDjIDOgZIIjioIANgEQALgECegsIAQgEQCtgwERg/IASgFQESg/E2gyIAXgEQCxgaC3gSQB4gLBvgJIApgCQD8gTC3gHIA3gCIAwgDQBEgGgJgDIE9gaMAiPgAJIAhAGIA7TiIguAIg");
	var mask_graphics_10 = new cjs.Graphics().p("EgpDAJmIq9qnIECiUIFIgWIDcDjIDOgZIIjioIANgEICpgwIAQgEQCugwEQg/IASgFQETg/E1gyIAXgEQCwgbC5gRQB4gLBugIIAqgCQD7gTC4gHIA3gCIAwgDQBDgFgIgEIE8gdMAiPgAJIAhAHIA7TiIgtAJg");
	var mask_graphics_11 = new cjs.Graphics().p("EgpDAJmIq9qmIECiVIFIgVIDcDiIDOgZIIjinIAOgFQALgECegrIAPgEQCugwERhAIASgEQESg/E2gyIAXgEQCvgaC5gRQB5gLBugIIAqgDQD6gRC5gHIA3gDIAwgCQBCgGgHgEIE8gfMAiPgAJIAgAHIA7TiIgsAKg");
	var mask_graphics_12 = new cjs.Graphics().p("EgpDAJnIq9qmIECiVIFIgVIDcDiIDPgZIIiioIAOgEICpgwIAPgEQCugwERg/IASgEQEShAE2gyIAXgDQCugaC7gRQB5gLBugHIAqgDQD5gRC6gHIA3gDIAwgCQBCgGgHgEIE7giMAiQgAJIAfAIIA7TiIgrALg");
	var mask_graphics_13 = new cjs.Graphics().p("EgpDAJoIq9qmIECiVIFIgVIDcDiIDPgZIIjioIANgEQANgECcgsIAQgEQCugwEQhAIASgDQEThAE1gyIAYgDQCtgaC8gQQB5gMBtgGIAqgDQD5gRC7gHIA3gCIAwgDQBBgGgGgFIE6gkMAiQgAJIAfAIIA7TiIgqANg");
	var mask_graphics_14 = new cjs.Graphics().p("EgpDAJpIq9qmIECiVIFIgVIDcDiIDPgZIIjioIAOgEQANgECbgsIAQgEQCugwERhAIASgDQEShAE2gyIAXgDQCtgaC8gQQB6gLBtgHIAqgCQD5gRC7gHIA3gCIAwgCQBAgHgFgFIE6gnMAiQgAJIAeAJIA7TiIgpAOg");
	var mask_graphics_15 = new cjs.Graphics().p("EgpCAJqIq+qmIECiWIFIgUIDcDiIDPgaIIjinIAOgEQAOgFCbgrIAPgEQCugwERhAIASgEQESg/E2gyIAXgEQCsgZC+gQQB6gKBtgHIAqgDQD4gQC8gGIA3gDIAwgCQA/gHgEgFIE5gqMAiRgAJIAdAKIA7TjIgoAOg");
	var mask_graphics_16 = new cjs.Graphics().p("EgpCAJrIq+qmIECiWIFIgUIDcDiIDPgaIIjinIAOgEQAPgFCagrIAPgEQCugwERhAIASgEQETg/E1gyIAYgEQCrgZC/gQQB5gKBtgGIArgDQD3gPC9gHIA3gCIAwgDQA/gHgEgFIE4gtMAiRgAJIAdALIA7TjIgnAPg");
	var mask_graphics_17 = new cjs.Graphics().p("EgpCAJsIq+qmIECiWIFIgUIDcDiIDPgaIIjinIAOgFQAPgFCagqIAQgEQCugwEQhAIASgEQETg/E2gyIAXgEQCqgZDBgPQB5gKBtgHIAqgCQD3gPC+gGIA3gDIAwgCQA+gIgDgFIE4gwMAiRgAJIAcAMIA7TjIgmAQg");
	var mask_graphics_18 = new cjs.Graphics().p("EgpCAJtIq+qnIECiVIFIgVIDcDjIDPgaIIkioIAOgEICogwIAQgDQCugxERg/IASgEQEShAE2gyIAYgEQCpgZDBgOQB6gKBtgGIAqgCQD2gPC/gGIA3gDIAwgCQA9gIgCgGIE3gxMAiSgAJIAbAMIA7TiIglARg");
	var mask_graphics_19 = new cjs.Graphics().p("EgpCAJuIq+qnIECiVIFIgVIDcDjIDQgaIIjioIAOgEQAQgFCZgrIAPgEQCugwERhAIASgEQETg/E2gyIAXgDQCpgZDCgPQB6gJBsgGIArgCQD1gPC/gGIA4gDIAwgCQA8gIgBgGIE3g1MAiRgAJIAbANIA7TjIglASg");
	var mask_graphics_20 = new cjs.Graphics().p("EgpCAJuIq+qmIECiVIFIgVIDcDiIDQgZIIjioIAOgEQARgGCYgqIAPgEQCvgwEQhAIASgEQETg/E2gyIAXgEQCogYDEgPQB6gJBsgGIArgCQD1gOC/gFIA4gDIAwgDQA8gIgBgGIE2g3MAiSgAJIAaANIA7TjIgkATg");
	var mask_graphics_21 = new cjs.Graphics().p("EgpCAJvIq+qmIECiVIFJgVIDcDhIDPgYIIjioIAOgEQASgGCXgqIAQgEQCugwERhAIASgEQESg/E2gyIAYgEQCngYDEgOQB7gJBsgGIAqgCQD1gODAgFIA4gDIAwgCQA7gJAAgGIE1g6MAiTgAJIAZAOIA7TjIgjAUg");
	var mask_graphics_22 = new cjs.Graphics().p("EgpCAJwIq+qmIECiWIFJgUIDcDhIDPgZIIkinIAOgFQASgFCXgqIAPgFQCugvERhAIASgEQETg/E2gyIAXgEQCmgZDGgNQB7gJBsgFIAqgDQD0gNDBgFIA4gDIAwgCQA6gIABgIIE1g8MAiSgAJIAZAOIA7TkIgiAVg");
	var mask_graphics_23 = new cjs.Graphics().p("EgpCAJxIq+qmIEDiWIFIgUIDcDhIDQgZIIjinIAOgFQATgGCWgpIAQgFQCugvERhAIASgEQETg/E2gyIAXgEQClgZDHgNQB7gIBrgFIArgCQDzgNDDgFIA3gEIAwgBQA6gKACgHIEzg/MAiTgAJIAZAQIA6TjIggAWg");
	var mask_graphics_24 = new cjs.Graphics().p("EgpBAJyIq/qmIEDiWIFIgUIDcDhIDQgZIIkioIANgEICpgwIAQgEQCugwERg/IASgEQEShAE3gyIAXgDQCkgYDJgNQB7gJBrgFIArgCQDygMDEgFIA3gDIAwgCQA5gJADgIIEyhCMAiUgAJIAYAQIA6TkIgfAXg");
	var mask_graphics_25 = new cjs.Graphics().p("EgpBAJzIq/qmIEDiWIFIgUIDcDhIDQgZIIkioIAOgEICogwIAQgEQCugwERg/IASgEQEThAE2gyIAXgEQCkgXDKgNQB7gIBrgFIArgCQDxgMDEgFIA4gDIAxgCQA3gJAEgIIEyhFMAiTgAJIAYARIA6TkIgeAYg");
	var mask_graphics_26 = new cjs.Graphics().p("EgpBAJ0Iq/qmIEDiWIFIgUIDcDhIDQgZIIkioIAOgEQAUgHCVgpIAPgEQCugwEShAIASgEQETg/E2gyIAXgEQCjgXDKgNQB7gIBsgEIAqgCQDygMDEgEIA4gDIAxgDQA2gJAFgIIExhIMAiUgAJIAXASIA6TkIgeAZg");
	var mask_graphics_27 = new cjs.Graphics().p("EgpBAJ1Iq/qnIEDiVIFJgVIDbDiIDQgZIIkipIAPgDICogxIAPgDQCvgwERhAIASgEQESg/E3gzIAXgDQCigXDMgNQB8gIBrgDIArgDQDwgKDFgFIA4gDIAxgDQA1gJAGgJIEwhJMAiVgAJIAWASIA6TkIgdAZg");
	var mask_graphics_28 = new cjs.Graphics().p("EgpBAJ2Iq/qnIEDiVIFJgVIDbDiIDQgZIIkipIAPgDQAVgICTgpIAPgDQCwgwEQhAIASgEQETg/E3gzIAXgDQChgXDMgMQB8gIBrgDIArgCQDwgMDGgDIA4gDIAxgDQA1gKAGgJIEwhMMAiUgAJIAWASIA6TlIgcAag");
	var mask_graphics_29 = new cjs.Graphics().p("EgpBAJ2Iq/qmIEDiVIFJgVIDbDiIDQgZIIkipIAPgEQAVgHCTgpIAQgEQCugwESg/IASgEQEShAE3gyIAXgDQCggXDOgMQB9gHBqgEIArgCQDvgKDHgEIA4gDIAwgDQA1gKAHgJIEvhPMAiVgAJIAVATIA6TlIgbAbg");
	var mask_graphics_30 = new cjs.Graphics().p("EgpBAJ3Iq/qmIEDiVIFJgVIDbDiIDQgZIIkipIAPgEICpgwIAPgEQCvgwERg/IASgEQEShAE3gyIAXgDQCggXDPgMQB8gHBqgDIAsgCQDugKDIgEIA4gDIAwgDQA0gKAIgJIEuhSMAiWgAJIAUAUIA6TlIgaAcg");
	var mask_graphics_31 = new cjs.Graphics().p("EgpBAJ4Iq/qmIEDiWIFJgUIDbDhIDQgZIIlioIAPgEICogwIAPgEQCvgwERg/IASgFQETg/E3gyIAXgEQCfgXDPgKQB9gIBqgDIAsgCQDugJDIgEIA4gDIAwgDQAzgKAJgKIEuhUMAiWgAJIATAVIA6TkIgZAeg");
	var mask_graphics_32 = new cjs.Graphics().p("EgpAAJ5IrAqmIEDiWIFJgUIDbDhIDRgZIIkioIAPgEQAXgICRgoIAPgEQCwgwERg/IASgFQESg/E3gyIAYgEQCdgWDRgLQB8gGBqgEIAsgCQDugJDJgEIA4gCIAwgDQAzgLAJgKIEthXMAiWgAJIATAVIA6TlIgYAfg");
	var mask_graphics_33 = new cjs.Graphics().p("EgpAAJ6IrAqmIEDiWIFJgUIDcDiIDQgaIIkioIAPgFICogvIAQgEQCvgwERhAIASgEQESg/E4gyIAXgEQCdgWDSgLQB7gGBrgDIAsgCQDtgJDKgDIA4gDIAwgDQAygLAKgKIEshaMAiXgAJIASAWIA6TlIgXAgg");
	var mask_graphics_34 = new cjs.Graphics().p("EgpAAJ7IrAqmIEDiWIFJgUIDcDiIDQgaIIkipIAPgEQAYgICRgoIAPgEQCvgwERg/IASgEQEThAE3gyIAYgDQCcgWDSgKQB8gHBrgDIArgBQDugJDKgDIA4gDIAwgCQAygMAKgKIEshdMAiXgAJIARAXIA6TlIgWAhg");
	var mask_graphics_35 = new cjs.Graphics().p("EgpAAJ8IrAqmIEDiWIFJgUIDcDiIDQgaIIkipIAQgEQAYgICQgoIAPgEQCvgwERg/IASgEQEUhAE2gyIAYgDQCbgWDVgKQB7gGBrgDIArgBQDtgIDLgDIA4gDIAwgDQAxgMALgKIEshgMAiWgAJIARAYIA6TmIgVAhg");
	var mask_graphics_36 = new cjs.Graphics().p("Ego/AJ9IrBqnIEDiVIFJgVIDcDjIDQgaIIlipIAPgEICpgwIAOgEQCwgwEQhAIATgDQEShAE3gyIAYgDQCbgWDVgKQB7gGBrgCIAsgCQDsgHDLgDIA5gDIAwgDQAwgLAMgMIErhiMAiXgAJIAQAYIA6TmIgUAig");
	var mask_graphics_37 = new cjs.Graphics().p("Ego/AJ+IrBqnIEEiVIFIgVIDcDjIDRgaIIkipIAPgFICpgvIAPgEQCvgwERhAIASgDQEThAE3gyIAYgDQCagWDWgKQB8gFBqgCIAsgCQDrgHDNgDIA4gDIAwgCQAvgMAOgMIEphkMAiYgAJIAQAYIA5TmIgTAjg");
	var mask_graphics_38 = new cjs.Graphics().p("Ego/AJ+IrBqmIEEiVIFIgVIDcDiIDRgZIIlipIAPgFICogvIAPgEQCwgwEQhAIASgEQEUg/E3gyIAXgEQCZgVDYgJQB8gGBqgCIAsgBQDqgHDOgDIA4gDIAwgCQAvgMAOgMIEphnMAiXgAJIAQAZIA5TmIgSAkg");
	var mask_graphics_39 = new cjs.Graphics().p("Ego/AJ/IrBqmIEEiVIFJgVIDcDjIDQgaIIlipIAPgFICogvIAQgEQCvgwERhAIASgEQETg/E3gyIAYgEQCYgVDYgJQB8gFBrgCIAsgBQDpgHDPgCIA4gDIAwgDQAugMAPgMIEohqMAiYgAJIAPAaIA5TmIgRAlg");
	var mask_graphics_40 = new cjs.Graphics().p("Ego/AKAIrBqmIEEiWIFJgUIDcDiIDQgaIIlipIAPgEICpgvIAPgFQCvgvERhAIASgEQEThAE3gxIAYgEQCXgWDagIQB8gFBrgCIAsgBQDpgFDPgDIA4gDIAwgCQAtgNAQgMIEnhtMAiZgAJIAOAbIA5TmIgQAmg");
	var mask_graphics_41 = new cjs.Graphics().p("Ego/AKBIrBqmIEEiWIFJgUIDcDiIDRgaIIkipIAPgEQAdgJCMgnIAPgEQCvgwERg/IASgFQEUg/E3gyIAXgDQCXgVDbgJQB8gEBqgCIAsgBQDpgFDPgDIA5gDIAwgCQAsgNARgMIEnhwMAiYgAJIAOAbIA5TnIgQAng");
	var mask_graphics_42 = new cjs.Graphics().p("Ego/AKCIrBqmIEEiWIFJgUIDcDiIDRgaIIlipIAPgEICogwIAPgEQCwgwERhAIASgEQETg/E3gyIAYgDQCWgVDbgIQB9gFBqgBIAsgBQDogFDQgCIA5gDIAwgDQAsgNARgNIEmhyMAiZgAJIANAcIA5TnIgPAog");
	var mask_graphics_43 = new cjs.Graphics().p("Ego/AKDIrBqmIEEiWIFJgUIDcDiIDRgaIIlipIAPgFICpgvIAPgEQCvgwERhAIASgEQETg/E4gyIAXgDQCVgVDdgIQB9gEBqgBIAsgBQDngFDRgCIA5gDIAwgDQArgNASgNIEmh1MAiZgAJIAMAdIA5TnIgOApg");
	var mask_graphics_44 = new cjs.Graphics().p("Ego/AKEIrBqmIEEiWIFJgUIDcDiIDRgaIIlipIAPgFICpgvIAPgEQCvgwERhAIASgEQEUg/E3gyIAYgDQCUgVDegHQB9gFBpAAIAtgBQDmgFDSgBIA5gEIAwgCQAqgOATgNIElh4MAiZgAJIAMAeIA5TnIgNAqg");
	var mask_graphics_45 = new cjs.Graphics().p("Ego+AKFIrCqnIEEiVIFJgVIDcDkIDRgbIIlipIAPgFQAfgKCKgmIAPgDQCwgxEQg/IASgEQEUg/E3gzIAYgDQCTgUDggHQB9gEBpgBIAsgBQDmgEDTgBIA5gEIAwgCQApgOAUgNIEkh7MAiagAJIALAeIA5ToIgMAqg");
	var mask_graphics_46 = new cjs.Graphics().p("Ego+AKGIrCqnIEEiVIFJgVIDcDkIDRgbIIlipIAQgFICogwIAPgDQCwgxERg/IASgEQETg/E4gzIAXgDQCTgUDggHQB+gDBpgBIAsgBQDmgDDTgBIA5gEIAwgDQApgOAUgOIEkh9MAiagAJIAKAfIA5ToIgLArg");
	var mask_graphics_47 = new cjs.Graphics().p("Ego+AKGIrCqmIEEiWIFJgUIDcDjIDRgbIImipIAPgEQAggKCJgmIAPgEQCvgwERg/IASgEQEUhAE3gyIAYgDQCSgUDhgHQB+gDBoAAIAtgBQDlgEDUgBIA5gDIAwgDQAogOAVgOIEjh/MAiagAJIAKAfIA5ToIgKAsg");
	var mask_graphics_48 = new cjs.Graphics().p("Ego+AKHIrCqmIEEiWIFJgUIDcDjIDSgbIIlipIAPgEICpgwIAPgEQCvgwERhAIASgEQEUg/E3gyIAYgDQCRgUDjgGQB9gEBpABIAtgBQDkgDDVgBIA5gDIAwgDQAngPAWgOIEiiCMAibgAJIAJAgIA5ToIgJAtg");
	var mask_graphics_49 = new cjs.Graphics().p("Ego+AKIIrCqmIEEiWIFJgUIDcDjIDSgbIIliqIAQgDICogwIAPgFQCwgvERhAIASgEQEThAE4gxIAYgEQCQgTDjgGQB+gDBpAAIAtgBIG5gDIA5gDIAwgDQAmgPAXgOIEiiFMAibgAJIAIAgIA5ToIgIAvg");
	var mask_graphics_50 = new cjs.Graphics().p("Ego+AKJIrCqmIEEiWIFJgUIDcDjIDSgcIIlipIAQgEICogvIAPgFQCwgvERhAIASgEQEUhAE3gxIAYgEQCPgTDlgFQB+gEBoABIAtgBQDjgCDXAAIA5gEIAwgDQAmgPAXgOIEhiIMAibgAJIAIAhIA5ToIgHAwg");
	var mask_graphics_51 = new cjs.Graphics().p("Ego+AKKIrCqmIEEiWIFKgUIDcDjIDRgdIIlioIAQgEICpgvIAPgFQCvgvERhAIASgEQEUhAE4gxIAXgEQCPgTDmgFQB+gDBoABIAtgBIG6gCIA5gDIAwgEQAlgPAYgPIEgiKMAicgAJIAHAiIA5ToIgGAxg");
	var mask_graphics_52 = new cjs.Graphics().p("Ego+AKLIrBqmIEEiWIFJgUIDcDjIDRgdIImioIAQgEQAigLCGglIAPgEQCwgwERg/IASgEQEThAE4gyIAYgDQCOgTDmgFQCAgDBnABIAtAAQDigCDYAAIA5gDIAwgDQAlgPAZgQIEfiNMAicgAJIAGAjIA5ToIgFAyg");
	var mask_graphics_53 = new cjs.Graphics().p("Ego9AKMIrCqmIEEiWIFJgUIDcDjIDRgdIImioIAQgEICpgwIAOgEQCwgwERg/IASgEQEUhAE3gyIAYgDQCNgTDogFQB/gCBoABIAtAAIG6gBIA5gEIAwgDQAkgPAagQIEfiQMAicgAJIAFAjIA5TpIgEAzg");
	var mask_graphics_54 = new cjs.Graphics().p("Ego9AKNIrCqnIEEiVIFJgVIDcDkIDRgdIImioIAQgFQAkgKCFglIAOgEQCwgwERhAIASgDQEVhAE3gyIAYgDQCMgTDpgFQB/gBBnABIAtgBIG7AAIA5gDIAwgEQAjgQAagPIEfiSMAicgAJIAFAjIA5TpIgDAzg");
	var mask_graphics_55 = new cjs.Graphics().p("Ego9AKOIrCqnIEEiVIFJgVIDcDkIDSgdIIlioIARgFQAkgKCEglIAPgEQCwgwERhAIASgDQEThAE4gyIAYgDQCLgTDrgEQB/gCBnABIAtAAIG7AAIA5gDIAwgDQAigQAbgQIEeiWMAidgAJIAEAlIA5TpIgCA0g");
	var mask_graphics_56 = new cjs.Graphics().p("Ego9AKOIrCqmIEEiWIFJgUIDcDkIDSgeIImioIAQgEICogwIAPgEQCwgwERg/IASgEQEUhAE4gyIAYgDQCKgSDsgEQB/gCBnACIAtAAIG7AAIA4gDIAxgDQAigQAbgQIEeiYMAidgAJIA8UOIgCA1g");
	var mask_graphics_57 = new cjs.Graphics().p("Ego9AKPIrCqmIEEiWIFJgUIDdDkIDRgeIImioIAQgEICpgwIAOgEQCwgwERg/IASgEQEVhAE3gyIAYgDQCKgSDsgEQCAgBBnACIAtAAIG7ABIA4gEIAygDIA8ghIEdiaMAidgAJIA8VFg");
	var mask_graphics_58 = new cjs.Graphics().p("Ego9AKQIrDqmIEEiWIFKgUIDcDkIDSgeIImioIAPgEQAmgMCDgkIAPgEQCwgwERg/IASgFQEUg/E4gyIAYgDQCJgSDtgDQCAgBBnABIAtAAIG7ACIA5gDIAxgEIA9ghIEbidMAiegAJIA8VHg");
	var mask_graphics_59 = new cjs.Graphics().p("AQlKeMg5pgANIq8qmIEEiWIFJgUIDdDkIDRgeIImioQAGgCCzgyQC0gxEchCQEchCFCg0QCKgVEFgDQCAgBBmACIHpACIBqgGIFYjCMAidgAJIA9VJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:961,y:475.4}).wait(1).to({graphics:mask_graphics_1,x:961,y:475.3}).wait(1).to({graphics:mask_graphics_2,x:961,y:475.2}).wait(1).to({graphics:mask_graphics_3,x:961,y:475.2}).wait(1).to({graphics:mask_graphics_4,x:961,y:475}).wait(1).to({graphics:mask_graphics_5,x:961,y:474.9}).wait(1).to({graphics:mask_graphics_6,x:961,y:474.8}).wait(1).to({graphics:mask_graphics_7,x:961,y:474.7}).wait(1).to({graphics:mask_graphics_8,x:961,y:474.7}).wait(1).to({graphics:mask_graphics_9,x:961,y:474.6}).wait(1).to({graphics:mask_graphics_10,x:961,y:474.5}).wait(1).to({graphics:mask_graphics_11,x:961,y:474.4}).wait(1).to({graphics:mask_graphics_12,x:961,y:474.3}).wait(1).to({graphics:mask_graphics_13,x:961,y:474.2}).wait(1).to({graphics:mask_graphics_14,x:961,y:474.1}).wait(1).to({graphics:mask_graphics_15,x:961,y:474}).wait(1).to({graphics:mask_graphics_16,x:961,y:473.9}).wait(1).to({graphics:mask_graphics_17,x:961,y:473.8}).wait(1).to({graphics:mask_graphics_18,x:961,y:473.8}).wait(1).to({graphics:mask_graphics_19,x:961,y:473.7}).wait(1).to({graphics:mask_graphics_20,x:961,y:473.6}).wait(1).to({graphics:mask_graphics_21,x:961,y:473.5}).wait(1).to({graphics:mask_graphics_22,x:961,y:473.4}).wait(1).to({graphics:mask_graphics_23,x:961,y:473.3}).wait(1).to({graphics:mask_graphics_24,x:961,y:473.2}).wait(1).to({graphics:mask_graphics_25,x:961,y:473.1}).wait(1).to({graphics:mask_graphics_26,x:961,y:473}).wait(1).to({graphics:mask_graphics_27,x:961,y:473}).wait(1).to({graphics:mask_graphics_28,x:961,y:472.9}).wait(1).to({graphics:mask_graphics_29,x:961,y:472.8}).wait(1).to({graphics:mask_graphics_30,x:961,y:472.7}).wait(1).to({graphics:mask_graphics_31,x:961,y:472.6}).wait(1).to({graphics:mask_graphics_32,x:961,y:472.5}).wait(1).to({graphics:mask_graphics_33,x:961,y:472.4}).wait(1).to({graphics:mask_graphics_34,x:961,y:472.3}).wait(1).to({graphics:mask_graphics_35,x:961,y:472.2}).wait(1).to({graphics:mask_graphics_36,x:961,y:472.2}).wait(1).to({graphics:mask_graphics_37,x:960.9,y:472.1}).wait(1).to({graphics:mask_graphics_38,x:960.9,y:472}).wait(1).to({graphics:mask_graphics_39,x:960.9,y:471.9}).wait(1).to({graphics:mask_graphics_40,x:960.9,y:471.8}).wait(1).to({graphics:mask_graphics_41,x:960.9,y:471.7}).wait(1).to({graphics:mask_graphics_42,x:960.9,y:471.6}).wait(1).to({graphics:mask_graphics_43,x:960.9,y:471.5}).wait(1).to({graphics:mask_graphics_44,x:960.9,y:471.4}).wait(1).to({graphics:mask_graphics_45,x:960.9,y:471.4}).wait(1).to({graphics:mask_graphics_46,x:960.9,y:471.3}).wait(1).to({graphics:mask_graphics_47,x:960.9,y:471.2}).wait(1).to({graphics:mask_graphics_48,x:960.9,y:471.1}).wait(1).to({graphics:mask_graphics_49,x:960.9,y:471}).wait(1).to({graphics:mask_graphics_50,x:960.9,y:470.9}).wait(1).to({graphics:mask_graphics_51,x:960.9,y:470.8}).wait(1).to({graphics:mask_graphics_52,x:960.9,y:470.7}).wait(1).to({graphics:mask_graphics_53,x:960.9,y:470.6}).wait(1).to({graphics:mask_graphics_54,x:960.9,y:470.6}).wait(1).to({graphics:mask_graphics_55,x:960.9,y:470.5}).wait(1).to({graphics:mask_graphics_56,x:960.9,y:470.4}).wait(1).to({graphics:mask_graphics_57,x:960.9,y:470.3}).wait(1).to({graphics:mask_graphics_58,x:961,y:470.2}).wait(1).to({graphics:mask_graphics_59,x:961,y:470.1}).wait(1));

	// Lithosphere_texture
	this.instance = new lib.plate_t_010();
	this.instance.setTransform(275,333);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(628,412.9,666,125);
p.frameBounds = [rect, new cjs.Rectangle(628,412.7,666,125.2), new cjs.Rectangle(628,412.5,666,125.4), new cjs.Rectangle(628,412.3,666,125.6), new cjs.Rectangle(628,412.2,666,125.7), new cjs.Rectangle(628,412,666,125.9), new cjs.Rectangle(628,411.8,666,126.1), new cjs.Rectangle(628,411.6,666,126.3), new cjs.Rectangle(628,411.5,666,126.4), new cjs.Rectangle(628,411.3,666,126.6), new cjs.Rectangle(628,411.1,666,126.8), new cjs.Rectangle(628,410.9,666,127), new cjs.Rectangle(628,410.7,666,127.2), new cjs.Rectangle(628,410.6,666,127.3), new cjs.Rectangle(628,410.4,666,127.5), new cjs.Rectangle(628,410.2,666,127.7), new cjs.Rectangle(628,410,666,127.9), new cjs.Rectangle(628,409.8,666,128.1), new cjs.Rectangle(628,409.7,666,128.2), new cjs.Rectangle(628,409.5,666,128.4), new cjs.Rectangle(628,409.3,666,128.6), new cjs.Rectangle(628,409.1,666,128.8), new cjs.Rectangle(628,409,666,128.9), new cjs.Rectangle(628,408.8,665.9,129.1), new cjs.Rectangle(628,408.6,665.9,129.3), new cjs.Rectangle(628,408.4,665.9,129.5), new cjs.Rectangle(628,408.2,665.9,129.7), new cjs.Rectangle(628,408.1,665.9,129.8), new cjs.Rectangle(628,407.9,665.9,130), new cjs.Rectangle(628,407.7,665.9,130.2), new cjs.Rectangle(628,407.5,665.9,130.4), new cjs.Rectangle(628,407.4,665.9,130.5), new cjs.Rectangle(628,407.2,665.9,130.7), new cjs.Rectangle(628,407,665.9,130.9), new cjs.Rectangle(628,406.8,665.9,131.1), new cjs.Rectangle(628,406.6,665.9,131.3), new cjs.Rectangle(628,406.5,665.9,131.4), new cjs.Rectangle(628,406.3,665.8,131.6), new cjs.Rectangle(628,406.1,665.8,131.8), new cjs.Rectangle(628,405.9,665.8,132), new cjs.Rectangle(628,405.8,665.8,132.1), new cjs.Rectangle(628,405.6,665.8,132.3), new cjs.Rectangle(628,405.4,665.8,132.5), new cjs.Rectangle(628,405.2,665.8,132.7), new cjs.Rectangle(628,405,665.8,132.9), new cjs.Rectangle(628,404.9,665.8,133), new cjs.Rectangle(628,404.7,665.8,133.2), new cjs.Rectangle(628,404.5,665.8,133.4), new cjs.Rectangle(628,404.3,665.8,133.6), new cjs.Rectangle(628,404.2,665.8,133.7), new cjs.Rectangle(628,404,665.8,133.9), new cjs.Rectangle(628,403.8,665.8,134.1), new cjs.Rectangle(628,403.6,665.8,134.3), new cjs.Rectangle(628,403.4,665.8,134.5), new cjs.Rectangle(628,403.3,665.8,134.6), new cjs.Rectangle(628,403.1,665.8,134.8), new cjs.Rectangle(628,402.9,665.8,135), new cjs.Rectangle(628,402.7,665.8,135.2), new cjs.Rectangle(628,402.6,665.9,135.3), new cjs.Rectangle(628,402.4,666,135.5)];


(lib.plate_t_034 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,40,11);
p.frameBounds = [rect];


(lib.plate_t_033 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AijAKIAAgTIFHAAIAAATg");
	this.shape.setTransform(16.5,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAAIgQgsIBOAsIhOAtg");
	this.shape_1.setTransform(35.3,5.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,40,11);
p.frameBounds = [rect];


(lib.plate_t_031 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8323").s().p("Ag0A2QgYgLgHgCIAAgJQAAgRAQgMQAPgLA0gHQBIguAKAAQAKABgiBGQgFgDgOADQgPADgMAZQgMAZgdgNQAIAMgIAAQgGAAgRgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-6.2,17,12.4);
p.frameBounds = [rect];


(lib.plate_t_030 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFB400").ss(2,1,1).p("AACAHIAHgOAgCAIIgGgM");
	this.shape.setTransform(0.3,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFB400").ss(2,1,1).p("AAFABIARgDAgGADIgPgD");
	this.shape_1.setTransform(0.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFB400").ss(2,1,1).p("AARgFIAKAMAgPgFIgLAI");
	this.shape_2.setTransform(0.6,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFB400").ss(1,1,1).p("AAZgGIAKANAgXgGIgLAJ");
	this.shape_3.setTransform(0.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(19));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB400").s().p("AgJAKQgFgFAAgFQAAgEAFgFQAFgFAEAAQAFAAAFAFQAFAFAAAEQAAAFgFAFQgFAFgFAAQgEAAgFgFg");
	this.shape_4.setTransform(0,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB400").s().p("AAAAOQgEAAgDgCIgBgBIgBgBIgDgEQgCgCAAgEQAAgCACgDIALgIIABAAIAFABIADABIACACQAFAFAAAEIAAABIgCAGIgDADIgEADQgDABgDAAIAAAAg");
	this.shape_5.setTransform(0,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB400").s().p("AAAAOQgEAAgEgCIgBgBIgBgBIgCgEQgCgDAAgDIABgFIAMgIIABAAIAFABIADABIACACQAFAEAAAFIAAABIgCAGIgDAEIgEACQgDABgDAAIAAAAg");
	this.shape_6.setTransform(0,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB400").s().p("AAAAOQgEAAgEgDIgBAAIgBgBIgDgEQgBgDAAgDQgBgDACgDIAMgHIABAAIAFABIACAAIAEACQAEAFAAAFIAAABIgCAFIgDAEIgEADIgGABIAAAAg");
	this.shape_7.setTransform(0.1,4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB400").s().p("AAAAPQgFgBgDgDIgBgBIgBgBIgDgDQgCgDAAgDQAAgDACgDQALgHABAAIABgBIAFABIADABIADADQAFADAAAGIAAAAIgDAHIgCADIgFACQgDACgDABIAAAAg");
	this.shape_8.setTransform(0.1,4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB400").s().p("AAAAPQgFgBgDgDIgBgBIgBgBIgDgDQgCgDAAgDQAAgDACgDQAKgHACAAIABAAQACAAADABIADABIADACQAGADgBAGIAAAAIgCAHIgDADIgFADQgDACgDAAIAAAAg");
	this.shape_9.setTransform(0.1,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFB400").s().p("AAAAOQgFABgEgEIgBAAIgBgBIgCgEQgDgDAAgDQAAgDACgDIANgHIABAAIAFABIADAAIADACQAGAEAAAGIAAAAIgDAHIgDAEIgEABQgDACgEAAIAAAAg");
	this.shape_10.setTransform(0.1,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB400").s().p("AAAAOQgFAAgEgDIgBgBIgBgBIgDgDQgCgEAAgCIAAAAQAAgEACgDIAOgGIAAAAIAFABIACABIAEABQAGADAAAHIAAAAQAAADgCADIgEAEIgEACQgEACgDAAIAAAAg");
	this.shape_11.setTransform(0.1,3.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFB400").s().p("AAAAOQgFAAgEgEIgBAAIgBgBIgDgDIgDgGIAAAAQABgEACgDIAOgHIAAAAIAFACIACAAIAEABQAGAEAAAHIAAAAQABADgDAEQgCACgCABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgEADgDAAIAAAAg");
	this.shape_12.setTransform(0.1,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB400").s().p("AAAAPQgGAAgEgFIgBgBIgBgBIgCgCQgDgDAAgDIAAAAQAAgEACgEIAOgGIABAAIAFACIACABIAFABQAFADABAHIAAAAQAAADgDAEIgEADIgEABQgDADgEABIAAAAg");
	this.shape_13.setTransform(0.1,3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFB400").s().p("AAAAOQgGAAgEgDIgBgBIgBgCIgDgCIgCgGIAAAAQAAgEACgEIAPgFIAAAAIAFABIACAAIAFABQAGADAAAIIAAAAQAAADgCADQgCADgDACIgEABQgDACgEAAIAAAAg");
	this.shape_14.setTransform(0.1,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB400").s().p("AAAAOQgGAAgEgEIgBAAIgBgBIgDgDQgCgEgBgCIAAAAQAAgEADgDIAPgGIAAgBIAFACIADAAIAEABQAGADABAIIAAAAQAAADgDAEQgCACgCABIgFABQgDADgEAAIAAAAg");
	this.shape_15.setTransform(0.1,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB400").s().p("AAAAOQgGAAgEgEIgBgBIgBgBIgDgDQgDgDAAgCIAAgBQAAgEADgDIAOgFIABAAIAFABIADAAIAEABQAHADAAAHIAAABQAAACgDAEQgCADgCABIgFABQgDADgEAAIAAAAg");
	this.shape_16.setTransform(0.2,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB400").s().p("AAAAPQgGAAgFgFIgBgBIgBgBIgCgCQgDgEgBgCIAAAAQABgFADgDIAPgGIAAAAIAFADIADgBIAEABQAHACABAJIAAAAQAAACgDAFQgDACgCABIgEABQgDADgFABIAAAAg");
	this.shape_17.setTransform(0.2,2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFB400").s().p("AgLAKIgBgBIgEgEQgDgEAAgCQAAgEADgEQAEgEAHAAIABAAIAEAAQABgBAEACIACAAQANAAAAAMQAAADgDADQgEAFgGAAQgEADgDAAQgGAAgFgEg");
	this.shape_18.setTransform(0.2,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[]},2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,3,3,3);
p.frameBounds = [rect, new cjs.Rectangle(-1.5,2.9,3.1,3), new cjs.Rectangle(-1.5,2.7,3.2,3), new cjs.Rectangle(-1.5,2.6,3.2,3), new cjs.Rectangle(-1.6,2.5,3.3,3), new cjs.Rectangle(-1.6,2.3,3.4,3), new cjs.Rectangle(-1.6,2.2,3.5,3), new cjs.Rectangle(-1.6,2.1,3.5,3), new cjs.Rectangle(-1.7,1.9,3.6,3), new cjs.Rectangle(-1.7,1.8,3.7,3), new cjs.Rectangle(-1.7,1.6,3.8,3), new cjs.Rectangle(-1.8,1.5,3.9,3), new cjs.Rectangle(-1.8,1.4,3.9,3), new cjs.Rectangle(-1.8,1.2,4,3), new cjs.Rectangle(-1.8,1.1,4.1,3), new cjs.Rectangle(-1.7,-1,3.9,3.7), new cjs.Rectangle(-2.7,-1.3,6.5,2.6), new cjs.Rectangle(-3.1,-2.4,7.5,3.4), new cjs.Rectangle(-4.1,-0.3,9.1,3.4), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_029 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_07();
	this.instance.setTransform(-640,-130);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-640,-130,1280,260);
p.frameBounds = [rect];


(lib.plate_t_028 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_010();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1280,260);
p.frameBounds = [rect];


(lib.plate_t_021 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_08();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1280,260);
p.frameBounds = [rect];


(lib.plate_t_020 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,40,11);
p.frameBounds = [rect];


(lib.plate_t_019 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_012();
	this.instance.setTransform(-356.5,-49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-356.5,-49,713,98);
p.frameBounds = [rect];


(lib.plate_t_018 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABRAtIjhi5IEigiIglFeg");
	var mask_graphics_1 = new cjs.Graphics().p("ABVAoIjzjBIE9gpIgcGFQgUg+gahdg");
	var mask_graphics_2 = new cjs.Graphics().p("ABaAiIkEjIIFVgwIgSGtQgbg8gkh5g");
	var mask_graphics_3 = new cjs.Graphics().p("ABeAcIkVjPIFvg2IgJHTQghg5gwiVg");
	var mask_graphics_4 = new cjs.Graphics().p("ABiAWIkmjWIGJg8IAAH5Qgog1g7iyg");
	var mask_graphics_5 = new cjs.Graphics().p("ABdAdQgdgZgngZQhyhTiDhkIF7g8IAjAEQAMBDACBKIAABNQAAApACAgQATCcgOBOQgmguhUi+g");
	var mask_graphics_6 = new cjs.Graphics().p("ABXAmQgagZgugeQhyhRiRhyIGQhDQASAGAQAIQAZBCADBQIAABUQAAArAEAhQAmDGgbApQgjgmhvjMg");
	var mask_graphics_7 = new cjs.Graphics().p("ABSAvQgXgag1giQhyhQifiAIGlhIQASALAPAMQAmBCAEBXIAABYQAAAxAGAgQA5DugoAEQghgdiJjag");
	var mask_graphics_8 = new cjs.Graphics().p("AENEyQgdgTikjpQgRgZg8goQh0hOiuiOIG6hPQBRBJAHB3IAABeQAAA1AIAgQBFD6gkAAQgEAAgHgFg");
	var mask_graphics_9 = new cjs.Graphics().p("AESExQgrgmg1hIIhiiKQgHgJgMgMQgLgMgRgJQgQgHgRgIIgNgGQhtg9iqiSIG4hcIAcARQA6BBAIBhQABAJAAAcIAAA6QgBARABAOQABAgAFAWIAIAfQA5DdghAAIgHgBg");
	var mask_graphics_10 = new cjs.Graphics().p("AEYEvQgrggg2hJQgVgchOhvQgHgKgLgMQgLgOgSgEQgSgEgRgGIgMgFQhqgrixieIG1hqIAfAIQA9BAAJBgQACAMAAAZIAAA7IAAAhQAAAeAFAWIAGAfQA6DjgjAAIgBgBg");
	var mask_graphics_11 = new cjs.Graphics().p("AC6DKIhjiNIgRgWQgLgPgTgBQgUAAgPgDIgNgCQhngbi3irIGzh3IAggCQBAA/ALBfQACAPABAWIAAA7IgBAiQAAAdADAXQADASADAOQA3DcgdALQgsgag3hKg");
	var mask_graphics_12 = new cjs.Graphics().p("AEOEsQgYgRg4hMIh0ilQgLgQgTADQgkAGgOgCQhkgNi+i1IHUiPQBOBJAFB2IgCBfQgBA1AIAfQA7DvgkAAQgGAAgHgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-12.3,y:0.1}).wait(1).to({graphics:mask_graphics_1,x:-13.5,y:0.7}).wait(1).to({graphics:mask_graphics_2,x:-14.7,y:1.3}).wait(1).to({graphics:mask_graphics_3,x:-15.8,y:1.8}).wait(1).to({graphics:mask_graphics_4,x:-17,y:2.4}).wait(1).to({graphics:mask_graphics_5,x:-17,y:3.8}).wait(1).to({graphics:mask_graphics_6,x:-16.9,y:5}).wait(1).to({graphics:mask_graphics_7,x:-16.9,y:6.2}).wait(1).to({graphics:mask_graphics_8,x:-16.9,y:7.5}).wait(1).to({graphics:mask_graphics_9,x:-17.4,y:7.4}).wait(1).to({graphics:mask_graphics_10,x:-17.9,y:7.4}).wait(1).to({graphics:mask_graphics_11,x:-18.4,y:7.3}).wait(1).to({graphics:mask_graphics_12,x:-18.9,y:7}).wait(1));

	// Layer_7
	this.instance = new lib._05();
	this.instance.setTransform(-50,-15);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(4));

	// Layer_6
	this.instance_1 = new lib._04();
	this.instance_1.setTransform(-47,-16);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},2).wait(4));

	// Layer_5
	this.instance_2 = new lib._03();
	this.instance_2.setTransform(-42,-21);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true},2).wait(6));

	// Layer_4
	this.instance_3 = new lib._02();
	this.instance_3.setTransform(-34,-20);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},2).wait(8));

	// Layer_3
	this.instance_4 = new lib._01();
	this.instance_4.setTransform(-30,-21);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:true},2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-592.7,-104.1,1280,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_017 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_011();
	this.instance.setTransform(-21.5,-70);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-70,43,140);
p.frameBounds = [rect];


(lib.new2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,630,87);
p.frameBounds = [rect];


(lib.new_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_28 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_28,x:396.7,y:-87.3}).wait(1));

	// Layer_31
	this.instance = new lib.plate_t_09();
	this.instance.setTransform(-640,-210);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(1));

	// Layer_30 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_26 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_1_graphics_26,x:397.1,y:-85.3}).wait(2).to({graphics:null,x:0,y:0}).wait(1));

	// Layer_29
	this.instance_1 = new lib.plate_t_09();
	this.instance_1.setTransform(-640,-210);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer_28 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_24 = new cjs.Graphics().p("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AgAkUBZIABAAIAAAAIgBAAgAjnBZIgBAAIAAAAIABAAgAjnBZIADAAIAAAAIgDAAgAj3BWIgBAAIAAAAIABAAgAEYA7QgGAKgBANIAAAAIAAACIAAAAIAAgCIAAAAQABgNAGgKIAAAAIACgBIAAAAIgCABgAkMBPIgBAAIAAAAIABAAgAkOBPIgBgBIAAAAIABABgADAArIAHABIAAAAIAIABIAAAAQAdAEAHADIAAAAQAVAJABAPIAAAAIABADIAAAAIgBgDIAAAAQgBgPgVgJIAAAAQgHgDgdgEIAAAAIgIgBIAAAAIgHgBIAAAAgABngWQgQADgRAGIAAAAQgIACgDAFIAAAAIgHADIAAAAIgBABIAAAAQgQALgMAhIAAAAQgGASgBALIAAAAIgBAIIAAAAIABgIIAAAAQABgLAGgSIAAAAQAMghAQgLIAAAAIABgBIAAAAIAHgDIAAAAQADgFAIgCIAAAAQARgGAQgDIAAAAIAQgBIAAAAIAHAAIAAAAQAIgMACgMIAAAAQABgNACgJIAAAAIACgLIAAAAQACgIAIgMIAAAAIAKgUIAAAAQAEgIAHgiIAAAAQAFgaAMgLIAAAAIANgKIAAAAQAHgGAEgFIAAAAQAEgFADgLIAAAAQgDALgEAFIAAAAQgEAFgHAGIAAAAIgNAKIAAAAQgMALgFAaIAAAAQgHAigEAIIAAAAIgKAUIAAAAQgIAMgCAIIAAAAIgCALIAAAAQgCAJgBANIAAAAQgCAMgIAMIAAAAIgHAAIAAAAIgQABgAAOBNIAAgIIAAAAIAAAIgAkWBNIgCgBIAAAAIACABgAkdBMIAAAAIAAAAIAAAAgAkcBMIgBAAIAAAAIABAAgAhCAkQAFAGADAGIAAAAIAEAIIAAAAQADAIAAAIIAAAAQAAgIgDgIIAAAAIgEgIIAAAAQgDgGgFgGIAAAAIgCgDIAAAAIACADgAn7AgQgRAKgEAVIAAAAIgBAHIAAAAIABgHIAAAAQAEgVARgKIAAAAIABgBIAAAAIgBABgAlpBGIAAAAIAAAAgAkhgOQANABANAMIAAAAIAVAUIAAAAIAQANIAAAAQAKAIAFAGIAAAAQAGAIABAKIAAAAIABADIAAAAIgBgDIAAAAQgBgKgGgIIAAAAQgFgGgKgIIAAAAIgQgNIAAAAIgVgUIAAAAQgNgMgNgBIA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");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_2_graphics_24,x:396.1,y:-78.3}).wait(2).to({graphics:null,x:0,y:0}).wait(3));

	// Layer_27
	this.instance_2 = new lib.plate_t_09();
	this.instance_2.setTransform(-640,-190);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true},2).wait(3));

	// Layer_26 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_22 = new cjs.Graphics().p("AgJK3IgUgBIAAAAQgIgDgFgDIAAAAIgDgDIAAAAIgCgEIAAAAIgSAAIAAAAQgSgBgWgDIAAAAIgggFQgwgJgPgIIAAAAQgigRgRgkIAAAAIgHgOIAAAAIgMgaIAAAAQgPgRgngOIAAAAIgUgIIAAAAQgmgRgfgTIAAAAQg0gjgKglIAAAAQgJgbALgkIAAAAIgJgQIAAAAQgIgPgagVIAAAAQgbgXgIgNIAAAAQgGgKgFgLIAAAAQgTgygBgbIAAAAIAAgKIAAAAIAAgGIAAAAIABgDIAAAAQACgDAEgEIAAAAIAJgJIAAAAIACACIAAAAQAGADAFgFIAAAAIABABIAAAAIAGADIAAAAIAEADIAAAAIACAEIAAAAIgIAIIAAAAQAEADABAEIAAAAIABADIAAAAQAAAFgDAEIAAAAIACAHIAHAKIAIAYIAHAOIAAAAIAJAIIAAAAIAFAGIAEACIAAAAIAHAFIAAAAQADADAAAEIAAAAQAFADAFAAIAAAAIACgIIgEgIIAAAAQgHgJgDgLIAAAAIgDgIIAAAAIAAgCIAAAAIgBgFIAAAAIgBgGIAAAAQAAgEABgCIAAAAIAAgBIAAAAIAAABIAAAAQgBACAAAEIAAAAIABAGIAAAAIABAFIAAAAIAAACIAAAAIADAIIAAAAQADALAHAJIAAAAIAEAIIAAAAIgCAIQgFAAgFgDIAAAAQAAgEgDgDIAAAAIgHgFIAAAAIgEgCIAAAAIgFgGIgJgIIAAAAIgHgOIAAAAIgIgYIgHgKIgCgHQADgEAAgFIAAAAIgBgDIAAAAQgBgEgEgDIAAAAIAIgIIAAAAIgCgEIAAAAIgEgDIAAAAIgGgDIAAAAIgBgBIAAAAQgFAFgGgDIAAAAIgCgCIAAAAIgJAJIAAAAQgEAEgCADIAAAAQACgIADgGIAAAAQADgGAEgDIAAAAQgGgXgCgXIAAAAQgEgZAHgPIAAAAQAEgKAJgHIAAAAQAJgHAKgBIAAAAQgvhTAPg/IAAAAQAHgWALgLIAAAAQAQgQAVADIAAAAIANAEIAAAAIAOADIAAAAQATABAOgUIAAAAIAMgQIAAAAQAGgJAHgGIAAAAQAIgGALgBIAAAAQAMgBAGAHIAAAAQgCgOgMgoIAAAAQgKgiABgVIAAAAQABgXAQgfIAAAAQAUgiAIgSIAAAAQANgiAJgQIAAAAQASgdAbgGIAAAAQAQgDAQAGIAAAAQALAEALAJIAAAAIADgDIAAAAQAZgWAUAAIAAAAIAOACIAAAAQAJABAFgBIAAAAQAHgBAMgKIAAAAQAXgUARgGIAAAAQAVgHAkAGIAAAAQAWAEAJAGIAAAAQAMAIANAWIAAAAIAEAGIAAAAIALgIIADgHIAAAAQAHgKAHgFIAAAAQAEgDAGgCIAAAAIAAgCIAAAAQgCgLAKgLIAAAAQAGgHANgGIAAAAQAMgGAEgDIAAAAQAFgGAEgPIAAAAQACgIAHgTIAAAAQALgWAFgGIAAAAQAHgIAOgFIAAAAQAkgNAWATIAAAAQANAKAHAWIAAAAIAJAmIAAAAIAIAWIAAAEIAAAAIAqASIAAAAQAmAQAXATIAAAAQAXASARAWIAAAAQARAXAZAHIAAAAQAYAIgRAIIAAAAQgSAIAbgBIAAAAQAbgBAUBpIAAAAIAJBJQAUAtgWgGIAAAAIgJgDIAAAAIgEgUIgGgYIAAAAQgFgNgHgHIAAAAQAOgKAEgRIAAAAQABgHAAgGIAAAAQAAgKgFgJIAAAAQgIgPgRgGIAAAAQARAGAIAPIAAAAQAFAJAAAKIAAAAQAAAGgBAHIAAAAQgEARgOAKIAAAAQAHAHAFANIAAAAIAGAYIAAAAIAEAUIABADIABAIIADAXIAAAAIAAAGIAAAAIAGAKIAAAAQAEAIAAAJIAAAAIAAAHIAAAAQgCAMgHAJIAAAAQAOABAOALIAAAAQAbAUAAAgIAAAAIAAADIAAAAIgBAOIAAAAIgDARIAAAAIAAALIAAAAIAAAQIAAAAQABAJADAGIAAAAIAGAOIAAAAIAAADIAAAAQAAAFgDAFIAAAAQgEAHgHACIAAAAIgBAAIAAAAIABAAIAAAAQAHgCAEgHIAAAAQADgFAAgFIAAAAIAAgDIAAAAIgGgOIAAAAQgDgGgBgJIAAAAIAAgQIAAAAIAAgLIAAAAIADgRIAAAAIABgOIAAAAIAAgDIAAAAQAAgggbgUIAAAAQgOgLgOgBIAAAAQAHgJACgMIAAAAIAAgHIAAAAQAAgJgEgIIAAAAIgGgKIAAAAIAAgGIAAAAIgDgXIAAAAIgBgIIAEACIAAAAQAUAOAFAZIAAAAQADANgCALIAAAAQAFAAAJAGIAAAAIAWANQATANADAEIAAAAQAMAOADAaIAAAAQAEAkgPAmIAAAAQgKAWAAAGIAAAAQgBAKAFAUIAAAAQAGAUABAsIAAAAQAAAhgJAdIAAAAIABAAQAJAAAEADIAAAAQAKAFgBAQIAAAAQAAAKgKAYIAAAAIgYA3IgCAFIAAAAQgDAPgKAbIAAAAQgVBBgZAqIAAAAQhTCPjkBKIAAAAIgYAJIAAAAIgqALIAAAAIgJAFIAAAAQgGAEgLADIAAAAIgIACIAAAAIgOACQgPADgOABIAAAAIgTADgAAHKKQACAFAEAFIAAAAQAEAPAVAAIAAAAIAWgHQAKgEAVgDIAAAAQATgCAogRIAAAAQBLgeA1gdIAAAAIAogYQAagMARgQIAAAAQAMgHARgTIAAAAQA0gxAPggIAAAAIATgtIAAAAIAMgUQAOgbAihRIAAAAIgCAAIAAAAQgFgBgCgDIAAAAQgCgDAAgFIAAAAIABgFIAAAAIADgSIACgEIAAAAIgIAAIAAAAIAIAAIAAAAIgCAEIAAAAIgDASIgBAFIAAAAQAAAFACADIAAAAQACADAFABIAAAAIACAAIAAAAQgiBRgOAbIAAAAIgMAUIgTAtIAAAAQgPAgg0AxIAAAAQgRATgMAHIAAAAQgRAQgaAMIAAAAIgoAYQg1AdhLAeIAAAAQgoARgTACIAAAAQgVADgKAEIAAAAIgWAHQgVAAgEgPIAAAAQgEgFgCgFIAAAAQgCgHAAgIIAAAAIABgJIAAAAQAAgEAFgHIAAAAIAAgEIAAAAIAAgKIAFgPIAZg0IAHgLQAGgKATgRIAAAAIAGgEIAMggIAAAAIgCgBIAAAAIACABIAAAAIgMAgIAAAAIgGAEQgTARgGAKIAAAAIgHALIgZA0IgFAPIAAAKIAAAEIAAAAQgFAHAAAEIAAAAIgBAJIAAAAQAAAIACAHgAg1KhIAAAAIAAAAIAAAAgAg0KhQAIgBAHgFIAAAAQgHAFgIABgAg7KgIgBAAIAAAAIABAAgAg8KgIAAAAIAAAAIAAAAgAglKbIABgBIAAAAIgBABgAhtH5QAAANAGAXIAAAAIAJAeQAGAQAGALIAAAAIAMALIAAAAIAEACIAAAAQARAIAQAOIAAAAIADAJIAAAAIACAIIAAAAIgCgIIAAAAIgDgJIAAAAQgQgOgRgIIAAAAIgEgCIAAAAIgMgLIAAAAQgGgLgGgQIAAAAIgJgeQgGgXAAgNIAAAAIAAgHIAAAAQAAgIADgDIAAAAQABgEADgCIAAAAQAEAEAFACIAAAAIgBAIIAAAAIABgIIAAAAQgFgCgEgEIAAAAQgDACgBAEIAAAAQgDADAAAIIAAAAIAAAHgAgnJPIAAAAIAAAAIAAAAgAgmJPIAIgBIAAAAIgIABgAEPIRIgBAAIAAAAIABAAgAEQIRIAAAAIAAAAIAAAAgAGfFWQgBAOgIAUIAAAAIgPAgIAAAAIgFAQIAAAAQgDAKgEAFIAAAAIgRASIAAAAIgPAUIAAAAQgUAYgkAWIAAAAQgNAGgEAAIAAAAQAEAAANgGIAAAAQAkgWAUgYIAAAAIAPgUIAAAAIARgSIAAAAQAEgFADgKIAAAAIAFgQIAAAAIAPggIAAAAQAIgUABgOIAAAAIAAgGIAAAAIAAgNIAAAAIgCgTIAAAAIgBgRIAAAAQgCgJgFgFIAAAAQgEgEgEgBIAAAAIACgEIAAAAQAPgUAOgEIAAAAIATgZQAAgFgEgCIAAAAIAJAAIAAAAIAFgGIgDAGQANgBAAgBIAAAAIAAAAIAAAAIAAAAIAAAAQAAABgNABIAAAAIADgGIgFAGIgJAAIAAAAQAEACAAAFIAAAAIgTAZQgOAEgPAUIAAAAIgCAEIAAAAQAEABAEAEIAAAAQAFAFACAJIAAAAIABARIAAAAIACATIAAAAIAAANIAAAAIAAAGgAELIRIAAAAIAAAAIAAAAIAAAAIAEgIIAAAAQAGgGAMgHIAAAAIATgKIAAAAQAOgJAWgYIAAAAQARgSAKgPIAAAAQAGgKAIgVIAAAAQAIgXAAgIIAAAAIAAgHIAAAAIAAgJIAAAAIAAgRIAAAAIAAgMIAAAAIgBgJIAAAAQgCgHgJgEIAAAAIgBAAIAAAAIABAAIAAAAQAJAEACAHIAAAAIABAJIAAAAIAAAMIAAAAIAAARIAAAAIAAAJIAAAAIAAAHIAAAAQAAAIgIAXIAAAAQgIAVgGAKIAAAAQgKAPgRASIAAAAQgWAYgOAJIAAAAIgTAKIAAAAQgMAHgGAGIAAAAIgEAIIAAAAIAAAAgACwH2IAOgIIAAAAQAggSAQgTIAAAAQANgLAQgZIAAAAQASgcAIgIIAAAAQAKgMAkggIAAAAIAHgFIAAAAIABgKIAAAAQADgRAPgFIAAAAIAGgBIAAAAIgGA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gdBiQgGAWgJANIAAAAQgBAEgNAQIAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAAAAIgCAAQgQAQgGAOIAAAAQgEAKAAAWIAAAAQgDAVgDAJIAAAAIgKARIgiBkIgMARIAAAAQALgoAKg+IAAAAIAPhQQAEgRAAgLIAAAAIAAgCIAEgNIAEgJIAAAAIAIgSIABgIIAAAAIAAgEIAAAAQAIgJAEgJIAAAAIABgDIAAAAIADgEIgCAAIgBABIAAgCIAAAAQAAgOgLgHIAAAAQgIgGgXACIAAAAQgQADgZAAIAAAAQAZAAAQgDIAAAAQAXgCAIAGIAAAAQALAHAAAOIAAAAIAAACIAAAAIABgBIACAAIgDAEIgBADIAAAAQgEAJgIAJIAAAAIAAAEIAAAAIgBAIIAAAAIgIASIgEAJIAAAAIgEANIAAACQAAALgEARIAAAAIgPBQQgKA+gLAoIAAAAIAAAAgAnMFHIAAAAIAAAAIAAAAgAnMFHQAKAAAGgLIAAAAQgGALgKAAgAB1E8IABAAIAAAAIAGABIAAAAIAHgCIAAAAIAPgHIAAAAIAAgBIAAAAIAGgDIAAAAIAJgGIAAAAIAggMIAAAAIAmgSIAAAAQAPgGACgCIAAAAQAEgEAHgJIAAAAIAMgKIAAAAIAAgBIAAAAQAUgQAMgOIAAAAIATgfQAdg8AChHIAAAAIAAgEIAAAAQAAgSAEgIIAAAAIgBgLIAAAAQAAgGACgEIAAAAIADgCIAAAAQACgHAJgFIAAAAIABgBIAAAAIgBABIAAAAQgJAFgCAHIAAAAIgDACIAAAAQgCAEAAAGIAAAAIABALIAAAAQgEAIAAASIAAAAIAAAEIAAAAQgCBHgdA8IAAAAIgTAfQgMAOgUAQIAAAAIAAABIAAAAIgMAKIAAAAQgHAJgEAEIAAAAQgCACgPAGIAAAAIgmASIAAAAIggAMIAAAAIgJAGIAAAAIgGADIAAAAIAAABIAAAAIgPAHIAAAAIgHACIAAAAIgGgBIAAAAIgBAAIAAAAIADgHIAAAAIAIgKIAAAAQAEgFABgFIAAAAIADgHIAAAAQADgDAFgBIAAAAIBGgUQATgFAFgDIAAAAQALgGAHgHIAAAAQANgMAKgaIAAAAIACgEIAAAAIAIgPIAAAAQARgXAIggIAAAAQAKghAAg2IAAAAIA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QIAAAAIACgJIAAAAIgBAAQgKAVgKAPIAAAAIgLAQIAAAAIACAAIAAAAIABAAIAAAAIgBAAIAAAAIgCAAIAAAAIALgQIAAAAQAKgPAKgVIAAAAIABAAIgCAJIAAAAIgBAQIAAAAIABANIAAAAIAHAfIAAAAQADAPADAFIAAAAQABACAFAFIAAAAIABACIAAAAIgNgEIAAAAIgRgLIAAAAIABgHIAAAAIgBgIIAAAAQAAgIgDgEIAAAAIgBgCIAAAAIgDgCIAAAAIAAAAIAAAAIAAAAIAAAAIADACIAAAAIABACIAAAAQADAEAAAIIAAAAIABAIIAAAAIgBAHIAAAAIAAAAgAIHAqIAAAAIAAAAIAAAAgAIHAqIAHgBIAAAAIgHABgAHLARIAAAAIAAAAIAAAAgAHKAQIgBgCIAAAAIABACgAGxAQIAAAAIAAAAIAAAAgAGxAQQAGAAAEgGIAAAAQgEAGgGAAgAGGgWIAPAJIAPANIAKAPIABAAIAAAAIgBAAIAAAAIgKgPIgPgNIgPgJIgCgBIAAAAIACABgAG8AKIAAAAIAAAAIAAAAIAAAAIAAgBIAAAAIAAABgAG8AJQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAgAHBAHIgBAAIAAAAIABAAgAl6AAIADAAIAAAAIgDAAgAl2AAIgBAAIAAAAIABAAgAirgLIgBAAIAAAAIABAAgAiqgLIAFgBIAAAAIgFABgAi1gNIgBAAIAAAAQgLgDgTgUIAAAAQgRgRAAgLIAAAAIAAAAIAAAAQAAgGAEgFIAAAAIAGgFIAAAAQABgGADgHIAAAAIARgxIgDgEIAAAAQgIgGgQgKIAAAAQgRgKgHgFIAAAAQgSgOgKgVIAAAAQgFgLgFgTIAAAAIgEgPIAAAFIAAAAQAAAJgCAHIAAAAIAEAMIAAAAIAEAJIAAAAIgIgKIAAAAIgDgEIAAAAIgCACIAAAAIgIAKIAAAAIAAAXIAAAAQANABANALIAAAAIAVAXIAAAAIAQANIAAAAQAKAIAFAFIAAAAQAGAJABAKIAAAAIAAACIAAAAQAAAKgGAGIAAAAQgGAFgKABIAAAAIgBAAIAAAAIgBAAIgEAAIAAAAIAEAAIAAAAIABAAIAAABIAAAAIABgBQAKgBAGgFIAAAAQAGgGAAgKIAAAAIAAgCIAAAAQgBgKgGgJIAAAAQgFgFgKgIIAAAAIgQgNIAAAAIgVgXIAAAAQgNgLgNgBIAAAAIAAgXIAAAAIAIgKIAAAAIACgCIAAAAIADAEIAAAAIAIAKIAAAAIgEgJIAAAAIgEgMIAAAAQACgHAAgJIAAAAIAAgFIAAAAIAEAPQAFATAFALIAAAAQAKAVASAOIAAAAQAHAFARAKIAAAAQAQAKAIAGIAAAAIADAEIAAAAIgRAxQgDAHgBAGIAAAAIgGAFIAAAAQgEAFAAAGIAAAAIAAAAIAAAAQAAALARARIAAAAQATAUALADIAAAAIABAAgAjfgaIAHAGIAAAAIAGgBIAAAAIACAAIAAAAIgCAAIAAAAIgGABIAAAAIgHgGIAAAAQgHgFgFACIAAAAIgBgBIAAAAQgBgQgDgLIAAAAQgBgIgEgGIAAAAQgFgIgRgGIAAAAQARAGAFAIIAAAAQAEAGABAIIAAAAQADALABAQIAAAAIAAABIAAAAIABAAIAAAAIACgBIAAAAQAEAAAGAEgAjQgVIABgBIAAAAIgBABgAjNgVIgBgBIAAAAIABABgAF2gWIAIgBIAAAAIgIABgAF/gXIAAAAIAAAAIAAAAgAlahBIABgCIAAAAIAHgGIAAAAIAFABIAAAAIABAAIAAAAIgBAAIAAAAIgFgBIAAAAIgHAGIAAAAIgBACIAAAAQACgHAAgFIAAAAQAAgGgCgEIAAAAQgBgFgDgEIAAAAQADAEABAFIAAAAQACAEAAAGIAAAAQAAAFgCAHIAAAAIAAAAgAD1hJIABAGIAAAAQALgDAHgBIAAAAIgCgDIAAAAQgGgKAAgLIAAAAIAAgCIAAAAQABgMAGgKIAAAAIACgCIAAAAIgLAAIAAAAQgjgCgPgVIAAAAQgHgKgBgNIAAAAIgQAXIAAAAIgFAJIAPABIAAAAQAdAFAHADIAAAAQAVAJABAOIAAAAIAAADIAAAAQAAAFgCAIIAAAAIgBAOIAAAAIAAAAgAlLhIIAAAAIAAAAIAAAAgAkqhZQgJACgNAGIAAAAIgBAEIAAAAQgCAFgIAAIAAAAQAIAAACgFIAAAAIABgEIAAAAQANgGAJgCIAAAAIAHAAIAAAAIgHAAgAgEhWIAEADIAAAAIAAAAIAAAAQAAgJAAgIIAAAAIAAgI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");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_3_graphics_22,x:397.8,y:-60.3}).wait(2).to({graphics:null,x:0,y:0}).wait(5));

	// Layer_25
	this.instance_3 = new lib.plate_t_09();
	this.instance_3.setTransform(-640,-170);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({_off:true},2).wait(5));

	// Layer_24 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_20 = new cjs.Graphics().p("AgIJwIgRgBIAAAAQgHgDgEgEIAAAAIgDgCIAAAAIgCgEIAAAAIgPAAIAAAAQgPgBgUgDIAAAAIgbgFQgqgIgNgIIAAAAQgdgQgOgiIAAAAIgGgNIAAAAIgLgZIAAAAQgNgRgigMIAAAAIgRgIIAAAAQgggQgbgTIAAAAQgtgggJgkIAAAAQgIgZAKgjIAAAAIgIgPIAAAAQgHgOgWgUIAAAAQgXgWgHgMIAAAAQgGgKgEgLIAAAAQgQgvgBgaIAAAAIAAgJIAAAAIACAGIAAAAQADAMAEAHIAAAAIAFAHIAAAAIABADIAAAAIADAEIAJAdQADAKAGAGIAAAAIADAEIAAAAQAJALAMAKIAAAAIALAJQAGAGALAYIAAAAQAGANAJACIAAAAIABAAIAAAAIgBAAIAAAAQgJgCgGgNIAAAAQgLgYgGgGIAAAAIgLgJQgMgKgJgLIAAAAIgDgEIAAAAQgGgGgDgKIAAAAIgJgdIgDgEIgBgDIAAAAIgFgHIAAAAQgEgHgDgMIAAAAIgCgGIAAAAIAAgGIAAAAIABgCIAAAAQABgEAEgDIAAAAIAIgJIAAAAIACACIAAAAIAAAAIAAAAIAAAAIAAAAIgCgCIAAAAIgIAJIAAAAQgEADgBAEIAAAAQABgIADgGIAAAAIAGgJIAAAAQgFgWgCgVIAAAAQgDgYAGgNIAAAAQAEgIAHgHIAAAAQAIgHAJgBIAAAAQgphQANg9IAAAAQAGgUAJgLIAAAAQAOgPASADIAAAAIAMAEIAAAAIAMADIAAAAQAQAAAMgTIAAAAIAKgPIAAAAQAGgJAFgFIAAAAQAIgGAJgBIAAAAQAKgBAGAHIAAAAQgCgOgKgmIAAAAQgJggABgUIAAAAQABgWAOgdIAAAAQARggAHgRIAAAAQALghAIgPIAAAAQAPgcAXgFIAAAAQAOgDAOAFIAAAAQAKAFAJAIIAAAAIACgDIAAAAQAWgVARAAIAAAAIANACIAAAAQAHABAFgBIAAAAQAFgBALgJIAAAAQAUgTAOgGIAAAAQATgHAfAGIAAAAQASAEAIAFIAAAAQALAIALAVIAAAAIADAGIAAAAIAJgIIADgHIAAAAQAGgJAGgFIAAAAQAKgIAWAAIAAAAIALABIAAAAQAEgaAJgLIAAAAQAOgSAbgBIAAAAQAZgBATAOIAAAAQAgAYAOA5IAAAAQAHAdADAKIAAAAQAIAUAPAJIAAAAQALAHAWACIAAAAQAaADAJADIAAAAQAcALAOAgIAAAAQAIASAGApIAAAAIAGArQADATAGAKIAAAAQAFAGAKAGIAAAAIARAKIAAAAQASANAEAYIAAAAQADANgCAKIAAAAQAEAAAIAFIAAAAIATANQARANACADIAAAAQALANACAZIAAAAQADAjgMAjIAAAAQgJAXAAAGIAAAAQgBAJAFARIAAAAQAEATgBAKIAAAAQgCAUgVAVIAAAAIgRASIAAAAQgJAKgFAJIAAAAIgBACIAAAAQAJANAJAUIAAAAIADgEQAHgJADgCIAAAAQAJgGAKgBIAAAAQAIAAAEADIAAAAQAJAFgBAPIAAAAQgBAKgIAWIAAAAIgVA1IgCAEIAAAAQgCAPgJAaIAAAAQgSA9gVAoIAAAAQhICIjFBGIAAAAIgUAJIAAAAIglALIAAAAIgHAEIAAAAQgGAEgJADIAAAAIgHABIAAAAIgMADQgNADgMABIAAAAIgRACgAAGJFQABAEAEAFIAAAAQADAPASAAIAAAAIATgHQAJgEASgDIAAAAQAQgCAjgQIAAAAQBBgcAugcIAAAAIAigXQAWgLAPgPIAAAAQAKgHAPgSIAAAAQAtgvANgfIAAAAIAQgqIAAAAIAKgTQANgaAdhMIAAAAIgCgBIAAAAQgEAAgCgEIAAAAQgBgCAAgEIAAAAIAAgGIAAAAIADgRIACgEIAAAAIgCAEIAAAAIgDARIAAAGIAAAAQAAAEABACIAAAAQACAEAEAAIAAAAIACABIAAAAQgdBMgNAaIAAAAIgKATIgQAqIAAAAQgNAfgtAvIAAAAQgPASgKAHIAAAAQgPAPgWALIAAAAIgiAXQguAchBAcIAAAAQgjAQgQACIAAAAQgSADgJAEIAAAAIgTAHQgSAAgDgPIAAAAQgEgFgBgEIAAAAQgCgHAAgHIAAAAIABgJIAAAAQAAgEAEgHIAAAAIAAgDIAAAAIAAgKIAEgPIAWgxIAGgKQAFgKAQgQIAAAAIAGgDIAKgfIAAAAIgKAfIAAAAIgGADQgQAQgFAKIAAAAIgGAKIgWAxIgEAPIAAAKIAAADIAAAAQgEAHAAAEIAAAAIgBAJIAAAAQAAAHACAHgAgtJaIAAAAIAAAAIAAAAgAgtJaQAIAAAFgGIAAAAQgFAGgIAAgAgzJZIgBAAIAAAAIgJgGIgPgGIAAAAQgEgBgDgDIAAAAIgLgEIAAAAQgNgFgHgIIAAAAIgXgKIAAAAQg0gXgZg2IAAAAQgJgVgHgGIAAAAIgIgHIAAAAIgKgGIAAAAIgEgBIAAAAQgpgKgTgLIAAAAIgHgFIAAAAIgLgHIAAAAQgSgNgLgXIAAAAQgJgWAAgWIAAAAIAAgCIAAAAQAAgJADgHIAAAAQACgMAEgPIAAAAIAHgUIADAIIAAAAQAIAOAVAPIAAAAQA3AuBDAjIAAAAIABABIAAAAIgBgBIAAAAQhDgjg3guIAAAAQgVgPgIgOIAAAAIgDgIIAAAAIgHAUQgEAPgCAMIAAAAQgDAHAAAJIAAAAIAAACIAAAAQAAAWAJAWIAAAAQALAXASANIAAAAIALAHIAAAAIAHAFIAAAAQATALApAKIAAAAIAEABIAAAAIAKAGIAAAAIAIAHIAAAAQAHAGAJAVIAAAAQAZA2A0AXIAAAAIAXAKIAAAAQAHAIANAFIAAAAIALAEIAAAAQADADAEABIAAAAIAPAGIAAAAIAJAGIABAAgAheG7QAAAMAFAWIAAAAIAIAcQAFAQAFAKIAAAAIALAKIAAAAIADADIAAAAQAOAHAOANIAAAAIADAJIAAAAIACAIIAAAAIgCgIIAAAAIgDgJIAAAAQgOgNgOgHIAAAAIgDgDIAAAAIgLgKIAAAAQgFgKgFgQIAAAAIgIgcQgFgWAAgMIAAAAIAAgHIAAAAQAAgHACgEIAAAAIAEgFIAAAAIAIAGIAAAAIgBAHIAAAAQAAAFABADIAAAAIAEAKIAAAAIABAOIASAiIABAIIADACQABADADADIAAAAIAAABIAAAAIAAgBIAAAAQgDgDgBgDIAAAAIgDgCIgBgIIgSgiIgBgOIgEgKIAAAAQgBgDAAgFIAAAAIABgHIAAAAIgIgGIAAAAIgEAFIAAAAQgCAEAAAHIAAAAIAAAHgAghINIAAAAIAAAAIAAAAgAghINIAHgBIAAAAIgHABgADqHSIgCAAIAAAAIACAAgADqHSIABAAIAAAAIgBAAgAFmEgQgBANgHATIAAAAIgNAfIAAAAIgEAPIAAAAQgDAJgEAFIAAAAIgOARIAAAAIgNATIAAAAQgRAXgfAVIAAAAQgMAFgDABIAAAAQADgBAMgFIAAAAQAfgVARgXIAAAAIANgTIAAAAIAOgRIAAAAQAEgFADgJIAAAAIAEgPIAAAAIANgfIAAAAQAHgTABgNIAAAAIAAgGIAAAAIgBgMIAAAAIgBgSIAAAAIgBgQIAAAAQgCgJgEgFIAAAAQgDgDgEgCIAAAAIACgEIAAAAQANgSAMgEIAAAAIAQgYQAAgEgDgDIAAAAIAIAAIAAAAIAEgGIgDAGQALAAABgCIAAAAQgBACgLAAIAAAAIADgGIgEAGIgIAAIAAAAQADADAAAEIAAAAIgQAYQgMAEgNASIAAAAIgCAEIAAAAQAEACADADIAAAAQAEAFACAJIAAAAIABAQIAAAAIABASIAAAAIABAMIAAAAIAAAGgADmHRIAAAAIAAAAIAAAAIAAAAIAEgHIAAAAQAFgGAKgGIAAAAIAQgKIAAAAQANgJATgXIAAAAQAOgQAJgOIAAAAQAFgKAHgUIAAAAQAGgWABgIIAAAAIAAgGIAAAAIAAgJIAAAAIgBgQIAAAAIABgLIAAAAIgBgJIAAAAQgCgHgIgDIAAAAIAAAAIAAAAIAAAAIAAAAQAIADACAHIAAAAIABAJIAAAAIgBALIAAAAIABAQIAAAAIAAAJIAAAAIAAAGIAAAAQgBAIgGAWIAAAAQgHAUgFAKIAAAAQgJAOgOAQIAAAAQgTAXgNAJIAAAAIgQAKIAAAAQgKAGgFAGIAAAAIgEAHIAAAAIAAAAgACXG4IANgIIAAAAQAbgRAOgSIAAAAQALgKAOgYIAAAAQAQgbAHgIIAAAAQAIgLAfgeIAAAAIAGgFIAAAAIABgJIAAAAQADgRAMgFIAAAAIAFAAIAAAAIgFAAIAAAAQgMAFgDARIAAAAIgBAJIAAAAIgGAFIAAAAQgfAegIALIAAAAQgHAIgQAbIAAAAQgOAYgLAKIAAAAQgOASgbARIAAAAIgNAIIAAAAQAVgeApg0IAAAAQA2hGAthMIAAAAIAQgYIAAAAIAOgQIAIgMIAAAAQALAAAGgHIAAAAIADgGIAAAAQANgKAFgSIAAAAQACgEAAgPIAAAAIgBgMIAAAAIAfgwQgGglgFgDIAAAAQgFgCgIgQIAAAAQAIAQAFACIAAAAQAFADAGAlIAAAAIgfAwIABAMIAAAAQAAAPgCAEIAAAAQgFASgNAKIAAAAIgDAGIAAAAQgGAHgLAAIAAAAIgIAMIAAAAIgOAQIgQAYIAAAAQgtBMg2BGIAAAAQgpA0gVAeIAAAAIAAAAgAheGhIgBAAIAAAAIABAAgAheGhIABAAIAAAAIgBAAgAhcGhQgJgIgGgMIAAAAIgMgZIAAAAIgHgNIAAAAQgEgIAAgMIAAAAIgBgWIAAAAIgCgTIAAAAIAAgEIAAAAQAAgIACgHIAAAAIADgGIAAgCIAAAAIgBgHIAAAAQgCgEgFgEIAAAAIgJgIQgKgIgDgSIAAAAQgEgMAAgLIAAAAIAAgCIAAAAQgagYgJgYIAAAAIgIgdQgCgEAAgEIAAAAIAAgDIAAAAQgEgKgBgNIAAAAQAAgPADgHIAAAAQAHgZAbgIIAAAAIABgBIAAAAIgBABIAAAAQgbAIgHAZIAAAAQgDAHAAAPIAAAAQABANAEAKIAAAAIAAADIAAAAQAAAEACAEIAAAAIAIAdQAJAYAaAYIAAAAIAAACIAAAAQAAALAEAMIAAAAQADASAKAIIAAAAIAJAIQAFAEACAEIAAAAIABAHIAAAAIAAACIAAAAIgDAGQgCAHAAAIIAAAAIAAAEIAAAAIACATIAAAAIABAWIAAAAQAAAMAEAIIAAAAIAHANIAAAAIAMAZIAAAAQAGAMAJAIIAAAAIgBAAIABAAIAAAAgAilEGIAgB2IAEAMIAAAAQAGAOANAHIAAAAIABAAIAAAAIgBAAIAAAAQgNgHgGgOIAAAAIgEgMIAAAAIggh2QgCgJAAgGIAAAAIABgIIAAAAQgLgNgIgPIAAAAIgOgXIgSgYIgHgIIAAAAIgBgBIgIgQIgGgpIABgGIAAAAQAAgGgDgHIAAAAQgEgLgXgJIAAAAIgYgFIAAAAIgcAEIAAAAIgRgBIAAAAQgJAAgHAFIAAAAQgIAHgCASIAAAAIAAAQIAAAAQAAAVADAhIAAAAQADAWAGALIAAAAIAJAVIAAAAIAMAaQAKAXAeAWIAAAAQAMAQAHAFIAAAAIAaASIAXAYIAAAAQAQAOALAFIAAAAIAQAGQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAAQAGAHAIAGIAAAAQgEADgHABIAAAAQAHgBAEgDIAAAAQgIgGgGgHIAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIAAAAIgQgGQgLgFgQgOIAAAAIgXgYIAAAAIgagSQgHgFgMgQIAAAAQgegWgKgXIAAAAIgMgaIgJgVIAAAAQgGgLgDgWIAAAAQgDghAAgVIAAAAIAAgQIAAAAQACgSAIgHIAAAAQAHgFAJAAIAAAAIARABIAAAAIAcgEIAAAAIAYAFIAAAAQAXAJAEALIAAAAQADAHAAAGIAAAAIgBAGIAAAAIAGApIAIAQIABABIAHAIIAAAAIASAYIAOAXQAIAPALANIAAAAIgBAIIAAAAQAAAGACAJgAA6GSQAGgDAGgBIAAAAQgGABgGADgABNGQIAAgBIAAAAIAAABgABHGOIgBAAIAAAAIABAAgAivGEIgBAAIAAAAIABAAgAjCF+IgCAAIAAAAIACAAgAjEF9IgBAAIAAAAIABAAgAgJF7IAJgQIAAAAIAehfIAJgRQACgIADgUIAAAAQAAgVADgJIAAAAQAFgOAOgPIAAAAIACAAIABgEIAAAAQALgPABgEIAAAAQAHgMAFgVIAAAAIAZhdQAMglARgPIAAAAQAGgFAPgHIAAAAQAegQAQAAIAAAAIAPABIAAAAQAIAAAFgCIAAAAIANgJIACAAIAAAAIgCAAIAAAAIgNAJQgFACgIAAIAAAAIgPgBIAAAAQgQAAgeAQIAAAAQgPAHgGAFIAAAAQgRAPgMAlIAAAAIgZBdQgFAVgHAMIAAAAQgBAEgLAPIAAAAIgBAEIAAAAIgCAAQgOAPgFAOIAAAAQgDAJAAAVIAAAAQgDAUgCAIIAAAAIgJARIgeBfIgJAQIAAAAQAJgmAIg7IAAAAIANhMQADgQAAgLIAAAAIAAgBIAEgNIADgIIAAAAIAHgRIACgIIAAAAIgBgEIAAAAQAHgJAEgIIAAAAIABgDIAAAAIACgEIgCAAIAAABIAAgBIAAAAQAAgOgKgGIAAAAQgHgGgTACIAAAAIgBAAIAAAAIABAAIAAAAQATgCAHAGIAAAAQAKAGAAAOIAAAAIAAABIAAAAIAAgBIACAAIgCAEIgBADIAAAAQgEAIgHAJIAAAAIABAEIAAAAIgCAIIAAAAIgHARIgDAIIAAAAIgEANIAAABQAAALgDAQIAAAAIgNBMQgIA7gJAmIAAAAIAAAAgAmNESIAAAAIAAAAIAAAAgAmMESQAIAAAFgLIAAAAQgFALgIAAgABkEHIABAAIAAAAIAGABIAAAAIAFgCIAAAAIANgHIAAAAIABgBIAAAAIAFgDIAAAAIAHgFIAAAAIAcgLIAAAAIAhgRIAAAAQANgGACgCIAAAAQADgEAGgJIAAAAIALgJIAAAAIgBgBIAAAAQASgPAKgOIAAAAIAQgdQAag5ABhDIAAAAIAAgFIAAAAQAAgPADgHIAAAAIgBgKIAAAAQABgHACgFIAAAAIACgCIAAAAQACgHAIgEIAAAAQAEgCAEAAIAAAAQgEAAgEACIAAAAQgIAEgCAHIAAAAIgCACIAAAAQgCAFgBAHIAAAAIABAKIAAAAQgDAHAAAPIAAAAIAAAFIAAAAQgBBDgaA5IAAAAIgQAdQgKAOgSAPIAAAAIABABIAAAAIgLAJIAAAAQgGAJgDAEIAAAAQgCACgNAGIAAAAIghARIAAAAIgcALIAAAAIgHAFIAAAAIgFADIAAAAIgBABIAAAAIgNAHIAAAAIgFACIAAAAIgGgBIAAAAIgBAAIAAAAIADgGIAAAAIAHgKIAAAAQAEgFABgFIAAAAIACgGIAAAAQACgDAFgBIAAAAIA8gTIAVgIIAAAAQAKgGAGgGIAAAAQALgLAIgZIAAAAIACgEIAAAAIAHgOIAAAAQAPgWAHgfIAAAAQAIgeAAgzIAAAAIAAgEIAAAAIADgeIACgTIAAAAIgBgEIAAAAQAAgFgDgDIAAAAIgDgEIAAAAIgFgDIAAAAIgFgDIAAAAIAFgEIAAAAQADgDAAgEIAAAAIAAgCIAAAAQgBgFgDgDIAAAAIgHgEQgHgDgGAAIAAAAIgFgBIAAAAIABAAIAVgKIAAAAQALgEAOgCIAAAAQgEAEgDAGIAAAAIgBAHIAAAAIABgHIAAAAQADgGAEgEIAAAAQgOACgLAEIAAAAIgVAKIAAAAIgBAAIAFABIAAAAQAGAAAHADIAAAAIAHAEQADADABAFIAAAAIAAACIAAAAQAAAEgDADIAAAAIgFAEIAAAAIAFADIAAAAIAFADIAAAAIADAEIAAAAQADADAAAFIAAAAIABAEIAAAAIgCATIAAAAIgDAeIAAAEIAAAAQAAAzgIAeIAAAAQgHAfgPAWIAAAAIgHAOIAAAAIgCAEIAAAAQgIAZgLALIAAAAQgGAGgKAGIAAAAIgVAIIAAAAIg8ATQgFABgCADIAAAAIgCAGIAAAAQgBAFgEAFIAAAAIgHAKIAAAAIgDAGIAAAAIAAAAgAFAD7IAAAAIAAAAIAAAAgAnWB7IABAHIAHAKIAHAWIAFANIAAAAIAIAIIAAAAIAFAGIADACIAAAAQAEACACADIAAAAQADADAAADIAAAAQAEADAEAAIAAAAIACgIIgDgHIAAAAQgGgJgDgKIAAAAIgCgIIAAAAIgBgCIAAAAIgBgFIAAAAIAAgFIAAAAIABgGIAAAAQAEgIAJAAIAAAAQgJAAgEAIIAAAAIgBAGIAAAAIAAAFIAAAAIABAFIAAAAIABACIAAAAIACAIIAAAAQADAKAGAJIAAAAIADAHIAAAAIgCAIQgEAAgEgDIAAAAQAAgDgDgDIAAAAQgCgDgEgCIAAAAIgDgCIAAAAIgFgGIgIgIIAAAAIgFgNIAAAAIgHgWIgHgKIgBgHQACgDAAgEIAAAAIAAgEIAAAAQgBgEgDgDIAAAAIAGgHIAAAAIgBgEIAAAAIgEgDIAAAAIgFgDIAAAAIgBgBIAAAAQgCADgDAAIAAAAQADAAACgDIAAAAIABABIAAAAIAFADIAAAAIAEADIAAAAIABAEIAAAAIgGAHIAAAAQADADABAEIAAAAIAAAEIAAAAQAAAEgCADIAAAAIAAAAgAl9B1QADADAEANIAAAAQABAEAGANIAAAAQADAKAAAHIAAAAQAAgHgDgKIAAAAQgGgNgBgEIAAAAQgEgNgDgDIAAAAIAAAAIAAgCIgBABIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAAAgAHCCkIAAAAIAAAAIAAAAgAHCCkIAGAAIAAAAIgGAAgAHJCkIAAAAIAAAAIAAAAgAGTCeIAAAAIAAAAIAAAAgAGVCRIAAgDIAAAAIAAADgAmeCJQAHABAGAFIAAAAQADgCAAgFIAAAAIgBgCIAAAAIgBgKIAAAAQAAgIAHgBIAAAAIAFgBIAAAAIgFABIAAAAQgHABAAAIIAAAAIABAKIAAAAIABACIAAAAQAAAFgDACIAAAAQgGgFgHgBIAAAAIgBAAIAAAAIABAAgAGrCLIgCgQIAAAAIgDACIAAAAQgBAJgCAAIAAAAQACAAABgJIAAAAIADgCIAAAAIACAQgAGWCJIAAACIAAAAIAAgCIAAAAIAAAAgAmgCJIAAAAIAAAAIAAAAgAGWCHQACgFADgBIAAAAQgDABgCAFgAGjCGIgBAAIAAAAIABAAgAGgCFIAAAAIAAAAIAAAAgAGfCEIAAAAgAGfCEIgBgBIAAAAIABABgAGcCCIgBgBIAAAAIABABgAmDByIgBAAIAAAAIABAAgAmiBvIgBAAIAAAAIABAAgAmiBvQAGAAAIgDIAAAAQgIADgGAAgAmuBrIgBAAIAAAAQgGgFgDgOIAAAAQgFgZAAgZIAAAAQAAgiAJggIAAAAIAGgTIAAAAIABgGIAAAAIgBgEIAAAAIgBgHIAAAAQAAgGACgIIAAAAIgEgZIAAAAIgBgOIAAAAQAAgNAEgIIAAAAQAIgOAegLIAAAAIAzgUIALgDIAAAAIAPATIAAAAQAOAPAJADIAAAAIABABIAAAAIgBgBIAAAAQgJgDgOgPIAAAAIgPgTIAAAAIgLADIAAAAIgzAUQgeALgIAOIAAAAQgEAIAAANIAAAAIABAOIAAAAIAEAZIAAAAQgCAIAAAGIAAAAIABAHIAAAAIABAEIAAAAIgBAGIAAAAIgGATIAAAAQgJAgAAAiIAAAAQAAAZAFAZIAAAAQADAOAGAFIAAAAIABAAgAmTBrIAAAAIAAAAIAAAAgAmSBrIABAAIAAAAIgBAAgAniBaIAAAAIAAAAIAAAAgAgVBSIAAAAIAAAAIAAAAgAgUBSQAUAAAMgCIAAAAQgMACgUAAgAiWAeQANAFAWATIAAAAIAgAMIAAAAIAMAKQACACAPADIAAAAIACAAIAAAAIgCAAIAAAAQgPgDgCgCIAAAAIgMgKIgggMIAAAAQgWgTgNgFIAAAAIgBgBIAAAAIABABgAASBIIgCAAIAAAAIACAAgAASBIIABAAIAAAAIgBAAgAmAA2QAJAHgBALIAAAAQABgLgJgHIAAAAIgBgBIAAAAIABABgAAQBIIgBAAIAAAAIABAAgAAtBHIAAAAIAAAAIAAAAgAAtBHIABAAIAAAAIgBAAgAAOBHIgCAAIAAAAIACAAgAAlBGIgBgBIAAAAIABABgAAEBFIAAAAIAAAAIAAAAgAACBFIgBgBIAAAAIABABgAlxA4IAAAAIAAAAIAAAAgAlwA4QAGgBAKgJIAAAAQgKAJgGABgAgJgKQABALAEAQIAAAAQABAGACAFIAAAAIAFAJIAAAAIADADIAAAAIAQAHIAAAAQAHADACAFIAAAAQAGgIAAgEIAAAAIAAgBIAAAAQAAgFgMgGIAAAAQgPgKgFgUIAAAAQgCgHAAgPIAAAAIAAgNIAAAAIABgVIABgPIAAAAQgDgCgCgEIAAAAQgBgEAAgEIAAAAQgggRgRgdIAAAAIgGgMIAAAAIgFgOIgKgQIAAAAIgCgDIgCAAIAAAAQgHgCgEgEIAAAAQgFgFAAgMIAAAAIgEgGIAAAAQgBgGAAgGIAAAAIAAgCIAAAAIAAACIAAAAQAAAGABAGIAAAAIAEAGIAAAAQAAAMAFAFIAAAAQAEAEAHACIAAAAIACAAIAAAAIACADIAKAQIAAAAIAFAOIAGAMIAAAAQARAdAgARIAAAAQAAAEABAEIAAAAQACAEADACIAAAAIgBAPIAAAAIgBAVIAAANIAAAAQAAAPACAHIAAAAQAFAUAPAKIAAAAQAMAGAAAFIAAAAIAAABIAAAAQAAAEgGAIIAAAAQgCgFgHgDIAAAAIgQgHIAAAAIgDgDIAAAAIgFgJIAAAAQgCgFgBgGIAAAAQgEgQgBgLIAAAAIAAAAIAAgDIAAAAIACgIIAAAAQAGgQAAgIIAAAAIAAgCIAAAAQAAgHgDgGIAAAAQgEgGgHgCIAAAAIAAAAIgDgEIAAAAQgFgGgKgFIAAAAIgTglIgPgOIAAAAIgKgJIAAAAIgHgMIAAAAQgNgSgRgGIAAAAQgIgDgIABIAAAAIgBAAIgSgKIASAKIABAAQAIgBAIADIAAAAQARAGANASIAAAAIAHAMIAAAAIAKAJIAAAAIAPAOIAAAAIATAlQAKAFAFAGIAAAAIADAEIAAAAIAAAAQAHACAEAGIAAAAQADAGAAAHIAAAAIAAACIAAAAQAAAIgGAQIAAAAIgCAIIAAAAIAAABIAAAAIAAACIAAAAIAAAAgAmCA1IAAAAIAAAAIAAAAgAkYAzIAAAAIAAAAIAAAAgAkYAzQAIAAAGgDIAAAAQgGADgIAAgAmTAzIAGgCIAAAAIgGACIAAAAIgBgHIAAAAIABAHgAkhAyIgBAAIAAAAIABAAgAmLAxIgBAAIAAAAIABAAgAleAsIAAAAIAAAAIAAAAgAldAsIABgBIAAAAIgBABgAlKAkIAAADIAAAAIAAgDIAAAAIABgCIAAAAIgBACgAiQgjIAAADIAAAAQACAFANAKIAAAAQAhAUAMARIAAAAQAFAGABAGIAAAAIACAAIAAAAIAFAAIACgEIAAgDIAAAAIAAADIAAAAIgCAEIgFAAIgCAAIAAA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inIAAAAIAAAAIAAAAgAE1jbQgFAOgMAHIAAAAIgUAKIAAAAQAdgHAdAAIAAAAQgKgNgGgKIAAAAIgDgHIAAAAIgCAGgAiZjAIgBAAIAAAAIABAAgAiqjBIgDAAIAAAAIADAAgAiqjBIABAAIAAAAIgBAAgAi+jFIgCAAIAAAAQgSgGgHgGIAAAAQgGgFgHgKIAAAAIgLgSIAAAAIgKgOIAAAAIgBgCIAAAAIADAIIAAAAIADAJIAAAAIgHgKIAAAAQgJgNgBgJIAAAAIABgPIAAAAIABgBIAAAAIAAgDIAAAAIAAgDIAAAAIAAgRIAAAAIAAgJIAAAAIgFgbIAAAAIgBgRIAAAAQgBgGgFgKIAAAAQgDgJgBgYIAAAAQAAgjANgMIAAAAIADgCIAAAAIAAgBIAAAAQAAgKAGgKIAAAAQAHgLAMgEIAAAAIAAAAIAAAAIAAAAIAAAAQgMAEgHALIAAAAQgGAKAAAKIAAAAIAAABIAAAAIgDACIAAAAQgNAMAAAjIAAAAQABAYADAJIAAAAQAFAKABAGIAAAAIABARIAAAAIAFAbIAAAAIAAAJIAAAAIAAARIAAAAIAAADIAAAAIAAADIAAAAIgBABIAAAAIgBAPIAAAAQABAJAJANIAAAAIAHAKIAAAAIgDgJIAAAAIgDgIIAAAAIABACIAAAAIAKAOIAAAAIALASIAAAAQAHAKAGAFIAAAAQAHAGASAGIAAAAIACAAgAAejUIAGgDIAAAAQADgEAGgCIAAAAQAWgJAVgBIAAAAIAGABIAAAAIABgCIAAAAQAJgHAPgSIAAAAIAYgZIAAAAIAYgTIAAAAQANgLAHgKIAAAAQAHgKACgMIAAAAIAEgRIAAAAQAGgMAMgFIAAAAIgBgIIAAAAIAAgGIAAAAQACgQAPgIIAAAAQAKgGAWAAIAAAAIAWAAIgWAAQgWAAgKAGIAAAAQgPAIgCAQIAAAAIAAAGIAAAAIABAIIAAAAQgMAFgGAMIAAAAIgEARIAAAAQgCAMgHAKIAAAAQgHAKgNALIAAAAIgYATIAAAAIgYAZIAAAAQgPASgJAHIAAAAIgBACIAAAAIgGgBIAAAAQgVABgWAJIAAAAQgGACgDAEIAAAAIgGADIAAAAIAAAAgAA4j0IgBAAIAAAAIABAAgAA5j0QAOAAAQgKIAAAAQALgIATgUIAAAAIA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");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_4_graphics_20,x:397.8,y:-53.1}).wait(2).to({graphics:null,x:0,y:0}).wait(7));

	// Layer_23
	this.instance_4 = new lib.plate_t_09();
	this.instance_4.setTransform(-640,-170);
	this.instance_4._off = true;

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({_off:true},2).wait(7));

	// Layer_22 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_18 = new cjs.Graphics().p("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gLAOIAAAAIgBADIAAAAIgCAAQgOAPgFAMIAAAAQgDAJAAATIAAAAQgDATgCAHIAAAAIgJAPIgeBYIgJAQIAAAAQAJgkAIg2IAAAAIANhHQADgOAAgKIAAAAIAAgCIAEgLQACgDABgFIAAAAIAHgQIACgHIAAAAIgBgDIAAAAQAHgJAEgHIAAAAIABgDIAAAAIACgEIgCAAIAAABIAAgBIAAAAQAAgNgKgGIAAAAQAKAGAAANIAAAAIAAABIAAAAIAAgBIACAAIgCAEIgBADIAAAAQgEAHgHAJIAAAAIABADIAAAAIgCAHIAAAAIgHAQQgBAFgCADIAAAAIgEALIAAACQAAAKgDAOIAAAAIgNBHQgIA2gJAkIAAAAIAAAAgAhdEOIgOgRIAAAAQgQgSgJgNIAAAAQgFgNgIgKIAAAAIgLgLQgfgagKgYIAAAAIgIgbQgCgEAAgDIAAAAIAAgDIAAAAQgEgJgBgNIAAAAQAAgOADgGIAAAAQAHgXAbgIIAAAAQgbAIgHAXIAAAAQgDAGAAAOIAAAAQABANAEAJIAAAAIAAADIAAAAQAAADACAEIAAAAIAIAbQAKAYAfAaIAAAAIALALQAIAKAFANIAAAAQAJANAQASIAAAAIAOARIAAAAIgSgJIAAAAIgigVIAAAAQgXgRgRgcIAAAAIgOgVIgSgXIgHgHIAAAAIgBgBIgIgPIgGglIABgGIAAAAQAAgFgDgHIAAAAQgEgKgXgIIAAAAIgBAAIAAAAQAIgCAFgFIAAAAIADgDIAAAAQAFgGAAgHIAAAAIAAgCIAAAAIACAAIAAAAIAJACIAAAAQAGABADgBIAAAAQAHgCAGgLIAAAAQAEgEAMgEIAAAAIACgBIAAAAIgCABIAAAAQgMAEgEAEIAAAAQgGALgHACIAAAAQgDABgGgBIAAAAIgJgCIAAAAIgCAAIAAAAIAAACIAAAAQAAAHgFAGIAAAAIgDADIAAAAQgFAFgIACIAAAAIABAAIAAAAQAXAIAEAKIAAAAQADAHAAAFIAAAAIgBAGIAAAAIAGAlIAIAPIABABIAHAHIAAAAIASAXIAOAVQARAcAXARIAAAAIAiAVIAAAAIASAJIAAAAIAAAAgAmND9IgBAAIAAAAIABAAgAmND9QAJAAAFgLIAAAAIAAAAIAAAAIADgUIAAAAQABgGAEgJIAAAAIAFgPIAAAAQAEgLACgOIAAAAIAAgMQAAgHgDgKIAAAAQgGgMgBgDIAAAAQgEgMgDgDIAAAAIAAgCIgBABIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAABQADADAEAMIAAAAQABADAGAMIAAAAQADAKAAAHIAAAAIAAAMQgCAOgEALIAAAAIgFAPIAAAAQgEAJgBAGIAAAAIgDAUIAAAAIAAAAIAAAAQgFALgJAAgAmOD9IAAAAIAAAAIAAAAgACtDVIAhgWIAAAAQAmgYARgVIAAAAIAQgbQAag1ABg+IAAAAIAAgEIAAAAQAAgNADgHIAAAAIgBgKIAAAAQABgGACgEIAAAAIACgCIAAAAQACgHAIgEIAAAAQAEgBAFgBIAAAAQgFABgEABIAAAAQgIAEgCAHIAAAAIgCACIAAAAQgCAEgBAGIAAAAIABAKIAAAAQgDAHAAANIAAAAIAAAEIAAAAQgBA+gaA1IAAAAIgQAbQgRAVgmAYIAAAAIghAWIAAAAIAAgDIAAAAQAEgKAIgGIAAAAIAMgJQAZgVATgaIAAAAIAIgOIAAAAQAPgUAHgdIAAAAQAIgcAAgvIAAAAIAAgEIAAAAIADgbIACgSIAAAAIgBgEIAAAAQAAgEgDgDIAAAAIgDgDIAAAAIgFgEIAAAAIgFgCIAAAAIAFgEIAAAAQADgDAAgDIAAAAIAAgCIAAAAQgBgFgDgCIAAAAIgHgEQgHgDgGAAIAAAAQgHgCgDACIAAAAIgCABIAAAAQgDgCgFgBIAAAAIAAAAIAAAAIAAAAIAAAAQAFABADACIAAAAIACgBIAAAAQADgCAHACIAAAAQAGAAAHADIAAAAIAHAEQADACABAFIAAAAIAAACIAAAAQAAADgDADIAAAAIgFAEIAAAAIAFACIAAAAIAFAEIAAAAIADADIAAAAQADADAAAEIAAAAIABAEIAAAAIgCASIAAAAIgDAbIAAAEIAAAAQAAAvgIAcIAAAAQgHAdgPAUIAAAAIgIAOIAAAAQgTAagZAVIAAAAIgMAJQgIAGgEAKIAAAAIAAADIAAAAIAAAAgAnWByIABAGIAHAJIAHAVIAFAMIAAAAIAIAHIAAAAIAFAGIADABIAAAAIAGAFIAAAAQADADAAADIAAAAQAEACAEAAIAAAAIACgHIgDgGIAAAAQgGgIgDgKIAAAAIgCgHIAAAAIgBgCIAAAAIgBgFIAAAAIAAgFIAAAAIABgFIAAAAIgBAFIAAAAIAAAFIAAAAIABAFIAAAAIABACIAAAAIACAHIAAAAQADAKAGAIIAAAAIADAGIAAAAIgCAHQgEAAgEgCIAAAAQAAgDgDgDIAAAAIgGgFIAAAAIgDgBIAAAAIgFgGIgIgHIAAAAIgFgMIAAAAIgHgVIgHgJIgBgGQACgDAAgEIAAAAIAAgEIAAAAQgBgDgDgDIAAAAIAGgHIAAAAIgBgDIAAAAIgEgDIAAAAIgFgDIAAAAIgBAAIAAAAQgCACgDABIAAAAQADgBACgCIAAAAIABAAIAAAAIAFADIAAAAIAEADIAAAAIABADIAAAAIgGAHIAAAAQADADABADIAAAAIAAAEIAAAAQAAAEgCADIAAAAIAAAAgAHCCYIAAAAIAAAAIAAAAgAGWB+IgBAHIAAAAIABgHIAAAAQACgGADAAIAAAAQgDAAgCAGgAmtCFQAEgHAJAAIAAAAQgJAAgEAHgAmeB+QAHACAGAEIAAAAQADgCAAgEIAAAAIgBgCIAAAAIgBgKIAAAAQAAgHAHgBIAAAAIAFgBIAAAAIgFABIAAAAQgHABAAAHIAAAAIABAKIAAAAIABACIAAAAQAAAEgDACIAAAAQgGgEgHgCIAAAAIAAAAgAGrCAIgCgOIAAAAIgDABIAAAAIAAACIAAAAIAAgCIAAAAIADgBIAAAAIACAOgAmfB+IgBAAIAAAAIABAAgAmgB+IAAAAIAAAAIAAAAgAGjB8IgBAAIAAAAIABAAgAGjB8QACAAABgGIAAAAQgBAGgCAAgAGfB6IABABIAAAAIgBgBIAAAAIAAAAIAAAAIAAAAgAGfB6IAAAAIAAAAIAAAAgAGbB4IAAAAIAAAAIAAAAgAmDBpIgBAAIAAAAIABAAgAmiBnIgBAAIAAAAIABAAgAmiBnQAGAAAIgDIAAAAQgIADgGAAgAmtBkIgCgBIAAAAIACABgAmUBjIADgBIAAAAIgDABgAmRBiIAAAAIAAAAIAAAAgAnjBUIAAAAIAAAAIAAAAgAnjBUIgCgBIAAAAIACABgAgWBMIgBAAIAAAAIABAAgAgWBMQAWAAAOgCIAAAAQgOACgWAAgAiWAcQANAEAWASIAAAAIAgALIAAAAIAMAKIARAEIAAAAIACAAIAAAAIgCAAIAAAAIgRgEIAAAAIgMgKIgggLIAAAAQgWgSgNgEIAAAAIAAAAgAAPBKIgBAAIAAAAIABAAIAAAAIAJgBIAAAAIgJABgAAZBJIgBAAIAAAAIABAAgAASBCIgGAAIAAAAIAGAAgAASBCIABAAIAAAAIgBAAgAl/A0QAHAGAAAIIAAAAQAAgIgHgGIAAAAgAAsBCIAAAAIAAAAIAAAAgAAtBCIABAAIAAAAIgBAAgAAMBCIgGgCIAAAAIAGACgAAmBBIgCgBIAAAAIACABgAAEBAIgEgBIAAAAQgGgCglgDIAAAAQgQgBgUgGIAAAAQgIgCgDgEIAAAAQgGAAgDgFIAAAAIgIgKIAAAAQgNgSgdgFIAAAAIgBAAIAAAAIABAAIAAAAQAdAFANASIAAAAIAIAKIAAAAQADAFAGAAIAAAAQADAEAIACIAAAAQAUAGAQABIAAAAQAlADAGACIAAAAIAEABgAlxA0IAAAAIAAAAIAAAAgAlyA0IAAAAIAAAAIAAAAgAlvAzQAHgBAJgHIAAAAQgJAHgHABgAgEAQQABAGACAEIAAAAIAFAIIAAAAIADADIAAAAIAQAHIAAAAQAHACACAFIAAAAQAGgHAAgEIAAAAIAAgBIAAAAQAAgFgMgGIAAAAQgPgIgFgTIAAAAQgCgGAAgOIAAAAIAAgMIAAAAIABgUIABgLIAAAAIgCgDIAAAAIgEgMIAAAAQgfgQgSgbIAAAAIgGgLIAAAAIgFgNIgIgMIAAAAQgKgEgHgIIAAAAQgGgIgCgIIAAAAIAAgDIAAAAIgBgCIAAAAQgBgFAAgFIAAAAIABgKIAAAAQACgFAHgKIAAAAIAAgEIAAAAQAAgGACgEIAAAAQAFgKAKgBIAAAAIANABIAAAAIAEABIAAAAIABgCIAAAAIAAgFIAAAAIAIgCIAAAAIgIACIAAAAIAAAFIAAAAIgBACIAAAAIgEgBIAAAAIgNgBIAAAAQgKABgFAKIAAAAQgCAEAAAGIAAAAIAAAEIAAAAQgHAKgCAFIAAAAIgBAKIAAAAQAAAFABAFIAAAAIABACIAAAAIAAADIAAAAQACAIAGAIIAAAAQAHAIAKAEIAAAAIAIAMIAAAAIAFANIAGALIAAAAQASAbAfAQIAAAAIAEAMIAAAAIACADIAAAAIgBALIAAAAIgBAUIAAAMIAAAAQAAAOACAGIAAAAQAFATAPAIIAAAAQAMAGAAAFIAAAAIAAABIAAAAQAAAEgGAHIAAAAQgCgFgHgCIAAAAIgQgHIAAAAIgDgDIAAAAIgFgIIAAAAQgCgEgBgGIAAAAIAAgBIABgEIAAAAQACgDABgKIAAAAIADgdIAAAAIAAgEIAAAAQAAgQgGgJIAAAAIgMgKIAAAAIgKgIQgMgHgEgEIAAAAQgDgDgFgLIAAAAIgHgSQgEgLgFgEIAAAAQgFgGgJAAIAAAAIgEAAIAAAAIgBgBIAAAAQgNgRgRgFIAAAAQgIgDgIABIAAAAIgBAAIgSgKIASAKIABAAQAIgBAIADIAAAAQARAFANARIAAAAIABABIAAAAIAEAAIAAAAQAJAAAFAGIAAAAQAFAEAEALIAAAAIAHASQAFALADADIAAAAQAEAEAMAHIAAAAIAKAIIAMAKIAAAAQAGAJAAAQIAAAAIAAAEIAAAAIgDAdIAAAAQgBAKgCADIAAAAIgBAEIAAAAIAAABgAk+AsIAAAAIAAAAIAAAAgAleApIABgBIAAAAIgBABgAlcAoIABgBIAAAAQAIgJABgDIAAAAIABgDIAAAAIABACIAAAAIAHAFIAAAAIgBADIAAAAIAAACIAAAAIAAgCIAAAAIABgDIAAAAIgHgFIAAAAIgBgCIAAAAIgBADIAAAAQgBADgIAJIAAAAIgBABgAmugrIgGASIAAAAQgJAdAAAfIAAAAQAAgfAJgdIAAAAIAGgSIAAAAQADgKAAgIIAAAAQAAgFgGgdIAAAAIgBgNIAAAAQAAgMAEgHIAAAAQAIgOAegKIAAAAIAzgSIgzASQgeAKgIAOIAAAAQgEAHAAAMIAAAAIABANIAAAAQAGAdAAAFIAAAAQAAAIgDAKgAiQggIAAADIAAAAQACAEANAJIAAAAQAhATAMAPIAAAAQAFAGABAFIAAAAIACAAIAAAAIAFAAIACgDIAAgDIAAAAQAAgNgQgLIAAAAQgVgMgJgHIAAAAQgMgLgFgMIAAAAIgEgIQgCgDgGgCIAAAAIgQgHQgEADgGAAIAAAAIgCAAIAAAAIACAAIAAAAQAGAAAEgDIAAAAIAQAHQAGACACADIAAAAIAEAIQAFAMAMALIAAAAQAJAHAVAMIAAAAQAQALAAANIAAAAIAAADIAAAAIgCADIgFAAIgCAAIAAAAQgBgFgFgGIAAAAQgMgPghgTIAAAAQgNgJgCgEIAAAAIAAgDIAAAAIAAgBIAAAAIAAgBIAAAAQAAgEgEgDIAAAAIgCgBIAAAAQgGgDgMgBIAAAAIgBAAIABAAQAMABAGADIAAAAIACABIAAAAQAEADAAAEIAAAAIAAABIAAAAIAAABIAAAAIAAAAgAiuAcIACAAIAAAAIgCAAgAisAcIABAAIAAAAIgBAAgAiqAbIAKAAIAAAAIgKAAgAigAbIAAAAIAAAAIAAAAgAjBAKQAQgEAOAAIAAAAQgOAAgQAEgAk4gGIAEADIAAAAIAPALIAAAAIAAABIAAgCIAAAAIABgHIAAAAIgBAAIAAAAQgCgEgCgNIAAAAIgHgdIAAAAIAAgMIAAAAIAAgOIAAAAIACgIIAAAAIgBAAQgIATgJANIAAAAIgJAQIAAAAIABgBIAAAAIABAAIAAAAIgBAAIAAAAIgBABIAAAAIAJgQIAAAAQAJgNAIgTIAAAAIABAAIgCAIIAAAAIAAAOIAAAAIAAAMIAAAAIAHAdIAAAAQACANACAEIAAAAIABAAIAAAAIgBAHIAAAAIAAACIAAAAIAAgBIgPgLIAAAAIgEgDIAAAAIABgGIAAAAIgBgHIAAAAQAAgGgDgEIAAAAIgBgCIAAAAIgCgBIAAAAIAAAAIAAAAIAAAAIAAAAIACABIAAAAIABACIAAAAQADAEAAAGIAAAAIABAHIAAAAIgBAGIAAAAIAAAAgAiZAHIgCAAIAAAAIACAAgAijAGIAAAAIAAAAIAAAAgAG/ACIAAAAIAAAAIAAAAgAHAACIAFgBIAAAAIgFABgAHFABIACAAIAAAAIgCAAgAG0AAIgBAAIAAAAQgIgEgFgJIAAAAQgEgMgCgCIAAAAQgDgEgOgKIAAAAIgSgNQgNgHgYgGIAAAAIgmgJIAAAAQgRgGgDgIIAAAAIgBgFIAAAAIABgHIAAAAQADgFAFgEIAAAAQAHgFARgFIAAAAQAigKAegPIAAAAQAOgHAEAAIAAAAIAJgBIAAAAIgJABIAAAAQgEAAgOAHIAAAAQgeAPgiAKIAAAAQgRAFgHAFIAAAAQgFAEgDAFIAAAAIgBAHIAAAAIABAFIAAAAQADAIARAGIAAAAIAmAJIAAAAQAYAGANAHIAAAAIASANQAOAKADAEIAAAAQACACAEAMIAAAAQAFAJAIAEIAAAAIABAAgAHLgsQABAIACAHIAAAAIAFAMIAAAAIAAADIAAAAIAAgDIAAAAIgFgMIAAAAQgCgHgBgIIAAAAIgBgOIAAAAIABgKIAAAAIACgPIAAAAIABgMIAAAAIAAgDIAAAAQAAgbgXgSIAAAAIgCgBIAAAAIACABIAAAAQAXASAAAbIAAAAIAAADIAAAAIgBAMIAAAAIgCAPIAAAAIgBAKIAAAAIABAOgAGMgRIgBgBIAAAAIABABgAF1gSIAAAAIAAAAIAAAAgAF+gYQgEAFgFABIAAAAQAFgBAEgFIAAAAIABAAIAAAAIgBAAgAFQg2IANAJIANALIAIAPIACAAIAAAAIgCAAIAAAAIgIgPIgNgLIgNgJIAAAAgAF/gZQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAgAGDgaIgBAAIAAAAIABAAgAlGghIACgBIAAAAIgCABgAlDgiIAAAAIAAAAIAAAAgAiqgvIgBgBIAAAAIABABgAjBg5IADADIAAAAIACgBIAAAAIABAAIAAAAIgBAAIAAAAIgCABIAAAAIgDgDIAAAAIAAgBIAAAAIAAABgAFKg3IAAAAIAAAAIAAAAgAi4g3IgBAAIAAAAIABAAgAi6g3IABAAIAAAAIgBAAgAjBg6IAAAAIAAAAIAAAAgAjFg8IgDAAIAAAAIADAAgAjnhtQAPAFAFAHIAAAAQADAFABAHIAAAAQADALAAANIAAAAIAAABIAAAAIABAAIAAAAIADAAIAAAAIgDAAIAAAAIgBgBIAAAAQAAgNgDgLIAAAAQgBgHgDgFIAAAAQgFgHgPgFIAAAAQgPgFgLACIAAAAQgIABgLAGIAAAAIgBADIAAAAQgBAFgHAAIAAAAQAHAAABgFIAAAAIABgDIAAAAQALgGAIgBIAAAAIAGgBIAAAAQAJAAALAEgAisg8IAAAAIAAAAIAAAAgAi6hDIgBgBIAAAAIgBgDIAAAAQgFgCgEgFIAAAAQgDgFAAgGIAAAAIABgHIAAAAQADgKAIgDIAAAAIACgHIAAAAIARgwQAEgJAFgDIAAAAQgFADgEAJIAAAAIgRAwIgCAHIAAAAQgIADgDAKIAAAAIgBAHIAAAAQAAAGADAFIAAAAQAEAFAFACIAAAAIABADIAAAAIABABgAkqhbIABgCIAAAAIAGgFIAAAAIAEABIAAAAIgEgBIAAAAIgGAFIAAAAIgBACIAAAAIABgLIAAAAQAAgFgBgDIAAAAQgCgFgCgDIAAAAQACADACAFIAAAAQABADAAAFIAAAAIgBALIAAAAIAAAAgADThiIABAFIAAAAIABAAIAAAAIgBAAIAAAAIgBgFIAAAAIABgNIAAAAIACgKIAAAAIAAgDIAAAAQgBgNgSgIIAAAAQgHgDgYgEIAAAAIgDAAIAAAAIADAAIAAAAQAYAEAHADIAAAAQASAIABANIAAAAIAAADIAAAAIgCAKIAAAAIgBANIAAAAIAAAAgADZheIAHgCIAAAAIgHACgADuhgIAAAAIAAAAIAAAAgADuhgQAFAAAGgCIAAAAQgGACgFAAgADmhhIAAAAIAAAAIAAAAgAkdhhIAAAAIAAAAIAAAAgAkehhIAAAAIAAAAIAAAAgADjhjIAAAAIAAAAQgJgFgBgPIAAAAIABgMIAAgEIAAAAIgBgHIAAAAQgQgJgHgCIAAAAQgOAAgHgCIAAAAIgQgFIAAAAIgQgCIAAAAQgIgCgFgHIAAAAQgDgFAAgFIAAAAIABgGIAAAAIAFgJIAAAAIABgCIAAAAIgPgLIAAAAQgKgHgJgCIAAAAIgCAAIAAAAIACAAIAAAAQAJACAKAHIAAAAIAPALIAAAAIgBACIAAAAIgFAJIAAAAIgBAGIAAAAQAAAFADAFIAAAAQAFAHAIACIAAAAIAQACIAAAAIAQAFIAAAAQAHACAOAAIAAAAQAHACAQAJIAAAAIABAHIAAAAIAAAEIAAAAIgBAMQABAPAJAFIAAAAIAAAAgAgChsIACABIAAAAIAAAAIAAAAIAAgFIAAAAIgCAEIAAAAIAAAAgAmLhsIABAAIgBAAIAAAAgABWhwQASgIAPgPIAAAAQAFgGAFgDIAAAAQAHgHAGgCIAAAAQgGACgHAHIAAAAQgFADgFAGIAAAAQgPAPgSAIIAAAAIACgIIAAAAIADgEIAAAAQAHgHABgEIAAAAIAGgMIAAAAIAFgQQAEgJAAgFIAAAAIACgIIAAAAIgBgEIAAAAQAAgPgHgFIAAAAQgGgEgOAAIAAAAQgVABgWAIIAAAAQgGACgDAEIAAAAIgGADIAAAAIgBAAIAAAAQgOAMgKAdIAAAAIgFAQIAAAAIAAgLIAAgKIAAAAIAAgDIAAAAQAAgFADgLIAAAAQAEgJAAgGIAAAAIAAgFIAAAAIAAgFIAAAAIADgIIAAAAQADgGAAgFIAAAAQAAgJgGgJIAAAAQgHgNgRgEIAAAAIgCAAIAAAAIACAAIAAAAQARAEAHANIAAAAQAGAJAAAJIAAAAQAAAFgDAGIAAAAIgDAIIAAAAIAAAFIAAAAIAAAFIAAAAQAAAGgEAJIAAAAQgDALAAAFIAAAAIAAADIAAAAIAAAKIAAAAIAAALIAFgQIAAAAQAKgdAOgMIAAAAIABAAIAAAAIAGgDIAAAAQADgEAGgCIAAAAQAWgIAVgBIAAAAQAOAAAGAEIAAAAQAHAFAAAPIAAAAIABAEIAAAAIgCAIIAAAAQAAAFgEAJIAAAAIgFAQIgGAMIAAAAQgBAEgHAHIAAAAIgDAEIAAAAIgCAIIAAAAIAAAAgAjShwIAAgBQAJgBAFgFIAAAAQAGgFAAgJIAAAAIAAgBIAAAAQgBgJgGgIIAAAAQgEgFgJgHIAAAAIgNgLIAAAAIgTgUIAAAAQgLgKgLgBIAAAAIABgzIAAAAIgBgSIAAAAQgBgogMgaIAAAAQgGgNgHgFIAAAAIgBAAIAAAAIABAAIAAAAQAHAFAGANIAAAAQAMAaABAoIAAAAIABASIAAAAIgBAzIAAAAQALABALAKIAAAAIATAUIAAAAIANALIAAAAQAJAHAEAFIAAAAQAGAIABAJIAAAAIAAABIAAAAQAAAJgGAFIAAAAQgFAFgJABIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIABABgAjVhxIgBAAIAAAAIABAAgAjfhyIgDgBIAAAAIADABgAjjhzIAAAAIAAAAIAAAAgAj2h5IgBgBIAAAAIABABgAkGh8IABAAIAAAAIgBAAgAkEh8IAAAAIAAAAIAAAAgAlLiDIAFABIAAAAIgCgCIAAAAIgDABgAEfiMQADAEAAAFIAAAAQAAgFgDgEIAAAAIAjgGIAAAAQAngHAPAAIAAAAIANgCIAAAAQAHgDAEgGIAAAAQADgFAAgEIAAAAIgBgEIAAAAQgCgGgGgFIAAAAIgCgBIAAAAIACABIAAAAQAGAFACAGIAAAAIABAEIAAAAQAAAEgDAFIAAAAQgEAGgHADIAAAAIgNACIAAAAQgPAAgnAHIAAAAIgjAGIAAAAIAAAAgACciZIgIAAIAAAAIAIAAgACQiZIAEAAIAAAAIgEAAgAGbiaIgCAAIAAAAIACAAgAk4iuQAIABAGAEIAAAAQAGAFAAAHIAAAAQAMgGAOgBIAAAAQgOABgMAGIAAAAQAAgHgGgFIAAAAQgGgEgIgBIAAAAIAAAAIAAAAIAAAAgAkfinIAAAAIAAAAIAAAAgAkeinIAFgBIAAAAIgFABgAi6iqIADABIAAAAIABABIAAAAIAEgHIAAAAQADgEAGgDIAAAAIACgBIAAAAIAGAAIAAAAQAJgCAKACIAAAAIAMABIAAAAQAHAAAEgBIAAAAQAMgEADgNIAAAAIAAgGIAAAAQAEgJABgJIAAAAQACgNADgEIAAAAQAEgEAKgFIAAAAQAGgGABgHIAAAAIgBgFIAAAAIAHADIAAAAQAFACAHABIAAAAIAMAAIAAAAIAJABIAAAAIgJgBIAAAAIgMAAIAAAAQgHgBgFgCIAAAAIgHgDIAAAAIABAFIAAAAQgBAHgGAGIAAAAQgKAFgEAEIAAAAQgDAEgCANIAAAAQgBAJgEAJIAAAAIAAAGIAAAAQgDANgMAEIAAAAQgEABgHAAIAAAAIgMgBIAAAAQgKgCgJACIAAAAIgGAAIAAAAIgBAAIAAAAIgBABIAAAAQgGADgDAEIAAAAIgEAHIAAAAIgBgBIAAAAIgDgBIAAAAIACgCIAAAAQACgDAAgDIAAAAIAAgCIAAAAQgCgDgEgCIAAAAIgJgEIAAAAQgKgEgHgJIAAAAQgJgBgGgGIAAAAQgKgKgEgWIAAAAQgDgPAAgmIAAAAIgBgBIAAAAQgIAHgCAEIAAAAQgDADgBANIAAAAIACAKIAAAAIAKAbIAAAAIADAIIAAAAIgHgJIAAAAQgJgMgBgIIAAAAIABgOIAAAAIABgCIAAAAIgBgLIAAAAIAAgIIAAAAIAEgQIAAAAIAAgCIAAAAIgCgPIAAAAIgGgGIAAAAQgFgHgEgNIAAAAIgDgKIgGgHQgJgMAAgMIAAAAIAAgEIAAAAIACgNIAAgMIAAAAQABgEAEgFIAAAAIAHgIIAAAAIAGgRIAAAAQAEgLAGgEIAAAAQAFgDAGAAIAAAAQAHAAAFADIAAAAQADACAEAGIAAAAIAHAJIAAAAIALAIIAAAAQAHAHAAATIAAAAIAAAEQ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EAEgFAQIAAAAIAAABIAAAAIgCACIAAAAQgTAPgKAVIAAAAQgJAVgBAXIAAAAQAAANACAHIAAAAIABAFIAAAAIAAABIAAAAIgGAGIAAAAQgEAEgCAEIAAAAIAAgEIAAAAIAAgFIAAAAIACgPIAAAAIAAgCIAAAAQgEgIAAgFIAAAAIAAgBIAAAAQAAgEACgEIAAAAIADgKIAAAAIAAgGIAAAAIABgNIAAAAIAFgOIAAAAIAAgPIAAAAIAAgEIAAAAIADgFIAAAAQAEgJAAgNIAAAAQAAgJgCgLIAAAAQgBgKgDgGIAAAAQgFgKgNgJIAAAAQgPgJgPgCIAAAAIgJgBIAAAAIgIgDIAAAAIgBAAIAAAAIABAAIAAAAIAIADIAAAAIAJABIAAAAQAPACAPAJIAAAAQANAJAFAKIAAAAQADAGABAKIAAAAQACALAAAJIAAAAQAAANgEAJIAAAAIgDAFIAAAAIAAAEIAAAAIAAAPIAAAAIgFAOIAAAAIgBANIAAAAIAAAGIAAAAIgDAKIAAAAQgCAEAAAEIAAAAIAAABIAAAAQAAAFAEAIIAAAAIAAACIAAAAIgCAPIAAAAIAAAFIAAAAIAAAEgADUkuQAKgCAJAAIAAAAQgJAAgKACgADnkwIAAAAIAAAAIAAAAgAC7k0IgBAAIAAAAIABAAgAC7k0QAKAAAIgHIAAAAIAAAAIAAAAIALgJIAAAAQADgCANgDIAAAAQAGgBAIgEIAAAAIAPgGIAAAAIAAAAIAAAAIABAAIAAAAIgBAAIAAAAIAAAAIAAAAIgPAGIAAAAQgIAEgGABIAAAAQgNADgDACIAAAAIgLAJIAAAAIAAAAIAAAAQgIAHgKAAgAC0k1IAAAAIAAAAIAAAAgAD0k6IADAAIgLgBIAIABgABPlIIAAAAIAAAAIAAAAgABQlIIACAAIAAAAIgCAAgABllQIgSAHIAAAAIgBAAIAAAAIABAAIAAAAIASgHIAAAAQALgFAKAAIAAAAQgKAAgLAFgABClPQACAEAFACIAAAAIABAAIAAAAIgBAAIAAAAQgFgCgCgEIAAAAQAHgDAagCIAAAAQAVgCAIgKIAAAAQAHgHAAgLIAAAAIABgCIAAAAQgBgMgJgKIAAAAQgLgLgOgBIAAAAQAMgPAKgSIAAAAQAHgNAAgJIAAAAQAAgFgDgDIAAAAQgEgHgIgDIAAAAIgFAAIAAAAIAFAAIAAAAQAIADAEAHIAAAAQADADAAAFIAAAAQAAAJgHANIAAAAQgKASgMAPIAAAAQAOABALALIAAAAQAJAKABAMIAAAAIgBACIAAAAQAAALgHAHIAAAAQgIAKgVACIAAAAQgaACgHADIAAAAIAAAAgAE1lTIAAAAIAAAAIAAAAgAE2lTQAEAAAEgCIAAAAQgEACgEAAgACAlUIAAgEIAAAAQABgIAGgFIAAAAQAFgDAJgDIAAAAIABgCIAAAAIAFgNIAAAAIgCgCIAAAAIgIgKIAAAAQgEgHgBgFIAAAAIAAgEIAAAAQAAgIAHgGIAAAAIABgBIAAAAIAAgRIAAAAIAAgEIAAAAQAAgegNgcIAAAAIgUgEIAAAAQgLgBgEgEIAAAAIgBgBIAAAAIgEgFIAAAAIgBgDIAAAAQgEgEAAgHIAAAAQAAgMAKgGIAAAAQAHgEAOAAIAAAAIAYgBIAAAAQAPACAHAIIAAAAQAFAFAEAMIAAAAIAPAwQACAIAAAGIAAAAIgBAEIAAAAQAAAGgDAEIAAAAIAAAEIAAAAIgBARQAAAHAIAMIAAAAQAHAMAAAHIAAAAIgDAKIAAAAIAAABIAAAAIACADIAAAAIABgCIAEgGIAAAAIABgHIAAAAIAAgBIAAgCIAAAAIABgHIAAAAQADgLAMgCIAAAAIAGgCIAAAAIABAAIAAAAIgBAAIAAAAIgGACIAAAAQgMACgDALIAAAAIgBAHIAAAAIAAACIAAAAIAAABIgBAHIAAAAIgEAGIAAAAIgBACIgCgDIAAAAIAAgBIAAAAIADgKIAAAAQAAgHgHgMIAAAAQgIgMAAgHIAAAAIABgRIAAgEIAAAAQADgEAAgGIAAAAIABgEIAAAAQAAgGgCgIIAAAAIgPgwQgEgMgFgFIAAAAQgHgIgPgCIAAAAIgYABIAAAAQgOAAgHAEIAAAAQgKAGAAAMIAAAAQAAAHAEAEIAAAAIABADIAAAAIAEAFIAAAAIABABIAAAAQAEAEALABIAAAAIAUAEIAAAAQANAcAAAeIAAAAIAAAEIAAAAIAAARIAAAAIgBABIAAAAQgHAGAAAIIAAAAIAAAEIAAAAQABAFAEAHIAAAAIAIAKIAAAAIACACIAAAAIgFANIAAAAIgBACIAAAAQgJADgFADIAAAAQgGAFgBAIIAAAAIAAAEIAAAAIAAAAIAAAAIAAAAgAB7lVIgBAAIAAAAIABAAgAEJlVQAJgDAIgBIAAAAQgIABgJADgAE+lWIABAAIAAAAIgBAAgAEclZIgBAAIAAAAIABAAgAD3meIAFAGQADACAHAAIAAAAQAMAAAEABIAAAAQAJABAEAGIAAAAIAHAJIAAAAQACADAGACIAAAAQAMAGAFAHIAAAAQAFAHAAAGIAAAAQAAgGgFgHIAAAAQgFgHgMgGIAAAAQgGgCgCgDIAAAAIgHgJIAAAAQgEgGgJgBIAAAAQgEgBgMAAIAAAAQgHAAgDgCIAAAAIgFgGIAAAAIAAAAIAAAAgAk4loQAEgCAFAAIAAAAQgFAAgEACgAkulqIgBAAIAAAAIABAAgAiglvIAAAAIAAAAIAAAAgAitl1IgBgCIAAAAIAAAAIAAAAQgDgFgBgEIAAAAIgBgBIAAAAQgHgFgHgMIAAAAIgIgTIgKgSIAAAAQgCgFAAgFIAAAAQAAgFADgEIAAAAQAFgLATgBIAAAAIATgBIAAAAIARgFIAAAAIAQgEQAPgEASgKIAAAAIABAAIAAAAIgBAAIAAAAQgSAKgPAEIAAAAIgQAEIgRAFIAAAAIgTABIAAAAQgTABgFALIAAAAQgDAEAAAFIAAAAQAAAFACAFIAAAAIAKASIAAAAIAIATQAHAMAHAFIAAAAIABABIAAAAQABAEADAFIAAAAIAAAAIAAAAIABACgADnmgIAAAAIAAAAIAAAAgADnmhIAFAAIAAAAIgFAAgADtmhIAAgBIAAAAIAAABgAA8m8IADAAIAAAAIAKgPIAAAAQALgPAOgEIAAAAIAAAAIAAAAIAAAAIAAAAQgOAEgLAPIAAAAIgKAPIAAAAIgDAAIAAAAIAAAAgAA5m8IAAAAIAAAAIAAAAgABjneIAIgCIAAAAIgIACgABsngIgBAAIAAAAIABAAgAhXn0IAEgBIAAAAIgEABgAhTn1IAIgCIAAAAIgIACgAhIn3IAAAAgAhKn3IAAAAIAAAAIAAAAgAg4I0IAPAAIAAAAIACADIAAAAIADADIAAAAIgUgGgABYIzIAHgEIAAAAIAlgKIAAAAIgkANIAAAAIgXAHIAAAAIAPgGgAAAhrIgCgBIAAAAIACgEIAAAAIAAAFIAAAAIAAAAgAmLhsIABAAIgBAAgAlLiDIADgBIACACIAAAAIgFgBg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_5_graphics_18,x:397.8,y:-48.4}).wait(2).to({graphics:null,x:0,y:0}).wait(9));

	// Layer_21
	this.instance_5 = new lib.plate_t_09();
	this.instance_5.setTransform(-640,-170);
	this.instance_5._off = true;

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({_off:true},2).wait(9));

	// Layer_20 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_16 = new cjs.Graphics().p("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AQgEgBgDgCIAAAAIgLgEIAAAAQgNgEgHgHIAAAAIgXgJIAAAAQg0gTgZgvIAAAAQgJgTgHgFIAAAAIgIgGIAAAAIgKgFIAAAAIgEgBIAAAAQgpgJgTgJIAAAAIgHgFIAAAAIgLgGIAAAAQgSgLgLgTIAAAAQgJgUAAgTIAAAAIAAgBIAAAAQAAgIADgHIAAAAQACgKAEgMIAAAAIAHgSIADAHIAAAAQAIAMAVANIAAAAQA3AoBDAeIAAAAIABABIAAAAIgBgBIAAAAQhDgeg3goIAAAAQgVgNgIgMIAAAAIgDgHIAAAAIgHASQgEAMgCAKIAAAAQgDAHAAAIIAAAAIAAABIAAAAQAAATAJAUIAAAAQALATASALIAAAAIALAGIAAAAIAHAFIAAAAQATAJApAJIAAAAIAEABIAAAAIAKAFIAAAAIAIAGIAAAAQAHAFAJATIAAAAQAZAvA0ATIAAAAIAXAJIAAAAQAHAHANAEIAAAAIALAEIAAAAQADACAEABIAAAAIAPAGIAAAAIAJAFIABAAgAggIEIABAAIAAAAIgBAAgAheGAQAAAKAFATIAAAAIAIAZQAFANAFAJIAAAAIALAJIAAAAIADACIAAAAQAOAGAOAMIAAAAIADAIIAAAAIACAGIAAAAIgCgGIAAAAIgDgIIAAAAQgOgMgOgGIAAAAIgDgCIAAAAIgLgJIAAAAQgFgJgFgNIAAAAIgIgZQgFgTAAgKIAAAAIAAgHIAAAAQAAgGACgDIAAAAQADgFAEgBIAAAAIAEgBIAAAAIABAGIAAAAIgBAIIAAAAQAAAEABADIAAAAIAEAJIAAAAIABAMIASAdIABAHIADACQABADADACIAAAAIABABIAAAAIgBgBIAAAAQgDgCgBgDIAAAAIgDgCIgBgHIgSgdIgBgMIgEgJIAAAAQgBgDAAgEIAAAAIABgIIAAAAIgBgGIAAAAIgEABIAAAAQgEABgDAFIAAAAQgCADAAAGIAAAAIAAAHgAghHGIAAAAIAAAAIAAAAgAghHGIAHgBIAAAAIgHABgAgaHFIABAAIAAAAIgBAAgACXF9IANgHIAAAAQAbgOAOgQIAAAAQALgJAOgVIAAAAQAQgXAHgHIAAAAQAIgJAfgaIAAAAQAagVAKgQIAAAAQAHgJAJgSIAAAAQANgQAMgDIAAAAIAQgWQAAgDgDgCIAAAAIAIAAIAAAAIAEgFIgDAFQALgBABgBIAAAAQgBABgLABIAAAAIADgFIgEAFIgIAAIAAAAQADACAAADIAAAAIgQAWQgMADgNAQIAAAAQgJASgHAJIAAAAQgKAQgaAVIAAAAQgfAagIAJIAAAAQgHAHgQAXIAAAAQgOAVgLAJIAAAAQgOAQgbAOIAAAAIgNAHIAAAAQAVgaApgtIAAAAQA2g8AthCIAAAAIAQgVIAAAAIAOgOQADgCAFgIIAAAAQALAAAGgGIAAAAIADgGIAAAAQANgIAFgQIAAAAQACgEAAgNIAAAAIgBgKIAAAAIAfgpQgGgggFgDIAAAAQgFgBgIgOIAAAAIgBgBIAAAAIABABIAAAAQAIAOAFABIAAAAQAFADAGAgIAAAAIgfApIABAKIAAAAQAAANgCAEIAAAAQgFAQgNAIIAAAAIgDAGIAAAAQgGAGgLAAIAAAAQgFAIgDACIAAAAIgOAOIgQAVIAAAAQgtBCg2A8IAAAAQgpAtgVAaIAAAAIAAAAgAA6FcQAGgDAGAAIAAAAQgGAAgGADgABHFZIgBAAIAAAAIABAAgAiwFPIAAAAIAAAAIAAAAgAivFPQAGAAAFgDIAAAAQgFADgGAAgAikFMQgIgEgGgGIAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIAAAAIgQgFQgLgEgQgMIAAAAIgXgVIAAAAIgagQQgHgEgMgNIAAAAQgegUgKgUIAAAAIgMgWIgJgSIAAAAQgGgKgDgTIAAAAQgDgdAAgSIAAAAIAAgNIAAAAQACgQAIgGIAAAAQAHgEAJAAIAAAAIARAAIAAAAIAcgDIAAAAIAYAEIAAAAQAXAIAEAJIAAAAQADAGAAAGIAAAAIgBAFIAAAAIAGAjIAIAOIABABIAHAHIAAAAIASAVIAOAUQARAaAXAQIAAAAIAiAUIAAAAIASAIIAAAAIgOgPIAAAAQgQgRgJgNIAAAAQgFgMgIgJIAAAAIgLgLQgfgYgKgXIAAAAIgIgZQgCgEAAgDIAAAAIAAgDIAAAAQgEgIgBgMIAAAAQAAgNADgGIAAAAQAHgVAbgHIAAAAQgbAHgHAVIAAAAQgDAGAAANIAAAAQABAMAEAIIAAAAIAAADIAAAAQAAADACAEIAAAAIAIAZQAKAXAfAYIAAAAIALALQAIAJAFAMIAAAAQAJANAQARIAAAAIAOAPIAAAAIgSgIIAAAAIgigUIAAAAQgXgQgRgaIAAAAIgOgUIgSgVIgHgHIAAAAIgBgBIgIgOIgGgjIABgFIAAAAQAAgGgDgGIAAAAQgEgJgXgIIAAAAIgYgEIAAAAIgcADIAAAAIgRAAIAAAAQgJAAgHAEIAAAAQgIAGgCAQIAAAAIAAANIAAAAQAAASADAdIAAAAQADATAGAKIAAAAIAJASIAAAAIAMAWQAKAUAeAUIAAAAQAMANAHAEIAAAAIAaAQIAXAVIAAAAQAQAMALAEIAAAAIAQAFQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAAQAGAGAIAEIAAAAIAAAAgAjBFLIgDgBIAAAAIADABgAgJFJIAJgPIAAAAIAehSIAJgOQACgHADgSIAAAAQAAgSADgIIAAAAQAFgMAOgNIAAAAIACAAIABgDIAAAAQALgOABgDIAAAAQAHgKAFgTIAAAAIAZhQQAMggARgNIAAAAQAGgEAPgGIAAAAQAegOAQAAIAAAAIAPABIAAAAQAIAAAFgCIAAAAIANgHIACgBIAAAAIgBgBIAAAAIgGgCIgIgCIAAAAIgCgBIAAAAIgBAAQgDACgJABIAAAAIgaAEIAAAAIgBAAIAAAAIgRADQgHACgNAHIAAAAQgYAOgKAIIAAAAQgkAcgMAuIAAAAQgDANgHACIAAAAQgDABgJAAIAAAAIgMACIAAAAIgCAAIAAAAIACAAIAAAAIAMgCIAAAAQAJAAADgBIAAAAQAHgCADgNIAAAAQAMguAkgcIAAAAQAKgIAYgOIAAAAQANgHAHgCIAAAAIARgDIABAAIAAAAIAagEIAAAAQAJgBADgCIAAAAIABAAIACABIAAAAIAIACIAAAAIAGACIABABIAAAAIgCABIAAAAIgNAHQgFACgIAAIAAAAIgPgBIAAAAQgQAAgeAOIAAAAQgPAGgGAEIAAAAQgRANgMAgIAAAAIgZBQQgFATgHAKIAAAAQgBADgLAOIAAAAIgBADIAAAAIgCAAQgOANgFAMIAAAAQgDAIAAASIAAAAQgDASgCAHIAAAAIgJAOIgeBSIgJAPIAAAAQAJghAIgzIAAAAIANhDQADgNAAgKIAAAAIAAgBIAEgLIADgHIAAAAIAHgPIACgHIAAAAIgBgDIAAAAQAHgIAEgHIAAAAIABgDIAAAAIACgDIgCAAIAAABIAAgBIAAAAQAAgMgKgFIAAAAIAAgBIAAAAIAAABIAAAAQAKAFAAAMIAAAAIAAABIAAAAIAAgBIACAAIgCADIgBADIAAAAQgEAHgHAIIAAAAIABADIAAAAIgCAHIAAAAIgHAPIgDAHIAAAAIgEALIAAABQAAAKgDANIAAAAIgNBDQgIAzgJAhIAAAAIAAAAgAmNDtIAAAAIAAAAIAAAAgAmNDtQAJAAAFgJIAAAAQgFAJgJAAgAl/DjIAAAAIAAAAIADgTIAAAAQABgFAEgJIAAAAIAFgOIAAAAQAEgKACgOIAAAAIAAgLQAAgGgDgJIAAAAIgGgLIAAAAIgFgFIAAAAIgIgPIAAAAIgCgBIAAAAIACABIAAAAIAIAPIAAAAIAFAFIAAAAIAGALIAAAAQADAJAAAGIAAAAIAAALQgCAOgEAKIAAAAIgFAOIAAAAQgEAJgBAFIAAAAIgDATIAAAAIAAAAgACtDIQANgJAUgMIAAAAQAmgWARgUIAAAAIAQgZQAagyABg6IAAAAIAAgEIAAAAQAAgNADgGIAAAAIgBgJIAAAAQABgGACgEIAAAAIACgBIAAAAQACgGAIgEIAAAAQgIAEgCAGIAAAAIgCABIAAAAQgCAEgBAGIAAAAIABAJIAAAAQgDAGAAANIAAAAIAAAEIAAAAQgBA6gaAyIAAAAIgQAZQgRAUgmAWIAAAAQgUAMgNAJIAAAAIAAgDIAAAAQAEgJAIgGIAAAAIAMgJQAZgTATgZIAAAAIAIgNIAAAAQAPgTAHgbIAAAAQAIgaAAgsIAAAAIAAgDIAAAAIADgaIACgRIAAAAIgBgDIAAAAQAAgEgDgDIAAAAIgDgDIAAAAIgFgDIAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIAAAAIAFgEIAAAAQADgDAAgEIAAAAIAAgBIAAAAQgBgEgDgDIAAAAIgHgDQgHgDgGAAIAAAAQgHgBgDABIAAAAIgCABIAAAAIgIgCIAAAAQgFgBgOAEIAAAAIgBgFIAAAAIABgMIAAAAIACgKIAAAAIAAgCIAAAAQgBgNgSgHIAAAAQgHgDgYgDIAAAAQgPgCgHABIAAAAQgGACgHAGIAAAAQgFADgFAGIAAAAQgNALgPAIIAAAAIABgGIAAAAIgBgDIAAAAQAHgHABgEIAAAAIAGgLIAAAAIAFgOQAEgJAAgFIAAAAIACgIIAAAAIgBgDIAAAAQAAgOgHgFIAAAAQgGgEgOAAIAAAAQgVABgWAIIAAAAQgGABgDAEIAAAAIgGADIAAAAIgBABIAAAAQgOALgKAbIAAAAQgFAPAAAIIAAAAIAAAHIAAAAIAAAOIAAAAIAAAAIAAAAIgEgDIAAAAIABgGIAAAAIAAgDIAAAAQgDgRAAgKIAAAAIAAgCIAAAAQACgJAEgLIAAAAIACgMQAJgQABgGIAAAAIgBgFIAAAAIACgIIAAAAQAAgIgGgJIAAAAQgHgMgRgEIAAAAIgFgBIAAAAIAFABIAAAAQARAEAHAMIAAAAQAGAJAAAIIAAAAIgCAIIAAAAIABAFIAAAAQgBAGgJAQIAAAAIgCAMQgEALgCAJIAAAAIAAACIAAAAQAAAKADARIAAAAIAAADIAAAAIgBAGIAAAAIAEADIAAAAIAAAAIAAAAIAAgOIAAAAIAAgHIAAAAQAAgIAFgPIAAAAQAKgbAOgLIAAAAIABgBIAAAAIAGgDIAAAAQADgEAGgBIAAAAQAWgIAVgBIAAAAQAOAAAGAEIAAAAQAHAFAAAOIAAAAIABADIAAAAIgCAIIAAAAQAAAFgEAJIAAAAIgFAOIgGALIAAAAQgBAEgHAHIAAAAIABADIAAAAIgBAGIAAAAQAPgIANgLIAAAAQAFgGAFgDIAAAAQAHgGAGgCIAAAAQAHgBAPACIAAAAQAYADAHADIAAAAQASAHABANIAAAAIAAACIAAAAIgCAKIAAAAIgBAMIAAAAIABAFIAAAAQAOgEAFABIAAAAIAIACIAAAAIACgBIAAAAQADgBAHABIAAAAQAGAAAHADIAAAAIAHADQADADABAEIAAAAIAAABIAAAAQAAAEgDADIAAAAIgFAEIAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABIAAAAIAFADIAAAAIADADIAAAAQADADAAAEIAAAAIABADIAAAAIgCARIAAAAIgDAaIAAADIAAAAQAAAsgIAaIAAAAQgHAbgPATIAAAAIgIANIAAAAQgTAZgZATIAAAAIgMAJQgIAGgEAJIAAAAIAAADIAAAAIAAAAgAnWBrIABAFIAHAJIAHAUIAFALIAAAAIAIAHIAAAAIAFAFIADABIAAAAQAEACACADIAAAAQADACAAADIAAAAQAEACAEAAIAAAAIACgGIgDgGIAAAAQgGgIgDgJIAAAAIgCgHIAAAAIgBgBIAAAAIgBgFIAAAAIAAgFIAAAAIABgFIAAAAQAEgHAKAAIAAAAQgKAAgEAHIAAAAIgBAFIAAAAIAAAFIAAAAIABAFIAAAAIABABIAAAAIACAHIAAAAQADAJAGAIIAAAAIADAGIAAAAIgCAGQgEAAgEgCIAAAAQAAgDgDgCIAAAAQgCgDgEgCIAAAAIgDgBIAAAAIgFgFIgIgHIAAAAIgFgLIAAAAIgHgUIgHgJIgBgFQACgDAAgEIAAAAIAAgDIAAAAQgBgEgDgCIAAAAIAGgGIAAAAIgBgDIAAAAIgEgDIAAAAIgFgDIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAFADIAAAAIAEADIAAAAIABADIAAAAIgGAGIAAAAQADACABAEIAAAAIAAADIAAAAQAAAEgCADIAAAAIAAAAgAHCCOIAAAAIAAAAIAAAAgAHCCOIAHAAIAAAAIgHAAgAGTCJIAAAAIAAAAIAAAAgAmeB2QAHACAGAEIAAAAQADgCAAgEIAAAAIgBgCIAAAAIgBgJIAAAAQAAgGAHgCIAAAAIABAAIAAAAIgBAAIAAAAQgHACAAAGIAAAAIABAJIAAAAIABACIAAAAQAAAEgDACIAAAAQgGgEgHgCIAAAAIgBAAIAAAAIABAAgAGrB4IgCgNIAAAAIgDABIAAAAIAAABIAAAAIAAgBIAAAAIADgBIAAAAIACANgAGWB2IAAABIAAAAIAAgBIAAAAIAAgBIAAAAIAAABgAmfB2IAAAAIAAAAIAAAAgAGWB1QACgFADAAIAAAAQgDAAgCAFgAGjB0IgBAAIAAAAIABAAgAGjB0QACAAABgGIAAAAQgBAGgCAAgAGhB0IAAAAIAAAAIAAAAgAGgBzIAAAAIAAAAIAAAAgAGfBzIAAgBIAAAAIAAABgAGcBwIgBAAIAAAAIABAAgAmIBjIABgBIAAAAIgBABgAmFBiIAAAAIAAAAIAAAAgAmiBgIgBAAIAAAAIABAAgAmiBgQAIAAAJgEIAAAAQgJAEgIAAgAniBOIgBAAIAAAAIABAAgAniBOIAEgCIAAAAIgEACgAnjBOIgBAAIAAAAIABAAgAgSBHIgBAAIAAAAIABAAgAgSBHQASAAANgCIAAAAQgNACgSAAgAiWAaQANAEAWARIAAAAIAgAKIAAAAIAMAJIARAEIAAAAIAFAAIAAAAIgFAAIAAAAIgRgEIAAAAIgMgJIgggKIAAAAQgWgRgNgEIAAAAIAAAAgAAPBFIAAAAgAAQBFIAIAAIAAAAIgIAAgAAZBFIgBAAIAAAAIABAAgAl4A6IAAAFIAAAAIAAgFIAAAAQAJgEAFgHIAAAAQAGgDAJgIIAAAAQAIgIABgDIAAAAIABgCIAAAAIABABIAAAAIAHAFIAAAAIgBACIAAAAIAAACIAAAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAAAAQADADAGAAIAAAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAQgGAAgDgDIAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAAAIAAgCIAAAAIABgCIAAAAIgHgFIAAAAIgBgBIAAAAIgBACIAAAAQgBADgIAIIAAAAQgJAIgGADIAAAAQgFAHgJAEIAAAAIAAAAgAASA+IgGgBIAAAAIAGABgAASA+IABAAIAAAAIgBAAgAAsA+IAAAAIAAAAIAAAAgAAMA9IgGgBIAAAAIAGABgAAlA8IgBAAIAAAAIABAAgAAEA8IgEgBIAAAAQgGgCglgDIAAAAQgQgBgUgFIAAAAQgIgCgDgEIAAAAQgGAAgDgEIAAAAIgIgKIAAAAQgNgQgdgFIAAAAIgDgBIAAAAIADABIAAAAQAdAFANAQIAAAAIAIAKIAAAAQADAEAGAAIAAAAQADAEAIACIAAAAQAUAFAQABIAAAAQAlADAGACIAAAAIAEABgAgIAHIAAAFQABAAAAABQAAAAABABQAAAAABAAQAAAAAAABIAAAAIABAAQABAFACAEIAAAAIAFAIIAAAAIADADIAAAAIAQAGIAAAAQAHADACADIAAAAQAGgGAAgEIAAAAIAAgBIAAAAQAAgEgMgFIAAAAQgPgJgFgRIAAAAQgCgGAAgNIAAAAIAAgLIAAAAIABgTIACgQIAAAAIgBgBIAAAAIgCgEIAAAAIAAgBIAAAAIgBgBIAAAAQgNgGgLgIIAAAAIgIgBIAAAAIgGgCIAAAAIABAFIAAAAQAAAEgCAEIAAAAIAAACIAAAAQANAFAFAGIAAAAIADADIAAAAIAHADIAAAAQAIAFAAAKIAAAAQAAAHgFALIAAAAIgBAAIAAAAQgCABAAAEIAAAAIgBACIgBACIABAFIAAAAIABAJIAAAAIAAAHgAk9ApIgBAAIAAAAIABAAgAmugoIgGAQIAAAAQgJAbAAAdIAAAAQAAgdAJgbIAAAAIAGgQIAAAAQADgKAAgHIAAAAQAAgEgGgcIAAAAIgBgMIAAAAQAAgLAEgHIAAAAQAIgNAegJIAAAAIAzgRIgzARQgeAJgIANIAAAAQgEAHAAALIAAAAIABAMIAAAAQAGAcAAAEIAAAAQAAAHgDAKgAkhAfIAAAAIAAAAIAAAAgAkgAfIADgBIAAAAIgDABgAkiAfIgBAAIAAAAIABAAgAk4AXQABADACACIAAAAIAKABIAAAAIAHACIABAAIAAAAIgBAAIAAAAIgHgCIgKgBIAAAAQgCgCgBgDIAAAAQgBgEAAgGIAAAAIAAgLIAAAAIABgDIgBAAIAAAAIAAgDQACgDAAgEIAAAAIgBgGIAAAAQAAgHgDgDIAAAAIgBgCIAAAAIgCgBIAAAAIgCgBIAAAAIACABIAAAAIACABIAAAAIABACIAAAAQADADAAAHIAAAAIABAGIAAAAQAAAEgCADIAAAAIgBACIAAAAIABABIAAAAIABAAIAAAAIgBADIAAALIAAAAQAAAGABAEgAkdAeQADgCAAgEIAAAAIABAAIAAAAIgBgCIAAAAQgBgEAAgDIAAAAIAAgDIAAAAIgEgDIAAAAQgHgGAAgFIAAAAIgDgOIAAAAIgHgbIAAAAIAAgLIAAAAIAAgNIAAAAIACgIIAAAAIgBAAQgIASgJAMIAAAAIgJAPIAAAAIABgBIAAAAIADAAIAAAAIgDAAIAAAAIgBABIAAAAIAJgPIAAAAQAJgMAIgSIAAAAIABAAIgCAIIAAAAIAAANIAAAAIAAALIAAAAIAHAbIAAAAIADAOIAAAAQAAAFAHAGIAAAAIAEADIAAAAIAAADIAAAAQAAADABAEIAAAAIABACIAAAAIgBAAIAAAAQAAAEgDACgAhKAcIAAgCIAAAAQAAgFADgHIAAAAQgDAHAAAFIAAAAIAAACIAAAAIgCAAIgCAAIAAAAQgBgFgFgGIAAAAQgMgOghgSIAAAAQgNgIgCgEIAAAAIAAgDIAAAAIAAgBIAAAAIAAgBIAAAAQAAgEgEgCIAAAAIgCgBIAAAAIgGgCIAAAAIgDADIgFABIgKAAIAAAAIgEgBIAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAAAIABgDIAAAAIABAAIgEgBIAAAAIgCgBIAAAAIgIgIIAAAAIAIAIIAAAAIACABIAAAAIADABIAAAAIgBADIAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAAAAIAEABIAAAAIAKAAIAAAAIAFgBIADgDIAGACIAAAAIACABIAAAAQAEACAAAEIAAAAIAAABIAAAAIAAABIAAAAIAAADIAAAAQACAEANAIIAAAAQAhASAMAOIAAAAQAFAGABAFIAAAAIACAAIAAAAIACAAIAAAAgAiuAaIAPgBIAAAAIgPABgAieAZIgBAAIAAAAIABAAgAjHAKIACAAIAAAAIgCAAgAjEAJQASgDAPAAIAAAAQgPAAgSADgAiiAGIAAAAIAAAAIAAAAgAG/ACIAAAAIAAAAIAAAAgAG/ACIAIgBIAAAAIgIABgAG1AAIgBAAIAAAAIABAAgAHLgpQABAIACAGIAAAAIAFAMIAAAAIAAACIAAAAIAAgCIAAAAIgFgMIAAAAQgCgGgBgIIAAAAIgBgOIAAAAIABgJIAAAAIACgNIAAAAIABgMIAAAAIAAgCIAAAAQAAgagXgRIAAAAQAXARAAAaIAAAAIAAACIAAAAIgBAMIAAAAIgCANIAAAAIgBAJIAAAAIABAOgAGLgRIAAAAIAAAAIAAAAgAF2gRIgBAAIAAAAIABAAgAF2gSQAEAAADgDIAAAAQgDADgEAAgAF1gSIgBAAIAAAAIABAAgAFQgyIANAIIANAKIAIAOIgIgOIgNgKIgNgIIgBgBIAAAAIABABgAF+gWIAAAAIAAAAIAAAAIAAAAIABgBIAAAAIgBABgAF/gXQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAgAGDgZIgBAAIAAAAIABAAgAlEggIABAAIAAAAIgBAAgAlDggIAAAAIAAAAIAAAAgAFCgyIAIgBIAAAAIgIABgAFOgzIgCAAIAAAAIACAAgAFLgzIgBAAIAAAAIABAAgAjCg3IAAAAIAAAAIAAAAgAjnhmQAPAFAFAHIAAAAQADAEABAHIAAAAQADAJAAANIAAAAIAAABIAAAAIABAAIAAAAIgBgBIAAAAQAAgNgDgJIAAAAQgBgHgDgEIAAAAQgFgHgPgFIAAAAIAAAAgAjKg4IACAAIAAAAIgCAAgAjHg4IgBAAIAAAAIABAAgAisg5IgBAAIAAAAIABAAgAisg5IABAAIAAAAIgBAAgAi5g/IAAAAIAAAAIAAAAgAigilQgFADgEAIIAAAAIgRAtIgDANIAAAAQgEADgBAFIAAAAIgBAHIAAAAIABgHIAAAAQABgFAEgDIAAAAIADgNIAAAAIARgtQAEgIAFgDIAAAAIAAAAgAkqhVIABgCIAAAAIAGgFIAAAAIAEABIAAAAIgEgBIAAAAIgGAFIAAAAIgBACIAAAAIABgKIAAAAQAAgFgBgDIAAAAQgCgFgCgDIAAAAQACADACAFIAAAAQABADAAAFIAAAAIgBAKIAAAAIAAAAgAGQiQIgSAHIAAAAQgeAOgiAKIAAAAQgRAEgHAFIAAAAQgFAEgDAFIAAAAIgBAGIAAAAIABgGIAAAAQADgFAFgEIAAAAQAHgFARgEIAAAAQAigKAegOIAAAAIASgHIAAAAIAJgBIAAAAIgJABgADuhaIAAAAIAAAAIAAAAgADuhaQAFAAAGgCIAAAAQgGACgFAAgAkdhbIAAAAIAAAAIAAAAgAkBhpQgIABgLAGIAAAAIgBACIAAAAQgBAFgGAAIAAAAQAGAAABgFIAAAAIABgCIAAAAQALgGAIgBIAAAAIAAAAgAkehbIAAAAIAAAAIAAAAgADjhdIAAAAIAAAAQgJgFgBgOIAAAAIABgKIAAgFIAAAAIgBgGIAAAAQgQgJgHgBIAAAAIgVgCIAAAAIgQgFIAAAAIgQgBIAAAAQgIgCgFgIIAAAAQgDgEAAgFIAAAAIABgFIAAAAIAFgJIAAAAIABgBIAAAAIgPgLIAAAAQgKgHgJgBIAAAAIgBAAIAAAAIgFgBIAAAAIAFABIAAAAIABAAIAAAAQAJABAKAHIAAAAIAPALIAAAAIgBABIAAAAIgFAJIAAAAIgBAFIAAAAQAAAFADAEIAAAAQAFAIAIACIAAAAIAQABIAAAAIAQAFIAAAAIAVACIAAAAQAHABAQAJIAAAAIABAGIAAAAIAAAFIAAAAIgBAKQABAOAJAFIAAAAIAAAAgAjShpIAAgBQAJAAAFgFIAAAAQAGgGAAgIIAAAAIAAgBIAAAAQgBgIgGgHIAAAAQgEgFgJgGIAAAAIgNgLIAAAAIgTgSIAAAAQgLgKgLgBIAAAAIABgwIAAAAIgBgQIAAAAQgBgmgMgZIAAAAQgGgLgHgFIAAAAQAHAFAGALIAAAAQAMAZABAmIAAAAIABAQIAAAAIgBAwIAAAAQALABALAKIAAAAIATASIAAAAIANALIAAAAQAJAGAEAFIAAAAQAGAHABAIIAAAAIAAABIAAAAQAAAIgGAGIAAAAQgFAFgJAAIAAAAIgBAAIAAAAIABABgAj/hqIADAAIAAAAIgDAAgAj8hqIAAAAIAAAAIAAAAgAjVhqIgBAAIAAAAIABAAgAjVhqIABAAIAAAAIgBAAgAhyibQARAFANAQIAAAAIAJAOIAAAAIAAABIAAAAQARAFAHAEIAAAAIAEADIAAAAIAAgCIAAAAIgCgDIAAAAIgGgLIAAAAIgFgMIgKgNIAAAAQgJgDgFgDIAAAAQgIgIAAgKIAAAAIAAgCIAAAAIgCgDIAAAAQgBgFAAgFIAAAAIABgJIAAAAIADgFIAAAAIAFgEIAAAAQAFgFABgFIAAAAQABgCAHgBIAAAAQAHgBAAgEIAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAAAIABgBIAAAAIABgBIAAAAIABABIAAAAIgBgBIAAAAIgBABIAAAAIgBAAIAAAAIgBABIABAAIAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAAAQAAAEgHABIAAAAQgHABgBACIAAAAQgBAFgFAFIAAAAIgFAEIAAAAIgDAFIAAAAIgBAJIAAAAQAAAFABAFIAAAAIACADIAAAAIAAACIAAAAQAAAKAIAIIAAAAQAFADAJADIAAAAIAKANIAAAAIAFAMIAGALIAAAAIACADIAAAAIAAACIAAAAIgEgDIAAAAQgHgEgRgFIAAAAIAAgBIgJgOIAAAAQgNgQgRgFIAAAAQgIgDgIABIAAAAIgBAAIgSgIIgDgBIAAAAIADABIAAAAIASAIIABAAIAEAAIAAAAQAGAAAGACgAjhhrIgBgBIAAAAIABABgAjjhsIgBAAIAAAAIgBAAIAAAAIgRgFIAAAAIgBgBIAAAAIABABIAAAAIARAFIAAAAIABAAIAAAAIABAAgAkGh0IABAAIAAAAIgBAAgAkEh0IAAAAIAAAAIAAAAgAEfiDQADAEAAAEIAAAAQAAgEgDgEIAAAAIAjgFIAAAAQAngHAPgBIAAAAIANgBIAAAAQAHgDAEgGIAAAAQADgEAAgEIAAAAIgBgEIAAAAQgCgGgGgEIAAAAIgCgBIAAAAIACABIAAAAQAGAEACAGIAAAAIABAEIAAAAQAAAEgDAEIAAAAQgEAGgHADIAAAAIgNABIAAAAQgPABgnAHIAAAAIgjAFIAAAAIAAAAgAG2iHIgBgBIAAAAIABABgAG0iIIAAAAIAAAAIAAAAgAGaiRIgBAAIAAAAIABAAgAk4ijIACAAIAAAAIAJAIIAAAAIAIADIAAAAIABAFIAAAAIAHgDIAAAAIABAAIAAAAIABAAIAAAAIgBAAIAAAAIgBAAIAAAAIgHADIAAAAIgBgFIAAAAIgIgDIAAAAIgJgIIAAAAIgCAAIAAAAIAAgBIAAAAIAAABgAkZiWIgCAAIAAAAIACAAgAkUiYIgBABIAAAAIgEABIAAAAIAEgBIAAAAIABgBIAAAAIAKgCIAAAAQgEgDgHgBIAAAAIgDgBIAAAAIgKgDIAAAAQgCAAgHgGIAAAAQgGgIAAgMIAAAAIABgsIAAAAIAAgBIAAAAQAGgNgBgMIAAAAIAAgCIAAAAIgEgRIAAAAIgFgRIgBgBIAAAAIABABIAAAAIAFARIAEARIAAAAIAAACIAAAAQABAMgGANIAAAAIAAABIAAAAIgBAsIAAAAQAAAMAGAIIAAAAQAHAGACAAIAAAAIAKADIAAAAIADABIAAAAQAHABAEADIAAAAIgKACgAi6ifIADABIAAAAIABAAIAAAAIAEgGIAAAAQACgDAEgCIAAAAIACAAIAAAAQAHABAFgEIAAAAIABAAIADABIAAAAIATAHIAAAAIABAAIAAAAIgBAAIAAAAIgTgHIAAAAIgDgBIAAAAIgBAAQgFAEgHgBIAAAAIgCAAIAAAAQgEACgCADIAAAAIgEAGIAAAAIgBAAIAAAAIgDgBIAAAAIACgCIAAAAQACgDAAgDIAAAAIAAgBIAAAAQgCgDgEgDIAAAAIgJgDIAAAAQgVgIgGgaIAAAAQgBgIgBgOIAAAAIgBgWIAAAAIgCgMIAAAAIgBgbIgCgGIAAgBIAAAAIAAABIAAAAIACAGIABAbIACAMIAAAAIABAWIAAAAQABAOABAIIAAAAQAGAaAVAIIAAAAIAJADIAAAAQAEADACADIAAAAIAAABIAAAAQAAADgCADIAAAAIgCACIAAAAIAAAAgAlTieQANgFAKgBIAAAAQgKABgNAFgAh+ijIAAAAIAAAAIAAAAgAh+ijQAGAAAEgDIAAAAIAAAAIAAAAQAJgEACgKIAAAAIABgHIAAAAIAAgEIAAAAQAEgKABgJIAAAAIAAgCIAAAAIgGABIgFgBIAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAAAAIAIgEIAAAAIARgIIAAAAIAGgEIAAAAQAGgFABgHIAAAAIgBgFIAAAAQADADAEABIAAAAQAFACAHAAIAAAAIAMABIAAAAQASABAEgBIAAAAQAHgDAEgHIAAAAQAHAEAMACIAAAAIABgCIAAAAIACAAIAAAAIgCAAIAAAAIgBACIAAAAQgMgCgHgEIAAAAQgEAHgHADIAAAAQgEABgSgBIAAAAIgMgBIAAAAQgHAAgFgCIAAAAQgEgBgDgDIAAAAIABAFIAAAAQgBAHgGAFIAAAAIgGAEIAAAAIgRAIIAAAAIgIAEIAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAAAAIAFABIAAAAIAGgBIAAACIAAAAQgBAJgEAKIAAAAIAAAEIAAAAIgBAHIAAAAQgCAKgJAEIAAAAIAAAAIAAAAQgEADgGAAgAk7ikIAAAAIAAAAIAAAAgAifilIAFgBIAAAAIgFABgAiZimIgBAAIAAAAIABAAgAFcjNQAMAFAIAFIAAAAQAKAHACAJIAAAAQgCgJgKgHIAAAAQgIgFgMgFIAAAAQAEgEACgFIAAAAIAAgEIAAAAQAAgEgCgEIAAAAQgCgEgHgDIAAAAIAAgBIAAAAIAAABIAAAAQAHADACAEIAAAAQACAEAAAEIAAAAIAAAEIAAAAQgCAFgEAEIAAAAIAAAAgAF9i0IAAAAIAAAAIAAAAgAF+i0IAAAAIAAAAIAAAAgAAxjEIgEAAIAAAAIgDAAIAAAAQgKgCgEgGIAAAAIgBgBIAAAAIgBgJIAAAAIABAJIAAAAIABABIAAAAQAEAGAKACIAAAAIADAAIAAAAIAEAAgAEJjNQAFAAAEAEIAAAAIAGgFIAAAAIAFgKIAAAAIAGgKIADgNIAAAAQADgHAEgEIAAAAQAGgFAHAAIAAAAQgHAAgGAFIAAAAQgEAEgDAHIAAAAIgDANIAAAAIgGAKIgFAKIAAAAIgGAFIAAAAQgEgEgFAAIAAAAIABgCIAAAAQAOgLAEgJIAAAAQADgHAAgHIAAAAQAAgGgCgGIAAAAQgFgNgNgIIAAAAQANAIAFANIAAAAQACAGAAAGIAAAAQAAAHgDAHIAAAAQgEAJgOALIAAAAIgBACIAAAAIAAAAgAj2jRIgDgHIAAAAIgKgaIAAAAIgCgJIAAAAQABgMADgDIAAAAQACgEAKgIIAAAAIAFgEIAAAAIAAgNIAAgDIAAAAIAAADIAAAAIAAANIgFAEIAAAAQgKAIgCAEIAAAAQgDADgBAMIAAAAIACAJIAAAAIAKAaIAAAAIADAHIAAAAIgHgIIAAAAQgJgMgBgHIAAAAIABgNIAAAAIABgCIAAAAIgBgLIAAAAIAAgHIAAAAIAEgPIAAAAIAAgCIAAAAIgCgOIAAAAIgGgFIAAAAQgFgHgEgMIAAAAIgDgJIgGgHQgJgLAAgMIAAAAIAAgDIAAAAIACgMIAAgMIAAAAQABgDAEgFIAAAAIAHgIIAAAAIAGgQIAAAAQAEgKAGgEIAAAAQAFgDAGAAIAAAAQAHAAAFADIAAAAIAHAIIAAAAIAHAIIAAAAIALAHIAAAAQAHAHAAASIAAAAIAAAEQAFACADAFIAAAAIAEAMIAAAAQACAJADADIAAAAQAGAHATAGIAAAAQASAHASANIAAAAIATARIAAAAQgLgMgWgSIAAAAIgGgGIAAAAIgDAAIAAAAIgCAAIAAAAIACAAIAAAAIADAAIAAAAIAGAGIAAAAQAWASALAMIAAAAIgTgRIAAAAQgSgNgSgHIAAAAQgTgGgGgHIAAAAQgDgDgCgJIAAAAIgEgMIAAAAQgDgFgFgCIAAAAIAAgEQAAgSgHgHIAAAAIgLgHIAAAAIgHgIIAAAAIgHgIIAAAAQgFgDgHAAIAAAAQgGAAgFADIAAAAQgGAEgEAKIAAAAIgGAQIAAAAIgHAIIAAAAQgEAFgBADIAAAAIAAAMIAAAAIgCAMIAAADIAAAAQAAAMAJALIAAAAIAGAHIADAJQAEAMAFAHIAAAAIAGAFIAAAAIACAOIAAAAIAAACIAAAAIgEAPIAAAAIAAAHIAAAAIABALIAAAAIgBACIAAAAIgBANIAAAAQABAHAJAMIAAAAIAHAIIAAAAIAAAAgAAcjVIAAAAIAAAAIAAAAgAAcjVQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBIAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAAgjZIAAABIAAAAIAAgBIAAAAIABgDIAAAAIgBADgAg6jiIgCgBIAAAAIACABgAg6jiIABAAIAAAAIgBAAgAgqjwIgIACIAAAAIAAAFIAAAAQgBAGgGABIAAAAQAGgBABgGIAAAAIAAgFIAAAAIAIgCIAAAAIAAAAgAFSjrIAAAAIAAAAIAAAAgAE9j/QAJABAFAIIAAAAQADAEAAAHIAAAAQAAgHgDgEIAAAAQgFgIgJgBIAAAAIgBAAIAAAAIABAAgAFRjrIgBgBIAAAAIABABgAFPjsIABAAIAAAAIgBAAgAgojxIAMgBIAAAAIgMABgAgbjyIgBAAIAAAAIABAAgAAPj6IAAAAIAAAAIAAAAgAAMj7IAAAAIAAAAIAAAAgAE7j/IgBAAIAAAAIABAAgACXkdQAHACAEAIIAAAAIACAFIAAAAIAAAAIAQgEIAAAAIAegIIAAAAQALgDAKAAIAAAAQgKAAgLADIAAAAIgeAIIAAAAIgQAEIAAAAIAAAAIgCgFIAAAAQgEgIgHgCIAAAAQADgEAAgFIAAAAIgBgFIAAAAIgCgFIAAAAIACAFIAAAAIABAFIAAAAQAAAFgDAEIAAAAIAAAAgAEKkTIgCgBIAAAAIACABgAgQkVQACgEAEgDIAAAAIAGgFIAAAAIAAgBIAAAAIgBgFIAAAAQgCgGAAgNIAAAAQABgVAJgUIAAAAQAKgUATgOIAAAAIALgIIAAAAIABgIIAAAAQADgMANgBIAAAAIAFAAIAAAAIAIgMIAAAAQALgOAOgEIAAAAQgOAEgLAOIAAAAIgIAMIAAAAIgFAAIAAAAQgNABgDAMIAAAAIgBAIIAAAAIgLAIIAAAAQgTAOgKAUIAAAAQgJAUgBAVIAAAAQAAANACAGIAAAAIABAFIAAAAIAAABIAAAAIgGAFIAAAAQgEADgCAEIAAAAIAAgDIAAAAIAAgEIAAAAIACgPIAAAAIAAgBIAAAAQgEgJAAgEIAAAAIAAgCIAAAAQAAgDACgEIAAAAIADgJIAAAAIAAgFIAAAAIABgNIAAAAIAFgNIAAAAIAAgNIAAAAIAAgFIAAAAIADgFIAAAAQAEgIAAgMIAAAAIgCgSIAAAAQgBgKgDgGIAAAAQgFgJgNgIIAAAAQgPgJgPgCIAAAAIgJAAIAAAAIgIgEIAAAAIAAAAIAAAAIAAAAIAAAAIAIAEIAAAAIAJAAIAAAAQAPACAPAJIAAAAQANAIAFAJIAAAAQADAGABAKIAAAAIACASIAAAAQAAAMgEAIIAAAAIgDAFIAAAAIAAAFIAAAAIAAANIAAAAIgFANIAAAAIgBANIAAAAIAAAFIAAAAIgDAJIAAAAQgCAEAAADIAAAAIAAACIAAAAQAAAEAEAJIAAAAIAAABIAAAAIgCAPIAAAAIAAAEIAAAAIAAADgADnkdIAAAAIAAAAIAAAAgAC6khIAAAAIAAAAIAAAAgAC7khQAKAAAIgGIAAAAIAAAAIAAAAIALgJIAAAAQADgCANgCIAAAAIAOgFIAAAAIAPgFIAAAAQANgFAKAAIAAAAQgKAAgNAFIAAAAIgPAFIAAAAIgOAFIAAAAQgNACgDACIAAAAIgLAJIAAAAIAAAAIAAAAQgIAGgKAAgAC0kiIAAAAIAAAAIAAAAgAk3koIAAAAIAAAAIAAAAgAjskwIAAAAIAAAAIAAAAgABPk0IgBAAIAAAAIABAAgABQk0IADAAIAAAAIgDAAgABOk0IAAAAgABlk7IgSAHIAAAAIASgHIAAAAIAAAAgABCk6QACAEAFACIAAAAIABAAIAAAAIgBAAIAAAAQgFgCgCgEIAAAAQAHgDAagCIAAAAQAVgBAIgKIAAAAQAHgGAAgKIAAAAIABgDIAAAAQgBgLgJgJIAAAAQgLgKgOgBIAAAAQAMgPAKgRIAAAAQAHgMAAgIIAAAAQAAgFgDgDIAAAAQgEgGgIgDIAAAAIgCAAIAAAAIACAAIAAAAQAIADAEAGIAAAAQADADAAAFIAAAAQAAAIgHAMIAAAAQgKARgMAPIAAAAQAOABALAKIAAAAQAJAJABALIAAAAIgBADIAAAAQAAAKgHAGIAAAAQgIAKgVABIAAAAQgaACgHADIAAAAIAAAAgABnk8QAKgDAIAAIAAAAQgIAAgKADgAE1k+IAAAAIAAAAIAAAAgAE2k+QAEAAAEgCIAAAAQgEACgEAAgACAk/IAAgDIAAAAQABgIAGgFIAAAAQAFgDAJgCIAAAAIABgCIAAAAQACgIAEgHIAAAAIgFgFIAAAAQgDgFAAgGIAAAAIAAgCIAAAAIgEgEIAAAAQgEgGAAgGIAAAAIABgGIAAAAQACgHAFgDIAAAAIAAgDIAAAAIAAgEIAAAAQAAgcgNgaIAAAAQgEgCgQgCIAAAAQgLgBgFgEIAAAAIAAgBIgCgEIgBgBIgBAAIAAAAQgCgDAAgEIAAAAIAAgBIAAAAQAAgIAGgFIAAAAQAHgGAHAAIAAAAQAFgFAHgBIAAAAIADAAIAAAAIgDAAIAAAAQgHABgFAFIAAAAQgHAAgHAGIAAAAQgGAFAAAIIAAAAIAAABIAAAAQAAAEACADIAAAAIABAAIAAAAIABABIACAEIAAABQAFAEALABIAAAAQAQACAEACIAAAAQANAaAAAcIAAAAIAAAEIAAAAIAAADIAAAAQgFADgCAHIAAAAIgBAGIAAAAQAAAGAEAGIAAAAIAEAEIAAAAIAAACIAAAAQAAAGADAFIAAAAIAFAFIAAAAQgEAHgCAIIAAAAIgBACIAAAAQgJACgFADIAAAAQgGAFgBAIIAAAAIAAADIAAAAIgBAAIAAAAIABAAgAB6k/IAAAAIAAAAIAAAAgAE+lAIABgBIAAAAIgBABgAEclDIAAAAIAAAAIAAAAgAk5lRQgHAEAAAKIAAAAQAAgKAHgEIAAAAIAAAAgAD3mEIAFAGQADABAHAAIAAAAQAMAAAEABIAAAAQAJACAEAFIAAAAIAHAJIAAAAQACACAGADIAAAAQAMAFAFAGIAAAAQAFAGAAAHIAAAAQAAgHgFgGIAAAAQgFgGgMgFIAAAAQgGgDgCgCIAAAAIgHgJIAAAAQgEgFgJgCIAAAAQgEgBgMAAIAAAAQgHAAgDgBIAAAAIgFgGIAAAAIAAAAIAAAAgAkjlQIAAAAIAAAAIAAAAgAkklRIAAAAIAAAAIAAAAgAk4lRIAAAAIAAAAIAAAAgAk3lSQAEgCAEAAIAAAAQgEAAgEACgAiblTIAAAAIAAAAIAAAAgAkulUIgBAAIAAAAIABAAgAiolZIAAgBIAAAAIAAABgADDlZIAIgJIAEgGIAAAAIABgHIAAAAQAAgFAFgGIAAAAIABgCIAAAAIABgBIAAAAQAHgHAIgCIAAAAIABgBIAAAAIgBABIAAAAQgIACgHAHIAAAAIgBABIAAAAIgCgBIAAAAIABADIAAAAQgFAGAAAFIAAAAIgBAHIAAAAIgEAGIAAAAIgIAJIABgEQAGgLABgGIAAAAQAAgGgHgLIAAAAQgIgMAAgGIAAAAIABgQIABgCIAAAAQAAgHgDgLIAAAAIgFgSQgEgRgFgKIAAAAQgIgOgPgFIAAAAIgCgBIAAAAIgCgBIAAAAIgCgEIAAAAIgBgCIAAAAIABACIAAAAIACAEIAAAAIAAABIAAAAIACAAIAAAAIACABIAAAAQAPAFAIAOIAAAAQAFAKAEARIAAAAIAFASQADALAAAHIAAAAIgBACIAAAAIgBAQQAAAGAIAMIAAAAQAHALAAAGIAAAAQgBAGgGALIAAAAIgBAEgAD2mEIAAgBIAAAAIAAABgADnmHIAFgBIAAAAIgFABgADtmIIgBAAIAAAAIABAAgAhlnPQgSAJgPAEIAAAAIgQAEIgRAFIAAAAIgTAAIAAAAQgTABgFAKIAAAAQgDAEAAAFIAAAAQAAgFADgEIAAAAQAFgKATgBIAAAAIATAAIAAAAIARgFIAAAAIAQgEQAPgEASgJIAAAAIAEgBIAAAAIgEABgABmnBIAFgBIAAAAIgFABgABsnCIAAAAIAAAAIAAAAgAhenSIANgEIAAAAIgNAEgAhQnXIAFAAIAAAAIgFAAgAhKnXIAAAAIAAAAIAAAAgACAoEIAAAAIAAAAIAAAAgAg4IRIAPAAIAAAAIACADIAAAAIADACIAAAAIgUgFgABYIQIAHgEIAAAAIAlgJIAAAAIgkAMIAAAAIgXAGIAAAAQAJgCAGgDgAAXApIgQgGIAAAAIgDgDIAAAAIgFgIIAAAAQgCgEgBgFIAAAAIgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIAAAAIAAgFIAAgHIgBgJIAAAAIAAgHIAAAAIABgCQAAgEACgBIAAAAIABAAIAAAAQAFgLAAgHIAAAAQAAgKgIgFIAAAAIgHgDIAAAAIgDgDIAAAAQgFgGgNgFIAAAAIAAgCIAAAAQACgEAAgEIAAAAIgBgFIAAAAIAGACIAAAAIAIABIAAAAQALAIANAGIAAAAIABACIAAAAIACAEIAAAAIABABIAAAAIgCAQIAAAAIgBATIAAALIAAAAQAAANACAGIAAAAQAFARAPAJIAAAAQAMAFAAAEIAAAAIAAABIAAAAQAAAEgGAGIAAAAQgCgDgHgDg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_6_graphics_16,x:397.8,y:-44.7}).wait(2).to({graphics:null,x:0,y:0}).wait(11));

	// Layer_19
	this.instance_6 = new lib.plate_t_09();
	this.instance_6.setTransform(-640,-130);
	this.instance_6._off = true;

	this.instance_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({_off:true},2).wait(11));

	// Layer_18 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_14 = new cjs.Graphics().p("AgIIJIgRgBIAAAAQgHgDgEgDIAAAAIgDgCIAAAAIgCgDIAAAAIgPAAIAAAAIgjgEIAAAAIgbgDQgqgHgNgHIAAAAQgdgNgOgcIAAAAIgGgMIAAAAIgLgUIAAAAQgNgOgigLIAAAAIgRgGIAAAAQgggOgbgPIAAAAQgtgbgJgeIAAAAQgIgVAKgdIAAAAIgIgMIAAAAQgHgMgWgRIAAAAQgXgSgHgLIAAAAQgGgIgEgJIAAAAQgQgngBgWIAAAAIAAgHIAAAAIACAEIAAAAQADAKAEAHIAAAAIAFAFIAAAAIABADIAAAAIADADIAJAZQADAHAGAFIAAAAIADAEIAAAAQAJAJAMAIIAAAAIALAIQAGAFALAUIAAAAQAGALAJABIAAAAIACAAIAAAAIgCAAIAAAAQgJgBgGgLIAAAAQgLgUgGgFIAAAAIgLgIQgMgIgJgJIAAAAIgDgEIAAAAQgGgFgDgHIAAAAIgJgZIgDgDIgBgDIAAAAIgFgFIAAAAQgEgHgDgKIAAAAIgCgEIAAAAIAAgFIAAAAIABgCIAAAAQABgDAEgDIAAAAIAIgHIAAAAIACABIAAAAIgCgBIAAAAIgIAHIAAAAQgEADgBADIAAAAQABgHADgFIAAAAIAGgHIAAAAQgFgSgCgSIAAAAQgDgUAGgLIAAAAQAEgHAHgFIAAAAQAIgGAJgBIAAAAQgphDANgyIAAAAQAGgSAJgJIAAAAQAOgMASACIAAAAIAMAEIAAAAIAMACIAAAAQAQABAMgQIAAAAIAKgNIAAAAQAGgHAFgFIAAAAQAIgFAJAAIAAAAQAKgBAGAFIAAAAQgCgLgKggIAAAAQgJgaABgRIAAAAQABgSAOgZIAAAAQARgbAHgOIAAAAQALgcAIgMIAAAAQAPgXAXgFIAAAAQAOgCAOAEIAAAAQAKAEAJAHIAAAAIACgDIAAAAQAWgRARAAIAAAAIANACIAAAAQAHABAFgBIAAAAQAFgBALgIIAAAAQAUgQAOgEIAAAAQATgGAfAEIAAAAQASAEAIAEIAAAAQALAHALARIAAAAIADAFIAAAAIAJgGIADgGIAAAAQAGgIAGgEIAAAAQAKgGAWAAIAAAAIALABIAAAAQAEgWAJgKIAAAAQAOgPAbgBIAAAAQAZAAATAMIAAAAQAgATAOAwIAAAAQAHAZADAHIAAAAQAIASAP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IAAgDIAAAAIADgZIACgQIAAAAIgBgEIAAAAQAAgDgDgDIAAAAIgDgDIAAAAIgFgDIAAAAIgFgCIAAAAIAFgEIAAAAQADgCAAgEIAAAAIAAgBIAAAAQgBgEgDgDIAAAAIgHgDQgHgCgGgBIAAAAQgHgBgDABIAAAAIgCABIAAAAIgIgCIAAAAQgFgBgOAEIAAAAIgBgFIAAAAIABgLIAAAAIACgKIAAAAIAAgCIAAAAQgBgMgSgHIAAAAQgHgCgYgEIAAAAIgGAAIAAAAIAGAAIAAAAQAYAEAHACIAAAAQASAHABAMIAAAAIAAACIAAAAIgCAKIAAAAIgBALIAAAAIABAFIAAAAQAOgEAFABIAAAAIAIACIAAAAIACgBIAAAAQADgBAHABIAAAAQAGABAHACIAAAAIAHADQADADABAEIAAAAIAAABIAAAAQAAAEgDACIAAAAIgFAEIAAAAIAFACIAAAAIAFADIAAAAIADADIAAAAQADADAAADIAAAAIABAEIAAAAIgCAQIAAAAIgDAZIAAADIAAAAQAAAqgIAaIAAAAQgHAagPASIAAAAIgIANIAAAAQgTAXgZATIAAAAIgMAIQgIAGgEAJIAAAAIAAADIAAAAIAAAAgAnWBnIABAFIAHAJIAHASIAFALIAAAAIAIAHIAAAAIAFAFIADABIAAAAIAGAEIAAAAQADADAAADIAAAAQAEACAEAAIAAAAIACgGIgDgGIAAAAQgGgIgDgIIAAAAIgCgHIAAAAIgBgBIAAAAIgBgFIAAAAIAAgEIAAAAIABgFIAAAAIAAAAIAAAAIAAAAIAAAAIgBAFIAAAAIAAAEIAAAAIABAFIAAAAIABABIAAAAIACAHIAAAAQADAIAGAIIAAAAIADAGIAAAAIgCAGQgEAAgEgCIAAAAQAAgDgDgDIAAAAIgGgEIAAAAIgDgBIAAAAIgFgFIgIgHIAAAAIgFgLIAAAAIgHgSIgHgJIgBgFQACgDAAgDIAAAAIAAgEIAAAAQgBgDgDgCIAAAAIAGgGIAAAAIgBgDIAAAAIgEgDIAAAAIgFgDIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAFADIAAAAIAEADIAAAAIABADIAAAAIgGAGIAAAAQADACABADIAAAAIAAAEIAAAAQAAADgCADIAAAAIAAAAgAl+BhIABAAIAAAAQADADAEALIAAAAQABADAGALIAAAAQADAJAAAGIAAAAQAAgGgDgJIAAAAQgGgLgBgDIAAAAQgEgLgDgDIAAAAIAAgBIgBABIAAAAIAAAAgAHDCJIgBAAIAAAAIABAAgAGVB6IAAgCIAAAAIAAACgAmtB4QAEgGAIAAIAAAAQgIAAgEAGgAmeByQAHABAGAEIAAAAQADgCAAgDIAAAAIgBgCIAAAAIgBgJIAAAAQAAgGAHgBIAAAAQgHABAAAGIAAAAIABAJIAAAAIABACIAAAAQAAADgDACIAAAAQgGgEgHgBIAAAAIgBAAIAAAAIABAAgAGWByIAAADIAAAAIAAgDIAAAAIAAAAIAAAAIAAAAgAGrB0IAAABIAAAAIAAgBIAAAAIgCgNIAAAAIgDABIAAAAQgBAIgCAAIAAAAQACAAABgIIAAAAIADgBIAAAAIACANgAmhByIAAAAIAAAAIAAAAgAGWBxQACgFADAAIAAAAQgDAAgCAFgAGjBwIgBAAIAAAAIABAAgAGfBuIAAAAgAGdBsIAAAAIAAAAIAAAAgAGcBsIgBAAIAAAAIABAAgAl+BgIAAAAIAAAAIAAAAgAmIBfIADAAIAAAAIgDAAgAmDBfIgBAAIAAAAIABAAgAmjBdIAAAAIAAAAIAAAAgAmiBdQAGAAAHgDIAAAAQgHADgGAAgAmUBaIAAAAIAAAAIAAAAgAmSBZIAAAAIAAAAIAAAAgAmSBZIABAAIAAAAIgBAAgAniBLIgBAAIAAAAIABAAgAniBLIAEgBIAAAAIgEABgAnjBLIgBAAIAAAAIABAAgAgWBEIgBAAIAAAAIABAAgAgWBEQAWAAAMgBIAAAAQgMABgWAAgAiWAZQANAEAWAQIAAAAIAgAKIAAAAIAMAJIARAEIAAAAIACAAIAAAAIgCAAIAAAAIgRgEIAAAAIgMgJIgggKIAAAAQgWgQgNgEIAAAAIAAAAgAAPBCIAAAAgAAQBCIAHAAIAAAAIgHAAgAAXBCIAAAAIAAAAIAAAAgAmIAqIADABIAAAAIABAAIAAAAIAEACIAAAAIAEAEIAAAAIAAABIAAAAQABAEACABIAAAAIABAAIAAAAIAAAGIAAAAIAAgGIAAAAIgBAAIAAAAQgCgBgBgEIAAAAIAAgBIAAAAIgEgEIAAAAIgEgCIAAAAIgBAAIAAAAIgDgBIAAAAIAAAAgAASA8IgBAAIAAAAIABAAgAASA8IABAAIAAAAIAAAAIAAAAQAGgBAEgCIAAAAIADgCIAAAAQABACADABIAAAAIACAAIAAAAIgCAAIAAAAQgDgBgBgCIAAAAIgDACIAAAAQgEACgGABIAAAAIAAAAIAAAAIgBAAgAAsA7IAAAAIAAAAIAAAAgAAtA7IAAAAIAAAAIAAAAgAAGA6IAAAAIAAAAIAAAAgAADA5IgDgBIAAAAIADABgAgSgYIADAOIAAAAQACAJAAAFIAAAAIABAGIAAAAIAFACIAAAAIACAAIAAAAIABACIAAAAQABAFACAEIAAAAIAFAIIAAAAIADADIAAAAIAQAFIAAAAQAHADACAEIAAAAQAGgHAAgEIAAAAIAAAAIAAAAQAAgEgMgFIAAAAQgPgIgFgRIAAAAQgCgGAAgMIAAAAIAAgLIAAAAIABgQQADgGADgEIAAAAQADgEAAgDIAAAAIABgBIAAAAQAAgEgFgDIAAAAIgIgEIAAAAQgKgFgVgLIAAAAIgFgCQgJgIgGgJIAAAAQgCgFgDgFIAAAAIgCgCIAAAAIgEgKIgFgHIAAAAIgCgLIAAAAQgBgJgEgEIAAAAQgDgEgJgDIAAAAIgJgCIgBAAIAAAAQgBgFAAgFIAAAAIABgJIAAAAQACgFAJgLIAAAAIAEgEIAAAAIAEgBIAAAAIAYgJIAAAAIADAAIAAAAIgDAAIAAAAIgYAJIAAAAIgEABIAAAAIgEAEIAAAAQgJALgCAFIAAAAIgBAJIAAAAQAAAFABAFIAAAAIABAAIAAAAIAJACQAJADADAEIAAAAQAEAEABAJIAAAAIACALIAAAAIAFAHIAAAAIAEAKIACACIAAAAQADAFACAFIAAAAQAGAJAJAIIAAAAIAFACQAVALAKAFIAAAAIAIAEIAAAAQAFADAAAEIAAAAIgBABIAAAAQAAADgDAEIAAAAQgDAEgDAGIAAAAIgBAQIAAALIAAAAQAAAMACAGIAAAAQAFARAPAIIAAAAQAMAFAAAEIAAAAIAAAAIAAAAQAAAEgGAHIAAAAQgCgEgHgDIAAAAIgQgFIAAAAIgDgDIAAAAIgFgIIAAAAQgCgEgBgFIAAAAIgBgCIAAAAIgCAAIAAAAIgFgCIAAAAIgBgGIAAAAQAAgFgCgJIAAAAIgDgOIAAAAIADgOIAAAAIABgBIAAAAIgBgGIAAAAIgDgGIAAAAIAAgFIgEgDIAAAAIgPgGIAAAAIgLgDIgFgFIAAAAQgLgNgKgUIAAAAIgBgFIAAAAIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAAAIgJgNIAAAAQgNgPgRgFIAAAAIgBgBIAAAAIABABIAAAAQARAFANAPIAAAAIAJANIAAAAIAAACIAAAAIAAACIAAAAIAAABIAAAAIABAFIAAAAQAKAUALANIAAAAIAFAFIAAAAIALADIAPAGIAAAAIAEADIAAAAIAAAFIADAGIAAAAIABAGIAAAAIgBABIAAAAIgDAOIAAAAIAAAAgAmTAqIgBgMIAAAAIAAgEIAAAAQgGgJgHgNIAAAAIgCgFIACAFQAHANAGAJIAAAAIAAAEIAAAAIABAMgAmRAqIAEgBIAAAAIgEABgAmMApIgBAAIAAAAIABAAgAkkAnIARABQAJAAAEgCIAAAAIADgFIAAAAIgBABIAAAAIgBAAIAAAAIABAAIAAAAIABgBIAAAAIgDAFIAAAAQgEACgJAAIAAAAIgRgBIgRAAIAAAAIgLABIAAAAQgGAAgDgEIAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAAgCIAAAAIABgCIAAAAIgBACIAAAAIAAACIAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAAAAQADAEAGAAIAAAAIALgBIAAAAIAIAAIAAAAIAJAAgAkLAkIAAAAIAAAAIAAAAgAkKAkIAFgCIAAAAIgFACgAkWAiIAAAAIAAAAIAAAAgAkVAiIABgBIAAAAIACABIAAAAIgCgBIAAAAIgBABgAk6gEIABABIgBABIAAAAIABABIAAAAIABAAIAAAAIACABIAFANQAGAMAFACIAAAAIAIADIAAAAIAFADIAAAAIAAAAIAAAAIAAAAIAAAAIgFgDIAAAAIgIgDIAAAAQgFgCgGgMIAAAAIgFgNIgCgBIgBAAIAAAAIAAgBIAAgBIgBgBQgCgEAAgCIAAAAIAAgBIAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAAAAIgBgEIAAAAQAAgGgDgDIAAAAIgBgCIAAAAIgCgBIAAAAIAAAAIAAAAIAAAAIAAAAIACABIAAAAIABACIAAAAQADADAAAGIAAAAIABAEIAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIAAAAIAAABIAAAAQAAACACAEgAmugnIgGAQIAAAAQgJAaAAAcIAAAAQAAgcAJgaIAAAAIAGgQIAAAAQADgJAAgHIAAAAQAAgEgGgaIAAAAIgBgMIAAAAQAAgLAEgHIAAAAQAIgMAegJIAAAAIAzgQQAQgFAKAAIAAAAQgKAAgQAFIAAAAIgzAQQgeAJgIAMIAAAAQgEAHAAALIAAAAIABAMIAAAAQAGAaAAAEIAAAAQAAAHgDAJgAkDAbIABgBIgBAAIAAAAQgCgCgEAAIAAAAQgHgCgFgCIAAAAIgCgHQgBgCgDgDIAAAAIgDgCIAAAAIgBgCIAAAAIgGgEIAAAAQgCgEgCgLIAAAAIgHgbIAAAAIAAgKIAAAAIAAgNIAAAAIACgHIAAAAIgBAAQgIARgJAMIAAAAIgJAOIAAAAIABgBIAAAAIgBABIAAAAIAJgOIAAAAQAJgMAIgRIAAAAIABAAIgCAHIAAAAIAAANIAAAAIAAAKIAAAAIAHAbIAAAAQACALACAEIAAAAIAGAEIAAAAIABACIAAAAIADACQADADABACIAAAAIACAHQAFACAHACIAAAAQAEAAACACIAAAAgAiQgdIAAADIAAAAQACAEANAIIAAAAQAhARAMANIAAAAQAFAGABAEIAAAAIACAAIAAAAIAFAAIACgCIAAgDIAAAAQAAgMgQgJIAAAAQgVgLgJgHIAAAAQgMgKgFgLIAAAAIgEgHQgCgCgGgCIAAAAIgSgIQgIgIgKgGIAAAAQgEgCgBgCIAAAAIAAgGIABgCIAAAAQAAgDgCgDIAAAAIgDgDIAAAAIADgMIAAAAIARgrQAEgIAFgDIAAAAQgFADgEAIIAAAAIgRArIgDAMIAAAAIADADIAAAAQACADAAADIAAAAIgBACIAAAAIAAAGQABACAEACIAAAAQAKAGAIAIIAAAAIASAIQAGACACACIAAAAIAEAHQAFALAMAKIAAAAQAJAHAVALIAAAAQAQAJAAAMIAAAAIAAADIAAAAIgCACIgFAAIgCAAIAAAAQgBgEgFgGIAAAAQgMgNghgRIAAAAQgNgIgCgEIAAAAIAAgDIAAAAIAAgBIAAAAIAAgBIAAAAQAAgEgEgCIAAAAIgCAAIAAAAIgHgDIAAAAIgGAAIAAAAIgSABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAABIAAAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIAAAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAAAAIASgBIAGAAIAAAAIAHADIAAAAIACAAIAAAAQAEACAAAEIAAAAIAAABIAAAAIAAABIAAAAIAAAAgAiuAaIAPgCIAAAAIgPACgAieAYIgBAAIAAAAIABAAgAi/AIQAPgCANAAIAAAAQgNAAgPACgAiiAGIAAAAIAAAAIAAAAgAHAACIgBAAIAAAAIABAAgAHAACIAGgBIAAAAIgGABgAHGABIABAAIAAAAQAGgBADgFIAAAAQADgEAAgEIAAAAIAAgCIAAAAIgFgLIAAAAQgCgGgBgIIAAAAIgBgMIAAAAIABgJIAAAAIACgOIAAAAIABgKIAAAAIAAgDIAAAAQAAgZgXgQIAAAAIgBAAIAAAAIABAAIAAAAQAXAQAAAZIAAAAIAAADIAAAAIgBAKIAAAAIgCAOIAAAAIgBAJIAAAAIABAMIAAAAQABAIACAGIAAAAIAFALIAAAAIAAACIAAAAQAAAEgDAEIAAAAQgDAFgGABIAAAAIgBAAgAmdgIIgBAAIAAAAIABAAgAGLgQIAAAAIAAAAIAAAAgAF2gRIgBAAIAAAAIABAAgAF+gWQgDAFgFAAIAAAAQAFAAADgFIAAAAIABAAIAAAAIgBAAgAFQgwIANAHIANALIAIANIgIgNIgNgLIgNgHIgCgBIAAAAIACABgAF/gWIADgCIAAAAIgDACgAGDgYIgBAAIAAAAIABAAgAlHgeIAEAAIAAAAIgEAAgAlCgeIgBAAIAAAAIABAAgAi9grIgBAAIAAAAIABAAgAi9grIABAAIAAAAIgBAAgAi8gsIABAAIAAAAIgBAAgAjEgzQAAAEADACIAAAAIABABIAAAAIgBgBIAAAAQgDgCAAgEIAAAAIABgCIAAAAIgBAAIAAAAIABAAIAAAAIgBACIAAAAIAAAAgAFCgwIAHgBIAAAAIgHABgAFKgxIgBAAIAAAAIABAAgAjFg2IgDAAIAAAAIADAAgAjnhiQAPAFAFAGIAAAAQADAEABAHIAAAAQADAJAAAMIAAAAIAAABIAAAAIABAAIAAAAIADAAIAAAAIgDAAIAAAAIgBgBIAAAAQAAgMgDgJIAAAAQgBgHgDgEIAAAAQgFgGgPgFIAAAAQgPgFgLACIAAAAQgIABgLAFIAAAAIgBADIAAAAQgBAEgGAAIAAAAQAGAAABgEIAAAAIABgDIAAAAQALgFAIgBIAAAAIAGgBIAAAAQAJAAALAEgAlxhMIgBAAIAAAAIABAAgAlohiIgDANQgBAHgEACIAAAAIgBAAIAAAAIABAAIAAAAQAEgCABgHIAAAAIADgNIABgDIAAAAIgBgDIAAAAIgDgEIAAAAIgFgDIAAAAIgDgCIAAAAIAAAAIAAAAIAAAAIADACIAFADIAAAAIADAEIAAAAIABADIAAAAIgBADgAl1hOIACABIAAAAIgCgBIAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAgBIAAAAIgFACIAAAAIgFADIAAAAIAFgDIAAAAIAFgCIAAAAIAAABIAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAgAmChNIgBAAIAAAAIABAAgAmChNIABAAIAAAAIgBAAgAmMhQQABABAEABIAAAAIABAAIAAAAIgBAAIAAAAQgEgBgBgBIAAAAIAAgDIAAAAIAAgEIAAAAIADgHIgCgEIAAAAIADgBIACgDIAGgEIAAAAIAGgGIAAAAIAAAAIABAAIAAAAIgBAAIAAAAIAAAAIAAAAIgGAGIgGAEIAAAAIgCADIgDABIACAEIAAAAIgDAHIAAAEIAAAAIAAADgAkqhSIABgCIAAAAIAGgEIAAAAIAEAAIAAAAIAAAAIAAAAIAAAAIAAAAIgEAAIAAAAIgGAEIAAAAIgBACIAAAAIABgKIAAAAQAAgEgBgEIAAAAIgEgHIAAAAIAEAHIAAAAQABAEAAAEIAAAAIgBAKIAAAAIAAAAgAmYhVIAAABIADACIACAAIACgBIABgCIABgBIAAAAIgBgCIAAAAIAAgBIgBgBIgCgBIAAAAIgCAAIgBAAIAAAAIgBABIgCABIAAABIAAAAIABADgAGQiKIgSAGIAAAAQgeAOgiAJIAAAAQgRAEgHAEIAAAAQgFAEgDAFIAAAAIgBAGIAAAAIABgGIAAAAQADgFAFgEIAAAAQAHgEARgEIAAAAQAigJAegOIAAAAIASgGIAAAAIABAAIAAAAIgBAAgADuhXIAAAAIAAAAIAAAAgADvhXQAFAAAHgCIAAAAQALgDANgHIAAAAQANgIACgIIAAAAIAAgDIAAAAQAAgFgDgDIAAAAIAjgFIAAAAQAngHAPAAIAAAAIANgCIAAAAQAHgCAEgGIAAAAQADgEAAgEIAAAAIgBgEIAAAAQgCgGgGgDIAAAAIgBgBIAAAAIABABIAAAAQAGADACAGIAAAAIABAEIAAAAQAAAEgDAEIAAAAQgEAGgHACIAAAAIgNACIAAAAQgPAAgnAHIAAAAIgjAFIAAAAQADADAAAFIAAAAIAAADIAAAAQgCAIgNAIIAAAAQgNAHgLADIAAAAQgHACgFAAgAkdhYIAAAAIAAAAIAAAAgADkhZIAAAAIAAAAIAAAAgABIhfIgBAAIAAAAIABAAgABJhfIAAAAgABJhfIADgBIAAAAIgDABgABFhgIAAAAIAAAAIAAAAIAAAAIgBgDIAAAAIAAgDIAAAAIAFgEIAYgOIACgBIAAAAIAAgBIAAAAIAGgLIAAAAIAFgOQAEgJAAgEIAAAAIACgHIAAAAIgBgEIAAAAQAAgNgHgFIAAAAQgGgDgOAAIAAAAQgVABgWAHIAAAAQgGABgDAEIAAAAIgGADIAAAAIgBAAIAAAAQgOALgKAaIAAAAQgFAOAAAJIAAAAIAAAHIAAAAIAAANIAAAAIAAAAIAAAAQgEgDgCgEIAAAAIgBgBIAAAAIgBgCIAAAAIAAAAIAAAAIgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIAAAAQgCgBgBgDIAAAAQgCgMAAgKIAAAAIAAgDIAAAAQAAgGABgGIAAAAQACgIALgQIAAAAIAGgLQACgEACAAIAAAAIACAAIAAAAIACgEIAAAAQADgGAAgFIAAAAQAAgIgGgIIAAAAQgHgLgQgDIAAAAQgIABgJAEIAAAAIgCACIAAAAIAAAAIAAAAIAAAAIAAAAIACgCIAAAAQAJgEAIgBIAAAAQAQADAHALIAAAAQAGAIAAAIIAAAAQAAAFgDAGIAAAAIgCAEIAAAAIgCAAIAAAAQgCAAgCAEIAAAAIgGALQgLAQgCAIIAAAAQgBAGAAAGIAAAAIAAADIAAAAQAAAKACAMIAAAAQABADACABIAAAAQAAABABAAQABAAAAAAQABAAAAAAQABAAAAgBIAAAAIABAAIABACIAAAAIABABIAAAAQACAEAEADIAAAAIAAAAIAAAAIAAgNIAAAAIAAgHIAAAAQAAgJAFgOIAAAAQAKgaAOgLIAAAAIABAAIAAAAIAGgDIAAAAQADgEAGgBIAAAAQAWgHAVgBIAAAAQAOAAAGADIAAAAQAHAFAAANIAAAAIABAEIAAAAIgCAHIAAAAQAAAEgEAJIAAAAIgFAOIgGALIAAAAIAAABIAAAAIgCABIAAAAIgYAOIgFAEIAAADIAAAAIABADgABMhgIABAAIAAAAIgBAAgACOiKQgGACgHAGIAAAAQgFADgFAFIAAAAQgQAPgUAHIAAAAIgGADIAAAAIAAAAIAAAAIAAAAIAGgDQAUgHAQgPIAAAAQAFgFAFgDIAAAAQAHgGAGgCIAAAAIAGAAIAAAAIgGAAgAjShlIAAgBQAJgBAFgEIAAAAQAGgFAAgIIAAAAIAAgBIAAAAQgBgIgGgHIAAAAQgEgFgJgGIAAAAIgNgKIAAAAIgTgSIAAAAQgLgJgLgBIAAAAIABguIAAAAIgBgQIAAAAQgBgkgMgYIAAAAQgGgLgHgFIAAAAIgBAAIAAAAIABAAIAAAAQAHAFAGALIAAAAQAMAYABAkIAAAAIABAQIAAAAIgBAuIAAAAQALABALAJIAAAAIATASIAAAAIANAKIAAAAQAJAGAEAFIAAAAQAGAHABAIIAAAAIAAABIAAAAQAAAIgGAFIAAAAQgFAEgJABIAAAAIgBAAIAAAAIABABgAjVhmIgBAAIAAAAIABAAgAjVhmIABAAIAAAAIgBAAgAjhhnIgBgBIAAAAIABABgAjjhoIgBAAIAAAAIgBAAIAAAAIgRgFIAAAAIgBgBIAAAAIABABIAAAAIARAFIAAAAIABAAIAAAAIABAAgADah2IgBAKIABgKIAAgEIAAAAIgBgGIAAAAQgQgIgHgCIAAAAQgOAAgHgCIAAAAIgQgFIAAAAIgQgBIAAAAQgIgCgFgHIAAAAQgDgEAAgEIAAAAIABgGIAAAAIAFgIIAAAAIABgCIAAAAIgPgKIAAAAQgKgGgJgBIAAAAIAAAAIAAAAIAAAAIAAAAQAJABAKAGIAAAAIAPAKIAAAAIgBACIAAAAIgFAIIAAAAIgBAGIAAAAQAAAEADAEIAAAAQAFAHAIACIAAAAIAQABIAAAAIAQAFIAAAAQAHACAOAAIAAAAQAHACAQAIIAAAAIABAGIAAAAIAAAEgAkGhwIABAAIAAAAIgBAAgAkEhwIAAAAIAAAAIAAAAgAl5hxIADgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgDABgAl1hyIAAAAIAAAAIAAAAgAlLh2IAFABIAAAAIgCgCIAAAAIgDABgACbiKIgHAAIAAAAIAHAAgAGRiLIAIAAIAAAAIgIAAgAkRiLIgFAAIAAAAIAFAAgAkRiLIABAAIAAAAIgBAAgAkQiLIABAAIAAAAIgBAAgAkMiPQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBIAAAAIABgCIAAAAIgBgDIAAAAIACAAIAAAAQgEgDgIgBIAAAAIgFgBIAAAAQgFgCgCgEIAAAAIgDgKIAAAAQgDgIgJgDIAAAAIAAgBIAAAAIABgbIAAAAIAEgLQACgGABgEIAAAAIgBgBIAAAAIAAgEIAAAAIAAgCIAAAAIAAgDIABgBIAAAAIgBgEIAAAAIgIghQgBgFgDgBIAAAAIgBAAIgCgFIAAAAIgHgTIAAAAIAAgEIAAAAQAAgKAHgEIAAAAIABAAIAAAAIgBAAIAAAAQgHAEAAAKIAAAAIAAAEIAAAAIAHATIAAAAIACAFIAAAAIABAAQADABABAFIAAAAIAIAhIABAEIAAAAIgBABIAAAAIAAADIAAACIAAAAIAAAEIAAAAIABABIAAAAQgBAEgCAGIAAAAIgEALIgBAbIAAAAIAAABIAAAAQAJADADAIIAAAAIADAKIAAAAQACAEAFACIAAAAIAFABIAAAAQAIABAEADIAAAAIgCAAIAAAAIABADIAAAAIgBACgAGbiLIgCAAIAAAAIACAAgAkZiMIABAAIAAAAIgBAAIAAAAIgHgDIAAAAIgEABIAAAAIgBgEIAAAAIgBgBIAAAAIgDgEIgBgBIAAAAQgGgEgIgBIAAAAQAIABAGAEIAAAAIABABIAAAAIADAEIABABIAAAAIABAEIAAAAIAEgBIAAAAIAHADgAiVifIASAIIABAAIgBAAIgSgIIgDgBIAAAAIADABgAiAiXIABAAIAAAAIgBAAgAh/iXIAAAAIAAAAIAAAAgAi6iaIADABIAAAAIABABIAAAAIAEgGIAAAAIAGgEIAAAAQgEgBAAgDIAAAAQAAgEAHgCIAAAAQATgGAKAAIAAAAIAQACIAAAAIANADIAFgIIAAAAQAFgKACgLIAAAAQACgMADgDIAAAAQAEgEAIgEIAAAAIAAgBIAEgCIAAAAQAEgEAAgGIAAAAIAAgEIAAAAIAAAEIAAAAQAAAGgEAEIAAAAIgEACIAAAAIAAABQgIAEgEAEIAAAAQgDADgCAMIAAAAQgCALgFAKIAAAAIgFAIIAAAAIgNgDIgQgCIAAAAQgKAAgTAGIAAAAQgHACAAAEIAAAAQAAADAEABIAAAAIgGAEIAAAAIgEAGIAAAAIgBgBIAAAAIgDgBIAAAAIACgBIAAAAQACgDAAgCIAAAAIAAgCIAAAAQgCgDgEgCIAAAAIgJgDIAAAAQgVgIgGgaIAAAAIgCgUIAAAAIgBgVIAAAAIgHgiIAAAAIAAgBIAAAAIABgCIAAAAIgCABIAAAAIABACIAAAAQgCAFgJAGIAAAAQgKAIgCADIAAAAQgDAEgBALIAAAAIACAJIAAAAIAKAZIAAAAIADAHIAAAAIgHgIIAAAAQgJgLgBgHIAAAAIABgNIAAAAIABgCIAAAAIgBgKIAAAAIAAgHIAAAAIAEgPIAAAAIAAgBIAAAAIgCgOIAAAAIgGgFIAAAAQgFgGgEgMIAAAAIgDgJIgGgHQgJgKAAgMIAAAAIAAgDIAAAAIACgMIAAgLIAAAAQABgDAEgEIAAAAIAHgIIAAAAIAGgPIAAAAQAEgKAGgEIAAAAQAFgDAGAAIAAAAQAHAAAFADIAAAAQADACAEAFIAAAAIAHAIIAAAAIALAHIAAAAQAHAHAAARIAAAAIAAAEQAFACADAFIAAAAQACADACAJIAAAAQACAIADADIAAAAQAGAHATAFIAAAAQAKAEAKAGIAAAAQADAGAJAJIAAAAIAMALIAEADIABAAIAAAAIgBAAIAAAAIgEgDIgMgLQgJgJgDgGIAAAAQgKgGgKgEIAAAAQgTgFgGgHIAAAAQgDgDgCgIIAAAAQgCgJgCgDIAAAAQgDgFgFgCIAAAAIAAgEQAAgRgHgHIAAAAIgLgHIAAAAIgHgIIAAAAQgEgFgDgCIAAAAQgFgDgHAAIAAAAQgGAAgFADIAAAAQgGAEgEAKIAAAAIgGAPIAAAAIgHAIIAAAAQgEAEgBADIAAAAIAAALIAAAAIgCAMIAAADIAAAAQAAAMAJAKIAAAAIAGAHIADAJQAEAMAFAGIAAAAIAGAFIAAAAIACAOIAAAAIAAABIAAAAIgEAPIAAAAIAAAHIAAAAIABAKIAAAAIgBACIAAAAIgBANIAAAAQABAHAJALIAAAAIAHAIIAAAAIgDgHIAAAAIgKgZIAAAAIgCgJIAAAAQABgLADgEIAAAAQACgDAKgIIAAAAQAJgGACgFIAAAAIAHAiIAAAAIABAVIAAAAIACAUIAAAAQAGAaAVAIIAAAAIAJADIAAAAQAEACACADIAAAAIAAACIAAAAQAAACgCADIAAAAIgCABIAAAAIAAAAgAk5idIAAAAIAAAAIAAAAgAk7idIAAAAIAAAAIAAAAgAififIAFgBIAAAAIgFABgAiZigIgBAAIAAAAIABAAgAGJiqIgBAAIAAAAIABAAgAFcjFQAMAEAIAFIAAAAQAKAHACAIIAAAAQgCgIgKgHIAAAAQgIgFgMgEIAAAAQAEgEACgGIAAAAIAAgDIAAAAQAAgEgCgDIAAAAQgCgFgHgDIAAAAQgEgCgFAAIAAAAQAAgGgDgEIAAAAQgFgHgJgBIAAAAIAAAAIAAAAIAAAAIAAAAQAJABAFAHIAAAAQADAEAAAGIAAAAQAFAAAEACIAAAAQAHADACAFIAAAAQACADAAAEIAAAAIAAADIAAAAQgCAGgEAEIAAAAIAAAAgAF9itIAAAAIAAAAIAAAAgAF+itIAAAAIAAAAIAAAAgADsiyQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAIAAAAQABABAAAAQABAAABAAQAAAAABAAQAAAAABgBIAAAAIAHgFIAAAAQAEgDAMgEIAAAAQALgEAEgEIAAAAQADgEADgMIAAAAIAEgHIADgMIAAAAQADgHAEgEIAAAAQAFgEAHgBIAAAAQgHABgFAEIAAAAQgEAEgDAHIAAAAIgDAMIAAAAIgEAHQgDAMgDAEIAAAAQgEAEgLAEIAAAAQgMAEgEADIAAAAIgHAFIAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBIAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAAAIAAgBIAAAAQAAgCACgDIAAAAQAIgHAJgEIAAAAIAKgDIAAAAIABgBIAAAAIAJgIIAAAAIAEgLIAAAAIAEgRIADgGIAAAAIgBgDIAAAAQgFgMgNgIIAAAAQANAIAFAMIAAAAIABADIAAAAIgDAGIAAAAIgEARIgEALIAAAAIgJAIIAAAAIgBABIAAAAIgKADIAAAAQgJAEgIAHIAAAAQgCADAAACIAAAAIAAABgAAwi8IAAAAIAAAAIAAAAgAAwi8IANgCIAAAAIgNACgAAsi9IgCAAIAAAAQgKgCgEgGIAAAAQgDgDgBgNIAAAAQAAgGgCgFIAAAAIAAgCIAAAAQAAgEgDgCIAAAAIgCgBIAAAAIgDgFIAAAAIgBgBIAAAAIgCAAIAAAAIADABIAAAAIADAFIAAAAIACABIAAAAQADACAAAEIAAAAIAAACIAAAAQACAFAAAGIAAAAQABANADADIAAAAQAEAGAKACIAAAAIACAAgABRjDIALgCIAAAAIgLACgABdjFIgBAAIAAAAIABAAgAgujbIAAAAIAAAAIAAAAgAgujbQAGAAAFgEIAAAAQgFAEgGAAgAgvjbIAAAAgABbjkIAFACIAAAAIASABIAAAAQAJAAADgBIAAAAQADgBABgCIAAAAIACgEIAAAAIgCAEIAAAAQgBACgDABIAAAAQgDABgJAAIAAAAIgSgBIAAAAIgFgCIAAAAIAAgCIAAAAIAAgBIAAAAQABgDACgCIAAAAIgBgBIAAgCIAAACIABABQgCACgBADIAAAAIAAABIAAAAIAAACgABxjtIAAAAIAAAAIAAAAgABxjtIACAAIAAAAIgCAAgABpjtIgBgBIAAAAIgCAAIAAAAIgCgEIgCgBIgBAAIAAAAIABAAIAAAAIACABIACAEIACAAIAAAAIABABgAB8juIABAAIAAAAIgBAAgAB+juIAAAAIAAAAIAAAAgAB9juIABAAIAAAAIgBAAgAE6j2IgBAAIAAAAIABAAgACPkPIAAAIIABALIAAAAQACAEADABIAAAAIAEABIAJgBIAAAAQAFgCABgEIAAAAIADgIIAAAAIABgBIAIgCIAAAAIAegIIAAAAQAKgCAKAAIAAAAQgKAAgKACIAAAAIgeAIIAAAAIgIACIAAAAIgBABIgDAIIAAAAQgBAEgFACIAAAAIgJABIAAAAIgEgBQgDgBgCgEIAAAAIgBgLIAAAAIAAgIQAAgGADgBIAAAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAQgDABAAAGIAAAAIAAAAgAgDj3IADgBIAAAAIgDABgAAAj4IAAAAIAAAAIAAAAgAABj4IAAAAIAAAAIAAAAgAAAkLIABADIAAABIABAAIACABIACAAIADgCIAAAAIAAgCIgCgEIgBAAIgBAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIACAEIAAACIgDACIAAAAIgCAAIgCgBIgBAAIAAgBIgBgDIAAAAgAgQkLIAGgGIAAAAIAGgGIAAAAIAAAAIAAAAIgBgGIAAAAQgCgFAAgMIAAAAQABgVAJgTIAAAAQAKgTATgOIAAAAIAKgHIAAAAIACAAIACAAIADgCIAAAAQADAAADgEIAAAAIAFgEIAAAAIABAAIADgCIAAAAIAAgBIAJgHIAAAAQAKgIAGgHIAAAAIADgGQAAgDgDgBIAAAAIgBgBIAAAAIAKgEIAAAAIABAAIAAAAIgBAAIAAAAIgKAEIAAAAIABABIAAAAQADABAAADIAAAAIgDAGQgGAHgKAIIAAAAIgJAHIAAAAIAAABIgDACIAAAAIgBAAIgFAEIAAAAQgDAEgDAAIAAAAIgDACIAAAAIgCAAIgCAAIgKAHIAAAAQgTAOgKATIAAAAQgJATgBAVIAAAAQAAAMACAFIAAAAIABAGIAAAAIAAAAIAAAAIgGAGIAAAAIgGAGIAAAAIAAgDIAAAAIAAgEIAAAAIACgOIAAAAIAAgCIAAAAQgEgHAAgFIAAAAIAAgBIAAAAQAAgDACgEIAAAAIADgJIAAAAIAAgFIAAAAIABgMIAAAAIAFgMIAAAAIAAgOIAAAAIAAgEIAAAAIADgEIAAAAQAEgJAAgLIAAAAIgCgSIAAAAQgBgJgDgGIAAAAQgFgJgNgHIAAAAQgPgJgPgCIAAAAIgJAAIAAAAIgIgEIAAAAIAAAAIAAAAIAAAAIAAAAIAIAEIAAAAIAJAAIAAAAQAPACAPAJIAAAAQANAHAFAJIAAAAQADAGABAJIAAAAIACASIAAAAQAAALgEAJIAAAAIgDAEIAAAAIAAAEIAAAAIAAAOIAAAAIgFAMIAAAAIgBAMIAAAAIAAAFIAAAAIgDAJIAAAAQgCAEAAADIA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");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_7_graphics_14,x:397.8,y:-42.7}).wait(2).to({graphics:null,x:0,y:0}).wait(13));

	// Layer_17
	this.instance_7 = new lib.plate_t_09();
	this.instance_7.setTransform(-640,-130);
	this.instance_7._off = true;

	this.instance_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({_off:true},2).wait(13));

	// Layer_16 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_12 = new cjs.Graphics().p("AgIHMIgRgBIAAAAQgHgDgEgEIAAAAIgDgCIAAAAIgCgEIAAAAIgPAAIAAAAQgPgBgUgDIAAAAIgbgFQgqgIgNgIIAAAAQgdgQgOgiIAAAAIgGgNIAAAAIgLgZIAAAAQgNgRgigMIAAAAIgRgIIAAAAQgggQgbgTIAAAAQgtgggJgkIAAAAQgIgZAKgjIAAAAIgIgPIAAAAQgHgOgWgUIAAAAQgXgWgHgMIAAAAQgGgKgEgLIAAAAQgQgtgBgaIAAAAIAAgJIAAAAIACAGIAAAAQADAMAEAHIAAAAIAFAHIAAAAIABADIAAAAIADAEIAJAbQADAKAGAGIAAAAIADAEIAAAAQAJALAMAKIAAAAIALAJQAGAGALAYIAAAAQAGANAJACIAAAAIABAAIAAAAIgBAAIAAAAQgJgCgGgNIAAAAQgLgYgGgGIAAAAIgLgJQgMgKgJgLIAAAAIgDgEIAAAAQgGgGgDgKIAAAAIgJgbIgDgEIgBgDIAAAAIgFgHIAAAAQgEgHgDgMIAAAAIgCgGIAAAAIAAgGIAAAAIABgCIAAAAQABgEAEgDIAAAAIAIgJIAAAAQAIgNAFgCIAAAAIAAAAQAEgBADABIAAAAIABAAIAGAEIAAAAQADAEAAADIAAAAQAAAGgFAGIAAAAIgJAKIAAAAQADADABAEIAAAAIAAAEIAAAAQAAAEgCADIAAAAIABAHIAHAKIAHAWIAFALIAAAAIAIAIIAAAAIAFAGIADACIAAAAQAEACACADIAAAAQADADAAADIAAAAQAEADAEAAIAAAAIACgIIgDgHIAAAAQgLgPgCgRIAAAAIAAgFIAAAAIABgGIAAAAQAEgIAJAAIAAAAQgJAAgEAIIAAAAIgBAGIAAAAIAAAFIAAAAQACARALAPIAAAAIADAHIAAAAIgCAIQgEAAgEgDIAAAAQAAgDgDgDIAAAAQgCgDgEgCIAAAAIgDgCIAAAAIgFgGIgIgIIAAAAIgFgLIAAAAIgHgWIgHgKIgBgHQACgDAAgEIAAAAIAAgEIAAAAQgBgEgDgDIAAAAIAJgKIAAAAQAFgGAAgGIAAAAQAAgDgDgEIAAAAIgGgEIAAAAQAHABAEAGIAAAAQACAFgBAHIAAAAIgEANIAAAAQgDAKAFAOIAAAAQAHAaAMATIAAAAQgMgiADgRIAAAAQADgRANgHIAAAAQAGg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hAAgVIAAAAIAAgQIAAAAQACgSAIgHIAAAAQAHgFAJAAIAAAAIARABIAAAAIAcgEIAAAAIAYAFIAAAAQAXAJAEALIAAAAQADAHAAAGIAAAAIgBAGIAAAAIAGApIAIAQIABABIAHAGIAAAAIASAYIAOAXQARAfAXASIAAAAQAHAFAbARIAAAAIASAKIAAAAIgOgSIAAAAQgQgTgJgPIAAAAQgFgOgIgKIAAAAIgLgNQgfgbgKgZIAAAAIgIgdQgCgEAAgEIAAAAIAAgDIAAAAQgEgKgBgNIAAAAQAAgPADgHIAAAAQAHgZAbgIIAAAAIABgBIAAAAIgBABIAAAAQgbAIgHAZIAAAAQgDAHAAAPIAAAAQABANAEAKIAAAAIAAADIAAAAQAAAEACAEIAAAAIAIAdQAKAZAfAbIAAAAIALANQAIAKAFAOIAAAAQAJAPAQATIAAAAIAOASIAAAAIgSgKIAAAAQgbgRgHgFIAAAAQgXgSgRgfIAAAAIgOgXIgSgYIgHgGIAAAAIgBgBIgIgQIgGgpIABgGIAAAAQAAgGgDgHIAAAAQgEgLgXgJIAAAAIgYgFIAAAAIgcAEIAAAAIgRgBIAAAAQgJAAgHAFIAAAAQgIAHgCASIAAAAIAAAQIAAAAQAAAVADAhIAAAAQADAUAGALIAAAAIAJAVIAAAAIAMAaQAKAXAeAWIAAAAQAMAQAHAFIAAAAIAaASIAXAYIAAAAQAQAOALAFIAAAAIAQAGQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAAQAGAHAIAGIAAAAQgEADgHABgAjCDaIgCAAIAAAAIACAAgAjEDZIgBAAIAAAAIABAAgAgJDXIAJgQIAAAAIAehfIAJgRQACgIADgUIAAAAQAAgVADgJIAAAAQAFgOAOgPIAAAAIACAAIABgCIAAAAQALgPABgEIAAAAQAHgMAFgVIAAAAIAZhdQAMgnARgPIAAAAQAGgFAPgHIAAAAQAegQAQAAIAAAAIAPABIAAAAQAIAAAFgCIAAAAIANgJIACAAIAAAAIgCAAIAAAAIgNAJQgFACgIAAIAAAAIgPgBIAAAAQgQAAgeAQIAAAAQgPAHgGAFIAAAAQgRAPgMAnIAAAAIgZBdQgFAVgHAMIAAAAQgBAEgLAPIAAAAIgBACIAAAAIgCAAQgOAPgFAOIAAAAQgDAJAAAVIAAAAQgDAUgCAIIAAAAIgJARIgeBfIgJAQIAAAAQAJgmAIg7IAAAAIANhMQADgQAAgLIAAAAIAAgBIAEgNIADgGIAAAAIAHgRIACgIIAAAAIgBgEIAAAAQAHgJAEgIIAAAAIABgDIAAAAIACgEIgCAAIAAABIAAgBIAAAAQAAgOgKgGIAAAAQgHgGgTACIAAAAIgBAAIAAAAIABAAIAAAAQATgCAHAGIAAAAQAKAGAAAOIAAAAIAAABIAAAAIAAgBIACAAIgCAEIgBADIAAAAQgEAIgHAJIAAAAIABAEIAAAAIgCAIIAAAAIgHARIgDAGIAAAAIgEANIAAABQAAALgDAQIAAAAIgNBMQgIA7gJAmIAAAAIAAAAgAmNBuIAAAAIAAAAIAAAAgAmMBuQAIAAAFgLIAAAAQgFALgIAAgACtBDQANgLAUgNIAAAAQAmgaARgVIAAAAIAQgdQAag5ABhDIAAAAIAAgFIAAAAQAAgRADgHIAAAAIgBgKIAAAAQABgHACgFIAAAAIACgCIAAAAQACgHAIgEIAAAAQAEgCAEAAIAAAAQgEAAgEACIAAAAQgIAEgCAHIAAAAIgCACIAAAAQgCAFgBAHIAAAAIABAKIAAAAQgDAHAAARIAAAAIAAAFIAAAAQgBBDgaA5IAAAAIgQAdQgRAVgmAaIAAAAQgUANgNALIAAAAIAAgEIAAAAQAEgKAIgHIAAAAIAMgKQAZgWATgbIAAAAIAIgPIAAAAQAPgWAHgfIAAAAQAIgeAAgzIAAAAIAAgGIAAAAIADgeIACgTIAAAAIgBgEIAAAAQAAgFgDgDIAAAAIgDgEIAAAAIgFgDIAAAAIgFgDIAAAAIAFgEIAAAAQADgDAAgEIAAAAIAAgCIAAAAQgBgFgDgDIAAAAIgHgEQgHgDgGAAIAAAAQgHgCgDACIAAAAIgCABIAAAAQgDgCgFgBIAAAAIAAAAIAAAAIAAAAIAAAAQAFABADACIAAAAIACgBIAAAAQADgCAHACIAAAAQAGAAAHADIAAAAIAHAEQADADABAFIAAAAIAAACIAAAAQAAAEgDADIAAAAIgFAEIAAAAIAFADIAAAAIAFADIAAAAIADAEIAAAAQADADAAAFIAAAAIABAEIAAAAIgCATIAAAAIgDAeIAAAGIAAAAQAAAzgIAeIAAAAQgHAfgPAWIAAAAIgIAPIAAAAQgTAbgZAWIAAAAIgMAKQgIAHgEAKIAAAAIAAAEIAAAAIAAAAgAl9gtQADADAEANIAAAAQABAEAGANIAAAAQADAKAAAFIAAAAQAAgFgDgKIAAAAQgGgNgBgEIAAAAQgEgNgDgDIAAAAIAAgBIAAgBIgBABIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAABgAGrgXQACAXAUABIAAAAQAIgKAQgMIAAAAIABgBIAAAAIgBABIAAAAQgQAMgIAKIAAAAQgUgBgCgXIAAAAIAAgBIAAAAIAAABgAGTgEIAAAAIAAAAIAAAAgAGVgRIAAgDIAAAAIAAADgAmegZQAHABAGAFIAAAAQADgCAAgFIAAAAIgBgCIAAAAIgBgKIAAAAQAAgIAHgBIAAAAIAFgCIAAAAIgFACIAAAAQgHABAAAIIAAAAIABAKIAAAAIABACIAAAAQAAAFgDACIAAAAQgGgFgHgBIAAAAIgBAAIAAAAIABAAgAHagWQAGgEAEAAIAAAAQgEAAgGAEgAGWgZIAAABIAAAAIAAgBIAAAAIAAAAgAmggZIAAAAIAAAAIAAAAgAHkgaIAAAAIAAAAIAAAAgAGWgbQACgGADAAIAAAAQgDAAgCAGgAGrgbIAAAAIAAAAIAAAAgAGrgbIgBgGIAAAAIABAGgAGjgcIgBAAIAAAAIABAAgAGmgnQAAALgDAAIAAAAQADAAAAgLIAAAAIABgEIAAAAIgBAEgAGigcIAAAAIAAAAIAAAAgAGfgeIABAAIAAAAIgBAAIAAAAIAAAAgAGfgeIgBgBIAAAAIABABgAGcggIgBgBIAAAAIABABgAGngrIAAgCIAAAAIAAACgAGogsIAAgBIAAAAIAAABgAGogtIgBAAIAAAAIABAAgAmDgxIgBAAIAAAAIABAAgAgVhQIAAAAIAAAAIAAAAgAgUhQQAUAAAMgCIAAAAQgMACgUAAgAiWiEQANAFAWATIAAAAIAgAMIAAAAIAMAKQACACAPADIAAAAIACAAIAAAAIgCAAIAAAAQgPgDgCgCIAAAAIgMgKIgggMIAAAAQgWgTgNgFIAAAAIgBgBIAAAAIABABgAAShaIgCAAIAAAAIACAAgAAShaIABAAIAAAAIgBAAgAAQhaIgBAAIAAAAIABAAgAAthbIAAAAIAAAAIAAAAgAAthbIABAAIAAAAIgBAAgAAOhbIgCAAIAAAAIACAAgAAlhcIgBgBIAAAAIABABgAAEhdIAAAAIAAAAIAAAAgAACheIgBAAIAAAAIABAAgAgJirQABAMAEAOIAAAAQABAGACAFIAAAAIAFAJIAAAAIADADIAAAAIAQAHIAAAAQAHADACAFIAAAAQAGgIAAgEIAAAAIAAgBIAAAAQAAgFgMgGIAAAAQgPgKgFgUIAAAAQgCgJAAgPIAAAAIAAgNIAAAAIABgVIABgQIAAAAIgDgLIAAAAQghgRgTgfIAAAAIgGgMIAAAAIgFgOIgKgQIAAAAIgHgCIAAAAQgPgGgCgQIAAAAIgBgHIAAAAIAAgGIAAAAIAAgHIAAAAIABgKIAAAAIADgIIAAAAIAEgOIAAAAQAGgUAKgHIAAAAIAAAAIAAAAIAAAAIAAAAQgKAHgGAUIAAAAIgEAOIAAAAIgDAIIAAAAIgBAKIAAAAIAAAHIAAAAIAAAGIAAAAIABAHIAAAAQACAQAPAGIAAAAIAHACIAAAAIAKAQIAAAAIAFAOIAGAMIAAAAQATAfAhARIAAAAIADALIAAAAIgBAQIAAAAIgBAVIAAANIAAAAQAAAPACAJIAAAAQAFAUAPAKIAAAAQAMAGAAAFIAAAAIAAABIAAAAQAAAEgGAIIAAAAQgCgFgHgDIAAAAIgQgHIAAAAIgDgDIAAAAIgFgJIAAAAQgCgFgBgGIAAAAQgEgOgBgMIAAAAIABgEIAAAAIABgGIAAAAIADgRIAAAAIABgDIAAAAIgBgHIAAAAIABgEIAAAAIACgKIAAAAIgBgHIAAAAQgEgNgNgDIAAAAIgCgBIAAAAIACABIAAAAQANADAEANIAAAAIABAHIAAAAIgCAKIAAAAIgBAEIAAAAIABAHIAAAAIgBADIAAAAIgDARIAAAAIgBAGIAAAAIgBAEIAAAAIAAAAgAkch3IAAAAIAAAAIAAAAgAkch3IABAAIAAAAIgBAAgAkxh6IgBAAIAAAAIgCAAIAAAAIgFgBIAAAAIgKgCIAAAAIgEgCIAAAAQgFgDgEgEIAAAAQgFgHAAgKIAAAAIAAgHIAAAAQAEgRABgJIAAAAIABgKIAAAAQACgFAFgBIAAAAIABAAIAAAAIgBAAIAAAAQgFABgCAFIAAAAIgBAKIAAAAQgBAJgEARIAAAAIAAAHIAAAAQAAAKAFAHIAAAAQAEAEAFADIAAAAIABACIAAAAIADAAIAKACIAAAAIAFABIAAAAIACAAIAAAAIABAAgAkph6IgCgBIAAAAIACABgAjBjiIAFAFIAAAAQAIABAFAFIAAAAIABABIAAAAIAEAAIAAAAIACAAIAAAAQAQABAFAGIAAAAQACAEABAHIAAAAQACAFANAKIAAAAQAhAWAMARIAAAAQAFAGABAGIAAAAIACAAIAAAAIAFAAIACgEIAAgEIAAAAQAAgNgQgOIAAAAQgVgNgJgIIAAAAQgMgMgFgNIAAAAIgEgIQgKgCgHgEIAAAAIgPgJIAAAAQgOgGgGgFIAAAAQgIgIAAgKIAAAAIABgIIAAAAQADgGAEgEIAAAAIACgJIAAAAIARg0QAEgKAFgDIAAAAIAGgBIAAAAIgGABIAAAAQgFADgEAKIAAAAIgRA0IgCAJIAAAAQgEAEgDAGIAAAAIgBAIIAAAAQAAAKAIAIIAAAAQAGAFAOAGIAAAAIAPAJIAAAAQAHAEAKACIAAAAIAEAIQAFANAMAMIAAAAQAJAIAVANIAAAAQAQAOAAANIAAAAIAAAEIAAAAIgCAEIgFAAIgCAAIAAAAQgBgGgFgGIAAAAQgMgRghgWIAAAAQgNgKgCgFIAAAAQgBgHgCgEIAAAAQgFgGgQgBIAAAAIgCAAIAAAAIgFgBIAAAAQgFgFgIgBIAAAAIgFgFIAAAAIAAgBIAAAAIAAABgAitiEIANgBIAAAAIgNABgAifiFIAAAAIAAAAIAAAAgAjGiWIACgBIAAAAIgCABgAjAiYQAPgDAOAAIAAAAQgOAAgPADgAiiibIAAAAIAAAAIAAAAgAk6inIABABIAAAAQAEABADAGIAAAAQACgDADgCIAAAAIAHgDIAAAAIgDgQIAAAAIgHgfIAAAAIAAgNIAAAAIAAgPIAAAAQABgPAGgIIAAAAQAGgHANgFIAAAAQANgHAIgCIAAAAQgIACgNAHIAAAAQgNAFgGAHIAAAAQgGAIgBAPIAAAAIAAAPIAAAAIAAANIAAAAIAHAfIAAAAIADAQIAAAAIgHADIAAAAQgDACgCADIAAAAQgDgGgEgBIAAAAIAAgDQACgDAAgFIAAAAIgBgHIAAAAQAAgIgDgEIAAAAIgBgCIAAAAIgCgBIAAAAIAAAAIAAAAIAAAAIAAAAIACABIAAA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");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_8_graphics_12,x:397.8,y:-36.7}).wait(2).to({graphics:null,x:0,y:0}).wait(15));

	// Layer_15
	this.instance_8 = new lib.plate_t_09();
	this.instance_8.setTransform(-640,-130);
	this.instance_8._off = true;

	this.instance_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({_off:true},2).wait(15));

	// Layer_14 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_10 = new cjs.Graphics().p("AgIHMIgRgBIAAAAQgHgDgEgEIAAAAIgDgCIAAAAIgCgEIAAAAIgPAAIAAAAQgPgBgUgDIAAAAIgbgFQgqgIgNgIIAAAAQgdgQgOgiIAAAAIgGgNIAAAAIgLgZIAAAAQgNgRgigMIAAAAIgRgIIAAAAQgggQgbgTIAAAAQgtgggJgkIAAAAQgIgZAKgjIAAAAIgIgPIAAAAQgHgOgWgUIAAAAQgXgWgHgMIAAAAQgGgKgEgLIAAAAQgQgtgBgaIAAAAIAAgJIAAAAIACAGIAAAAQADAMAEAHIAAAAIAFAHIAAAAIABADIAAAAIADAEIAJAbQADAKAGAGIAAAAIADAEIAAAAQAJALAMAKIAAAAIALAJQAGAGALAYIAAAAQAGANAJACIAAAAIABAAIAAAAIgBAAIAAAAQgJgCgGgNIAAAAQgLgYgGgGIAAAAIgLgJQgMgKgJgLIAAAAIgDgEIAAAAQgGgGgDgKIAAAAIgJgbIgDgEIgBgDIAAAAIgFgHIAAAAQgEgHgDgMIAAAAIgCgGIAAAAIAAgGIAAAAIABgCIAAAAQABgEAEgDIAAAAIAIgJIAAAAQAIgNAFgCIAAAAIAAAAQAEgBADABIAAAAIABAAIAGAEIAAAAQADAEAAADIAAAAQAAAGgFAGIAAAAIgJAKIAAAAQADADABAEIAAAAIAAAEIAAAAQAAAEgCADIAAAAIABAHIAHAKIAHAWIAFALIAAAAIAIAIIAAAAIAFAGIADACIAAAAQAEACACADIAAAAQADADAAADIAAAAQAEADAEAAIAAAAIACgIIgDgHIAAAAQgLgPgCgRIAAAAIAAgFIAAAAIABgGIAAAAQAEgIAJAAIAAAAQgJAAgEAIIAAAAIgBAGIAAAAIAAAFIAAAAQACARALAPIAAAAIADAHIAAAAIgCAIQgEAAgEgDIAAAAQAAgDgDgDIAAAAQgCgDgEgCIAAAAIgDgCIAAAAIgFgGIgIgIIAAAAIgFgLIAAAAIgHgWIgHgKIgBgHQACgDAAgEIAAAAIAAgEIAAAAQgBgEgDgDIAAAAIAJgKIAAAAQAFgGAAgGIAAAAQAAgDgDgEIAAAAIgGgEIAAAAQAHABAEAGIAAAAQACAFgBAHIAAAAIgEANIAAAAQgDAKAFAOIAAAAQAHAaAMATIAAAAQgMgiADgRIAAAAQADgRANgHIAAAAQAGg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AAQAXAJAEALIAAAAQADAHAAAGIAAAAIgBAGIAAAAIAGApIAIAQIABABIAHAGIAAAAIASAYIAOAXQARAfAXASIAAAAQAHAFAbARIAAAAIASAKIAAAAIgOgSIAAAAQgQgTgJgPIAAAAQgFgOgIgKIAAAAIgLgNQgfgbgKgZIAAAAIgIgdQgCgEAAgEIAAAAIAAgDIAAAAQgEgKgBgNIAAAAQAAgPADgHIAAAAQAHgZAbgIIAAAAIABgBIAAAAIgBABIAAAAQgbAIgHAZIAAAAQgDAHAAAPIAAAAQABANAEAKIAAAAIAAADIAAAAQAAAEACAEIAAAAIAIAdQAKAZAfAbIAAAAIALANQAIAKAFAOIAAAAQAJAPAQATIAAAAIAOASIAAAAIgSgKIAAAAQgbgRgHgFIAAAAQgXgSgRgfIAAAAIgOgXIgSgYIgHgGIAAAAIgBgBIgIgQIgGgpIABgGIAAAAQAAgGgDgHIAAAAQgEgLgXgJIAAAAIgYgFIAAAAIgcAEIAAAAIgRgBIAAAAQgJAAgHAFIAAAAQgIAHgCASIAAAAIAAAQIAAAAQAAAVADAhIAAAAQADAUAGALIAAAAIAJAVIAAAAIAMAaQAKAXAeAWIAAAAQAMAQAHAFIAAAAIAaASIAXAYIAAAAQAQAOALAFIAAAAIAQAGQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAAQAGAHAIAGIAAAAQgEADgHABgAjCDaIgCAAIAAAAIACAAgAjEDZIgBAAIAAAAIABAAgAgJDXIAJgQIAAAAIAehfIAJgRQACgIADgUIAAAAQAAgVADgJIAAAAQAFgOAOgPIAAAAIACAAIABgCIAAAAQALgPABgEIAAAAQAHgMAFgVIAAAAIAZhdQAMgnARgPIAAAAQAGgFAPgHIAAAAQAegQAQAAIAAAAIAPABIAAAAQAIAAAFgCIAAAAIANgJIACAAIAAAAIgCAAIAAAAIgNAJQgFACgIAAIAAAAIgPgBIAAAAQgQAAgeAQIAAAAQgPAHgGAFIAAAAQgRAPgMAnIAAAAIgZBdQgFAVgHAMIAAAAQgBAEgLAPIAAAAIgBACIAAAAIgCAAQgOAPgFAOIAAAAQgDAJAAAVIAAAAQgDAUgCAIIAAAAIgJARIgeBfIgJAQIAAAAQAJgmAIg7IAAAAIANhMQADgQAAgLIAAAAIAAgBIAEgNIADgGIAAAAIAHgRIACgIIAAAAIgBgEIAAAAQAHgJAEgIIAAAAIABgDIAAAAIACgEIgCAAIAAABIAAgBIAAAAQAAgOgKgGIAAAAQgHgGgTACIAAAAIgBAAIAAAAIABAAIAAAAQATgCAHAGIAAAAQAKAGAAAOIAAAAIAAABIAAAAIAAgBIACAAIgCAEIgBADIAAAAQgEAIgHAJIAAAAIABAEIAAAAIgCAIIAAAAIgHARIgDAGIAAAAIgEANIAAABQAAALgDAQIAAAAIgNBMQgIA7gJAmIAAAAIAAAAgAmNBuIAAAAIAAAAIAAAAgAmMBuQAIAAAFgLIAAAAQgFALgIAAgACtBDQANgLAUgNIAAAAQAmgaARgVIAAAAIAQgdQAag5ABhDIAAAAIAAgFIAAAAQAAgRADgHIAAAAIgBgKIAAAAQABgHACgFIAAAAIACgCIAAAAQACgHAIgEIAAAAQAEgCAEAAIAAAAQgEAAgEACIAAAAQgIAEgCAHIAAAAIgCACIAAAAQgCAFgBAHIAAAAIABAKIAAAAQgDAHAAARIAAAAIAAAFIAAAAQgBBDgaA5IAAAAIgQAdQgRAVgmAaIAAAAQgUANgNALIAAAAIAAgEIAAAAQAEgKAIgHIAAAAIAMgKQAZgWATgbIAAAAIAIgPIAAAAQAPgWAHgfIAAAAQAIgeAAgzIAAAAIAAgGIAAAAIADgeIACgTIAAAAIgBgEIAAAAQAAgFgDgDIAAAAIgDgEIAAAAIgFgDIAAAAIgFgDIAAAAIAFgEIAAAAQADgDAAgEIAAAAIAAgCIAAAAQgBgFgDgDIAAAAIgHgEQgHgDgGAAIAAAAQgHgCgDACIAAAAIgCABIAAAAQgDgCgFgBIAAAAIAAAAIAAAAIAAAAIAAAAQAFABADACIAAAAIACgBIAAAAQADgCAHACIAAAAQAGAAAHADIAAAAIAHAEQADADABAFIAAAAIAAACIAAAAQAAAEgDADIAAAAIgFAEIAAAAIAFADIAAAAIAFADIAAAAIADAEIAAAAQADADAAAFIAAAAIABAEIAAAAIgCATIAAAAIgDAeIAAAGIAAAAQAAAzgIAeIAAAAQgHAfgPAWIAAAAIgIAPIAAAAQgTAbgZAWIAAAAIgMAKQgIAHgEAKIAAAAIAAAEIAAAAIAAAAgAHfAfQAEAAADgHIAAAAIANghIADgIIAAAAIgBgBIAAAAQAAgEgEgCIAAAAIAAgBIAAAAIAAABIAAAAQAEACAAAEIAAAAIABABIAAAAIgDAIIAAAAIgNAhQgDAHgEAAIAAAAIgFAAIAAAAIAFAAIAAAAIAAAAgAl9gtQADADAEANIAAAAQABAEAGANIAAAAQADAKAAAFIAAAAQAAgFgDgKIAAAAQgGgNgBgEIAAAAQgEgNgDgDIAAAAIAAgBIAAgBIgBABIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAABgAHCABIAAAAIAAAAIAAAAgAHYgTQgDACgFAHIAAAAIgJAKIgFABIAAAAIAFgBIAAAAIAJgKQAFgHADgCIAAAAIABgBIAAAAIgBABgAGTgEIAAAAIAAAAIAAAAgAGVgRIAAgDIAAAAIAAADgAmegZQAHABAGAFIAAAAQADgCAAgFIAAAAIgBgCIAAAAIgBgKIAAAAQAAgIAHgBIAAAAIAFgCIAAAAIgFACIAAAAQgHABAAAIIAAAAIABAKIAAAAIABACIAAAAQAAAFgDACIAAAAQgGgFgHgBIAAAAIgBAAIAAAAIABAAgAHZgUIAFgBIAAAAIgFABgAHigUQAEgGAEAAIAAAAIAAAAIAAAAIAAAAIAAAAQgEAAgEAGIAAAAIAAAAgAHfgVIAAAAIAAAAIAAAAgAGrgXIAAgBIAAAAIAAABgAGWgZIAAABIAAAAIAAgBIAAAAIAAAAgAmggZIAAAAIAAAAIAAAAgAHqgaIABAAIAAAAIgBAAgAHrgaIAAAAIAAAAIAAAAgAGWgbQACgGADAAIAAAAQgDAAgCAGgAGrgbIAAAAIAAAAIAAAAgAGrgbIgBgGIAAAAIABAGgAGjgcIgBAAIAAAAIABAAgAGmgnQAAALgDAAIAAAAQADAAAAgLIAAAAIABgEIAAAAIgBAEgAGigcIAAAAIAAAAIAAAAgAGfgeIABAAIAAAAIgBAAIAAAAIAAAAgAGfgeIgBgBIAAAAIABABgAGcggIgBgBIAAAAIABABgAGngrIAAgCIAAAAIAAACgAGogsIAAgBIAAAAIAAABgAGogtIgBAAIAAAAIABAAgAmDgxIgBAAIAAAAIABAAgAgVhQIAAAAIAAAAIAAAAgAgUhQQAUAAAMgCIAAAAQgMACgUAAgAiWiEQANAFAWATIAAAAIAgAMIAAAAIAMAKQACACAPADIAAAAIACAAIAAAAIgCAAIAAAAQgPgDgCgCIAAAAIgMgKIgggMIAAAAQgWgTgNgFIAAAAIgBgBIAAAAIABABgAAShaIgCAAIAAAAIACAAgAAShaIABAAIAAAAIgBAAgAAQhaIgBAAIAAAAIABAAgAAthbIAAAAIAAAAIAAAAgAAthbIABAAIAAAAIgBAAgAAOhbIgCAAIAAAAIACAAgAAlhcIgBgBIAAAAIABABgAAEhdIAAAAIAAAAIAAAAgAACheIgBAAIAAAAIABAAgAgJipQABALAEANIAAAAQABAGACAFIAAAAIAFAJIAAAAIADADIAAAAIAQAHIAAAAQAHADACAFIAAAAQAGgIAAgEIAAAAIAAgBIAAAAQAAgFgMgGIAAAAQgPgKgFgUIAAAAQgCgJAAgPIAAAAIAAgNIAAAAIABgVIABgNIAAAAIgEgHQgCgGAAgDIAAAAQgggRgRgdIAAAAIgGgMIAAAAIgFgOIgEgGIAAAAIgHgFIgJgHIAAAAQgFgDgBgDIAAAAIgHgPIgGgNIAAAAQgCgEAAgFIAAAAIABgEIAAAAQABgFAEgGIAAAAQAJgPAHgRIAAAAQAEgKAFgCIAAAAIABAAIAAAAIgBAAIAAAAQgFACgEAKIAAAAQgHARgJAPIAAAAQgEAGgBAFIAAAAIgBAEIAAAAQAAAFACAEIAAAAIAGANIAAAAIAHAPQABADAFADIAAAAIAJAHIAAAAIAHAFIAEAGIAAAAIAFAOIAGAMIAAAAQARAdAgARIAAAAQAAADACAGIAAAAIAEAHIgBANIAAAAIgBAVIAAANIAAAAQAAAPACAJIAAAAQAFAUAPAKIAAAAQAMAGAAAFIAAAAIAAABIAAAAQAAAEgGAIIAAAAQgCgFgHgDIAAAAIgQgHIAAAAIgDgDIAAAAIgFgJIAAAAQgCgFgBgGIAAAAQgEgNgBgLIAAAAIABgNIAAAAIABgOIAAAAIABgJIgCgKIAAAAQgCgIgDgHIAAAAQgFgKgNgIIAAAAQgLgIgDgEIAAAAIgGgLQgEgGgIgGIAAAAQgDgCgBgDIAAAAIgBgHIAAAAQAAgIgDgEIAAAAQgEgEgEAAIAAAAIgFgIIAAAAQgNgSgRgGIAAAAQgIgDgIABIAAAAIgBAAIgSgKIASAKIABAAQAIgBAIADIAAAAQARAGANASIAAAAIAFAIIAAAAQAEAAAEAEIAAAAQADAEAAAIIAAAAIABAHIAAAAQABADADACIAAAAQAIAGAEAGIAAAAIAGALQADAEALAIIAAAAQANAIAFAKIAAAAQADAHACAIIAAAAIACAKIAAAAIgBAJIgBAOIAAAAIgBANIAAAAIAAAAgAkxh6IgBAAIAAAAIgCAAIAAAAIgFgBIAAAAIgKgCIAAAAIgEgCIAAAAQgFgDgEgEIAAAAQgFgHAAgKIAAAAIAAgHIAAAAQAEgRABgJIAAAAIABgKIAAAAQACgFAFgBIAAAAIABAAIAAAAIgBAAIAAAAQgFABgCAFIAAAAIgBAKIAAAAQgBAJgEARIAAAAIAAAHIAAAAQAAAKAFAHIAAAAQAEAEAFADIAAAAIABACIAAAAIADAAIAKACIAAAAIAFABIAAAAIACAAIAAAAIABAAgAkqh7IAAAAIAAAAIAAAAgAkqh7QAEAAADgDIAAAAQgDADgEAAgAkrh7IgBAAIAAAAIABAAgAiejUQAIABADAEIAAAAQACAEABAHIAAAAQACAFANAKIAAAAQAhAWAMARIAAAAQAFAGABAGIAAAAIACAAIAAAAIAFAAIACgEIAAgEIAAAAQAAgNgQgOIAAAAQgVgNgJgIIAAAAQgMgMgFgNIAAAAIgEgIQgCgDgGgDIAAAAIgGgDIAAACIAAAAIAAADIAAAAQgBAEgDADIAAAAIgDACIAAAAIgBACIAAAAIAAAAgAitiEIANgBIAAAAIgNABgAifiFIAAAAIAAAAIAAAAgAjGiWIACgBIAAAAIgCABgAjAiYQAPgDAOAAIAAAAQgOAAgPADgAiiibIAAAAIAAAAIAAAAgAkgieIgFgGIAAAAQgCgFgCgOIAAAAIgHgfIAAAAIAAgNIAAAAIAAgPIAAAAQABgPAGgIIAAAAQAGgHANgFIAAAAQANgHAIgCIAAAAQgIACgNAHIAAAAQgNAFgGAHIAAAAQgGAIgBAPIAAAAIAAAPIAAAAIAAANIAAAAIAHAfIAAAAQACAOACAFIAAAAIAFAGIAAAAIgRgMIAAAAIgGgDIAAAAIAAgDIAAAAIgBgIIAAAAQAAgIgDgEIAAAAIgBgCIAAAAIgCgBIAAAAIAAAAIAAAAIAAAAIAAAAIACABIAAAAIABACIAAAAQADAEAAAIIAAAAIA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");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_9_graphics_10,x:397.8,y:-36.7}).wait(2).to({graphics:null,x:0,y:0}).wait(17));

	// Layer_13
	this.instance_9 = new lib.plate_t_09();
	this.instance_9.setTransform(-640,-130);
	this.instance_9._off = true;

	this.instance_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({_off:true},2).wait(17));

	// Layer_12 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_8 = new cjs.Graphics().p("AgjEvIgOgBIAAAAQgGgCgEgDIAAAAIgCgCIAAAAIgBgDIAAAAIgNAAIAAAAIgcgEIAAAAIgXgEQgigHgLgHIAAAAQgYgOgLgcIAAAAIgFgMIAAAAIgIgVIAAAAQgKgOgcgLIAAAAIgOgHIAAAAQgbgNgWgQIAAAAQgkgcgHgeIAAAAQgHgaANgmIAAAAIAKgWIAAAAQAIgWACgNIAAAAQAGgVADgJIAAAAIgJg+IAAgBQgDgcAHgMIAAAAQAJgPAdgCIAAAAIBbgGQAFgHAIgGIAAAAIACgCIAAAAQAWgRAXAGIAAAAQAIAEANAIIAAAAIAKAJIAAAAQAXASAJAFIAAAAQAJAEAMACIAAAAQALACAPAAIAAAAQAiAAALAEIAAAAIAHACIAAAAIAGgFIAIgCQAFABAEAEIAAAAIAHgTIAAAAQAIgnAIgRIAAAAIABgCIAAAAQAMgcAggMIAAAAQATgIAngEIAAAAQAlgFAcABIAAAAQAtAGAYAbIAAAAQAOAPAHAVIAAAAQAFAVgGATIAAAAQAIATABAQIAAAAIgBAWIAAAAIABABIAAAAQAPAQAMAlIAAAAQAKAjAAAUIAAAAQgBANgJAYIAAAAQgQA0gTAjIAAAAQg9BzijA8IAAAAIgSAIIAAAAIgeAJIAAAAIgGAEIAAAAQgFADgIACIAAAAIgPAEIgTADIAAAAIgOACgAgVEKIADAIIAAAAQADANAPAAIAAAAIAOgGQAHgDAPgDIAAAAQANgCAdgNIAAAAIAjgQIAAAAIgBgDIAAAAIABgEIAAAAQADgQAEgFIAAAAIAIgLIAEgIIAAAAIADgGIAAAAQAHAAAEgIIAAAAIACgCIAAAAQAHgFAAgGIAAAAIAAgBIAAAAQgBgGgKgDIAAAAIgEgGIAAAAIgOgHIAAAAIgHgFIgMgEIAAAAQgHgCgDgEIAAAAQgDgEAAgGIAAAAIACgMIAAAAIAGgnIAAgIIAAAAIgBgJIAAAAIgFgMIAAAAQgEgJgDgDIAAAAQADADAEAJIAAAAIAFAMIAAAAIABAJIAAAAIAAAIIAAAAIgGAnIgCAMIAAAAQAAAGADAEIAAAAQADAEAHACIAAAAIAMAEIAAAAIAHAFIAOAHIAAAAIAEAGIAAAAQAKADABAGIAAAAIAAABIAAAAQAAAGgHAFIAAAAIgCACIAAAAQgEAIgHAAIAAAAIgDAGIAAAAIgEAIIAAAAIgIALQgEAFgDAQIAAAAIgBAEIAAAAIABADIAAAAIgjAQIAAAAQgdANgNACIAAAAQgPADgHADIAAAAIgOAGQgPAAgDgNIAAAAIgDgIIAAAAIgCgKIAAAAIABgJIAAAAIAEgJIAAAAIAAgDIAAAAIAAgIIAEgNIAQgqIAGgJQAEgIANgNIAAAAIAFgDIAJgbIAAAAIgBAAIAAAAIgFgBIAAAAIAFABIAAAAIABAAIAAAAIgJAbIAAAAIgFADQgNANgEAIIAAAAIgGAJIgQAqIgEANIAAAIIAAADIAAAAIgEAJIAAAAIgBAJIAAAAIACAKgAhCEdIAAAAIAAAAIAAAAgAhBEdQAGgBAEgEIAAAAQgEAEgGABgAhGEcIgBAAIAAAAIgHgFIgNgGIAAAAIgGgDIAAAAIgJgEIAAAAQgKgEgGgHIAAAAIgTgIIAAAAQgqgTgUguIAAAAQgIgTgFgFIAAAAIgGgGIAAAAIgJgEIAAAAIgDgBIAAAAQgigJgPgJIAAAAIgGgFIAAAAIgJgGIAAAAQgPgLgIgTIAAAAQgHgSAAgRIAAAAIAAgEIAAAAQAAgIADgGIAAAAIAFgXIAAAAIAGgPIADAEIAAAAQAGAMARAOIAAAAQAtAmA2AfIAAAAIABAAIAAAAIgBAAIAAAAQg2gfgtgmIAAAAQgRgOgGgMIAAAAIgDgEIAAAAIgGAPIgFAXIAAAAQgDAGAAAIIAAAAIAAAEIAAAAQAAARAHASIAAAAQAIATAPALIAAAAIAJAGIAAAAIAGAFIAAAAQAPAJAiAJIAAAAIADABIAAAAIAJAEIAAAAIAGAGIAAAAQAFAFAIATIAAAAQAUAuAqATIAAAAIATAIIAAAAQAGAHAKAEIAAAAIAJAEIAAAAIAGADIAAAAIANAGIAAAAIAHAFIABAAgAg2EXIAAAAIAAAAIAAAAIAAAAQAGgFAAgHIAAAAIgBgHIAAAAIgDgIIAAAAQgLgLgMgGIAAAAIgCgCIAAAAIgIgJIAAAAQgFgJgDgNIAAAAIgHgYQgDgTAAgKIAAAAIgBgGIAAAAQAAgGADgDIAAAAQACgFAEgBIAAAAIADgBIAAAAIAAAGIAAAAIgBAIIAAAAIABAHIAAAAIADAIIAAAAIABAMIAOAdIABAGIADACQAAADACACIAAAAIA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AAAEgDIAAAAQgEADgFAAgAihBjIABAAIAAAAQgHgFgFgGIAAAAIgBgBIAAAAIgMgFQgKgEgMgNIAAAAIgTgUIAAAAIgWgPQgFgEgKgOIAAAAQgYgRgIgUIAAAAIgJgWQgGgLgCgGIAAAAQgEgKgCgTIAAAAQgDgYAAgSIAAAAIABgRIAAAAQACgPAHgHIAAAAQAFgEAIAAIAAAAIAOABIAAAAIAXgEIAAAAIAUAFIAAAAQASAIAEAJIAAAAQACAGAAAFIAAAAIgBAFIAAAAIAFAjIAGANIABABIAFAHIAAAAIAPAVIALATQAOAbASAPIAAAAQAGAFAWAMIAAAAIAPAIIAAAAIgMgPIAAAAQgMgOgHgNIAAAAQgFgMgGgJIAAAAIgJgKQgZgYgIgWIAAAAIgGgZIgCgHIAAAAIABgDIAAAAQgEgIAAgLIAAAAQAAgNACgGIAAAAQAGgVAXgHIAAAAIABAAIAAAAIgBAAIAAAAQgXAHgGAVIAAAAQgCAGAAANIAAAAQAAALAEAIIAAAAIgBADIAAAAIACAHIAAAAIAGAZQAIAWAZAYIAAAAIAJAKQAGAJAFAMIAAAAQAHANAMAOIAAAAIAMAPIAAAAIgPgIIAAAAQgWgMgGgFIAAAAQgSgPgOgbIAAAAIgLgTIgPgVIgFgHIAAAAIgBgBIgGgNIgFgjIABgFIAAAAQAAgFgCgGIAAAAQgEgJgSgIIAAAAIgUgFIAAAAIgXAEIAAAAIgOgBIAAAAQgIAAgFAEIAAAAQgHAHgCAPIAAAAIgBARIAAAAQAAASADAYIAAAAQACATAEAKIAAAAQACAGAGALIAAAAIAJAWQAIAUAYARIAAAAQAKAOAFAEIAAAAIAWAPIATAUIAAAAQAMANAKAEIAAAAIAMAFIABABIAAAAQAFAGAHAFIAAAAIgBAAgAghBfIAKgOIAAAAIAZhRIAHgMQACgHACgSIAAAAQABgRADgIIAAAAQAEgMAMgNIAAAAIABAAIABgDIAAAAQAKgNABgDIAAAAQAGgKAEgTIAAAAIAWhOQALgiAOgMIAAAAQAFgFALgFIAAAAIABACIAAAAQAEAFAKACIAAAAQAFACABABIAAAAIAAADIAAAAIAAACIAAAAIgEAYQgCAMgDAFIAAAAIgHAKQgDAHgCANIAAAAQgBAPgCAGIAAAAIgKAQIAAAAIgGAPIAAAAQgEALgEAFIAAAAIgHAJIAAAAQgCAEAAADIAAAAQAAADABACIAAAAIABACIAAAAIgBgCIAAAAQgBgCAAgDIAAAAQAAgDACgEIAAAAIAHgJIAAAAQAEgFAEgLIAAAAIAGgPIAAAAIAKgQIAAAAQACgGABgPIAAAAQACgNADgHIAAAAIAHgKQADgFACgMIAAAAIAEgYIAAgCIAAAAIAAgDIAAAAQgBgBgFgCIAAAAQgKgCgEgFIAAAAIgBgCIAAAAQgLAFgFAFIAAAAQgOAMgLAiIAAAAIgWBOQgEATgGAKIAAAAQgBADgKANIAAAAIgBADIAAAAIgBAAQgMANgEAMIAAAAQgDAIgBARIAAAAQgCASgCAHIAAAAIgHAMIgZBRIgKAOIAAAAQAKghAIgyIAAAAIAMg/QADgNAAgKIAAAAIAAgBIACgLIACgHIAAAAIAGgOIACgHIAAAAIgBgDIAAAAQAGgIADgHIAAAAIABgDIAAAAIACgDIgBAAIgBABIAAgBIAAAAQAAgMgHgFIAAAAIAAAAIAAAAIAAAAIAAAAQAHAFAAAMIAAAAIAAABIAAAAIABgBIABAAIgCADIgBADIAAAAQgDAHgGAIIAAAAIABADIAAAAIgCAHIAAAAIgGAOIgCAHIAAAAIgCALIAAABQAAAKgDANIAAAAIgMA/QgIAygKAhIAAAAIAAAAgAAEBFIADgDIAEgEIAFgEIAIgHIAAAAIADgBIAAAAIAEgHIAAAAQAFgJAEgEIAAAAQAGgFAQgBIAAAAIAHgBIAAAAIgHABIAAAAQgQABgGAFIAAAAQgEAEgFAJIAAAAIgEAHIAAAAIgDABIAAAAIgIAHIAAAAIgFAEIgEAEIgDADIgCgEIAAAAIABgDIAAAAQABgFAGgIIAAAAQAXgaASgHIAAAAIAAAAIAAAAQAKgEALAAIAAAAQgLAAgKAEIAAAAIAAAAIAAAAQgSAHgXAaIAAAAQgGAIgBAFIAAAAIgBADIAAAAIACAEgABFAXIAAAAIAAAAIAAAAgABJAMIgBAAIAAAAIABAAgAB4geIAcgUIAAAAQAggWAOgUIAAAAIAOgYQAWgxACg5IAAAAQAAgSADgHIAAAAIgBgIIAAAAQAAgGADgEIAAAAIACgCIAAAAQABgGAHgEIAAAAQgHAEgBAGIAAAAIgCACIAAAAQgDAEAAAGIAAAAIABAIIAAAAQgDAHAAASIAAAAQgCA5gWAxIAAAAIgOAYQgOAUggAWIAAAAIgcAUIAAAAIAAgDIAAAAQAEgJAGgGIAAAAIAKgIQAVgTAQgYIAAAAIAIgNIAAAAQAMgTAGgaIAAAAQAIgcAAgvIAAAAIADgZIACgQIAAAAIAAgEIAAAAQgBgIgIgFIAAAAQgHgFgHADIAAAAIgLAHQgEACgHAAIAAAAIgMgBIAAAAQgIAAgMAFIAAAAIAAAAQAOAFADAEIAAAAQAEAEAAAHIAAAAIAAAEIAAAAIgBAKIAAAAQgEAfgHANIAAAAIgHANIAAAAIgCAQIAAAAQgBALgCAFIAAAAQgCAHgKAOIAAAAIgFAOIAAAAQgGANgHAKIAAAAQgFAHgFACIAAAAIgEABIAAAAIAEgBIAAAAQAFgCAFgHIAAAAQAHgKAGgNIAAAAIAFgOIAAAAQAKgOACgHIAAAAQACgFABgLIAAAAIACgQIAAAAIAHgNIAAAAQAHgNAEgfIAAAAIABgKIAAAAIAAgEIAAAAQAAgHgEgEIAAAAQgDgEgOgFIAAAAIAAAAQAMgFAIAAIAAAAIAMABIAAAAQAHAAAEgCIAAAAIALgHQAHgDAHAFIAAAAQAIAFABAIIAAAAIAAAEIAAAAIgCAQIAAAAIgDAZQAAAvgIAcIAAAAQgGAagMATIAAAAIgIANIAAAAQgQAYgVATIAAAAIgKAIQgGAGgEAJIAAAAIAAADIAAAAIAAAAgAhkhXIgBAAIAAAAIABAAgAhkhXIABAAIAAAAIgBAAgAhXiFIgCAgIAAAAIgBAIIAAAAQgCAGgGAAIAAAAQAGAAACgGIAAAAIABgIIAAAAIACggIAAAAIABgRIAAAAQAAgHgBgFIAAAAIgEgJIACABIAAAAIALAJIAOAEIAAAAIADAAIAAAAIgDAAIAAAAIgOgEIAAAAIgLgJIgCgBIAAAAIAEAJQABAFAAAHIAAAAIgBARgABbhYIAAAAIAAAAIAAAAgAE8hZIAAAAIAAAAIAAAAgAhqhZIgBgCIAAAAIABACgAhthmQAAAIACADIAAAAIAAAAIAAAAIAAAAIAAAAQgCgDAAgIIAAAAIABgfIACgRIAAAAIAAgCIAAAAIgDgKIAAAAIgCgEIgMgRQgFgFgBgEIAAAAQgIgHgGgCIAAAAIgBAAIAAAAIABAAIAAAAQAGACAIAHIAAAAQABAEAFAFIAAAAIAMARIACAEIADAKIAAAAIAAACIAAAAIgCARIAAAAIgBAfgAgkicIgBAAIAAAAIABAAgAgkicQASAAALgCIAAAAQgLACgSAAgAgGieIAGgBIAAAAIgGABgAAAifIAAAAIAAAAIAAAAgAiijJIABAAIAAAAIgBAAgAihjJIAKgBIAAAAIgKABgAiSjKIgBAAIAAAAIABAAgAiWjKIgBAAIAAAAIABAAgAD4kVIAGgBIAAAAIgGABgAEBkWIgBAAIAAAAIABAAgAD+kWIAAAAIAAAAIAAAAgAhLEkIANAAIAAAAIABADIAAAAIACACIAAAAIgQgFgAAsEjIAGgEIAAAAIAegJIAAAAIgdAMIAAAAIgUAGIAAAAQAIgCAFgDgAj5hXIAAAAIAEALIgEgLg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_10_graphics_8,x:400.5,y:-21.1}).wait(2).to({graphics:null,x:0,y:0}).wait(19));

	// Layer_11
	this.instance_10 = new lib.plate_t_09();
	this.instance_10.setTransform(-640,-130);
	this.instance_10._off = true;

	this.instance_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({_off:true},2).wait(19));

	// Layer_10 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_6 = new cjs.Graphics().p("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AAAIAAAAIgCAAgAg5DPIgBgBIAAAAIABABgAEDh5QgEAPgKAIIAAAAIgCAFIAAAAQgEAGgIAAIAAAAIgGAJIAAAAIgKANQgEAGgIAOIAAAAQghA+gnA5IAAAAQgfAsgPAZIAAAAIAJgHIAAAAQAUgOALgPIAAAAQAHgJAKgUIAAAAIARgcIAAAAQAGgJAXgZIAAAAQATgSAIgQIAAAAQAEgIAHgSIAAAAQAJgPAJgDIAAAAIAGgCIAEgIQAEgKAJgDIAAAAIACgEIAAAAIACADIAAAAIABAAIAAAAIgBAAIAAAAIgCgDIAAAAIgCAEIAAAAQgJADgEAKIAAAAIgEAIIgGACQgJADgJAPIAAAAQgHASgEAIIAAAAQgIAQgTASIAAAAQgXAZgGAJIAAAAIgRAcIAAAAQgKAUgHAJIAAAAQgLAPgUAOIAAAAIgJAHIAAAAQAPgZAfgsIAAAAQAng5Ahg+IAAAAQAIgOAEgGIAAAAIAKgNIAGgJIAAAAQAIAAAEgGIAAAAIACgFIAAAAQAKgIAEgPIAAAAQABgFAAgVIAAAAIAAgqQAAgPgCgHIAAAAQAAgGgCgGIAAAAQgCgHgBgCIAAAAQgBgDgEgEIAAAAIgGgNIgJgLIgJgHIAJAHIAJALIAGANQAEAEABADIAAAAQABACACAHIAAAAQACAGAAAGIAAAAQACAHAAAPIAAAAIAAAqQAAAVgBAFgAAcBsIAAAAIAAAAIAAAAgAiTBjIgBAAIAAAAIABAAgAiTBjQAEAAADgCIAAAAQgDACgEAAgAiMBhIABAAIAAAAIgBAAgAiLBgIgKgLIAAAAIAAgBIAAAAIgLgFQgIgEgLgLIAAAAIgRgUIAAAAIgSgPQgFgEgJgNIAAAAQgUgRgHgTIAAAAIgIgWQgFgLgCgGIAAAAQgEgJgBgSIAAAAQgCgaAAgRIAAAAIAAgPIAAAAQACgPAGgGIAAAAQAFgEAGAAIAAAAIANABIAAAAIATgEIAAAAIASAFIAAAAQAPAHADAJIAAAAQACAGAAAFIAAAAIAAAFIAAAAIAEAiIAFANIABABIAEAHIAAAAIANATIAJATQANAaAQAPIAAAAQAEAFAUAMIAAAAIAMAIIAAAAIgKgPIAAAAQgKgOgGgNIAAAAQgEgLgGgJIAAAAIgHgKQgWgXgHgVIAAAAIgGgYIgBgHIAAAAIABgDIAAAAQgDgIAAgLIAAAAQAAgNABgGIAAAAQAGgUATgHIAAAAQgTAHgGAUIAAAAQgBAGAAANIAAAAQAAALADAIIAAAAIgBADIAAAAIABAHIAAAAIAGAYQAHAVAWAXIAAAAIAHAKQAGAJAEALIAAAAQAGANAKAOIAAAAIAKAPIAAAAIgMgIIAAAAQgUgMgEgFIAAAAQgQgPgNgaIAAAAIgJgTIgNgTIgEgHIAAAAIgBgBIgFgNIgEgiIAAgFIAAAAQAAgFgCgGIAAAAQgDgJgPgHIAAAAIgSgFIAAAAIgTAEIAAAAIgNgBIAAAAQgGAAgFAEIAAAAQgGAGgCAPIAAAAIAAAPIAAAAQAAARACAaIAAAAQABASAEAJIAAAAQACAGAFALIAAAAIAIAWQAHATAUARIAAAAQAJANAFAEIAAAAIASAPIARAUIAAAAQALALAIAEIAAAAIALAFIAAABIAAAAIAKALIAAAAIAAAAgAgcBcIAIgOIAAAAIAVhOIAGgMQADgHABgRIAAAAQABgRACgIIAAAAQAEgLALgMIAAAAIAAAAIABgDIAAAAQAJgNAAgDIAAAAQAGgKADgSIAAAAIAUhNQAJggAMgMIAAAAQAEgFALgGIAAAAQAVgNAMAAIAAAAIALABIAAAAQAGAAADgCIAAAAIAKgHQAGgDAGAFIAAAAQAHAFAAAIIAAAAIABADIAAAAIgCAQIAAAAIgCAYQgBAugGAbIAAAAQgGAagKASIAAAAIgHANIAAAAQgOAXgSASIAAAAIgIAIQgGAGgEAJIAAAAIAAADIAAAAIAZgUIAAAAQAbgWAMgSIAAAAIANgYQATgwABg4IAAAAQAAgRADgGIAAAAIAAgHIAAAAQAAgHACgEIAAAAIABgCIAAAAQACgGAFgDIAAAAQgFADgCAGIAAAAIgBACIAAAAQgCAEAAAHIAAAAIAAAHIAAAAQgDAGAAARIAAAAQgBA4gTAwIAAAAIgNAYQgMASgbAWIAAAAIgZAUIAAAAIAAgDIAAAAQAEgJAGgGIAAAAIAIgIQASgSAOgXIAAAAIAHgNIAAAAQAKgSAGgaIAAAAQAGgbABguIAAAAIACgYIACgQIAAAAIgBgDIAAAAQAAgIgHgFIAAAAQgGgFgGADIAAAAIgKAHQgDACgGAAIAAAAIgLgBIAAAAQgMAAgVANIAAAAQgLAGgEAFIAAAAQgMAMgJAgIAAAAIgUBNQgDASgGAKIAAAAQAAADgJANIAAAAIgBADIAAAAIAAAAQgLAMgEALIAAAAQgCAIgBARIAAAAQgBARgDAHIAAAAIgGAMIgVBOIgIAOIAAAAQAIgfAHgxIAAAAIALg+QACgNAAgJIAAAAIAAgBIABgKIACgHIAAAAIAGgOIABgIIAAAAIAAgCIAAAAQAFgHACgHIAAAAIABgDIAAAAIACgDIgBAAIgBABIAAgDIAAAAQAAgKgGgFIAAAAQAGAFAAAKIAAAAIAAADIAAAAIABgBIABAAIgCADIgBADIAAAAQgCAHgFAHIAAAAIAAACIAAAAIgBAIIAAAAIgGAOIgCAHIAAAAIgBAKIAAABQAAAJgCANIAAAAIgLA+QgHAxgIAfIAAAAIAAAAgAEThWIAAAAIAAAAIAAAAgAERhWIAAAAIAAAAIAAAAgAEShWIgBAAIAAAAIABAAgAgfiYIgBAAIAAAAIABAAgAgfiYQAPAAAKgCIAAAAQgKACgPAAgAgoiYIgCgBIAAAAIACABgAh7jEQAJAEAPAQIAAAAIAWAKIAAAAIAJAJIAMAEIAAAAIAFAAIAAAAIgFAAIAAAAIgMgEIAAAAIgJgJIgWgKIAAAAQgPgQgJgEIAAAAIAAAAgAgFiaIAAAAgAgEiaIAEgBIAAAAIgEABgAAAibIAAAAIAAAAIAAAAgAiLjDIAJgBIAAAAIgJABgAh+jEIAAAAIAAAAIAAAAgAiBjEIgBAAIAAAAIABAAgADWkNIAAgBIAAAAIAAABgADWkOIAFgBIAAAAIgFABgADckPIAAAAgADckPIAAAAIAAAAIAAAAgAAmEbIAFgEIAAAAIAagJIAAAAIgZAMIAAAAIgRAHIAAAAIALgGgAhBEcIAMAAIAAAAIABADIAAAAIABACIAAAAIgOgFg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_11_graphics_6,x:400.2,y:-20.4}).wait(2).to({graphics:null,x:0,y:0}).wait(21));

	// Layer_9
	this.instance_11 = new lib.plate_t_09();
	this.instance_11.setTransform(-640,-130);
	this.instance_11._off = true;

	this.instance_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({_off:true},2).wait(21));

	// Layer_8 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_4 = new cjs.Graphics().p("AgYDkIgJgBIAAAAIgHgDIAAAAIgBgCIAAAAIgBgCIAAAAIgJAAIAAAAQgIgBgLgCIAAAAIgQgDQgXgGgIgEIAAAAQgQgLgIgWIAAAAIgDgIIAAAAIgGgQIAAAAQgHgLgTgIIAAAAIgKgFIAAAAQgSgKgPgMIAAAAQgZgVgEgXIAAAAQgFgTAJgdIAAAAIAHgQIAAAAIAHgaIAAAAQADgQADgGIAAAAIgGgvIAAgBQgDgWAFgIIAAAAQAGgMAUgBIAAAAIA+gFIAJgKIAAAAIACgBIAAAAQAPgNAPAFIAAAAQAHACAIAHIAAAAIAHAGIAAAAQAQAOAGAEIAAAAQAGADAIACIAAAAQAIABAKAAIAAAAQAXAAAIADIAAAAIAEABIAAAAIAEgDIAGgBQADAAADADIAAAAIAFgOIAAAAQAFgdAGgNIAAAAIAAgCIAAAAQAJgVAWgJIAAAAQAMgGAcgDIAAAAQAZgEATABIAAAAQAeAEARAUIAAAAQAKAMAEAQIAAAAQAEAPgEAPIAAAAQAFAPABALIAAAAIgBARIAAAAIABABIAAAAQALALAHAdIAAAAQAIAagBAPIAAAAQgBAJgGASIAAAAQgKAngNAbIAAAAQgqBWhwAuIAAAAIgMAFIAAAAIgVAHIAAAAIgEADIAAAAIgIAFIAAAAIgLACIgMACIAAAAIgKACgAgODJIACAGIAAAAQACAJAKAAIAAAAIAJgFIAQgEIAAAAQAJgBAUgKIAAAAQAkgSAbgSIAAAAIAUgPQANgHAIgKIAAAAIAPgQIAAAAQAageAHgUIAAAAIAJgbIAAAAIAGgMQAJgTAAgiIAAAAQAAAigJATIAAAAIgGAMIgJAbIAAAAQgHAUgaAeIAAAAIgPAQIAAAAQgIAKgNAHIAAAAIgUAPQgbASgkASIAAAAQgUAKgJABIAAAAIgQAEIAAAAIgJAFQgKAAgCgJIAAAAIgCgGIAAAAIgBgKIAAAAIAAgFIAAAAIADgHIAAAAIAAgCIAAAAIAAgGIADgKIALgfIADgHQADgGAJgKIAAAAIADgCIAGgUIAAAAIgGAUIAAAAIgDACQgJAKgDAGIAAAAIgDAHIgLAfIgDAKIAAAGIAAACIAAAAIgDAHIAAAAIAAAFIAAAAIABAKgAjbBCQAFAPAKAIIAAAAIAGAFIAAAAIAFADIAAAAQAKAHAXAHIAAAAIACAAIAAAAIAGAEIAAAAIAFAEIAAAAQADAEAGAOIAAAAQANAiAdAPIAAAAIANAGIAAAAQAEAGAHADIAAAAIAGADIAAAAIAEACIAAAAIAJAEIAAAAIAFAEQAHACAFgGIAAAAQADgEAAgFIAAAAIAAgFIAAAAIgCgGIAAAAQgHgJgJgEIAAAAIgCgCIAAAAIgFgGIAAAAQgDgHgCgKIAAAAIgFgSQgCgOAAgIIAAAAIgBgEIAAAAQAAgFACgCIAAAAQACgEACgBIAAAAIACgBIAAAAIABAFIAAAAIgBAGIAAAAIABAFIAAAAIACAHIAAAAIAAAJIAKAVIAAAFIACACIACADIAAAAIABABIAAAAIgBgBIAAAAIgCgDIAAAAIgCgCIAAgFIgKgVIAAgJIgCgHIAAAAIgBgFIAAAAIABgGIAAAAIgBgFIAAAAIgCABIAAAAQgCABgCAEIAAAAQgCACAAAFIAAAAIABAEIAAAAQAAAIACAOIAAAAIAFASQACAKADAHIAAAAIAFAGIAAAAIACACIAAAAQAJAEAHAJIAAAAIACAGIAAAAIAAAFIAAAAQAAAFgDAEIAAAAQgFAGgHgCIAAAAIgFgEIgJgEIAAAAIgEgCIAAAAIgGgDIAAAAQgHgDgEgGIAAAAIgNgGIAAAAQgdgPgNgiIAAAAQgGgOgDgEIAAAAIgFgEIAAAAIgGgEIAAAAIgCAAIAAAAQgXgHgKgHIAAAAIgFgDIAAAAIgGgFIAAAAQgKgIgFgPIAAAAQgFgNAAgOIAAAAQAAAOAFANgAgbCvIADgRIAAAAQADgPANgSIAAAAIALgYQAIgMAEgDIAAAAIAAAAIAAAAIAAAAIAAAAQgEADgIAMIAAAAIgLAYQgNASgDAPIAAAAIgDARIAAAAIgFgLIgFABIAAAAIAFgBIAAAAgAglClIgBAAIAAAAIABAAgAgtCgIAAgBIAAAAIAAABgADNhdQgDALgIAHIAAAAIgCADIAAAAQgDAFgGAAIAAAAIgEAIIAAAAIgIAKIgKAPIAAAAQgaAvgfAtIAAAAIglA1IAAAAIAIgGIAAAAQAPgKAJgMIAAAAQAGgHAIgPIAAAAQAJgRAEgFIAAAAQAFgHASgUIAAAAQAPgNAGgMIAAAAIAJgUIAAAAQAHgMAIgCIAAAAIAEgCIADgGQAEgIAGgCIAAAAIACgEIAAAAIACADIAAAAIAAAAIAAAAIAAAAIAAAAIgCgDIAAAAIgCAEIAAAAQgGACgEAIIAAAAIgDAGIgEACQgIACgHAMIAAAAIgJAUIAAAAQgGAMgPANIAAAAQgSAUgFAHIAAAAQgEAFgJARIAAAAQgIAPgGAHIAAAAQgJAMgPAKIAAAAIgIAGIAAAAIAlg1IAAAAQAfgtAagvIAAAAIAKgPIAAAAIAIgKIAEgIIAAAAQAGAAADgFIAAAAIACgDIAAAAQAIgHADgLIAAAAQABgEAAgQIAAAAIAAggIgBgRIAAAAQAAgFgCgEIAAAAQgBgGgCgBIAAAAQAAgDgDgDIAAAAIgFgKIgHgJIgIgFIAAgBIAAAAIgBAAIAAAAIABAAIAAAAIAAABIAAAAIAIAFIAHAJIAFAKQADADAAADIAAAAQACABABAGIAAAAQACAEAAAFIAAAAIABARIAAAAIAAAgQAAAQgBAEgAAQBVIAGgBIAAAAIgGABgAAXBUIgBAAIAAAAIABAAgAh0BNIAAAAIAAAAIAAAAgAh0BNQAEAAACgCIAAAAIABAAIAAAAIgIgJIAAAAIgBgBIAAAAIgIgDQgHgDgIgKIAAAAIgOgPIAAAAIgOgMIgLgNIAAAAQgQgMgGgPIAAAAIgGgRQgEgIgBgFIAAAAQgDgHgCgOIAAAAIgBghIAAAAIAAgMIAAAAQABgLAFgFIAAAAQAEgDAFAAIAAAAIAKABIAAAAIAQgDIAAAAIAOAEIAAAAQAMAFACAHIAAAAIACAIIAAAAIgBAEIAAAAIADAaIAFAKIAAABIAEAFIAAAAIAKAQIAHAOQAKAUANAMIAAAAQADADAQAJIAAAAIAKAGIAAAAIgIgLIAAAAQgJgKgEgKIAAAAQgDgJgFgHIAAAAIgGgHQgRgSgGgRIAAAAIgEgSIgBgHIAAAAIAAgBIAAAAQgCgGAAgJIAAAAIABgOIAAAAQAEgQAQgFIAAAAQAJgCAGABIAAAAQAHADAMANIAAAAIASAHIAAAAIAHAHIAJADIAAAAIACAAIAAAAIgCAAIAAAAIgJgDIAAAAIgHgHIgSgHIAAAAQgMgNgHgDIAAAAQgGgBgJACIAAAAQgQAFgEAQIAAAAIgBAOIAAAAQAAAJACAGIAAAAIAAABIAAAAIABAHIAAAAIAEASQAGARARASIAAAAIAGAHQAFAHADAJIAAAAQAEAKAJAKIAAAAIAIALIAAAAIgKgGIAAAAQgQgJgDgDIAAAAQgNgMgKgUIAAAAIgHgOIgKgQIgEgFIAAAAIAAgBIgFgKIgDgaIABgEIAAAAIgCgIIAAAAQgCgHgMgFIAAAAIgOgEIAAAAIgQADIAAAAIgKgBIAAAAQgFAAgEADIAAAAQgFAFgBALIAAAAIAAAMIAAAAIABAhIAAAAQACAOADAHIAAAAQABAFAEAIIAAAAIAGARQAGAPAQAMIAAAAIALANIAAAAIAOAMIAOAPIAAAAQAIAKAHADIAAAAIAIADIABABIAAAAIAIAJIAAAAIgBAAIAAAAQgCACgEAAgAiABJIAAgBIAAAAIAAABgAAHhQIgEALIgCAFIAAAAIgBAJIAAAAQAAAHgBAKIAAAAIgJAvQgFAmgHAZIAAAAQAHgZAFgmIAAAAIAJgvQABgKAAgHIAAAAIAAAAIABgJIACgFIAAAAIAEgLIABgFIAAAAIAAgDIAAAAIAGgKIAAAAIAAgDIAAAAIABgCIAAAAIgBABIAAgCIAAAAQAAgIgFgEIAAAAIAAgBIAAAAIAAABIAAAAQAFAEAAAIIAAAAIAAACIAAAAIABgBIAAAAIgBACIAAADIAAAAIgGAKIAAAAIAAADIAAAAIgBAFgABSgWIATgPIAAAAQAWgRAKgPIAAAAIAJgSQAPglACgrIAAAAQAAgNACgFIAAAAIAAgHIAAAAIAAAHIAAAAQgCAFAAANIAAAAQgCArgPAlIAAAAIgJASQgKAPgWARIAAAAIgTAPIAAAAIAAgCIAAAAQADgHAEgEIAAAAIAHgHQAOgNALgTIAAAAIAGgKIAAAAQAIgOAEgUIAAAAQAFgUABgkIAAAAIACgTIABgNIAAAAIAAgCIAAAAQgBgGgFgEIAAAAIgCgBIAAAAIACABIAAAAQAFAEABAGIAAAAIAAACIAAAAIgBANIAAAAIgCATQgBAkgFAUIAAAAQgEAUgIAOIAAAAIgGAKIAAAAQgLATgOANIAAAAIgHAHQgEAEgDAHIAAAAIAAACIAAAAIAAAAgADahCIgBAAIAAAAIABAAgADYhCIAAAAIAAAAIAAAAgAgXh1IgBAAIAAAAIABAAgAgXh1IAPgBIAAAAIgPABgAgeh1IgGgBIAAAAIAGABgAgDh3IADAAIAAAAIgDAAgAAAh3IAAAAIAAAAIAAAAgAAAh3IAAAAIAAAAIAAAAgACrjRIACAAIAAAAIgCAAgACujRIAAAAIAAAAIAAAAgACEjcIADAAIAAAAIgDAAgACIjcIgBAAIAAAAIABAAgAAeDbIAEgDIAAAAIAVgHIAAAAIgUAJIAAAAIgNAGIAAAAIAIgFgAgzDcIAJAAIAAAAIABACIAAAAIABACIAAAAIgLgEg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_12_graphics_4,x:399.9,y:-13.8}).wait(2).to({graphics:null,x:0,y:0}).wait(23));

	// Layer_7
	this.instance_12 = new lib.plate_t_09();
	this.instance_12.setTransform(-640,-130);
	this.instance_12._off = true;

	this.instance_12.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({_off:true},2).wait(23));

	// Layer_6 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_2 = new cjs.Graphics().p("AgVC7IgIAAIAAAAIgGgEIAAAAIgCgBIAAAAIAAgCIAAAAIgIAAIAAAAIgSgCIAAAAIgOgDQgVgEgGgEIAAAAQgPgJgHgRIAAAAIgDgHIAAAAIgFgOIAAAAQgGgIgRgHIAAAAIgJgEIAAAAQgQgIgOgKIAAAAQgWgRgEgTIAAAAQgFgQAJgXIAAAAIAFgNIAAAAQAFgOACgIIAAAAIAFgSIAAAAIgFgnIAAAAQgCgSAEgHIAAAAQAGgJARgBIAAAAIA4gEQADgFAFgDIAAAAIACgCIAAAAQANgKAOAEIAAAAQAFACAIAFIAAAAIAHAGIAAAAIATAOIAAAAQAFADAIABIAAAAQAHABAJAAIAAAAQAUAAAHACIAAAAIAEABIAAAAIAEgCIAEgBQAEAAACACIAAAAIAFgLIAAAAQAFgYAEgLIAAAAIABgBIAAAAQAIgRATgIIAAAAQALgFAZgCIAAAAQAXgDAQAAIAAAAQAcAEAPAQIAAAAQAJAKAEANIAAAAQADANgEAMIAAAAQAFAMABAJIAAAAIgBAOIAAAAIABAAIAAAAQAJAKAHAXIAAAAQAHAWgBAMIAAAAQAAAIgGAOIAAAAQgJAggMAWIAAAAQgmBHhkAlIAAAAIgLAEIAAAAIgSAGIAAAAIgEADIAAAAIgIADIAAAAIgJACIgLACIAAAAIgIABgAgMCkIACAGIAAAAQACAHAIAAIAAAAIAJgEQAEgCAJgBIAAAAQAIgBASgIIAAAAQAhgPAYgPIAAAAIASgMQALgGAIgIIAAAAIANgNIAAAAQAXgZAHgQIAAAAIAIgWIAAAAIAGgKQAHgQAAgdIAAAAIAAgIIAAAAIgCgLIAAAAIgCgDIAAAAIgDgEIAAAAIgBgBIAAAAIABABIAAAAIADAEIAAAAIACADIAAAAIACALIAAAAIAAAIIAAAAQAAAdgHAQIAAAAIgGAKIgIAWIAAAAQgHAQgXAZIAAAAIgNANIAAAAQgIAIgLAGIAAAAIgSAMQgYAPghAPIAAAAQgSAIgIABIAAAAQgJABgEACIAAAAIgJAEQgIAAgCgHIAAAAIgCgGIAAAAIgBgHIAAAAIAAgEIAAAAIACgGIAAAAIAAgCIAAAAIADgNIANgfQADgFAIgIIAAAAIACgCIAGgRIAAAAIgGARIAAAAIgCACQgIAIgDAFIAAAAIgNAfIgDANIAAACIAAAAIgCAGIAAAAIAAAEIAAAAIABAHgAgoCwIAAAAIAAAAIAAAAgAgnCwQACgBADgBIAAAAQgDABgCABgAgrCvIAAAAIAAAAIgEgDIgIgDIAAAAIgEgCIAAAAIgFgDIAAAAQgHgCgDgEIAAAAIgMgFIAAAAQgagMgMgdIAAAAQgFgLgDgDIAAAAIgEgEIAAAAIgFgDIAAAAIgCAAIAAAAQgVgGgJgGIAAAAIgEgCIAAAAIgFgEIAAAAQgJgHgFgMIAAAAQgFgLAAgLIAAAAIAAgCIAAAAQAAgFACgDIAAAAIADgOIAAAAIAEgJIACACIAAAAQADAHALAIIAAAAQAbAYAiATIAAAAQgigTgbgYIAAAAQgLgIgDgHIAAAAIgCgCIAAAAIgEAJIgDAOIAAAAQgCADAAAFIAAAAIAAACIAAAAQAAALAFALIAAAAQAFAMAJAHIAAAAIAFAEIAAAAIAEACIAAAAQAJAGAVAGIAAAAIACAAIAAAAIAFADIAAAAIAEAEIAAAAQADADAFALIAAAAQAMAdAaAMIAAAAIAMAFIAAAAQADAEAHACIAAAAIAFADIAAAAIAEACIAAAAIAIADIAAAAIAEADIAAAAgAghCtIAAgBIAAAAIAAABgAg/BcQAAAGADAMIAAAAIADAPIAFAOIAAAAIAFAFIAAAAIACABIAAAAQAHAEAHAHIAAAAIACAFIAAAAIAAADIAAAAIAAgDIAAAAIgCgFIAAAAQgHgHgHgEIAAAAIgCgBIAAAAIgFgFIAAAAIgFgOIAAAAIgDgPQgDgMAAgGIAAAAIAAgDIAAAAQAAgEACgCIAAAAQABgEACAAIAAAAIACgBIAAAAIABAEIAAAAIgBAFIAAAAIABAEIAAAAIABAFIAAAAIAAACIAAgCIgBgFIAAAAIgBgEIAAAAIABgFIAAAAIgBgEIAAAAIgCABIAAAAQgCAAgBAEIAAAAQgCACAAAEIAAAAIAAADgAghCHIAAAAIAAAAIAAAAgAggCHIAAAAIAAAAIAAAAgAgfCHIABgBIAAAAIgBABgAgdCGIAAAAIAAAAIAAAAgAC4hMQgDAJgHAFIAAAAIgBAEIAAAAQgDADgFAAIAAAAIgFAHIAAAAIgHAIIgIAMIAAAAQgYAngcAkIAAAAQgWAcgKAQIAAAAIAGgFIAAAAQAOgIAIgKIAAAAQAFgGAHgMIAAAAIAMgSIAAAAQAEgGARgQIAAAAQANgKAGgLIAAAAIAIgQIAAAAQAGgJAHgCIAAAAIAEgBIACgGQAEgGAFgCIAAAAIACgDIAAAAIACACIAAAAIgCgCIAAAAIgCADIAAAAQgFACgEAGIAAAAIgCAGIgEABQgHACgGAJIAAAAIgIAQIAAAAQgGALgNAKIAAAAQgRAQgEAGIAAAAIgMASIAAAAQgHAMgFAGIAAAAQgIAKgOAIIAAAAIgGAFIAAAAQAKgQAWgcIAAAAQAcgkAYgnIAAAAIAIgMIAAAAIAHgIIAFgHIAAAAQAFAAADgDIAAAAIABgEIAAAAQAHgFADgJIAAAAQABgDAAgNIAAAAIAAgbIgBgOIAAAAQAAgDgCgEIAAAAIgCgGIAAAAIgEgFIAAAAIgEgIIgGgHIgHgEIAHAEIAGAHIAEAIIAEAFIAAAAIACAGIAAAAQACAEAAADIAAAAIABAOIAAAAIAAAbQAAANgBADgAANBGQAEgCADAAIAAAAQgDAAgEACgAAUBEIAAAAIAAAAIAAAAgAhoA/IAAAAIAAAAIAAAAgAhoA/IAFgBIAAAAIgFABgAhiA9IgHgHIAAAAIAAAAIAAAAIgIgEQgGgCgHgIIAAAAIgMgMIAAAAIgNgKQgEgCgGgIIAAAAQgPgKgFgMIAAAAIgFgOIgFgLIAAAAQgDgGgBgLIAAAAIgBgcIAAAAIAAgJIAAAAQABgJAFgEIAAAAQADgDAFAAIAAAAIAIABIAAAAIAPgDIAAAAIAMAEIAAAAQALAEACAGIAAAAIABAGIAAAAIAAAEIAAAAIADAVIAEAIIAAABIADAEIAAAAIAKANIAGAMQAJAQALAKIAAAAIARAKIAAAAIAJAFIAAAAIgHgKIAAAAQgIgIgEgIIAAAAIgGgNIAAAAIgGgGQgPgOgFgOIAAAAIgEgPIgBgFIAAAAIAAgCIAAAAQgCgFAAgHIAAAAIABgMIAAAAQAEgMAOgFIAAAAQgOAFgEAMIAAAAIgBAMIAAAAQAAAHACAFIAAAAIAAACIAAAAIABAFIAAAAIAEAPQAFAOAPAOIAAAAIAGAGIAGANIAAAAQAEAIAIAIIAAAAIAHAKIAAAAIgJgFIAAAAIgRgKIAAAAQgLgKgJgQIAAAAIgGgMIgKgNIgDgEIAAAAIAAgBIgEgIIgDgVIAAgEIAAAAIgBgGIAAAAQgCgGgLgEIAAAAIgMgEIAAAAIgPADIAAAAIgIgBIAAAAQgFAAgDADIAAAAQgFAEgBAJIAAAAIAAAJIAAAAIABAcIAAAAQABALADAGIAAAAIAFALIAAAAIAFAOQAFAMAPAKIAAAAQAGAIAEACIAAAAIANAKIAMAMIAAAAQAHAIAGACIAAAAIAIAEIAAAAIAAAAIAHAHIAAAAIAAAAgAhxA8IgCgBIAAAAIACABgAgTA7IAGgJIAAAAIAOgyIAEgHIADgPIAAAAQABgLABgFIAAAAQADgHAIgIIAAAAIAAAAIABgCIAAAAIAGgKIAAAAQAEgGADgLIAAAAIANgxQAHgVAIgHIAAAAIALgHIAAAAQAPgIAIAAIAAAAIAIAAIAAAAIAHgBIAAAAIAHgEIACgBIAAAAIgCABIAAAAIgHAEIgHABIAAAAIgIAAIAAAAQgIAAgPAIIAAAAIgLAHIAAAAQgIAHgHAVIAAAAIgNAxQgDALgEAGIAAAAIgGAKIAAAAIgBACIAAAAIAAAAQgIAIgDAHIAAAAQgBAFgBALIAAAAIgDAPIAAAAIgEAHIgOAyIgGAJIAAAAQAGgUAFgfIAAAAIAHgnIABgOIAAAAIAAAAIABgHIACgEIAAAAIADgJIABgEIAAAAIAAgDIAAAAQAEgEABgEIAAAAIABgCIAAAAIABgCIgBAAIAAAAIAAgBIAAAAQAAgHgEgDIAAAAIgBAAIAAAAIABAAIAAAAQAEADAAAHIAAAAIAAABIAAAAIAAAAIABAAIgBACIgBACIAAAAQgBAEgEAEIAAAAIAAADIAAAAIgBAEIAAAAIgDAJIgCAEIAAAAIgBAHIAAAAIgBAOIAAAAIgHAnQgFAfgGAUIAAAAIAAAAgABKgRIARgNIAAAAQATgOAJgMIAAAAIAJgPQANgeABgjIAAAAQAAgLADgFIAAAAIgBgFIAAAAQAAgEACgCIAAAAIABgBIAAAAQABgEAEgCIAAAAIAAAAIAAAAIAAAAIAAAAQgEACgBAEIAAAAIgBABIAAAAQgCACAAAEIAAAAIABAFIAAAAQgDAFAAALIAAAAQgBAjgNAeIAAAAIgJAPQgJAMgTAOIAAAAIgRANIAAAAIAAgCIAAAAQACgGAEgEIAAAAIAGgFQANgLAKgPIAAAAIAFgIIAAAAQAHgMAEgQIAAAAQAEgRABgdIAAAAIACgQIABgKIAAAAIAAgCIAAAAQgBgFgFgDIAAAAIAAgBIAAAAIAAABIAAAAQAFADABAFIAAAAIAAACIAAAAIgBAKIAAAAIgCAQQgBAdgEARIAAAAQgEAQgHAMIAAAAIgFAIIAAAAQgKAPgNALIAAAAIgGAFQgEAEgCAGIAAAAIAAACIAAAAIAAAAgADBg2IABAAIAAAAIgBAAgADDg2IgBAAIAAAAIABAAgAAHhgIAAAAIAAAAIAAAAgAgVhgIgBAAIAAAAIABAAgAgUhgIAPgBIAAAAIgPABgAhXh7QAHACAKAKIAAAAIAQAHIAAAAIAHAFIAIADIAAAAIACAAIAAAAIgCAAIAAAAIgIgDIAAAAIgHgFIgQgHIAAAAQgKgKgHgCIAAAAIgDgBIAAAAIADABgAgDhhIAAAAgAgChhIACAAIAAAAIgCAAgAAAhhIAAAAIAAAAIAAAAgAAAhhIAAAAIAAAAIAAAAgAhih7IACgBIAAAAIgCABgAheh8IABAAIAAAAIgBAAgAhch8IAAAAIAAAAIAAAAgACZirIACAAIAAAAIgCAAgACdirIgBAAIAAAAIABAAgAB6i0IAAAAIAAAAIAAAAgAAbC0IAEgDIAAAAIASgGIAAAAIgSAIIAAAAIgMAEIAAAAIAIgDgAgtC0IAIAAIAAAAIAAACIAAAAIACABIAAAAIgKgDg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_13_graphics_2,x:399.8,y:-9.7}).wait(2).to({graphics:null,x:0,y:0}).wait(25));

	// Layer_5
	this.instance_13 = new lib.plate_t_09();
	this.instance_13.setTransform(-640,-130);
	this.instance_13._off = true;

	this.instance_13.mask = mask_13;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).to({_off:true},2).wait(25));

	// Layer_4 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_0 = new cjs.Graphics().p("AgTCUIgIAAIAAAAIgGgDIAAAAIgBgBIAAAAIAAgBIAAAAIgIAAIAAAAIgQgCIAAAAIgNgCQgTgEgGgDIAAAAQgOgHgGgOIAAAAIgDgFIAAAAIgFgLIAAAAQgFgHgQgFIAAAAIgIgDIAAAAQgPgHgNgIIAAAAQgUgNgEgPIAAAAQgEgNAHgSIAAAAIAGgKIAAAAQAEgLACgGIAAAAIAFgPIAAAAIgFgeIAAgBQgCgOAEgFIAAAAQAFgIAQgBIAAAAIA0gDIAHgGIAAAAIACgBIAAAAQAMgIANADIAAAAIAMAFIAAAAIAGAFIAAAAIASALIAAAAIAMADIAAAAIAOABIAAAAQATAAAGACIAAAAIAEABIAAAAIADgCIAFgBIAFACIAAAAIAEgJIAAAAQAFgTAEgJIAAAAIABgBIAAAAQAHgNASgGIAAAAQAKgEAXgCIAAAAQAVgDAPABIAAAAQAaADAOANIAAAAQAIAHADALIAAAAQADAKgDAJIAAAAQAEAKABAHIAAAAIgBALIAAAAIABABIAAAAQAJAHAGATIAAAAQAGARAAAKIAAAAQgBAGgFALIAAAAQgJAZgKARIAAAAQgjA5hdAdIAAAAIgKAEIAAAAIgRAEIAAAAIgDACIAAAAIgIADIAAAAIgDABIAAAAIgFABIgKABIAAAAIgIABgAgLCCIACAEIAAAAQABAGAIAAIAAAAIAIgDIAMgCIAAAAQAIgBAQgHIAAAAQAfgMAWgLIAAAAIAQgKQALgFAHgGIAAAAIAMgKIAAAAQAVgUAGgNIAAAAIAIgRIAAAAIAFgIQAHgNAAgWIAAAAQAAAWgHANIAAAAIgFAIIgIARIAAAAQgGANgVAUIAAAAIgMAKIAAAAQgHAGgLAFIAAAAIgQAKQgWALgfAMIAAAAQgQAHgIABIAAAAIgMACIAAAAIgIADQgIAAgBgGIAAAAIgCgEIAAAAIgBgFIAAAAIAAgEIAAAAIACgFIAAAAIAAgBIAAAAIABgEIACgGIAIgVIADgEQADgEAHgHIAAAAIADgBIAFgNIAAAAQgFgCgFADIAAAAIgJAJIAAAAIgKAQQgKAMgCAJIAAAAIgDAMIAAAAIgEgIIgEABIAAAAIAEgBIAAAAIAEAIIADgMIAAAAQACgJAKgMIAAAAIAKgQIAJgJIAAAAQAFgDAFACIAAAAIgFANIAAAAIgDABQgHAHgDAEIAAAAIgDAEIgIAVIgCAGIgBAEIAAABIAAAAIgCAFIAAAAIAAAEIAAAAIABAFgAglCLIAAAAIAAAAIAAAAgAgkCLIAEgBIAAAAIgEABgAi1ArQAEAJAJAGIAAAAIAFADIAAAAIADACIAAAAQAJAEATAFIAAAAIACAAIAAAAIAFACIAAAAIADADIAAAAQADADAFAJIAAAAQALAWAYAKIAAAAIAKAEIAAAAQAEADAGACIAAAAIAFACIAAAAIADACIAAAAIAHACIAAAAIAEADIABAAIAAAAIgBAAIAAAAIgEgDIgHgCIAAAAIgDgCIAAAAIgFgCIAAAAQgGgCgEgDIAAAAIgKgEIAAAAQgYgKgLgWIAAAAQgFgJgDgDIAAAAIgDgDIAAAAIgFgCIAAAAIgCAAIAAAAQgTgFgJgEIAAAAIgDgCIAAAAIgFgDIAAAAQgJgGgEgJIAAAAQgEgJAAgIIAAAAQAAAIAEAJgAgeCIIgCACIAAAAIACgCIAAAAQADgCAAgDIAAAAIAAgEIAAAAIgCgEIAAAAQgGgFgHgDIAAAAIgBgBIAAAAIgFgEIAAAAIgEgLIAAAAIgEgMIgCgOIAAAAIAAgDIAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAAAAIABAAIAAAAIABADIAAAAIgBAEIAAAAIABADIAAAAIABAEIAAAAIAAACIABAEIAIAOIAAADIACABIABADIAAAAIABABIAAAAIgBgBIAAAAIgBgDIAAAAIgCgBIAAgDIgIgOIgBgEIAAgCIgBgEIAAAAIgBgDIAAAAIABgEIAAAAIgBgDIAAAAIgBAAIAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAIAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABIAAAAIAAADIAAAAIACAOIAAAAIAEAMIAEALIAAAAIAFAEIAAAAIABABIAAAAQAHADAGAFIAAAAIACAEIAAAAIAAAEIAAAAQAAADgDACgAgeBrIAAAAIAAAAIAAAAgACqg8QgDAHgGAEIAAAAIgCADIAAAAQgCADgFAAIAAAAIgEAFIAAAAIgHAGIgIAKIAAAAQgVAegaAdIAAAAIgeAjIAAAAIAegjIAAAAQAagdAVgeIAAAAIAIgKIAAAAIAHgGIAEgFIAAAAQAFAAACgDIAAAAIACgDIAAAAQAGgEADgHIAAAAQABgDAAgKIAAAAIgBgVIgBgLIAAAAIgBgGIAAAAIgCgFIAAAAIgDgEIAAAAIgEgGIgGgGIgGgDIgCAAIAAAAIgBgBIAAAAIAAAAIAAAAIAAAAIAAAAIABABIAAAAIACAAIAAAAIAGADIAGAGIAEAGIADAEIAAAAIACAFIAAAAIABAGIAAAAIABALIAAAAIABAVQAAAKgBADgAhgAyIAAAAIAAAAIAAAAgAhgAyIAFgBIAAAAIABgBIAAAAIgHgFIAAAAIAAgBIAAAAIgHgCQgGgCgHgGIAAAAIgLgKIAAAAIgMgIIgJgIIAAAAQgNgIgFgJIAAAAIgFgLIgEgJIAAAAQgDgEgBgKIAAAAIgBgVIAAAAIAAgIIAAAAQABgHAEgDIAAAAQADgCAFAAIAAAAIAIAAIAAAAIANgCIAAAAIALADIAAAAQAKADACAFIAAAAIACAFIAAAAIgBADIAAAAIADARIADAGIABABIADADIAAAAIAIAKIAGAKQAIANALAHIAAAAIAQAIIAAAAIAIAEIAAAAIgHgIIAAAAIgLgMIAAAAIgGgKIAAAAIgFgFQgOgMgFgLIAAAAIgDgMIgBgDIAAAAIAAgCIAAAAQgCgEAAgFIAAAAQAAAFACAEIAAAAIAAACIAAAAIABADIAAAAIADAMQAFALAOAMIAAAAIAFAFIAGAKIAAAAIALAMIAAAAIAHAIIAAAAIgIgEIAAAAIgQgIIAAAAQgLgHgIgNIAAAAIgGgKIgIgKIgDgDIAAAAIgBgBIgDgGIgDgRIABgDIAAAAIgCgFIAAAAQgCgFgKgDIAAAAIgLgDIAAAAIgNACIAAAAIgIAAIAAAAQgFAAgDACIAAAAQgEADgBAHIAAAAIAAAIIAAAAIABAVIAAAAQABAKADAEIAAAAIAEAJIAAAAIAFALQAFAJANAIIAAAAIAJAIIAAAAIAMAIIALAKIAAAAQAHAGAGACIAAAAIAHACIAAABIAAAAIAHAFIAAAAIgBABIAAAAIgFABgAAGg0IgEAHIgBAEIAAAAIgBAFIAAABIgBALIAAAAIgHAeQgEAYgGAQIAAAAQAGgQAEgYIAAAAIAHgeIABgLIAAAAIAAgBIABgFIABgEIAAAAIAEgHIAAgDIAAAAIAAgCIAAAAQAEgDABgEIAAAAIABgBIAAAAIABgCIgBAAIAAABIAAgBIAAAAQAAgFgEgDIAAAAIgBAAIAAAAIAAgBIAAAAIAAABIAAAAIABAAIAAAAQAEADAAAFIAAAAIAAABIAAAAIAAgBIABAAIgBACIgBABIAAAAQgBAEgEADIAAAAIAAACIAAAAIAAADgABEgOIAQgKIAAAAQASgLAIgJIAAAAIAIgMQAMgYABgcIAAAAQAAgJACgDIAAAAIAAgEIAAAAIAAAEIAAAAQgCADAAAJIAAAAQgBAcgMAYIAAAAIgIAMQgIAJgSALIAAAAIgQAKIAAAAIAAgBIAAAAQACgFAEgDIAAAAIAFgEQAMgJAJgMIAAAAIAFgGIAAAAQAHgJADgNIAAAAQAEgOABgXIAAAAIABgMIABgIIAAAAIAAgCIAAAAQAAgEgFgCIAAAAIgBgBIAAAAIgEgBIAAAAIAEABIAAAAIABABIAAAAQAFACAAAEIAAAAIAAACIAAAAIgBAIIAAAAIgBAMQgBAXgEAOIAAAAQgDANgHAJIAAAAIgFAGIAAAAQgJAMgMAJIAAAAIgFAEQgEADgCAFIAAAAIAAABIAAAAIAAAAgACzgrIAAAAIAAAAIAAAAgAgUhMIAAAAIAAAAIAAAAgAgUhMIAMAAIAAAAIgMAAgAgZhMIgLAAIAAAAIgIgCIAAAAIgGgFIgOgFIAAAAQgKgIgGgCIAAAAIgCAAIAAAAIACAAIAAAAQAGACAKAIIAAAAIAOAFIAAAAIAGAFIAIACIAAAAIALAAgAgHhMIADgBIAAAAIgDABgAgDhNIADAAIAAAAIgDAAgAAAhNIAAAAIAAAAIAAAAgAhahiIABAAIAAAAIgBAAgAhXhiIACAAIAAAAIgCAAgAhUhiIgBAAIAAAAIABAAgACMiHIAEgBIAAAAIgEABgAgqCPIAIAAIAAAAIAAABIAAAAIABABIAAAAIgJgCgAAZCOIADgCIAAAAIARgEIAAAAIgQAGIAAAAIgMADIAAAAIAIgDg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:mask_14_graphics_0,x:399.8,y:-5.9}).wait(2).to({graphics:null,x:0,y:0}).wait(27));

	// Layer_1
	this.instance_14 = new lib.plate_t_09();
	this.instance_14.setTransform(-640,-130);

	this.instance_14.mask = mask_14;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},2).wait(27));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B3B1F").s().p("AgTCUIgIAAIgGgDIgBgBIAAgBIgIAAIgQgCIgNgCQgTgEgGgDQgOgHgGgOIgDgFIgFgLQgFgHgQgFIgIgDQgPgHgNgIQgUgNgEgPQgEgNAHgSIAGgKQAEgLACgGIAFgPIgFgeIAAgBQgCgOAEgFQAFgIAQgBIA0gDIAHgGIACgBQAMgIANADIAMAFIAGAFIASALIAMADIAOABQATAAAGACIAEABIADgCIAFgBIAFACIAEgJQAFgTAEgJIABgBQAHgNASgGQAKgEAXgCQAVgDAPABQAaADAOANQAIAHADALQADAKgDAJQAEAKABAHIgBALIABABQAJAHAGATQAGARAAAKQgBAGgFALQgJAZgKARQgjA5hdAdIgKAEIgRAEIgDACIgIADIgDABIgFABIgKABIgIABgAAWA3IgFANIgDABQgHAHgDAEIgDAEIgIAVIgCAGIgBAEIAAABIgCAFQgBAFACAEIACAEQABAGAIAAIAIgDIAMgCQAIgBAQgHQAfgMAWgLIAQgKQALgFAHgGIAMgKQAVgUAGgNIAIgRIAFgIQAIgOgBgcIgCgJIgBgCIgEgDQgCgCgDAAIgCgBIgBACQgGABgDAGIgCAEIgEABQgGABgGAIIgHANQgFAIgNAIIgTARIgLAOQgGAKgFAFQgHAHgNAHIgGAEIAegjQAagdAVgeIAIgKIAHgGIAEgFQAFAAACgDIACgDQAGgEADgHQABgDAAgKIgBgVIgBgLIgBgGIgCgFIgDgEIgEgGIgGgGIgGgDQgEgBgDABQgEACgBADIgBABQgCADABAGQgCADAAAJQgBAcgMAYIgIAMQgIAJgSALIgQAKIAAgBQACgFAEgDIAFgEQAMgJAJgMIAFgGQAHgJADgNQAEgOABgXIABgMIABgKQAAgEgFgCQgEgDgEACIgGADIgGABIgHAAQgIAAgOAGIgKAGQgIAGgGAQIgMAnQgDAJgDAFIgGAIIgBABIAAAAQgHAHgDAFQgBAEgBAJQgBAIgBAEIgEAFIgNAnIgGAHQAGgQAEgYIAHgeIABgLIAAgBIABgFIABgEIAEgHIAAgFQAEgDABgEIABgBIABgCIgBAAIAAABQAAgGgEgDQgEgDgHABQgLACgWgBIgIgCIgGgFIgOgFQgKgIgGgCQgFgBgHACQgNADgEAKIgBAKQAAAFACAEIABAFIADAMQAFALAOAMIAFAFIAGAKIALAMIAHAIIgIgEIgQgIQgLgHgIgNIgGgKIgIgKIgDgDIgBgBIgDgGIgDgRQABgEgCgEQgCgFgKgDIgLgDIgNACIgIAAQgFAAgDACQgEADgBAHQgBAKACATQABAKADAEIAEAJIAFALQAFAJANAIIAJAIIAMAIIALAKQAHAGAGACIAHACIAAABIAHAFQgGAEgKgFQgfgPgagTQgJgHgEgGIgBgBIgEAHIgDALQgBADAAAEQgBAJAFAKQAEAJAJAGIAFADIADACQAJAEATAFIACAAIAFACIADADQADADAFAJQALAWAYAKIAKAEQAEADAGACIAFACIADACIAHACIAEADQAGABAEgEQAFgDgCgGIgCgEQgGgFgHgDIgBgBIgFgEIgEgLIgEgMIgCgOQgBgFACgDQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIABAAIABADQgCAEACADIABAEIAAACIABAEIAIAOIAAADIACABIABADQAFAGAHgDIAEAIIADgMQACgJAKgMIAKgQIAJgJIAGgCIAEABg");
	this.shape.setTransform(399.8,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D410C").s().p("AgsCOIAIAAIAAACIABABIgJgDgAAXCOIADgCIARgFIgQAGIgMADIAIgCgAgLCGIgCgEQgCgFABgFIACgEIAAgCIABgEIACgGIAJgUIACgFQADgEAHgGIADgCIAFgNQgFgBgFACIgJAKIgKAPQgKAMgCAKIgDALIgEgHQgHACgFgGIgBgCIgCgBIAAgDIgIgOIgBgFIAAgBIgBgEQgCgDACgFIgBgDIgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBABQgCACABAFIACAOIAEAMIAEALIAFAEIABABQAHADAGAGIACAEQACAFgFAEQgEAEgGgCIgEgCIgHgDIgDgBIgFgCQgGgCgEgEIgKgEQgYgJgLgXQgFgJgDgCIgDgDIgFgCIgCgBQgTgEgJgFIgDgCIgFgDQgJgFgEgKQgFgJABgKQAAgEABgDIADgLIAEgGIABABQAEAGAJAGQAaATAfAPQAKAFAGgDIgHgGIAAAAIgHgDQgGgCgHgGIgLgKIgMgHIgJgJQgNgHgFgKIgFgLIgEgIQgDgFgBgJQgCgTABgKQABgIAEgDQADgCAFAAIAIABIANgCIALACQAKAEACAEQACAFgBADIADARIADAHIABAAIADAEIAIAKIAGAJQAIANALAIIAQAHIAIAEIgHgHIgLgNIgGgKIgFgFQgOgLgFgLIgDgMIgBgFQgCgEAAgGIABgJQAEgKANgEQAHgBAFABQAGACAKAIIAOAFIAGAEIAIACQAWABALgBQAHgBAEACQAEADAAAGIAAAAIABAAIgBABIgBACQgBADgEAEIAAAFIgEAHIAAADIgBAGIAAAAIgCALIgHAeQgEAZgGAQIAGgHIAOgnIADgGQABgDABgJQABgIABgEQADgGAHgGIAAAAIABgCIAGgIQADgFADgJIAMgmQAGgRAIgGIAKgFQAOgHAIAAIAHABIAGgBIAGgEQAEgBAEACQAFADAAAEIgBAJIgBANQgBAXgEANQgDANgHAJIgFAHQgJAMgMAJIgFAEQgEADgCAEIAAACIAQgKQASgLAIgKIAIgMQAMgYABgcQAAgIACgEQgBgGACgDIABgBQABgDAEgBQADgCAEABIAGAEIAGAFIAEAHIADAEIACAEIABAGIABALIABAVQAAALgBACQgDAIgGAEIgCACQgCADgFAAIgEAFIgHAHIgIAKQgVAegaAdIgeAiIAGgDQANgHAHgIQAFgEAGgKIALgPIATgRQANgIAFgIIAHgNQAGgHAGgCIAEgBIACgEQADgFAGgCIABgCIACACQADgBACACIAEAEIABACIACAJQABAbgIAOIgFAIIgIASQgGANgVATIgMALQgHAGgLAFIgQAJQgWAMgfAMQgQAGgIABIgMADIgHADQgJAAgBgGg");
	this.shape_1.setTransform(400,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7D410C").s().p("AAZCzIADgDIATgGIgSAIIgMAEIAIgDgAgwCzIAIAAIABACIABABIgKgDgAgMCpIgDgGQgBgFABgGIACgGIAAgCIADgNIAMgfQADgFAIgIIADgCIAFgRQgFgCgFAEIgKAMIgLATQgLAPgCAMIgDAPIgFgKQgHADgFgHIgCgDIgCgCIAAgDIgJgSIAAgGIAAgCIgCgFQgCgDACgGIgBgEIgBABQgCAAgCAEQgCADABAGQAAAGACAMIAEAPIAFAOIAFAFIABABQAIAEAGAHIACAFQACAHgFAEQgEAFgHgCIgEgDIgHgDIgEgCIgGgDQgGgCgEgEIgLgFQgagMgMgdQgFgLgDgDIgEgEIgGgDIgCAAQgUgGgJgGIgEgCIgGgEQgJgHgFgMQgFgMABgMQAAgFACgDIADgOIAEgJIABACQAEAHAKAIQAcAYAhATQAMAHAGgFIgHgHIgBAAIgHgEQgGgCgIgIIgMgMIgNgKQgDgCgHgIQgOgKgFgMIgFgOIgFgLQgDgGgBgLQgCgYABgNQABgJAEgEQADgDAFAAIAJABIAOgDIANAEQAKAEADAGQACAFgBAFIACAVIAEAIIABABIADAEIAJANIAHAMQAIAQAMAKIARAKIAJAFIgHgKQgIgIgEgIIgHgNIgFgGQgQgOgFgOIgEgPIAAgHQgCgFAAgHIABgMQAEgMAOgFQAHgBAGABQAGACALAKIAQAHIAGAFIAJADQAYABAMgCQAHgBAEADQAFAEgBAHIABAAIABAAIgCACIAAACQgCAEgEAEQABAEgBADIgEAJIAAAEIgCAHIAAAAIgBAOIgIAnQgFAfgGAUIAGgJIAQgxIADgIIADgPQAAgLACgFQACgHAIgIIABAAIAAgCIAHgKQADgGADgLIAOgxQAGgVAJgHIALgHQAPgIAIAAIAIAAIAHgBIAGgEQAEgCAFADQAFADAAAFIgBAMIgCAQQAAAdgEARQgEAQgIAMIgFAIQgJAPgNALIgGAFQgEAEgDAGIAAACIARgNQAUgOAJgMIAIgPQAOgeABgjQAAgLACgFQgBgHACgEIABgBQABgEAEgCQAEgCAEACIAGAEIAHAHIAEAIIADAFIACAGQACAEAAADIABAOIABAbQAAANgBADQgDAJgHAFIgCAEQgDADgFAAIgEAHIgHAIIgJAMQgXAngcAkQgWAcgLAQIAHgFQAOgIAHgKQAGgGAHgMIAMgSQAEgGAQgQQAOgKAFgLIAIgQQAHgJAGgCIAEgBIADgGQADgGAGgCIACgDIABACQADgBADADIAEAEIACADIACALQABAjgJASIgFAKIgJAWQgGAQgYAZIgNANQgHAIgMAGIgRAMQgYAPghAPQgSAIgIABQgKABgEACIgIAEQgJAAgBgHg");
	this.shape_2.setTransform(400.1,-9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5B3B1F").s().p("AgVC7IgIAAIgGgEIgCgBIAAgCIgIAAIgSgCIgOgDQgVgEgGgEQgPgJgHgRIgDgHIgFgOQgGgIgRgHIgJgEQgQgIgOgKQgWgRgEgTQgFgQAJgXIAFgNQAFgOACgIIAFgSIgFgnIAAAAQgCgSAEgHQAGgJARgBIA4gEQADgFAFgDIACgCQANgKAOAEQAFACAIAFIAHAGIATAOQAFADAIABQAHABAJAAQAUAAAHACIAEABIAEgCIAEgBQAEAAACACIAFgLQAFgYAEgLIABgBQAIgRATgIQALgFAZgCQAXgDAQAAQAcAEAPAQQAJAKAEANQADANgEAMQAFAMABAJIgBAOIABAAQAJAKAHAXQAHAWgBAMQAAAIgGAOQgJAggMAWQgmBHhkAlIgLAEIgSAGIgEADIgIADIgJACIgLACIgIABgAAYBFIgGARIgCACQgIAIgDAFIgNAfIgDANIAAACIgCAGQgBAGACAFIACAGQACAHAIAAIAJgEQAEgCAJgBQAIgBASgIQAhgPAYgPIASgMQALgGAIgIIANgNQAXgZAHgQIAIgWIAGgKQAIgSgBgjIgCgLIgCgDIgDgEQgDgDgDABIgCgCIgCADQgFACgEAGIgCAGIgEABQgHACgGAJIgIAQQgGALgNAKQgRAQgEAGIgMASQgHAMgFAGQgIAKgOAIIgGAFQAKgQAWgcQAcgkAYgnIAIgMIAHgIIAFgHQAFAAADgDIABgEQAHgFADgJQABgDAAgNIAAgbIgBgOQAAgDgCgEIgCgGIgEgFIgEgIIgGgHIgHgEQgEgCgDACQgEACgBAEIgBABQgDAEACAHQgDAFAAALQgBAjgNAeIgJAPQgJAMgTAOIgRANIAAgCQACgGAEgEIAGgFQANgLAKgPIAFgIQAHgMAEgQQAEgRABgdIACgQIABgMQgBgFgFgDQgEgDgEACIgHAEIgHABIgIAAQgIAAgPAIIgLAHQgIAHgHAVIgNAxQgDALgEAGIgGAKIgBACIAAAAQgIAIgDAHQgBAFgBALIgDAPIgEAHIgOAyIgGAJQAGgUAFgfIAHgnIABgOIAAAAIABgHIACgEIADgJQACgDgBgEQAEgEABgEIABgCIABgCIgBAAIAAAAQAAgHgEgEQgEgDgIABQgMACgYgBIgIgDIgHgFIgQgHQgKgKgHgCQgFgBgIABQgOAFgEAMIgBAMQAAAHACAFIABAHIAEAPQAFAOAPAOIAGAGIAGANQAEAIAIAIIAHAKIgJgFIgRgKQgLgKgJgQIgGgMIgKgNIgDgEIAAgBIgEgIIgDgVQABgFgCgFQgCgGgLgEIgMgEIgPADIgIgBQgFAAgDADQgFAEgBAJQgBANACAYQABALADAGIAFALIAFAOQAFAMAPAKQAGAIAEACIANAKIAMAMQAHAIAGACIAIAEIAAAAIAHAHQgGAFgLgHQgigTgbgYQgLgIgDgHIgCgCIgEAJIgDAOQgCADAAAFQAAAMAFAMQAFAMAJAHIAFAEIAEACQAJAGAVAGIACAAIAFADIAEAEQADADAFALQAMAdAaAMIAMAFQADAEAHACIAFADIAEACIAIADIAEADQAGACAFgFQAFgEgCgHIgCgFQgHgHgHgEIgCgBIgFgFIgFgOIgDgPQgDgMAAgGQgBgGADgDQABgEACAAIACgBIABAEQgCAGACADIABAFIAAACIABAGIAIASIABADIACACIABADQAFAHAIgDIAEAKIADgPQADgMALgPIAKgTIAKgMQAEgDADAAIAEABg");
	this.shape_3.setTransform(399.8,-9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B3B1F").s().p("AgYDkIgJgBIgHgDIgBgCIgBgCIgJAAQgIgBgLgCIgQgDQgXgGgIgEQgQgLgIgWIgDgIIgGgQQgHgLgTgIIgKgFQgSgKgPgMQgZgVgEgXQgFgTAJgdIAHgQIAHgaQADgQADgGIgGgvIAAgBQgDgWAFgIQAGgMAUgBIA+gFIAJgKIACgBQAPgNAPAFQAHACAIAHIAHAGQAQAOAGAEQAGADAIACQAIABAKAAQAXAAAIADIAEABIAEgDIAGgBQADAAADADIAFgOQAFgdAGgNIAAgCQAJgVAWgJQAMgGAcgDQAZgEATABQAeAEARAUQAKAMAEAQQAEAPgEAPQAFAPABALIgBARIABABQALALAHAdQAIAagBAPQgBAJgGASQgKAngNAbQgqBWhwAuIgMAFIgVAHIgEADIgIAFIgLACIgMACIgKACgAAaBVIgGAUIgDACQgJAKgDAGIgDAHIgLAfIgDAKIAAAGIAAACIgDAHQgBAIACAHIACAGQACAJAKAAIAJgFIAQgEQAJgBAUgKQAkgSAbgSIAUgPQANgHAIgKIAPgQQAageAHgUIAJgbIAGgMQAKgVgBgsIgCgNIgCgEQgBgDgEgCQgDgDgDABIgCgDIgCAEQgGACgEAIIgDAGIgEACQgIACgHAMIgJAUQgGAMgPANQgSAUgFAHQgEAFgJARQgIAPgGAHQgJAMgPAKIgIAGIAlg1QAfgtAagvIAKgPIAIgKIAEgIQAGAAADgFIACgDQAIgHADgLQABgEAAgQIAAggIgBgRQAAgFgCgEQgBgGgCgBQAAgDgDgDIgFgKIgHgJIgIgFQgEgCgEACQgEADgCAEIgBACQgCAFABAJQgCAFAAANQgCArgPAlIgJASQgKAPgWARIgTAPIAAgCQADgHAEgEIAHgHQAOgNALgTIAGgKQAIgOAEgUQAFgUABgkIACgTIABgPQgBgGgFgEQgFgDgFACIgHAFQgDACgFAAIgIgBQgKAAgQAKQgJAFgEAEQgJAJgHAZIgQA7QgDAOgEAIQAAACgHAKIgBACIAAAAQgJAKgDAJQgCAGAAANQgBANgCAFIgFAJIgQA9IgHALQAHgZAFgmIAJgvQABgKAAgHIAAAAIABgJIACgFIAEgLQABgEAAgEIAGgKIAAgDIABgCIAAAAIgBABQABgKgGgEQgEgEgJACQgNACgbgCIgJgDIgHgHIgSgHQgMgNgHgDQgGgBgJACQgQAFgEAQIgBAOQAAAJACAGQAAADABAFIAEASQAGARARASIAGAHQAFAHADAJQAEAKAJAKIAIALIgKgGQgQgJgDgDQgNgMgKgUIgHgOIgKgQIgEgFIAAgBIgFgKIgDgaQACgFgDgHQgCgHgMgFIgOgEIgQADIgKgBQgFAAgEADQgFAFgBALQgBAQACAdQACAOADAHQABAFAEAIIAGARQAGAPAQAMIALANIAOAMIAOAPQAIAKAHADIAIADIABABIAIAJQgHAFgNgIQglgXgfgdQgLgKgFgJIgCgDIgEALIgDARQgCAFAAAGQgBAPAGAOQAFAPAKAIIAGAFIAFADQAKAHAXAHIACAAIAGAEIAFAEQADAEAGAOQANAiAdAPIANAGQAEAGAHADIAGADIAEACIAJAEIAFAEQAHACAFgGQAFgGgCgIIgCgGQgHgJgJgEIgCgCIgFgGQgDgHgCgKIgFgSQgCgOAAgIQgBgHACgEQACgEACgBIACgBIABAFQgCAHACAEIACAHIAAAJIAKAVIAAAFIACACIACADQAFAKAJgEIAFALIADgRQADgPANgSIALgYQAIgMAEgDQADgCAEAAIAEABg");
	this.shape_4.setTransform(399.9,-13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D410C").s().p("AAbDaIAFgEIAUgGIgUAJIgNAFIAIgEgAg1DaIAJAAIAAADIACABIgLgEgAgODNIgCgGQgCgHABgIIACgGIAAgDIABgGIACgJIAMggIADgGQADgHAJgKIADgCIAGgUQgGgCgGAEQgDADgIALIgMAYQgMASgDAPIgDASIgGgMQgIAEgFgJIgCgEIgCgCIgBgEIgJgWIgBgJIgCgGQgCgFACgHIAAgEIgCABQgDAAgBAEQgDAEABAIQAAAHADAOIAEATQACAKADAHIAGAGIACABQAIAFAHAIIACAGQADAJgGAFQgFAGgHgCIgFgEIgIgEIgEgCIgGgDQgIgDgEgFIgNgHQgdgOgNgjQgFgNgEgEIgEgFIgGgDIgDgBQgXgHgKgHIgEgDIgGgEQgKgJgGgOQgFgPAAgOQAAgHACgEIAEgRIAEgLIACADQAEAJAMAKQAeAdAmAXQAMAIAHgGIgIgIIAAgBIgJgEQgGgDgJgJIgNgQIgPgLIgLgNQgQgNgFgOIgGgRQgFgJgBgEQgDgHgBgPQgCgdABgPQABgMAFgEQADgEAGAAIAKABIAPgDIAOAEQAMAFADAHQACAHgBAGIADAaIAEAKIABAAIADAGIALAPIAHAPQAKAUAMALQAEAEAQAJIAJAGIgIgMQgIgKgFgKQgDgIgEgHIgGgIQgSgSgFgQIgEgTQgCgEABgEQgCgGAAgIIABgPQAEgPAQgFQAIgDAGACQAHADANAMIARAIIAHAHIAKADQAbABANgCQAJgBAEADQAFAFAAAJIAAgBIABAAIgBADIgBACIgGALQABAEgBADIgFALIAAAGIgCAIIAAABQAAAHgCAKIgIAvQgGAlgGAZIAGgLIASg7IADgKQACgFABgOQABgNACgGQADgIAIgKIABAAIAAgCQAHgKABgDQAEgHADgOIAPg7QAHgaAKgJQAEgEAIgEQARgKAJAAIAIAAQAFAAADgBIAIgGQAEgCAFAEQAGAEAAAGIgBAPIgCATQAAAjgFAVQgEAUgJAOIgFAKQgLASgPAOIgGAGQgFAFgDAHIAAACIAUgQQAWgQAJgPIAKgSQAPglABgrQAAgNADgGQgCgJADgFIABgBQABgFAEgCQAFgCAEABIAHAGIAHAIIAFAKQADAEABACQABACABAFQACAFAAAEIABARIABAgQAAARgBADQgDAMgIAGIgCAEQgDAFgGAAIgFAHIgIAKIgJAQQgaAvggAsIgkA1IAHgFQAQgLAIgLQAGgHAIgQQAKgRAEgFQAEgHASgTQAQgNAGgNIAJgUQAHgLAHgDIAEgBIADgGQAEgJAHgCIACgDIABACQAEAAADADQADACABADIACADIACAOQACArgKAWIgGAMIgKAbQgHAUgaAeIgOAQQgJAJgNAIIgUAOQgaASglASQgUAKgJACIgPAEIgJAEQgKAAgCgJg");
	this.shape_5.setTransform(400.2,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D410C").s().p("AAjEaIAFgEIAagJIgZAMIgRAHIALgGgAhEEbIAMAAIABADIABACIgOgFgAgSEKIgDgIQgCgJABgKIADgJIAAgDIABgIIADgMIAPgpIAEgJQADgHAMgNIAEgDIAHgaQgHgDgHAFQgFAEgKAPIgPAeQgQAYgDATIgEAXIgHgPQgLAFgHgMIgCgFIgCgCIgBgGIgMgcIgBgMIgCgHQgCgGACgJIgBgGIgCABQgDABgDAFQgDAFACAKQAAAJADASIAFAYQADANAEAJIAHAIIACACQALAGAJALIACAIQAEALgHAHQgGAIgKgDIgGgFIgKgFIgGgDIgHgEQgJgEgGgHIgQgIQgkgTgRgtQgHgSgFgFIgFgFIgIgEIgDgBQgdgJgNgJIgFgEIgIgGQgNgLgGgTQgHgTABgTQAAgIACgGIAEgWIAGgPIACAFQAFALAPANQAnAmAvAeQAQAKAIgHIgKgLIAAgBIgLgFQgIgEgLgMIgRgUIgSgPQgFgEgJgNQgUgQgHgTIgIgWQgFgLgCgGQgEgJgBgTQgDgmABgUQACgOAGgGQAFgEAGAAIANABIATgEIASAFQAPAHADAIQADAJgBAHIAEAiIAFANIABABIAEAHIANAUIAJATQANAaAQAPQAEAEAUAMIAMAIIgKgPQgKgNgGgNQgEgLgGgJIgHgKQgWgXgHgWIgGgYQgBgGABgEQgDgIAAgLQAAgMABgGQAGgUATgHQALgDAIACQAJAEAPAQIAWAKIAJAIIAMAEQAiACARgDQAMgCAFAFQAHAGgBAMIABgBIABAAIgCADIgBADQgCAHgFAHQAAAFgBAFIgGAOIAAAHIgDALIAAABQAAAJgCANIgLA9QgHAxgIAgIAIgOIAXhNIAEgNQADgHABgRQABgRACgIQAEgLALgNIAAAAIABgDQAJgNAAgDQAGgKADgSIAUhMQAJghAMgMQAEgFALgGQAVgNAMAAIALABQAGAAADgCIAKgHQAGgDAGAFQAHAFAAAIQABAEgCAPIgCAZQgBAugGAaQgGAagKASIgHANQgOAYgSASIgIAIQgGAGgEAJIAAADIAZgUQAbgWAMgTIANgYQATgvABg4QAAgRADgHQgBgMADgGIABgCQACgGAFgDQAFgDAGACIAJAHIAJALIAGANQAEAFABADQABACACAHQACAGAAAGQACAHAAAPIAAApQAAAVgBAFQgEAPgKAIIgCAFQgEAGgIAAIgGAKIgKANQgEAGgIAOQghA9gnA6QgfAsgPAZIAJgHQAUgOALgPQAHgJAKgUIARgdQAGgJAXgZQATgSAIgPQAEgIAHgSQAJgPAJgDIAGgCIAEgIQAEgLAJgDIACgEIACADQAFgBADAEQAEADACAEIACAEQACADABAPQACA4gNAcIgHAQIgMAjQgJAaghAnQgMAOgHAGQgKAMgQAKIgZATQgiAXguAYQgaANgLACQgNACgGADIgMAGQgNAAgCgMg");
	this.shape_6.setTransform(400.5,-20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B3B1F").s().p("AgeEnIgNgBQgFgCgDgDIgBgCIgBgDIgMAAIgYgEIgUgEQgegHgJgGQgUgOgKgbIgEgLIgIgVQgIgOgYgKIgNgHQgXgNgTgQQgfgbgGgeQgGgYALglIAJgWQAHgVACgNQAEgVAEgIIgIg8IAAgBQgDgcAGgLQAIgPAZgCIBOgGQAFgHAHgGIACgCQASgQAUAGQAIADAKAIIAKAJQATASAIAFQAIAEAKACQAJACANAAQAeAAAKADIAGACIAEgEIAHgCQAFABAEADIAGgSQAGgmAHgQIABgCQALgbAbgMQAQgIAjgEQAggFAXABQAnAGAVAaQANAPAFAUQAFAUgGATQAHATACAPIgCAWIACABQANAPAJAkQAKAigBAUQgBAMgIAYQgNAzgQAhQg2BxiNA6IgPAHIgaAJIgFAEIgLAGIgOADIgPADIgMACgAAhBtIgHAaIgEADQgMANgDAIIgFAJIgOApIgDAMIgBAIIAAACIgDAJQgBAKACAJIADAIQACAMANAAIAMgGQAGgDANgCQALgCAagNQAugXAigXIAZgTQAQgKAKgMQAHgGAMgPQAhgnAJgaIAMgiIAHgQQANgcgCg5QgBgPgCgDIgCgEQgCgEgEgCQgDgEgFABIgCgDIgCAEQgJADgEAKIgEAIIgGACQgJADgJAPQgHASgEAIQgIAQgTASQgXAZgGAJIgRAcQgKAUgHAJQgLAPgUAOIgJAHQAPgZAfgsQAng5Ahg+QAIgOAEgGIAKgNIAGgJQAIAAAEgGIACgFQAKgIAEgPQABgFAAgVIAAgqQAAgPgCgHQAAgGgCgGQgCgHgBgCQgBgDgEgEIgGgNIgJgLIgJgHQgGgCgFADQgFADgCAGIgBACQgDAGABAMQgDAGAAARQgBA4gTAwIgNAYQgMASgbAWIgZAUIAAgDQAEgJAGgGIAIgIQASgSAOgXIAHgNQAKgSAGgaQAGgbABguIACgYQACgPgBgEQAAgIgHgFQgGgFgGADIgKAHQgDACgGAAIgLgBQgMAAgVANQgLAGgEAFQgMAMgJAgIgUBNQgDASgGAKQAAADgJANIgBADIAAAAQgLAMgEALQgCAIgBARQgBARgDAHIgGAMIgVBOIgIAOQAIgfAHgxIALg+QACgNAAgJIAAgBIABgKIACgHIAGgOQABgFAAgFQAFgHACgHIABgDIACgDIgBAAIgBABQABgMgHgGQgFgFgMACQgRADgigCIgMgEIgJgJIgWgKQgPgQgJgEQgIgCgLADQgTAHgGAUQgBAGAAANQAAALADAIQgBAEABAGIAGAYQAHAVAWAXIAHAKQAGAJAEALQAGANAKAOIAKAPIgMgIQgUgMgEgFQgQgPgNgaIgJgTIgNgTIgEgHIgBgBIgFgNIgEgiQABgHgDgJQgDgJgPgHIgSgFIgTAEIgNgBQgGAAgFAEQgGAGgCAPQgBAUADAmQABASAEAJQACAGAFALIAIAWQAHATAUARQAJANAFAEIASAPIARAUQALALAIAEIALAFIAAABIAKALQgIAHgQgKQgvgdgngmQgPgNgFgMIgCgEIgGAPIgEAWQgCAGAAAIQgBATAHASQAGATANALIAIAGIAFAEQANAJAdAJIADABIAIAEIAFAGQAFAFAHASQARAtAkASIAQAIQAGAHAJAEIAHAEIAGADIAKAFIAGAFQAKADAGgIQAHgHgEgLIgCgIQgJgLgLgFIgCgCIgHgIQgEgJgDgNIgFgYQgDgSAAgKQgCgKADgFQADgFADgBIACgBIABAGQgCAJACAGIACAIIABAMIAMAcIABAGIACACIACAFQAHAMALgFIAHAPIAEgXQADgTAQgYIAPgfQAKgPAFgEQAFgDAEAAIAFABg");
	this.shape_7.setTransform(400.2,-20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7D410C").s().p("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");
	this.shape_8.setTransform(400.8,-20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B3B1F").s().p("AgjEvIgOgBQgGgCgEgDIgCgCIgBgDIgNAAIgcgEIgXgEQgigHgLgHQgYgOgLgcIgFgMIgIgVQgKgOgcgLIgOgHQgbgNgWgQQgkgcgHgeQgHgaANgmIAKgWQAIgWACgNQAGgVADgJIgJg+IAAgBQgDgcAHgMQAJgPAdgCIBbgGQAFgHAIgGIACgCQAWgRAXAGQAIAEANAIIAKAJQAXASAJAFQAJAEAMACQALACAPAAQAiAAALAEIAHACIAGgFIAIgCQAFABAEAEIAHgTQAIgnAIgRIABgCQAMgcAggMQATgIAngEQAlgFAcABQAtAGAYAbQAOAPAHAVQAFAVgGATQAIATABAQIgBAWIABABQAPAQAMAlQAKAjAAAUQgBANgJAYQgQA0gTAjQg9BzijA8IgSAIIgeAJIgGAEQgFADgIACIgPAEIgTADIgOACgAAnBwIgJAbIgFADQgNANgEAIIgGAJIgQAqIgEANIAAAIIAAADIgEAJQgCAKADAJIADAIQADANAPAAIAOgGQAHgDAPgDQANgCAdgNIAjgQIAAgHQADgQAEgFIAIgLIAEgIIADgGQAHAAAEgIIACgCQAHgGAAgGQgBgGgKgDIgEgGIgOgHIgHgFIgMgEQgHgCgDgEQgFgHAEgPIAGgnQABgLgCgGIgFgMQgEgJgDgDQgJgIgSACQgQABgGAFQgEAEgFAJIgEAHIgDABIgIAHIgFAEIgEAEIgDADQgCgDABgEQABgFAGgIQAXgaASgHQAMgFAQABQANACAHAHQAFAEAFARQAEAOgBAIIgDAJIgDAJIgDAPIgCAYIANAFIAlgxQAug8Amg/QAJgOAFgGIAMgOIAHgKQAJAAAEgGIADgFQALgIAFgQQABgFAAgVIgBgrQAAgPgBgHQAAgGgDgHIgDgJQgBgDgFgFIgHgNIgKgLIgLgIQgGgCgGADQgHAEgBAGIgCACQgEAGACAMQgDAHAAASQgCA5gWAxIgOAYQgOAUggAWIgcAUIAAgDQAEgJAGgGIAKgIQAVgTAQgYIAIgNQAMgTAGgaQAIgcAAgvIADgZQADgPgBgFQgBgIgIgFQgHgFgHADIgLAHQgEACgHAAIgMgBQgIAAgMAFIAAAAQAOAFADAEQAEAEAAAHIgBAOQgEAfgHANIgHANIgCAQQgBALgCAFQgCAHgKAOIgFAOQgGANgHAKQgFAHgFACQgIADgEgGQgDgEAEgIIAHgJQAEgFAEgLIAGgPIAKgQQACgGABgPQACgNADgHIAHgKQADgFACgMIAEgYQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBgBgFgCQgKgCgEgFIgBgCQgLAFgFAFQgOAMgLAiIgWBOQgEATgGAKQgBADgKANIgBADIgBAAQgMANgEAMQgDAIgBARQgCASgCAHIgHAMIgZBRIgKAOQAKghAIgyIAMg/QADgNAAgKIAAgBIACgLIACgHIAGgOQACgFgBgFQAGgIADgHIABgDIACgDIgBAAIgBABQABgMgIgGQgGgFgOACQgTADgngCIgOgEIgLgJIgCgBIAEAJQADAJgDAUIgCAgIgBAIQgCAGgGAAQgGABgDgFQgCgDAAgIIABgfQADgPgBgEIgDgKIgCgEIgMgRQgFgFgBgEQgIgHgGgCQgJgCgMADQgXAHgGAVQgCAGAAANQAAALAEAIQgBAEACAGIAGAZQAIAWAZAYIAJAKQAGAJAFAMQAHANAMAOIAMAPIgPgIQgWgMgGgFQgSgPgOgbIgLgTIgPgVIgFgHIgBgBIgGgNIgFgjQACgHgDgJQgEgJgSgIIgUgFIgXAEIgOgBQgIAAgFAEQgHAHgCAPQgCAUAEAnQACATAEAKQACAGAGALIAJAWQAIAUAYARQAKAOAFAEIAWAPIATAUQAMANAKAEIAMAFIABABQAFAGAHAFQgKAHgTgKQg2gfgtgmQgRgOgGgMIgDgEIgGAPIgFAXQgDAGAAAIQgBATAIAUQAIATAPALIAJAGIAGAFQAPAJAiAJIADABIAJAEIAGAGQAFAFAIATQAUAuAqATIATAIQAGAHAKAEIAJAEIAGADIANAGIAHAFQAKADAHgIQAIgIgDgLIgDgIQgLgLgMgGIgCgCIgIgJQgFgJgDgNIgHgYQgDgTAAgKQgCgKAEgFQACgFAEgBIADgBIAAAGQgCAJACAGIADAIIABAMIAOAdIABAGIADACQAAADACACQAIAMAMgFIAIAQIAFgYQAEgTASgZIASgfQAMgQAFgEQAFgDAGAAIAGABgAE0hYQgJADgGALIgEAJIgGACQgLADgKAPQgIASgGAJQgIAQgWASQgbAagHAJIgTAeQgMAUgJAJQgIAKgMAKIALAEQARAFAJAHQAMAKACANQACAPgLAJQgJAGgDAFIgEAIIgIAJQgGAFAAAEIAAACQATgKAQgKIAdgTQASgKANgNQAIgGANgPQAmgoAKgaIAPgkIAIgQQAOgdgBg6QgCgPgCgEIgCgEQgCgEgFgDQgEgEgFABIgDgDIgDAEgAhbBnQgFgBgFgHIgQgTQgJgLgIgGQgTgLgJgIQgIgHgNgUQgMgSgKgHQgPgHgHgGQgHgIgEgQIgHgbIAHAWQAEAMAFAHQAFAGAMAGQANAIAEAEIAHAJIAOAMIAlAhIAOALQAGADAOADIADAFIAQASQAJALgFAGQgCAEgFAAIgEgBgAj5hXIAAAAIAEALIgEgLg");
	this.shape_9.setTransform(400.5,-21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7D410C").s().p("Ag3G6IAPAAIACAEIADACIgUgGgABZG5IAHgEIAlgLIgkAOIgXAIQAJgDAGgEgAAMGmQgEgFgBgEQgDgLACgMQAAgEAEgHIAAgDIAAgKIAEgPIAWgxIAGgKQAFgKAQgQIAGgDIAKgfQgKgEgLAGQgGAFgOASIgXAlQgTAdgFAXQgEAUgBAHIgKgSQgPAGgJgOQgDgDgBgDIgDgCIgBgIIgSgiIgBgOIgEgKQgDgHADgKIgBgHIgEABQgEABgDAGQgEAGACAMQAAAMAFAWIAIAcQAFAQAFAKIALAKIADADQAOAHAOANIADAJQAEANgJAJQgIAKgNgEIgJgGIgPgGQgEgBgDgDIgLgEQgNgFgHgIIgXgKQg0gXgZg2QgJgVgHgGIgIgHIgKgGIgEgBQgpgKgTgLIgHgFIgLgHQgSgNgLgXQgKgXABgXQAAgJADgHQACgMAEgPIAHgUIADAIQAIAOAVAPQA3AuBDAjQAWANAMgJQgIgGgGgHQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgQgGQgLgFgQgOIgXgYIgagSQgHgFgMgQQgegWgKgXIgMgaIgJgVQgGgLgDgUQgFguACgYQACgSAIgHQAHgFAJAAIARABIAcgEIAYAFQAXAJAEALQAFAKgDAJIAGApIAIAQIABABIAHAIIASAWIAOAXQARAfAXASQAHAFAbARIASAKIgOgSQgQgTgJgPQgFgOgIgKIgLgNQgfgbgKgZIgIgdQgDgHABgEQgEgKgBgNQAAgPADgHQAHgZAbgIQAPgEAKADQANAFAWATIAgAMIAMAKQACACAPADQAwADAVgEQATgCAHAGQAKAHAAAOIAAgBIACAAIgCAEIgBADQgEAIgHAJQABAGgCAGIgHARIgDAIIgEALIAAABQAAALgDAQIgNBMQgIA7gJAmIAJgQIAehfIAJgRQACgIADgUQAAgVADgJQAFgOAOgNIACAAIABgEQALgPABgEQAHgMAFgVIAZhdQAMgnARgPQAGgFAPgHQAegQAQAAIAPABQAIAAAFgCIANgJIACAAIgBgBIgGgDIgIgCIgCgBIgBAAQgDACgJABIgaAEIgBAAIgRAEQgHADgNAIQgYAPgKAKQgkAggMA4QgDAPgHACQgDABgJAAIgMACQgHABgEgDQgDgBgBgCIgDACQgEADgGABQgDAAgRgEQgFgCglgDQgQgCgUgGQgIgCgDgEQgGgBgDgFIgIgLQgNgTgdgFQgWgDgcAHQgMAEgEAEQgGAMgHADIgDAAQgFADgHAAIgTAAIgTgCIgKgBQgDAEgGAAIgDABQgFABgFgCIgKgCIgEgCQgFgDgEgEQgHgJACgPQAEgRABgJIABgKQACgFAFgBQAGgCAEADIACABIABACQADAEAAAIQABAGAAAFIAGADIARAMIgFgGQgCgFgCgOIgHgfQgBgLABgRQABgPAGgIQAGgHANgFQANgHAIgCQALgBAPAFQAPAGAFAHQADAGABAHQADALAAAPIAAABIABAAQADgBAEACQgCgFAAgFIABgVQAAgOAGgEIACgBIADgMIARg0QAEgKAFgDQAFgCAGACIASAKIABAAQAIgBAIADQARAGANASIAFAIQAEAAAEAEQADAEAAAIIABAHQABADADACQAIAGAEAGIAGALQADAEALAIQANAIAFAKQADAHACAIIACAKIgBAJIgBAOIgBANQABALAEANQABAGACAFIAFAJIADADIAQAHQAHADACAFQAGgIAAgFQAAgFgMgGQgPgKgFgUQgDgNABgYIABgVIABgNIgEgHQgDgGAAgDQgfgRgRgdIgGgMIgFgOIgEgGIgHgFIgJgHQgFgDgBgDIgHgPIgGgNQgDgHACgGQABgFAEgGQAJgPAHgRQAEgKAFgCQAEgCAFADQADABABADQAHgEAIgDQANgDAMADQAQAEAIAOQAJAQgGAQIgBAEQACACABAFQAAAFgDAHQgHAYAAAYIADgKQAKgfAOgNIABAAIAGgEQADgEAGgCQAWgJAVgBQAOAAAGAFQAHAFAAAQQABAJgCAEQAAAFgEALIgFAQIgGANQgBAFgHAHQgFAIgHAFIAAADIAAABIACgCQAVgIARgSQAFgGAFgEQAHgHAGgCQAHgCAPADQAYAEAHADQASAIABAOQABAFgDAKIgBANIABAGQAOgEAFAAQAFABADACIACgBQADgCAHACQAGAAAHADIAHAEQADADABAFQAAAFgDAEIgFAEIAFADIAFADIADAEQADADAAAFQABAFgCASIgDAeQAAA3gIAgQgHAfgPAWIgIAPQgTAbgZAWIgMAKQgIAHgEAKIAAAEQANgLAUgNQAmgaARgVIAQgdQAag5ABhDQgBgVAEgIQgCgPAEgHIACgCQACgHAIgEQAHgEAIADIANAJIANAMIAIAQQAHACAFgHQAFgIAJAQQAIAQAFAEQAFADAGAlIgfAwQABAZgCAGQgFASgNAKIgDAGQgGAHgLAAIgIAKIgOAQIgQAYQgtBMg2BGQgpA0gVAeIANgIQAbgRAOgSQALgKAOgYQAQgbAHgIQAIgLAfgeQAagYAKgTQAHgKAJgVQANgSAMgEIAQgXQAAgDgDgDIAIAAIAEgGIgDAGQALAAABgCIADgVQADgMAGAHQAGAHABgQQABgRAEAhQACAbAagCIAJgMQAFgHADgCQAGgDAEACQAEgGAEAAQAEgBADADQAEACAAAEQABACgDAHIgNAhQgDAHgEAAIgHAAQgDAAgDAFIgEAGIABAGQAAAFgDAFQgDAEgEAAQgWA5gLAVIgKATIgQAqQgNAfgtAvQgPASgKAHQgPAPgWALIgiAXQguAchBAcQgjAQgQACQgSADgJAEIgTAHQgSAAgDgPgAiVjjQgBAEgDADIgDACIgBACQAIABADAEQACAEABAHQACAFANAKQAhAWAMARQAFAGABAGIACAAIAFAAIACgEQACgPgSgQQgVgNgJgIQgMgMgFgNIgEgIQgCgDgGgDIgGgDIAAAFgAmOBqQgJgCgGgNQgLgYgGgGIgLgJQgMgKgJgLIgDgEQgGgGgDgKIgJgbIgDgEIgBgDIgFgHQgEgHgDgMIgCgGIAAgGIABgCQABgEAEgDIAIgJQAIgNAFgCIAAAAQAEgBADABIABAAIAGAEQAGAJgIAKIgJAKQADADABAEQABAHgDAEIABAHIAHAKIAHAWIAFALIAIAIIAFAGIADACQAEACACADQADADAAADQAEADAEAAIACgIIgDgHQgLgPgCgRQgBgHACgEQAEgJAMABQAHABAGAFQADgDgBgGIgBgKQAAgIAHgBQAGgDAFAEIABAAIAAABIAAAAQADADAEANQABAEAGANQADAKAAAGIAAAMQgCAQgEAMIgFAQQgEAKgBAGIgDAWQgFAMgJAAIgCAAg");
	this.shape_10.setTransform(397.7,-36.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B3B1F").s().p("AgHHMIgRgBQgIgDgEgEIgDgCIgBgEIgQAAQgPgBgTgDIgcgFQgpgIgNgIQgegQgOgiIgGgNIgLgZQgMgRgigMIgRgIQghgQgbgTQgtgggIgkQgIgZAJgjIgHgPQgHgOgWgUQgYgWgHgMQgFgKgEgLQgRgtgBgaIAAgJIACAGQADAMAEAHIAFAHIABADIADAEIAJAbQADAKAGAGIAEAEQAIALAMAKIALAJQAGAGAMAYQAGANAIACQALABAGgNIADgWQABgGAEgKIAEgQQAFgMABgQIABgNQAAgFgEgKQgGgNAAgEQgEgNgDgDIAAgBIgBgBIAAABQgGgEgGADQgGABAAAIIABAKQABAGgEADQgFgFgIgBQgLgBgFAJQgCAEACAHQACARAKAPIAEAHIgCAIQgEAAgFgDQAAgDgCgDQgCgDgFgCIgDgCIgEgGIgIgIIgGgLIgHgWIgGgKIgCgHQAEgEgCgHQgBgEgDgDIAJgKQAIgKgFgJIgGgEQAHABADAGQADAFgBAHIgFANQgCAKAFAOQAHAaAMATQgNgiAEgRQACgRANgHQAHgDAIABQAIACADAHQAHgKAFgDQAFgDAEgBQgBgVAGgKQAIgNAVgFQgIgYADgPIACgMIAAgPQACgMAMgLIAHgHQAGgDAIAAIABAAIgBgEQgBglAXgXQAMgLARgFQARgFAQAGQAOAEAKALIAFgLIAOgdQAHgTAGgIQAMgOAZgDQAPgBAOAEIAAgVQACgeATgVQAGgHAIgGQAHgDAOgDIAegDQAOAAAHACQAPADAMAOQANAOABARIgBAMIAPgEIAzAAQASACAIAMQAIAJAAAXIgBANQAggEAUAEQAMADAGAEIAOAKQAJALACAFQADAFAAANQAAAKgBAEQAlAAAPALQAJAGAFAJIAGAAQA2AHAfATQAeATARASQAQASgLA8QgRAJACATQAAALgBAPIABABQAOAOAMAcIAEgEQAHgJADgCQAIgGALgBQAIAAADADQAJAFgBAPQAAAKgJAUIgVA1IgBAEQgDAPgIAaQgSA9gWAoQhICIjEBGIgVAJIgkALIgIAEQgFAEgKADIgHABIgLADQgNADgMABIgRACgABODsIgKAfIgFADQgQAQgFAKIgHAKIgVAxIgEAPIAAAKIAAADQgEAHgBAEQgCAMADALQACAEADAFQAEAPASAAIATgHQAJgEARgDQARgCAigQQBBgcAugcIAjgXQAWgLAPgPQAKgHAPgSQAtgvAMgfIARgqIAKgTQAKgVAWg5QAEAAADgEQADgFAAgFIAAgGIAEgGQADgFADAAIAHAAQAEAAACgHIAOghQACgHAAgCQgBgEgDgCQgEgDgEABQgEAAgEAGQgEgCgFADQgEACgFAHIgJAKQgZADgDgaQgDghgBARQgBAQgGgHQgGgHgEAMIgDAVQAAACgLAAIACgGIgEAGIgIAAQADACABADIgRAYQgMAEgNASQgJAVgGAKQgKATgaAYQggAegIALQgHAIgQAbQgNAYgLAKQgOASgcARIgMAIQAUgeAqg0QA2hGAshMIARgYIAOgQIAIgKQALAAAFgHIADgGQANgKAGgSQABgGAAgZIAfgwQgHglgFgDQgFgEgIgQQgIgQgFAIQgFAHgHgCIgJgQIgNgMIgNgJQgHgDgIAEQgIAEgBAHIgDACQgEAHADAPQgEAIAAAVQgBBDgZA5IgRAdQgQAVgnAaQgUANgNALIAAgEQAFgKAHgHIAMgKQAZgWATgbIAJgPQAOgWAHgfQAJgggBg3IADgeQADgSgBgFQgBgFgCgDIgEgEIgFgDIgEgDIAFgEQADgEgBgFQgBgFgDgDIgGgEQgHgDgHAAQgGgCgDACIgDABQgDgCgEgBQgGAAgNAEIgCgGIACgNQACgKgBgFQgBgOgSgIQgGgDgZgEQgOgDgHACQgHACgHAHQgFAEgEAGQgRASgVAIIgDACIAAgBIABgDQAGgFAGgIQAGgHACgFIAFgNIAGgQQADgLABgFQABgEAAgJQAAgQgIgFQgFgFgPAAQgVABgVAJQgHACgDAEIgGAEIAAAAQgOANgKAfIgDAKQAAgYAHgYQACgHAAgFQAAgFgDgCIACgEQAGgQgKgQQgHgOgRgEQgLgDgNADQgIADgIAEQgBgDgCgBQgGgDgDACQgFACgEAKQgHARgJAPQgEAGgCAFQgBAGADAHIAGANIAGAPQACADAFADIAIAHIAIAFIAEAGIAEAOIAGAMQASAdAfARQAAADACAGIAFAHIgBANIgBAVQgBAYACANQAFAUAQAKQALAGAAAFQABAFgHAIQgCgFgGgDIgQgHIgEgDIgEgJQgDgFgBgGQgDgNgBgLIAAgNIABgOIABgJIgCgKQgBgIgDgHQgFgKgNgIQgLgIgDgEIgHgLQgDgGgIgGQgEgCgBgDIAAgHQAAgIgEgEQgDgEgFAAIgEgIQgNgSgRgGQgJgDgIABIAAAAIgSgKQgGgCgFACQgGADgDAKIgRA0IgDAMIgDABQgFAEAAAOIgBAVQAAAFABAFQgEgCgCABIgBgBQgBgPgCgLQgCgHgDgGQgEgHgPgGQgPgFgMABQgIACgMAHQgOAFgGAHQgFAIgBAPQgBARABALIAGAfQACAOADAFIAFAGIgSgMIgGgDQABgFgCgGQAAgIgCgEIgBgCIgDgBQgEgDgFACQgGABgCAFIgBAKQAAAJgEARQgDAPAHAJQAEAEAGADIAAACIAEAAIAJACQAGACAFgBIADgBQAFAAAEgEIAKABIATACIASAAQAHAAAGgDIADAAQAGgDAHgMQADgEANgEQAcgHAWADQAdAFANATIAHALQAEAFAGABQADAEAIACQAUAGAPACQAmADAFACQAQAEADAAQAGgBAFgDIACgCQABACADABQAFADAGgBIAMgCQAKAAACgBQAHgCADgPQANg4AjggQALgKAYgPQANgIAHgDIAQgEIACAAIAagEQAIgBAEgCIAAAAIADABIAIACIAFADIACABIgDAAIgMAJQgFACgJAAIgOgBQgRAAgdAQQgPAHgHAFQgQAPgMAnIgZBdQgFAVgIAMQAAAEgMAPIgBACIgBAAQgOAPgGAOQgDAJAAAVQgCAUgDAIIgIARIgeBfIgKAQQAJgmAJg7IANhMQADgQAAgLIAAgBIAEgNIADgGIAHgRQACgGgBgGQAHgJADgIIABgDIACgEIgBAAIgBABQABgOgKgHQgIgGgTACQgVAEgvgDQgPgDgCgCIgNgKIgggMQgVgTgNgFQgLgDgPAEQgbAIgHAZQgCAHAAAPQAAANAFAKQgCAEADAHIAIAdQAKAZAgAbIALANQAHAKAGAOQAJAPAPATIAOASIgRgKQgcgRgHgFQgWgSgSgfIgNgXIgTgYIgGgGIgCgBIgHgQIgGgpQACgJgFgKQgEgLgWgJIgYgFIgcAEIgRgBQgKAAgHAFQgIAHgBASQgCAYAFAuQADAUAFALIAKAVIALAaQAKAXAeAWQANAQAGAFIAaASIAYAYQAPAOAMAFIAPAGQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAHAHAIAGQgMAJgXgNQhDgjg3guQgUgPgJgOIgDgIIgGAUQgFAPgCAMQgDAHAAAJQAAAXAKAXQAKAXATANIAKAHIAIAFQASALApAKIAEABIALAGIAIAHQAGAGAKAVQAZA2AzAXIAXAKQAHAIANAFIALAEQADADAFABIAPAGIAIAGQANAEAJgKQAJgJgEgNIgDgJQgOgNgPgHIgDgDIgKgKQgFgKgFgQIgJgcQgEgWAAgMQgCgMAEgGQADgGAEgBIAEgBIAAAHQgCAKADAHIADAKIABAOIASAiIABAIIAEACQABADACADQAKAOAOgGIALASQAAgHAFgUQAEgXATgdIAYglQAOgSAFgFQAHgEAHAAIAHACgAnxhJQAJgOANgDQgEACgJANIgIAJQgDADgBAEQABgIACgGgAhMiCIgCAAQgBgGgFgGQgMgRghgWQgNgKgBgFQgCgHgCgEQgDgEgHgBIAAgCIADgCQAEgDAAgEIAAgFIAHADQAFADADADIAEAIQAEANANAMQAJAIAVANQASAQgDAPIgBAEg");
	this.shape_11.setTransform(397.8,-36.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7D410C").s().p("Ag1G6IAQAAIABAEIADACIgUgGgABbG5IAIgEIAkgLIgjAOIgYAIQAKgDAFgEgAAOGmQgDgFgCgEQgDgLACgMQABgEAEgHIAAgDIAAgKIAEgPIAVgxIAHgKQAFgKAQgQIAFgDIAKgfQgKgEgLAGQgFAFgOASIgYAlQgTAdgEAXQgFAUAAAHIgLgSQgOAGgKgOQgCgDgBgDIgEgCIgBgIIgSgiIgBgOIgDgKQgDgHACgKIAAgHIgEABQgEABgDAGQgEAGACAMQAAAMAEAWIAJAcQAFAQAFAKIAKAKIADADQAPAHAOANIADAJQAEANgJAJQgJAKgNgEIgIgGIgPgGQgFgBgDgDIgLgEQgNgFgHgIIgXgKQgzgXgZg2QgKgVgGgGIgIgHIgLgGIgEgBQgpgKgSgLIgIgFIgKgHQgTgNgKgXQgKgXAAgXQAAgJADgHQACgMAFgPIAGgUIADAIQAJAOAUAPQA3AuBDAjQAXANAMgJQgIgGgHgHQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgPgGQgMgFgPgOIgYgYIgagSQgGgFgNgQQgegWgKgXIgLgaIgKgVQgFgLgDgUQgFguACgYQABgSAIgHQAHgFAKAAIARABIAcgEIAYAFQAWAJAEALQAFAKgCAJIAGApIAHAQIACABIAGAIIATAWIANAXQASAfAWASQAHAFAcARIARAKIgOgSQgPgTgJgPQgGgOgHgKIgLgNQgggbgKgZIgIgdQgDgHACgEQgFgKAAgNQAAgPACgHQAHgZAbgIQAPgEALADQANAFAVATIAgAMIANAKQACACAPADQAvADAVgEQATgCAIAGQAKAHgBAOIABgBIABAAIgCAEIgBADQgDAIgHAJQABAGgCAGIgHARIgDAIIgEALIAAABQAAALgDAQIgNBMQgJA7gJAmIAKgQIAehfIAIgRQADgIACgUQAAgVADgJQAGgOAOgNIABAAIABgEQAMgPAAgEQAIgMAFgVIAZhdQAMgnAQgPQAHgFAPgHQAdgQARAAIAOABQAJAAAFgCIAMgJIADAAIgCgBIgFgDIgIgCIgDgBIAAAAQgEACgIABIgaAEIgCAAIgQAEQgHADgNAIQgYAPgLAKQgjAggNA4QgDAPgHACQgCABgKAAIgMACQgGABgFgDQgDgBgBgCIgCACQgFADgGABQgDAAgRgEQgEgCgmgDQgPgCgUgGQgIgCgDgEQgGgBgEgFIgHgLQgNgTgdgFQgWgDgcAHQgNAEgDAEIgBACQgCAGgFAFQgGAGgNABIgVACIgTABQgLAAgHgEIAAAAIgDABQgFABgGgCIgJgCIgEgCQgGgDgEgEQgHgJADgPQAEgRAAgJIABgKQACgFAGgBQAFgCAEADIADABIABACQACAEAAAIQACAJgCAGIgCACIACABQAEABACAGQACgDAEgCIAHgDIgEgQIgGgfQgBgLABgRQABgPAFgIQAGgHAOgFQAMgHAIgCQAMgBAPAFQAPAGAEAHQADAGACAHQACALABAPIAAABIABAAQAEgBAGAEIAFAFQAHABAGAFIABABIAEAAIABAAQARABAEAGQACAEACAHQABAFANAKQAhAWAMARQAFAGABAGIACAAIAGAAIABgEQADgPgSgQQgVgNgJgIQgNgMgEgNIgEgIQgLgCgHgEIgPgJQgOgGgFgFQgLgLAEgPQACgGAEgEIADgJIARg0QADgKAGgDQAFgCAGACIASAKIAAAAQAIgBAJADQARAGANASIAGALIABABQAIAEAEALIAGASIAJALIAMANIAHAEQAGgBAGACQAMADADANQABAIgBAJIgBAEQABAFAAAFIgEARIgBAGIAAAEQABAMADAOQABAGABAFIAGAJIAEADIAQAHQAGADACAFQAHgIgBgFQAAgFgLgGQgQgKgFgUQgCgNABgYIABgVIABgQIgEgLQghgRgTgfIgGgMIgEgOIgLgQIgGgCQgPgGgDgQQgBgFABgIQgCgIACgJIAEgIIADgOQAGgUAKgHQAIgFAJABIAKACIADgBQANgDALADQAQAEAIAOQAJAOgEAPIACAFQACAJgFAPQgFAPgBAIIAAAPIABgDQAKgfAOgNIAAAAIAGgEQADgEAHgCQAVgJAVgBQAPAAAFAFQAIAFAAAQQAAAJgBAEQgBAFgDALIgGAQIgFANQgCAFgGAHIgDAEIABAIQAQgJAOgOQAEgGAFgEQAHgHAHgCQAHgCAOADQAZAEAGADQASAIABAOQABAFgCAKIgCANIACAGQANgEAGAAQAEABADACIADgBQADgCAGACQAHAAAHADIAGAEQADADABAFQABAFgDAEIgFAEIAEADIAFADIAEAEQACADABAFQABAFgDASIgDAeQABA3gJAgQgHAfgOAWIgJAPQgTAbgZAWIgMAKQgHAHgFAKIAAAEQANgLAUgNQAngaAQgVIARgdQAZg5ABhDQAAgVAEgIQgDgPAEgHIADgCQABgHAIgEQAIgEAHADIANAJIANAMIAJAQQAHACAFgHQAFgIAIAQQAIAQAFAEQAFADAHAlIgfAwQAAAZgBAGQgGASgNAKIgDAGQgFAHgLAAIgIAKIgOAQIgRAYQgsBMg2BGQgqA0gUAeIAMgIQAcgRAOgSQALgKANgYQAQgbAHgIQAIgLAggeQAagYAKgTQAGgKAJgVQANgSAMgEIARgXQgBgDgDgDIAIAAIAEgGIgCAGQALAAAAgCIADgVQAEgMAGAHQAGAHABgQQABgRADAhQACAZAVABQAHgMAQgMQAJgHAGADQADACABAEQAAAEgCAEIAEABQAFAFgDAIQgCACgHAHQgLALgGAQIgEAKIgJAPIgMASQgQApgIARIgKATIgRAqQgMAfgtAvQgPASgKAHQgPAPgWALIgjAXQguAchBAcQgiAQgRACQgRADgJAEIgTAHQgSAAgEgPgAgCkjQACAEABADIACAAQgCgKABgIQgCAHgCAEgAmMBqQgIgCgGgNQgMgYgGgGIgLgJQgMgKgIgLIgEgEQgGgGgDgKIgJgbIgDgEIgBgDIgFgHQgEgHgDgMIgCgGIAAgGIACgCQABgEADgDIAIgJQAJgNAEgCIABAAQADgBAEABIABAAIAGAEQAFAJgIAKIgJAKQADADABAEQACAHgEAEIACAHIAGAKIAHAWIAGALIAIAIIAEAGIADACQAFACACADQACADAAADQAFADAEAAIACgIIgEgHQgKgPgCgRQgCgHACgEQAFgJALABQAIABAFAFQAEgDgBgGIgBgKQAAgIAGgBQAGgDAGAEIAAAAIABABIAAAAQADADAEANQAAAEAGANQAEAKAAAGIgBAMQgBAQgFAMIgEAQQgEAKgBAGIgDAWQgFAMgKAAIgCAAg");
	this.shape_12.setTransform(397.5,-36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B3B1F").s().p("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");
	this.shape_13.setTransform(397.8,-36.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7D410C").s().p("AgmHzIAQAAIABADIADACIgUgFgABqHyIAIgEIAkgJIgjAMIgYAGQAKgCAFgDgAAdHiIgFgIQgDgJACgKIAFgJIAAgDIAAgIIAEgMIAVgpIAHgJQAFgIAQgNIAFgDIAKgaQgKgDgLAFQgFAEgOAPIgYAfQgVAYgEATQgFARAAAGIgJgPQgOAFgKgMIgDgFIgEgCIgBgGIgSgcIgBgMIgDgIQgDgGACgJIAAgGIgEABQgEABgDAFQgEAFACAKQAAAKAEASIAJAYQAFANAFAJIAKAIIADACQAPAGAOALIADAIQAEALgJAHQgJAIgNgDIgIgFIgPgFIgIgDIgLgEQgNgEgHgHIgXgIQgzgTgZgtQgKgSgGgFIgIgGIgLgEIgEgBQgpgJgSgJIgIgEIgKgGQgTgLgKgTQgKgTAAgTQAAgIADgGQACgKAFgMIAGgRIADAHQAJALAUANQA3AmBDAeQAXAKAMgHQgIgFgHgGIgBgBIgPgFQgMgEgPgMQgWgTgCgBIgagPQgGgEgNgNQgegTgKgTIgLgWIgKgRQgFgJgDgTQgFgmACgUQABgPAIgGQAHgEAKAAIARABIAcgEIAYAFQAWAHAEAJQAFAJgCAHIAGAiIAHAOIACAAIAGAHIATAUIANATQASAaAWAPIAjATIARAIIgOgPQgPgQgJgMQgGgMgHgIIgLgLQgggXgKgWIgIgYQgDgGACgEQgFgIAAgLQAAgNACgFQAHgVAbgHQAPgDALACQANAEAVAQIAgAKIANAJIARAEQAtACAXgDQATgCAIAFQAKAGgBAMIABgBIABAAIgCADIgBADQgDAHgHAHQABAFgCAFIgHAOIgDAHIgEALIAAABQAAAJgDANIgNBAQgJAxgLAgIAMgOIAehPIAIgOQADgHACgRQAAgRADgIQAGgLAOgNIABAAIABgDQAMgNAAgDQAIgKAFgSIAZhNQAMgeAQgNQAHgEAPgGQAdgOARAAIAOABQAJAAAFgCIAMgHIADAAIgCgBIgFgCIgIgCIgDgBIAAAAQgEACgIABIgaADIgCAAIgQAEQgHACgNAGQgYANgLAIQgjAbgNAtQgDAMgHACQgCABgKAAIgMACQgGAAgFgCQgDgBgBgCIgCACQgFADgGAAQgDABgRgEQgGgCgkgCQgPgBgUgFQgIgDgDgDQgGAAgEgEIgHgKQgNgQgdgCQgWgDgcAFQgNADgDADQgHAKgGACQgEABgFgBIgKgCIgLAAIgBAAQgCgCgEgBQgHgBgFgDIgDgHQAAgCgDAAIgDgDIgCgCIgFgFQgDgEgCgMIgGgaQgBgJABgOIABgIIAAAAQgJARgJAMIgJAOIACAAQAFgCAEACIADACIABABQACAEAAAGIABADQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgCACAEAGIAAAAIgBABIACABIABABIABACIAGAMQAFALAFACIAIADIAFADQAEACACgBQAJAFAGgFIABAAIgDAEQgEADgIAAIgRgCIgSAAIgKABQgHAAgCgDQgDgDABgDIACgCIgIgFIgBgCIgBADQgBADgIAHIgNAJIgBgDQgEgBgBgCIgBgEQgBgEgHgEQgTgKgLgQIgEgFQgDgDgDABQgEACAAAFIADAGQAGALAGAJQAAAKABAHQAGgCAGABIACABIACABIADACIAEADIABABQABAEABABIABABIABAFQgBAQgYAMQgTAIgMgHQgFgFgDgLQgMgxAQgvIAFgQQADgJAAgHQAAgFgFgaQgEgTAHgKQAIgMAdgJIA0gRQASgGALABQAHABAGAEIABABIADAEIACACIABAEIADgBIAHACQAHACADgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQABgDgBgCIABgBQgDgDgIgBIgGgBQgEgCgCgEIgEgKQgDgIgJgDIAAgBIABgaIAEgLQADgHAAgFIgBgFIABgEIgBgEIgIgiQgBgFgDgBIAAAAIgDgFIgHgTQgCgMAKgFQALgGALAIQAHAEAGALQANAYABAlIgBA+QAMABALAJIASARIAOALQAJAGAEAFQAFAGABAIQABAJgGAFQgFAFgJABIgBAAIgBAAQgIAAgJgDIgRgFQgKgDgHABIgXAFQgJABgIgBIAEAHQADAHgDAKIABgBIAGgFIAEABQAJABABgGIABgCQAMgGAHgBQAMgBAPAEQAPAFAEAGQADAFACAGQACAJABANIAAABIABAAQADgBAFACIgBACQAAADADADQACACADgBQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAIASAAIAFgBIAHADIADABQAEACgBAFIAAABIABACQABAEANAIQAhATAMAMQAFAFABAFIACAAIAGAAIABgDQADgNgSgLQgVgLgJgGQgNgKgEgMIgEgGQgDgDgFgCIgSgHQgJgJgKgFQgEgCAAgDIAAgFQABgEgDgEIgDgDIAEgMIARgsQADgIAGgCQAFgDAGACIASAIIAAAAQAIAAAJACQARAFANAPIAIAOIABABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIACAGQAKATAKAOIAFAEIAMAEIAPAFIADAEIAAAFIABAGIABAHIgCAOIABAOQADAJAAAHIABAEIAEABIADAAIAAACQABAGADAEIAGAIIAEACIAQAGQAGACACAEQAHgHgBgEQAAgDgLgGQgQgIgFgPQgCgKABgUIABgRQACgGADgDQAEgFAAgDQAAgEgEgEIgJgEQgLgEgTgLIgFgDQgJgIgHgJQgBgEgEgFIgBgCIgEgKIgGgIIgCgKQgBgKgEgEQgDgDgJgDIgJgCIAAgBQgEgIADgKQADgGAIgLIAEgEIAEAAIAYgKIADABQAIABAGgGIABgDQAKgDAGgCQAQADAIAMQAKANgGANIgCAFIgCAAQgDAAgCAEIgIALQgLAQgBAHQAAAIAAAHQAAALABALQABAEABABQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAAAIACACIAAAAQACAFAEACIACAAQgCgLABgJQABgIAGgOQAKgbAOgKIAAgBIAGgCQADgEAHgCQAVgHAVgBQAPAAAFAEQAIAFAAANQAAAHgBADQgBAFgDAJIgGANIgFALIgBACIgBAAIgYAPIgFAEQgCADACADQADACAGgDIAGgEQAUgHAQgOQAEgFAFgDQAHgGAHgCQAHgBAOACQAZADAGADQASAHABALQABAEgCAIIgCAMIACAEQANgDAGAAIAHACIADAAQADgCAGACQAHAAAHADIAGADQADACABAFQABAEgDADIgFADIAEACIAFADIAEADQACADABAEQABAFgDAOIgDAZQABAsgJAbQgHAagOASIgJANQgTAYgZASIgMAIQgHAGgFAJIAAADQANgJAUgLQAngWAQgSIARgZQAZgwABg2QAAgRAEgGQgDgNAEgGIADgBQABgGAIgEQAIgDAHACIANAIIANAKIAJANQAHACAFgGQAFgHAIAOQAIANAFADQAFADAHAdIgfAoQAAAVgBAFQgGAPgNAIIgDAFQgFAGgLAAIgIAKIgOANQgGAGgLAPQgsA/g2A6QgqAsgUAZIAMgHQAcgOAOgPQALgJANgUQAQgWAHgHQAIgJAggZQAagUAKgQQAGgIAJgSQANgPAMgDIARgUQgBgEgDgCIAIAAIAEgFIgCAFQALAAAAgBIADgSQAEgKAGAGQAFAFACgLIACgCIACANQADAZAcgEIgBADIgDAPQgCAGADAEQACADAEAAIACABQgeBAgMAVIgKAQIgRAjQgMAagtAnQgPAPgKAGQgPAMgWAKIgjATQguAXhBAYQgiANgRACQgRACgJADIgTAGQgSAAgEgMgAlihYQAAAAABABQAAAAABAAQAAABABgBQAAAAABAAQAFgBABgHIADgOQABgDgBgDIgEgDIgEgDIgDgDQgDgCgFAEIgGAGIgGAEIgBADIgDABIABADIgCAHQgBAGABABQABACAEABIAGAAIAFgDIAFgCQAAABAAAAQAAABAAABQAAAAABABQAAAAABABgAmDhlIgBAAIgCACIAAAEIABABIADABIABAAIACgBIACgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIgBgCIgBAAIgBgBIgCAAIgBgBIAAABgAk5iBIAGABIgCgCgAl9DaQgIgCgGgLQgMgTgGgFIgLgIQgMgIgIgJIgEgEQgGgFgDgIIgJgYIgDgEIgBgCIgFgGQgEgGgDgKIgCgFIAAgFIACgCQABgDADgDIAIgHIACACQAFACAFgEIAAABIAFACIAEADIACADIgHAGQADACABAEQACAGgEADIACAGIAGAIIAHATIAGALIAIAGIAEAFIADACIAHAEQACACAAADQAFACAEAAIACgGIgEgGQgGgHgDgJIgCgGIAAgCIgBgEQgCgGACgEQAFgHALABQAIABAFAEQAEgDgBgFIgBgIQAAgHAGgBQAGgCAGADIAAAAIABABQADADAEAKQAAAEAGAKQAEAJAAAGIgBALQgBANgFAKIgEAOQgEAIgBAFIgDASQgFAKgKAAIgCAAgAHGgKQgIgEgFgJQgFgKgCgCQgCgDgPgJIgSgMQgNgHgXgFIgngIQgQgGgEgHQgCgFADgFQACgFAGgEQAGgEASgFQAigJAdgNIASgHQAUgEATAOQAXAPAAAaQABAFgCAIIgCANQgBAHABAPQABAHADAHIAEALQABAFgDAFQgEAFgGACIgHABQgHAAgFgDgAD1hkQgIgFgBgNIAAgLQABgGgBgEQgQgIgIgBQgNgBgHgCIgQgEIgQgBQgJgCgFgHQgEgHACgHIAFgJIABgBIgOgKQgLgHgIgBQgIgBgLACIgSAFQgKADgJgBQgLgCgEgGQgCgDgBgNQgBgGgCgGIAAgBQAAgEgCgDIgCgBIgDgEIgCgCIgBAAIgCAAIgBgBIgCgEQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAAAgBAAQgDgCgJAFIAAAAIgDgBIgBADIgIACIgOAFIgHgBIgMAAQgIgBgEgCIgIgDQACAJgFAFIgEADIgBAAQgIAFgDADQgEADgCANQgBAKgGAKIgEAIIgOgDIgQgCQgKAAgTAGQgGACAAAEQAAAEADAAIgGAFIgEAGIgBgBIgDgBIACgCQADgDgBgEQgBgDgFgCIgIgDQgWgIgFgZIgCgVIgBgVIgHghIAAgBIAAgCIgBAAIABADQgDAEgIAHQgKAHgDAEQgCADgCAMIACAIIAKAZIADAHIgGgIQgJgLgBgHIABgMIAAgCQgCgKACgIIADgOQABgEgCgLIgGgGQgFgGgEgMIgEgJIgGgGQgKgMABgNIACgMIABgLQABgDAEgFIAGgIIAHgPQADgJAGgEQAFgDAHAAQAGAAAFADQAEACAEAFIAHAIIAKAHQAIAHAAARIAAADQAEADADAEQACADADAJQACAIACADQAGAHAUAGQAJADAKAGQADAHAJAIIAMAMIAFADQAEABABgDIABgCIgCgFIgOgMQgIgIgCgGIgCgLQgDgHgNgDIgTgFIgHgBIgBABQgFgFgFgIIgJgSIgJgQQgFgKAFgHQAGgKASgBIATgBIARgEIARgEQAOgEATgJQAUgJAKACIAIADIAJABQAPABAOAJQAMAIAEAJQADAGABAIQAEAYgGAOIgCAFIAAAEIgBANIgFANQgBAFAAAMIgDAJQAAAFAAADQAAAEACAIQABADgCAMQgBAFABADIAFgHIAGgFIgBgGQgCgGAAgMQABgUALgUQALgTASgOIALgHIACABIABAAIADgDQADAAAEgDIAFgEIAAAAIADgDIABAAIAIgHQALgJAFgGIADgGQAAgDgDgCIAAAAIAJgEQAJgCAIABQAJADAEAGQAGAJgLASQgKAQgMAOQAPABAKAKQALAKgBAMIgBAGIgBAAQgEACgCADQgDAEACADQgJAHgTABQgZADgHACQACAEAFABQAFACAFgBIASgHQAOgGANACIAAgDIABgDQADAAAEgDIAUgOQAGgFABgDQACgFgEgHQgDgKgKgRIgBgSQABgdgOgbQgEgBgOgCIgFgEIgSgKIgBgFQABgHAGgFQAJgIAMACIABAAQgDACACAEQACACAEAAIAYABIACAAQANAFAHAOQAGAIAEARIAEASQADAMAAAHIgCAPQABAGAHALQAHALAAAGQAAAGgHALIgBADIAJgJIAEgFIAAgHQAAgFAFgGIACgBIABgCQAHgHAHgBQAKgDAHAFIAGAFQADACAGAAQANAAADABQAKABAEAFIAGAJIAJAEQALAGAFAFQAIAJgDAIQgCAGgGADQgGAEgHgBIgPgEQgNgCgSAGIgOAFQgJAEgGABQgMACgDACIgMAIQgLAIgPgDQgPgDgFgLIgHABIABAFQACAHgDAFIgBgBQgBgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBABQgDAAAAAHIABAIIABAKQABAEADACIAEAAIAJgBQAGgBABgEIADgJIAAAAIAJgCIAdgJQAigHAYAPQAMAIAFANIABACIgCAGIgEARIgEALIgJAIIgBABIgKAEQgJADgIAIQgDADAAACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAHgFQAEgDANgEQAKgEAEgFQAEgEADgMIADgHIAEgLQACgHAEgEQAHgGAJABQAKABAFAHQADAFAAAGQAEAAAFACQAGADADAEQACAFgBAGQgBAFgFAEQANAFAHAEQALAHABAJQAIgBAGAEQAHAEABAGQACAGgEAFQgDAGgHACIgOACQgOABgoAGIgiAFQAEAFgCAHQgCAIgMAHQgOAIgLACQgHADgGAAQgGAAgFgDgABxj9QAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIAAABQgCABgBADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIAEACIATABQAJAAACgBQAEgCABgCQABgCAAgDQgCgFgGABIgIACQgFAAgHgBIgCgBIgCgEIgBAAIgCAAIgCAAgAAVkYQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAACIABACIAAAAIADABIABAAIADgDIABgBIgCgEIgCgBIgBAAIgCABgAhakgQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIAAABIABAAIACABIACAAIADgCIAAgCIgCgEIgBAAIgCAAIgCAAgABJloQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIgFACIgGACQgDACACADQAAABAAAAQAAABABAAQAAAAABABQABAAABAAIABAAIABACIAAAAIADABIABAAIADgDIABgBIgBgBIAGgCIAIgCIADAAIADgBQAFgEADgGQAEgHgDgDQgCgDgDABQgDABgCACIgFAIQgCACgFACIgBgBIgBgBIgCAAIgCABgAiNlaIABAAQAIAEABACIACAFIgMgLg");
	this.shape_14.setTransform(396,-41.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5B3B1F").s().p("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QAHAJAJAIIAFACQAVALAJAFIAJAEQAEAEAAAEQAAADgEAEQgDAEgCAGIgBAQQgBAUACAJQAFARAQAIQALAFAAAEQABAEgHAHQgCgEgGgDIgQgFIgEgDIgEgIQgDgEgBgFIAAgCIgDAAIgEgCIgBgGQAAgFgDgJIgDgOIAEgOIgBgHIgCgGIgBgFIgDgDIgPgGIgMgDIgFgFQgKgNgKgUIgCgFQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAAgBIgBgBIgIgNQgNgPgRgFQgJgDgIABIAAAAIgSgIQgGgCgFACQgGADgDAIIgRArIgEAMIADADQADAEgBAEIAAAGQAAACAEACQAKAGAJAIIASAIQAFACADACIAEAHQAEALANAKQAJAHAVALQASALgDANIgBACIgGAAIgCAAQgBgEgFgGQgMgNghgRQgNgIgBgEIgBgDIAAgBQABgEgEgDIgDAAIgHgDIgFAAIgSABQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgDABgCgCQgDgCAAgEIABgCQgFgCgDABIgBgBQgBgMgCgJQgCgHgDgEQgEgGgPgFQgPgFgMACQgHABgMAFIgBADQgBAFgJgBIgEAAIgGAEIgBACQADgLgDgHIgEgHQAIACAJgCIAXgFQAHAAAKADIARAFQAJADAIgBIABAAIAAABIABgBQAJgBAFgEQAGgGgBgIQgBgIgFgHQgEgFgJgGIgOgKIgSgSQgLgJgMgBIABg+QgBgkgNgYQgGgLgHgFQgLgHgLAFQgKAFACANIAHATIADAFIAAAAQADABABAFIAIAhIABAFIgBADIABAGQAAAEgDAHIgEALIgBAbIAAABQAJADADAIIAEAKQACAEAEACIAGABQAIABADADIgBAAQABACgBADQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQgDABgHgCIgHgDIgDABIgBgEIgCgBIgDgEIgBgBQgGgEgHgBQgLgBgSAGIg0AQQgdAJgIAMQgHALAEATQAFAaAAAEQAAAHgDAJIgFAQQgQAvAMAyQADALAFAEQAMAIATgJQAYgLABgQIgBgGIgBAAQgBgBgBgEIgBgBIgEgEIgDgCIgCAAIgCgBQgGgCgGACQgBgHAAgJQgGgJgGgNIgDgFQAAgFAEgBQADgCADADIAEAGQALAQATAKQAHAEABADIABAFQABABAEABIABAEIANgJQAIgIABgDIABgCIABABIAIAFIgCACQgBAEADACQACAEAHAAIAKgBIASAAIARABQAIAAAEgCIADgFIgBABQgGAEgJgFQgCACgEgCIgFgDIgIgDQgFgCgFgMIgGgNIgBgBIgBAAIAAgBIgBgBIAAgBQgEgFACgCQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIgBgEQAAgGgCgDIgBgCIgDgBQgEgCgFABIgCABIAJgOQAJgMAJgRIAAAAIgBAHQgBAOABAJIAGAbQACALADAEIAFAEIABACIAEACQADADAAACIADAHQAFACAHACQAEAAACACIAAABIABgBIALABIAKACQAFABAEgBQAGgCAHgKQADgDANgEQAcgGAWACQAdAFANAQIAHAJQAEAEAGABQADADAIACQAUAFAPABQAmADAFABQAQAEADAAQAGgBAFgCIACgCQABACADABQAFACAGgBIAMgBQAKAAACgBQAHgCADgMQANgtAjgbQALgIAYgNQANgHAHgCIAQgDIACAAIAagDQAIgBAEgCIAAAAIADAAIAIACIAFADIACAAIgDABIgMAHQgFACgJAAIgOgBQgRAAgdANQgPAGgHAFQgQAMgMAfIgZBNQgFASgIAKQAAADgMANIgBADIgBAAQgOANgGALQgDAIAAARQgCARgDAHIgIANIgeBQIgKANQAJgfAJgxIANhAQADgNAAgJIAAgCIAEgKIADgHIAHgOQACgFgBgFQAHgIADgGIABgDIACgDIgBAAIgBABQABgMgKgGQgIgFgTABQgVAEgvgCIgRgEIgNgJIgggKQgVgQgNgEQgLgCgPADQgbAHgHAUQgCAGAAANQAAALAFAIQgCADADAGIAIAZQAKAWAgAXIALAKQAHAJAGALQAJANAPAQIAOAOIgRgHIgjgTQgWgPgSgaIgNgTIgTgUIgGgHIgCgBIgHgNIgGgiQACgIgFgIQgEgJgWgIIgYgEIgcAEIgRgBQgKAAgHADQgIAHgBAPQgCAUAFAmQADATAFAJIAKARIALAWQAKATAeATQANANAGAEIAaAPQACAAAWAUQAPAMAMAEIAPAFIABABQAHAGAIAEQgMAIgXgLQhDgdg3gmQgUgNgJgMIgDgHIgGASQgFAMgCAKQgDAFAAAIQAAAUAKATQAKATATAKIAKAGIAIAFQASAJApAIIAEABIALAFIAIAGQAGAFAKASQAZAtAzASIAXAJQAHAGANAFIALADIAIADIAPAGIAIAFQANADAJgIQAJgIgEgLIgDgHQgOgLgPgGIgDgCIgKgJQgFgIgFgNIgJgYQgEgTAAgKQgCgKAEgEQADgFAEgBIAEgBIAAAGQgCAIADAGIADAJIABALIASAcIABAHIAEACIADAFQAKALAOgEIALAPQAAgGAFgRQAEgTATgZIAYgeQAOgQAFgDQAHgDAGAAIAIABgAGQiKIgSAGQgdAOgiAJQgSAEgGAEQgGAEgCAFQgDAGACAFQAEAHAQAFIAnAJQAXAFANAHIASALQAPAKACADQACACAFAKQAFAJAIADQAJAEAKgDQAGgBAEgFQADgFgBgFIgEgLQgDgGgBgIQgBgOABgHIACgOQACgIgBgFQAAgZgXgQQgPgKgOAAIgKABgABjjEQAIABALAGIAOAKIgBACIgFAIQgCAIAEAGQAFAHAJACIAQABIAQAFQAHACANAAQAIACAQAIQABAEgBAGIAAAKQABAOAIAEQAJAGAPgFQALgDAOgHQAMgIACgIQACgGgEgFIAigFQAogHAOAAIAOgCQAHgCADgGQAEgGgCgGQgBgGgHgDQgGgEgIAAQgBgIgLgHQgHgFgNgEQAFgEABgGQABgFgCgFQgDgFgGgDQgFgCgEAAQAAgGgDgEQgFgHgKgBQgJgCgHAGQgEAEgCAHIgEAMIgDAHQgDAMgEAEQgEAEgKAEQgNAEgEADIgHAFQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgDADgDQAIgHAJgEIAKgDIABgBIAJgIIAEgLIAEgRIACgGIgBgDQgFgMgMgIQgYgPgiAHIgdAIIgJACIAAABIgDAIQgBAEgGACIgJABIgEgBQgDgBgBgEIgBgLIgBgIQAAgGADgBQABAAAAAAQABAAAAAAQABAAABABQAAAAABABIABABQADgGgCgHIgBgFIAHAAQAFALAPADQAPADALgJIAMgIQADgCAMgCQAGgBAJgDIAOgGQASgGANADIAPAEQAHABAGgEQAGgDACgGQADgJgIgIQgFgGgLgFIgJgFIgGgIQgEgGgKgBQgDgBgNAAQgGAAgDgBIgGgFQgHgGgKADQgHACgHAHIgBABIgCgBIAAADQgFAFAAAGIAAAGIgEAGIgJAIIABgDQAHgLAAgGQAAgGgHgKQgHgMgBgFIACgPQAAgHgDgNIgEgRQgEgRgGgJQgHgNgNgFIgCgBIgYgBQgEAAgCgCQgCgDADgCIgBgBQgMgCgJAIQgGAFgBAHIABAGIASAJIAFAFQAOABAEACQAOAbgBAcIABATQAKARADAKQAEAGgCAGQgBADgGAEIgUAOQgEAEgDgBIgBAEIAAADQgNgCgOAGIgSAGQgFABgFgBQgFgCgCgDQAHgDAZgCQATgCAJgHQgCgDADgDQACgDAEgCIABgBIABgGQABgMgLgJQgKgKgPgBQAMgPAKgQQALgSgGgJQgEgGgJgCQgIgCgJACIgJAEIAAABQADABAAADIgDAGQgFAHgLAIIgIAHIgBABIgDACIAAAAIgFAEQgEAEgDAAIgDACIgBAAIgCAAIgLAHQgSAOgLATQgJATgBAVQAAAMACAFIABAGIgGAGIgFAGQgBgDABgEQACgMgBgEQgEgHAAgFQAAgDACgFIADgJQAAgLABgGIAFgMIABgOIAAgEIACgEQAEgOgCgYQgBgJgDgGQgEgJgOgHQgOgJgPgCIgJAAIgIgEQgKgCgUAKQgTAJgOADIgRAEIgRAFIgTAAQgSABgGAKQgFAHAFALIAJAQIAJARQAFAIAFAFIABAAIAHAAIATAGQANADADAGIACALQACAHAIAHIAOANIACAFIgBACQgBACgEgBIgFgDIgMgLQgJgJgDgGQgKgGgJgEQgUgFgGgHQgCgDgCgIQgDgJgCgDQgDgFgEgCIAAgEQAAgRgIgHIgKgHIgHgIQgEgFgEgCQgFgDgGAAQgHAAgFADQgGAEgDAKIgHAPIgGAIQgEAEgBADIgBALIgCAMQgBANAKAMIAGAHIAEAJQAEAMAFAGIAGAFQACAMgBADIgDAPQgCAIACAJIAAACIgBANQABAHAJALIAGAIIgDgHIgKgZIgCgJQACgLACgEQADgDAKgIQAIgGADgFIAHAiIABAVIACAUQAFAaAWAIIAIADQAFACABADQABADgDAEIgCABIADABIABABIAEgGIAGgEQgDgBAAgDQAAgEAGgCQATgGAKAAIAQACIAOADIAEgIQAGgKABgLQACgMAEgDQADgEAIgEIABgBIAEgCQAFgGgCgIIAIADQAEACAIAAIAMABIAHAAIAOgFIAKgCIABgDIADACIAAgBQAHgEADABQABAAAAABQABAAAAAAQAAABABAAQAAABABAAIACAFIABABIACAAIADABIADAFIACABQACACAAAEIAAACQACAFABAGQABANACADQAEAGALACQAJABAKgCIASgFIAMgCIAHABgAD0kcIAEAAIgMgBIAIABgAiTlFIgCgFQgBgCgIgDIgBAAIAMAKgAl0hOQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgFACIgFADIgGgBQgEgBgBgBQgBgCABgFIACgHIgBgEIADgBIABgDIAGgEIAGgGQAFgDADACIADACIAEADIAEAEQABADgBADIgDANQgBAHgFACIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBgAmUhSIgDgCIgBgBIAAgEIACgBIABgBIABAAIACAAIABABIABABIABABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgCACIgCABgAlLh2IAEgBIACACIgGgBgABgjiIgEgCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgDACgCIAAgBIgBgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIABABIACAEIACAAQAHACAFgBIAIgBQAGgBACAEQAAADgBADQgBACgEABQgCABgJAAIgTgBgAAFkGIgDgBIAAAAIgBgBIAAgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIACAAIACAEIgBACIgDACgAhqkNIgCgBIgBAAIAAgCIgBgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIABABIACAEIAAABIgDADgAAylMIgDgBIAAAAIgBgBIgBAAQgBAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgCgDADgCIAGgDIAFgBIAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIABAAIABABQAFgCACgCIAFgHQACgDADAAQADgBACADQADADgEAGQgDAGgFAEIgDACIgDAAIgIACIgGACIABAAIgBACIgDACg");
	this.shape_15.setTransform(397.8,-42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7D410C").s().p("AgmIIIAQAAIABADIADACIgUgFgABqIHIAIgEIAkgJIgjAMIgYAHQAKgDAFgDgAAdH2IgFgHQgDgKACgKQABgDAEgGIAAgDIAAgJIAEgNIAVgqIAHgJQAFgIAQgOIAFgDIAKgbQgKgDgLAFQgFAEgOAQIgYAgQgVAZgEAUQgFARAAAGIgJgPQgOAFgKgNQgCgCgBgDIgEgCIgBgGIgSgdIgBgNIgDgIQgDgGACgJIAAgGIgEAAQgEACgDAFQgEAFACAKQAAAKAEAUIAJAYQAFAOAFAJIAKAIIADADQAPAGAOALIADAIQAEALgJAIQgJAIgNgDIgIgFIgPgFQgFgBgDgDIgLgDQgNgFgHgHIgXgIQgzgUgZgvQgKgSgGgFIgIgGIgLgFIgEgBQgpgJgSgJIgIgFIgKgGQgTgLgKgUQgKgUAAgUQAAgIADgGQACgKAFgNIAGgSIADAHQAJAMAUAOQA3AnBDAfQAXALAMgIQgIgFgHgGQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgPgFQgMgEgPgNIgYgVIgagPQgGgEgNgOQgegTgKgUIgLgXIgKgSQgFgJgDgUQgFgnACgVQABgPAIgHQAHgEAKAAIARABIAcgEIAYAFQAWAIAEAJQAFAJgCAIIAGAjIAHAOIACAAIAGAHIATAVIANAUQASAbAWAQIAjATIARAIIgOgPQgPgRgJgNQgGgLgHgKIgLgKQgggYgKgXIgIgZQgDgGACgEQgFgIAAgMQAAgNACgGQAHgVAbgIQAPgDALACQANAFAVAQIAgAKIANAKIARAEQAtACAXgDQATgCAIAFQAKAGgBANIABgBIABAAIgCADIgBADQgDAHgHAIQABAEgCAGIgHAOIgDAIIgEALIAAABQAAAJgDAOIgNBCQgJAzgLAhIAMgOIAehTIAIgOQADgHACgSQAAgRADgIQAGgMAOgOIABAAIABgDQAMgNAAgDQAIgLAFgSIAZhQQAMggAQgNQAHgFAPgGQAdgOARAAIAOABQAJAAAFgCIAMgHIADAAIgCgBIgFgDIgIgCIgDAAIAAAAQgEACgIABIgaADIgCAAIgQAEQgHACgNAHQgYANgLAIQgjAcgNAvQgDAMgHADQgCABgKAAIgMABQgGABgFgCQgDgBgBgDIgCADQgFACgGABQgDAAgRgEQgGgCgkgCQgPgBgUgGQgIgCgDgDQgGgBgEgEIgHgKQgNgQgdgDQgWgCgcAEQgNAEgDADQgHAKgGADQgEABgFgBIgKgDIgDAAQgEAEgGACQAAADgDADQgEACgIAAIgRgBQgLgBgHABIgKABQgHAAgCgEQgDgCABgEIACgCIgIgFIgBgCIgBADQgBADgIAIQgJAHgGADQgEAHgKAFIABAFQgBAQgYAMQgTAJgMgIQgFgEgDgMQgMgzAQgxIAFgRQADgJAAgHQAAgFgFgbQgEgUAHgLQAIgMAdgKIA0gQQASgHALABIACABIAIAHIAJAEIABAEIAHgCIABAAQAEABACgCIABgCIAKgBQgDgDgIgBIgCgCIgKgCQgDgBgHgGQgFgHgBgNIACgrIAAgBQAFgOAAgNIgEgSIgGgQQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgCgEIgHgTQgCgNAKgFQALgGALAHQAHAFAGAMQANAZABAlIgBBBQAMABALAJIASASIAOALQAJAHAEAEQAFAHABAJQABAJgGAFQgFAFgJABIgBAAIgBAAQgIAAgJgDIgRgFQgKgDgHABIgXAFQgJABgIgBQADADABAEQADAHgDALIABgBIAGgFIAEABQAJABABgGIABgDQAMgFAHgCQAMgBAPAEQAPAGAEAGQADAFACAGQACAKABANIAAABIABAAQAEgCAGAEIAIAHIABACIAEABQgDAEAEACIAFABIAKgBIAFgBIACgDIAGADIADAAQAEADgBAFIAAABIABACQABAFANAIQAhATAMANQAFAFABAFIACAAIADAAQgBgGAEgIQgEgGgKgIQgVgLgJgHQgNgKgEgMIgEgHQgDgDgFgCIgRgHQgEADgGAAQgKABgGgJIgFgFQgGgIADgKQACgGADgDIAEgMIARgtQADgJAGgCQAFgDAGACIASAJIAAAAQAIgBAJADQARAFANAPIAIAPIAAAAIABAAQARAFAHAFIAEADIgBgDIgCgDIgGgKIgEgMIgLgOQgJgCgFgEQgJgIABgLIgBgDQgEgJADgKIADgGIAFgDQAGgGAAgFQACgBAHgBQAGgBAAgFQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBgBAAIACgCIABAAQADAEAEgBQAGAAABgHIABgEIAIgDQANgCAKACQARADAIANQAJAMgEANIAAAEQAAAHgJAQIgFALQgEALgBAJQgBAKADATQABAFgBAFIADADIACAAQgCgMABgJQABgJAGgPQAKgbAOgLIAAAAIAGgDQADgEAHgCQAVgHAVgBQAPAAAFAEQAIAFAAANQAAAIgBADQgBAFgDAJIgGAOIgFAMQgCAEgGAGIAAAEIAAAFQAPgHANgMQAEgFAFgDQAHgHAHgBQAHgCAOADQAZADAGADQASAHABAMQABAEgCAJIgCALIACAFQANgDAGAAIAHACIADgBQADgBAGABQAHABAHACIAGAEQADACABAFQABAEgDADIgFAEQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAFADIAEADQACADABAEQABAFgDAPIgDAaQABAugJAcQgHAbgOASIgJAOQgTAZgZATIgMAIQgHAGgFAJIAAADQANgJAUgLQAngXAQgTIARgaQAZgxABg4QAAgSAEgHQgDgNAEgGIADgCQABgGAIgEQAIgDAHACIANAIIANALIAJAOQAHACAFgHQAFgHAIAOQAIAOAFADQAFADAHAeIgfAqQAAAWgBAFQgGAPgNAJIgDAFQgFAGgLAAQgGAJgCACIgOANIgRAVQgsBCg2A9QgqAtgUAaIAMgHQAcgPAOgPQALgJANgVQAQgXAHgHQAIgKAggaQAagUAKgRQAGgJAJgSQANgQAMgDIARgVQgBgDgDgDIAIAAIAEgFIgCAFQALAAAAgBIADgTQAEgKAGAGQAFAGACgMIACgCIACAOQADAaAcgFIgBAEIgDAPQgCAHADADQACADAEABIACAAQgeBDgMAWIgKAQIgRAlQgMAbgtAoQgPAQgKAGQgPANgWAKIgjAUQguAXhBAZQgiAOgRACQgRACgJADIgTAGQgSAAgEgNgAgRhTIgBABQANAGAFAFIABAEIAHACQAIAFABALQAAAHgFAKIgBABQgCABAAAEIgBACIgBACIAAAFIACAJIgBAIIABADQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIAAAAQABAGADAEIAGAIIAEACIAQAGQAGADACAEQAHgHgBgEQAAgEgLgGQgQgIgFgQQgCgLABgUIABgTIABgRIAAAAIgCgEIgBgCIgBAAQgOgGgKgIIgHgBIgGgDQABAHgCAHgAksgnIADACIABABQACAEAAAGQACAIgCAGIgCABIACABIABABIgBAEQgCANACAHQABADADACIAJAAIAIADQAEABADgCQACgCAAgEIACAAIgBgCQgDgFABgGIgDgCQgHgEAAgIIgEgNIgGgcQgBgJABgPIABgHIAAAAQgJARgJANIgJAOIACAAIAEgBIAFABgAl9DlQgIgCgGgLQgMgVgGgFIgLgIQgMgIgIgKIgEgEQgGgFgDgIIgJgZIgDgEIgBgCIgFgGQgEgHgDgKIgCgFIAAgFIACgCQABgDADgEIAIgHIACACQAFACAFgEIAAABIAFACIAEADIACADIgHAHQADACABADQACAGgEAEIACAGIAGAJIAHATIAGALIAIAHIAEAFIADACQAFACACACQACADAAADQAFACAEAAIACgHIgEgGQgGgHgDgJIgCgHIAAgCIgBgEQgCgGACgEQAFgIALABQAIABAFAFQAEgDgBgGIgBgIQAAgHAGgBQAEgCAEABIAIAQIAFAEIAFALQAEAJAAAGIgBAMQgBAOgFAKIgEAOQgEAIgBAFIgDATQgGALgJAAIgCAAgAHGgIQgIgEgFgJIgHgNQgCgDgPgKIgSgMQgNgHgXgFIgngJQgQgFgEgIQgCgFADgGQACgFAGgEQAGgEASgFQAigJAdgOIASgHQAUgFATAPQAXAQAAAaQABAGgCAIIgCAOQgBAHABAPQABAIADAHIAEALQABAGgDAFQgEAFgGACIgIACQgGAAgFgEgAD1hmQgIgEgBgOIAAgLQABgGgBgFQgQgIgIgBIgUgDIgQgFIgQgBQgJgCgFgHQgEgHACgHIAFgJIABgCIgOgKQgLgHgIgBQgIgCgLADIgSAFQgKADgJgCQgLgBgEgHIAAgBIgCgIQAEACACgFQACgEgDgFIgGgHIgEgEIgCgEIgBgCIgCgGQgCgDgDABIgCACQgOgCgHgFQgDAHgFADQgFABgRgBIgMAAQgIgBgEgCQgEgBgEgCQADAKgJAHIgGAEIgRAHIgHAEQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAFAAIAHgBIgBADQgBAJgEAJQABAFgBAHQgDAKgIAEQgHAEgMgDIgTgGIgEgBIAAAAQgGADgGAAIgCAAQgEACgDADIgEAGIgBgBIgDgBIACgCQADgDgBgEQgBgDgFgCIgIgDQgWgIgFgbQgCgIAAgNIgBgWIgCgMIgCgcIgBgGQgCgEgEABQgEACABAHIABANIgFAEQgKAHgDAEQgCAEgCAMIACAIIAKAaIADAIIgGgIQgJgMgBgHIABgNIAAgCQgCgKACgIIADgQQABgDgCgMIgGgGQgFgGgEgNIgEgJIgGgGQgKgNABgOIACgMIABgLQABgEAEgEIAGgJIAHgPQADgKAGgEQAFgDAHAAQAGAAAFADIAIAHIAHAIIAKAIQAIAHAAASIAAADQAEADADAEIAFANQACAIACAEQAGAHAUAGQARAGASAOIATAQQgLgMgVgSIgGgFIgDAAQgLABgGgJQgDgFAAgGIgHgEQgHgEgGgLIgJgSIgJgRQgFgLAFgHQAGgKASgBIATgBIARgFIARgDQAOgEATgJQAUgKAKACIAIADIAJABQAPABAOAKQAMAHAEAKQADAGABAJQAEAZgGAOIgCAFIAAAEIgBAOIgFANQgBAGAAAMIgDAJQAAAFAAADQAAAFACAIQABADgCANQgBAFABADQACgEADgDIAGgGIgBgGQgCgGAAgMQABgWALgUQALgTASgPIALgIIABgHQAEgMAMgCIAFAAIAJgLQALgPANgEQAJgCAIACQAJACAEAHQAGAJgLATQgKARgMAOQAPABAKALQALAKgBAMQAAAKgHAHQgJAJgVACQgZACgHADQACADAFACQAFACAFgBIASgHQAOgGANACIAAgEQAAgHAHgFQAEgDAKgCIAAgDQADgIAEgGIgFgFQgEgGAAgHIgEgFQgFgIADgKQACgGAEgEIAAgDQABgegOgcQgEgBgPgCQgLgCgFgEIAAgBIgCgEIgCAAIgBAAQgCgEAAgFQABgHAGgGQAGgFAIgBQAEgEAHgBQAMgCAHALIACADIABABIABABIADAAQAPAFAHAPQAGAJAEASIAEASQADANAAAHIgCAQQABAGAHALQAHALAAAHQAAAGgHALIgBADIAJgJIAEgFIAAgHQAAgGAFgGIACgBIABgCQAHgHAHgCQAKgDAHAGIAGAFQADACAGAAQANAAADABQAKABAEAGIAGAIQADADAGACQALAGAFAGQAIAIgDAJQgCAGgGAEQgGAEgHgBIgPgFQgNgCgSAGIgOAGIgPAFQgMACgDACIgMAIQgLAJgPgDQgPgDgFgMIgHABIABAFQACAIgEAGQAIACAEAIIABAEIABAAIAQgDIAdgJQAigHAYAPQAMAJAFANQAFANgFAMQgEAJgOAMIgCABQAFABAFADIAGgFIAFgKIAFgKIAEgMQACgHAEgEQAHgGAJABQAKABAFAHQADAFAAAGQAEAAAFACQAGADADAFQACAFgBAGQgBAGgFAEQANAEAHAFQALAHABAJQAIAAAGAEQAHAEABAGQACAGgEAGQgDAGgHACIgOACQgOABgoAGIgiAFQAEAGgCAGQgCAJgMAIQgOAHgLADQgHACgGAAQgGAAgFgDg");
	this.shape_16.setTransform(396,-43.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5B3B1F").s().p("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gDQgHgEgRgFIgBgBIgIgOQgNgQgRgFQgJgDgIABIAAAAIgSgIQgGgCgFACQgGADgDAIIgRAtIgEANQgDADgCAFQgDAKAGAIIAFAGQAGAIAKgBQAGAAAEgCIARAHQAFACADACIAEAHQAEAMANAKQAJAHAVAMQAKAGAEAIQgEAIABAGIgDAAIgCAAQgBgFgFgGQgMgOghgSQgNgIgBgEIgBgDIAAgBQABgEgEgDIgDgBIgGgCIgCADIgFABIgKAAIgFgBQgEgCADgEIAAAAIgEgBIgBgBIgIgIQgGgDgEABIgBgBQgBgNgCgJQgCgHgDgEQgEgHgPgFQgPgEgMABQgHABgMAGIgBACQgBAGgJgBIgEgBIgGAFIgBACQADgLgDgHQgBgFgDgDQAIACAJgCIAXgFQAHAAAKADIARAFQAJADAIgBIABAAIAAABIABgBQAJAAAFgFQAGgGgBgJQgBgIgFgHQgEgFgJgGIgOgLIgSgSQgLgKgMgBIABhAQgBgmgNgZQgGgLgHgFQgLgIgLAGQgKAFACANIAHAUIACADQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABIAGARIAEARQAAANgFAOIAAABIgCAsQABAMAFAIQAHAGADAAIAKADIACABQAIABADADIgKACIgBABQgCACgEgBIgBAAIgHADIgBgFIgJgDIgIgIIgCAAQgLgBgSAGIg0ARQgdAJgIANQgHALAEATQAFAcAAAEQAAAHgDAKIgFAQQgQAxAMAzQADAMAFAFQAMAIATgJQAYgMABgRIgBgFQAKgEAEgHQAGgDAJgIQAIgIABgDIABgCIABABIAIAFIgCACQgBAEADADQACADAHAAIAKAAQAHgBALABIARABQAIAAAEgDQADgDAAgDQAGgBAEgEIADAAIAKACQAFABAEgBQAGgCAHgKQADgEANgEQAcgGAWADQAdAFANAQIAHAKQAEAEAGAAQADAEAIACQAUAFAPABQAmADAFACQAQAEADgBQAGAAAFgDIACgCQABACADABQAFACAGAAIAMgCQAKAAACgBQAHgCADgNQANguAjgcQALgIAYgOQANgHAHgCIAQgDIACAAIAagEQAIgBAEgCIAAAAIADABIAIACIAFACIACABIgDABIgMAHQgFACgJAAIgOgBQgRAAgdAOQgPAGgHAEQgQANgMAgIgZBQQgFATgIAKQAAADgMAOIgBADIgBAAQgOANgGAMQgDAIAAASQgCASgDAHIgIAOIgeBSIgKAPQAJghAJgzIANhDQADgNAAgKIAAgBIAEgLIADgHIAHgPQACgFgBgFQAHgIADgHIABgDIACgDIgBAAIgBABQABgMgKgGQgIgGgTACQgVAEgvgDIgRgEIgNgJIgggKQgVgRgNgEQgLgCgPADQgbAHgHAVQgCAGAAANQAAAMAFAIQgCAEADAGIAIAZQAKAXAgAYIALALQAHAJAGAMQAJANAPARIAOAPIgRgIIgjgUQgWgQgSgaIgNgUIgTgVIgGgHIgCgBIgHgOIgGgjQACgIgFgJQgEgJgWgIIgYgEIgcADIgRAAQgKAAgHAEQgIAGgBAQQgCAUAFAoQADATAFAKIAKASIALAWQAKAUAeAUQANANAGAEIAaAQIAYAVQAPAMAMAEIAPAFQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAHAGAIAEQgMAIgXgLQhDgeg3goQgUgNgJgMIgDgHIgGASQgFAMgCAKQgDAHAAAIQAAAUAKAUQAKATATALIAKAGIAIAFQASAJApAJIAEABIALAFIAIAGQAGAFAKATQAZAvAzATIAXAJQAHAHANAEIALAEQADACAFABIAPAGIAIAFQANADAJgIQAJgIgEgLIgDgIQgOgMgPgGIgDgCIgKgJQgFgJgFgNIgJgZQgEgTAAgKQgCgLAEgFQADgFAEgBIAEgBIAAAGQgCAJADAGIADAJIABAMIASAdIABAHIAEACQABADACACQAKAMAOgFIALAQQAAgGAFgSQAEgUATgZIAYggQAOgQAFgEQAHgDAGAAIAIABgAGQiQIgSAHQgdAOgiAKQgSAEgGAFQgGAEgCAFQgDAFACAGQAEAHAQAGIAnAIQAXAFANAIIASAMQAPAKACADIAHANQAFAJAIADQAJAEAKgDQAGgBAEgFQADgFgBgFIgEgMQgDgGgBgIQgBgPABgIIACgNQACgJgBgFQAAgagXgRQgPgLgPAAIgJABgABjjMQAIABALAHIAOALIgBABIgFAJQgCAHAEAHQAFAIAJACIAQABIAQAFIAUACQAIABAQAJQABAEgBAHIAAAKQABAOAIAFQAJAGAPgGQALgCAOgIQAMgIACgIQACgHgEgFIAigFQAogHAOgBIAOgBQAHgDADgGQAEgGgCgGQgBgGgHgEQgGgEgIABQgBgJgLgHQgHgFgNgFQAFgEABgFQABgGgCgGQgDgEgGgDQgFgDgEABQAAgHgDgEQgFgIgKgBQgJgBgHAGQgEAEgCAHIgEANIgFAKIgFAKIgGAFQgFgEgFAAIACgCQAOgLAEgJQAFgMgFgOQgFgNgMgIQgYgQgiAIIgdAIIgQAEIgBAAIgBgFQgEgIgIgCQAEgGgCgIIgBgFIAHAAQAFALAPADQAPADALgIIAMgJQADgCAMgCIAPgFIAOgFQASgHANADIAPAEQAHABAGgEQAGgDACgGQADgJgIgJQgFgGgLgFQgGgDgDgCIgGgJQgEgFgKgCQgDgBgNAAQgGAAgDgBIgGgGQgHgFgKADQgHACgHAHIgBABIgCgBIAAADQgFAGAAAFIAAAHIgEAGIgJAJIABgEQAHgLAAgGQAAgGgHgLQgHgMgBgGIACgQQAAgHgDgNIgEgSQgEgRgGgKQgHgOgPgFIgDgBIgCgBIgCgEQgHgKgMABQgHABgEAFQgIAAgGAGQgGAFgBAIQAAAEACAEIABAAIACABIACAEIAAABQAFAEALABQAPACAEACQAOAcgBAeIAAADQgEADgCAHQgDAKAFAIIAEAEQAAAHAEAGIAFAFQgEAHgDAIIAAACQgKACgEADQgHAFAAAIIAAADQgNgCgOAGIgSAHQgFABgFgBQgFgCgCgEQAHgDAZgCQAVgBAJgKQAHgGAAgKQABgNgLgKQgKgKgPgBQAMgPAKgRQALgSgGgKQgEgGgJgDQgIgBgJACQgNAEgLAOIgJAMIgFAAQgMABgEAMIgBAIIgLAIQgSAOgLAUQgJAUgBAVQAAANACAGIABAGIgGAFQgDADgCAEQgBgDABgEQACgNgBgDQgEgJAAgEQAAgEACgFIADgJQAAgLABgHIAFgNIABgNIAAgFIACgFQAEgOgCgYQgBgKgDgGQgEgJgOgIQgOgJgPgCIgJAAIgIgEQgKgCgUAKQgTAJgOAEIgRAEIgRAFIgTAAQgSABgGAKQgFAIAFALIAJARIAJASQAGALAHAEIAHADQAAAGADAFQAGAJALgBIADAAIAGAGQAVASALAMIgTgRQgSgNgRgHQgUgGgGgHQgCgDgCgJIgFgMQgDgFgEgCIAAgEQAAgSgIgHIgKgHIgHgIIgIgIQgFgDgGAAQgHAAgFADQgGAEgDAKIgHAQIgGAIQgEAFgBADIgBAMIgCAMQgBAOAKAMIAGAHIAEAJQAEAMAFAHIAGAFQACAMgBAEIgDAPQgCAIACAKIAAACIgBANQABAHAJAMIAGAIIgDgHIgKgaIgCgJQACgMACgDQADgEAKgIIAFgEIgBgNQgBgHAEgBQAEgBACAEIABAGIACAbIACAMIABAWQAAAOACAIQAFAaAWAIIAIADQAFADABADQABAEgDADIgCACIADABIABAAIAEgGQADgDAEgCIACAAQAGABAGgEIAAAAIAEABIATAHQAMADAHgFQAIgEADgKQABgHgBgEQAEgKABgJIABgCIgHABIgFgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAHgEIARgIIAGgEQAJgGgDgLQAEADAEABQAEACAIAAIAMABQARABAFgBQAHgDADgHQAHAEAMACIACgCQADgBACAEIACAFIABADIACAEIAEAEIAGAGQADAFgCAEQgCAFgEgCIACAJIAAABQAEAGALACQAJABAKgCIASgGIAMgCIAHABgAAYApIgQgGIgEgDIgEgIQgDgEgBgFIAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIgBgFIABgHIgCgJIABgHIABgCQAAgEACgBIABAAQAEgLAAgHQAAgKgIgFIgHgDIgDgDQgFgGgNgFIABgCQACgGgBgHIAGACIAHABQAMAIAMAGIACACIACAEIAAABIgBAQIgBATQgBAVACAJQAFARAQAJQALAFAAAEQABAFgHAGQgCgDgGgDgAkjAfIgIgCIgJgBQgDgCgBgDQgCgHACgOIABgDIgBAAIAAgDQACgFgCgIQAAgHgCgDIgBgCIgDgBQgEgCgFABIgCABIAJgPQAJgMAJgSIAAAAIgBAIQgBAOABAKIAGAbIAEAOQAAAFAHAGIADADQgBAFADAFIABACIgCAAQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_17.setTransform(397.8,-44.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7D410C").s().p("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ABIAFACIAEAEIACADIgHAHQADACABAEQACAGgEAEIACAGIAGAKIAHAUIAGAMIAIAIIAEAFIADACIAHAEQACADAAADQAFADAEAAIACgHIgEgHQgGgIgDgJIgCgIIAAgBIgBgFQgCgHACgEQAFgIALABQAIABAFAFQAEgDgBgGIgBgJQAAgHAGgBQAGgDAGAEIAAAAIABAAQADAEAEALQAAAEAGAMQAEAKAAAGIgBAMQgBAPgFALIgEAPQgEAJgBAFIgDAUQgGAMgJAAIgCAAgAHGgIQgIgEgFgKQgFgLgCgCQgCgEgPgKIgSgNQgNgIgXgGIgngJQgQgGgEgIQgCgFADgGQACgGAGgEQAGgFASgFQAigKAdgPQAPgGADgBQAUgFATAQQAXARAAAcQABAGgCAJIgCAPQgBAHABARQABAIADAHIAEAMQABAGgDAFQgEAGgGACIgIACQgGAAgFgEgAD1hsQgIgFgBgPIAAgLQABgHgBgFQgQgJgIgBQgNgBgHgCIgQgFIgQgBQgJgCgFgIQgEgHACgIIAFgKIABgBIgOgLQgLgIgIgBQgIgCgLADIgSAGQgKADgJgCQgLgCgEgHQgCgDgBgOQgBgIgDgHIgLgHQgGgFgDgEQgIgDgFgDQgDAIgFACQgFACgRgBIgMgBQgIAAgEgCIgIgEQADALgJAHQgJAGgEAEQgEADgCAOQgBAIgDAJIgBAHQgCAMgMAEQgFACgHgBIgMgBQgKgBgJABIgFABIgCAAIgBABQgFADgEAEIgEAGIgBgBIgDgBIACgBQADgEgBgEQgBgEgFgCIgIgDQgLgEgGgJQgJgCgGgGQgLgKgEgWQgCgOAAgmIgBgBQgJAHgCADQgCAEgCANIACAJIAKAcIADAIIgGgJQgJgNgBgHIABgOIAAgCQgCgLACgIIADgRQABgEgCgMIgGgGQgFgHgEgOIgEgJIgGgHQgKgOABgOIACgNIABgMQABgEAEgFIAGgJIAHgRQADgKAGgEQAFgEAHAAQAGAAAFAEQAEACAEAFIAHAJIAKAIQAIAIAAASIAAAFQAEACADAFIAFANQACAJACAEQAGAHAUAHQARAHASAOIATASQgLgNgVgTIgMgMIgCAAQgLABgGgJQgDgEAAgFIgCgBQgHgFgGgLIgJgTIgJgSQgFgMAFgIQAGgLASgBIATAAIARgFIARgFQAOgEATgJQAUgLAKACIAIAEIAJAAQAPACAOAKQAMAIAEAKQADAHABAKQAEAagGAPIgCAFIAAAFIgBAPIgFAOQgBAGAAAMIgDAKQAAAGAAADQAAAFACAJQABADgCAOQgBAFABADQACgEADgDIAGgGIgBgHQgCgGAAgOQABgWALgVQALgWASgPIACgBIABgCQAEgPAEgFQAIgHAKABIACABIALgPQALgQANgEQAJgCAIACQAJADAEAGQAGAKgLAUQgKASgMAQQAPABAKALQALAKgBAOQAAAKgHAIQgJAKgVABQgZADgHACQACAFAFABQAFACAFgBIASgHQAOgHANACIAAgDQAAgJAHgFQAEgDAKgCIAAgDIAFgMIgBgCIgIgLQgEgGgBgGQgCgLAJgHIABAAIgBgSQABgfgOgeIgTgEQgLgCgFgDIgBgCIgEgEIgBgDQgDgFgBgGQAAgNALgFQAHgEANAAIAZgBQAPACAHAHQAEAFAEAMIAPAxQADALgBAHQgBAFgCAEIAAAFIgCARQABAGAHANQAHALAAAHIgDAKIABABIABADIACgCIAEgGIAAgHIAAAAQAAgFABgEQAEgMAMgCIAFgCQAKgDAHAGIAGAFQADACAGAAQANAAADABQAKACAEAGIAGAJQADACAGADQALAGAFAGQAIAKgDAJQgCAGgGAEQgGAEgHgBIgPgEQgNgDgSAHIgOAGQgJAEgGABQgMACgDACIgMAJQgLAKgPgEQgPgDgFgMIgHAAIABAGQADAKgHAHIAAABQAFABAEAGIABABIAFAEIABAAIAQgEIAdgJQAigIAYARQAMAJAFAOQAFAOgFANQgEAKgOAMIgKAIQAGgBAIABQAHgEADgEIAFgKIAFgLIAEgNQACgIAEgEQAHgHAJACQAKABAFAIQADAFAAAHQAEgBAFACQAGAEADAFQACAFgBAHQgBAGgFAEQANAFAHAFQALAHABAKQAIAAAGAEQAHAEABAGQACAHgEAGQgDAHgHACIgOACQgOABgoAHIgiAFQAEAGgCAHQgCAJgMAIQgOAJgLADQgHACgGAAQgGAAgFgDg");
	this.shape_18.setTransform(396,-47.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5B3B1F").s().p("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gJQAJgIgEgMIgDgJQgOgMgPgGIgDgDIgKgJQgFgKgFgOIgJgaQgEgVAAgLQgCgLAEgFQADgGAEgBIAEgBIAAAHQgCAJADAHIADAJIABANIASAfIABAHIAEACQABADACADQAKANAOgFIALAQQAAgGAFgTQAEgVATgbIAYgiQAOgRAFgEQAHgEAHAAIAHABgAGQiZQgDAAgPAHQgdAPgiAKQgSAFgGAFQgGAEgCAFQgDAGACAGQAEAIAQAGIAnAJQAXAGANAHIASANQAPAKACAEQACACAFAMQAFAJAIAEQAJAEAKgDQAGgBAEgFQADgGgBgGIgEgMQgDgHgBgIQgBgQABgIIACgPQACgJgBgGQAAgbgXgSQgPgLgOAAIgKABgABjjaQAIACALAHIAOALIgBACIgFAJQgCAIAEAIQAFAHAJACIAQACIAQAFQAHACANAAQAIACAQAJQABAEgBAHIAAAMQABAPAIAFQAJAGAPgGQALgDAOgIQAMgIACgJQACgHgEgGIAigGQAogHAOAAIAOgCQAHgDADgGQAEgHgCgGQgBgGgHgFQgGgEgIABQgBgKgLgHQgHgGgNgFQAFgEABgGQABgGgCgGQgDgFgGgDQgFgCgEAAQAAgHgDgFQgFgIgKgBQgJgBgHAGQgEAFgCAHIgEANIgFALIgFALQgDADgHAFQgIgBgGABIAKgJQAOgMAEgKQAFgNgFgOQgFgOgMgJQgYgQgiAIIgdAJIgQAEIgBAAIgFgEIgBgCQgEgFgFgCIAAAAQAHgHgDgLIgBgFIAHgBQAFANAPADQAPADALgJIAMgJQADgCAMgDQAGgBAJgEIAOgGQASgHANADIAPAFQAHABAGgEQAGgEACgHQADgJgIgJQgFgHgLgGQgGgCgDgDIgGgJQgEgGgKgBQgDgBgNAAQgGAAgDgCIgGgGQgHgGgKAEIgFACQgMACgEALQgBAFAAAEIAAABIAAAHIgEAGIgCACIgBgDIgBgBIADgKQAAgHgHgMQgHgMgBgHIACgRIAAgEQACgEABgGQABgHgDgLIgPgwQgEgMgEgFQgHgIgPgCIgZABQgNAAgHAEQgLAGAAAMQABAHADAEIABADIAEAFIABABQAFAEALABIATAEQAOAegBAgIABARIgBABQgJAHACALQABAFAEAHIAIAKIABACIgFANIAAACQgKADgEADQgHAFAAAIIAAAEQgNgCgOAGIgSAHQgFABgFgBQgFgCgCgEQAHgDAZgCQAVgCAJgKQAHgHAAgLQABgNgLgLQgKgLgPgBQAMgPAKgSQALgUgGgKQgEgHgJgDQgIgCgJADQgNAEgLAPIgLAPIgCAAQgKgCgIAIQgEAEgEAQIgBABIgCACQgSAPgLAVQgJAVgBAXQAAANACAHIABAGIgGAGQgDAEgCAEQgBgEABgFQACgNgBgEQgEgIAAgFQAAgEACgFIADgKQAAgNABgGIAFgOIABgPIAAgEIACgFQAEgQgCgaQgBgKgDgGQgEgKgOgJQgOgJgPgCIgJgBIgIgDQgKgDgUALQgTAKgOAEIgRAEIgRAFIgTABQgSABgGALQgFAHAFAMIAJASIAJATQAGAMAHAFIACABQAAAEADAFQAGAJALgBIACAAIAMALQAVAUALANIgTgSQgSgPgRgHQgUgGgGgIQgCgDgCgJIgFgNQgDgGgEgCIAAgEQAAgTgIgHIgKgIIgHgJQgEgGgEgCQgFgDgGAAQgHAAgFADQgGAEgDALIgHARIgGAIQgEAFgBAEIgBAMIgCANQgBAPAKANIAGAHIAEAKQAEANAFAHIAGAGQACANgBAEIgDAQQgCAJACAKIAAACIgBAOQABAIAJAMIAGAJIgDgIIgKgbIgCgKQACgNACgDQACgEAJgHIABABQAAAmACAPQAEAWALAKQAGAGAJABQAGAJALAEIAIAEQAFACABADQABAEgDAEIgCACIADABIABABIAEgHQAEgEAFgDIADgBIAFAAQAJgCAKACIAMABQAHAAAFgBQAMgEACgNIABgGQADgJABgJQACgNAEgEQAEgEAJgFQAJgHgDgLIAIADQAEACAIABIAMAAQARABAFgBQAHgDADgHQAFADAGACQADAFAGAEIALAHQADAHABAIQABAPACADQAEAHALACQAJABAKgDIASgFQAHgCAGAAIAGAAgAD0k6IAEAAIgMgBIAIABgAAJEFIANhHQADgOAAgKIAAgCIAEgLQACgDABgFIAHgQQACgFgBgFQAHgJADgHIABgDIACgEIgBAAIgBABQABgNgKgHQgIgFgTACQgVADgvgCIgRgEIgNgKIgggLQgVgSgNgEQgLgDgPADQgbAIgHAXQgCAGAAAOQAAANAFAJQgCAEADAGIAIAbQAKAYAgAaIALALQAHAKAGANQAJANAPASIAOARIgRgJIgjgVQgWgRgSgcIgNgVIgTgXIgGgHIgCgBIgHgPIgGglQACgIgFgKQgEgKgWgIIgBAAQAHgCAFgFIADgDQAGgHgBgIIACAAIAKACQAFABAEgBQAGgCAHgLQADgEANgEQAcgHAWADQAdAFANASIAHAKQAEAFAGAAQADAEAIACQAUAGAPABQAmADAFACQAQAEADgBQAGAAAFgDIACgCQABACADABQAFACAGAAIAMgCQAKAAACgBQAHgCADgOQANgxAjgeQALgJAYgOQANgIAHgCIAQgEIACAAIAagEQAIgBAEgCIAAAAIADABIAIACIAFADIACABIgDAAIgMAIQgFACgJAAIgOgBQgRAAgdAPQgPAGgHAFQgQAOgMAiIgZBWQgFATgIAMQAAADgMAOIgBADIgBAAQgOAPgGAMQgDAJAAATQgCATgDAHIgIAPIgeBYIgKAQQAJgkAJg2gAklAIIgOgLIgFgDQACgFgCgIQAAgGgCgEIgBgCIgDgBQgEgDgFACIgCABIAJgQQAJgNAJgTIAAAAIgBAIQgBAQABAKIAGAdQACANADAEIABAAIgBAHIAAACgAAAhrIgCgBIACgEIAAAFIAAAAgAmKhsIAAAAIAAAAgAlLiDIAEgBIACACIgGgBg");
	this.shape_19.setTransform(397.8,-48.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7D410C").s().p("AgmJUIAQAAIABAEIADACIgUgGgABqJTIAIgEIAkgLIgjAOIgYAIQAKgDAFgEgAAdJAQgDgFgCgEQgDgLACgMQABgEAEgHIAAgDIAAgKIAEgPIAVgxIAHgKQAFgKAQgQIAFgDIAKgfQgKgEgLAGQgFAFgOASIgYAlQgVAdgEAXQgFAUAAAHIgJgSQgOAGgKgOQgCgDgBgDIgEgCIgBgIIgSgiIgBgOIgDgKQgDgGACgJIgIgGIgDAFQgEAGACAMQAAAMAEAWIAJAcQAFAQAFAKIAKAKIADADQAPAHAOANIADAJQAEANgJAJQgJAKgNgEIgIgGIgPgGQgFgBgDgDIgLgEQgNgFgHgIIgXgKQgzgXgZg2QgKgVgGgGIgIgHIgLgGIgEgBQgpgKgSgLIgIgFIgKgHQgTgNgKgXQgKgXAAgXQAAgJADgHQACgMAFgPIAGgUIADAIQAJAOAUAPQA3AuBDAjQAXANAMgJQgIgGgHgHQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgPgGQgMgFgPgOIgYgYIgagSQgGgFgNgQQgegWgKgXIgLgaIgKgVQgFgLgDgWQgFguACgYQABgSAIgHQAHgFAKAAIARABIAcgEIAYAFQAWAJAEALQAFAKgCAJIAGApIAHAQIACABIAGAIIATAYIANAXQAJAPAKANQgDAHAEAQIAgB2IAFAMQAGAOANAHQAJAFAIgBIAAAAQgIgIgGgMIgMgZIgIgNQgDgIgBgMIgBgWIgCgTQAAgLADgIIACgGQABgEgCgFQgCgEgFgEIgJgIQgJgIgEgSQgDgMgBgLIAAgCQgagYgJgYIgIgdQgDgHACgEQgFgKAAgNQAAgPACgHQAHgZAbgIQAPgEALADQANAFAVATIAgAMIANAKQACACAPADQAtADAXgEQATgCAIAGQAKAHgBAOIABgBIABAAIgCAEIgBADQgDAIgHAJQABAGgCAGIgHARIgDAIIgEANIAAABQAAALgDAQIgNBMQgJA7gLAmIAMgQIAehfIAIgRQADgIACgUQAAgVADgJQAGgOAOgPIABAAIABgEQAMgPAAgEQAIgMAFgVIAZhdQAMglAQgPQAHgFAPgHQAdgQARAAIAOABQAJAAAFgCIAMgJIADAAIgCgBIgFgDIgIgCIgDgBIAAAAQgEACgIABIgaAEIgCAAIgQAEQgHADgNAIQgYAPgLAKQgjAggNA2QgDAPgHACQgCABgKAAIgMACQgGABgFgDQgDgBgBgCIgCACQgFADgGABQgDAAgRgEQgGgCgkgDQgPgCgUgGQgIgCgDgEQgGgBgEgFIgHgLQgNgSgdgEQgWgDgcAHQgNACgDAEQgHAMgGADQgEABgFgBIgKgDIgJAAIgCAHIgEAGIgBAAIgEADQgKAFgOgDIgJgEIgKABIgKABQgHAAgCgEQgDgDABgFIACgCIgIgGIgBgCIgBADQgBAEgIAJQgOAOgJAAQgDAAgEgDIgJgBIgPgHIgDgBIABAHQAKgFAJAIQAJAIAAALQgBATgYAOQgTAKgMgJQgFgFgDgOQgMg7AQg5IAFgTIACgGIgCgEQgCgIAEgNIgEgZQgEgWAHgNQAIgOAdgLIA0gUIALgDIAPATQANAPAJADQARAHAKgKQAFgFABgIQAAgIgEgFQgDgEgGgDIgKgHQgFgEgGgJIgKgOIgCgCIACg+QAAgUgDgQIAAAAQgLgJAFgNIABgBIgCgEIgHgWQgCgPAKgGQALgHALAJQAHAFAGAOQANAcABAsIgBBKQAMABALALIASAVIAOANQAJAHAEAGQAFAIABAJQABALgGAGQgFAGgJABIgBAAIgBAAQgIAAgJgDIgRgGQgKgEgHABIgXAGQgJACgIgCQADADABAFQADAIgDANIABgCIAGgFIAEABQAJABABgHIABgDQAMgGAHgCQAMgBAPAFQAPAGAEAHQADAGACAHQACALABAPIAAABIABAAQAEgBAGAEIAGAGIAGgBQALgCAHAKQAIABAEADIADABQAEADgBAFIAAABIABADQABAFANAKQAhAWAMAPQAFAGABAGIACAAIAGAAIABgEQADgOgSgPQgVgNgJgIQgNgMgEgNIgCgEIgGACQgJADgIgDQgKgEgRgTQgPgQABgKQAAgGAEgFIAFgEQAAgGADgHIARg0QADgKAGgDQAFgCAGACIASAKIAAAAQAIgBAJADQARAGANASIAGAMIAKAJIAPAOIAUAlQAKAFAEAGIABAEIABAAQAGACAEAGQAEAGAAAHQAAAIgGASIgCAIIgBABIAAACIAAAAQABANAEAOQABAGADAFIAGAJIAEADIAQAHQAGADACAFQAHgIgBgFQAAgFgLgGQgQgKgFgSQgCgNABgYIABgVIABg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");
	this.shape_20.setTransform(396,-51.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5B3B1F").s().p("AgHJwIgRgBQgIgDgEgEIgDgCIgBgEIgQAAQgPgBgTgDIgcgFQgpgIgNgIQgegQgOgiIgGgNIgLgZQgMgRgigMIgRgIQghgQgbgTQgtgggIgkQgIgZAJgjIgHgPQgHgOgWgUQgYgWgHgMQgFgKgEgLQgRgvgBgaIAAgJIACAGQADAMAEAHIAFAHIABADIADAEIAJAdQADAKAGAGIAEAEQAIALAMAKIALAJQAGAGAMAYQAGANAIACQALABAGgNIADgWQABgGAEgKIAEgQQAFgMABgQIABgNQAAgHgEgKQgGgNAAgEQgEgNgDgDIAAAAIgBgCIAAABQgGgEgGADQgGABAAAIIABAKQABAGgEADQgFgFgIgBQgLgBgFAJQgCAEACAHIABAFIAAACIACAIQADAKAGAJIAEAHIgCAIQgEAAgFgDQAAgDgCgDQgCgDgFgCIgDgCIgEgGIgIgIIgGgNIgHgWIgGgKIgCgHQAEgEgCgHQgBgEgDgDIAHgHIgCgEIgEgDIgFgDIAAgBQgFAFgFgDIgCgCIgIAJQgDADgBAEQABgIACgGIAHgJQgGgWgBgVQgDgYAGgNQADgIAIgHQAHgHAJgBQgphQAOg9QAFgUAKgLQAOgPASADIALAEIAMADQAQAAANgTIAKgPQAFgJAGgFQAHgGAJgBQALgBAFAHQgBgOgLgmQgJggABgUQABgWAOgdQARggAHgRQALghAIgPQAPgcAYgFQANgDAOAFQAKAFAJAIIADgDQAWgVARAAIAMACQAIABAEgBQAGgBAKgJQAUgTAPgGQASgHAfAGQATAEAIAFQAKAIALAVIAEAGIAJgIIADgHQAFgJAGgFQALgIAWAAIAKABQAFgaAJgLQAOgSAagBQAZgBAUAOQAfAYAOA5QAHAdAEAKQAIAUAOAJQALAHAXACQAaADAJADQAbALAOAgQAIASAGApIAGArQADATAGAKQAFAGAKAGIASAKQARANAFAYQACANgCAKQAFAAAHAFIAUANQAQANADADQAKANACAZQAEAjgNAjQgIAXgBAGQAAAJAEARQAFATgBAKQgDAUgUAVIgRASQgKAKgFAJIgBACQAKANAIAUIAEgEQAHgJADgCQAIgGALgBQAIAAADADQAJAFgBAPQAAAKgJAWIgVA1IgBAEQgDAPgIAaQgSA9gWAoQhICIjEBGIgVAJIgkALIgIAEQgFAEgKADIgHABIgLADQgNADgMABIgRACgABOGQIgKAfIgFADQgQAQgFAKIgHAKIgVAxIgEAPIAAAKIAAADQgEAHgBAEQgCAMADALQACAEADAFQAEAPASAAIATgHQAJgEARgDQARgCAigQQBBgcAugcIAjgXQAWgLAPgPQAKgHAPgSQAtgvAMgfIARgqIAKgTQAMgaAehMIgCgBQgEAAgCgEQgDgEACgIIADgRIABgEQgcAFgDgeIgCgQIgCACQgCAOgFgHQgGgHgEAMIgDAVQAAACgLAAIACgGIgEAGIgIAAQADADABAEIgRAYQgMAEgNASIgBAEQADACADADQAFAFABAJIABAQIACASIAAASQgBANgHATIgMAfIgFAPQgDAJgDAFIgOARIgOATQgRAXgfAVQgLAFgEABIgGgBIAEgHQAFgGAKgGIARgKQAMgJATgXQAPgQAIgOQAFgKAHgUQAHgWAAgIIAAgPIAAgQQABgQgCgEQgCgHgHgDQgHgEgHACQgNAFgDARIgBAJIgFAFQggAegIALQgHAIgQAbQgNAYgLAKQgOASgcARIgMAIQAUgeAqg0QA2hGAshMIARgYIAOgQIAIgMQALAAAFgHIADgGQANgKAGgSQABgGAAgZIAfgwQgHglgFgDQgFgCgIgQQgIgQgFAIQgFAHgHgCIgJgQIgNgMIgNgJQgHgDgIAEQgIAEgBAHIgDACQgEAHADAPQgEAIAAATQgBBDgZA5IgRAdQgKAOgRAPIAAABIgLAJQgFAJgEAEQgCACgNAGIggARIgcALIgIAFIgFADIAAABIgNAHIgGACIgFgBIgBAAIADgGIAGgKQAEgFABgFIADgGQACgDAEgBIA9gTIAVgIQAJgGAGgGQALgLAJgZIABgEIAIgOQAOgWAHgfQAJgggBg1IADgeQADgSgBgFQgBgFgCgDIgEgEIgFgDIgEgDIAFgEQADgEgBgFQgBgFgDgDIgGgEQgHgDgHAAIgEgBIAAAAIAWgKQAKgEAOgCQgEAEgCAGQgDAGACAGQAEAJAQAGIAnAKQAXAGANAJIASAOQAPALACAEQACACAFAMQAFALAIAEQAJAFAKgEQAGgBAEgGQADgGgBgGIgEgNQgDgIgBgJQgBgRABgJIACgQQACgJgBgHQAAgegXgTQgTgQgUAFQADgMAAgPQAAgegJgMQgKgLgFgGIgIgPQgEgJgEgFIgIgIIgHgIQgJgMAEgUIAIggQADgQgFgPQgGgQgNgHQgNgIgdABIgWAAQgVAAgLAGQgPAIgBAQQgCAHACAHQgMAFgFAMIgFARQgCAMgHAKQgGAKgOALIgXATIgYAZQgPASgJAHIgCACIgGgBQgVABgVAJQgHACgDAEIgFADQAKgMAHgVQATAEAUgNQAMgIATgUIArguQATgUAJgMQAOgSAGgSQALgjgOghIgKgXQgCgJgBgPIgDgYQgGgegYgPQgMgHgOAAQgPgBgMAIQgPAKgOAfQgjABgOAEQgcAJgIAWQgDAHgBAMQgMgJgFgFIgJgLQgFgGgFgCQgKgEgRAFQgUAFgKAEIgTAIIgMAAIhGgDQgVgBgKAEQgLAEgIALQgGAKAAALIgCACQgNAMAAAjQABAYADAJQAFAKABAGIABARIAEAbIAAAaIAAAGIAAABIgBAPQABAJAJANIAGAKIgDgJIgDgIIACACIAJAOIALASQAHAKAHAFQAHAGASAGQAPAFAIgBQASgBAJgPQAEgJABgRIABgNIAHAEIAHADQAFANANAHIAIADQgBAHADAHIADAGQAAAMAFAFQAEAEAIACIABAAIACADIALAQIAEAOIAGAMQASAdAfARQAAAEACAEQACAEADACIgBAPIgBAVQgBAYACALQAFAUAQAKQALAGAAAFQABAFgHAIQgCgFgGgDIgQgHIgEgDIgEgJQgDgFgBgGQgEgQgBgLIAAAAIABgDIACgIQAGgSAAgIQAAgHgEgGQgEgGgGgCIgBAAIgDgEQgEgGgKgFIgUglIgPgOIgKgJIgGgMQgNgSgRgGQgJgDgIABIAAAAIgSgKQgGgCgFACQgGADgDAKIgRA0QgDAHAAAGIgFAEQgEAFAAAGQgBAKAPAQQARATAKAEQAIADAJgDIAGgCIACAEQAEANANAMQAJAIAVANQASAOgDAPIgBAEIgGAAIgCAAQgBgGgFgGQgMgRghgUQgNgKgBgFIgBgDIAAgBQABgFgEgDIgDgBQgEgDgIgBQgHgKgLACIgGABIgGgGQgGgEgEABIgBgBQgBgPgCgLQgCgHgDgGQgEgHgPgGQgPgFgMABQgHACgMAGIgBADQgBAHgJgBIgEgBIgGAFIgBACQADgNgDgIQgBgFgDgDQAIACAJgCIAXgGQAHgB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");
	this.shape_21.setTransform(397.8,-53.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7D410C").s().p("AgsJ8IASAAIACAEIADADIgXgHgAB7J7IAJgFIAqgLIgpAPIgbAIQALgDAGgEgAAiJnQgEgFgCgFQgDgLACgNQAAgEAFgHIAAgEIAAgKIAFgPIAZg0IAHgLQAGgKATgRIAGgEIAMggQgMgEgNAGQgGAFgQAUIgcAmQgYAfgFAYIgGAdIgKgTQgRAGgLgPQgDgDgBgEIgEgCIgBgIIgVgjIgBgPQgDgGgBgFQgEgGADgKQgFgCgEgEQgDACgBAEQgFAFACANQAAANAGAXIAJAeQAGAQAGALIAMALIAEACQARAIAQAOIADAJQAFAOgLAKQgJAJgQgDIgJgGIgSgHQgFgBgDgDIgNgFQgPgFgIgIIgbgLQg8gYgdg4QgLgXgHgGIgKgIIgMgGIgEgBQgwgLgVgLIgJgFIgMgIQgWgOgMgXQgMgYABgZQAAgKAEgHQACgNAFgPIAIgVIADAIQAKAPAYAQQBAAwBNAlQAaANAOgJQgJgGgIgHQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgSgGQgNgFgSgPQgZgYgCgBIgegTQgIgFgOgRQgjgXgMgZIgNgbQgIgOgDgIQgHgLgDgYQgGgwACgZQACgTAJgIQAJgFALAAIATACIAhgFIAcAGQAaAJAEALQAGALgDAKIAHAqIAJARIACABIAHAJIAWAZIAPAYQAKAQAMANQgDAIAEARIAmB8IAFAMQAHAPAPAHQALAGAJgBIAAAAQgKgIgHgNQgIgSgGgIIgIgOQgEgIgBgNIgBgXIgCgVQgBgLADgIIADgHQABgEgCgFQgCgEgGgFIgKgIQgLgJgEgSQgEgNgBgLIAAgCQgegagLgZIgJgeQgDgIABgEQgFgKAAgPQAAgPACgIQAJgZAfgJQARgEAMADQAQAFAYAUIAmAMIAOALQACACASAEQA1ACAagEQAXgCAIAGQAMAIgBAPIABgBIACAAIgDAEIgBADQgEAJgIAJQABAGgCAGIgIASIgEAJIgEANIAAACQAAALgEARIgPBQQgKA+gNAoIAOgRIAihkIAKgRQADgJADgVQAAgWAEgKQAGgOAQgQIACAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQANgQABgEQAJgNAGgWIAdhiQANgnAUgQQAHgFARgIQAjgRATAAIARACQAJAAAGgDIAPgJIADAAIgCgBIgGgDIgKgCIgDgBIAAAAQgEACgKABIgeAEIgCAAIgTAFQgIACgPAJQgcAQgMAKQgpAigPA5QgDAPgJADQgCABgLAAIgOACQgIABgFgDQgEgBgBgDIgDADQgFADgHABQgDAAgUgEQgIgDgpgDQgSgBgXgHQgKgCgDgEQgHgBgEgFIgJgMQgPgUghgGQgagCggAHQgPAEgEAFQgHAMgIADQgEABgGgBIgLgDIgLAAIgCAHIgFAHIgBAAIgFACQgMAGgQgDIgKgEIgMAAIgMABQgHAAgDgEQgDgDABgFIACgCIgJgHIgBgBIgBADQgBAEgKAJQgQAPgKAAQgEAAgEgDIgLgBIgSgIIgDgBIABAIQAMgFALAIQAKAIgBAMQAAAUgcAOQgXAMgNgKQgGgGgEgOQgOg+ATg8IgLgKQgQgRgFgXIgDgcIgEgYQgDgOACgKQAEgUARgLQARgKAUAHQAHADAEgBQAEAAAEgDIASgOQALgIAIgCQAOgFAPAFQAOAFAJALQAEAGACAHIAIAKQAQAPAKAEQATAGANgKQAFgFABgJQAAgIgFgFQgDgEgHgEIgMgHQgGgEgHgJIgLgQIgCgBIABgPIgIgFQgKgHgGgLIgFgOIgIgQIgIgWQgHgcACgNQADgSASgYQAFgIAFgEQAFgEAFgDQgCgGgBgHQgCgVAJgSQAQgfAmgNIABgCQAHgLANgFQAMgFANACQAPADAVASQAXASAMANQgGgRAGgOQAEgLANgNQALgLAHgEIAWgKIAbgNQAMgEAOAEQAOADAKAJIAPAQQAFAEAKAEIANAIQAKAGAGAKIAEgFQAiggAagRIAEgFIALgGIAXgPQANgJAGgLIAGgOIgCAQQgBAHgJATIgkBGQgHAOAAAIIACAJIADgCQAOgOAagcQANgPAHgLIAJgTQAFgLAIgFQAHgEAGABIACgIIABgDIABAJIABACQADABAEACQANAHgBAQIAAACQAHAFAHAAQAOAAAHgNIADgHIAEAFQALALADAOQACAIAAAJQAUgXAcgBQAOgBANAGQAOAHAHALIAMAXQAFAIANAOQAQAXgGAfQgGAagVAWIgSARIgTAQQgMANgKAPIACgBQAGgDAJgJQAIgGASgIQAKgGASgVQAQgUANgFQAPgHARAGQARAGAIAPQAIAOgEASQgEARgOAKQAHAHAFANIAGAYIAEAUIABADIABAIIADAXIAAAGIAGAKQAGALgCANQgCAMgHAJQAOABAOALQAbAUAAAgQAAAHgBAKIgDARQgBAIABATQABAJADAIIAGAOQABAHgEAGQgEAHgHACQgMADgLgFQgJgFgGgLQgFgNgDgDQgCgEgRgLIgVgPQgPgJgbgGIgtgLQgQgGgFgHIgEACIgLAFIAAABQABAFgEAEIgGAEIAFADIAGAEIAEADQADAEABAFQABAGgDASIgDAgQAAA4gKAiQgIAggRAXIgIAPIgCAEQgKAagNAMQgHAHgLAGQgFADgTAFIhGAUQgFABgDADIgDAHQgBAFgEAFIgIAKIgDAHIABAAIAGABIAHgCIAPgHIAAgBIAGgDIAJgGIAggMIAmgSQAPgGACgCQAEgEAHgJIAMgKIAAgBQAUgQAMgOIATgfQAdg8AChGQgBgUAFgJQgDgQAEgHIADgCQACgHAJgFQAJgEAJADIAPAJIAPANIAKARQAIACAGgHQAFgJAKARQAKARAFAEQAGAEAIAlIgkAyQAAAagBAHQgHATgPAKIgDAGQgHAIgMAAQgHAKgDACIgQARIgTAaQg0BPg+BKQgwA3gYAfIAOgIQAggSAQgTQANgLAQgZQASgcAIgIQAKgMAkggIAHgFIABgKQADgRAPgFQAIgDAIAEQAJAEACAHQACAEgBARIAAARIAAAQQAAAIgIAXQgIAVgGAKQgKAPgRASQgWAYgOAJIgTAKQgMAHgGAGIgEAIIAHAAQAEAAANgGQAkgWAUgYIAPgUIARgSQAEgFADgKIAFgQIAPggQAIgUABgOIAAgTIgCgTIgBgRQgCgJgFgFQgEgEgEgBIACgEQAPgUAOgEIATgZQAAgFgEgCIAJAAIAFgGIgDAGQANgBAAgBIAEgXQAEgNAHAIQAGAHACgPIADgBIACAQQADAgAhgFIgCAEIgDASQgCAIADAFQACADAFABIACAAQgiBRgOAbIgMAUIgTAtQgPAgg0AxQgRATgMAHQgRAQgaAMIgoAYQg1AdhLAeQgoARgTACQgVADgKAEIgWAHQgVAAgEgPgAg+i8QAJALADAJQAFAPgEANIAJAIIAXAnQAMAFAFAGIABAEIABAAQAIACAEAHQAEAHAAAHQABAIgIATIgCAIIgBACIAAABIAAAAQACAPAEAOQABAHADAEIAIAKIAEAEIASAHQAIADACAFQAIgJgBgFQAAgFgNgGQgSgKgGgUQgDgNABgZIABgXIACgQQgEgCgCgEQgDgEgBgFQgjgRgUgeIgHgOIgFgOIgMgRIgDgDIgBAAIACACgAiog6QAKABAFAEIADABQAEADAAAGIAAABIAAADQACAFAPAKQAmAYAOAPQAGAHABAGIADAAIAGAAIACgEQADgQgVgPQgZgNgKgJQgOgMgGgPIgCgEIgHADQgKACgKgDQgLgDgTgUQgSgRABgLQAAgGAEgFIAGgFQABgGADgHIARgxIgDgEQgIgGgQgKQgRgKgHgFQgSgOgKgVQgFgLgFgTIgEgPQABALgDAKIAEAMIAEAJIgIgKIgDgEIgCACIgIAKIAAAXQANABANALIAVAXIAQANQAKAIAFAFQAGAJABAKQABALgHAHQgGAFgKABIgBAAIgBAAQgJABgLgEIgUgGQgLgEgJABIgaAGQgKACgJgCQADAEABAFQAEAJgEANIABgCIAHgGIAFABQAKABACgGIABgEQANgGAJgCQANgCASAGQARAGAFAIQAEAGABAIQADALABAQIAAABIABAAQAFgCAHAFIAHAGIAGgBIADAAQALAAAHAIgAlcgrIADACIABACQADAEAAAIQACAJgCAGIARALIANACIgBgBQgFgEgBgCQgDgFgDgPIgHghQgBgLABgSIACgJIgBAAQgKAVgKAPIgLASIACAAIAFgBQADAAADABgADJi9IgFAJIAPABQAdAFAHADQAVAJABAOQABAGgDAKIgBAOIABAGQALgDAHgBIgCgDQgGgKAAgNQABgMAGgKIACgCIgLAAQgjgCgPgVQgHgKgBgNIgQAXgAAgjoQAAAFgGAJQgGAKgBAFQAAAHADAPIgDAPQgBAHAAANQAAAJgDAGIAEADIACAAQgDgOACgLQABgKAGgSQAMghAQgOIABAAIAHgEQADgFAIgCQAZgJAYgBIAHABQAIgNACgLQACgXADgLQACgIAIgMIAKgUQAEgHAHgjQAFgZAMgMIANgKQAHgFAEgFQAEgGADgKQgKAFgIAAQgNAAgGABQgPAEgGATQgDALgDAWQgDALgJATQgLAVgDAJIgGAVQgEANgEAIQgDAHgHAIIgLAOQgTAWgGAEQgKAHgNABQgKABgIgDIgBAEgAlliaIAAAAIAAAAgAhYjeQgDgIACgIIgMgCIANASgAiwk0QAFAPAFAEQACABAOAGIABAAIgWgdIgKgNgAgtkhQAEABADACIABgEIAAgFIAKgDQAPgDAMACIADABIABgFIAIgZQADgPgBglQgBgQgCgIIgLgYQgEgQADgRIgFABIAAABQACAKAAAMIAEBIQAAATgCAHQgDANgMAJQgMAJgPAAIgIAAQAFAMACAHgAkglkIABAIIACADIAHAQIgEgPIgEgQIgCAEgAiPnAIAEAOQABADAEACIAGAFQAIAHAFARQAHAVADAFIAEAGQgBgIABgNQABgSgBgHQgCgYgVgQIgVgMIgEgEQAFALABALgAm6EaQgKgCgHgOQgNgYgHgHIgNgKQgOgKgJgLIgFgFQgHgGgDgKIgKgfIgEgEIgBgDQgEgDgCgEQgEgIgEgNQgCgEAAgCIAAgGIABgDQACgDAEgEIAJgJIACACQAGADAFgFIABABIAGADIAEADIACAEIgIAIQAEADABAEQACAHgEAFIACAHIAHAKIAIAYIAHAOIAJAIIAFAGIAEACIAHAFQADADAAAEQAFADAFAAIACgIIgEgIQgHgJgDgLIgDgIIAAgCIgBgFQgCgIACgEQAFgKAOABQAIACAHAFQAEgDgBgHIgBgLQAAgHAHgCQAHgDAGAEIABABIABAAIAAAAQADAEAFANQAAAEAHAOQAEALAAAHIAAAOQgCARgFAMIgFARQgFAKgBAGIgEAYQgGAMgLAAIgCAAg");
	this.shape_22.setTransform(395.7,-55.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5B3B1F").s().p("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");
	this.shape_23.setTransform(397.8,-60.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5B3B1F").s().p("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gRAEQgfAJgJAaQgCAHAAAQQAAAMAEAJIABADQgBAFADAHIAJAfQADAHAGAIQALARAVASIAAACQABALAEAOQAEASALAJIAKAIQAGAFACAEQACAEgBAFIgDAHIgCAGQgBAGABAHIACAVIABAWQABANAEAJIAIANQAGAJAIARQAHANAKAJIAAAAQgJAAgLgFQgPgHgHgPIgFgMIgmh8QgEgRADgIQgMgNgKgRIgPgYIgWgZIgHgIIgCgBIgJgRIgHgrQADgJgGgLQgEgLgagKIgcgGIghAFIgTgBQgLAAgJAFQgJAIgCATQgBANABAVIAEAnIABAEQADAUAGALQADAHAIAOIANAcQAMAYAjAYQAOARAIAEIAeATIAKAJIARAQQASAQANAEIASAHQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAIAIAJAFQgOAKgagNQhNgmhAgvQgYgRgKgOIgDgJIgIAWQgFANgCAMIAAADQgEAHAAAKQAAAKACAKQACAOAHAOQAMAYAWAOIAMAHIAJAGQAVALAwALIAEABIAMAGIAKAHQAHAGALAXIAEAIQAdAyA4AXIAJADIASAHQAEAFAIAEIALAFIANAEQADADAFABIASAHIAJAGQAIACAHgCQAGgBAEgFQALgJgFgOIgDgKQgHgGgIgFQgGgEgGgDIgGgDIgEgDIgMgKQgGgLgGgRIgJgeQgGgXAAgMQgCgNAFgGQABgDADgCQAEADAFADQgDAJAEAHQABAFADAFIABAPIAVAjIABAJIAEACQABAEADACQALAPARgGIAMATIAEgdQAFgYAYgeIAcgnQAQgTAGgFQANgGAMADIgMAhIgGAEQgTAQgGAKIgHALIgZA0IgFAQIAAAKIAAADQgFAIAAAEQgCAMADAMQACAEAEAFQAEAQAVAAIAWgHQAKgEAVgDQATgDAogQQBLgeA1gdIAogYQAagMARgQQAMgIARgSIAhghIAOgQQANgSAGgOIABgBIAMgcIAHgRIAMgTQAOgcAihQIgCgBQgFAAgCgEQgDgEACgJIADgSIACgEQghAFgDgfIgCgRIgDACQgCAPgGgHQgHgIgEANIgEAWQAAACgNAAIADgGIgFAGIgJAAQAEADAAAEIgTAaQgOAEgPATIgCAEQAEACAEADIABACIABABQADAFACAHIABARIACATIAAASQgBAPgIATIgPAhIgFAQQgDAJgEAGIgRASIgPAUQgUAYgkAVQgNAGgEABIgHgBIAEgIQAGgGAMgGIATgLQAOgJAWgYQARgRAKgPQAGgKAIgVQAIgXAAgJIAAgQIAAgQQABgRgCgFIAAgBQgDgGgHgDIgBAAQgIgEgIACQgPAFgDASIgBAKIgHAFQgkAggKALQgIAJgSAbQgQAagNALQgQATggASIgOAIQAYggAwg2QA+hKA0hQIATgaIAQgQQADgDAHgKQAMAAAHgHIADgHQAPgKAHgTQABgGAAgaIAkgzQgFgYgEgKQgCgHgDgCQgEgDgHgLIgEgGQgKgRgFAIQgGAIgIgCIgKgRIgPgNIgPgKQgJgCgJADQgJAFgCAHIgDADQgEAHADAQQgFAIABAWQgBAbgEAZIgGAZQgIAcgMAaIgTAeQgMAOgUAQIAAABIgMAKQgHAKgEADQgCADgPAGIgmASIggAMIgJAFIgGADIAAABIgPAIIgHACIgGgBIgBAAIADgHIAIgKQAEgGABgFIADgGQADgDAFgBIBGgUQATgGAFgDQALgGAHgGQANgMAKgaIACgFIAIgPQAMgPAHgUIAGgUIACgGQAIghAAg1IADgfQADgTgBgGIgBgDIgDgFIgEgEIgGgDIgFgDIAEgCIACgDQAEgDgBgGIAAAAIAGgDIAEgCIABAAIAEgCQAFAHAQAGIAtAKQAbAGAPAJIAVAPQARAMACAEIADAEIAFALQAEAHAFAFIAGAEQALAHAMgEQAHgDAEgGQAEgHgBgHIgGgNIAAgBQgDgIgBgJIAAgRIAAgKIADgRQABgKAAgHQAAgfgbgUQgOgLgOgCQAHgJACgLQACgOgGgJIgGgKIAAgGIgDgXIgBgHIAEACQAUANAFAaQADALgCALQAFAAAJAFIAWAOQATANADAEIAGAJQAHAMACASQADAagHAaQgCALgFALQgKAYAAAGQgBAKAFAUQAGAUABAsQAAAhgJAeIABAAQAJAAAEACQAFADACAEQAZgaAdgVIABAHIABASQgkASgSALIAAAHQAAALgKAXIAzB0QhNg6AlAgQAkAfANAwQABAEAAAEQgOAQgmACQgoADAbAUIgEgBQgKgCgggUQgLgHgKgEIgOAaQgqBIhQA3QgeAmgkAjQhUBQhpAvQgqATggAAQgUAAgPgHgAAZOLQAIAOAOADIAFABQALANARACQAOABAPgIQAKgFARgLQBghEAvglIAYgUQgyAYg7ATIgYAKIgqALIgJAFQgGADgLAEIgIABIgOADQgPADgOABIgTADIgagDIgKAAQAMAGAOgBQgGANAJANgAgZNkIgDgDIgCgDIgSAAIAXAGgAkuLXQAJAHAMACQAKACAMgBQgQgOgggLIgHgDQADAKAJAIgAIcF3IACgCIgCgFIgDgIQAAAIADAHgAobCwIAJAIQgLgUgGgTQgCATAKAMgAmVg/QgqAUgUAtIgBAEQAOgCAMgPIAMgPQAGgKAHgFQAIgGALgBQAMgBAGAGQgBgIgFgSQgJACgKAEgAkznOQgMABgKAHQgQALgFAVQgFATAEAWIAFAWIgHAFQgIAIgDALQgEALACAPIAGAZIAFATQALgdAIgOQASgdAbgFQAQgEAQAGQALAFALAIIADgDIAIgGQAVgQAQABIAJABIAFABQAJABAFgBQAHgCAMgJQASgQAOgHIAIgDQALgEARAAQANAAAQACQAWAEAJAGQAMAIALAWIAEAHIANgIIADgIQAHgKAHgEQAEgDAGgCIAAgCQgCgMAKgKQAGgHANgHQAMgFAEgEIACgCQAEgHADgMQACgIAHgTIAIgOQAFgKADgDQAHgIAOgFQAkgNAWASQANALAHAWIAJAlIACAFQAAhWABgJQADgngBgOIgFgnQgDgbAHgkIAOg/QAPhCgZgbIgHgIQgFgFgCgDIgHgSQgGgLgMgDQgNgFgKAGQgNAIgKAZIgfBPQgNAfgEATQgBANAAAVIABAaQgHABgFAEIABgOQAGgVAAgKQACgYgRgQQgQgRgYABQgYACgVATQgMANgEAMQgDAGAAAKIgBAQQgCAVgMAIQgFADgIABIgOADQgQAFgJANQgOgUgJgIQgPgQgRADQgHACgHAEIgNAIQgUAJgJAGQgMAIgJAQQgFAKgHAVQgFAOgBAKIgDAPQgIAoAAAVQAAAhAOAYIAOAUIAEAFIgIgBQgQgBgJAMIAAAAIgJgbQgMgggYgJQgHgDgJAAIgGAAgAKXIwQgEAEgBAHQgBAGgDAFQgMgOAVgIgApaISIgugHQg2gKghgbQgTgQgLgVQgMgXgBgXIABgRQgBgFBGBUIgUgZQAdAfAIgPQAJgRgUgjIAoApQgmgQAeAyIATADQAYAGATAKQAPAIAIAJQAFAGALAZIAAABQgMgLgVgGgAKeH/IApAIIgTAIQgIgHgOgJgAKrHuQglgLAxAHQAwAHgEgCQgFgDgCgDQgBgCgKgEQARgCAdgLQAeAKhDAeQgVgIgagIgAK3HbQgkgKAGgMQAFgLAegSIAEgCQADAMgJAcQgDAIACAGIgCgBgArEGKIgDgEQgegvAAghQgBgYAWgOQAIALATAVQA7A/gqgOQgrgNAKARQAJARATAfQAIAMgEAAQgEAAgbgXgAq/EHIABAAQAogPAMAEQAQAdgOAAQgRAAgmgSgAAsENIgBAAIgRgHIgEgDIgIgKQgDgFgBgHQgEgQgCgOIABgDIACgIQAIgTgBgJQAAgHgEgGQgEgHgGgCIgBAAIgDgEQgFgGgMgGIgXgnIgJgIQAEgNgFgOIgEgIQgDgGgFgGIgCgDIABABIADADIAHAKIAFAHIAFAOIAHANQAUAfAjARQABAFADAEQACAEAEACIgCAPIgBAXQgBAZADAOQAGAVASAKIABABQAMAGAAAFQABAFgIAIQgCgEgIgEgAhHD9IgDAAQgBgGgGgGQgJgMgUgOIgMgJIgLgHQgPgKgCgFIAAgDIAAgBQAAgGgEgDIgDgBQgFgDgKgBQgIgKgNABIgGACIgHgHQgHgEgFABIgBgBQgBgPgDgMQgBgIgEgGQgFgHgRgHIgBAAQgPgEgLAAIgEABQgJABgNAHIgBADQgCAHgKgBIgFgBIgHAGIgBACQAEgOgEgIQgBgGgDgDQAJACAKgCIAagHIABAAQAIAAALAEIANAEIAHACQALAEAJgBIABAAIAAABIABgBQAKgBAGgGQAHgHgBgLQgBgKgGgIQgFgGgKgIIgQgNIgVgUQgNgMgNgBIAAgWIAIgKIACgDIADAFIAIAKIgEgJIgEgMQADgKgBgMIAEAPQAFAUAFALQAKAVASAMQAHAFARAKQAQAJAIAHIADADIgRAxQgDAHgBAGIgGAFQgEAFAAAGQgBALASARQATAUALAEQAKADAKgDIAHgCIACAEQAFAMAMAMIADADIAKAHIAZAPQAVARgDAPIgCAEgAJXDlIABAEIgHAGIAGgKgAlIDeIgRgKQACgGgCgKQAAgIgDgEIgBgCIgDgBQgFgDgGACIgCABIALgSQAKgPAKgWIABAAIgCAKQgBARABAMIAHAhQADAPADAEQABADAFAFIABACIgNgFgAEGBpIABgOQADgKgBgFQgBgPgVgJQgHgDgdgEIgIgBIgHgBIAFgIIAOgVIACgDQABAOAHAKQAPAUAjACIALABIgCABQgGAKgBANQAAAMAGAKIACAEQgHAAgLADIgBgGgAAPBgIgEgDQADgHAAgJQAAgNABgHIADgOQgDgPAAgHQABgGAGgJQAGgIAAgFIABgEQAIADAKgBQANgBAKgGQAGgEAQgUIADgDIALgOQAHgIADgHQAEgHAEgMIAAgBIAGgVQADgJALgVQAJgTADgMQADgWADgKQAGgUAPgDQAGgCANABQAIgBAKgFQgDALgEAFQgEAFgHAGIgNAKQgMALgFAaQgHAigEAIIgKAUQgIAMgCAIIgCALQgCAJgBANQgCAMgIAMIgHAAIgQABQgQADgRAGQgIACgDAFIgHADIgBABQgQALgMAhQgGASgBALQgCALADAOIgCAAgAlpBGIAAgBIAAABgAhpgOIAFABIAHAAQgBAFABAFIABAFIgNgQgAiag5QgOgFgCgCQgFgEgFgOIgFgRIAKAOIAWAdIgBgBgAgxg/IgBgFIgGgPIAIABIACAAQAKgBAIgEIAHgEQAMgJADgOQACgGAAgTIgEhJQAAgMgCgJIAAgCIAFgBQgDASAGAQIAJAXQACAIABAQQABAlgDAQIgIAZIAAAFIgDgBQgNgDgPADIgBABIgJADIAAAFIgBADQgDgCgEAAgAkhh3IgCgDIgBgJIACgDIAEAPIAEAPIgHgPgAhtiVQgDgFgHgVQgFgQgIgHIgGgFIgCgCIgDgEIgEgNQgBgLgFgLIAEADIAKAHIALAGQAVAQACAYQABAHgBARQgBANABAIIgEgGg");
	this.shape_24.setTransform(396.1,-78.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7D410C").s().p("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PQgCAHgJATIgjBHQgHAOAAAIIACAJIACgDQAOgNAagdQAOgOAGgLIAJgUQAGgLAIgEQAGgEAHAAIACgIIAAgCIACAJIAAACQAEAAAEADQANAHgBAPIgBADQAHAEAIAAIACAAIADAAQAKgCAFgKIADgHIAFAEQAKALAEAOQACAJgBAJQAUgXAcgCQAPgBANAHQANAGAIAMIALAXQAFAIANANQARAYgHAeQgGAagVAWIgSARIgSARQgMAMgKAQIACgBQAFgDAJgJQAIgHATgIQAJgGASgVQARgTAMgGIAIgCQAMgDANAFQAKADAIAIQAEAEADAFQAIAPgFARQgEASgOAJQAIAIAFANIAGAYIAEATIAIADQAWAHgTgtIgKhJIgJgpIAEgHIABgBQgEgEgFgDQgPgxgSABQgbABARgIQARgJgYgHQgYgIgRgWQgSgXgXgSQgXgSglgQIghgOQAJgqgDg8QgHh5ABgLIADg/QAAgbACgGQAFgVAQgEQAKgCAKAGQAJAFAGAKQAFAIACALIAEAVQAEAaAaBQQAVBAgBAqQAFAEAHgFQAGgEADgIIAJggQAFgTAMgIQAOgKATAIQATAKAAARQABAIgHASQgGARABAJQABAGAEAHIAGANQAHASgKAJQAQgCAMAPQAKAMAFAUQAPAzgFA2IgEAeIAEAPIAAAIQAMACAJAKQAMANgDASQgBAIgGAPIgDAOIACAAIABgBQAggXAVAMQAMgEAJgBQANgBALAEQANADAGAJQAJANgDASQgBAJgHAVQgJAegIAsQgEAagHALQgJAOgPADIADAFIACAGQgIgDgJADQgGACgHAGIAAADIgGgJQgDgEgTgNIgXgMQgJgFgFAAQACgLgCgNQgGgagUgNIgEgCIACAHIADAXIAAAGIAGAKQAFALgCAOQgCAJgGAJQAOACAOALQAaAUAAAfQABAHgCAKIgCARIgBAKIABARQABAJACAIIABABIAFANQABAHgEAHQgEAGgHADQgLAEgLgHIgGgEQgGgFgEgHIgFgLIgCgEQgDgEgRgMIgVgPQgPgJgbgGIgtgKQgPgGgGgHIgEACIAAAAIgFACIgGADIAAAAQABAGgDADIgDADIgDACIAFADIAGADIAEAEIADAFIAAADQABAGgCATIgEAfQABA1gIAhIgCAGIgGAUQgIAUgLAPIgJAPIg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");
	this.shape_25.setTransform(396.6,-75.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#604423").s().p("AonI8QgVgUgDgRIALAKQAaAVAIAPIAJAQIgBADgAnqGXIgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIABACIgBAAgAITCcQgCgTgHgMIAAgDQAHgFAGgCQAKgDAIADQAFABAGAEQAHAHADAIQACAGgBAGQgBAKgIALQgFAGgLALIgXAXQAHgagDgagAGgiXQAFADADAFIAAAAIgEAIIgEgQgAkmkTQgMgLgEgJQgHgQAKgNIACgDQAJgLAQAAIAIACQADAKAHAOIARAbIgJgCQgQAAgVAPgAi1lyIgFgWQgCgOABgKQABgMAHgJQAJgLALgBQAJgBAIAGIAFADIgBAHQgFA1ABAcQABAOACANQgRAAgLAEIgIAEQgDgigDgSgAAglwIAAgdQAAgUgBgKIgDgcQgEgggBg/IACgFIAJgVQABgFABgKIAAgBQAFgEAHgCIABAAIAHgBIgCAPQAAA/ACAXIACAZQACAPgBAKIgCAbIgIAPQgHATgCAIQgDAMgEAGIgBgHg");
	this.shape_26.setTransform(402.6,-84.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#604423").s().p("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");
	this.shape_27.setTransform(403.3,-88.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7D410C").s().p("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");
	this.shape_28.setTransform(395.5,-82.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5B3B1F").s().p("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");
	this.shape_29.setTransform(397.1,-85.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5B3B1F").s().p("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");
	this.shape_30.setTransform(396.7,-87.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7D410C").s().p("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");
	this.shape_31.setTransform(397,-84.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#604423").s().p("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");
	this.shape_32.setTransform(403.6,-90.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_23},{t:this.shape_22}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(379,-20.8,41.7,30);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(377.3,-28.5,45.1,37.7), rect, rect=new cjs.Rectangle(374.8,-36.7,50.4,46), rect, rect=new cjs.Rectangle(368.5,-50.1,63.5,59.6), rect, rect=new cjs.Rectangle(363.8,-51.6,73.4,61.2), rect, rect=new cjs.Rectangle(347.4,-83,100.8,92.6), rect, rect, rect, rect=new cjs.Rectangle(347.4,-95,100.8,104.7), rect, rect=new cjs.Rectangle(347.4,-99,100.8,108.6), rect, rect=new cjs.Rectangle(347.4,-106.3,100.8,115.9), rect, rect=new cjs.Rectangle(347.4,-115.8,100.8,125.4), rect, rect=new cjs.Rectangle(339.4,-130.1,116.8,139.8), rect, rect=new cjs.Rectangle(318.2,-174.9,155.8,193.2), rect, rect=new cjs.Rectangle(306.4,-188.9,181.5,207.2), rect, new cjs.Rectangle(299.1,-192.9,195.2,211.2)];


(lib.plate_t_058 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 4
	this.instance = new lib.plate_t_059();
	this.instance.setTransform(21.8,183.9,1.885,1.885,0,0,180);
	this.instance.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:26.2,y:180.5},0).wait(1).to({x:29.7,y:176.2},0).wait(1).to({x:32.5,y:171.5},0).wait(1).to({x:35.1,y:166.7},0).wait(1).to({x:37.5,y:161.9},0).wait(1).to({x:39.8,y:157.1},0).wait(1).to({x:41.9,y:152.3},0).wait(1).to({x:44,y:147.5},0).wait(1).to({x:45.8,y:142.8},0).wait(1).to({x:47,y:137.9},0).wait(1).to({x:47.5,y:132.9},0).wait(1).to({x:47.2,y:128},0).wait(1).to({x:46.1,y:123.1},0).wait(1).to({x:44.5,y:118.5},0).wait(1).to({x:42.4,y:114.1},0).wait(1).to({x:40,y:110},0).wait(1).to({x:37.2,y:106.1},0).wait(1).to({x:34.1,y:102.5},0).wait(1).to({x:30.8,y:99.1},0).wait(1).to({x:27.4,y:95.9},0).wait(1).to({x:23.8,y:93},0).wait(1).to({x:20.1,y:90.3},0).wait(1).to({x:16.4,y:87.7},0).wait(1).to({x:12.6,y:85.4},0).wait(1).to({x:8.8,y:83.3},0).wait(1).to({x:4.9,y:81.2},0).wait(1).to({x:1.1,y:79.4},0).wait(1).to({x:-2.8,y:77.6},0).wait(1).to({x:-6.6,y:76},0).wait(1).to({x:-10.3,y:74.3},0).wait(1).to({x:-14,y:72.6},0).wait(1).to({x:-17.5,y:70.8},0).wait(1).to({x:-21,y:68.9},0).wait(1).to({x:-24.4,y:67},0).wait(1).to({x:-27.7,y:65.1},0).wait(1).to({x:-31,y:63},0).wait(1).to({x:-34.1,y:61},0).wait(1).to({x:-37.2,y:58.8},0).wait(1).to({x:-40.2,y:56.7},0).wait(1).to({x:-43.1,y:54.4},0).wait(1).to({x:-45.9,y:52.2},0).wait(1).to({x:-48.6,y:49.9},0).wait(1).to({x:-51.2,y:47.5},0).wait(1).to({x:-53.7,y:45.1},0).wait(1).to({x:-56.2,y:42.7},0).wait(1).to({x:-58.5,y:40.3},0).wait(1).to({x:-60.8,y:37.8},0).wait(1).to({x:-62.9,y:35.3},0).wait(1).to({x:-65,y:32.8},0).wait(1).to({x:-67,y:30.3},0).wait(1).to({x:-68.8,y:27.7},0).wait(1).to({x:-70.6,y:25.2},0).wait(1).to({x:-72.4,y:22.6},0).wait(1).to({x:-74,y:20.1},0).wait(1).to({x:-75.5,y:17.5},0).wait(1).to({x:-77,y:15},0).wait(1).to({x:-78.4,y:12.5},0).wait(1).to({x:-79.7,y:9.9},0).wait(1).to({x:-81,y:7.4},0).wait(1).to({x:-82.1,y:5},0).wait(1).to({x:-83.2,y:2.5},0).wait(1).to({x:-84.3,y:0},0).wait(1).to({x:-85.2,y:-2.4},0).wait(1).to({x:-86.2,y:-4.8},0).wait(1).to({x:-87,y:-7.1},0).wait(1).to({x:-87.8,y:-9.5},0).wait(1).to({x:-88.6,y:-11.8},0).wait(1).to({x:-89.3,y:-14},0).wait(1).to({x:-89.9,y:-16.3},0).wait(1).to({x:-90.5,y:-18.5},0).wait(1).to({x:-91.1,y:-20.6},0).wait(1).to({x:-91.6,y:-22.7},0).wait(1).to({x:-92.1,y:-24.8},0).wait(1).to({x:-92.5,y:-26.9},0).wait(1).to({x:-92.9,y:-28.9},0).wait(1).to({x:-93.3,y:-30.9},0).wait(1).to({x:-93.6,y:-32.8},0).wait(1).to({x:-93.9,y:-34.7},0).wait(1).to({x:-94.1,y:-36.5},0).wait(1).to({x:-94.4,y:-38.4},0).wait(1).to({x:-94.5,y:-40.1},0).wait(1).to({x:-94.7,y:-41.8},0).wait(1).to({x:-94.9,y:-43.5},0).wait(1).to({x:-95,y:-45.2},0).wait(1).to({x:-95.1,y:-46.7},0).wait(1).to({x:-95.2,y:-48.3},0).wait(1).to({y:-49.8},0).wait(1).to({x:-95.3,y:-51.2},0).wait(1).to({y:-52.6},0).wait(1).to({y:-53.9},0).wait(1).to({y:-55.2},0).wait(1).to({y:-56.4},0).wait(1).to({y:-57.6},0).wait(1).to({y:-58.8},0).wait(1).to({y:-59.9},0).wait(1).to({x:-95.2,y:-60.9},0).wait(1).to({y:-62},0).wait(1).to({x:-95.1,y:-62.9},0).wait(1).to({x:-95,y:-63.8},0).wait(1).to({y:-64.7},0).wait(1).to({x:-94.9,y:-65.6},0).wait(1).to({x:-94.8,y:-66.4},0).wait(1).to({x:-94.7,y:-67.1},0).wait(1).to({x:-94.6,y:-67.8},0).wait(1).to({x:-94.5,y:-68.5},0).wait(1).to({x:-94.4,y:-69.1},0).wait(1).to({x:-94.3,y:-69.6},0).wait(1).to({x:-94.2,y:-70.1},0).wait(1).to({x:-94.1,y:-70.6},0).wait(1).to({x:-94,y:-71},0).wait(1).to({x:-93.9,y:-71.4},0).wait(1).to({x:-93.8,y:-71.8},0).wait(1).to({y:-72},0).wait(1).to({x:-93.7,y:-72.3},0).wait(1).to({y:-72.5},0).wait(1).to({x:-93.6,y:-72.6},0).wait(1).to({y:-72.8},0).wait(2).to({x:-94.9,y:-73.2},0).wait(1));

	// Layer 1 copy 3
	this.instance_1 = new lib.plate_t_059();
	this.instance_1.setTransform(21.8,183.9,1.468,1.468,0,0,180);
	this.instance_1.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_1.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:25.6,y:181.2},0).wait(1).to({x:28.6,y:177.6},0).wait(1).to({x:31.1,y:173.9},0).wait(1).to({x:33.4,y:169.9},0).wait(1).to({x:35.5,y:165.9},0).wait(1).to({x:37.5,y:161.9},0).wait(1).to({x:39.4,y:157.9},0).wait(1).to({x:41.2,y:154},0).wait(1).to({x:42.9,y:150.1},0).wait(1).to({x:44.6,y:146.2},0).wait(1).to({x:46,y:142.3},0).wait(1).to({x:47,y:138.3},0).wait(1).to({x:47.4,y:134.2},0).wait(1).to({y:130.1},0).wait(1).to({x:46.9,y:126.1},0).wait(1).to({x:45.9,y:122.2},0).wait(1).to({x:44.5,y:118.5},0).wait(1).to({x:42.9,y:114.9},0).wait(1).to({x:40.9,y:111.5},0).wait(1).to({x:38.8,y:108.3},0).wait(1).to({x:36.5,y:105.2},0).wait(1).to({x:34,y:102.3},0).wait(1).to({x:31.3,y:99.6},0).wait(1).to({x:28.6,y:97},0).wait(1).to({x:25.8,y:94.6},0).wait(1).to({x:22.9,y:92.3},0).wait(1).to({x:20,y:90.2},0).wait(1).to({x:17,y:88.2},0).wait(1).to({x:14.1,y:86.3},0).wait(1).to({x:11.1,y:84.5},0).wait(1).to({x:8.1,y:82.9},0).wait(1).to({x:5.1,y:81.3},0).wait(1).to({x:2.1,y:79.8},0).wait(1).to({x:-0.9,y:78.4},0).wait(1).to({x:-3.9,y:77.1},0).wait(1).to({x:-6.9,y:75.8},0).wait(1).to({x:-9.7,y:74.6},0).wait(1).to({x:-12.5,y:73.3},0).wait(1).to({x:-15.3,y:71.9},0).wait(1).to({x:-18,y:70.5},0).wait(1).to({x:-20.6,y:69.1},0).wait(1).to({x:-23.2,y:67.7},0).wait(1).to({x:-25.7,y:66.3},0).wait(1).to({x:-28.2,y:64.8},0).wait(1).to({x:-30.6,y:63.3},0).wait(1).to({x:-33,y:61.7},0).wait(1).to({x:-35.2,y:60.2},0).wait(1).to({x:-37.5,y:58.6},0).wait(1).to({x:-39.7,y:57},0).wait(1).to({x:-41.8,y:55.4},0).wait(1).to({x:-43.9,y:53.8},0).wait(1).to({x:-45.9,y:52.2},0).wait(1).to({x:-47.8,y:50.5},0).wait(1).to({x:-49.7,y:48.9},0).wait(1).to({x:-51.5,y:47.2},0).wait(1).to({x:-53.3,y:45.5},0).wait(1).to({x:-55,y:43.8},0).wait(1).to({x:-56.7,y:42.2},0).wait(1).to({x:-58.3,y:40.5},0).wait(1).to({x:-59.9,y:38.8},0).wait(1).to({x:-61.4,y:37.1},0).wait(1).to({x:-62.8,y:35.4},0).wait(1).to({x:-64.2,y:33.8},0).wait(1).to({x:-65.5,y:32.1},0).wait(1).to({x:-66.8,y:30.4},0).wait(1).to({x:-68.1,y:28.8},0).wait(1).to({x:-69.3,y:27.1},0).wait(1).to({x:-70.4,y:25.5},0).wait(1).to({x:-71.5,y:23.9},0).wait(1).to({x:-72.6,y:22.3},0).wait(1).to({x:-73.6,y:20.7},0).wait(1).to({x:-74.5,y:19.2},0).wait(1).to({x:-75.5,y:17.7},0).wait(1).to({x:-76.4,y:16.1},0).wait(1).to({x:-77.2,y:14.6},0).wait(1).to({x:-78,y:13.2},0).wait(1).to({x:-78.8,y:11.7},0).wait(1).to({x:-79.5,y:10.3},0).wait(1).to({x:-80.2,y:8.9},0).wait(1).to({x:-80.9,y:7.5},0).wait(1).to({x:-81.5,y:6.2},0).wait(1).to({x:-82.1,y:4.9},0).wait(1).to({x:-82.7,y:3.6},0).wait(1).to({x:-83.3,y:2.4},0).wait(1).to({x:-83.8,y:1.1},0).wait(1).to({x:-84.3,y:-0.1},0).wait(1).to({x:-84.8,y:-1.2},0).wait(1).to({x:-85.2,y:-2.3},0).wait(1).to({x:-85.7,y:-3.4},0).wait(1).to({x:-86.1,y:-4.5},0).wait(1).to({x:-86.4,y:-5.5},0).wait(1).to({x:-86.8,y:-6.5},0).wait(1).to({x:-87.1,y:-7.5},0).wait(1).to({x:-87.5,y:-8.4},0).wait(1).to({x:-87.8,y:-9.3},0).wait(1).to({x:-88.1,y:-10.2},0).wait(1).to({x:-88.3,y:-11},0).wait(1).to({x:-88.6,y:-11.8},0).wait(1).to({x:-88.8,y:-12.5},0).wait(1).to({x:-89,y:-13.2},0).wait(1).to({x:-89.3,y:-13.9},0).wait(1).to({x:-89.5,y:-14.6},0).wait(1).to({x:-89.6,y:-15.2},0).wait(1).to({x:-89.8,y:-15.8},0).wait(1).to({x:-90,y:-16.3},0).wait(1).to({x:-90.1,y:-16.8},0).wait(1).to({x:-90.2,y:-17.3},0).wait(1).to({x:-90.3,y:-17.7},0).wait(1).to({x:-90.4,y:-18.1},0).wait(1).to({x:-90.5,y:-18.4},0).wait(1).to({x:-90.6,y:-18.7},0).wait(1).to({x:-90.7,y:-19},0).wait(1).to({x:-90.8,y:-19.3},0).wait(1).to({y:-19.5},0).wait(1).to({x:-90.9,y:-19.6},0).wait(1).to({y:-19.8},0).wait(1).to({y:-19.9},0).wait(2).to({x:-91.2},0).wait(1));

	// Layer 1 copy 2
	this.instance_2 = new lib.plate_t_059();
	this.instance_2.setTransform(22.4,183.6,1,1,0,0,180);
	this.instance_2.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_2.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:25.5,y:181.2},0).wait(1).to({x:28.1,y:178.3},0).wait(1).to({x:30.3,y:175.2},0).wait(1).to({x:32.2,y:172},0).wait(1).to({x:34,y:168.8},0).wait(1).to({x:35.7,y:165.4},0).wait(1).to({x:37.4,y:162.1},0).wait(1).to({x:39,y:158.8},0).wait(1).to({x:40.5,y:155.6},0).wait(1).to({x:41.9,y:152.3},0).wait(1).to({x:43.3,y:149.1},0).wait(1).to({x:44.7,y:145.9},0).wait(1).to({x:45.9,y:142.8},0).wait(1).to({x:46.7,y:139.5},0).wait(1).to({x:47.3,y:136.2},0).wait(1).to({x:47.5,y:132.8},0).wait(1).to({x:47.3,y:129.5},0).wait(1).to({x:46.9,y:126.3},0).wait(1).to({x:46.1,y:123.1},0).wait(1).to({x:45.2,y:120.1},0).wait(1).to({x:43.9,y:117.1},0).wait(1).to({x:42.5,y:114.3},0).wait(1).to({x:41,y:111.6},0).wait(1).to({x:39.3,y:109},0).wait(1).to({x:37.5,y:106.5},0).wait(1).to({x:35.6,y:104.1},0).wait(1).to({x:33.5,y:101.8},0).wait(1).to({x:31.5,y:99.7},0).wait(1).to({x:29.3,y:97.6},0).wait(1).to({x:27.1,y:95.7},0).wait(1).to({x:24.9,y:93.9},0).wait(1).to({x:22.7,y:92.1},0).wait(1).to({x:20.4,y:90.4},0).wait(1).to({x:18.1,y:88.9},0).wait(1).to({x:15.8,y:87.4},0).wait(1).to({x:13.5,y:86},0).wait(1).to({x:11.2,y:84.6},0).wait(1).to({x:8.9,y:83.3},0).wait(1).to({x:6.6,y:82.1},0).wait(1).to({x:4.3,y:80.9},0).wait(1).to({x:2,y:79.8},0).wait(1).to({x:-0.2,y:78.8},0).wait(1).to({x:-2.5,y:77.7},0).wait(1).to({x:-4.7,y:76.8},0).wait(1).to({x:-6.9,y:75.8},0).wait(1).to({x:-9,y:74.9},0).wait(1).to({x:-11.1,y:73.9},0).wait(1).to({x:-13.2,y:72.9},0).wait(1).to({x:-15.2,y:72},0).wait(1).to({x:-17.1,y:71},0).wait(1).to({x:-19.1,y:70},0).wait(1).to({x:-21,y:68.9},0).wait(1).to({x:-22.8,y:67.9},0).wait(1).to({x:-24.6,y:66.9},0).wait(1).to({x:-26.4,y:65.9},0).wait(1).to({x:-28.1,y:64.8},0).wait(1).to({x:-29.8,y:63.8},0).wait(1).to({x:-31.5,y:62.7},0).wait(1).to({x:-33.1,y:61.7},0).wait(1).to({x:-34.7,y:60.6},0).wait(1).to({x:-36.2,y:59.5},0).wait(1).to({x:-37.7,y:58.5},0).wait(1).to({x:-39.2,y:57.4},0).wait(1).to({x:-40.6,y:56.4},0).wait(1).to({x:-42,y:55.3},0).wait(1).to({x:-43.3,y:54.2},0).wait(1).to({x:-44.6,y:53.2},0).wait(1).to({x:-45.9,y:52.1},0).wait(1).to({x:-47.1,y:51.1},0).wait(1).to({x:-48.3,y:50.1},0).wait(1).to({x:-49.5,y:49},0).wait(1).to({x:-50.6,y:48},0).wait(1).to({x:-51.7,y:47},0).wait(1).to({x:-52.8,y:46},0).wait(1).to({x:-53.8,y:45},0).wait(1).to({x:-54.8,y:44.1},0).wait(1).to({x:-55.8,y:43.1},0).wait(1).to({x:-56.7,y:42.1},0).wait(1).to({x:-57.6,y:41.2},0).wait(1).to({x:-58.5,y:40.3},0).wait(1).to({x:-59.3,y:39.4},0).wait(1).to({x:-60.1,y:38.5},0).wait(1).to({x:-60.9,y:37.6},0).wait(1).to({x:-61.7,y:36.8},0).wait(1).to({x:-62.4,y:35.9},0).wait(1).to({x:-63.1,y:35.1},0).wait(1).to({x:-63.8,y:34.3},0).wait(1).to({x:-64.4,y:33.5},0).wait(1).to({x:-65,y:32.8},0).wait(1).to({x:-65.6,y:32},0).wait(1).to({x:-66.2,y:31.3},0).wait(1).to({x:-66.7,y:30.6},0).wait(1).to({x:-67.2,y:29.9},0).wait(1).to({x:-67.7,y:29.3},0).wait(1).to({x:-68.2,y:28.6},0).wait(1).to({x:-68.6,y:28},0).wait(1).to({x:-69,y:27.4},0).wait(1).to({x:-69.5,y:26.9},0).wait(1).to({x:-69.8,y:26.3},0).wait(1).to({x:-70.2,y:25.8},0).wait(1).to({x:-70.5,y:25.3},0).wait(1).to({x:-70.9,y:24.9},0).wait(1).to({x:-71.1,y:24.4},0).wait(1).to({x:-71.4,y:24},0).wait(1).to({x:-71.7,y:23.6},0).wait(1).to({x:-71.9,y:23.3},0).wait(1).to({x:-72.1,y:22.9},0).wait(1).to({x:-72.4,y:22.6},0).wait(1).to({x:-72.5,y:22.4},0).wait(1).to({x:-72.7,y:22.1},0).wait(1).to({x:-72.9,y:21.9},0).wait(1).to({x:-73,y:21.7},0).wait(1).to({x:-73.1,y:21.5},0).wait(1).to({x:-73.2,y:21.3},0).wait(1).to({x:-73.3,y:21.2},0).wait(1).to({y:21.1},0).wait(1).to({x:-73.4},0).wait(1).to({y:21},0).wait(1).to({x:-73.3,y:20.9},0).wait(1));

	// Layer 1 copy
	this.instance_3 = new lib.plate_t_059();
	this.instance_3.setTransform(22.4,183.6,1,1,0,0,180);
	this.instance_3.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_3.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:25.1,y:181.6},0).wait(1).to({x:27.4,y:179.1},0).wait(1).to({x:29.4,y:176.5},0).wait(1).to({x:31.2,y:173.7},0).wait(1).to({x:32.8,y:170.9},0).wait(1).to({x:34.4,y:168.1},0).wait(1).to({x:35.9,y:165.2},0).wait(1).to({x:37.3,y:162.3},0).wait(1).to({x:38.6,y:159.5},0).wait(1).to({x:39.9,y:156.7},0).wait(1).to({x:41.2,y:153.9},0).wait(1).to({x:42.4,y:151.1},0).wait(1).to({x:43.6,y:148.4},0).wait(1).to({x:44.8,y:145.7},0).wait(1).to({x:45.8,y:143},0).wait(1).to({x:46.6,y:140.2},0).wait(1).to({x:47.1,y:137.4},0).wait(1).to({x:47.4,y:134.6},0).wait(1).to({x:47.5,y:131.7},0).wait(1).to({x:47.3,y:129},0).wait(1).to({x:46.9,y:126.2},0).wait(1).to({x:46.3,y:123.5},0).wait(1).to({x:45.5,y:120.9},0).wait(1).to({x:44.5,y:118.4},0).wait(1).to({x:43.4,y:116},0).wait(1).to({x:42.2,y:113.7},0).wait(1).to({x:40.9,y:111.5},0).wait(1).to({x:39.5,y:109.3},0).wait(1).to({x:38,y:107.2},0).wait(1).to({x:36.4,y:105.2},0).wait(1).to({x:34.8,y:103.2},0).wait(1).to({x:33.1,y:101.4},0).wait(1).to({x:31.4,y:99.6},0).wait(1).to({x:29.6,y:97.9},0).wait(1).to({x:27.9,y:96.3},0).wait(1).to({x:26.1,y:94.8},0).wait(1).to({x:24.2,y:93.3},0).wait(1).to({x:22.4,y:91.9},0).wait(1).to({x:20.6,y:90.6},0).wait(1).to({x:18.7,y:89.3},0).wait(1).to({x:16.9,y:88.1},0).wait(1).to({x:15,y:86.9},0).wait(1).to({x:13.2,y:85.8},0).wait(1).to({x:11.3,y:84.7},0).wait(1).to({x:9.5,y:83.7},0).wait(1).to({x:7.7,y:82.7},0).wait(1).to({x:5.9,y:81.7},0).wait(1).to({x:4.1,y:80.8},0).wait(1).to({x:2.3,y:80},0).wait(1).to({x:0.6,y:79.1},0).wait(1).to({x:-1.2,y:78.3},0).wait(1).to({x:-2.9,y:77.6},0).wait(1).to({x:-4.6,y:76.8},0).wait(1).to({x:-6.3,y:76.1},0).wait(1).to({x:-7.9,y:75.4},0).wait(1).to({x:-9.5,y:74.7},0).wait(1).to({x:-11.1,y:73.9},0).wait(1).to({x:-12.6,y:73.2},0).wait(1).to({x:-14.1,y:72.5},0).wait(1).to({x:-15.6,y:71.7},0).wait(1).to({x:-17.1,y:71},0).wait(1).to({x:-18.5,y:70.3},0).wait(1).to({x:-19.9,y:69.5},0).wait(1).to({x:-21.2,y:68.8},0).wait(1).to({x:-22.6,y:68.1},0).wait(1).to({x:-23.8,y:67.3},0).wait(1).to({x:-25.1,y:66.6},0).wait(1).to({x:-26.3,y:65.9},0).wait(1).to({x:-27.5,y:65.2},0).wait(1).to({x:-28.7,y:64.4},0).wait(1).to({x:-29.9,y:63.7},0).wait(1).to({x:-31,y:63},0).wait(1).to({x:-32.1,y:62.3},0).wait(1).to({x:-33.1,y:61.6},0).wait(1).to({x:-34.2,y:60.9},0).wait(1).to({x:-35.2,y:60.3},0).wait(1).to({x:-36.1,y:59.6},0).wait(1).to({x:-37.1,y:58.9},0).wait(1).to({x:-38,y:58.3},0).wait(1).to({x:-38.9,y:57.6},0).wait(1).to({x:-39.7,y:57},0).wait(1).to({x:-40.6,y:56.4},0).wait(1).to({x:-41.4,y:55.7},0).wait(1).to({x:-42.2,y:55.1},0).wait(1).to({x:-42.9,y:54.5},0).wait(1).to({x:-43.7,y:54},0).wait(1).to({x:-44.4,y:53.4},0).wait(1).to({x:-45.1,y:52.8},0).wait(1).to({x:-45.7,y:52.3},0).wait(1).to({x:-46.3,y:51.8},0).wait(1).to({x:-47,y:51.3},0).wait(1).to({x:-47.5,y:50.8},0).wait(1).to({x:-48.1,y:50.3},0).wait(1).to({x:-48.6,y:49.8},0).wait(1).to({x:-49.1,y:49.4},0).wait(1).to({x:-49.6,y:48.9},0).wait(1).to({x:-50.1,y:48.5},0).wait(1).to({x:-50.5,y:48.1},0).wait(1).to({x:-51,y:47.7},0).wait(1).to({x:-51.4,y:47.4},0).wait(1).to({x:-51.8,y:47},0).wait(1).to({x:-52.1,y:46.7},0).wait(1).to({x:-52.4,y:46.4},0).wait(1).to({x:-52.8,y:46.1},0).wait(1).to({x:-53.1,y:45.8},0).wait(1).to({x:-53.3,y:45.5},0).wait(1).to({x:-53.6,y:45.3},0).wait(1).to({x:-53.8,y:45.1},0).wait(1).to({x:-54,y:44.8},0).wait(1).to({x:-54.2,y:44.7},0).wait(1).to({x:-54.4,y:44.5},0).wait(1).to({x:-54.5,y:44.4},0).wait(1).to({x:-54.7,y:44.2},0).wait(1).to({x:-54.8,y:44.1},0).wait(1).to({x:-54.9,y:44},0).wait(2).to({x:-55,y:43.9},0).wait(2).to({x:-54.6,y:43.5},0).wait(1));

	// Layer 1
	this.instance_4 = new lib.plate_t_059();
	this.instance_4.setTransform(22.4,183.6,1,1,0,0,180);
	this.instance_4.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_4.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:24.7,y:182},0).wait(1).to({x:26.7,y:180},0).wait(1).to({x:28.4,y:177.9},0).wait(1).to({x:30,y:175.7},0).wait(1).to({x:31.4,y:173.4},0).wait(1).to({x:32.7,y:171.1},0).wait(1).to({x:34,y:168.8},0).wait(1).to({x:35.2,y:166.5},0).wait(1).to({x:36.4,y:164.1},0).wait(1).to({x:37.5,y:161.8},0).wait(1).to({x:38.6,y:159.5},0).wait(1).to({x:39.7,y:157.2},0).wait(1).to({x:40.7,y:155},0).wait(1).to({x:41.7,y:152.7},0).wait(1).to({x:42.7,y:150.5},0).wait(1).to({x:43.7,y:148.3},0).wait(1).to({x:44.6,y:146.2},0).wait(1).to({x:45.4,y:144},0).wait(1).to({x:46.2,y:141.8},0).wait(1).to({x:46.7,y:139.6},0).wait(1).to({x:47.1,y:137.4},0).wait(1).to({x:47.4,y:135.1},0).wait(1).to({x:47.5,y:132.9},0).wait(1).to({x:47.4,y:130.7},0).wait(1).to({x:47.2,y:128.5},0).wait(1).to({x:46.9,y:126.3},0).wait(1).to({x:46.4,y:124.2},0).wait(1).to({x:45.9,y:122.2},0).wait(1).to({x:45.2,y:120.2},0).wait(1).to({x:44.4,y:118.3},0).wait(1).to({x:43.6,y:116.4},0).wait(1).to({x:42.7,y:114.6},0).wait(1).to({x:41.7,y:112.8},0).wait(1).to({x:40.7,y:111.2},0).wait(1).to({x:39.6,y:109.5},0).wait(1).to({x:38.5,y:107.9},0).wait(1).to({x:37.3,y:106.3},0).wait(1).to({x:36.1,y:104.8},0).wait(1).to({x:34.9,y:103.4},0).wait(1).to({x:33.7,y:102},0).wait(1).to({x:32.4,y:100.6},0).wait(1).to({x:31.1,y:99.3},0).wait(1).to({x:29.8,y:98.1},0).wait(1).to({x:28.5,y:96.9},0).wait(1).to({x:27.2,y:95.8},0).wait(1).to({x:25.9,y:94.6},0).wait(1).to({x:24.6,y:93.6},0).wait(1).to({x:23.2,y:92.6},0).wait(1).to({x:21.9,y:91.6},0).wait(1).to({x:20.6,y:90.6},0).wait(1).to({x:19.3,y:89.7},0).wait(1).to({x:18,y:88.8},0).wait(1).to({x:16.7,y:88},0).wait(1).to({x:15.4,y:87.1},0).wait(1).to({x:14.1,y:86.4},0).wait(1).to({x:12.9,y:85.6},0).wait(1).to({x:11.6,y:84.9},0).wait(1).to({x:10.4,y:84.2},0).wait(1).to({x:9.1,y:83.5},0).wait(1).to({x:7.9,y:82.8},0).wait(1).to({x:6.7,y:82.2},0).wait(1).to({x:5.6,y:81.6},0).wait(1).to({x:4.4,y:81},0).wait(1).to({x:3.2,y:80.4},0).wait(1).to({x:2.1,y:79.9},0).wait(1).to({x:1,y:79.3},0).wait(1).to({x:-0.1,y:78.8},0).wait(1).to({x:-1.2,y:78.3},0).wait(1).to({x:-2.3,y:77.8},0).wait(1).to({x:-3.3,y:77.4},0).wait(1).to({x:-4.3,y:76.9},0).wait(1).to({x:-5.3,y:76.5},0).wait(1).to({x:-6.3,y:76.1},0).wait(1).to({x:-7.3,y:75.7},0).wait(1).to({x:-8.2,y:75.3},0).wait(1).to({x:-9.1,y:74.8},0).wait(1).to({x:-10,y:74.4},0).wait(1).to({x:-10.9,y:74},0).wait(1).to({x:-11.7,y:73.6},0).wait(1).to({x:-12.5,y:73.2},0).wait(1).to({x:-13.3,y:72.9},0).wait(1).to({x:-14.1,y:72.5},0).wait(1).to({x:-14.9,y:72.1},0).wait(1).to({x:-15.6,y:71.8},0).wait(1).to({x:-16.3,y:71.4},0).wait(1).to({x:-17,y:71},0).wait(1).to({x:-17.6,y:70.7},0).wait(1).to({x:-18.3,y:70.4},0).wait(1).to({x:-18.9,y:70},0).wait(1).to({x:-19.5,y:69.7},0).wait(1).to({x:-20.1,y:69.4},0).wait(1).to({x:-20.6,y:69.1},0).wait(1).to({x:-21.2,y:68.8},0).wait(1).to({x:-21.7,y:68.5},0).wait(1).to({x:-22.2,y:68.3},0).wait(1).to({x:-22.7,y:68},0).wait(1).to({x:-23.1,y:67.8},0).wait(1).to({x:-23.5,y:67.5},0).wait(1).to({x:-24,y:67.3},0).wait(1).to({x:-24.3,y:67.1},0).wait(1).to({x:-24.7,y:66.8},0).wait(1).to({x:-25.1,y:66.6},0).wait(1).to({x:-25.4,y:66.4},0).wait(1).to({x:-25.7,y:66.3},0).wait(1).to({x:-26,y:66.1},0).wait(1).to({x:-26.3,y:65.9},0).wait(1).to({x:-26.5,y:65.8},0).wait(1).to({x:-26.7,y:65.7},0).wait(1).to({x:-26.9,y:65.5},0).wait(1).to({x:-27.1,y:65.4},0).wait(1).to({x:-27.3,y:65.3},0).wait(1).to({x:-27.4,y:65.2},0).wait(1).to({x:-27.6,y:65.1},0).wait(1).to({x:-27.7},0).wait(1).to({x:-27.8,y:65},0).wait(2).to({x:-27.9},0).wait(1).to({y:64.9},0).wait(1).to({x:-27.7,y:64.5},0).wait(1));

	// Layer 2
	this.instance_5 = new lib.plate_t_059();
	this.instance_5.setTransform(23.3,183.1,1,1,0,0,180);
	this.instance_5.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_5.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1,scaleY:1,x:24.9,y:181.8},0).wait(1).to({scaleX:1,scaleY:1,x:26.3,y:180.4},0).wait(1).to({scaleX:1,scaleY:1,x:27.6,y:178.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:28.8,y:177.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:29.9,y:175.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:31,y:174.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:32,y:172.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:32.9,y:170.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:33.8,y:169.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:34.7,y:167.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:35.5,y:165.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:36.4,y:164.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:37.2,y:162.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:38,y:160.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:38.7,y:159.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:39.5,y:157.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:40.2,y:156.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:40.9,y:154.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:41.6,y:153},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:42.3,y:151.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:43,y:150},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:43.6,y:148.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:44.3,y:147},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:44.9,y:145.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:45.4,y:144},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:45.9,y:142.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:46.4,y:141.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:46.7,y:139.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:47,y:138.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:47.2,y:136.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:47.4,y:135.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:47.5,y:133.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:132.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:47.4,y:130.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:47.3,y:129.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:47.2,y:127.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:46.9,y:126.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:46.7,y:125.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:46.4,y:123.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:46,y:122.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:45.6,y:121.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:45.2,y:120.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:44.7,y:118.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:44.2,y:117.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:43.7,y:116.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:43.1,y:115.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:42.6,y:114.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:42,y:113.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:41.4,y:112.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:40.8,y:111.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:40.2,y:110.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:39.5,y:109.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:38.9,y:108.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:38.2,y:107.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:37.6,y:106.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:36.9,y:105.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:36.3,y:105},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:35.6,y:104.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:34.9,y:103.4},0).wait(1).to({x:34.3,y:102.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:33.6,y:101.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:32.9,y:101.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:32.3,y:100.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:31.6,y:99.8},0).wait(1).to({x:30.9,y:99.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:30.3,y:98.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:29.6,y:97.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:29,y:97.3},0).wait(1).to({x:28.4,y:96.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:27.7,y:96.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:27.1,y:95.7},0).wait(1).to({x:26.5,y:95.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:25.9,y:94.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:25.3,y:94.2},0).wait(1).to({x:24.7,y:93.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:24.1,y:93.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:23.6,y:92.8},0).wait(1).to({x:23,y:92.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:22.5,y:92},0).wait(1).to({x:21.9,y:91.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:21.4,y:91.2},0).wait(1).to({x:20.9,y:90.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:20.4,y:90.5},0).wait(1).to({x:19.9,y:90.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:19.4,y:89.8},0).wait(1).to({x:19,y:89.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:18.5,y:89.2},0).wait(1).to({x:18.1,y:88.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:17.6,y:88.6},0).wait(1).to({x:17.2,y:88.3},0).wait(1).to({x:16.8,y:88},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:16.4,y:87.8},0).wait(1).to({x:16.1,y:87.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:15.7,y:87.3},0).wait(1).to({x:15.4,y:87.1},0).wait(1).to({x:15,y:86.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:14.7,y:86.7},0).wait(1).to({x:14.4,y:86.5},0).wait(1).to({x:14.1,y:86.3},0).wait(1).to({x:13.8,y:86.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:13.5,y:86},0).wait(1).to({x:13.3,y:85.8},0).wait(1).to({x:13.1,y:85.7},0).wait(1).to({x:12.8,y:85.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:12.6,y:85.4},0).wait(1).to({x:12.4,y:85.3},0).wait(1).to({x:12.3,y:85.2},0).wait(1).to({x:12.1,y:85.1},0).wait(1).to({x:11.9,y:85},0).wait(1).to({x:11.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:11.7,y:84.9},0).wait(1).to({x:11.6,y:84.8},0).wait(1).to({x:11.5},0).wait(1).to({x:11.4,y:84.7},0).wait(1).to({x:11.3},0).wait(2).to({x:11.2,y:84.6},0).wait(2).to({x:11,y:85},0).wait(1));

	// Layer 2 copy
	this.instance_6 = new lib.plate_t_059();
	this.instance_6.setTransform(23.3,183.1,1,1,0,0,180);
	this.instance_6.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_6.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:1,scaleY:1,x:24.4,y:182.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:25.5,y:181.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:26.5,y:180.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:27.5,y:179.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:28.4,y:178},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:29.2,y:176.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:30,y:175.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:30.7,y:174.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:31.4,y:173.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:32.1,y:172.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:32.7,y:171.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:33.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:34,y:168.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:34.6,y:167.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:35.2,y:166.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:35.8,y:165.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:36.4,y:164.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:36.9,y:163},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:37.5,y:161.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:38,y:160.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:38.5,y:159.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:39,y:158.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:39.5,y:157.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:40,y:156.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:40.5,y:155.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:41,y:154.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:41.4,y:153.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:41.9,y:152.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:42.3,y:151.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:42.8,y:150.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:43.2,y:149.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:43.6,y:148.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:44,y:147.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:44.5,y:146.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:44.8,y:145.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:45.2,y:144.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:45.6,y:143.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:45.9,y:142.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:46.1,y:141.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:46.4,y:140.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:46.6,y:140},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:46.8,y:139.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:47,y:138.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:47.1,y:137.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:47.3,y:136.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:135.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:47.4,y:134.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:47.5,y:133.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:132.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:132},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:131.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:47.4,y:130.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:47.3,y:129.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:128.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:47.2,y:128},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:47.1,y:127.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:46.9,y:126.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:46.8,y:125.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:46.6,y:125},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:46.5,y:124.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:46.3,y:123.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:46.1,y:123},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:45.9,y:122.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:45.7,y:121.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:45.5,y:121},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:45.3,y:120.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:45.1,y:119.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:44.8,y:119.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:44.6,y:118.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:44.4,y:118.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:44.1,y:117.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:43.9,y:117},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:43.7,y:116.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:43.4,y:116},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:43.2,y:115.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:42.9,y:115.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:42.7,y:114.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:42.5,y:114.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:42.2,y:113.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:42,y:113.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:41.8,y:112.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:41.5,y:112.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:41.3,y:112.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:41.1,y:111.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:40.9,y:111.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:40.7,y:111.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:40.5,y:110.7},0).wait(1).to({x:40.2,y:110.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:40,y:110.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:39.8,y:109.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:39.7,y:109.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:39.5,y:109.3},0).wait(1).to({x:39.3,y:109},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:39.1,y:108.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:38.9,y:108.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:38.8,y:108.3},0).wait(1).to({x:38.6,y:108},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:38.5,y:107.8},0).wait(1).to({x:38.3,y:107.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:38.2,y:107.4},0).wait(1).to({x:38,y:107.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:37.9,y:107.1},0).wait(1).to({x:37.8,y:106.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:37.7,y:106.8},0).wait(1).to({x:37.6,y:106.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:37.5,y:106.5},0).wait(1).to({x:37.4,y:106.4},0).wait(1).to({x:37.3,y:106.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:37.2,y:106.2},0).wait(1).to({y:106.1},0).wait(1).to({x:37.1,y:106},0).wait(1).to({x:37,y:105.9},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({x:36.9,y:105.8},0).wait(2).to({y:105.7},0).wait(3).to({x:36.6,y:105.9},0).wait(1));

	// Layer 2 copy 2
	this.instance_7 = new lib.plate_t_059();
	this.instance_7.setTransform(23.3,183.1,1,1,0,0,180);
	this.instance_7.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_7.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1,scaleY:1,x:24,y:182.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:24.8,y:181.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:25.5,y:181.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:26.1,y:180.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:26.8,y:179.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:27.3,y:179.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:27.9,y:178.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:28.5,y:177.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:29,y:177.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:29.5,y:176.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:30,y:175.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:30.4,y:175},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:30.9,y:174.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:31.3,y:173.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:31.7,y:172.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:32.1,y:172.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:32.5,y:171.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:33,y:170.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:33.3,y:170},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:33.7,y:169.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:34.1,y:168.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:34.5,y:167.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:34.8,y:167.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:35.2,y:166.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:35.5,y:165.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:35.9,y:165.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:36.2,y:164.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:36.5,y:163.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:36.9,y:163.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:37.2,y:162.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:37.5,y:161.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:37.8,y:161.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:38.1,y:160.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:38.4,y:160},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:38.7,y:159.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:39,y:158.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:39.2,y:158.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:39.5,y:157.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:39.8,y:157.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:40,y:156.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:40.3,y:155.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:40.6,y:155.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:40.8,y:154.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:41,y:154.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:41.3,y:153.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:41.5,y:153.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:41.8,y:152.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:42,y:152.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:42.2,y:151.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:42.4,y:151.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:42.7,y:150.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:42.9,y:150.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:43.1,y:149.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:43.3,y:149.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:43.5,y:148.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:43.7,y:148.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:43.9,y:147.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:44.1,y:147.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:44.3,y:147},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:44.4,y:146.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:44.6,y:146.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:44.8,y:145.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:45,y:145.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:45.1,y:144.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:45.3,y:144.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:45.4,y:144.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:45.6,y:143.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:45.7,y:143.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:45.8,y:142.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:45.9,y:142.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:46,y:142.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:46.1,y:141.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:46.2,y:141.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:46.3,y:141.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:46.4,y:140.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:46.5,y:140.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:46.6,y:140.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:46.7,y:139.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:139.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:46.8,y:139.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:138.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:46.9,y:138.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:47,y:138.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:138.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:137.8},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:47.1,y:137.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:137.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:47.2,y:137.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:136.8},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:136.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:47.3,y:136.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:136.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:136},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:135.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:135.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:47.4,y:135.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:135.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:135.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:134.9},0).wait(1).to({y:134.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:134.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:134.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:134.3},0).wait(1).to({y:134.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:134.1},0).wait(1).to({y:134},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:47.5,y:133.9},0).wait(1).to({y:133.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:133.7},0).wait(1).to({y:133.6},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({y:133.5},0).wait(2).to({y:133.4},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(2).to({y:133.3},0).wait(2).to({x:44.8},0).wait(1));

	// Layer 2 copy 3
	this.instance_8 = new lib.plate_t_059();
	this.instance_8.setTransform(23.3,183.1,1,1,0,0,180);
	this.instance_8.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_8.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:0.99,scaleY:0.99,x:23.7,y:182.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:24,y:182.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:24.4,y:182.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:24.8,y:181.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:25.1,y:181.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:25.4,y:181.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:25.8,y:181},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:26.1,y:180.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:26.4,y:180.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:26.7,y:180},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:27,y:179.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:27.3,y:179.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:27.5,y:179},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:27.8,y:178.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:28,y:178.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:28.3,y:178},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:28.5,y:177.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:28.8,y:177.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:29,y:177.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:29.2,y:176.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:29.5,y:176.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:29.7,y:176.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:29.9,y:175.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:30.1,y:175.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:30.3,y:175.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:30.5,y:174.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:30.7,y:174.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:30.9,y:174.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:31.1,y:173.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:31.3,y:173.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:31.5,y:173.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:31.6,y:173},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:31.8,y:172.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:32,y:172.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:32.1,y:172.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:32.3,y:171.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:32.5,y:171.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:32.6,y:171.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:32.8,y:171},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:32.9,y:170.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:33.1,y:170.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:33.2,y:170.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:33.4,y:169.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:33.5,y:169.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:33.7,y:169.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:33.8,y:169.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:33.9,y:168.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:34.1,y:168.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:34.2,y:168.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:34.3,y:168.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:34.5,y:167.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:34.6,y:167.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:34.7,y:167.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:34.8,y:167.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:34.9,y:167},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:35.1,y:166.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:35.2,y:166.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:35.3,y:166.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:35.4,y:166.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:35.5,y:165.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:35.6,y:165.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:35.7,y:165.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:35.8,y:165.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:35.9,y:165.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:36,y:164.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:36.1,y:164.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:36.2,y:164.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:36.3,y:164.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:36.4,y:164.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:164},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:36.5,y:163.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:36.6,y:163.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:36.7,y:163.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:36.8,y:163.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:36.9,y:163.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:163},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:37,y:162.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:37.1,y:162.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:162.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:37.2,y:162.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:37.3,y:162.3},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:162.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:37.4,y:162.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:37.5,y:161.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:161.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:37.6,y:161.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:161.6},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:37.7,y:161.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:161.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:37.8,y:161.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:161.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:37.9,y:161.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:161},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:38,y:160.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:160.8},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:38.1,y:160.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:160.6},0).wait(1).to({scaleX:0.61,scaleY:0.61},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:38.2,y:160.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:160.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:160.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:38.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:160.2},0).wait(1).to({scaleX:0.61,scaleY:0.61},0).wait(1).to({y:160.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:38.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:160},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({y:159.9},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({x:38.5},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({y:159.8},0).wait(2).to({scaleX:0.6,scaleY:0.6},0).wait(4).to({x:38.7,y:159.9},0).wait(1));

	// Layer 2 copy 4
	this.instance_9 = new lib.plate_t_059();
	this.instance_9.setTransform(23.3,183.1,1,1,0,0,180);
	this.instance_9.filters = [new cjs.BlurFilter(30, 30, 1)];
	this.instance_9.cache(-34,-23,69,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({scaleX:0.99,scaleY:0.99,y:183},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:23.4},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:23.5,y:182.9},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:23.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:182.8},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:23.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:182.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:23.8},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:23.9,y:182.6},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:24},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:182.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:24.1},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:182.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:24.2},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:182.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:24.3},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:24.4,y:182.2},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:24.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:182.1},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:24.6},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:182},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:24.7},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:181.9},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:24.8},0).wait(1).to({scaleX:0.69,scaleY:0.69},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:181.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:24.9},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:181.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:25},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:25.1,y:181.6},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.62,scaleY:0.62},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:25.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:181.5},0).wait(1).to({scaleX:0.61,scaleY:0.61},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:25.3,y:181.4},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:25.4},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:181.3},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:25.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:181.2},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:25.6},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:181.1},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.51,scaleY:0.51},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:25.7},0).wait(1).to({scaleX:0.51,scaleY:0.51},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:181},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:25.8},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:180.9},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:25.9},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:180.8},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(2).to({scaleX:0.45,scaleY:0.45},0).wait(3).to({scaleX:0.45,scaleY:0.45},0).wait(3).to({x:25.4,y:180.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,128.4,156,115);
p.frameBounds = [rect, new cjs.Rectangle(-50.1,125,156,116), new cjs.Rectangle(-46.6,120.6,155,115), new cjs.Rectangle(-43.8,116,155,116), new cjs.Rectangle(-41.2,111.2,156,115), new cjs.Rectangle(-38.8,106.3,155,116.1), new cjs.Rectangle(-36.5,101.5,156,121), new cjs.Rectangle(-34.4,96.7,156,125), new cjs.Rectangle(-32.3,92,156,129.9), new cjs.Rectangle(-30.5,87.3,156,134.7), new cjs.Rectangle(-29.3,82.4,156,138.8), new cjs.Rectangle(-28.8,77.4,155,144), new cjs.Rectangle(-29.1,72.4,156,148), new cjs.Rectangle(-30.2,67.6,156,153), new cjs.Rectangle(-31.8,62.9,155,157.8), new cjs.Rectangle(-33.9,58.6,155,162.3), new cjs.Rectangle(-36.3,54.5,156,165.6), new cjs.Rectangle(-39.1,50.6,156,168.6), new cjs.Rectangle(-42.2,46.9,156,172.4), new cjs.Rectangle(-45.5,43.5,156,175.9), new cjs.Rectangle(-48.9,40.3,155,179.3), new cjs.Rectangle(-52.5,37.4,156,182.3), new cjs.Rectangle(-56.2,34.7,156,184.1), new cjs.Rectangle(-59.9,32.2,158.9,186.8), new cjs.Rectangle(-63.7,29.9,162.7,188.3), new cjs.Rectangle(-67.5,27.7,166.3,190.5), new cjs.Rectangle(-71.4,25.7,169.8,192.7), new cjs.Rectangle(-75.2,23.8,173.2,193.6), new cjs.Rectangle(-79.1,22.1,176.5,195.5), new cjs.Rectangle(-82.9,20.4,180.9,197.3), new cjs.Rectangle(-86.6,18.7,183.8,199.1), new cjs.Rectangle(-90.3,17,187.6,201), new cjs.Rectangle(-93.8,15.2,191.3,201.9), new cjs.Rectangle(-97.3,13.4,194.9,202.9), new cjs.Rectangle(-100.7,11.5,198.3,204.9), new cjs.Rectangle(-104,9.5,201.5,206.9), new cjs.Rectangle(-107.3,7.5,204.6,209.1), new cjs.Rectangle(-110.4,5.4,206.6,211.2), new cjs.Rectangle(-113.5,3.3,210.4,213.5), new cjs.Rectangle(-116.5,1.1,213.2,214.8), new cjs.Rectangle(-119.4,-1.1,214.7,217.1), new cjs.Rectangle(-122.2,-3.4,218.1,218.5), new cjs.Rectangle(-124.9,-5.7,219.5,220.9), new cjs.Rectangle(-127.5,-8,221.8,223.3), new cjs.Rectangle(-130,-10.4,224.6,225.9), new cjs.Rectangle(-132.5,-12.8,227.3,227.3), new cjs.Rectangle(-134.8,-15.3,229.7,229.9), new cjs.Rectangle(-137.1,-17.7,231.1,232.4), new cjs.Rectangle(-139.2,-20.2,233.4,235), new cjs.Rectangle(-141.3,-22.8,235.5,237.7), new cjs.Rectangle(-143.3,-25.3,237.6,240.3), new cjs.Rectangle(-145.1,-27.8,239.5,241.9), new cjs.Rectangle(-146.9,-30.4,241.3,243.6), new cjs.Rectangle(-148.7,-32.9,243,246.2), new cjs.Rectangle(-150.3,-35.5,244.6,248.8), new cjs.Rectangle(-151.8,-38,246.1,251.5), new cjs.Rectangle(-153.3,-40.6,246.6,254.1), new cjs.Rectangle(-154.7,-43.1,247.9,256.7), new cjs.Rectangle(-156,-45.6,249.1,259.3), new cjs.Rectangle(-157.3,-48.1,251.3,261.8), new cjs.Rectangle(-158.4,-50.6,252.3,264.4), new cjs.Rectangle(-159.5,-53.1,252.3,266), new cjs.Rectangle(-160.6,-55.5,253.2,268.5), new cjs.Rectangle(-161.5,-57.9,254,270), new cjs.Rectangle(-162.5,-60.3,254.8,272.5), new cjs.Rectangle(-163.3,-62.7,254.5,274.9), new cjs.Rectangle(-164.1,-65,256.1,277.3), new cjs.Rectangle(-164.9,-67.3,256.7,279.7), new cjs.Rectangle(-165.6,-69.6,257.2,282), new cjs.Rectangle(-166.2,-71.8,256.7,283.3), new cjs.Rectangle(-166.8,-74,257.1,285.6), new cjs.Rectangle(-167.4,-76.2,257.5,287.8), new cjs.Rectangle(-167.9,-78.3,257.8,290), new cjs.Rectangle(-168.4,-80.4,258.1,292.1), new cjs.Rectangle(-168.8,-82.4,258.3,294.3), new cjs.Rectangle(-169.2,-84.4,258.6,296.3), new cjs.Rectangle(-169.6,-86.4,259.1,298.4), new cjs.Rectangle(-169.9,-88.4,259.5,300.4), new cjs.Rectangle(-170.2,-90.2,260,301.3), new cjs.Rectangle(-170.4,-92.1,260.3,303.2), new cjs.Rectangle(-170.7,-93.9,260.7,305.1), new cjs.Rectangle(-170.8,-95.7,259.9,305.9), new cjs.Rectangle(-171,-97.4,260.3,307.6), new cjs.Rectangle(-171.2,-99.1,260.5,309.4), new cjs.Rectangle(-171.3,-100.7,260.7,311.1), new cjs.Rectangle(-171.4,-102.3,260.9,312.7), new cjs.Rectangle(-171.5,-103.8,261.1,314.2), new cjs.Rectangle(-171.5,-105.3,261.2,315.8), new cjs.Rectangle(-171.6,-106.8,261.4,317.3), new cjs.Rectangle(-171.6,-108.1,261.5,318.7), new cjs.Rectangle(-171.6,-109.5,261.5,320.1), new cjs.Rectangle(-171.6,-110.7,261.6,321.3), new cjs.Rectangle(-171.6,-112,260.7,322.6), new cjs.Rectangle(-171.6,-113.2,260.7,323.9), new cjs.Rectangle(-171.6,-114.3,260.7,325), new cjs.Rectangle(-171.6,-115.4,260.8,326.2), new cjs.Rectangle(-171.5,-116.5,260.8,327.3), new cjs.Rectangle(-171.5,-117.5,260.8,327.3), new cjs.Rectangle(-171.4,-118.5,260.7,328.3), new cjs.Rectangle(-171.3,-119.4,260.7,329.3), new cjs.Rectangle(-171.3,-120.3,260.7,330.2), new cjs.Rectangle(-171.2,-121.1,260.7,331.1), new cjs.Rectangle(-171.1,-121.9,260.6,331.9), new cjs.Rectangle(-171,-122.6,260.5,332.6), new cjs.Rectangle(-170.9,-123.3,260.4,333.3), new cjs.Rectangle(-170.8,-124,260.3,334), new cjs.Rectangle(-170.7,-124.6,260.3,333.7), new cjs.Rectangle(-170.6,-125.2,260.2,334.2), new cjs.Rectangle(-170.5,-125.7,260.1,334.7), new cjs.Rectangle(-170.4,-126.2,260.1,335.3), new cjs.Rectangle(-170.3,-126.6,260,335.7), new cjs.Rectangle(-170.2,-127,259.9,336.1), new cjs.Rectangle(-170.1,-127.3,259.8,336.5), new cjs.Rectangle(-170.1,-127.6,259.8,336.7), new cjs.Rectangle(-170,-127.8,259.8,337), new cjs.Rectangle(-170,-128,259.7,337.2), new cjs.Rectangle(-169.9,-128.2,259.7,337.3), new cjs.Rectangle(-169.9,-128.3,259.6,337.5), new cjs.Rectangle(-169.9,-128.4,259.6,337.5), new cjs.Rectangle(-171.2,-128.8,257.3,337.5)];


(lib.plate_t_057 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_056();
	this.instance.setTransform(10.5,23.2,1,1,0,31.2,-148.8);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-10,-8,21,16);

	this.instance_1 = new lib.plate_t_056();
	this.instance_1.setTransform(13.3,11.3,1,1,0,130.1,-49.9);
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-10,-8,21,16);

	this.instance_2 = new lib.plate_t_056();
	this.instance_2.setTransform(43.4,23.2,1,1,-31.2);
	this.instance_2.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_2.cache(-10,-8,21,16);

	this.instance_3 = new lib.plate_t_056();
	this.instance_3.setTransform(41.4,10,1,1,-107.7);
	this.instance_3.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_3.cache(-10,-8,21,16);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-3,-3,63.9,42.5);
p.frameBounds = [rect];


(lib.plate_t_037 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Crust (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg4bgJrIP3EEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhwZABtg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg4sgJrIQZEEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhw7ABtg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg49gJrIQ7EEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhxdABtg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg5OgJrIRdEEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhx/ABtg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg5ggJrISBEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhyjABtg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg5xgJrISjEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhzFABtg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg6CgJrITFEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhznABtg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg6TgJrITnEEIRXhFIIIAnIK7igIAKAzIAVgzICoAzIenBtIPeEYILaJrMh0KABtg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg6lgJrIULEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh0tABtg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg62gJrIUtEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh1PABtg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg7HgJrIVPEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh1xABtg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg7YgJrIVxEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh2TABtg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg7qgJrIWVEEIRVhFIIIAnIK9igIAJAzIAUgzICoAzIepBtIPeEYILZJrMh21ABtg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg77gJrIW3EEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh3ZABtg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg8MgJrIXZEEIRWhFIIIAnIK8igIAKAzIASgzICqAzIeoBtIPeEYILaJrMh37ABtg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg8egJrIX9EEIRVhFIIJAnIK8igIAIAzIAUgzICqAzIeoBtIPeEYILaJrMh4eABtg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8vgJrIYfEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh5BABtg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg9AgJrIZBEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh5jABtg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg9RgJrIZjEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh6FABtg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg9igJrIaFEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh6nABtg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg9zgJrIanEEIRXhFIIHAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh7KABtg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg+FgJrIbLEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh7tABtg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg+WgJrIbtEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh8PABtg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg+ngJrIcPEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh8xABtg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg+5gJrIczEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh9VABtg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg/KgJrIdVEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh93ABtg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg/bgJrId3EEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh+ZABtg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg/sgJrIeZEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh+7ABtg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg/+gJrIe8EEIRXhFIIIAnIK5igIAKAzIAVgKIAAgpICqAzIenBtIPeEYILaJrMh/dABtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_1,x:346.6,y:482.7}).wait(1).to({graphics:mask_graphics_2,x:348.7,y:482.7}).wait(1).to({graphics:mask_graphics_3,x:350.7,y:482.7}).wait(1).to({graphics:mask_graphics_4,x:352.8,y:482.7}).wait(1).to({graphics:mask_graphics_5,x:354.8,y:482.7}).wait(1).to({graphics:mask_graphics_6,x:356.9,y:482.7}).wait(1).to({graphics:mask_graphics_7,x:359,y:482.7}).wait(1).to({graphics:mask_graphics_8,x:361.1,y:482.7}).wait(1).to({graphics:mask_graphics_9,x:363.1,y:482.7}).wait(1).to({graphics:mask_graphics_10,x:365.2,y:482.7}).wait(1).to({graphics:mask_graphics_11,x:367.3,y:482.7}).wait(1).to({graphics:mask_graphics_12,x:369.3,y:482.7}).wait(1).to({graphics:mask_graphics_13,x:371.4,y:482.7}).wait(1).to({graphics:mask_graphics_14,x:373.5,y:482.7}).wait(1).to({graphics:mask_graphics_15,x:375.5,y:482.7}).wait(1).to({graphics:mask_graphics_16,x:377.6,y:482.7}).wait(1).to({graphics:mask_graphics_17,x:379.7,y:482.7}).wait(1).to({graphics:mask_graphics_18,x:381.8,y:482.7}).wait(1).to({graphics:mask_graphics_19,x:383.8,y:482.7}).wait(1).to({graphics:mask_graphics_20,x:385.9,y:482.7}).wait(1).to({graphics:mask_graphics_21,x:388,y:482.7}).wait(1).to({graphics:mask_graphics_22,x:390,y:482.7}).wait(1).to({graphics:mask_graphics_23,x:392.1,y:482.7}).wait(1).to({graphics:mask_graphics_24,x:394.2,y:482.7}).wait(1).to({graphics:mask_graphics_25,x:396.2,y:482.7}).wait(1).to({graphics:mask_graphics_26,x:398.3,y:482.7}).wait(1).to({graphics:mask_graphics_27,x:400.4,y:482.7}).wait(1).to({graphics:mask_graphics_28,x:402.4,y:482.7}).wait(1).to({graphics:mask_graphics_29,x:404.5,y:482.7}).wait(5).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 1
	this.instance = new lib.plate_t_021();
	this.instance.setTransform(65,406,1,1,0,0,0,640,130);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:176.3},29).to({_off:true},5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,420.7,719,115.3);
p.frameBounds = [rect, new cjs.Rectangle(-14.6,420.7,722.4,115.3), new cjs.Rectangle(-14.3,420.7,725.9,115.3), new cjs.Rectangle(-13.9,420.7,729.4,115.3), new cjs.Rectangle(-13.6,420.7,732.8,115.3), new cjs.Rectangle(-13.3,420.7,736.3,115.3), new cjs.Rectangle(-12.9,420.7,739.7,115.3), new cjs.Rectangle(-12.6,420.7,743.2,115.3), new cjs.Rectangle(-12.2,420.7,746.6,115.3), new cjs.Rectangle(-11.9,420.7,750.1,115.3), new cjs.Rectangle(-11.5,420.7,753.5,115.3), new cjs.Rectangle(-11.2,420.7,756.9,115.3), new cjs.Rectangle(-10.8,420.7,760.4,115.3), new cjs.Rectangle(-10.5,420.7,763.8,115.3), new cjs.Rectangle(-10.1,420.7,767.3,115.3), new cjs.Rectangle(-9.8,420.7,770.8,115.3), new cjs.Rectangle(-9.5,420.7,774.2,115.3), new cjs.Rectangle(-9.1,420.7,777.7,115.3), new cjs.Rectangle(-8.8,420.7,781.1,115.3), new cjs.Rectangle(-8.4,420.7,784.5,115.3), new cjs.Rectangle(-8.1,420.7,788,115.3), new cjs.Rectangle(-7.7,420.7,791.4,115.3), new cjs.Rectangle(-7.4,420.7,794.9,115.3), new cjs.Rectangle(-7,420.7,798.3,115.3), new cjs.Rectangle(-6.7,420.7,801.8,115.3), new cjs.Rectangle(-6.4,420.7,805.3,115.3), new cjs.Rectangle(-6,420.7,808.7,115.3), new cjs.Rectangle(-5.7,420.7,812.1,115.3), new cjs.Rectangle(-5.3,420.7,815.6,115.3), rect=new cjs.Rectangle(-5,420.7,819,115.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_032 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.plate_t_028("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,640,130);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-640,-130,1280,260);
p.frameBounds = [rect];


(lib.plate_t_027 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lithosphere (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	mask.setTransform(344.5,482.7);

	// Layer 2
	this.instance = new lib.plate_t_032();
	this.instance.setTransform(74.5,475.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,420.7,719,124);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_026 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lithosphere (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIFyiLIBvkZIA5gKIBQCgIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	var mask_graphics_3 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIFyiLIBvkZIA5gKIBQCgIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	var mask_graphics_4 = new cjs.Graphics().p("EgyTgEBIM+D6IdihkIFyiLIBvkeIA6gIIBPCjIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	var mask_graphics_5 = new cjs.Graphics().p("EgyTgD+IM+D6IdihkIFyiMIBwkjIA6gIIBOCpIEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_6 = new cjs.Graphics().p("EgyTgD8IM+D6IdihkIFyiMIBxkoIA6gHIBNCtIEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_7 = new cjs.Graphics().p("EgyTgD6IM+D6IdihkIFyiMIByktIA6gGIBMCxIEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_8 = new cjs.Graphics().p("EgyTgD4IM+D4IdihiIFyiMIBykzIA7gEIBLC1IEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_9 = new cjs.Graphics().p("EgyTgD2IM+D4IdihiIFyiMIBzk4IA6gDIBLC5IEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_10 = new cjs.Graphics().p("EgyTgD0IM+D4IdihiIFyiMIBzk9IA7gCIBKC9IEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_12 = new cjs.Graphics().p("EgyTgD0IM+D4IdihiIFyiMIBzk9IA7gCIBKC9IEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_13 = new cjs.Graphics().p("EgyRgDrIMrDrId3heIAWgHIDfhSQA/gZA+gZIAQgoIBhkVIA5gDIBJC9IAEADQA5AzA8AwQA7AxA+AwIAQALIScgoIPpD3IKfG3Mhk3AA+g");
	var mask_graphics_14 = new cjs.Graphics().p("EgyPgDrIMsDrId4heIAWgHQBxgmBugqQBBgYA8gaIAQgoIBekWIATgDIAmgBIAKASIA8CrIAEADQA3A0A7AxQA6AwBAAvIAQALISdgnIBmAVIOEDgIKfG2IhDAFMhjwAA7g");
	var mask_graphics_15 = new cjs.Graphics().p("EgyOgDrIMtDrId5heIAXgHQBygkBugqQBBgYA7gaIAQgpIBckWIASgEIAmgBIAKASIA6CrIADADQA1A2A5AxQA7AwBBAuIAQAKISegnIBlAVIOFDfIBOAuIJTGHIg9AHMhj0AA7g");
	var mask_graphics_16 = new cjs.Graphics().p("EgyMgDsIMtDsId7heIAWgGQB0gkBtgoQBCgZA6gaIAQgpIBZkXIARgFIAmgBIALAQIA3CsIADAEQAyA5A5AwQA6AxBDArIAQAKISegnIBmAUIOGDfIBOAtIJTGHIg2AJMhj3AA7g");
	var mask_graphics_17 = new cjs.Graphics().p("EgyLgDsIMvDsId7heIAXgGQB0ghBtgoQBDgZA4gcIARgnIBXkZIAQgGIAmgBIALAPIA0CtIADAEQAwA7A4AwQA5AxBFAqIAQAJISfgnIBmATIOGDfIBPAsIJUGHIgvALMhj8AA7g");
	var mask_graphics_18 = new cjs.Graphics().p("EgyJgDtIMvDtId9heIAXgGQB2gfBsgoQBDgZA3gcQAKgUAHgUIBUkZIAPgHIAngBIALAOIAyCtIADAEQAtA9A4AwQA3AxBHApIAQAIISggmIBnARIOGDgIBQAqIJTGHIgoANMhj/AA8g");
	var mask_graphics_19 = new cjs.Graphics().p("EgyIgDtIMxDtId+heIAXgGQB2gdBsgnQBEgZA2gdQAKgUAHgUIBRkaIAPgIIAmgBIAMANIAvCuIADAEQArA/A2AwQA3AxBJAoIAQAHIShgmIBnAQIOGDgIBQApIJUGHIggAPMhkDAA8g");
	var mask_graphics_20 = new cjs.Graphics().p("EgyGgDuIMxDuIeAheIAWgFQB4gcBrgnQBFgZA1geQAKgTAHgUIBPkbIANgJIAmgBIAOAMIAsCvIACAEQAoBBA2AwQA2AxBLAmIAQAHIShgmIBoAPIOGDgIBRAoIJVGHIgbARMhkGAA8g");
	var mask_graphics_21 = new cjs.Graphics().p("EgyFgDuIMzDuIeAheIAXgFQB4gaBrgmQBGgaA0geQAKgTAHgUIBMkcIANgKIAmgBIANAMIAqCvIACAEQAlBDA2AwQA2AxBMAlIAQAGISigmIBnAOIOIDgIBRAmIJWGIIgVATMhkJAA8g");
	var mask_graphics_22 = new cjs.Graphics().p("EgyDgDvIMzDvIeCheIAXgFQB6gXBqgnQBGgZAygfQALgTAHgVIBJkcIANgLIAmgBIAOALIAmCvIADAEQAjBGA0AwQA1AwBNAkIARAGISjgmIBnAMIOJDhIBSAlIJVGIIgNAVMhkOAA8g");
	var mask_graphics_23 = new cjs.Graphics().p("EgyBgDvIM0DwIeChfIAYgEQB6gWBqgmQBHgaAxggQALgSAHgVIBFkdIANgMIAmgBIAPAKIAkCwIACAEQAgBIA0AwQA0AwBPAjIARAFISkgmIBnALIOJDhIBTAkIJVGIIgGAXMhkRAA8g");
	var mask_graphics_24 = new cjs.Graphics().p("EgyAgDwIM1DxIeDhfIAYgEQB8gUBqgmQBHgZAwghQALgTAHgUIBCkeIAMgNIAmgBIAQAJIAhCxIACAEQAeBKAzAwQAyAwBSAhIARAFISkgmIBoAKIOJDhIBUAiIJVGJIABAZMhkVAA8g");
	var mask_graphics_25 = new cjs.Graphics().p("EgyCgDwIM2DxIeFhfIAXgEQB9gSBpglQBJgaAtghQANgTAGgUIBBkfIAKgOIAngBIAQAIIAeCyIABAEQAcBMAyAwQAyAwBTAgIASAEISlglIBnAIIOLDhIBTAhIJWGJIAIAbMhkZAA8g");
	var mask_graphics_26 = new cjs.Graphics().p("EgyEgDxIM3DzIeGhgIAYgDQB9gRBpglQBJgaAtgiQAMgSAHgUIA/kgIAIgPIAngBIARAHIAbCzIABAEQAZBOAyAwQAxAwBVAeIARAEISmglIBoAHIOLDhIBUAgIJWGJIAPAdMhkdAA8g");
	var mask_graphics_27 = new cjs.Graphics().p("EgyGgDxIM4DzIeHhgIAYgDQB/gPBogkQBKgaArgjQANgSAHgUIA9khIAHgQIAmgBIARAGIAZCzIABAFQAWBQAyAwQAwAwBXAdIARADISmglIBpAGIOLDhIBVAfIJWGJIAWAfMhkgAA8g");
	var mask_graphics_28 = new cjs.Graphics().p("EgyIgDyIM5D0IehhiQB/gNBoglQBKgaArgjQANgSAGgUIA7kiIAGgRIAmgBIASAFIAVC0IACAFQAUBSAvAwQAxAwBXAbIASADISoglIBoAFIOMDhIBVAdIJXGKIAcAhMhkjAA8g");
	var mask_graphics_29 = new cjs.Graphics().p("EgyJgDyIM5D0IeKhgIAYgCQCBgLBngkQBLgbApgkQAOgRAGgVIA3kiIAHgSIAlgBIATAEIATC1IABAEQARBVAvAwQAvAvBaAbIASABISogkIBpADIOMDiIBWAcIJXGKIAjAjMhknAA7g");
	var mask_graphics_30 = new cjs.Graphics().p("EgyLgDyIM6D0IejhiQCCgJBngjQBMgbAnglQAOgSAHgUIA0kjIAHgTIAkgBIAUADIAPC2IABAEQAPBXAvAvQAuAwBbAZIATABISogkIBpACIONDiIBXAbIJXGKIAqAlMhkrAA7g");
	var mask_graphics_31 = new cjs.Graphics().p("EgyNgDzIM7D1IelhhQCCgIBngjQBMgaAngnQAOgRAHgUIAxkjIAGgVIAkgBIAUACIAOC7QAMBZAuAvQAuAwBdAYIS7gkIBqABIONDiIBYAaIJYGJIAwAoMhkvAA7g");
	var mask_graphics_32 = new cjs.Graphics().p("EgyPgD0IM8D3IemhiQCEgHBmgiQBNgbAlgmQAPgSAGgTIA0k6IA5AAIALC8QAKBaAtAwQAtAwBfAWIS8gkIBpAAIPmD6IJZGKIA3ApMhkzAA8g");
	var mask_graphics_33 = new cjs.Graphics().p("EgyRgD0IM9D3IenhiQCFgEBlgiQBPgbAkgnQAOgRAHgVIAwk7IA6gBIAIC8QAHBeAsAwQAsAuBhAWIUngnIPnD6IKXG2Mhk3AA7g");
	var mask_graphics_34 = new cjs.Graphics().p("EgyTgD0IM+D4IeohiQCHgCBkgiQBygnAVhBIAtk9IA7gCIAEC9QAGBfArAwQArAvBiAUIUogoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_35 = new cjs.Graphics().p("EgyTgD0IM+D4IeahmQCJgCBogiQB3gnAXhDIAuk3IA7gCIAIC9QAHBfAwAuQAtAuBlATIUZgkIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_36 = new cjs.Graphics().p("EgyTgD0IM+D4IeNhqQCLgCBqgiQB+gnAYhDIAvkzIA7gCIALC9QAKBfA0AsQAuAtBoASIULggIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_37 = new cjs.Graphics().p("EgyTgD0IM+D4Id+hvQCPgCBtghQCCgnAbhFIAwktIA7gCIAOC9QAMBeA5AsQAwAqBqASIT9gcIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_38 = new cjs.Graphics().p("EgyTgD0IM+D4IdxhzQCRgCBvghQCJgoAchFIAxkoIA7gCIARC9QAOBdA+ArQAyAoBtARITugXIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_39 = new cjs.Graphics().p("EgyTgD0IM+D4Idih3QCUgCByghQCPgoAdhHIAzkiIA7gCIAUC9QARBdBCApQA0AoBvAPITggTIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_40 = new cjs.Graphics().p("EgyTgD0IM+D4IdVh7QCWgCB1ghQCVgoAehIIA0kdIA7gCIAXC9QAUBcBGAoQA2AmByAPITRgPIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_41 = new cjs.Graphics().p("EgyTgD0IM+D4IdGiAQCagBB3giQCagoAhhIIA1kYIA7gCIAbC9QAVBbBLAnQA3AlB1AOITDgLIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_42 = new cjs.Graphics().p("EgyTgD0IM+D4Ic5iDQCbgDB7ggQCggoAihLIA2kSIA7gCIAeC9QAYBbBPAmQA5AiB3ANIS1gGIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_43 = new cjs.Graphics().p("EgyTgD0IM+D4IcqiIQCfgCB+ggQClgpAkhLIA3kNIA7gCIAhC9QAbBaBTAlQA7AhB6AMISmgCIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_44 = new cjs.Graphics().p("EgyTgD0IM+D4IcciMQCigDCAggQCrgpAmhLIA4kIIA7gCIAkC9QAdBaBYAiQA9AhB8ALISYACIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_45 = new cjs.Graphics().p("EgyTgD0IM+D4IcPiQQCjgCCEggQCxgqAnhMIA5kDIA7gCIAnC9QAgBZBcAiQA/AfB+AKISKAGIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_46 = new cjs.Graphics().p("EgyTgD0IM+D4IcAiVQCngCCGggQC3gpAohOIA7j9IA7gCIArC9QAhBYBhAhQBAAdCCAJIR7ALIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_47 = new cjs.Graphics().p("EgyTgD0IM+D4IbziYQCpgDCIgfQC9gqAqhPIA8j4IA7gCIAuC9QAkBYBlAfQBCAcCEAJIRtAOIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_48 = new cjs.Graphics().p("EgyTgD0IM+D4IbkidQCsgDCMgfQDCgpArhQIA+jzIA7gCIAwC9QAnBXBqAeQBEAaCHAIIReATIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_49 = new cjs.Graphics().p("EgyTgD0IM+D4IbXihQCvgDCNgeQDJgqAshSIA/jtIA7gCIA0C9QApBWBuAdQBGAZCJAHIRQAXIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_50 = new cjs.Graphics().p("EgyTgD0IM+D4IbIilQCygDCRgfQDOgqAvhSIA/joIA7gCIA3C9QArBVBzAcQBHAYCMAGIRCAbIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_51 = new cjs.Graphics().p("EgyTgD0IM+D4Ia7ipQC0gDCTgfQDUgqAwhUIBBjiIA7gCIA6C9QAtBVB4AbQBJAWCPAEIQzAgIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_52 = new cjs.Graphics().p("EgyTgD0IM+D4IasiuQC4gCCWgeQDZgsAyhUIBCjdIA7gCIA+C9QAvBUB8AaQBLAUCRAFIQlAjIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_53 = new cjs.Graphics().p("EgyTgD0IM+D4IaeiyQC6gCCZgfQDfgrA0hVIBDjYIA7gCIBAC9QAzBTCAAZQBNATCUADIQWAoIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_54 = new cjs.Graphics().p("EgyTgD0IM+D4IaRi2QC8gDCbgeQDmgrA0hXIBFjSIA7gCIBDC9QA2BTCEAXQBOARCWADIQJAsIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_55 = new cjs.Graphics().p("EgyTgD0IM+D4IaCi6QC/gDCegeQDrgsA3hWIBGjOIA7gCIBHC9QA3BTCJAVQBQAQCZACIP6AwIPoD4IKfG4Mhk6AA8g");
	var mask_graphics_56 = new cjs.Graphics().p("EgyTgD0IM+D4IZ1i/QDBgDChgdQDxgsA4hYIBHjIIA7gCIBKC9QA5BSCOAUQBSAPCcABIPrA0IPoD4IKfG4Mhk6AA8g");
	var mask_graphics_57 = new cjs.Graphics().p("EgyTgD0IM+D4IZmjCQDFgDCjgeQD3gsA6haIBIjCIA7gCIBNC9QA8BRCSAUQBTANCfgBIPdA5IPoD4IKfG4Mhk6AA8g");
	var mask_graphics_58 = new cjs.Graphics().p("EgyTgD0IM+D4IZZjHQDHgDCmgdQD8gsA8haIBJi+IA7gCIBRC9QA9BRCXASQBVALChgBIPPA9IPoD4IKfG4Mhk6AA8g");
	var mask_graphics_59 = new cjs.Graphics().p("EgyTgD0IM+D4IZKjLQDLgDCogdQECgsA+hcIBKi4IA7gCIBTC9QBBBQCbARQBXAKCjgCIPBBBIPoD4IKfG4Mhk6AA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:316.2,y:482.7}).wait(3).to({graphics:mask_graphics_3,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_4,x:316.2,y:482.5}).wait(1).to({graphics:mask_graphics_5,x:316.2,y:482.3}).wait(1).to({graphics:mask_graphics_6,x:316.2,y:482.1}).wait(1).to({graphics:mask_graphics_7,x:316.2,y:481.9}).wait(1).to({graphics:mask_graphics_8,x:316.2,y:481.7}).wait(1).to({graphics:mask_graphics_9,x:316.2,y:481.5}).wait(1).to({graphics:mask_graphics_10,x:316.2,y:481.3}).wait(2).to({graphics:mask_graphics_12,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_13,x:316,y:481.3}).wait(1).to({graphics:mask_graphics_14,x:315.8,y:481.3}).wait(1).to({graphics:mask_graphics_15,x:315.7,y:481.3}).wait(1).to({graphics:mask_graphics_16,x:315.5,y:481.3}).wait(1).to({graphics:mask_graphics_17,x:315.4,y:481.3}).wait(1).to({graphics:mask_graphics_18,x:315.2,y:481.3}).wait(1).to({graphics:mask_graphics_19,x:315.1,y:481.3}).wait(1).to({graphics:mask_graphics_20,x:314.9,y:481.3}).wait(1).to({graphics:mask_graphics_21,x:314.8,y:481.3}).wait(1).to({graphics:mask_graphics_22,x:314.6,y:481.3}).wait(1).to({graphics:mask_graphics_23,x:314.4,y:481.3}).wait(1).to({graphics:mask_graphics_24,x:314.3,y:481.3}).wait(1).to({graphics:mask_graphics_25,x:314.5,y:481.3}).wait(1).to({graphics:mask_graphics_26,x:314.7,y:481.3}).wait(1).to({graphics:mask_graphics_27,x:314.9,y:481.3}).wait(1).to({graphics:mask_graphics_28,x:315.1,y:481.3}).wait(1).to({graphics:mask_graphics_29,x:315.2,y:481.3}).wait(1).to({graphics:mask_graphics_30,x:315.4,y:481.3}).wait(1).to({graphics:mask_graphics_31,x:315.6,y:481.3}).wait(1).to({graphics:mask_graphics_32,x:315.8,y:481.4}).wait(1).to({graphics:mask_graphics_33,x:316,y:481.3}).wait(1).to({graphics:mask_graphics_34,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_35,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_36,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_37,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_38,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_39,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_40,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_41,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_42,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_43,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_44,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_45,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_46,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_47,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_48,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_49,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_50,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_51,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_52,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_53,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_54,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_55,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_56,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_57,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_58,x:316.2,y:481.3}).wait(1).to({graphics:mask_graphics_59,x:316.2,y:481.3}).wait(1));

	// Layer 2
	this.instance = new lib.plate_t_029();
	this.instance.setTransform(280,461);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.8,428.7,646,108);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-6.8,428.3,646,108.4), new cjs.Rectangle(-6.8,427.9,646,108.9), new cjs.Rectangle(-6.8,427.5,646,109.3), new cjs.Rectangle(-6.8,427.1,646,109.7), new cjs.Rectangle(-6.8,426.7,646,110.1), new cjs.Rectangle(-6.8,426.2,646,110.5), rect=new cjs.Rectangle(-6.8,425.8,646,110.9), rect, rect, new cjs.Rectangle(-6.8,425.8,645.7,110.9), new cjs.Rectangle(-6.8,425.8,645.4,110.9), new cjs.Rectangle(-6.8,425.8,645.1,110.9), new cjs.Rectangle(-6.8,425.8,644.8,110.9), new cjs.Rectangle(-6.8,425.8,644.5,110.9), new cjs.Rectangle(-6.8,425.9,644.1,110.9), new cjs.Rectangle(-6.8,425.9,643.8,110.9), new cjs.Rectangle(-6.8,425.9,643.5,110.9), new cjs.Rectangle(-6.8,425.9,643.2,110.9), new cjs.Rectangle(-6.8,425.9,642.9,110.9), new cjs.Rectangle(-6.8,425.9,642.6,110.9), new cjs.Rectangle(-6.8,425.9,642.3,110.9), new cjs.Rectangle(-6.8,425.9,642.7,110.9), new cjs.Rectangle(-6.8,425.9,643.1,110.9), new cjs.Rectangle(-6.8,425.9,643.4,110.9), new cjs.Rectangle(-6.8,425.9,643.8,110.9), new cjs.Rectangle(-6.8,425.9,644.2,110.8), new cjs.Rectangle(-6.8,425.9,644.6,110.8), new cjs.Rectangle(-6.8,425.9,644.9,110.8), new cjs.Rectangle(-6.8,425.9,645.3,110.8), new cjs.Rectangle(-6.8,425.9,645.7,110.8), rect=new cjs.Rectangle(-6.8,425.8,646,110.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lithosphere (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg4bgJrIP3EEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhwZABtg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg4sgJrIQZEEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhw7ABtg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg49gJrIQ7EEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhxdABtg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg5OgJrIRdEEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhx/ABtg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg5ggJrISBEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhyjABtg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg5xgJrISjEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhzFABtg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg6CgJrITFEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhznABtg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg6TgJrITnEEIRXhFIIIAnIK7igIAKAzIAVgzICoAzIenBtIPeEYILaJrMh0KABtg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg6lgJrIULEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh0tABtg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg62gJrIUtEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh1PABtg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg7HgJrIVPEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh1xABtg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg7YgJrIVxEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh2TABtg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg7qgJrIWVEEIRVhFIIIAnIK9igIAJAzIAUgzICoAzIepBtIPeEYILZJrMh21ABtg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg77gJrIW3EEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh3ZABtg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg8MgJrIXZEEIRWhFIIIAnIK8igIAKAzIASgzICqAzIeoBtIPeEYILaJrMh37ABtg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg8egJrIX9EEIRVhFIIJAnIK8igIAIAzIAUgzICqAzIeoBtIPeEYILaJrMh4eABtg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8vgJrIYfEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh5BABtg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg9AgJrIZBEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh5jABtg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg9RgJrIZjEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh6FABtg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg9igJrIaFEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh6nABtg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg9zgJrIanEEIRXhFIIHAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh7KABtg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg+FgJrIbLEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh7tABtg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg+WgJrIbtEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh8PABtg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg+ngJrIcPEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh8xABtg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg+5gJrIczEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh9VABtg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg/KgJrIdVEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh93ABtg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg/bgJrId3EEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh+ZABtg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg/sgJrIeZEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh+7ABtg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg/+gJrIe8EEIRXhFIIIAnIK5igIAKAzIAVgKIAAgpICqAzIenBtIPeEYILaJrMh/dABtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_1,x:346.6,y:482.7}).wait(1).to({graphics:mask_graphics_2,x:348.7,y:482.7}).wait(1).to({graphics:mask_graphics_3,x:350.7,y:482.7}).wait(1).to({graphics:mask_graphics_4,x:352.8,y:482.7}).wait(1).to({graphics:mask_graphics_5,x:354.8,y:482.7}).wait(1).to({graphics:mask_graphics_6,x:356.9,y:482.7}).wait(1).to({graphics:mask_graphics_7,x:359,y:482.7}).wait(1).to({graphics:mask_graphics_8,x:361.1,y:482.7}).wait(1).to({graphics:mask_graphics_9,x:363.1,y:482.7}).wait(1).to({graphics:mask_graphics_10,x:365.2,y:482.7}).wait(1).to({graphics:mask_graphics_11,x:367.3,y:482.7}).wait(1).to({graphics:mask_graphics_12,x:369.3,y:482.7}).wait(1).to({graphics:mask_graphics_13,x:371.4,y:482.7}).wait(1).to({graphics:mask_graphics_14,x:373.5,y:482.7}).wait(1).to({graphics:mask_graphics_15,x:375.5,y:482.7}).wait(1).to({graphics:mask_graphics_16,x:377.6,y:482.7}).wait(1).to({graphics:mask_graphics_17,x:379.7,y:482.7}).wait(1).to({graphics:mask_graphics_18,x:381.8,y:482.7}).wait(1).to({graphics:mask_graphics_19,x:383.8,y:482.7}).wait(1).to({graphics:mask_graphics_20,x:385.9,y:482.7}).wait(1).to({graphics:mask_graphics_21,x:388,y:482.7}).wait(1).to({graphics:mask_graphics_22,x:390,y:482.7}).wait(1).to({graphics:mask_graphics_23,x:392.1,y:482.7}).wait(1).to({graphics:mask_graphics_24,x:394.2,y:482.7}).wait(1).to({graphics:mask_graphics_25,x:396.2,y:482.7}).wait(1).to({graphics:mask_graphics_26,x:398.3,y:482.7}).wait(1).to({graphics:mask_graphics_27,x:400.4,y:482.7}).wait(1).to({graphics:mask_graphics_28,x:402.4,y:482.7}).wait(1).to({graphics:mask_graphics_29,x:404.5,y:482.7}).wait(5).to({graphics:null,x:0,y:0}).wait(26));

	// Layer 2
	this.instance = new lib.plate_t_032();
	this.instance.setTransform(74.5,475.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:184.5},29).to({_off:true},5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,420.7,719,124);
p.frameBounds = [rect, new cjs.Rectangle(-14.6,420.7,722.4,124), new cjs.Rectangle(-14.3,420.7,725.9,124), new cjs.Rectangle(-13.9,420.7,729.4,124), new cjs.Rectangle(-13.6,420.7,732.8,124), new cjs.Rectangle(-13.3,420.7,736.3,124), new cjs.Rectangle(-12.9,420.7,739.7,124), new cjs.Rectangle(-12.6,420.7,743.2,124), new cjs.Rectangle(-12.2,420.7,746.6,124), new cjs.Rectangle(-11.9,420.7,750.1,124), new cjs.Rectangle(-11.5,420.7,753.5,124), new cjs.Rectangle(-11.2,420.7,756.9,124), new cjs.Rectangle(-10.8,420.7,760.4,124), new cjs.Rectangle(-10.5,420.7,763.8,124), new cjs.Rectangle(-10.1,420.7,767.3,124), new cjs.Rectangle(-9.8,420.7,770.8,124), new cjs.Rectangle(-9.5,420.7,774.2,124), new cjs.Rectangle(-9.1,420.7,777.7,124), new cjs.Rectangle(-8.8,420.7,781.1,124), new cjs.Rectangle(-8.4,420.7,784.5,124), new cjs.Rectangle(-8.1,420.7,788,124), new cjs.Rectangle(-7.7,420.7,791.4,124), new cjs.Rectangle(-7.4,420.7,794.9,124), new cjs.Rectangle(-7,420.7,798.3,124), new cjs.Rectangle(-6.7,420.7,801.8,124), new cjs.Rectangle(-6.4,420.7,805.3,124), new cjs.Rectangle(-6,420.7,808.7,124), new cjs.Rectangle(-5.7,420.7,812.1,124), new cjs.Rectangle(-5.3,420.7,815.6,124), rect=new cjs.Rectangle(-5,420.7,819,124), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_024 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lithosphere (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	mask.setTransform(344.5,482.7);

	// Layer 2
	this.instance = new lib.plate_t_032();
	this.instance.setTransform(74.5,475.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,420.7,719,124);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lithosphere (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIFyiLIBvkZIA5gKIBQCgIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	var mask_graphics_1 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIGJiLIBskZIA8gKIBQCgIEDDSISNgoIPhD5IKfG4Mhk6AA7g");
	var mask_graphics_2 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIGfiLIBskZIA8gKIBQCgIEEDSIR8goIPbD5IKfG4Mhk6AA7g");
	var mask_graphics_3 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIG1iLIBskZIA8gKIBQCgIEEDSIRsgoIPVD5IKfG4Mhk6AA7g");
	var mask_graphics_4 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIHLiLIBskZIA8gKIBQCgIEEDSIRdgoIPOD5IKfG4Mhk6AA7g");
	var mask_graphics_5 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIHiiLIBskZIA8gKIBPCgIEEDSIRNgoIPID5IKfG4Mhk6AA7g");
	var mask_graphics_6 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIH1iLIBukZIA8gKIBRCgIEEDSIQ8goIPCD5IKfG4Mhk6AA7g");
	var mask_graphics_7 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIIMiLIBukZIA8gKIBQCgIEEDSIQtgoIO7D5IKfG4Mhk6AA7g");
	var mask_graphics_8 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIIiiLIBukZIA8gKIBQCgIEEDSIQdgoIO1D5IKfG4Mhk6AA7g");
	var mask_graphics_9 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkII4iLIBukZIA8gKIBQCgIEEDSIQNgoIOvD5IKfG4Mhk6AA7g");
	var mask_graphics_10 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIJPiLIBtkZIA9gKIBQCgIEEDSIP9goIOoD5IKfG4Mhk6AA7g");
	var mask_graphics_11 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIJkiLIBvkZIA7gKIBQCgIEEDSIPugoIOiD5IKfG4Mhk6AA7g");
	var mask_graphics_12 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIJ7iLIBtkZIA9gKIBQCgIEEDSIPegoIObD5IKfG4Mhk6AA7g");
	var mask_graphics_13 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIKRiLIBukZIA8gKIBQCgIEEDSIPOgoIOVD5IKfG4Mhk6AA7g");
	var mask_graphics_14 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIKniLIBukZIA8gKIBQCgIEEDSIO+goIOPD5IKfG4Mhk6AA7g");
	var mask_graphics_15 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIK9iLIBvkZIA7gKIBQCgIEEDSIOvgoIOID5IKfG4Mhk6AA7g");
	var mask_graphics_16 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkILUiLIBtkZIA9gKIBQCgIEDDSIOfgoIOCD5IKfG4Mhk6AA7g");
	var mask_graphics_17 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkILpiLIBukZIA8gKIBRCgIEEDSIOOgoIN8D5IKfG4Mhk6AA7g");
	var mask_graphics_18 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIMAiLIBukZIA8gKIBQCgIEEDSIN/goIN1D5IKfG4Mhk6AA7g");
	var mask_graphics_19 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIMWiLIBukZIA8gKIBQCgIEEDSINvgoINvD5IKfG4Mhk6AA7g");
	var mask_graphics_20 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIMsiLIBukZIA8gKIBQCgIEEDSINfgoINpD5IKfG4Mhk6AA7g");
	var mask_graphics_21 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkINCiLIBukZIA9gKIBQCgIEEDSINPgoINiD5IKfG4Mhk6AA7g");
	var mask_graphics_22 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkINZiLIBukZIA7gKIBQCgIEEDSINAgoINcD5IKfG4Mhk6AA7g");
	var mask_graphics_23 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkINviLIBukZIA8gKIBQCgIEEDSIMvgoINWD5IKfG4Mhk6AA7g");
	var mask_graphics_24 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIOFiLIBukZIA8gKIBQCgIEEDSIMggoINPD5IKfG4Mhk6AA7g");
	var mask_graphics_25 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIObiLIBukZIA8gKIBQCgIEEDSIMQgoINJD5IKfG4Mhk6AA7g");
	var mask_graphics_26 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIOxiLIBvkZIA7gKIBQCgIEEDSIMAgoINDD5IKfG4Mhk6AA7g");
	var mask_graphics_27 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIPIiLIBtkZIA9gKIBQCgIEEDSILvgoIM9D5IKfG4Mhk6AA7g");
	var mask_graphics_28 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIPdiLIBvkZIA7gKIBQCgIEFDSILggoIM2D5IKfG4Mhk6AA7g");
	var mask_graphics_29 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIP0iLIBukZIA8gKIBQCgIEEDSILRgoIMvD5IKfG4Mhk6AA7g");
	var mask_graphics_30 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIQKiLIBukZIA8gKIBQCgIEEDSILAgoIMqD5IKfG4Mhk6AA7g");
	var mask_graphics_31 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIQhiLIBtkZIA9gKIBQCgIEDDSIKxgoIMjD5IKfG4Mhk6AA7g");
	var mask_graphics_32 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIQ2iLIBukZIA8gKIBQCgIEFDSIKhgoIMcD5IKfG4Mhk6AA7g");
	var mask_graphics_33 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIRNiLIBukZIA8gKIBPCgIEEDSIKRgoIMXD5IKfG4Mhk6AA7g");
	var mask_graphics_34 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIRjiLIBukZIA8gKIBQCgIEEDSIKBgoIMQD5IKfG4Mhk6AA7g");
	var mask_graphics_35 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIR5iLIBukZIA8gKIBQCgIEEDSIJygoIMJD5IKfG4Mhk6AA7g");
	var mask_graphics_36 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkISPiLIBukZIA8gKIBQCgIEEDSIJhgoIMED5IKfG4Mhk6AA7g");
	var mask_graphics_37 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkISmiLIBukZIA7gKIBQCgIEEDSIJSgoIL9D5IKfG4Mhk6AA7g");
	var mask_graphics_38 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIS7iLIBukZIA9gKIBQCgIEEDSIJCgoIL2D5IKfG4Mhk6AA7g");
	var mask_graphics_39 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkITSiLIBukZIA8gKIBQCgIEEDSIIygoILwD5IKfG4Mhk6AA7g");
	var mask_graphics_40 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIToiLIBukZIA8gKIBQCgIEEDSIIigoILqD5IKfG4Mhk6AA7g");
	var mask_graphics_41 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIT+iLIBukZIA8gKIBQCgIEEDSIISgoILkD5IKfG4Mhk6AA7g");
	var mask_graphics_42 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIUViLIBtkZIA9gKIBQCgIEEDSIICgoILdD5IKfG4Mhk6AA7g");
	var mask_graphics_43 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIUqiLIBvkZIA7gKIBQCgIEEDSIHzgoILXD5IKfG4Mhk6AA7g");
	var mask_graphics_44 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIVBiLIBukZIA8gKIBQCgIEDDSIHjgoILRD5IKfG4Mhk6AA7g");
	var mask_graphics_45 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIVXiLIBukZIA8gKIBQCgIEEDSIHTgoILKD5IKfG4Mhk6AA7g");
	var mask_graphics_46 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIVtiLIBukZIA8gKIBQCgIEEDSIHDgoILED5IKfG4Mhk6AA7g");
	var mask_graphics_47 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIWDiLIBukZIA8gKIBQCgIEFDSIGygoIK+D5IKfG4Mhk6AA7g");
	var mask_graphics_48 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIWaiLIBukZIA8gKIBPCgIEEDSIGkgoIK3D5IKfG4Mhk6AA7g");
	var mask_graphics_49 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIWviLIBukZIA9gKIBQCgIEEDSIGTgoIKxD5IKfG4Mhk6AA7g");
	var mask_graphics_50 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIXGiLIBukZIA8gKIBQCgIEEDSIGDgoIKrD5IKfG4Mhk6AA7g");
	var mask_graphics_51 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIXciLIBukZIA8gKIBQCgIEEDSIF0goIKkD5IKfG4Mhk6AA7g");
	var mask_graphics_52 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIXyiLIBukZIA8gKIBQCgIEEDSIFkgoIKeD5IKfG4Mhk6AA7g");
	var mask_graphics_53 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIYJiLIBtkZIA9gKIBQCgIEEDSIFTgoIKYD5IKfG4Mhk6AA7g");
	var mask_graphics_54 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIYeiLIBvkZIA7gKIBQCgIEEDSIFFgoIKRD5IKfG4Mhk6AA7g");
	var mask_graphics_55 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIY1iLIBukZIA8gKIBQCgIEEDSIE0goIKLD5IKfG4Mhk6AA7g");
	var mask_graphics_56 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIZLiLIBukZIA8gKIBQCgIEEDSIElgoIKED5IKfG4Mhk6AA7g");
	var mask_graphics_57 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIZhiLIBukZIA8gKIBQCgIEEDSIEVgoIJ+D5IKfG4Mhk6AA7g");
	var mask_graphics_58 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIZ3iLIBvkZIA7gKIBQCgIEFDSIEEgoIJ4D5IKfG4Mhk6AA7g");
	var mask_graphics_59 = new cjs.Graphics().p("EgyTgEDIM+D6IdihkIaOiLIBtkZIA9gKIBQCgIEDDSID2goIJxD5IKfG4Mhk6AA7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_1,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_2,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_3,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_4,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_5,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_6,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_7,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_8,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_9,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_10,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_11,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_12,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_13,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_14,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_15,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_16,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_17,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_18,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_19,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_20,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_21,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_22,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_23,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_24,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_25,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_26,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_27,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_28,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_29,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_30,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_31,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_32,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_33,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_34,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_35,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_36,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_37,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_38,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_39,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_40,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_41,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_42,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_43,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_44,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_45,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_46,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_47,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_48,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_49,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_50,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_51,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_52,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_53,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_54,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_55,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_56,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_57,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_58,x:316.2,y:482.7}).wait(1).to({graphics:mask_graphics_59,x:316.2,y:482.7}).wait(1));

	// Layer 2
	this.instance = new lib.plate_t_029();
	this.instance.setTransform(280,461);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:340},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.8,428.7,646,108);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_022 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lithosphere (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnILTigIAKAzIAUgzICqAzIePBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnILoigIAKAzIAUgzICqAzId6BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIL/igIAKAzIAUgzICqAzIdjBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIMVigIAKAzIAUgzICoAzIdPBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIMrigIAKAzIAUgzICoAzIc5BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnINBigIAKAzIAUgzICoAzIcjBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnINXigIAKAzIAUgzICoAzIcNBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnINtigIAKAzIAUgzICoAzIb3BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIODigIAKAzIAVgzICnAzIbhBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIOaigIAKAzIAUgzICoAzIbKBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIOvigIAKAzIAUgzICoAzIa1BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIPGigIAKAzIASgzICqAzIaeBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIPZigIAKAzIAUgzICqAzIaJBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIPwigIAKAzIAUgzICqAzIZyBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIQGigIAKAzIAUgzICqAzIZcBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIQcigIAKAzIAUgzICqAzIZGBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIQyigIAKAzIAUgzICqAzIYwBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIRIigIAKAzIAUgzICqAzIYaBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIRfigIAKAzIATgzICrAzIYDBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIR0igIAKAzIAVgzICpAzIXuBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnISLigIAKAzIATgzICrAzIXXBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnISgigIAKAzIAUgzICqAzIXCBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIS3igIAKAzIAUgzICqAzIWrBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnITNigIAJAzIAUgzICqAzIWWBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnITjigIAKAzIAUgzICqAzIV/BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIT5igIAKAzIAUgzICqAzIVpBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIUPigIAKAzIAUgzICqAzIVTBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIUligIAKAzIAUgzICqAzIU9BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIU7igIAKAzIAUgzICqAzIUnBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIVSigIAKAzIATgzICqAzIURBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIVnigIAKAzIAVgzICpAzIT7BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIV+igIAKAzIATgzICrAzITkBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIWTigIAKAzIAUgzICqAzITPBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIWqigIAKAzIAUgzICqAzIS4BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIXAigIAKAzIAUgzICqAzISiBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIXWigIAKAzIAUgzICqAzISMBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIXsigIAKAzIAUgzICqAzIR2BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIYCigIAKAzIAUgzICqAzIRgBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_39 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIYYigIAKAzIAUgzICqAzIRKBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_40 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIYuigIAKAzIAUgzICqAzIQ0BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_41 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIZFigIAKAzIATgzICrAzIQdBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_42 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIZaigIAKAzIAVgzICpAzIQIBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_43 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIZxigIAKAzIAUgzICqAzIPxBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_44 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIaGigIAKAzIAUgzICqAzIPcBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_45 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIadigIAKAzIAUgzICqAzIPFBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_46 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIazigIAKAzIAUgzICqAzIOvBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_47 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIbJigIAKAzIAUgzICqAzIOZBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_48 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIbfigIAKAzIAUgzICqAzIODBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIb1igIAKAzIAUgzICqAzINtBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIcLigIAKAzIAUgzICqAzINXBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_51 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIchigIAKAzIAVgzICqAzINABtIPeEYILaJrMhv1ABtg");
	var mask_graphics_52 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIc4igIAKAzIATgzICqAzIMrBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_53 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIdNigIAKAzIAVgzICpAzIMVBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIdkigIAKAzIATgzICrAzIL+BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_55 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnId5igIAKAzIAUgzICqAzILpBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_56 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIeQigIAKAzIAUgzICqAzILSBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_57 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIemigIAKAzIAUgzICqAzIK8BtIPeEYILaJrMhv1ABtg");
	var mask_graphics_58 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIe8igIAKAzIAUgzICqAzIKmBtIPeEYILaJrMhv1ABtg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg4KgJrIPUEEIRXhFIIHAnIfSigIAKAzIAUgKIAAgpICqAzIKQBtIPeEYILaJrMhv1ABtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_1,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_2,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_3,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_4,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_5,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_6,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_7,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_8,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_9,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_10,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_11,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_12,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_13,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_14,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_15,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_16,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_17,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_18,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_19,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_20,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_21,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_22,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_23,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_24,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_25,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_26,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_27,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_28,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_29,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_30,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_31,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_32,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_33,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_34,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_35,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_36,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_37,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_38,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_39,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_40,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_41,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_42,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_43,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_44,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_45,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_46,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_47,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_48,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_49,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_50,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_51,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_52,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_53,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_54,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_55,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_56,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_57,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_58,x:344.5,y:482.7}).wait(1).to({graphics:mask_graphics_59,x:344.5,y:482.7}).wait(1));

	// Layer 2
	this.instance = new lib.plate_t_028("synched",0);
	this.instance.setTransform(74.5,475.8,1,1,0,0,0,640,130);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:158.5},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,420.7,719,124);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol_31 copy 2
	this.instance = new lib.plate_t_058("synched",0);
	this.instance.setTransform(95,-235.3,1,1,0,22.4,-157.6);
	this.instance.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},90).wait(30));

	// Symbol_31 copy
	this.instance_1 = new lib.plate_t_058("synched",0);
	this.instance_1.setTransform(88.3,-238.5,1,1,0,22.4,-157.6);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},90).wait(30));

	// Symbol_31
	this.instance_2 = new lib.plate_t_058("synched",0);
	this.instance_2.setTransform(88.3,-206.8,1,1,0,22.4,-157.6);
	this.instance_2.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},90).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.8,-136.1,157.8,153.7);
p.frameBounds = [rect, new cjs.Rectangle(-78.6,-140.9,156.8,154.7), new cjs.Rectangle(-80.1,-146.2,157.8,154.7), new cjs.Rectangle(-80.9,-151.6,157.8,153.7), new cjs.Rectangle(-81.5,-157,157.8,154.7), new cjs.Rectangle(-81.9,-162.4,157.8,157.3), new cjs.Rectangle(-82.2,-167.8,157.8,162.8), new cjs.Rectangle(-82.3,-173,157.8,167.3), new cjs.Rectangle(-82.5,-178.2,157.8,171.6), new cjs.Rectangle(-82.4,-183.2,157.8,176.8), new cjs.Rectangle(-81.6,-188.2,156.8,181.9), new cjs.Rectangle(-80.1,-193,157.8,186.9), new cjs.Rectangle(-77.9,-197.5,157.8,190.5), new cjs.Rectangle(-75.1,-201.6,157.8,193.7), new cjs.Rectangle(-71.9,-205.2,157.8,197.6), new cjs.Rectangle(-68.3,-208.5,157.8,201), new cjs.Rectangle(-64.5,-211.3,157.8,204), new cjs.Rectangle(-60.4,-213.9,157.8,205.6), new cjs.Rectangle(-56.2,-216.1,157.8,208), new cjs.Rectangle(-54.6,-218,160.6,210), new cjs.Rectangle(-54.3,-219.6,164.7,210.7), new cjs.Rectangle(-53.8,-220.9,168.6,211.2), new cjs.Rectangle(-53.8,-222,172,212.5), new cjs.Rectangle(-53.7,-223,177.4,213.6), new cjs.Rectangle(-53.7,-223.7,181.7,214.4), new cjs.Rectangle(-53.6,-224.2,186,215), new cjs.Rectangle(-53.5,-224.6,190.2,214.5), new cjs.Rectangle(-53.3,-224.9,195.3,214), new cjs.Rectangle(-53,-225,198.2,214.3), new cjs.Rectangle(-52.6,-225,203,214.4), new cjs.Rectangle(-52.3,-225.2,206.7,214.7), new cjs.Rectangle(-51.9,-225.4,210.4,214), new cjs.Rectangle(-51.9,-225.7,214.3,214.5), new cjs.Rectangle(-51.8,-226.1,218.2,215), new cjs.Rectangle(-51.8,-226.6,222.1,215.6), new cjs.Rectangle(-51.7,-227.1,224.7,216.1), new cjs.Rectangle(-51.6,-227.8,229.4,215), new cjs.Rectangle(-51.5,-228.5,233,215.8), new cjs.Rectangle(-51.4,-229.3,235.5,216.8), new cjs.Rectangle(-51.2,-230.1,239.9,217.7), new cjs.Rectangle(-51,-231.1,243.3,218.8), new cjs.Rectangle(-50.8,-232.1,246.6,218.9), new cjs.Rectangle(-50.5,-233.2,248.6,220.1), new cjs.Rectangle(-50.3,-234.4,252.7,221.4), new cjs.Rectangle(-50,-235.7,255.7,222.7), new cjs.Rectangle(-49.7,-236.9,258.6,223.1), new cjs.Rectangle(-49.4,-238.3,261.4,224.6), new cjs.Rectangle(-49.1,-239.7,264.1,225.1), new cjs.Rectangle(-48.7,-241.2,266.6,226.7), new cjs.Rectangle(-48.6,-242.8,269.4,228.3), new cjs.Rectangle(-48.5,-244.4,272.1,230), new cjs.Rectangle(-48.5,-246,274.7,231.7), new cjs.Rectangle(-48.3,-247.7,277.2,233.5), new cjs.Rectangle(-48.3,-249.4,279.8,234.3), new cjs.Rectangle(-48.2,-251.1,282.1,236.1), new cjs.Rectangle(-48.2,-252.9,284.5,237), new cjs.Rectangle(-48,-254.7,286.7,238.9), new cjs.Rectangle(-48,-256.5,288.9,240.8), new cjs.Rectangle(-47.9,-258.3,290.1,242.7), new cjs.Rectangle(-47.8,-260.1,293.1,244.6), new cjs.Rectangle(-47.8,-261.9,294,245.5), new cjs.Rectangle(-47.7,-263.9,295.9,247.5), new cjs.Rectangle(-47.6,-265.7,297.7,249.4), new cjs.Rectangle(-47.5,-267.6,300.4,251.3), new cjs.Rectangle(-47.4,-269.5,302.1,253.3), new cjs.Rectangle(-47.4,-271.3,303.7,255.2), new cjs.Rectangle(-47.3,-273.2,305.3,257.2), new cjs.Rectangle(-47.2,-275,306.7,258.1), new cjs.Rectangle(-47.1,-276.8,307.1,259), new cjs.Rectangle(-47,-278.6,309.5,260.8), new cjs.Rectangle(-46.9,-280.4,310.8,262.7), new cjs.Rectangle(-46.8,-282.2,312.1,264.6), new cjs.Rectangle(-46.7,-284,313.3,266.4), new cjs.Rectangle(-46.6,-285.8,314.3,268.2), new cjs.Rectangle(-46.5,-287.4,315.5,270), new cjs.Rectangle(-46.4,-289.1,315.5,271.7), new cjs.Rectangle(-46.3,-290.8,316.5,273.5), new cjs.Rectangle(-46.2,-292.5,317.3,274.3), new cjs.Rectangle(-46.1,-294.2,318.3,276), new cjs.Rectangle(-46,-295.8,319.1,277.6), new cjs.Rectangle(-45.9,-297.4,319.9,279.2), new cjs.Rectangle(-45.7,-298.9,321.6,280.8), new cjs.Rectangle(-45.7,-300.4,322.3,282.3), new cjs.Rectangle(-45.6,-301.9,323.1,284), new cjs.Rectangle(-45.5,-303.5,322.7,285.5), new cjs.Rectangle(-45.3,-304.9,324.2,286), new cjs.Rectangle(-45.2,-306.2,324.8,287.3), new cjs.Rectangle(-45.1,-307.6,324.3,288.8), new cjs.Rectangle(-45,-308.9,325.8,290.2), new cjs.Rectangle(-44.9,-310.2,326.2,291.5), new cjs.Rectangle(-44.8,-311.4,326.6,291.8), new cjs.Rectangle(-44.7,-312.6,327,292.9), new cjs.Rectangle(-44.6,-313.7,327.4,294.1), new cjs.Rectangle(-44.5,-314.8,327.7,295.3), new cjs.Rectangle(-44.5,-315.9,328.1,296.3), new cjs.Rectangle(-44.3,-316.9,327.4,297.5), new cjs.Rectangle(-44.3,-317.9,328.7,298.5), new cjs.Rectangle(-44.2,-318.9,329,299.5), new cjs.Rectangle(-44.1,-319.8,328.1,300.5), new cjs.Rectangle(-44,-320.7,329.4,301.3), new cjs.Rectangle(-44,-321.5,329.6,302.2), new cjs.Rectangle(-43.9,-322.3,329.8,303), new cjs.Rectangle(-43.8,-323.1,328.9,303.8), new cjs.Rectangle(-43.8,-323.8,330,304.6), new cjs.Rectangle(-43.7,-324.5,330.1,305.3), new cjs.Rectangle(-43.6,-325.2,330.3,306), new cjs.Rectangle(-43.6,-325.8,330.3,306.6), new cjs.Rectangle(-43.5,-326.3,330.3,307.2), new cjs.Rectangle(-43.5,-326.8,330.4,307.7), new cjs.Rectangle(-43.4,-327.3,329.5,308.2), new cjs.Rectangle(-43.4,-327.7,329.5,308.6), new cjs.Rectangle(-43.3,-328.1,329.5,309), new cjs.Rectangle(-43.3,-328.5,330.6,309.4), new cjs.Rectangle(-43.3,-328.7,330.6,309.7), new cjs.Rectangle(-43.3,-329,330.7,309.9), new cjs.Rectangle(-43.3,-329.2,330.7,310.1), new cjs.Rectangle(-43.3,-329.4,330.7,310.3), new cjs.Rectangle(-43.2,-329.5,330.6,310.4), new cjs.Rectangle(-43.2,-329.5,330.7,310.5), new cjs.Rectangle(-42.1,-329.4,331,309.1)];


(lib._new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// asthenosphare (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFng6QC1gdCSgWINFhKIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_1 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFng7QC0gdCSgWINGhJIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_2 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFng7QCzgeCSgXINHhHIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_3 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFmg8IFFg1INIhGIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_4 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFmg9IFEg1INJhFIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_5 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFlg9IFFg2INJhEIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_6 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFlg+QCzgfCRgXINKhDIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_7 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFlg+QCyggCRgYINLhBIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_8 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFkg/QCzggCRgYINLhAIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_9 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFkhAIFDg4INMg/IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_10 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFkhAIFDg5INMg+IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_11 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFkhBIFCg5INNg9IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_12 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFjhBIFCg7INOg7IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_13 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFjhCIFBg7INPg6IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_14 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFkhDIFAg7INQg5IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_15 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFihDIFAg8INRg4IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_16 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFihEIFAg9INRg2IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_17 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFjhEIE/g+INSg1IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_18 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFhhFIE/g+INTg0IEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_19 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFihGIE/g+INTgzIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_20 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFihGIE+g/INUgyIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_21 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFghHIE/hAINUgwIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_22 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFfhHIE/hBINVgvIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_23 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFfhIIE+hBINWguIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_24 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFfhJIE9hBINXgtIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_25 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFehJIE+hCINXgsIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_26 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFehKIE9hDINYgqIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_27 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFehKIE8hEINZgpIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_28 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFdhLIE8hEINagoIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_29 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFdhMIE7hEINbgnIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_30 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbIIHhyIE7hFINbgmIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_31 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbIIGhzIE7hGINcgkIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_32 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbIIGh0IE6hGINdgjIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_33 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbIIGh0IE6hHINdgiIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_34 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbIIFh1IE6hHINeghIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_35 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbIIFh1IE6hIINeggIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_36 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbIIFh2IE5hJINfgeIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_37 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFbhRIE4hJINggdIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_38 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFahRIE4hKIRhgiQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_39 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFahSIE3hKIRighQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_40 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFahSIE2hLIRjggQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_41 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFZhTIE3hMIRjgeQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_42 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFZhUIE2hMIRkgdQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_43 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFYhUIE2hNIRlgcQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_44 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFYhVIE2hNIRlgbQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_45 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFYhVIE1hOIRmgaQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_46 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFXhWQCsgrCKgkIRmgYQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_47 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFXhXQCrgrCKgkIRngXQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_48 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFWhXQCsgsCJgkIRogWQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_49 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFWhYIE0hQIRpgVQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_50 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFVhYIE1hRIRpgUQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_51 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFVhZQCrgsCJgmIRqgSQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_52 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFWhaQCqgsCJgmIRrgRQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_53 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFUhaQCrgtCIgmIRsgQQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_54 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFUhbIEyhTIRtgPQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_55 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFVhbIEyhUIRtgOQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_56 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFThcIEyhVINugGIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_57 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFUhdQCpguCIgnINvgFIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_58 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCpgmFUhdQCpgvCIgnINvgEIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");
	var mask_graphics_59 = new cjs.Graphics().p("EgpiAGnIn1nUIFfhaIC9DaIGlgyQAIgEEDhFQEDhHGYhbQCqgmFTheQCpgvCHgnINwgDIEAgGQEWgFBnACQD1AFAJACIclAAIAKNag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_1,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_2,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_3,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_4,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_5,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_6,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_7,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_8,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_9,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_10,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_11,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_12,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_13,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_14,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_15,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_16,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_17,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_18,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_19,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_20,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_21,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_22,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_23,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_24,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_25,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_26,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_27,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_28,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_29,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_30,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_31,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_32,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_33,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_34,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_35,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_36,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_37,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_38,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_39,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_40,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_41,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_42,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_43,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_44,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_45,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_46,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_47,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_48,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_49,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_50,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_51,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_52,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_53,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_54,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_55,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_56,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_57,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_58,x:316,y:43.4}).wait(1).to({graphics:mask_graphics_59,x:316,y:43.4}).wait(1));

	// Layer 1
	this.instance = new lib.new2("synched",0);
	this.instance.setTransform(315,43.5,1,1,0,0,0,315,43.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.12,y:38.3},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,630,86.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.main_anim_plate_tectonics_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Crust (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAjaAB6IvnjzIyqAjIjujAIhcisIg4AFIhyETIl6CTI9UBjIt6kJIgel8IPUEEIRWhGIIIAoIKoiMIBkAAIB4AeIemBuIPeEYILpJ0IqUABg");
	mask.setTransform(346,474);

	// Layer_17
	this.instance = new lib.plate_t_05();
	this.instance.setTransform(12,274);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Crust copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_3 = new cjs.Graphics().p("AqcAtIJsh7IAJAAIAAAbIp1CCgAgZgzIAAgbIA+AAIB4AeIIBAdIAAAhIgdAAQmdAAj9hBg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AqcAuIBBgNIA2gMIAugJIA+gMIAKgBIA8gMIAagFIALgCIArgJIA9gNIArgKIAkgHIAjgGIBCgOIAIAAIABAcIgqAJIpJB6gAgDgtIgWgFIAAgcIA+AAIAgAHIBYAWIA+ADIAkACIAlACIBFAEIAnACIAQABIA5AEIAhACIAsADIAsADIAdACQAXABAWACIACAgIgUAAIg2ABQlsgEjrg4g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AqcAuIBCgNQAagHAbgFIAugJIA+gMIAKgBIA7gNIAagFIALgBIArgKQAegIAfgFIArgKIAkgHIAjgGQAggHAhgGIAJAAIABAbIgqAKIpIB6gAgDgsIgVgGIAAgbQAeABAggCIAfAHQAsAJAsAMIA+ADIAkACIAlADQAiABAjADIAnACIAQABIA5ADIAhADQAVABAXACIAsAEIAcABIAuADIABAgIgSAAIg1ACQlrgFjug3g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AqcBLIAAgcIBCgMQAagJAbgFQAXgFAXgEQArgKASgCIAKgBIA8gNIAZgEIALgCQAWgFAUgGQAegIAggEQAVgGAWgEIAkgIIAigEQAhgJAggGIAJAAIABAcIgoAKIpIB7gAgCgrIgVgGIgBgcQAeACAggCIAfAGQArAHAtAMIA+AEIAkACIAkADQAjABAiAEIAnACIARABQAbAAAeADIAgAEQAWAAAWADQAWAAAWADIAdACQAXABAWADIACAfIgSAAIgzADQlrgGjvg3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AqcBMIAAgcIBDgNQAZgJAagEQAYgHAWgCQAsgLASgCIAKgCIA8gMIAZgFIALgCQAWgFAUgFQAcgIAigFIApgLIAkgHIAjgEQAggJAhgGIAJABIABAbIgnAMIgjAKIolBxgAgCgqIgUgGIgBgcQAdACAggCIAfAEQArAIAtALIA+AEIAkACIAlAEQAiAAAiAEIAnACIARABQAbABAdAEIAhACQAVABAXACQAWACAVADQAPgBAPACQAWABAXADIACAfIgRAAIgzAEQlqgGjxg3g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AqcBMIAAgcIBDgMQAYgJAbgGQAXgFAXgDIA9gNIAKgBIA8gOIAZgEIALgDQAWgEAUgGQAcgIAhgEIAqgLIAkgHQASgEAQgBQAhgJAggFIAJABIACAbIgmALIgjALIolBxgAgBgqIgUgGIgCgcQAdAEAggEIAfAFQArAFAtANIA+ACIAkADIAkAFQAigBAjAFIAnADIAQAAQAbAAAeAEIAhAEQAUgBAXAEQAXABAVADQANgBAQADQAWAAAXAEIADAeIgRAAIgxAFQlqgGjyg4g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AqcBNIAAgcIBDgNQAYgKAbgEQAXgHAXgCQArgMASgBIAKgBIA7gPIAZgEIALgBQAWgFAUgHQAcgJAhgDQAVgGAVgFIAkgHQASgDAQgBQAggKAhgFIAJABIACAbIglANIghALIomBxgAAAgoIgVgHIgBgbQAdADAggFIAeAEQArAEAtANQArADATAAIAkADIAkAFQAigBAiAGIAoACIAQAAQAbABAeAEQARABAPADQAVgBAXAEQAWABAWAEQANgCAPADQAXAAAWAFIAEAdIgQAAIgwAHQlpgIj0g2g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AqcBOIAAgdIBDgMQAYgLAbgEQAXgHAXgCQArgMARgBIALgCIA7gOIAYgEIALgCQAWgFATgGQAcgKAigCQAUgHAVgFIAlgHQARgDAQAAQAhgLAggEIAJABIACAbIgjAMIghAMIomBxgAAAgoIgUgHIgCgbQAdAEAggGIAeAEQAqADAtANQAsAEATAAQARgBATADIAjAGQAigCAjAGIAnACIARABQAbAAAeAFQARABAPADQAVAAAWADQAXABAVAEQANgBAPACQAYABAVAEIAFAeIgPAAIgwAHQlogJj2g2g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AqcBPIAAgdIBDgNQAYgLAagEQAXgHAXgCQArgMASgBIAKgCIA7gPIAYgDIALgCQAWgEATgIQAbgKAjgBQAUgIAVgFIAkgHQASgDAQABQAggMAggEIAJABIADAbIgjAOIgfANIonBwgAAAgnIgTgHIgDgbQAdAEAggGIAeADQAqACAtAOQAsADASAAQASAAATACQATADAQADQAhgCAjAIIAoACIAQAAQAbAAAeAFQARABAPAEQAVgBAXADQAWABAWAFQAMgCAQADQAXAAAVAFIAGAdIgOAAIgvAJQlogKj4g2g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AqbBPIAAgcIBCgNQAYgMAagEQAXgIAXgBQAqgMASgBIALgCIA7gPIAYgEIAKgBQAXgFATgIQAagKAjgBQAUgIAVgFIAkgHQARgDARABQAfgMAhgDIAJABIACAbIghAOIgeANIonBwgAAAgmIgSgIIgDgbQAdAGAfgHIAeABQAqABAtAOQAsAEASAAQASgBATADQATADAPAEQAigDAjAIIAnACIARABQAagBAfAGQASABAOAEQAVgCAXAFQAWAAAWAGQAMgDAQADQAWAAAWAGIAFAcIgMAAIguAKQlngKj7g2g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AqbBQIAAgdIBCgMQAXgNAbgEQAXgIAXgBQAqgMASgBIALgCQAegJAcgHIAYgDIALgCQAWgEASgJQAagKAkgBQATgIAWgFQARgEATgDQARgCAQABQAggNAggDIAJABIADAbIggAPIgeAOIonBwgAAAglIgSgIIgDgbQAcAGAggIQAPABAPAAQAqAAAtAOQAsAEASgBQASAAASADQAVADAOAEQAhgCAkAIIAnACIAQAAQAbgBAfAGQARACAPAEQAUgCAXAFQAXAAAVAGQAMgDAQADQAXAAAVAHIAGAbIgMABIgtAKQlmgLj9g1g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AqbBQIAAgcIBDgNQAXgNAagEQAXgIAXgBQAqgMASgBIAKgCQAfgKAcgGIAXgDIALgCQAWgEASgJQAagLAkAAQAUgJAUgFQASgEASgDQASgCAQABQAfgNAhgCIAIABIAEAaQgPAHgQAJIgcAOIopBwgAAAgkIgRgJIgDgbQAcAHAggJQAOABAPAAQApgCAuAPQAsAEASgBQASAAATADQATADAPAFQAhgDAjAJIAoACIARAAQAagBAfAGQARACAOAEQAUgCAYAFQAWAAAVAHQAMgDAQADQAXAAAVAHIAHAbIgLAAIgsALQlmgLj/g1g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AqbBSIAAgeIBDgMQAWgOAagDQAXgKAXAAQAqgNASAAIALgDQAegJAcgHQAHAAAQgCIALgCQAXgFARgJQAZgLAlAAQATgJAVgFQASgEASgCQASgDAPADQAggPAggCIAJABIAEAbQgPAHgPAKIgcAOIopBwgAABgkIgSgIIgDgbQAcAHAggJIAdgBQApgCAuAQQAsADASAAQASgBATADQATAEAPAEQAhgDAjAKIAoABIAQAAQAagBAfAIQASABAOAEQAUgCAXAGQAXAAAVAGQAMgDAQADQAXAAAUAIIAIAaIgLAAIgrANQllgNkAg1g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AqbBSIAAgdIBDgNQAWgOAagEQAXgIAXgBQAqgNASAAIALgDQAegJAcgHQAGAAARgDIAKgCQAXgEASgKQAYgLAlABQATgKAVgEQARgFATgDQASgCAOADQAhgPAfgCIAJACIAFAaIgdARIgaAQIorBwgAACgiIgRgJIgFgbIAAAAQAdAHAfgJIAdgBQApgEAuAQQAsADASgBQASAAATAEQAUADAOAFQAggEAjAKIApACIAQAAQAagCAgAIQARACANAFQAVgDAXAFQAWABAWAHQALgEAQAEQAXgBAVAJIAIAaIgKAAIgqANQlkgNkCg0g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AqbBTIAAgdIBDgNQAWgPAagDQAXgKAXABQApgOATgBIAKgBQAfgLAbgGIAXgDIALgCQAWgEARgKQAYgMAlACQAUgLAVgFQARgEATgCQASgCAOACQAfgPAggBIAJACIAFAaQgOAIgNAKIgaAPIorBwgAACgiIgRgJIgEgbIgBAAQAdAIAfgKIAdgCQApgEAuAPQAsAEASAAQASgCATAFQAUADANAGQAhgFAjALIAoACIAQAAQAbgCAfAIQASABANAGQAUgDAXAGQAXAAAVAHQAMgDAQADQAXAAAUAIIAJAZIgJABIgqAPQlkgOkDg1g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AqbBTIAAgcIBDgNQAWgQAagDQAWgKAYABQApgOASgBIALgCQAegKAbgHQAGABARgDIALgCQAXgEAQgLQAYgMAlACQAUgKAUgFQASgFASgCQASgCAOADQAggQAgAAIAIABIAGAbQgNAHgNALIgZAQIosBvgAADghIgRgJIgFgbIAAAAQAcAJAfgMQAPAAAOgCQAogGAvAQQAsAEASAAQARgBAUAEQATAEANAFQAigFAjAMIAnACIARAAQAZgCAhAIQARACANAFQAUgDAYAGQAXAAAVAIQALgEAQADQAXAAAUAJIAKAZIgJAAIgoAQQlkgOkEg1g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AqbBUIAAgdIBDgMQAWgRAZgDQAXgKAXABQApgOATgBIAKgCQAfgLAbgGQAFAAASgDIAKgBQAXgFAQgLQAYgMAmADQASgLAVgFQASgFASgCQASgCAOAEQAggRAfAAIAJACIAGAaQgNAIgMALIgYARIosBvgAADggIgRgJIgEgbIgBgBQAcAKAggMQAOgBAOgCQAogHAvAQQAsAEASgBQASgBATAFQAUAEAMAGQAhgGAkAMIAoACIAQAAQAZgCAhAJQARACANAFQAUgDAXAGQAXAAAVAJQALgFAQAEQAYgBATAKIALAYIgIAAIgnARQljgPkHg0g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AqbBVIAAgdIBDgNQAVgSAagCQAXgLAXADQApgPASAAIALgDQAfgLAagHQAFABASgDIAKgCQAXgEAQgMQAXgMAmADQATgKAUgGQASgEATgCQASgDAOAFQAfgSAfAAIAJACIAGAaQgMAJgMALIgWARIotBvgAAEgfIgRgKIgFgaQAcAJAfgNQAOAAAOgDQAogJAvASQAsAEASgBQARgBAUAEQAUAEAMAHQAhgHAjANIAoADIARgBQAZgCAgAJQASACAMAFQAUgDAYAGQAXABAVAIQAKgFARAEQAXAAAUAKIALAXIgIABIgmASQligQkIg0gAgShDIAAgBIAAAAIAAABg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AqaBWIAAgdIBDgNQAUgSAagDQAWgLAYADQAogPATgBIAKgCQAfgLAbgHQADABATgDIALgCQAWgEAQgMQAWgNAnAEQATgLAUgGQASgEATgCQARgCAOAFQAfgSAgAAIAIACIAHAaQgMAJgLALIgVATIotBugAAEgeIgQgKIgFgbQAaALAhgOQAOgBAOgEQAngJAuASQAsAEATgBQARgBAUAEQATAFANAGQAhgGAjANIAoACIARAAQAZgDAgAKQASACAMAGQATgEAYAHQAXAAAVAJQAKgFARAEQAXgBAUALIALAXIgGAAIglAUQlhgRkLg0g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AqaBWIAAgdIBDgMQAUgTAZgDQAXgLAXADQAogPATgBIALgCQAfgMAagHQAEACASgDIALgCQAWgEAQgMQAWgOAnAFQASgMAUgGQATgEASgCQASgCAOAFQAfgSAgABIAIACIAHAaQgLAIgLAMIgVATIotBvgAAFgdIgRgKIgFgbQAbAKAggOQAOgBAOgEQAngKAuASQAsAEASgBQASgCATAFQAVAFAMAHQAggHAjAOIApACIAQAAQAZgDAgAKQASACAMAGQAUgEAYAHQAXAAAVAKQAKgGAQAEQAYgBATAMIAMAWIgGABIgkAUQlggSkMgzgAgRhCIAAAAIAAAAIAAAAg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AqaBXIAAgdIBDgMQAUgUAZgDQAXgLAXADQAogPATgBIALgCQAfgMAagHQADABATgDIAKgBQAXgFAPgMQAWgOAnAFQASgMAVgGQARgEATgCQASgCANAGQAfgTAgABIAIACIAHAaQgKAJgKAMIgUAUIouBugAAGgcIgRgLIgFgaIgBgBQAbAMAggPQAOgCANgEQAngMAvASQAtAFASgBQARgCAUAFQAUAFALAHQAhgHAjAOIAoADIARgBQAYgDAiALQASACALAGQAUgEAYAHQAXAAAUAKQAKgGARAEQAXAAATAMIANAWIgFAAIgjAVQlggSkNgzg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AqaBYIAAgeIBDgMQAUgVAZgBQAXgMAXADQAogPASgBIALgCQAfgNAagHQACACAUgDIAKgCQAXgEAPgNQAVgOAoAGQASgNAUgFQASgFATgCQASgCANAHQAfgUAfACIAJACIAHAaQgJAJgKAMIgTAUIovBvgAAGgbIgQgLIgGgbIgBAAQAbAMAggQIAbgGQAngNAvASQAsAFATgBQARgCAUAFQAUAFALAIQAggIAkAPIAoACIARAAQAYgEAhAMQASABAMAIQATgFAYAHQAXAAAVALQAJgHARAFQAYgBATANIANAVIgEAAIgiAWQlggSkPgzg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AqaBYIAAgdIBDgMQATgWAagBQAWgNAYAEQAngPATgBIALgDQAfgMAagHQABACAUgDIALgCQAXgEAOgOQAUgOApAGQASgNAUgFQASgFASgCQASgCANAHQAfgUAfACIAJACIAIAaQgJAJgJANIgSAVIowBugAAHgbIgRgLIgGgaIAAgBQAaANAggQQAOgDANgFQAngNAvASQAsAFASgCQASgBAUAFQAUAFAKAIQAggIAkAQIApACIAQgBQAYgDAiALQASACALAIQATgGAZAJQAXgBAUALQAKgHARAFQAXgBATANIAOAVIgDAAIgiAYQlfgUkQgzg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AqaBZIAAgeIBEgMQASgWAagBQAWgNAYAEQAngPASgCIALgCQAggNAagHQABACATgDIALgBQAXgFAOgOQAUgPApAIQASgOATgFQATgFASgCQASgCANAIQAegVAgACIAJADIAHAZQgIAKgIANIgRAWIoxBugAAHgaIgQgLIgHgbIAAAAQAbAOAggSQANgDANgFQAngPAvATQAsAFATgCQARgBAUAFQAUAGAKAIQAggJAkAQIAoADIARgBQAYgEAiAMQASACALAIQATgGAYAJQAXgBAVAMQAJgIARAFQAXgBATAOIAPAUIgDABIggAYQlegUkTgzg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AqaBZIAAgdIBEgMQASgXAZgBQAXgNAXAEQAngPATgCIALgCQAfgNAagHQAAACAVgDIAKgCQAXgEAOgOQATgQAqAIQASgOATgFQASgFASgCQASgCAOAIQAegVAfADIAIACIAJAaQgIAKgHANIgQAWIoyBugAAIgZIgQgMIgHgaIgBgBQAbAPAggTQANgDANgFQAmgQAwATQAsAFASgCQASgCAUAGQAUAGAJAIQAggJAlARIAoACIARAAQAYgFAhANQATACALAIQASgGAYAJQAYgBAUAMQAJgIARAGQAYgBASANIAQAUIgCABIgfAZQlegVkUgyg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AqaBaIAAgdIBEgNQASgXAZgBQAXgOAXAFQAngPATgCIALgCQAfgOAZgHQAAADAVgEIAKgBQAYgEANgPQATgQAqAJQARgPAUgFQASgFASgCQATgBAMAIQAfgWAfADIAIADIAJAZQgHAKgHAOIgQAXIoxBugAAJgYIgQgMIgHgbIgBAAQAaAPAggTQANgEAOgGQAlgRAwAUQAsAFASgCQASgCAUAGQAUAGAKAJQAfgKAkASIApACIARgBQAXgEAiANQATACAKAIQATgGAYAJQAYgBAUANQAJgJARAGQAYgBASANIAQAVIgBAAIgfAbQldgWkVgyg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AqaBbIAAgdIBEgMQASgZAZgBQAWgOAYAGQAmgQATgCIALgCQAggOAZgHQgBADAVgDIALgCQAXgEANgPQASgQArAJQARgPAUgGQARgFATgBQASgCANAJQAegXAfAEIAIADIAJAZQgGAKgHAPIgOAXIoyBugAAJgXIgQgMIgHgbIgBAAQAaAPAggTQANgEANgHQAmgSAwAUQAsAGASgCQASgDAUAHQAUAGAJAJQAggLAkATIAoACIARgBQAXgEAjANQASACALAJQASgHAZAKQAXgBAUANQAJgJARAGQAYgBASANIARAUIgBABIgdAbQldgWkXgyg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AqaBcIAAgeIBEgMQARgZAZgBQAXgOAXAGQAngQATgCIALgCQAfgOAZgHQgBACAVgDIALgBQAXgEANgQQASgRArAKQARgPATgGQASgFATgBQASgCAMAKQAegYAfAEIAJADIAJAaIgMAZIgNAXIozBugAAKgWIgQgNIgIgaIAAgBQAaARAggVQAMgEANgHQAlgTAxAUQAsAGASgCQARgDAUAHQAVAGAJAJQAfgLAkAUIApACIARgBQAXgFAjAOQASACAKAJQASgHAZAKQAYgBAUANQAIgJASAGQAXgBASAOIARAUIABAAIgdAdQlbgYkZgxg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AqaBcIAAgdIBEgMQARgaAZgBQAXgOAWAGQAngQATgCIALgCQAfgOAZgIQgCADAWgDIALgCQAXgEANgQQARgRArALQARgQATgGQATgFASgBQASgBANAJQAegYAeAFIAJADIAKAZQgGALgFAPIgNAYIozBugAAKgVIgPgNIgIgaIgBgBQAaARAfgWQANgEANgHQAlgUAxAUQAsAGARgCQASgDAUAHQAVAGAIAKQAggLAjATIAqADIARgBQAWgGAjAPQATACAJAJQATgHAYAKQAYgBAUAOQAIgKASAGQAYgBARAPIASATIABAAIgbAeQlcgYkagxg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AqaBdIAAgeIBEgMQAQgaAZgBQAXgPAXAHQAmgQATgCIALgCQAggPAYgIQgCAEAWgEIAKgBQAYgEAMgQQARgSAsALQAQgQAUgGQASgFASgBQATgBALAKQAegZAfAFIAIADIALAZQgFALgFAQIgLAZIo0BtgAAKgUIgPgOIgJgaIAAAAQAZARAggWQANgFANgIQAkgVAxAVQAsAGASgDQASgCAUAGQAUAHAIALQAggMAkAUIApACIARgBQAWgFAjAPQATACAKAJQASgHAZAKQAXgBAUAOQAIgKASAHQAXgCASAPIATATIABAAIgaAfQlbgYkcgxg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AqaBeIAAgeIBDgMQAQgbAaAAQAWgPAXAGQAmgQATgCIALgCQAggPAZgIQgEAEAXgEIAKgBQAYgEAMgRQAQgSAtAMQAQgQATgGQASgGATgBQASgBALALQAegaAfAGIAJADIAKAZIgIAcIgLAZIo1BtgAAKgTIgPgOIgJgaIAAAAQAZASAhgYQAMgEANgIQAjgXAxAWQAtAGASgDQARgDAUAHQAVAHAHALQAggNAkAVIApACIARgBQAWgGAkAQQATACAJAKQASgIAZALQAYgBATAOQAIgKASAGQAXgBASAQIATASIACAAIgZAgQlZgZkfgxg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AqbBfIAAgeIBEgMQAQgcAZAAQAWgQAYAHQAlgRATgBIALgCQAggPAZgIQgEADAXgDIAKgBQAYgEAMgSQAPgSAtAMQAQgQAUgGQARgGATgBQASgBAMAMQAdgbAfAGIAIAEQAGAKAFAPIgHAcIgJAZIo1BugAAKgSIgPgOIgJgaIAAgBQAZATAggYQAMgFANgJQAkgXAxAVQAsAHASgDQASgDAUAHQAVAHAHALQAfgNAkAWIApACIARgBQAWgGAkAQQATACAJAKQASgIAZALQAYgBAUAPQAHgLASAHQAXgCARAQIAVASIADAAIgYAhQlagakggwg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AqbBfIAAgeIBFgLQAOgdAZAAQAXgQAXAHQAmgRATgBIALgDQAfgPAYgIQgDAEAWgDIALgCQAYgEALgRQAQgTAtANQAQgRATgGQARgGAUgBQASAAALALQAegbAeAHIAJADQAFALAFAOQgCAMgDARIgJAaIo1BtgAALgSIgPgOIgJgaIgBAAQAZATAggZQAMgFANgJQAkgZAwAWQAtAHASgDQARgDAVAHQAUAHAIAMQAegOAkAWIAqADIARgCQAVgGAkARQATACAJAKQASgIAaALQAXgBAUAPQAHgLASAHQAYgCAQARIAVARIAEABIgXAiQlZgbkhgxg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AqbBgIAAgeIBEgMQAPgdAZAAQAWgQAXAIQAmgSATgBIALgDQAggPAYgIQgFAEAXgEIALgBQAYgEALgSQAPgTAtANQAQgRATgGQASgGATAAQASgBALAMQAegcAeAHIAIAEQAGAKAGAPIgFAdIgHAaIo3BugAALgRIgPgOIgJgaQAYASAggYQAMgGAMgJQAkgaAxAWQAsAHASgDQASgEAUAIQAVAHAHAMQAfgOAkAXIApACIARgBQAWgGAkAQQATADAJALQARgJAZALQAYgBAUAQQAHgMASAHQAYgBAQARIAWAQIAEABIgWAjQlYgckjgwgAgNg5IgBgBIABABIAAAAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AqbBhIAAgeIBEgMQAOgeAZAAQAXgQAXAIQAkgSAUgBIALgCQAggQAYgIQgFAEAXgEIALgBQAYgEAKgSQAPgUAtAOQARgSASgGQASgFATgBQATgBAKANQAdgcAfAHIAJAEIALAZIgDAdIgHAcIo3BtgAALgPIgPgPIgKgaIAAgBQAZAVAggbQALgGANgJQAjgbAyAXQAsAGASgDQASgDATAHQAWAIAGAMQAfgOAkAXIApADIASgCQAVgHAkASQATACAJALQARgJAZAMQAYgCAUARQAGgMATAHQAYgCAQASIAWAQIAFABIgVAkQlXgdklgvg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AqcBiIAAgeIBFgMQAOgfAYABQAWgRAYAIQAkgSAUgBIALgDQAhgQAXgIQgFAFAXgEIAKgBQAZgEAKgTQAOgUAuAPQAQgSASgGQATgGASgBQATgBALAOQAdgdAeAIIAIADIANAZIgDAeIgFAcIo4BtgAALgPIgPgPIgJgaIgBAAQAYAVAggbQAMgGANgKQAjgdAxAYQAsAGASgDQASgDAUAHQAVAIAGANQAfgPAkAYIAqACIAQgBQAWgHAlASQATACAIALQARgJAaAMQAXgCAUARQAGgMATAHQAXgBARASIAWAPIAHABIgUAlQlYgdkmgwg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AqcBiIAAgeIBEgMQAOgfAZABQAWgSAXAJQAlgSATgBIALgDQAhgQAXgIQgGAEAYgDIAKgCQAYgDALgUQANgUAvAPQAPgSATgGQASgGATgBQASAAALANQAdgdAeAIIAIAEQAGAKAHAOIgBAfIgFAdIo4BtgAALgOIgOgPIgLgaIAAgBQAYAWAggcQAMgGAMgLQAjgdAyAYQAsAGASgDQARgEAVAIQAVAJAFAMQAfgPAkAZIAqACIARgCQAVgHAlASQATADAIAMQARgKAaAMQAYgBATARQAGgNATAIQAYgCAQATIAXAOIAHABIgTAmQlXgekogvg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AqcBjIAAgeIBEgMQANggAZABQAXgSAXAJQAkgTAUgBIALgCQAggRAXgIQgHAFAZgEIAKgBQAZgEAJgUQANgUAvAQQAPgTAUgGQARgGATgBQASAAALAOQAcgeAeAIIAJAEQAGAKAHAPIAAAfIgEAdIo5BtgAALgNIgOgQIgLgZIAAgBQAZAWAggcQALgHALgLQAjgeAyAXQAsAHATgDQAQgEAVAIQAWAJAFANQAegQAkAZIAqADIASgCQAUgIAlATQAUADAHAMQARgKAaAMQAYgBAUARQAFgNATAIQAYgCAQATIAYAPIAIAAIgTAoQlVgfkrgvg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AqdBkIAAgeIBFgMQANghAYABQAXgSAXAKQAkgTAUgBIALgDQAggRAXgIQgHAFAZgEIAKgBQAYgEAKgUQAMgVAwARQAPgUATgGQARgGATAAQATgBAKAPQAdgfAeAJIAIAEQAHAKAGAPIACAgIgDAdIo6BtgAAMgMIgPgQIgKgZIgBgBQAYAXAggeQALgHAMgLQAjgfAyAYQAsAHASgEQARgEAVAJQAVAIAFAOQAegRAlAaIApADIASgCQAUgIAmATQATADAIAMQAQgKAaANQAYgCAUASQAFgNATAIQAYgCAPAUIAZANIAJABIgSAoQlVgfkrgvg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AqdBkIAAgeIBFgLQAMgiAZABQAWgSAYAKQAjgTAUgCIALgCQAggRAYgIQgIAFAYgEIALgBQAYgEAJgUQAMgWAwARQAQgUASgGQARgGAUAAQASgBAKAPQAdgfAeAKIAIAEQAGAKAIAOIACAhIgCAeIo6BtgAAMgLIgOgQIgMgbQAYAYAggeQALgIAMgLQAighAyAZQAtAHARgEQASgEAUAJQAWAJAEANQAfgRAkAbIApACIASgBQAUgIAmATQAUADAHANQAQgLAaANQAZgCASATQAGgOATAIQAYgCAPAVIAZANIAKAAIgRAqQlUggktgvg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AqdBlIAAgeIBFgMQAMgiAYABQAWgTAYALQAjgUAUgBIALgCQAhgSAWgIQgIAFAZgDIALgCQAYgDAJgVQALgWAxASQAPgVASgGQASgGATAAQATAAAJAPQAdggAeAKIAIAEQAHAKAHAPIAEAhIgBAfIo7BsgAAMgKIgOgRIgLgZQAXAXAggfQALgIAMgMQAhghAzAZQAsAHASgEQARgEAVAJQAVAJAFAOQAegSAkAcIAqACIARgCQAVgIAlAUQAUADAHANQAQgLAbANQAYgCATATQAFgOATAIQAYgCAPAVIAaANIAKABIgPAqQlUghkvgug");
	var mask_1_graphics_44 = new cjs.Graphics().p("AqdBmIAAgfIBEgLQANgjAXABQAXgTAXALQAkgUATgBIAMgCQAggSAXgJQgJAGAagEIAKgBQAYgEAJgVQAKgWAxASQAPgUATgHQASgGASAAQATAAAJAQQAdghAeAKIAIAFQAHAJAHAPIAGAiIgBAfIo7BtgAANgJIgOgRIgMgZQAYAXAfgfQALgIALgNQAigjAzAaQAsAHASgEQARgEAVAJQAVAJAEAOQAegSAkAcIArADIARgCQAUgJAmAVQAUADAGANQAQgLAbANQAYgCATATQAFgOATAJQAYgDAPAWIAbAMIALABIgPArQlTghkwgugAgOg0IABAAIAAABIgBgBg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AqeBnIAAgeIBFgMQAMgkAYACQAWgUAYAMQAjgVATgBIAMgCQAhgSAWgJQgJAGAZgDIALgCQAYgDAIgWQALgWAxASQAPgVASgGQASgGATAAQASgBAKARQAcghAeAKIAIAFQAHAJAIAPIAGAiIABAgIo8BtgAANgIIgOgRIgMgaQAXAYAggfQALgJALgNQAhgkAzAaQAtAIARgFQASgEAVAJQAVAKADAOQAegSAlAdIAqACIARgCQAUgJAmAVQAUADAHAOQAQgMAaAOQAYgCATASQAFgNATAJQAYgDAPAWIAbAMIAMABIgOAsQlSgikygug");
	var mask_1_graphics_46 = new cjs.Graphics().p("AqeBnIAAgeIBFgLQALglAZACQAWgUAXAMQAjgVAUgBIALgCQAhgTAVgIQgJAGAagEIAKgBQAZgEAIgWQAKgXAxAUQAPgWASgGQASgGATAAQATAAAJAQQAcghAeALIAIAEQAIAKAHAOIAHAjIACAhIo8BsgAANgHIgOgRIgMgZQAXAXAfggQALgJAMgNQAgglAzAaQAtAIASgFQARgEAVAJQAVAKADAPQAegTAmAdIApADIARgDQAUgIAnAVQATADAGAOQARgMAaAOQAYgCATASQAFgNAUAJQAXgDAPAXIAcALIAMABIgNAtQlRgjk0gtgAgOgzIABABIAAABIgBgCg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AqeBoIAAgeIBFgMQALglAYACQAWgUAXAMQAjgVAUgBIALgCQAhgTAWgJQgKAGAagDIAKgBQAZgEAIgXQAJgXAyAUQAOgWATgGQARgGATAAQATAAAJARQAcgiAeALIAIAFQAHAJAIAPQAFAOAEAVIADAiIo+BrgAANgGIgNgSIgNgZQAXAZAggiQAKgJALgNQAhgnAzAbQAtAIARgFQASgEAVAJQAVAKADAPQAegTAlAeIApACIASgCQATgJAnAWQAUADAGAOQAQgMAaAOQAZgCATATQAEgOATAJQAYgCAPAXIAcAKIANABIgLAvQlRgkk2gtg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AqeBpIAAgeIBEgMQALgmAYACQAWgUAXAMQAjgVAUgBIAMgCQAhgTAVgJQgLAHAbgEIAKgBQAZgEAHgXQAJgXAzAUQANgWATgHQARgGAUAAQASAAAJASQAdgjAdAMIAIAFQAIAJAHAPQAFAOAGAWIADAiIo+BrgAAOgFIgOgSIgNgaQAWAbAhgjQAKgJALgOQAggnA0AaQAtAIARgEQARgFAWAKQAVAKACAPQAegUAlAfIAqACIARgCQATgJAoAWQATADAGAOQAQgMAbAPQAYgCATATQAEgOAUAJQAYgDANAYIAeAKIAOABIgLAwQlRglk2gtg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AqfBqIAAgfIBGgLQAKgnAXACQAXgVAXANQAigVAUgBIAMgCQAhgUAVgIQgLAGAbgDIAKgCQAZgDAHgYQAIgXAzAVQAOgXASgHQASgGATAAQATAAAIATQAcgkAeAMIAIAFQAIAJAIAPQAFAPAGAWIAFAiIo/BsgAAOgEIgOgSIgNgaQAXAaAfgiQALgKALgPQAggoAzAbQAtAIASgEQARgFAVAKQAVAKADAQQAdgVAlAgIAqACIASgCQATgKAnAXQAUADAFAPQAQgNAbAPQAYgCATATQAEgOAUAJQAXgCAOAYIAeAJIAPABIgKAxQlQglk4gtg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AqfBqIAAgeIBGgMQAJgnAYACQAWgVAYANQAhgVAVgBIALgCQAhgUAVgJQgLAHAbgEIAKgBQAZgEAGgXQAJgZAzAWQANgXASgHQATgGATAAQASABAJASQAcgkAdANIAIAFQAIAJAJAOQAGAPAFAXIAGAjIo/BrgAANgDIgNgTIgOgaQAXAcAggkQALgKALgPQAfgpAzAbQAtAIASgFQASgEAUAKQAWAKACAQQAegUAkAfIArADIARgDQATgJAnAXQAUADAFAPQAQgNAbAPQAZgCASAUQADgPAUAKQAZgDAOAZIAeAIIAPABIgIAyQlQgmk7gsg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AqfBrIAAgeIBFgLQAKgpAXADQAWgWAYAOQAigWAUgBIALgCQAhgUAVgJQgMAHAcgEIAKgBQAZgEAGgYQAIgYA0AWQANgXASgHQASgHATABQATAAAIATQAcglAdAOIAIAFQAIAJAJAOQAGAQAHAXIAGAjIo/BrgAAOgCIgOgTIgNgZQAXAbAfgkQAKgKALgQQAggqAzAbQAtAJASgFQARgFAVAKQAWALABAQQAegVAlAgIAqADIARgDQATgKAoAYQAUADAFAPQAPgNAbAQQAZgDASAVQAEgPAUAJQAYgDANAaIAfAIIAQABIgHAzQlPgnk8gsg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AqgBNIBGgLQAJgpAXADQAWgWAYAOQAhgWAVgBIALgCQAhgVAVgIQgNAHAcgEIAKgBQAZgEAHgYQAHgZA0AWQANgXASgHQASgHATABQATAAAIAUQAbgmAeAOIAIAFQAIAJAJAPQAHAPAHAYIAIAjIpABsIgGAAgAAOgBIgOgTIgMgZQAWAbAfglQAKgKAKgQQAggsA0AcQAsAJASgFQARgFAWAKQAVALABARQAegWAlAhIAqADIARgDQATgKAoAYQAUADAFAQQAPgOAbAQQAZgDASAVQADgPAVAKQAXgDAOAaIAgAHIARABIgHA0QlOgnk+gsgAgOgvIABABIABABIgCgCg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AqgBOIBGgLQAJgpAWADQAXgXAYAOQAggWAVgBIAMgCQAggVAWgIQgOAHAcgEIALgBQAYgEAGgZQAHgZA1AXQANgYARgGQASgHATAAQATABAIAUQAcgmAcAOIAIAFQAJAJAJAPQAIAPAIAYIAIAjIpABtIgGAAgAAOAAIgOgTIgNgZQAWAbAgglQAKgLAKgQQAfgtA0AdQAtAIASgFQARgFAVALQAWALABARQAcgWAmAhIAqADIASgDQASgKAoAYQAUAEAFAPQAPgOAcARQAYgDATAVQADgPATAJQAYgDANAbIAiAHIARABIgGA1QlNgolAgsgAgOguIABABIAAABIgBgCg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AqgBPIBFgLQAJgqAXADQAWgXAYAPQAhgXAUAAIAMgDQAhgVAUgJQgNAIAcgEIAKgBQAZgEAGgZQAGgaA1AYQANgYASgHQARgHAUABQATABAHAUQAcgnAcAPIAJAFQAIAJAJAPQAJAQAIAYIAKAjIpCBtIgFAAgAAOAAIgOgSIgMgYQAWAaAfglQAJgLALgRQAeguA1AdQAtAJARgFQARgGAWALQAWALAAASQAdgXAlAiIAqADIASgDQASgLApAaQAUADAEAQQAPgOAcAQQAYgDATAWQACgQAVAKQAYgDANAbIAhAHIASABIgFA2QlMgplCgtgAgOgsIABAAIABACIgCgCg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AqgBQIBFgLQAIgrAYADQAWgXAXAPQAhgXAUgBIAMgCQAigVATgJQgOAIAdgEIAKgBQAZgEAFgaQAGgaA2AZQAMgZASgHQARgHAUABQATABAHAVQAcgoAcAPIAIAGQAKAIAIAPQAKAQAJAZIAKAjIpCBtIgFABgAAOAAIgOgSIgMgYQAVAcAfgnQAKgLAKgRQAfgvA0AdQAtAJARgFQASgGAWALQAVALAAASQAdgXAmAjIApADIASgDQATgLAoAZQAUAEAEAQQAPgPAbASQAagEASAXQACgRAUAKQAZgDANAcIAhAGIATABIgDA3QlNgplDgugAgNgsIAAABIABABIgBgCg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AqhBRIBGgLQAIgsAXAEQAWgYAXAQQAhgYAUAAIAMgDQAigVAUgJQgPAIAdgEIAKgBQAZgEAFgaQAFgaA2AZQANgZARgHQASgHATABQATAAAHAWQAcgoAdAPIAIAGQAJAIAJAPQAKAQAJAZIAMAkIpDBtIgGABgAAPABIgPgSIgMgYQAVAcAfgnQAKgLAKgSQAegwA1AeQAtAJARgGQARgGAWAMQAWALAAASQAcgXAmAjIAqADIASgDQASgLAoAaQAVADAEARQAOgPAcARQAZgDASAXQACgRAVAJQAYgCAMAcIAjAGIAUABIgDA4QlMgqlEgugAgOgrIABABIABABIgCgCg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AqhBSIBGgLQAHgtAXAEQAWgYAYAQQAggYAUAAIANgDQAhgWAUgJQgPAIAcgDIALgCQAZgDAEgbQAFgaA3AZQAMgZASgHQASgHATABQASAAAHAXQAcgpAdAPIAHAGQAKAIAKAPQAKARAKAZIAMAlIpJBugAAPACIgOgSIgMgYQAUAcAfgnQAKgMAKgSQAdgxA1AdQAtAKASgGQARgGAWAMQAVALAAATQAdgYAlAkIArACIASgCQAQgMApAbQAVADAEARQAOgPAcARQAZgDASAXQACgRAVAJQAYgCAMAdIAkAFIAUABIgCA5QlLgrlGgtgAgOgqIACABIABABIgDgCg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AqhBTIBGgLQAHguAXAEQAWgYAXAQQAggYAVAAIAMgDQAhgWAUgJQgQAJAegEIAKgBQAZgEAEgbQAEgbA3AaQANgaARgHQASgHATABQATABAHAXQAbgqAcAQIAJAGQAJAIAKAPQALARAKAaIAOAlIpKBugAAPADIgOgSIgNgYQAWAdAegpQAJgMAKgSQAegyA1AeQAtAJARgGQARgGAWAMQAWAMgBATQAdgZAlAlIArADIASgDQARgMApAbQAVADADASQAOgQAcASQAZgDASAXQACgRAVAIQAYgBAMAdIAkAFIAVABIgBA6QlKgslIgtgAgOgpIABABIABABIgCgCg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AqhBTIBFgLQAHguAXAEQAWgYAYAQQgHgSAWADQARgJAUAAIAMgDQAhgWAUgJQgQAIAdgEIAKgBQAagDAEgcQAEgbA3AbQAMgbASgHQARgHATABQATACAHAWQAyhOA4B9IAOAmIpKBtgAAPAEIgdgtQAdApAshRQAjg+BGA4IAogMQARgGAWAMQAWAMgCATQAdgYAlAlIArACIASgDQARgLApAbQAVADADASQAPgQAcASQAYgDATAYQABgSAVAJQAZgCAMAgIA6ADIAAA7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_1_graphics_3,x:321,y:434}).wait(1).to({graphics:mask_1_graphics_4,x:321,y:433.9}).wait(1).to({graphics:mask_1_graphics_5,x:320.9,y:433.9}).wait(1).to({graphics:mask_1_graphics_6,x:320.9,y:433.8}).wait(1).to({graphics:mask_1_graphics_7,x:320.9,y:433.8}).wait(1).to({graphics:mask_1_graphics_8,x:320.9,y:433.7}).wait(1).to({graphics:mask_1_graphics_9,x:320.9,y:433.7}).wait(1).to({graphics:mask_1_graphics_10,x:320.9,y:433.6}).wait(1).to({graphics:mask_1_graphics_11,x:320.9,y:433.5}).wait(1).to({graphics:mask_1_graphics_12,x:320.9,y:433.5}).wait(1).to({graphics:mask_1_graphics_13,x:320.9,y:433.4}).wait(1).to({graphics:mask_1_graphics_14,x:320.8,y:433.4}).wait(1).to({graphics:mask_1_graphics_15,x:320.8,y:433.3}).wait(1).to({graphics:mask_1_graphics_16,x:320.8,y:433.3}).wait(1).to({graphics:mask_1_graphics_17,x:320.8,y:433.2}).wait(1).to({graphics:mask_1_graphics_18,x:320.8,y:433.1}).wait(1).to({graphics:mask_1_graphics_19,x:320.8,y:433.1}).wait(1).to({graphics:mask_1_graphics_20,x:320.8,y:433}).wait(1).to({graphics:mask_1_graphics_21,x:320.8,y:432.9}).wait(1).to({graphics:mask_1_graphics_22,x:320.8,y:432.9}).wait(1).to({graphics:mask_1_graphics_23,x:320.7,y:432.8}).wait(1).to({graphics:mask_1_graphics_24,x:320.7,y:432.8}).wait(1).to({graphics:mask_1_graphics_25,x:320.7,y:432.7}).wait(1).to({graphics:mask_1_graphics_26,x:320.7,y:432.7}).wait(1).to({graphics:mask_1_graphics_27,x:320.7,y:432.6}).wait(1).to({graphics:mask_1_graphics_28,x:320.7,y:432.6}).wait(1).to({graphics:mask_1_graphics_29,x:320.7,y:432.5}).wait(1).to({graphics:mask_1_graphics_30,x:320.7,y:432.4}).wait(1).to({graphics:mask_1_graphics_31,x:320.7,y:432.4}).wait(1).to({graphics:mask_1_graphics_32,x:320.7,y:432.3}).wait(1).to({graphics:mask_1_graphics_33,x:320.8,y:432.2}).wait(1).to({graphics:mask_1_graphics_34,x:320.8,y:432.2}).wait(1).to({graphics:mask_1_graphics_35,x:320.8,y:432.1}).wait(1).to({graphics:mask_1_graphics_36,x:320.8,y:432.1}).wait(1).to({graphics:mask_1_graphics_37,x:320.9,y:432}).wait(1).to({graphics:mask_1_graphics_38,x:320.9,y:431.9}).wait(1).to({graphics:mask_1_graphics_39,x:320.9,y:431.9}).wait(1).to({graphics:mask_1_graphics_40,x:321,y:431.8}).wait(1).to({graphics:mask_1_graphics_41,x:321,y:431.7}).wait(1).to({graphics:mask_1_graphics_42,x:321,y:431.7}).wait(1).to({graphics:mask_1_graphics_43,x:321,y:431.6}).wait(1).to({graphics:mask_1_graphics_44,x:321.1,y:431.6}).wait(1).to({graphics:mask_1_graphics_45,x:321.1,y:431.5}).wait(1).to({graphics:mask_1_graphics_46,x:321.1,y:431.4}).wait(1).to({graphics:mask_1_graphics_47,x:321.1,y:431.4}).wait(1).to({graphics:mask_1_graphics_48,x:321.2,y:431.3}).wait(1).to({graphics:mask_1_graphics_49,x:321.2,y:431.2}).wait(1).to({graphics:mask_1_graphics_50,x:321.2,y:431.2}).wait(1).to({graphics:mask_1_graphics_51,x:321.2,y:431.1}).wait(1).to({graphics:mask_1_graphics_52,x:321.3,y:431}).wait(1).to({graphics:mask_1_graphics_53,x:321.3,y:430.9}).wait(1).to({graphics:mask_1_graphics_54,x:321.3,y:430.8}).wait(1).to({graphics:mask_1_graphics_55,x:321.4,y:430.8}).wait(1).to({graphics:mask_1_graphics_56,x:321.4,y:430.7}).wait(1).to({graphics:mask_1_graphics_57,x:321.4,y:430.6}).wait(1).to({graphics:mask_1_graphics_58,x:321.4,y:430.5}).wait(1).to({graphics:mask_1_graphics_59,x:321.5,y:430.5}).wait(1));

	// Layer_13
	this.instance_1 = new lib.plate_t_05();
	this.instance_1.setTransform(12,294);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(57));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_21 = new cjs.Graphics().p("AjsBSIAAijIHZAAIAACjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_2_graphics_21,x:287.5,y:476.2}).wait(39));

	// Layer 4
	this.instance_2 = new lib.plate_t_033("synched",0);
	this.instance_2.setTransform(323.5,476.2,1,1,0,0,180,20,5.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({x:297.7},38).wait(1));

	// Layer 9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_21 = new cjs.Graphics().p("AkNBPIAAidIIbAAIAACdg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_3_graphics_21,x:352.3,y:475.8}).wait(39));

	// Layer 3
	this.instance_3 = new lib.plate_t_033("synched",0);
	this.instance_3.setTransform(313.1,476.2,1,1,0,0,0,20,5.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({x:340.1},38).wait(1));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AgKDBIAAhpIAAhsIAAisIAWAAIAACsIAABsIAABpg");
	var mask_4_graphics_1 = new cjs.Graphics().p("AgKC3IAAl3IAWAAIAAGBg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AgKC3IAAl3IAWAAIAAGBg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AgKC3IAAl3IAWAAIAAGAg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AgKC3IAAl2IAWAAIAAF/g");
	var mask_4_graphics_5 = new cjs.Graphics().p("AgKC2IAAl1IAWAAIAAF/g");
	var mask_4_graphics_6 = new cjs.Graphics().p("AgKC2IAAl1IAWAAIAAF/g");
	var mask_4_graphics_7 = new cjs.Graphics().p("AgKC2IAAl1IAWAAIAAF+g");
	var mask_4_graphics_8 = new cjs.Graphics().p("AgKC2IAAl0IAWAAIAAF9g");
	var mask_4_graphics_9 = new cjs.Graphics().p("AgKC1IAAlzIAWAAIAAF9g");
	var mask_4_graphics_10 = new cjs.Graphics().p("AgKC1IAAlzIAWAAIAAF9g");
	var mask_4_graphics_11 = new cjs.Graphics().p("AgKC2IAAl0IAWAAIAAF9g");
	var mask_4_graphics_12 = new cjs.Graphics().p("AgKCyIAAlyIAWAAIAAGBg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AgKDBIAAhpIAAhsIAAisIAWAAIAACsIAABsIAABpg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AgYDBIAAmBIAyAAIAAGBg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AgnDBIAAmBIBPAAIAAGBg");
	var mask_4_graphics_16 = new cjs.Graphics().p("Ag1DBIAAmBIBrAAIAAGBg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AhDDBIAAmBICHAAIAAGBg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AhRDBIAAmBICjAAIAAGBg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AhfDBIAAmBIC/AAIAAGBg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AhtDBIAAmBIDbAAIAAGBg");
	var mask_4_graphics_21 = new cjs.Graphics().p("Ah7DBIAAhpIAAhsIAAisID3AAIAACsIAABsIAABpg");
	var mask_4_graphics_22 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_23 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_24 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_25 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_26 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_27 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_28 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_29 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_30 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_31 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_32 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_33 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_34 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_35 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_36 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_37 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_38 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_39 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_40 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_41 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_42 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_43 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_44 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_45 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_46 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_47 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_48 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_49 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_50 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_51 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_52 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_53 = new cjs.Graphics().p("Ah7DBIAAmBID3AAIAAGBg");
	var mask_4_graphics_54 = new cjs.Graphics().p("Ah7DBIAAhpIAAhsIAAisID3AAIAACsIAABsIAABpg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:318.4,y:531.7}).wait(1).to({graphics:mask_4_graphics_1,x:318.4,y:528.9}).wait(1).to({graphics:mask_4_graphics_2,x:318.4,y:526}).wait(1).to({graphics:mask_4_graphics_3,x:318.4,y:523.2}).wait(1).to({graphics:mask_4_graphics_4,x:318.4,y:520.3}).wait(1).to({graphics:mask_4_graphics_5,x:318.4,y:517.5}).wait(1).to({graphics:mask_4_graphics_6,x:318.4,y:514.7}).wait(1).to({graphics:mask_4_graphics_7,x:318.4,y:511.8}).wait(1).to({graphics:mask_4_graphics_8,x:318.4,y:509}).wait(1).to({graphics:mask_4_graphics_9,x:318.4,y:506.2}).wait(1).to({graphics:mask_4_graphics_10,x:318.4,y:503.3}).wait(1).to({graphics:mask_4_graphics_11,x:318.4,y:500.5}).wait(1).to({graphics:mask_4_graphics_12,x:318.4,y:497.9}).wait(1).to({graphics:mask_4_graphics_13,x:318.4,y:494.2}).wait(1).to({graphics:mask_4_graphics_14,x:318.4,y:494.2}).wait(1).to({graphics:mask_4_graphics_15,x:318.4,y:494.2}).wait(1).to({graphics:mask_4_graphics_16,x:318.5,y:494.2}).wait(1).to({graphics:mask_4_graphics_17,x:318.5,y:494.2}).wait(1).to({graphics:mask_4_graphics_18,x:318.6,y:494.2}).wait(1).to({graphics:mask_4_graphics_19,x:318.6,y:494.2}).wait(1).to({graphics:mask_4_graphics_20,x:318.6,y:494.2}).wait(1).to({graphics:mask_4_graphics_21,x:318.7,y:494.2}).wait(1).to({graphics:mask_4_graphics_22,x:318.7,y:493.1}).wait(1).to({graphics:mask_4_graphics_23,x:318.7,y:492}).wait(1).to({graphics:mask_4_graphics_24,x:318.7,y:490.9}).wait(1).to({graphics:mask_4_graphics_25,x:318.7,y:489.8}).wait(1).to({graphics:mask_4_graphics_26,x:318.7,y:488.7}).wait(1).to({graphics:mask_4_graphics_27,x:318.7,y:487.6}).wait(1).to({graphics:mask_4_graphics_28,x:318.7,y:486.5}).wait(1).to({graphics:mask_4_graphics_29,x:318.7,y:485.4}).wait(1).to({graphics:mask_4_graphics_30,x:318.7,y:484.3}).wait(1).to({graphics:mask_4_graphics_31,x:318.7,y:483.2}).wait(1).to({graphics:mask_4_graphics_32,x:318.7,y:482.1}).wait(1).to({graphics:mask_4_graphics_33,x:318.7,y:481}).wait(1).to({graphics:mask_4_graphics_34,x:318.7,y:479.9}).wait(1).to({graphics:mask_4_graphics_35,x:318.7,y:478.8}).wait(1).to({graphics:mask_4_graphics_36,x:318.7,y:477.7}).wait(1).to({graphics:mask_4_graphics_37,x:318.7,y:476.6}).wait(1).to({graphics:mask_4_graphics_38,x:318.7,y:475.5}).wait(1).to({graphics:mask_4_graphics_39,x:318.7,y:474.4}).wait(1).to({graphics:mask_4_graphics_40,x:318.7,y:473.3}).wait(1).to({graphics:mask_4_graphics_41,x:318.7,y:472.2}).wait(1).to({graphics:mask_4_graphics_42,x:318.7,y:471.1}).wait(1).to({graphics:mask_4_graphics_43,x:318.7,y:470}).wait(1).to({graphics:mask_4_graphics_44,x:318.7,y:468.9}).wait(1).to({graphics:mask_4_graphics_45,x:318.7,y:467.8}).wait(1).to({graphics:mask_4_graphics_46,x:318.7,y:466.7}).wait(1).to({graphics:mask_4_graphics_47,x:318.7,y:465.6}).wait(1).to({graphics:mask_4_graphics_48,x:318.7,y:464.5}).wait(1).to({graphics:mask_4_graphics_49,x:318.7,y:463.4}).wait(1).to({graphics:mask_4_graphics_50,x:318.7,y:462.3}).wait(1).to({graphics:mask_4_graphics_51,x:318.7,y:461.2}).wait(1).to({graphics:mask_4_graphics_52,x:318.7,y:460.1}).wait(1).to({graphics:mask_4_graphics_53,x:318.7,y:459}).wait(1).to({graphics:mask_4_graphics_54,x:318.7,y:457.9}).wait(1).to({graphics:null,x:0,y:0}).wait(5));

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqCuQgCgDAAgEIAAjpQAAglgagbIgBAAQgZgagkAAQgFAAgCgDQgDgDAAgEQAAgEADgDQACgDAFAAQAtAAAeAgQAhAgAAAuIAADpQAAAEgDADQgEADgDAAQgFAAgDgDg");
	this.shape.setTransform(313.4,492.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3CuQgDgDAAgEIAAjpQAAguAfggQAfggAuAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgmAAgYAaIAAAAQgaAbAAAlIAADpQAAAEgEADQgDADgDAAQgFAAgCgDg");
	this.shape_1.setTransform(323.3,492.8);

	this.shape.mask = this.shape_1.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},55).wait(5));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ehj+ApfMAAAhS9MDH9AAAMAAABS9g");
	mask_5.setTransform(640,265.5);

	// Layer 6
	this.instance_4 = new lib.plate_t_026("synched",0,false);
	this.instance_4.setTransform(640,360,1,1,0,0,0,640,360);

	this.instance_4.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// asthenosphare
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIFyiLIBvkZIA5gKIBQCgIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	this.shape_2.setTransform(316.2,482.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.5,1.2,-48.5).s().p("EgyTgEBIM+D6IdihkIFyiLIBvkeIA6gIIBPCjIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	this.shape_3.setTransform(316.2,482.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.7,1.2,-48.3).s().p("EgyTgD+IM+D6IdihkIFyiMIBwkjIA6gIIBOCpIEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	this.shape_4.setTransform(316.2,482.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.9,1.2,-48.1).s().p("EgyTgD8IM+D6IdihkIFyiMIBxkoIA6gHIBNCtIEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	this.shape_5.setTransform(316.2,482.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.1,1.2,-47.9).s().p("EgyTgD6IM+D6IdihkIFyiMIByktIA6gGIBMCxIEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	this.shape_6.setTransform(316.2,481.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.3,1.2,-47.7).s().p("EgyTgD4IM+D4IdihiIFyiMIBykzIA7gEIBLC1IEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	this.shape_7.setTransform(316.2,481.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.6,1.2,-47.4).s().p("EgyTgD2IM+D4IdihiIFyiMIBzk4IA6gDIBLC5IEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	this.shape_8.setTransform(316.2,481.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IdihiIFyiMIBzk9IA7gCIBKC9IEEDSIScgoIPoD4IKfG4Mhk6AA8g");
	this.shape_9.setTransform(316.2,481.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#733706","#FF5A00"],[0,1],1.4,60.8,1.4,-47.2).s().p("EgyRgDrIMrDrId3heIAWgHIDfhSQA/gZA+gZIAQgoIBhkVIA5gDIBJC9IAEADQA5AzA8AwQA7AxA+AwIAQALIScgoIPpD3IKfG3Mhk3AA+g");
	this.shape_10.setTransform(316,481.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#733706","#FF5A00"],[0,1],1.5,60.8,1.5,-47.2).s().p("EgyPgDrIMsDrId4heIAWgHQBxgmBugqQBBgYA8gaIAQgoIBekWIATgDIAmgBIAKASIA8CrIAEADQA3A0A7AxQA6AwBAAvIAQALISdgnIBmAVIOEDgIKfG2IhDAFMhjwAA7g");
	this.shape_11.setTransform(315.8,481.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#733706","#FF5A00"],[0,1],1.7,60.8,1.7,-47.2).s().p("EgyOgDrIMtDrId5heIAXgHQBygkBugqQBBgYA7gaIAQgpIBckWIASgEIAmgBIAKASIA6CrIADADQA1A2A5AxQA7AwBBAuIAQAKISegnIBlAVIOFDfIBOAuIJTGHIg9AHMhj0AA7g");
	this.shape_12.setTransform(315.7,481.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#733706","#FF5A00"],[0,1],1.8,60.8,1.8,-47.2).s().p("EgyMgDsIMtDsId7heIAWgGQB0gkBtgoQBCgZA6gaIAQgpIBZkXIARgFIAmgBIALAQIA3CsIADAEQAyA5A5AwQA6AxBDArIAQAKISegnIBmAUIOGDfIBOAtIJTGHIg2AJMhj3AA7g");
	this.shape_13.setTransform(315.5,481.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#733706","#FF5A00"],[0,1],2,60.8,2,-47.2).s().p("EgyLgDsIMvDsId7heIAXgGQB0ghBtgoQBDgZA4gcIARgnIBXkZIAQgGIAmgBIALAPIA0CtIADAEQAwA7A4AwQA5AxBFAqIAQAJISfgnIBmATIOGDfIBPAsIJUGHIgvALMhj8AA7g");
	this.shape_14.setTransform(315.4,481.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#733706","#FF5A00"],[0,1],2.2,60.7,2.2,-47.3).s().p("EgyJgDtIMvDtId9heIAXgGQB2gfBsgoQBDgZA3gcQAKgUAHgUIBUkZIAPgHIAngBIALAOIAyCtIADAEQAtA9A4AwQA3AxBHApIAQAIISggmIBnARIOGDgIBQAqIJTGHIgoANMhj/AA8g");
	this.shape_15.setTransform(315.2,481.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#733706","#FF5A00"],[0,1],2.3,60.7,2.3,-47.3).s().p("EgyIgDtIMxDtId+heIAXgGQB2gdBsgnQBEgZA2gdQAKgUAHgUIBRkaIAPgIIAmgBIAMANIAvCuIADAEQArA/A2AwQA3AxBJAoIAQAHIShgmIBnAQIOGDgIBQApIJUGHIggAPMhkDAA8g");
	this.shape_16.setTransform(315.1,481.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#733706","#FF5A00"],[0,1],2.5,60.7,2.5,-47.3).s().p("EgyGgDuIMxDuIeAheIAWgFQB4gcBrgnQBFgZA1geQAKgTAHgUIBPkbIANgJIAmgBIAOAMIAsCvIACAEQAoBBA2AwQA2AxBLAmIAQAHIShgmIBoAPIOGDgIBRAoIJVGHIgbARMhkGAA8g");
	this.shape_17.setTransform(314.9,481.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#733706","#FF5A00"],[0,1],2.6,60.7,2.6,-47.3).s().p("EgyFgDuIMzDuIeAheIAXgFQB4gaBrgmQBGgaA0geQAKgTAHgUIBMkcIANgKIAmgBIANAMIAqCvIACAEQAlBDA2AwQA2AxBMAlIAQAGISigmIBnAOIOIDgIBRAmIJWGIIgVATMhkJAA8g");
	this.shape_18.setTransform(314.8,481.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#733706","#FF5A00"],[0,1],2.8,60.7,2.8,-47.3).s().p("EgyDgDvIMzDvIeCheIAXgFQB6gXBqgnQBGgZAygfQALgTAHgVIBJkcIANgLIAmgBIAOALIAmCvIADAEQAjBGA0AwQA1AwBNAkIARAGISjgmIBnAMIOJDhIBSAlIJVGIIgNAVMhkOAA8g");
	this.shape_19.setTransform(314.6,481.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#733706","#FF5A00"],[0,1],2.9,60.7,2.9,-47.3).s().p("EgyBgDvIM0DwIeChfIAYgEQB6gWBqgmQBHgaAxggQALgSAHgVIBFkdIANgMIAmgBIAPAKIAkCwIACAEQAgBIA0AwQA0AwBPAjIARAFISkgmIBnALIOJDhIBTAkIJVGIIgGAXMhkRAA8g");
	this.shape_20.setTransform(314.4,481.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#733706","#FF5A00"],[0,1],3.1,60.7,3.1,-47.3).s().p("EgyAgDwIM1DxIeDhfIAYgEQB8gUBqgmQBHgZAwghQALgTAHgUIBCkeIAMgNIAmgBIAQAJIAhCxIACAEQAeBKAzAwQAyAwBSAhIARAFISkgmIBoAKIOJDhIBUAiIJVGJIABAZMhkVAA8g");
	this.shape_21.setTransform(314.3,481.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#733706","#FF5A00"],[0,1],2.9,60.7,2.9,-47.3).s().p("EgyCgDwIM2DxIeFhfIAXgEQB9gSBpglQBJgaAtghQANgTAGgUIBBkfIAKgOIAngBIAQAIIAeCyIABAEQAcBMAyAwQAyAwBTAgIASAEISlglIBnAIIOLDhIBTAhIJWGJIAIAbMhkZAA8g");
	this.shape_22.setTransform(314.5,481.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#733706","#FF5A00"],[0,1],2.7,60.7,2.7,-47.3).s().p("EgyEgDxIM3DzIeGhgIAYgDQB9gRBpglQBJgaAtgiQAMgSAHgUIA/kgIAIgPIAngBIARAHIAbCzIABAEQAZBOAyAwQAxAwBVAeIARAEISmglIBoAHIOLDhIBUAgIJWGJIAPAdMhkdAA8g");
	this.shape_23.setTransform(314.7,481.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#733706","#FF5A00"],[0,1],2.5,60.7,2.5,-47.3).s().p("EgyGgDxIM4DzIeHhgIAYgDQB/gPBogkQBKgaArgjQANgSAHgUIA9khIAHgQIAmgBIARAGIAZCzIABAFQAWBQAyAwQAwAwBXAdIARADISmglIBpAGIOLDhIBVAfIJWGJIAWAfMhkgAA8g");
	this.shape_24.setTransform(314.9,481.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#733706","#FF5A00"],[0,1],2.3,60.7,2.3,-47.3).s().p("EgyIgDyIM5D0IehhiQB/gNBoglQBKgaArgjQANgSAGgUIA7kiIAGgRIAmgBIASAFIAVC0IACAFQAUBSAvAwQAxAwBXAbIASADISoglIBoAFIOMDhIBVAdIJXGKIAcAhMhkjAA8g");
	this.shape_25.setTransform(315.1,481.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#733706","#FF5A00"],[0,1],2.1,60.7,2.1,-47.3).s().p("EgyJgDyIM5D0IeKhgIAYgCQCBgLBngkQBLgbApgkQAOgRAGgVIA3kiIAHgSIAlgBIATAEIATC1IABAEQARBVAvAwQAvAvBaAbIASABISogkIBpADIOMDiIBWAcIJXGKIAjAjMhknAA7g");
	this.shape_26.setTransform(315.2,481.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#733706","#FF5A00"],[0,1],1.9,60.7,1.9,-47.3).s().p("EgyLgDyIM6D0IejhiQCCgJBngjQBMgbAnglQAOgSAHgUIA0kjIAHgTIAkgBIAUADIAPC2IABAEQAPBXAvAvQAuAwBbAZIATABISogkIBpACIONDiIBXAbIJXGKIAqAlMhkrAA7g");
	this.shape_27.setTransform(315.4,481.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#733706","#FF5A00"],[0,1],1.8,60.7,1.8,-47.3).s().p("EgyNgDzIM7D1IelhhQCCgIBngjQBMgaAngnQAOgRAHgUIAxkjIAGgVIAkgBIAUACIAOC7QAMBZAuAvQAuAwBdAYIS7gkIBqABIONDiIBYAaIJYGJIAwAoMhkvAA7g");
	this.shape_28.setTransform(315.6,481.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#733706","#FF5A00"],[0,1],1.6,60.7,1.6,-47.3).s().p("EgyPgD0IM8D3IemhiQCEgHBmgiQBNgbAlgmQAPgSAGgTIA0k6IA5AAIALC8QAKBaAtAwQAtAwBfAWIS8gkIBpAAIPmD6IJZGKIA3ApMhkzAA8g");
	this.shape_29.setTransform(315.8,481.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#733706","#FF5A00"],[0,1],1.4,60.7,1.4,-47.3).s().p("EgyRgD0IM9D3IenhiQCFgEBlgiQBPgbAkgnQAOgRAHgVIAwk7IA6gBIAIC8QAHBeAsAwQAsAuBhAWIUngnIPnD6IKXG2Mhk3AA7g");
	this.shape_30.setTransform(316,481.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IeohiQCHgCBkgiQBygnAVhBIAtk9IA7gCIAEC9QAGBfArAwQArAvBiAUIUogoIPoD4IKfG4Mhk6AA8g");
	this.shape_31.setTransform(316.2,481.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IeahmQCJgCBogiQB3gnAXhDIAuk3IA7gCIAIC9QAHBfAwAuQAtAuBlATIUZgkIPoD4IKfG4Mhk6AA8g");
	this.shape_32.setTransform(316.2,481.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IeNhqQCLgCBqgiQB+gnAYhDIAvkzIA7gCIALC9QAKBfA0AsQAuAtBoASIULggIPoD4IKfG4Mhk6AA8g");
	this.shape_33.setTransform(316.2,481.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4Id+hvQCPgCBtghQCCgnAbhFIAwktIA7gCIAOC9QAMBeA5AsQAwAqBqASIT9gcIPoD4IKfG4Mhk6AA8g");
	this.shape_34.setTransform(316.2,481.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IdxhzQCRgCBvghQCJgoAchFIAxkoIA7gCIARC9QAOBdA+ArQAyAoBtARITugXIPoD4IKfG4Mhk6AA8g");
	this.shape_35.setTransform(316.2,481.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4Idih3QCUgCByghQCPgoAdhHIAzkiIA7gCIAUC9QARBdBCApQA0AoBvAPITggTIPoD4IKfG4Mhk6AA8g");
	this.shape_36.setTransform(316.2,481.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IdVh7QCWgCB1ghQCVgoAehIIA0kdIA7gCIAXC9QAUBcBGAoQA2AmByAPITRgPIPoD4IKfG4Mhk6AA8g");
	this.shape_37.setTransform(316.2,481.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IdGiAQCagBB3giQCagoAhhIIA1kYIA7gCIAbC9QAVBbBLAnQA3AlB1AOITDgLIPoD4IKfG4Mhk6AA8g");
	this.shape_38.setTransform(316.2,481.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4Ic5iDQCbgDB7ggQCggoAihLIA2kSIA7gCIAeC9QAYBbBPAmQA5AiB3ANIS1gGIPoD4IKfG4Mhk6AA8g");
	this.shape_39.setTransform(316.2,481.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IcqiIQCfgCB+ggQClgpAkhLIA3kNIA7gCIAhC9QAbBaBTAlQA7AhB6AMISmgCIPoD4IKfG4Mhk6AA8g");
	this.shape_40.setTransform(316.2,481.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IcciMQCigDCAggQCrgpAmhLIA4kIIA7gCIAkC9QAdBaBYAiQA9AhB8ALISYACIPoD4IKfG4Mhk6AA8g");
	this.shape_41.setTransform(316.2,481.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IcPiQQCjgCCEggQCxgqAnhMIA5kDIA7gCIAnC9QAgBZBcAiQA/AfB+AKISKAGIPoD4IKfG4Mhk6AA8g");
	this.shape_42.setTransform(316.2,481.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IcAiVQCngCCGggQC3gpAohOIA7j9IA7gCIArC9QAhBYBhAhQBAAdCCAJIR7ALIPoD4IKfG4Mhk6AA8g");
	this.shape_43.setTransform(316.2,481.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IbziYQCpgDCIgfQC9gqAqhPIA8j4IA7gCIAuC9QAkBYBlAfQBCAcCEAJIRtAOIPoD4IKfG4Mhk6AA8g");
	this.shape_44.setTransform(316.2,481.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IbkidQCsgDCMgfQDCgpArhQIA+jzIA7gCIAwC9QAnBXBqAeQBEAaCHAIIReATIPoD4IKfG4Mhk6AA8g");
	this.shape_45.setTransform(316.2,481.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IbXihQCvgDCNgeQDJgqAshSIA/jtIA7gCIA0C9QApBWBuAdQBGAZCJAHIRQAXIPoD4IKfG4Mhk6AA8g");
	this.shape_46.setTransform(316.2,481.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IbIilQCygDCRgfQDOgqAvhSIA/joIA7gCIA3C9QArBVBzAcQBHAYCMAGIRCAbIPoD4IKfG4Mhk6AA8g");
	this.shape_47.setTransform(316.2,481.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4Ia7ipQC0gDCTgfQDUgqAwhUIBBjiIA7gCIA6C9QAtBVB4AbQBJAWCPAEIQzAgIPoD4IKfG4Mhk6AA8g");
	this.shape_48.setTransform(316.2,481.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IasiuQC4gCCWgeQDZgsAyhUIBCjdIA7gCIA+C9QAvBUB8AaQBLAUCRAFIQlAjIPoD4IKfG4Mhk6AA8g");
	this.shape_49.setTransform(316.2,481.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IaeiyQC6gCCZgfQDfgrA0hVIBDjYIA7gCIBAC9QAzBTCAAZQBNATCUADIQWAoIPoD4IKfG4Mhk6AA8g");
	this.shape_50.setTransform(316.2,481.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IaRi2QC8gDCbgeQDmgrA0hXIBFjSIA7gCIBDC9QA2BTCEAXQBOARCWADIQJAsIPoD4IKfG4Mhk6AA8g");
	this.shape_51.setTransform(316.2,481.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IaCi6QC/gDCegeQDrgsA3hWIBGjOIA7gCIBHC9QA3BTCJAVQBQAQCZACIP6AwIPoD4IKfG4Mhk6AA8g");
	this.shape_52.setTransform(316.2,481.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IZ1i/QDBgDChgdQDxgsA4hYIBHjIIA7gCIBKC9QA5BSCOAUQBSAPCcABIPrA0IPoD4IKfG4Mhk6AA8g");
	this.shape_53.setTransform(316.2,481.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IZmjCQDFgDCjgeQD3gsA6haIBIjCIA7gCIBNC9QA8BRCSAUQBTANCfgBIPdA5IPoD4IKfG4Mhk6AA8g");
	this.shape_54.setTransform(316.2,481.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IZZjHQDHgDCmgdQD8gsA8haIBJi+IA7gCIBRC9QA9BRCXASQBVALChgBIPPA9IPoD4IKfG4Mhk6AA8g");
	this.shape_55.setTransform(316.2,481.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,60.8,1.2,-47.2).s().p("EgyTgD0IM+D4IZKjLQDLgDCogdQECgsA+hcIBKi4IA7gCIBTC9QBBBQCbARQBXAKCjgCIPBBBIPoD4IKfG4Mhk6AA8g");
	this.shape_56.setTransform(316.2,481.3);

	this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).wait(1));

	// Layer 12
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF5A00").s().p("AAYAOIgxgFQgFgBgDgDQgDgEABgDQAAgFAEgDQADgDAFABIAxAFQAFAAADADQADAEgBADQAAAFgEADQgDADgEAAIgBAAg");
	this.shape_57.setTransform(317.4,427.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF5A00").s().p("AAVAOIgvgFQgKgIABgDQAAgFAEgDQAEgEAHABIAvAGQAKAHgBAEQgBAFgEACQgEADgFAAIgBAAg");
	this.shape_58.setTransform(317.7,427.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF5A00").s().p("AATAOIgtgFQgJgIAAgDQABgFADgDQAGgEAJABIAsAGQAJAHgBAFQgBAFgFACQgFACgEAAIgCAAg");
	this.shape_59.setTransform(317.9,427.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF5A00").s().p("AAQAOIgqgFQgJgJAAgBQABgFAEgEQAHgFALACQAUADAVAEQAIAHgBAFQgBAGgGABQgGABgEAAIgDAAg");
	this.shape_60.setTransform(318.2,427.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF5A00").s().p("AANAOIgogFQgIgJAAgBQACgFADgEQAIgGANADQATADAUAEQAHAIgCAGQgBAFgHABIgIABIgGgBg");
	this.shape_61.setTransform(318.5,427.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF5A00").s().p("AALAPIgmgFQgIgKAAgBQACgFAEgDQAIgHAQADQASADASAEQAGAJgCAGQgBAFgIAAIgKABIgFAAg");
	this.shape_62.setTransform(318.7,427);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF5A00").s().p("AAIAPQgTgCgRgDQgHgKAAgBQACgFAEgDQAJgIASAEQARADAQAFQAGAKgCAFQgCAGgIgBIgGAAIgLAAg");
	this.shape_63.setTransform(319,427);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF5A00").s().p("AAYAQIgSgBIgigFQgHgKAAgBIAGgJQALgIASAFQASACAOAGQAFAKgCAGQgCAFgIAAIgBAAg");
	this.shape_64.setTransform(319.3,427);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF5A00").s().p("AAWAQIgTgCQgRgCgOgDQgHgJAAgBQADgFAEgEQALgJAUAFQARADANAGQAEALgCAGQgCAEgIAAIgDAAg");
	this.shape_65.setTransform(319.6,427);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF5A00").s().p("AAVARIgVgCQgRgCgMgDIgGgLQADgFAEgEQAMgKAWAGQAQADALAGQAEAMgDAGQgBAEgHAAIgFAAg");
	this.shape_66.setTransform(319.9,426.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF5A00").s().p("AAUARIgUgDQgSgCgLgDIgGgKIAHgJQAOgLAXAGQAQAEAJAGQADANgDAFQgCAFgHAAIgFgBg");
	this.shape_67.setTransform(320.1,426.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF5A00").s().p("AASASIgVgEQgRgCgKgDIgFgKIAHgKQAPgLAZAHQAPADAIAHQACANgDAGQgCAFgHAAIgHgBg");
	this.shape_68.setTransform(320.4,426.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF5A00").s().p("AARASIgXgEQgQgCgJgDIgEgKIAHgKQAQgMAcAHQANAEAHAHQAAAOgDAGQgCAEgGAAIgIgBg");
	this.shape_69.setTransform(320.7,426.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF5A00").s().p("AAPATQgOgEgKgBQgPgCgHgDIgEgKIAHgKQARgMAeAHQAMAEAFAHQAAAPgDAGQgCAEgHAAIgJgBg");
	this.shape_70.setTransform(321,426.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF5A00").s().p("AANATQgNgEgMgBQgPgCgFgDIgEgKIAIgKQASgOAfAJQAMADAEAIQgBAQgEAGQgCAEgHAAIgKgCg");
	this.shape_71.setTransform(321.4,426.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF5A00").s().p("AAMATQgNgEgOgBQgOgCgEgDIgDgLIAJgJQASgPAiAJQAKAEACAIQgCAQgEAHQgCADgGAAQgEAAgHgCg");
	this.shape_72.setTransform(321.7,426.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF5A00").s().p("AAKAUQgOgFgOgCQgNgBgDgEQgDgDABgFIAAgCIAIgKQAUgPAkAKQAJADAAAJIgBAMQgBAFgEAGQgCAEgGAAQgFAAgIgCgAgkgCIAAAAIAAAAg");
	this.shape_73.setTransform(322,426.9);

	this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_57}]},43).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).wait(1));

	// Layer 2
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF5A00").s().p("AgfALQgEgDAAgFQgBgDADgEQADgDAFAAIAxgFQAFgBADADQAEADAAAFQABADgDAEQgDADgFABIgxAFIgBAAQgEAAgDgDg");
	this.shape_74.setTransform(317.4,427.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF5A00").s().p("AgfAKQgDgDAAgFQgBgDADgEQAFgEAHABIAugEQALANgDAEQgEADgGABIguAEQgFAAgEgDg");
	this.shape_75.setTransform(317.1,427.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF5A00").s().p("AgeAJQgDgDgBgFQAAgDADgEQAIgFAHADIArgEQALAOgEADQgFADgIABIgrAEIgBAAQgEAAgDgEg");
	this.shape_76.setTransform(316.8,427.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF5A00").s().p("AgfAJQgDgDAAgFQAAgDADgEQAKgHAJAEQAUAAAUgDQAJAOgDADQgHADgJABIgpAEQgEAAgEgEg");
	this.shape_77.setTransform(316.6,427.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF5A00").s().p("AgfAIQgCgDgBgFQAAgDAEgEQAMgIALAGQASAAASgCQAIAOgDACQgJAEgKABIgmADQgEgBgEgEg");
	this.shape_78.setTransform(316.3,427.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF5A00").s().p("AgfAJQgCgEAAgFQAAgDADgEQAOgJANAIQARAAARgCQAGAOgEADQgJADgMABIgjACQgFAAgDgEg");
	this.shape_79.setTransform(316.1,427.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF5A00").s().p("AgfAJQgCgEAAgFQAAgDAEgEQAQgLANAKQARABAPgCQAFAOgEACQgLADgNACIghACQgEgBgDgEg");
	this.shape_80.setTransform(315.8,427.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF5A00").s().p("AgYAOQgFAAgCgFQgCgEAAgFQAAgDAEgEQASgMAOAMQAQABAOgBQADANgEADQgMADgOABQgLABgNAAIgGAAg");
	this.shape_81.setTransform(315.6,427);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF5A00").s().p("AgZAPQgEgBgCgFQgDgEABgFQAAgDAEgEQAUgNAQANQAPACAMgBQACANgEACQgOADgPACIgVABIgHAAg");
	this.shape_82.setTransform(315.4,427);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF5A00").s().p("AgaAPQgEgBgCgFQgCgEAAgFQABgDAEgEQAWgPASAPQAOADAJgCQABAOgEACIgfAFIgRAAIgJAAg");
	this.shape_83.setTransform(315.2,426.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF5A00").s().p("AgbAPQgEgBgBgFQgCgEAAgFQABgEAEgEQAZgPATAQQAMAEAIgCQAAAOgFACQgQADgQABIgNABIgMgBg");
	this.shape_84.setTransform(315,426.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF5A00").s().p("AgbAQQgEgCgCgFQgCgEABgFQAAgEAFgEQAbgRAVATQALADAGgBQgCAOgEACIgkAEIgJABIgMgBg");
	this.shape_85.setTransform(314.8,426.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF5A00").s().p("AgdAQQgDgCgCgFQgBgEAAgFQABgEAFgEQAdgSAWAUQAKAEAEgBQgDAOgEABIgnAFIgGABIgNgCg");
	this.shape_86.setTransform(314.7,426.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF5A00").s().p("AgdAQQgEgCgBgFQgCgFABgEQABgEAFgEQAdgUAaAWQAIAFADgBQgFAOgEABIgpAFIgFAAQgGAAgFgCg");
	this.shape_87.setTransform(314.5,426.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF5A00").s().p("AgfARQgDgCgBgGQgCgFABgEQABgFAFgEQAfgUAcAXQAHAGABgBQgGAOgEABIgsAFIgCAAQgGAAgGgCg");
	this.shape_88.setTransform(314.3,426.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF5A00").s().p("AgfARQgEgCgBgGQgBgFABgEQABgFAFgEQAigWAdAaIAFAFQgHAOgFABIguAEIgDABQgFAAgDgDg");
	this.shape_89.setTransform(314.1,426.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF5A00").s().p("AghASQgEgDAAgFQgBgGABgEQABgFAFgEQAkgXAfAbQAEAFgCAAQgDAAAAAEQAAAEgDAEQgDADgFABIgxAFIgBAAQgEAAgDgDg");
	this.shape_90.setTransform(314,426.5);

	this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_74}]},43).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(1));

	// Layer 7
	this.instance_5 = new lib.plate_t_027("synched",0,false);
	this.instance_5.setTransform(640,360,1,1,0,0,0,640,360);

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// Lithosphere
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	this.shape_91.setTransform(344.5,482.7);

	this.shape_91.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(60));

	// Crust copy
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#793600").s().p("AqcmsIJfh9IBiAAIB4AeIIBAdIAAQEI06AUg");
	this.shape_92.setTransform(321,481.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#793600").s().p("AqcmsIJsh9IAJAAIAAElIAOAAIAAklIA+AAIB4AeIIBAdIAAQEI06AUg");
	this.shape_93.setTransform(321,481.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#793600").s().p("AqcmrIBCgOIA2gLIAvgKIA+gNIAKgCIA9gNIAagFIAKgCIAsgJIA/gNIArgJIAkgHIAjgHIA8gMIAJAAIABBRIABDVIAOAAIABkjIA9gCIALADQAxANAxAKIAKADQA2ACA4AEIAmACIAlACIAmACIBIAEIApACIAPABIA7AEIAkADIAtADIAVABIAAAaIABAdIAAAwIACObI05AXg");
	this.shape_94.setTransform(321,481.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#793600").s().p("AqdmqIBDgOQAbgHAagFIAvgKIA+gOIAKgCIA9gMIAZgFIALgCIAsgJQAegIAhgFIAqgKIAkgHIAjgGQAegHAegFIAJAAIACBRIABDUIAOAAIACkgIA8gCIALACQAwANAyAJIAKACQA1ABA3AFIAmACIAmACIAmADQAkABAkADIAoACIAQABIA7AFIAjACIAuADIAVABIAAAaIABAcIACAwIACObIhcAFIzdATg");
	this.shape_95.setTransform(321,481.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#793600").s().p("AqdmqIBDgNQAagIAbgFQAYgGAXgEIA+gNIAKgCIA8gOIAagEIAKgCIAsgKQAegIAggEIArgLIAkgHIAigFQAegIAfgFIAJAAIACBRIACDVIAOABIADkfIA6gEIALADQAwANAxAHIAKACQA2ABA3AFIAmABIAlACIAmAFQAkAAAkADIAoACIAQABIA7AFIAjADQAWABAXACIAVABIACAaIABAcIACAvIADA0IAANnIhaAGIzeAUg");
	this.shape_96.setTransform(321,481.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#793600").s().p("AqdIBIAAuqIBDgOQAagIAbgFQAXgGAYgDQArgMASgDIAKgBIA9gOIAZgFIALgBQAWgFAVgGQAdgIAhgEIAqgLIAkgHQASgDARgBQAegIAegGIAJAAIADBRIADDVIANABIAEhOIAAjPIA5gEIAKACQAxAPAxAEIAKADQA1gBA3AGIAmABIAmADIAlADQAkABAkAFIAoACIAQAAQAdABAeAEIAiADQAXAAAXADIAVABIACAaIABAbIADAvIAEAzIAANoIhYAIIzfATg");
	this.shape_97.setTransform(321,481.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#793600").s().p("AqdICIAAuqIBEgOQAZgJAagFQAXgGAYgDIA9gPIALgCIA7gNIAZgEIALgCQAXgFAUgGQAdgJAigDQAUgHAWgEIAkgHIAhgFQAfgIAdgFIAJAAIAFBQIADDWIANABIAFhMIAAjOIA4gGIAKABQAwAQAxADIAJACQA2gCA3AIIAmAAQATABATACIAlAEQAjAAAlAFIAnACIARABQAdABAeAEIAiAEQAWgBAXADIAWACIACAZQgBAMACAPIAEAuIAFAyIAANpIhWAKIzgATg");
	this.shape_98.setTransform(321,481.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#793600").s().p("AqdIEIAAusIBEgNQAYgKAagEQAYgIAYgCQArgMARgDIAKgCQAfgIAegGIAZgEIAKgCQAXgEAUgHQAcgJAjgDQAUgHAVgEIAkgHQASgDAQgBQAegJAegFIAJABIAFBQIAEDVIAMABIAGhJIAAjOIA3gIIAKACQAvAQAxABIAKACQA0gDA4AJIAmAAQATAAATADIAlAFQAjgBAlAGIAoACIAQAAQAcABAfAFQARABAQADQAXgBAXAEIAVABIADAZQgBALADAPIAEAuIAGAxIAANqIhUALIziAUg");
	this.shape_99.setTransform(321,481.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#793600").s().p("AqdIFIAAusIBDgOQAZgKAagEQAXgIAYgCQArgMASgDIAKgCIA8gOIAYgEIALgCQAXgEATgIQAcgJAjgCQAUgHAVgFIAkgHQASgDAQAAQAegKAegEIAJAAIAGBQIAEDVIANACIABgkIAFgjIAAjOIA2gJIAKABQAvARAxAAIAJABQA0gDA4AJIAmAAQATAAATADQAUACARADQAjgBAkAGIAoACIARABQAcAAAfAFQARACAQADQAWgBAYAEIAVABIACAZQABALACAOQADAVACAZIAHAwIAANqIhTAOIziATg");
	this.shape_100.setTransform(321,481.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#793600").s().p("AqdIGIAAutIBDgMQAYgMAbgEQAXgIAXgCQArgMASgDIAKgCIA8gOIAYgFIALgBQAXgFATgHQAcgKAjgCQAUgHAVgFIAkgHQASgDAQABQAdgLAegEIAJABIAHBPIAFDWIAMACIABgiIAGgiIAAjPIA1gKIAKABQAuARAxgCIAKABQA0gEA3AKIAnAAQASAAATACIAlAHQAjgCAkAHIAoACIARABQAbAAAfAFQASABAQAEQAWgBAXAEIAVABIADAZQABAKADAOQADAUACAaIAIAvIAANsIhRAOIzjAUg");
	this.shape_101.setTransform(321,481);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#793600").s().p("AqdIIIAAuuIBDgNQAYgMAagEQAYgIAXgCQArgMASgDIAKgCIA8gPIAYgDIAKgDQAXgEATgIQAbgKAjgBQAUgIAVgFIAkgHQASgCAQAAQAdgLAegDIAJAAIAIBQIAFDVIANADIABghIAHgiIAAjPIAzgKIAKAAQAuASAxgDIAJABQA0gGA4ALIAmAAQATAAATADQAUACAQAEQAjgCAkAHIAoACIARABQAbAAAfAGQASACAQADQAVgBAYAEIAVABIAEAZQAAAKADAOQAEATACAaIAJAvIAANrIhPARIzlATg");
	this.shape_102.setTransform(321,481);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#793600").s().p("AqdIJIAAuvIBDgMQAXgNAbgEQAXgJAYgBQApgMATgDIAKgCQAfgJAcgHIAZgDIAKgCQAXgEATgJQAagKAkgBQAUgIAUgFIAkgGQATgDAPABQAdgMAdgDIAJAAIAJBQIAGDWIAMACIACgeIAHghIAAjPIAzgMIAJAAQAvASAwgFIAKAAQAzgFA4AMIAmgBQASAAAUACQATADAQAFQAjgDAkAIIApADIAQAAQAcgBAfAGQASACAPAEQAWgCAYAFIAUABIAEAZQABAJAEAOQAEAUACAZIALAuIAANrIhPATIzlAUg");
	this.shape_103.setTransform(321.1,480.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#793600").s().p("AqdILIAAuwIBDgNQAXgNAbgEQAXgJAXAAQAqgNASgDIALgCQAfgJAcgHIAYgDIAKgCQAXgEATgJQAagLAkAAQATgJAVgFIAkgGQASgDAQACQAdgMAdgEIAJABIAJBPIAHDWIAMADIACgdIAIggIAAjPIAxgNIAJAAQAuATAxgIIAJABQAzgHA4ANIAngBQASAAATADQAUADAQAEQAigDAlAJIAoACIAQAAQAcAAAfAHQASABAPAEQAVgCAYAFQALAAAKACIAEAYQABAIAEAPQAFASACAaIAMAtIAANtIhNAUIzmAUg");
	this.shape_104.setTransform(321.1,480.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#793600").s().p("AqdIMIAAuwIBDgNQAXgOAagEQAXgJAYAAQAqgNARgDIALgCQAfgKAcgGIAYgDIAKgCQAXgEATgKQAZgLAkABQAUgJAVgFQASgFASgCQARgDAQACQAcgMAegDIAJABIAKBPIAIDWIALADIACgbIAJggIAAjPIAwgPIAJAAQAtAUAxgJIAKAAQAxgIA5AOIAngBQASgBAUAEQATADAQAFQAigEAkAKIApACIAQAAQAbgBAgAHQASACAOAEQAWgCAYAFIAVACIAEAYQABAIAFAOQAEASADAaIANAsIAANtIhLAWIznAUg");
	this.shape_105.setTransform(321.1,480.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#793600").s().p("AqeIOIAAuyIBEgMQAWgPAagEQAXgJAYAAQAqgOASgCIAKgCQAfgKAcgHQAGAAARgDIALgCQAXgEASgKQAZgLAlABQATgJAVgFQASgFASgCQASgDAPADQAdgNAdgDIAJABIALBPIAIDWIAMADIABgZIAKgfIAAjQIAvgPIAJAAQAtAUAwgLIAJAAQAzgJA4APIAngBQASgBAUADQAUAEAOAFQAjgEAkAKIAoACIARAAQAagBAhAIQASACAOAEQAVgCAYAFIAVACIAFAYQABAHAFAOQAFASADAaIAOArIAANuIhJAYIzpAUg");
	this.shape_106.setTransform(321.1,480.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#793600").s().p("AqeIPIAAuxIBEgOQAWgPAagEQAXgJAYAAQApgOASgCIALgDQAfgKAcgGIAXgDIAKgBQAXgFASgKQAYgMAmACQATgKAUgFQASgFATgCQARgCAPADQAdgOAdgCIAJABIAMBPIAJDWIALADIACgYIALgeIAAjQIAugQIAIgBQAtAVAwgMIAJAAQAygKA5APIAmgCQATAAATAEQAUAEAOAFQAigFAlALIAoACIARAAQAagCAhAJQASABAOAGQAVgDAYAGIAVABIAGAYQAAAHAFAOQAGARADAbIAPApIAANvIhHAaIzqATg");
	this.shape_107.setTransform(321.1,480.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#793600").s().p("AqeIRIAAuzIBEgNQAWgQAZgDQAYgKAXAAQApgOATgCIAKgCQAfgLAcgHQAFABASgDIAKgCQAXgEARgLQAYgMAmADQATgLAVgFQASgEASgDQASgCAOAEQAdgOAdgDIAJABIANBPIAJDWIALAEIADgWIALgdIAAjQIAtgSIAIgBQAsAVAxgOIAIAAQAygLA5AQIAmgBQATgBATAEQAUAEAOAGQAigGAlAMIAoACIARAAQAagCAhAJQASACAOAFQAUgDAZAGIAVABIAGAZQAAAFAGAOQAGARAEAbIAPApIAANvIhGAbIzqAUg");
	this.shape_108.setTransform(321.1,480.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#793600").s().p("AqeISIAAuzIBEgNQAVgRAagDQAXgLAXACQApgPATgCIALgCQAegLAcgHQAFABASgDIAKgCQAXgEARgLQAYgNAmADQATgLAUgFQASgEATgCQARgDAOAEQAdgOAdgCIAJABIAOBOIAJDWIAMAFIACgVIAMgcIAAjQIArgTIAIgCQAsAXAxgQIAIgBQAxgLA6ARIAmgCQATgBAUAEQATAEAOAGQAigGAkAMIApADIARgBQAZgCAhAKQATABAOAGQATgDAZAGQALAAAKACIAHAYQAAAFAGAOQAHAQAEAbIAQAoIAANwIhEAdIzrATg");
	this.shape_109.setTransform(321.1,480.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#793600").s().p("AqeIUIAAu0IBEgOQAVgRAagDQAXgLAXACQApgPASgCIALgDQAfgKAbgIQAEABATgCIAKgCQAYgEAQgMQAXgNAmAEQATgLAVgGQASgEASgCQASgCAOAFQAdgQAcgCIAJACIAPBNIAKDXIALAFIADgTIAMgcIAAjQIAqgVIAIgBQAsAXAwgRIAJgBQAwgNA6ASIAmgCQATgCATAFQAVAEANAGQAigFAkAMIApACIAQAAQAagCAiAJQASADANAFQAUgDAZAGQAKAAALACIAGAYQABAEAGAOQAIAQADAaIASAoIAANxIhCAfIzsATg");
	this.shape_110.setTransform(321.1,480.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#793600").s().p("AqeIVIAAu1IBEgNQAUgSAagCQAXgMAXACQApgPATgCIAKgDQAggLAagHQAEABATgDIALgCQAXgDAPgNQAXgNAnAEQATgLAUgGQASgEASgCQATgCANAFQAdgQAcgCIAJACQAHAgAJAuIALDXIAKAEIADgRIANgbIAAjRIAqgVIAHgBQAsAXAwgTIAIgBQAxgOA6ATIAmgDQASgBAUAFQAVAFAMAGQAigGAkANIApACIAQAAQAagDAiALQASABANAHQAUgFAYAIQALgBAKACQAFAKACAOQABADAHAPQAHAOAEAbIATAnIAANyIhBAgIzsAUg");
	this.shape_111.setTransform(321.1,480.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#793600").s().p("AqeIXIAAu2IBEgNQAUgTAZgDQAXgMAYADQAogPATgDIAKgBQAggNAbgGQADABASgDIALgCQAXgEAQgMQAWgOAoAFQASgMAUgFQASgFATgCQASgCANAFQAcgQAdgBIAJACQAIAfAJAuIALDXIAKAFIADgPIAOgbIAAjQIApgXIAHgCQArAYAwgVIAJgBQAwgOA6ATIAmgCQASgCAUAFQAUAFANAGQAhgGAlAOIApABIAQAAQAagDAhALQATACAMAGQAUgEAZAHQALAAAKACQAEALADANQABADAHANQAIAQAFAbIATAlIAANyIg/AjIzuATg");
	this.shape_112.setTransform(321.1,480.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#793600").s().p("AqeIYIAAu3IBEgMQATgUAagCQAXgMAYACQAogPASgCIALgDQAfgMAbgHQACACAUgDIAKgCQAXgEAQgNQAVgOApAGQASgNAUgFQASgFASgCQASgCAOAGQAcgQAcgCIAJACQAIAfAKAuIAMDXIAKAGIADgOIAPgZIAAjRIAngYIAHgCQArAYAwgWIAIgCQAwgPA6AUIAmgDQATgBATAFQAVAFAMAHQAhgIAlAPIAoACIARAAQAZgDAiALQATACAMAHQAUgFAZAIQAKgBALACIAIAYIAIAQQAIAOAFAcIAUAkIAANzIg9AkIzvAUg");
	this.shape_113.setTransform(321.1,480.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#793600").s().p("AqeIZIAAu3IBDgNQAUgUAZgCQAXgNAYADQAngPAUgDIAKgCQAfgMAbgHQACACAUgEIAKgBQAXgEAPgNQAWgPAoAGQASgMAUgGQASgFASgCQATgBANAGQAbgRAdgBIAJABQAJAfAJAvIANDXIAKAFIADgLIAQgZIAAjRIAlgZIAHgDQArAZAwgYIAIgCQAwgQA6AVIAngDQARgBAUAFQAVAFAMAIQAggJAmAQIAoACIARgBQAZgDAiAMQASACANAHQAUgFAYAIQALgBAKACQAFAKADAOIAJAPQAJAOAFAcIAWAjIAAN0Ig8AmIzwATg");
	this.shape_114.setTransform(321.2,480.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#793600").s().p("AqeIbIAAu5IBDgMQAUgVAZgCQAXgNAXAEQAogRATgCIALgCQAfgMAagIQACACAUgDIAKgCQAXgEAPgNQAVgPApAHQASgNATgGQATgFASgBQASgCANAHQAcgSAcgBIAJACQAJAeAKAvIAODXIAKAGIADgKIAQgYIAAjRIAlgbIAHgCQApAaAxgbIAIgBQAugSA7AXIAngEQASgCAUAGQAUAFAMAIQAggJAlAQIApADIARgBQAZgEAhAMQAUACAMAIQATgFAZAIQALgBAKADQAFAJAEAOIAJAPQAJANAFAcIAXAiIAAN1Ig6AnIzxAUg");
	this.shape_115.setTransform(321.2,480.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#793600").s().p("AqeIdIAAu6IBDgMQAUgXAYgBQAYgNAXAEQAogRASgCIALgCQAggMAZgIQABACAVgDIAKgBQAXgFAPgNQAUgQAqAIQARgOAUgFQASgGASgBQASgCAOAHQAbgSAcgBIAJADQAKAeAKAuIAPDXIAJAHIADgIIARgYIAAjRIAkgcIAHgCQApAaAwgcIAIgCQAvgTA6AYIAngEQASgCAUAGQAVAGAKAHQAigIAkAQIApACIARgBQAYgDAiAMQATACAMAIQATgGAZAJQALgBALADQAEAKAFANIAJAOQAKANAFAcIAYAhIAAN2Ig4ApIzzAUg");
	this.shape_116.setTransform(321.2,480.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#793600").s().p("AqfIdIAAu5IBFgMQASgYAZgBQAXgOAXAFQAogRASgCIALgCQAggNAagIQAAADAUgEIALgBQAXgEAPgOQATgQAqAIQARgOAUgFQASgGATgBQASgBANAHQAbgTAcAAIAJACQAKAeALAuIAPDYIAJAGIADgGIASgXIAAjRIAjgdIAGgEQApAcAwgeIAIgCQAvgTA6AYIAngEQASgCAUAFQAVAGAKAJQAhgKAlARIApADIARgBQAYgEAiANQATACAMAJQATgHAZAJQALgBAKADQAFAJAEAOQABAAAJANQALAMAFAdIAZAgIAAN2Ig3AsIzzATg");
	this.shape_117.setTransform(321.2,480.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#793600").s().p("AqfIfIAAu6IBFgNQARgXAagCQAWgNAYAEQAngRATgCIALgCQAfgNAagIQAAADAUgDIALgCQAYgEAOgPQATgQAqAJQARgPAUgFQASgFASgCQASgBANAIQAbgUAcABIAJACQALAdALAvIAPDYIAJAGIAWgaIAAjSIAigeIAGgEQApAcAwgfIAIgDQAugUA7AZIAmgEQASgCAVAGQAUAGAKAJQAhgKAlASIApACIARgBQAYgEAiANQATACALAJQATgHAaAJQAKAAALACQAFAKAEANQABAAAKANQAKAMAGAcIAaAgIAAN2Ig1AtIz0AUg");
	this.shape_118.setTransform(321.2,480);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#793600").s().p("AqfIhIAAu8IBFgMQARgYAZgCQAXgOAYAFQAmgRATgCIALgCQAggOAZgHQAAACAVgDIAKgBQAYgEANgQQATgQArAJQARgOATgGQASgFATgCQASgBAMAJQAcgUAbAAIAJACQALAdAMAvIAQDYIAJAHIADgDIAUgVIAAjSIAggfIAGgEQApAcAvghIAIgCQAugVA7AZIAngEQASgCAUAGQAVAGAJAJQAhgKAkASIAqACIARgBQAXgEAjAOQATACALAJQATgHAZAJQALAAAKACQAGAKAFANQAAgBAKANQALALAGAdIAbAfIAAN3IgzAvIz1ATg");
	this.shape_119.setTransform(321.2,479.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#793600").s().p("AqfIiIAAu8IBFgNQARgZAYgBQAXgOAYAFQAngRASgCIALgCQAggOAagIQgCADAWgDIAKgCQAYgEANgPQASgRArAKQARgPAUgGQARgFATgCQASgBAMAJQAbgUAcAAIAJACQAMAdAMAwIAQDXIAJAIIADgCIAUgUIAAjSIAgghIAGgEQAoAdAwgjIAHgCQAugWA7AaIAmgEQATgDAUAHQAVAGAJAKQAggLAlATIApACIARgBQAXgFAkAPQATACALAJQASgHAaAJQAKAAALACQAFAKAFANQABgCALANQALALAGAdIAcAeIAAN4IgyAwIz2AUg");
	this.shape_120.setTransform(321.2,479.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#793600").s().p("AqfIjIAAu9IBFgMQARgaAYAAQAXgPAYAGQAmgSATgCIALgCQAggPAZgHQgCADAWgDIAKgCQAYgEANgQQASgRArAKQAQgPAUgGQASgFATgBQASgCAMAKQAbgVAbABIAJACQAMAcANAwIARDYIAIAHIAEABIAVgUIAAjSIAegiIAGgEQAnAeAwglIAIgDQAtgXA8AcIAmgFQASgDAUAHQAVAGAJAKQAhgLAkATIAqADIARgBQAXgFAjAOQATADALAJQASgHAaAKQAKgBALADQAFAJAFANQABgCALANQAMAKAGAdIAdAdIAAN5IgwAyIz3ATg");
	this.shape_121.setTransform(321.2,479.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#793600").s().p("AqfIlIAAu+IBFgMQAQgaAZgBQAXgPAXAGQAmgSATgCIALgCQAggPAZgHQgCADAWgDIAKgCQAYgEANgQQAQgSAtALQAQgQAUgFQARgGATgBQATgBALAKQAbgWAcABIAIADQANAbANAwIASDZIAIAHIADADIAXgUIAAjSIAcgjIAGgEQAnAeAvgmIAIgEQAtgXA8AcIAngFQARgDAUAHQAVAHAJAKQAggMAlAUIApADIARgBQAYgGAjAPQATADAKAJQATgHAZAKQALAAAKACQAHAJAFAOQABgDAKANQANAJAGAdIAeAcIAAN6IgtAzIz5AUg");
	this.shape_122.setTransform(321.2,479.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#793600").s().p("AqfImIAAu+IBEgMQAQgcAZAAQAXgPAXAGQAmgSATgCIALgCQAhgPAYgIQgDAEAWgEIALgBQAYgEAMgRQARgSAsAMQAQgRAUgFQARgGATgBQATgBALALQAbgXAbACIAJACQANAbANAxIATDYIAMAMIAWgTIAAjSIAcgkIAFgFQAnAfAwgoIAHgEQAtgYA8AdIAmgFQASgDAVAHQAUAHAJAKQAggMAlAVIApACIARgBQAXgFAkAPQATADAKAJQASgIAaALQAKAAALACQAGAJAFAOQABgEALANQAOAJAGAdIAfAbIAAN6IgsA2Iz6AUg");
	this.shape_123.setTransform(321.2,479.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#793600").s().p("AqfIoIAAvAIBEgMQAQgcAZAAQAXgQAXAHQAmgTATgBIALgDQAggPAYgHQgDADAXgDIAKgBQAYgEAMgSQAQgSAtAMQAQgQATgGQASgGATgBQASgBAMALQAagWAbABIAJACQANAbAOAxIATDYIAMAOIAYgSIAAjSIAaglIAFgFQAnAfAvgqIAIgDQAsgaA8AeIAngGQASgCAUAHQAVAHAIALQAggNAkAVIAqADIARgBQAWgGAlAQQATACAKAKQASgIAZALQALAAAKACQAHAJAGAOQAAgFAMANQAOAJAGAdIAgAaIAAN7IgqA3Iz7AUg");
	this.shape_124.setTransform(321.2,479.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#793600").s().p("AqfIpIAAvAIBEgMQAQgdAYAAQAXgQAYAHQAlgTATgBIALgDQAhgPAYgIQgEAEAXgDIAKgCQAYgEAMgRQAPgTAtANQARgRATgGQARgGATgBQATgBALAMQAagXAbABIAJADQAOAaAOAxIAUDZIAHAIIAFAIIAYgRIAAjTIAZgnIAFgFQAnAgAvgrIAHgEQAsgbA8AfIAngGQASgDAUAIQAVAHAIALQAfgNAlAWIAqACIARgBQAWgGAlARQATACAJAKQASgIAaALQALAAAKACQAHAJAGAOQAAgFAMAMQAOAJAIAdIAgAZIAAN8IgoA5Iz8AUg");
	this.shape_125.setTransform(321.2,479.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#793600").s().p("AqfIqIAAvAIBEgNQAPgdAZAAQAXgQAXAHQAlgTATgCIALgCQAhgQAYgHQgEAEAXgEIAKgBQAYgEAMgSQAPgTAtANQAQgRATgGQARgGATgBQATAAALAMQAbgYAbACIAJACQANAaAPAxIAUDZIAIAJIAEAJIAZgQIAAjTIAdguQAmAhAvgtIAIgEQAqgbA9AfIAngGQASgDAUAIQAWAHAGAMQAggOAlAXIApACIARgBQAXgHAlARQATADAJALQASgJAaALQAKAAAKACQAIAJAGAOQABgGALANQAPAHAHAeIAiAYIAAN9IgmA6Iz9AUg");
	this.shape_126.setTransform(321.3,479.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#793600").s().p("AqfIsIAAvBIBEgMQAPgfAZABQAWgRAYAIQAlgUATgBIALgDQAggQAYgHQgFAEAYgEIAKgBQAYgEALgSQAPgUAtAOQARgSASgGQASgFATgBQASgBAMANQAZgZAbACIAJADQAOAZAQAyIAVDZIAHAJIAEALIAagQIAAjTIAXgpIAEgGQAmAiAwgvIAHgFQArgcA8AhIAogHQARgDAVAIQAUAIAIAMQAfgPAlAYIApACIARgBQAXgHAlASQASACAKALQARgJAaAMQALgBAKADQAIAIAFAOQABgGANAMQAPAIAHAeIAjAXIAAN9IglA8Iz9AUg");
	this.shape_127.setTransform(321.3,479.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#793600").s().p("AqgIuIAAvDIBFgMQAOgfAZABQAWgRAYAIQAlgUATgBIALgDQAhgQAXgIQgFAFAXgEIALgBQAYgEALgTQAOgUAuAPQAQgSATgHQARgFATgBQATgBAKANQAbgZAaADIAJADQAPAYAQAyIAVDZIAHAKIAFAMIAagPIAAjTIAagwQAmAiAvgxIAHgEQArgeA8AiIAngHQASgDAVAIQAVAIAGAMQAggPAlAYIApADIARgCQAWgHAlASQATADAJALQASgJAaAMQAKgBALADQAHAIAGAOQABgHANANQAQAGAIAfIAkAWIAAN+IgkA+Iz/AUg");
	this.shape_128.setTransform(321.3,479.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#793600").s().p("AqgIvIAAvDIBFgMQAOggAYABQAXgSAXAJQAlgUATgCIAMgCQAggQAYgIQgGAEAXgDIALgCQAYgDALgUQANgUAvAPQAPgSATgGQASgGATgBQASAAALANQAagaAaADIAJADQAQAYAQAzIAWDZIAGAJIAFAPIAbgPIAAjTIAZgyQAlAjAvgzIAIgEQAqgeA9AiIAngHQARgDAVAIQAVAIAGAMQAfgPAlAZIAqACIARgBQAWgHAlASQATADAJALQARgKAaANQALgBAKADQAIAIAGAOQABgIAOANQAQAGAIAfIAlAVIAAN+IgiBAI0AAUg");
	this.shape_129.setTransform(321.3,479.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#793600").s().p("AqgIwIAAvEIBFgMQAOggAYABQAXgSAXAJQAkgVAUgBIALgCQAhgRAXgIQgHAFAZgEIAKgBQAYgEAKgUQANgUAwAQQAPgTATgGQARgGATgBQATAAAKAOQAagaAbACIAJADQAPAYARAzIAWDZIAHAKIAFAQIAcgOIAAjTIATgtIAEgGQAlAjAvg0IAHgFQAqgfA9AjIAngHQASgEAUAJQAWAIAFANQAfgQAlAZIAqADIARgCQAVgHAmATQATACAJAMQARgKAaANQALgBAKADQAIAIAHAOQABgIANAMQARAGAIAfIAmAUIAAN/IggBCI0BAUg");
	this.shape_130.setTransform(321.3,479.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#793600").s().p("AqgIyIAAvFIBFgMQANghAZABQAWgSAXAJQAkgVAUgBIAMgCQAggRAXgIQgHAFAZgEIAKgBQAYgEAKgUQAMgVAwAQQAPgTATgGQASgGASgBQATAAAKAOQAagaAaADIAJADQARAXARAzIAWDZIAGAKIAGASIAdgNIAAjTIASguIAEgHQAlAkAug2IAHgFQAqggA9AkIAngHQARgEAWAJQAVAIAFANQAfgQAlAaIAqACIARgBQAVgIAlATQAUADAIAMQARgKAbANQALgBAJADQAIAIAHAOQACgJAOAMQAQAGAJAfIAnATIAAOAIgfBDI0BAUg");
	this.shape_131.setTransform(321.3,479.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#793600").s().p("AqgIzIAAvGIBFgLQANgiAYABQAXgTAXAKQAkgVATgBIAMgCQAggSAXgIQgHAFAZgDIAKgCQAYgDAJgVQAMgVAxARQAPgUATgGQARgGATgBQASAAAKAPQAagbAbADIAJADQAQAXASAzIAXDaIAGAKIAGAUIAdgMIAAjVIAUg1QAlAkAvg4IAGgFQAqghA+AlIAmgHQASgEAVAIQAVAJAFAOQAfgRAlAbIApACIASgCQAVgIAmAUQATADAIAMQARgKAaANQALgBAKADQAIAIAIAOQABgKAOANQARAFAJAfIAoASIAAOAIgdBGI0CAUg");
	this.shape_132.setTransform(321.3,479.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#793600").s().p("AqgI1IAAvHIBFgLQAMgjAZACQAWgTAYAKQAjgWAUgBIALgCQAhgSAXgIQgIAFAYgDIALgBQAZgEAIgVQAMgWAwASQAQgUASgHQARgGAUAAQATAAAJAPQAZgcAbAEIAJADQAQAWATA0IAYDaIAGAKIAFAWIAegMIAAjUIATg3QAkAlAvg6IAHgFQApgiA+AmIAngIQARgEAVAJQAVAJAFAOQAfgSAlAcIApACIASgCQAUgIAnAUQATADAIANQAQgLAbAOQALgBAKADQAIAHAIAOQABgKAOAMQASAFAJAfIApARIAAOCIgbBHI0EAUg");
	this.shape_133.setTransform(321.3,479.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#793600").s().p("AqgI2IAAvHIBFgMQAMgjAYACQAWgUAYALQAjgWAUgBIALgCQAhgSAXgIQgJAFAZgEIALgBQAYgEAJgVQALgWAxASQAPgUASgHQASgGATAAQATAAAJAQQAZgdAbAEIAJAEQARAVASA0IAZDaIAGALIAFAXIAfgLIAAjUIASg5QAkAmAug7IAHgGQApgjA+AnIAngIQARgEAVAJQAWAJAEAOQAegSAlAcIAqADIASgCQAUgJAmAVQAUADAHANQARgLAaAOQALgBAKADQAJAHAHAOQACgKAPAMQASAEAJAfIAqAQIAAOCIgZBJI0FAUg");
	this.shape_134.setTransform(321.3,479);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#793600").s().p("AqgI4IAAvIIBFgMQAMgkAYACQAWgUAYALQAjgWATgBIAMgCQAhgTAWgIQgJAGAagEIAKgBQAYgEAJgWQAKgWAyATQAOgVATgHQARgGAUAAQASAAAJAQQAagcAaAEIAJADQARAVATA1IAaDZIAFAMIAGAYIAggKIAAjUIARg6QAjAmAug9IAHgGQAogkA+AoIAngIQASgFAVAKQAVAJAEAOQAegSAlAdIAqACIASgCQAUgIAmAVQAUADAHANQAQgMAbAPQALgBAKADQAJAHAIAOQABgLAPAMQATADAJAgIArAQIAAOCIgXBLI0GAUg");
	this.shape_135.setTransform(321.3,479);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#793600").s().p("AqgI5IAAvIIBFgMQALglAYACQAXgUAXAMQAjgXAUgBIALgCQAhgTAWgIQgJAGAagEIAKgBQAZgEAIgWQAKgWAyATQAOgWASgGQASgGATAAQATAAAJARQAZgeAaAEIAJAEQASAVATA0IAaDaIAFAMIAHAaIAggJIAAjVIARg8QAhAoAvg/IAGgGQAoglA+ApIAngJQASgEAVAJQAVAJAEAPQAegSAlAdIAqACIASgCQAUgJAmAWQAUADAHAOQAQgMAbAOQALgBAKAEQAJAHAIAOQABgMAQAMQATADAJAfIAsAPIAAODIgWBNI0GATg");
	this.shape_136.setTransform(321.3,478.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#793600").s().p("AqgI7IAAvKIBFgLQAKgmAYACQAXgUAXAMQAjgXAUgBIAMgCQAhgTAVgJQgKAHAbgEIAKgBQAYgEAIgXQAJgXAzAUQAOgWATgGQARgGAUAAQASAAAJARQAZgeAZAFIAJADQATAVAUA0IAbDaIAEAMIAHAcIAhgIIAAjVIAQg9QAgAoAvhBIAGgGQAogmA+AqIAogJQARgFAVAKQAVAKAEAPQAdgUAmAeIAqADIASgCQATgJAnAWQAUADAGAOQAQgNAbAPQALgBAKAEQAJAGAIAPQABgNARAMQATACAKAgIAtAOIAAOEIgUBOI0IAUg");
	this.shape_137.setTransform(321.4,478.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#793600").s().p("AqgI8IAAvKIBFgMQALgmAXACQAWgUAYAMQAigXAUgBIAMgCQAhgUAWgIQgLAGAagDIALgCQAYgDAIgXQAJgYAzAVQAOgWASgHQASgGATAAQASAAAJASQAZgfAZAFIAJAEQAUAUAUA1IAcDaIAEAMIAHAeIAhgIIAAjVIAPg/QAgApAuhCIAHgHQAngnA+ArIAngJQASgFAWAKQAVAKACAPQAfgUAlAfIAqACIASgCQATgJAnAWQAUADAGAPQAQgNAbAPQALgBAKAEQAJAGAJAPQABgNAQALQAVACAJAgIAuANIAAOFIgSBQI0JATg");
	this.shape_138.setTransform(321.4,478.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#793600").s().p("AqgI+IAAvLIBFgMQAKgmAYACQAWgVAXAMQAjgXAUgBIAMgCQAhgUAVgIQgMAGAbgDIALgBQAZgEAHgYQAIgXA0AVQAOgXARgGQASgHATAAQATABAIASQAagfAZAFIAJAEQATATAVA1IAcDbIAEAMIAHAgIAjgHIAAjWIANhAQAgApAuhEIAGgGQAngoA/ArIAngJQARgFAWAKQAVAKACAQQAegUAmAfIApACIASgCQAUgJAnAXQAUADAGAOQAPgNAbAQQALgBALADQAKAHAIAOQABgOARAMQAUABAKAhIAvAMIAAOFIgQBSI0KATg");
	this.shape_139.setTransform(321.4,478.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#793600").s().p("AqhI/IAAvMIBGgLQAKgoAXADQAWgWAYAOQAigYAUgBIAMgCQAhgUAVgJQgMAHAbgEIALgBQAZgDAGgYQAIgYA0AVQAOgXASgGQARgHAUABQASAAAJATQAYggAaAFIAJAEQATATAWA2IAcDaIAEANIAHAhIAjgGIAAjWIAMhBQAgAqAuhGIAGgHQAngpA/AtIAngKQARgFAWAKQAVAKACAQQAegUAlAgIAqACIASgCQATgKAoAXQAUADAFAPQAQgNAbAQQALgBAKAEQAKAGAIAOQACgOARALQAVABAKAhIAxALIAAOGIgQBTI0KAUg");
	this.shape_140.setTransform(321.4,478.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#793600").s().p("AqhJBIAAvNIBGgMQAJgoAYADQAWgWAYAOQAhgYAUgBIAMgCQAhgVAVgIQgMAHAcgEIAKgBQAZgEAGgYQAIgYA0AWQANgYASgGQASgHATABQATAAAIATQAYggAaAGIAJADQAUATAWA2IAdDaIAEANIAHAjIAkgFIAAjWIAKhDQAgArAuhIQACgEAEgDQAmgpA/AtIAngKQASgFAVAKQAWAKABARQAegVAlAgIAqADIASgDQATgKAoAYQAUADAFAPQAPgNAcAQQALgBAKAEQAKAGAJAOQABgPASAMQAVAAALAhIAxAKIAAOGIgOBVI0MAUg");
	this.shape_141.setTransform(321.4,478.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#793600").s().p("AqhJCIAAvOIBGgLQAJgpAXADQAWgWAYAOQAigZAUAAIAMgDQAggUAWgJQgOAIAdgEIAKgBQAZgEAGgZQAHgZA1AXQANgXARgHQASgHATABQATAAAIAUQAZghAZAGIAJAEQAUASAXA2IAeDbIAKAyIAkgFIAAjWIAKhEQAfArAuhKIAGgHQAmgqA/AuIAngLQARgFAWALQAWALABAQQAdgVAmAhIAqACIARgCQATgLApAZQATADAFAPQAQgNAbAQQALgBAKAEQALAGAJAOQABgQASAMQAWAAAKAhIAzAJIAAOHIgMBXI0NAUg");
	this.shape_142.setTransform(321.4,478.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#793600").s().p("AqhJDIAAvOIBGgLQAJgqAXADQAWgWAYAOQAhgZAUAAIAMgDQAhgUAVgJQgOAHAcgEIALgBQAYgDAGgZQAHgaA1AYQANgYASgHQARgHAUABQATAAAHAUQAYghAaAGIAJAEQAVASAWA2IAfDbIAKA0IAmgEIAAjWIAIhGQAeAsAvhLQACgFADgDQAmgrBAAvQAVgFARgGQASgFAVALQAWALABARQAegWAkAhIArADIASgDQASgKAoAYQAUAEAFAPQAPgOAcARQALgBAKAEQALAGAIAOQACgQATALQAWAAAKAhIA0AIIAAOIIgKBYI0OAUg");
	this.shape_143.setTransform(321.4,478.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#793600").s().p("AqhJFIAAvPIBGgLQAIgrAXAEQAWgXAYAOQAhgZAUAAIAMgCQAigVAUgJQgOAHAcgEIAKgBQAagDAGgaQAFgZA2AYQANgZASgHQARgGATAAQATABAIAVQAYgiAZAGQAFABAEADQAVARAXA3IAqERIAmgEIAAjWIAHhHQAeAsAuhMIAGgIQAlgsA/AvIAogKQARgGAWALQAVALABASQAdgXAmAiIAqADIASgDQASgLAoAaQAUADAFAQQAPgOAcARQAKgCAKAEQAMAGAIAOQACgQATALQAXgBAKAhIA1AHIAAOJIgJBaI0PAUg");
	this.shape_144.setTransform(321.4,478.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#793600").s().p("AqhJHIAAvQIBGgLQAHgrAYADQAWgXAXAPQAhgZAVgBIALgCQAigVAUgJQgOAIAcgEIAKgBQAagEAFgaQAFgaA2AZQANgZASgHQARgHAUABQATABAHAVQAYgjAZAHIAJAEQAWARAXA3IAqETIAngDIAAjWIAGhJQAdAtAuhPIAGgIQAlgtBAAxIAngLQARgGAWAMQAWALAAASQAdgYAlAjIAqADIASgDQASgLApAaQAUADAFARQAOgPAcARQALgBAKAEQALAFAJAPQACgSATAMQAXgCAMAhIA1AHIAAOJIgHBcI0QAUg");
	this.shape_145.setTransform(321.4,478.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#793600").s().p("AqhmHIBGgMQAHgrAXADQAWgXAYAPQAhgaAUAAIAMgCQAhgWAUgJQgPAIAdgEIALgBQAZgDAFgbQAFgaA2AZQANgZARgHQASgHATABQATABAHAVQAYgjAZAHIAJAFQAWAQAYA3IArEVIAngCIAAjWIAEhLQAeAuAuhQIAFgJQAlgtBAAxIAngLQARgGAWAMQAWALAAASQAdgYAlAkIAqADIASgDQASgMApAbQAUADAEARQAPgPAcARQALgBAKAEQALAFAJAPQACgSAUALQAXgCAMAhIA2AGIAAOKIgFBeI0+ASg");
	this.shape_146.setTransform(321.4,478.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#793600").s().p("AqhmHIBGgLQAHgsAXADQAWgYAYAQQAggaAUAAIAMgCQAigWAUgJQgQAIAegEIAKgBQAZgEAFgaQAEgbA3AaQAMgaASgHQARgHAUABQATABAHAWQAXgjAZAHIAJAEQAXAQAYA3IArEYIApgCIACkiQAeAuAthSIAGgIQAkgvBAAyIAogLQARgGAWALQAWAMgBASQAdgYAlAlIAqACIASgDQASgLApAaQAUAEAEARQAPgQAbASQALgBAKAEQAMAFAKAPQABgTAUALQAYgCAMAhIA3AFIAAOLIgDBfI1AAUg");
	this.shape_147.setTransform(321.4,478.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#793600").s().p("AqhmGIBFgLQAIguAXAEQAWgYAXAQQAggaAVAAIALgDQAigWAUgJQgQAJAdgEIALgBQAZgEAEgbQAEgbA3AaQAMgaASgHQARgHAUABQATABAHAXQAXgkAZAHIAJAEQAXAQAZA4IArEZIAqgBIABkkQAdAvAthUIAGgIQAkgwBAAzIAogMQAQgFAXALQAVAMgBATQAdgZAmAlIAqADIASgDQARgMAqAbQAUADADASQAPgQAcASQALgBAKAEQALAFALAPQABgUAUALQAZgDAMAiIA5AEIgDPtI1BAUg");
	this.shape_148.setTransform(321.5,478);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#793600").s().p("AqhmFIBFgLQAHguAXAEQAWgZAYARQgHgSAWACQARgLAUAAIAMgCQAhgXAUgJQgQAIAdgDIAKgCQAagDAEgbQAEgcA3AbQAMgaASgHQARgHATABQATABAHAXQAyhPA4B9IAsEcIAqAAIAAkmQAcAwAuhWQAjg+BGA5IAogMQARgGAWAMQAWALgCAUQAdgZAlAlIArACIASgCQARgMApAbQAVAEADARQAPgQAcATQAYgEATAaQABgUAVALQAZgDAMAiIA6ACIAAPwI1EAUg");
	this.shape_149.setTransform(321.5,477.9);

	this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92}]}).to({state:[{t:this.shape_93}]},3).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

	// Crust
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIKpiNIBkAAIB3AfIenBuIPeEXILaJrMhv3ABtg");
	this.shape_150.setTransform(345.2,479);

	this.shape_150.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.shape_150).wait(60));

	// volcaino
	this.instance_6 = new lib.plate_t_011();
	this.instance_6.setTransform(690.1,314);

	this.instance_6.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	// asthenosphare_texture
	this.instance_7 = new lib.plate_t_04();
	this.instance_7.setTransform(650,447);

	this.instance_7.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// asthenosphare
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.5,95.2,-46.5).s().p("EgpjAGoInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GIgOQGHgND1AFQD3AFAIACIcmAAIAJNag");
	this.shape_151.setTransform(966.2,490.5);

	this.shape_151.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.shape_151).wait(60));

	// Layer 8
	this.instance_8 = new lib.plate_t_035("synched",0);

	this.instance_8.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// Lithosphere
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,120.7,-1,-67.3).s().p("AQlJpMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFNgyEogYQEqgZC/gJQB+gEgUgCIFYgCMAidgAJIA9Tgg");
	this.shape_152.setTransform(961,475.4);

	this.shape_152.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.shape_152).wait(60));

	// Crust_texture
	this.instance_9 = new lib.plate_t_05();
	this.instance_9.setTransform(571.2,314.9);

	this.instance_9.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

	// Crust
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(217,4,61,0)").ss(1,1,1).p("AC+gCIl7AF");
	this.shape_153.setTransform(1068,383.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCDQIAAIGngBQDUAABtgCIF9gHIepABIA9RyMhvOABGg");
	this.shape_154.setTransform(930.2,409.2);

	this.shape_153.mask = this.shape_154.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_154},{t:this.shape_153}]}).wait(60));

	// grass
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4gCIFXgCMAh/gAGIA9RyMhvOABGg");
	this.shape_155.setTransform(929.9,405.3);

	this.shape_155.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.shape_155).wait(60));

	// sea
	this.instance_10 = new lib.plate_t_012();
	this.instance_10.setTransform(0,383.8);

	this.instance_10.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,313.7,1280,217.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.main_anim_plate_tectonics_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.plate_t_06();
	this.instance.setTransform(1087,481.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(33));

	// Layer 5
	this.instance_1 = new lib.plate_t_034("synched",0);
	this.instance_1.setTransform(888,495.3,1,1,0,0,0,20,5.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:1044},31).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj+ApfMAAAhS9MDH9AAAMAAABS9g");
	mask.setTransform(640,265.5);

	// Layer_4
	this.instance_2 = new lib.new_anim("synched",0,false);
	this.instance_2.setTransform(644,415);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(30));

	// Layer 8
	this.instance_3 = new lib.plate_t_018("synched",0,false);
	this.instance_3.setTransform(1053.1,429.3,0.365,0.365);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:1067,y:441.7,startPosition:9},22).to({y:444.7,startPosition:12},6).wait(2));

	// texture_for_asthenosphare1
	this.instance_4 = new lib.plate_t_037("synched",0);
	this.instance_4.setTransform(53.4,36.5,1,1,0,0,0,53.4,36.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34));

	// asthenosphare
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIFyiLIBvkZIA5gKIBQCgIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	this.shape.setTransform(316.2,482.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#733706","#FF5A00"],[0,1],3.8,59.3,3.8,-48.7).s().p("EgytgEDINyD6IdihkIFziLIBskZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4MhlvAA7g");
	this.shape_1.setTransform(317.4,482.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#733706","#FF5A00"],[0,1],6.4,59.3,6.4,-48.7).s().p("EgzGgEDIOlD6IdihkIFyiLIBskZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhmhAA7g");
	this.shape_2.setTransform(318.6,482.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#733706","#FF5A00"],[0,1],9,59.3,9,-48.7).s().p("EgzggEDIPZD6IdihkIFyiLIBskZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhnVAA7g");
	this.shape_3.setTransform(319.8,482.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#733706","#FF5A00"],[0,1],11.5,59.3,11.5,-48.7).s().p("Egz6gEDIQND6IdihkIFyiLIBskZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhoJAA7g");
	this.shape_4.setTransform(321,482.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#733706","#FF5A00"],[0,1],14.1,59.3,14.1,-48.7).s().p("Eg0UgEDIRBD6IdihkIFxiLIBtkZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mho9AA7g");
	this.shape_5.setTransform(322.2,482.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#733706","#FF5A00"],[0,1],16.7,59.3,16.7,-48.7).s().p("Eg0ugEDIR1D6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhpxAA7g");
	this.shape_6.setTransform(323.4,482.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#733706","#FF5A00"],[0,1],19.3,59.3,19.3,-48.7).s().p("Eg1HgEDISnD6IdihkIFwiLIBvkZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4MhqkAA7g");
	this.shape_7.setTransform(324.6,482.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#733706","#FF5A00"],[0,1],21.9,59.3,21.9,-48.7).s().p("Eg1igEDITcD6IdihkIFxiLIBukZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4MhrZAA7g");
	this.shape_8.setTransform(325.8,482.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#733706","#FF5A00"],[0,1],24.5,59.3,24.5,-48.7).s().p("Eg17gEDIUPD6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhsLAA7g");
	this.shape_9.setTransform(327,482.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#733706","#FF5A00"],[0,1],27.1,59.3,27.1,-48.7).s().p("Eg2VgEDIVDD6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mhs/AA7g");
	this.shape_10.setTransform(328.2,482.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#733706","#FF5A00"],[0,1],29.6,59.3,29.6,-48.7).s().p("Eg2vgEDIV3D6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhtzAA7g");
	this.shape_11.setTransform(329.4,482.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#733706","#FF5A00"],[0,1],32.2,59.3,32.2,-48.7).s().p("Eg3JgEDIWrD6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhunAA7g");
	this.shape_12.setTransform(330.6,482.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#733706","#FF5A00"],[0,1],34.8,59.3,34.8,-48.7).s().p("Eg3jgEDIXfD6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhvbAA7g");
	this.shape_13.setTransform(331.8,482.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#733706","#FF5A00"],[0,1],37.4,59.3,37.4,-48.7).s().p("Eg38gEDIYRD6IdihkIFwiLIBvkZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4MhwPAA7g");
	this.shape_14.setTransform(333.1,482.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#733706","#FF5A00"],[0,1],40,59.3,40,-48.7).s().p("Eg4XgEDIZGD6IdihkIFxiLIBukZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4MhxCAA7g");
	this.shape_15.setTransform(334.3,482.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#733706","#FF5A00"],[0,1],42.6,59.3,42.6,-48.7).s().p("Eg4wgEDIZ5D6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mhx1AA7g");
	this.shape_16.setTransform(335.5,482.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#733706","#FF5A00"],[0,1],45.2,59.3,45.2,-48.7).s().p("Eg5KgEDIatD6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhypAA7g");
	this.shape_17.setTransform(336.7,482.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#733706","#FF5A00"],[0,1],47.8,59.3,47.8,-48.7).s().p("Eg5kgEDIbhD6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4MhzdAA7g");
	this.shape_18.setTransform(337.9,482.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#733706","#FF5A00"],[0,1],50.3,59.3,50.3,-48.7).s().p("Eg5+gEDIcVD6IdihkIFwiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mh0RAA7g");
	this.shape_19.setTransform(339.1,482.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#733706","#FF5A00"],[0,1],52.9,59.3,52.9,-48.7).s().p("Eg6YgEDIdJD6IdghkIFyiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mh1FAA7g");
	this.shape_20.setTransform(340.3,482.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#733706","#FF5A00"],[0,1],55.5,59.3,55.5,-48.7).s().p("Eg6ygEDId8D6IdghkIFyiLIBvkZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4Mh15AA7g");
	this.shape_21.setTransform(341.5,482.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#733706","#FF5A00"],[0,1],58.1,59.3,58.1,-48.7).s().p("Eg7LgEDIevD6IdghkIFziLIBukZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4Mh2sAA7g");
	this.shape_22.setTransform(342.7,482.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#733706","#FF5A00"],[0,1],60.7,59.3,60.7,-48.7).s().p("Eg7lgEDIfjD6IdghkIFyiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mh3fAA7g");
	this.shape_23.setTransform(343.9,482.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#733706","#FF5A00"],[0,1],63.3,59.3,63.3,-48.7).s().p("Eg7/gEDMAgXAD6IdghkIFyiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mh4TAA7g");
	this.shape_24.setTransform(345.1,482.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#733706","#FF5A00"],[0,1],65.9,59.3,65.9,-48.7).s().p("Eg8ZgEDMAhLAD6IdghkIFyiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mh5HAA7g");
	this.shape_25.setTransform(346.3,482.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#733706","#FF5A00"],[0,1],68.4,59.3,68.4,-48.7).s().p("Eg8zgEDMAh/AD6IdghkIFyiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mh57AA7g");
	this.shape_26.setTransform(347.5,482.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#733706","#FF5A00"],[0,1],71,59.3,71,-48.7).s().p("Eg9NgEDMAizAD6IdghkIFyiLIBukZIA8gKIBQCgIEEDSIScgoIPoD5IKeG4Mh6vAA7g");
	this.shape_27.setTransform(348.7,482.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#733706","#FF5A00"],[0,1],73.6,59.3,73.6,-48.7).s().p("Eg9ngEDMAjmAD6IdghkIFyiLIBvkZIA7gKIBQCgIEFDSISbgoIPoD5IKfG4Mh7jAA7g");
	this.shape_28.setTransform(350,482.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#733706","#FF5A00"],[0,1],76.2,59.3,76.2,-48.7).s().p("Eg+AgEDMAkZAD6IdghkIFziLIBukZIA7gKIBQCgIEEDSIScgoIPoD5IKfG4Mh8XAA7g");
	this.shape_29.setTransform(351.2,482.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(5));

	// Layer 2
	this.instance_5 = new lib.plate_t_025("synched",0,false);
	this.instance_5.setTransform(640,360,1,1,0,0,0,640,360);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34));

	// Lithosphere
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#353535","#868584"],[0.129,1],48.9,40,48.9,-60.8).s().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	this.shape_30.setTransform(344.5,482.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#363636","#848382","#868584"],[0.125,0.973,1],50.5,40.8,50.5,-60.8).s().p("Eg4bgJrIP3EEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhwZABtg");
	this.shape_31.setTransform(346.6,482.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#363636","#828180","#878685"],[0.122,0.945,1],52.1,41.7,52.1,-60.7).s().p("Eg4sgJrIQZEEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhw7ABtg");
	this.shape_32.setTransform(348.7,482.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#373737","#7F7E7E","#878685"],[0.118,0.918,1],53.6,42.5,53.6,-60.7).s().p("Eg49gJrIQ7EEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhxdABtg");
	this.shape_33.setTransform(350.7,482.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#373737","#7D7C7B","#878685"],[0.11,0.89,1],55.2,43.3,55.2,-60.7).s().p("Eg5OgJrIRdEEIRWhFIIIAnIK8igIAKAzIAUgzICqAzIemBtIPeEYILaJrMhx/ABtg");
	this.shape_34.setTransform(352.8,482.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#383838","#7B7A79","#878685"],[0.106,0.863,1],56.8,44.2,56.8,-60.6).s().p("Eg5ggJrISBEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhyjABtg");
	this.shape_35.setTransform(354.8,482.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#393939","#797877","#888786"],[0.102,0.835,1],58.4,45,58.4,-60.6).s().p("Eg5xgJrISjEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhzFABtg");
	this.shape_36.setTransform(356.9,482.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#393939","#777675","#888786"],[0.098,0.808,1],59.9,45.9,59.9,-60.5).s().p("Eg6CgJrITFEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMhznABtg");
	this.shape_37.setTransform(359,482.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#3A3A3A","#757473","#888786"],[0.094,0.78,1],61.5,46.7,61.5,-60.5).s().p("Eg6TgJrITnEEIRXhFIIIAnIK7igIAKAzIAVgzICoAzIenBtIPeEYILaJrMh0KABtg");
	this.shape_38.setTransform(361.1,482.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#3B3A3A","#727171","#888786"],[0.09,0.753,1],63.1,47.5,63.1,-60.5).s().p("Eg6lgJrIULEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh0tABtg");
	this.shape_39.setTransform(363.1,482.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#3B3B3B","#706F6F","#898887"],[0.086,0.725,1],64.7,48.4,64.7,-60.4).s().p("Eg62gJrIUtEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh1PABtg");
	this.shape_40.setTransform(365.2,482.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#3C3B3B","#6E6D6C","#898887"],[0.078,0.698,1],66.2,49.2,66.2,-60.4).s().p("Eg7HgJrIVPEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh1xABtg");
	this.shape_41.setTransform(367.3,482.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#3C3C3C","#6C6B6A","#898887"],[0.075,0.671,1],67.8,50.1,67.8,-60.3).s().p("Eg7YgJrIVxEEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh2TABtg");
	this.shape_42.setTransform(369.3,482.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#3D3D3D","#6A6968","#8A8988"],[0.071,0.643,1],69.4,50.9,69.4,-60.3).s().p("Eg7qgJrIWVEEIRVhFIIIAnIK9igIAJAzIAUgzICoAzIepBtIPeEYILZJrMh21ABtg");
	this.shape_43.setTransform(371.4,482.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#3E3D3D","#686766","#8A8988"],[0.067,0.616,1],70.9,51.7,70.9,-60.3).s().p("Eg77gJrIW3EEIRWhFIIIAnIK8igIAKAzIAUgzICoAzIeoBtIPeEYILaJrMh3ZABtg");
	this.shape_44.setTransform(373.5,482.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#3E3E3E","#656464","#8A8988"],[0.063,0.592,1],72.5,52.6,72.5,-60.2).s().p("Eg8MgJrIXZEEIRWhFIIIAnIK8igIAKAzIASgzICqAzIeoBtIPeEYILaJrMh37ABtg");
	this.shape_45.setTransform(375.5,482.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#3F3E3E","#636262","#8A8988"],[0.059,0.565,1],74.1,53.4,74.1,-60.2).s().p("Eg8egJrIX9EEIRVhFIIJAnIK8igIAIAzIAUgzICqAzIeoBtIPeEYILaJrMh4eABtg");
	this.shape_46.setTransform(377.6,482.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#403F3F","#616060","#8B8A89"],[0.055,0.537,1],75.7,54.2,75.7,-60.2).s().p("Eg8vgJrIYfEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh5BABtg");
	this.shape_47.setTransform(379.7,482.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#404040","#5F5E5E","#8B8A89"],[0.051,0.51,1],77.3,55.1,77.3,-60.1).s().p("Eg9AgJrIZBEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh5jABtg");
	this.shape_48.setTransform(381.8,482.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#414040","#5D5C5B","#8B8A89"],[0.043,0.482,1],78.8,55.9,78.8,-60.1).s().p("Eg9RgJrIZjEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh6FABtg");
	this.shape_49.setTransform(383.8,482.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#414141","#5B5A59","#8C8B8A"],[0.039,0.455,1],80.4,56.8,80.4,-60).s().p("Eg9igJrIaFEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh6nABtg");
	this.shape_50.setTransform(385.9,482.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#424141","#585757","#8C8B8A"],[0.035,0.427,1],82,57.6,82,-60).s().p("Eg9zgJrIanEEIRXhFIIHAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh7KABtg");
	this.shape_51.setTransform(388,482.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#434242","#565555","#8C8B8A"],[0.031,0.4,1],83.5,58.4,83.5,-60).s().p("Eg+FgJrIbLEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh7tABtg");
	this.shape_52.setTransform(390,482.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#434242","#545353","#8C8B8A"],[0.027,0.373,1],85.1,59.3,85.1,-59.9).s().p("Eg+WgJrIbtEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh8PABtg");
	this.shape_53.setTransform(392.1,482.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#444343","#525151","#8D8C8B"],[0.024,0.345,1],86.7,60.1,86.7,-59.9).s().p("Eg+ngJrIcPEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh8xABtg");
	this.shape_54.setTransform(394.2,482.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#454444","#504F4F","#8D8C8B"],[0.02,0.318,1],88.3,61,88.3,-59.8).s().p("Eg+5gJrIczEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh9VABtg");
	this.shape_55.setTransform(396.2,482.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#454444","#4E4D4C","#8D8C8B"],[0.012,0.29,1],89.8,61.8,89.8,-59.8).s().p("Eg/KgJrIdVEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh93ABtg");
	this.shape_56.setTransform(398.3,482.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#464545","#4B4A4A","#8D8C8B"],[0.008,0.263,1],91.4,62.6,91.4,-59.8).s().p("Eg/bgJrId3EEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh+ZABtg");
	this.shape_57.setTransform(400.4,482.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#464545","#494848","#8E8D8C"],[0.004,0.235,1],93,63.5,93,-59.7).s().p("Eg/sgJrIeZEEIRWhFIIIAnIK6igIAKAzIAUgzICqAzIeoBtIPeEYILaJrMh+7ABtg");
	this.shape_58.setTransform(402.4,482.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],94.6,64.3,94.6,-59.7).s().p("Eg/+gJrIe8EEIRXhFIIIAnIK5igIAKAzIAVgKIAAgpICqAzIenBtIPeEYILaJrMh/dABtg");
	this.shape_59.setTransform(404.5,482.7);

	this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(5));

	// Crust
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIKpiNIBkAAIB3AfIenBuIPeEXILaJrMhv3ABtg");
	this.shape_60.setTransform(345.2,479);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#793600").s().p("Eg4bgJrIP3EEIRWhGIIIApIKoiNIBkAAIB4AfIemBuIPeEXILaJrMhwZABtg");
	this.shape_61.setTransform(347.3,479);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#793600").s().p("Eg4sgJrIQZEEIRWhGIIIApIKoiNIBkAAIB4AfIemBuIPeEXILaJrMhw7ABtg");
	this.shape_62.setTransform(349.4,479);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#793600").s().p("Eg49gJrIQ7EEIRWhGIIIApIKoiNIBkAAIB4AfIemBuIPeEXILaJrMhxdABtg");
	this.shape_63.setTransform(351.4,479);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#793600").s().p("Eg5OgJrIRdEEIRWhGIIIApIKoiNIBkAAIB4AfIemBuIPeEXILaJrMhx/ABtg");
	this.shape_64.setTransform(353.5,479);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#793600").s().p("Eg5ggJrISBEEIRWhGIIIApIKoiNIBkAAIB2AfIeoBuIPeEXILaJrMhyjABtg");
	this.shape_65.setTransform(355.5,479);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#793600").s().p("Eg5xgJrISjEEIRWhGIIIApIKoiNIBkAAIB2AfIeoBuIPeEXILaJrMhzFABtg");
	this.shape_66.setTransform(357.6,479);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#793600").s().p("Eg6CgJrITFEEIRWhGIIIApIKoiNIBkAAIB2AfIeoBuIPeEXILaJrMhznABtg");
	this.shape_67.setTransform(359.7,479);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#793600").s().p("Eg6TgJrITnEEIRXhGIIHApIKpiNIBjAAIB2AfIeoBuIPeEXILaJrMh0KABtg");
	this.shape_68.setTransform(361.8,479);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#793600").s().p("Eg6lgJrIULEEIRWhGIIIApIKoiNIBkAAIB2AfIeoBuIPeEXILaJrMh0tABtg");
	this.shape_69.setTransform(363.8,479);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#793600").s().p("Eg62gJrIUtEEIRWhGIIIApIKoiNIBkAAIB2AfIeoBuIPeEXILaJrMh1PABtg");
	this.shape_70.setTransform(365.9,479);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#793600").s().p("Eg7HgJrIVPEEIRWhGIIIApIKoiNIBkAAIB2AfIeoBuIPeEXILaJrMh1xABtg");
	this.shape_71.setTransform(368,479);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#793600").s().p("Eg7YgJrIVxEEIRWhGIIIApIKoiNIBiAAIB4AfIeoBuIPeEXILaJrMh2TABtg");
	this.shape_72.setTransform(370,479);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#793600").s().p("Eg7qgJrIWVEEIRVhGIIJApIKniNIBjAAIB4AfIeoBuIPeEXILaJrMh23ABtg");
	this.shape_73.setTransform(372.1,479);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#793600").s().p("Eg77gJrIW3EEIRWhGIIIApIKoiNIBiAAIB4AfIeoBuIPeEXILaJrMh3ZABtg");
	this.shape_74.setTransform(374.2,479);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#793600").s().p("Eg8MgJrIXZEEIRWhGIIIApIKoiNIBiAAIB4AfIeoBuIPeEXILaJrMh37ABtg");
	this.shape_75.setTransform(376.2,479);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#793600").s().p("Eg8egJrIX8EEIRXhGIIIApIKniNIBiAAIB5AfIenBuIPeEXILaJrMh4dABtg");
	this.shape_76.setTransform(378.3,479);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#793600").s().p("Eg8vgJrIYfEEIRWhGIIIApIKoiNIBiAAIB4AfIeoBuIPeEXILaJrMh5BABtg");
	this.shape_77.setTransform(380.4,479);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#793600").s().p("Eg9AgJrIZBEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh5jABtg");
	this.shape_78.setTransform(382.5,479);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#793600").s().p("Eg9RgJrIZjEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh6FABtg");
	this.shape_79.setTransform(384.5,479);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#793600").s().p("Eg9igJrIaFEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh6nABtg");
	this.shape_80.setTransform(386.6,479);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#793600").s().p("Eg9zgJrIanEEIRWhGIIIApIKniNIBkAAIB3AfIepBuIPeEXILZJrMh7KABtg");
	this.shape_81.setTransform(388.7,479);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#793600").s().p("Eg+FgJrIbLEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh7tABtg");
	this.shape_82.setTransform(390.7,479);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#793600").s().p("Eg+WgJrIbtEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh8PABtg");
	this.shape_83.setTransform(392.8,479);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#793600").s().p("Eg+ngJrIcPEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh8xABtg");
	this.shape_84.setTransform(394.9,479);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#793600").s().p("Eg+5gJrIczEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh9VABtg");
	this.shape_85.setTransform(396.9,479);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#793600").s().p("Eg/KgJrIdVEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh93ABtg");
	this.shape_86.setTransform(399,479);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#793600").s().p("Eg/bgJrId3EEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh+ZABtg");
	this.shape_87.setTransform(401.1,479);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#793600").s().p("Eg/sgJrIeZEEIRWhGIIIApIKmiNIBkAAIB4AfIeoBuIPeEXILaJrMh+7ABtg");
	this.shape_88.setTransform(403.1,479);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#793600").s().p("Eg/+gJrIe8EEIRXhGIIHApIKniNIBjAAIB4AfIeoBuIPeEXILaJrMh/dABtg");
	this.shape_89.setTransform(405.2,479);

	this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60}]}).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).wait(5));

	// volcaino
	this.instance_6 = new lib.plate_t_017();
	this.instance_6.setTransform(711.6,384);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:821.6},29).wait(5));

	// texture_for_asthenosphare
	this.instance_7 = new lib.plate_t_036("synched",0);
	this.instance_7.setTransform(53.4,36.5,1,1,0,0,0,53.4,36.5);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34));

	// asthenosphare
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.5,95.2,-46.5).s().p("EgpjAGoInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GIgOQGHgND1AFQD3AFAIACIcmAAIAJNag");
	this.shape_90.setTransform(966.2,490.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],93.4,129.5,93.4,-46.5).s().p("EgpQAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEDhHGXhbQGYhbHHg+QG3g3GHgOQGIgND1AFQD2AFAIACIcBAAIAKNag");
	this.shape_91.setTransform(968,490.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],91.5,129.5,91.5,-46.5).s().p("Ego9AGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGXhbHHg+QG4g3GHgOQGHgND2AFQD2AFAIACIbbAAIAKNag");
	this.shape_92.setTransform(969.9,490.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],89.6,129.5,89.6,-46.5).s().p("EgorAGoIn0nUIFehaIC+DaIGkgyQAJgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GHgOQGIgND1AFQD3AFAHACIa3AAIAKNag");
	this.shape_93.setTransform(971.7,490.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],87.8,129.5,87.8,-46.5).s().p("EgoYAGoIn0nUIFehaIC+DaIGkgyQAJgEEChFQEDhHGYhbQGXhbHHg+QG4g3GHgOQGHgND2AFQD2AFAIACIaRAAIAKNag");
	this.shape_94.setTransform(973.6,490.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],85.9,129.5,85.9,-46.5).s().p("EgoGAGoInznUIFdhaIC/DaIGjgyQAJgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GHgOQGIgND1AFQD3AFAHACIZtAAIAJNag");
	this.shape_95.setTransform(975.5,490.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],84,129.5,84,-46.5).s().p("EgnzAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEChHGZhbQGWhbHIg+QG3g3GHgOQGIgND1AFQD3AFAHACIZHAAIAKNag");
	this.shape_96.setTransform(977.3,490.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],82.2,129.5,82.2,-46.5).s().p("EgngAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGWhbHIg+QG4g3GHgOQGIgND1AFQD2AFAIACIYhAAIAKNag");
	this.shape_97.setTransform(979.2,490.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],80.3,129.5,80.3,-46.5).s().p("EgnNAGoIn0nUIFehaIC+DaIGkgyQAHgEEEhFQEDhHGYhbQGVhaHJg/QG3g3GIgOQGHgND2AFQD2AFAIACIX8AAIAJNag");
	this.shape_98.setTransform(981.1,490.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],78.5,129.5,78.5,-46.5).s().p("Egm7AGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGWhaHJg/QG3g3GHgOQGIgND1AFQD2AFAIACIXXAAIAKNag");
	this.shape_99.setTransform(982.9,490.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],76.6,129.5,76.6,-46.5).s().p("EgmoAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGVhaHJg/QG4g3GHgOQGIgND1AFQD2AFAIACIWxAAIAKNag");
	this.shape_100.setTransform(984.8,490.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],74.7,129.5,74.7,-46.5).s().p("EgmWAGoIn0nUIFehaIC+DaIGkgyQAJgEEDhFQEChHGZhbQGVhaHJg/QG3g3GHgOQGJgND0AFQD3AFAHACIWNAAIAKNag");
	this.shape_101.setTransform(986.6,490.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],72.9,129.5,72.9,-46.5).s().p("EgmDAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGZhbQGUhaHJg/QG4g3GHgOQGJgND0AFQD3AFAHACIVnAAIAKNag");
	this.shape_102.setTransform(988.5,490.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],71,129.5,71,-46.5).s().p("EglxAGoInznUIFehaIC+DaIGjgyQAIgEEEhFQEChHGZhbQGVhaHJg/QG3g3GHgOQGKgNDzAFQD4AFAGACIVDAAIAJNag");
	this.shape_103.setTransform(990.4,490.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],69.1,129.5,69.1,-46.5).s().p("EgleAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEChHGZhbQGUhaHKg/QG3g3GHgOQGJgND0AFQD3AFAHACIUdAAIAKNag");
	this.shape_104.setTransform(992.2,490.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],67.3,129.5,67.3,-46.5).s().p("EglLAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGVhaHJg/QG4g2GHgPQGJgND0AFQD3AFAHACIT3AAIAKNag");
	this.shape_105.setTransform(994.1,490.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],65.4,129.5,65.4,-46.5).s().p("Egk4AGoIn1nUIFehaIC+DaIGlgyQAHgEEEhFQEChHGZhbQGUhaHKg/QG4g2GHgPQGJgND0AFQD2AFAIACITSAAIAJNag");
	this.shape_106.setTransform(996,490.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],63.6,129.5,63.6,-46.5).s().p("EgkmAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEChHGZhbQGUhaHKg/QG4g2GHgPQGJgND0AFQD3AFAHACIStAAIAKNag");
	this.shape_107.setTransform(997.8,490.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],61.7,129.5,61.7,-46.5).s().p("EgkTAGoIn0nUIFehaIC+DaIGkgyQAHgEEEhFQEChHGZhbQGUhaHKg/QG4g2GHgPQGJgND0AFQD3AFAHACISHAAIAKNag");
	this.shape_108.setTransform(999.7,490.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],59.8,129.5,59.8,-46.5).s().p("EgkBAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEChHGZhbQGThaHLg/QG3g2GHgPQGKgNDzAFQD3AFAHACIRjAAIAKNag");
	this.shape_109.setTransform(1001.5,490.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],58,129.5,58,-46.5).s().p("EgjuAGoIn0nUIFehaIC+DaIGkgyQAHgEEFhFQEBhHGahbQGThaHKg/QG4g2GHgPQGKgNDzAFQD3AFAHACIQ9AAIAKNag");
	this.shape_110.setTransform(1003.4,490.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],56.1,129.5,56.1,-46.5).s().p("EgjcAGoInznUIFehaIC+DaIGjgyQAIgEEEhFQEChHGZhbQGThaHLg/QG3g2GIgPQGKgNDyAFQD4AFAGACIQZAAIAJNag");
	this.shape_111.setTransform(1005.3,490.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],54.2,129.5,54.2,-46.5).s().p("EgjJAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEBhHGahbQGShaHKg/QG5g2GHgPQGKgNDzAFQD3AFAHACIPzAAIAKNag");
	this.shape_112.setTransform(1007.1,490.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],52.4,129.5,52.4,-46.5).s().p("Egi2AGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEChHGZhbQGThaHJg/QG6g2GHgPQGKgNDzAFQD3AFAHACIPNAAIAKNag");
	this.shape_113.setTransform(1009,490.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],50.5,129.5,50.5,-46.5).s().p("EgijAGoIn1nUIFehaIC+DaIGlgyQAHgEEEhFQEChHGZhbQGShaHKg/QG6g2GGgPQGLgNDzAFQD2AFAHACIOpAAIAJNag");
	this.shape_114.setTransform(1010.9,490.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],48.7,129.5,48.7,-46.5).s().p("EgiRAGoIn0nUIFehaIC+DaIGkgyQAIgEEDhFQEChHGZhbQGShaHKg/QG6g2GHgPQGLgNDyAFQD4AFAGACIODAAIAKNag");
	this.shape_115.setTransform(1012.7,490.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],46.8,129.5,46.8,-46.5).s().p("Egh+AGoIn0nUIFehaIC+DaIGkgyQAHgEEEhFQEChHGZhbQGShaHKg/QG6g2GHgPQGLgNDyAFQD3AFAHACINdAAIAKNag");
	this.shape_116.setTransform(1014.6,490.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],44.9,129.5,44.9,-46.5).s().p("EghsAGoIn0nUIFehaIC+DaIGkgyQAIgEEEhFQEBhHGahbQGRhaHLg/QG5g2GHgPQGLgNDyAFQD4AFAGACIM5AAIAKNag");
	this.shape_117.setTransform(1016.4,490.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],43.1,129.5,43.1,-46.5).s().p("EghZAGoIn0nUIFehaIC+DaIGkgyQAHgEEFhFQEBhHGahbQGQhaHMg/QG5g2GHgPQGLgNDyAFQD3AFAHACIMTAAIAKNag");
	this.shape_118.setTransform(1018.3,490.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],41.2,129.5,41.2,-46.5).s().p("EghHAGoInznUIFehaIC+DaIGkgyQAHgEEEhFQEChHGZhbQGRhaHLg/QG5g2GIgPQGLgNDxAFQD4AFAHACILuAAIAJNag");
	this.shape_119.setTransform(1020.2,490.5);

	this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90}]}).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(5));

	// texture_for_Lithosphere
	this.instance_8 = new lib.plate_t_039("synched",0);
	this.instance_8.setTransform(53.4,36.5,1,1,0,0,0,53.4,36.5);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34));

	// Lithosphere
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,120.7,-1,-67.3).s().p("EAojAJuIkzgBIzLgEMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFNgyEogYQEqgZC/gJQB+gEgUgCIFYgCITIgEIEzgCIKigDIA9Tgg");
	this.shape_120.setTransform(961,475.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-2.9,120.7,-2.9,-67.3).s().p("EgoxAJdIq9qnIEFiVIFKgVIDbDnIDSgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFMgyEpgYQErgZC9gJQB/gEgVgCMAnQgALIA9Tgg");
	this.shape_121.setTransform(962.9,475.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-4.8,120.7,-4.8,-67.3).s().p("EgofAJdIq8qnIEEiVIFLgVIDbDnIDTgeIImiqQAFgDCzgyQCzgxEdhCQEchCFCg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAmqgALIA9Tgg");
	this.shape_122.setTransform(964.8,475.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-6.7,120.7,-6.7,-67.3).s().p("EgoMAJdIq8qnIEEiVIFKgVIDcDnIDTgeIImiqQAFgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC/gJQB+gEgVgCMAmEgALIA9Tgg");
	this.shape_123.setTransform(966.7,475.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-8.6,120.7,-8.6,-67.3).s().p("Egn5AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEchCFCg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAlfgALIA8Tgg");
	this.shape_124.setTransform(968.6,475.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-10.5,120.7,-10.5,-67.3).s().p("EgnmAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAk5gALIA8Tgg");
	this.shape_125.setTransform(970.5,475.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-12.4,120.7,-12.4,-67.3).s().p("EgnTAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAkTgALIA8Tgg");
	this.shape_126.setTransform(972.4,475.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-14.3,120.7,-14.3,-67.3).s().p("EgnAAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCzgxEdhCQEbhCFDg0QFMgyEpgYQEqgZC+gJQB/gEgVgCMAjtgALIA8Tgg");
	this.shape_127.setTransform(974.3,475.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-16.2,120.7,-16.2,-67.3).s().p("EgmtAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCygxEehCQEbhBFDg1QFMgyEpgYQEqgZC+gJQB/gEgVgCMAjHgALIA8Tgg");
	this.shape_128.setTransform(976.2,475.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-18.1,120.7,-18.1,-67.3).s().p("EgmaAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCygxEehCQEbhBFDg1QFMgyEpgYQEqgZC+gJQB/gEgVgCMAihgALIA8Tgg");
	this.shape_129.setTransform(978.1,475.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-20,120.7,-20,-67.3).s().p("EgmHAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCygxEehCQEbhBFDg1QFKgyErgYQEqgZC+gJQB/gEgVgCMAh7gALIA8Tgg");
	this.shape_130.setTransform(980,475.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-21.9,120.7,-21.9,-67.3).s().p("Egl0AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC5g1QCygxEdhCQEbhBFDg1QFLgyErgYQEqgZC+gJQB/gEgVgCMAhVgALIA8Tgg");
	this.shape_131.setTransform(981.9,475.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-23.8,120.7,-23.8,-67.3).s().p("EglhAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC5g1QCygxEdhCQEbhBFEg1QFKgyErgYQEqgZC+gJQB/gEgVgCMAgvgALIA8Tgg");
	this.shape_132.setTransform(983.8,475.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-25.7,120.7,-25.7,-67.3).s().p("EglOAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC5g1QCygxEehCQEahBFEg1QFKgyEqgYQErgZC+gJQB+gEgUgCMAgJgALIA8Tgg");
	this.shape_133.setTransform(985.7,475.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-27.6,120.7,-27.6,-67.3).s().p("Egk7AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqIC4g1QCygxEfhCQEahBFDg1QFLgyEqgYQErgZC+gJQB+gEgUgCIfjgLIA8Tgg");
	this.shape_134.setTransform(987.6,475.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-29.5,120.7,-29.5,-67.3).s().p("EgkoAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCzgxEdhCQEbhBFDg1QFLgyEqgYQEqgZC/gJQB/gEgVgCIe9gLIA8Tgg");
	this.shape_135.setTransform(989.5,475.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-31.4,120.7,-31.4,-67.3).s().p("EgkVAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCxgxEehCQEbhBFEg1QFJgyEsgYQEpgZC/gJQB/gEgVgCIeXgLIA8Tgg");
	this.shape_136.setTransform(991.4,475.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-33.3,120.7,-33.3,-67.3).s().p("EgkCAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCzgyQCxgxEehCQEbhBFEg1QFJgyEsgYQEpgZC/gJQB/gEgVgCIdxgLIA8Tgg");
	this.shape_137.setTransform(993.3,475.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-35.2,120.7,-35.2,-67.3).s().p("EgjvAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEfhCQEahBFEg1QFKgyEqgYQEqgZC/gJQB+gEgUgCIdLgLIA8Tgg");
	this.shape_138.setTransform(995.2,475.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-37,120.7,-37,-67.3).s().p("EgjcAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEehCQEahBFEg1QFLgyEqgYQErgZC+gJQB+gEgUgCIclgLIA8Tgg");
	this.shape_139.setTransform(997,475.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-38.9,120.7,-38.9,-67.3).s().p("EgjJAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEehCQEahBFEg1QFLgyEqgYQErgZC+gJQB+gEgUgCIb/gLIA8Tgg");
	this.shape_140.setTransform(998.9,475.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-40.8,120.7,-40.8,-67.3).s().p("Egi2AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCygxEehCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIbZgLIA8Tgg");
	this.shape_141.setTransform(1000.8,475.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-42.7,120.7,-42.7,-67.3).s().p("EgijAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIazgLIA8Tgg");
	this.shape_142.setTransform(1002.7,475.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-44.6,120.7,-44.6,-67.3).s().p("EgiQAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIaNgLIA8Tgg");
	this.shape_143.setTransform(1004.6,475.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-46.5,120.7,-46.5,-67.3).s().p("Egh9AJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgUgCIZngLIA8Tgg");
	this.shape_144.setTransform(1006.5,475.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-48.4,120.7,-48.4,-67.3).s().p("EghqAJdIq8qnIEEiVIFKgVIDcDnIDSgeIImiqQAGgDCygyQCxgxEfhCQEZhBFFg1QFKgyErgYQEqgZC/gJQB+gEgUgCIZBgLIA8Tgg");
	this.shape_145.setTransform(1008.4,475.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-50.3,120.7,-50.3,-67.3).s().p("EghYAJdIq8qnIEEiVIFLgVIDbDnIDTgeIImiqQAGgDCygyQCxgxEfhCQEahBFEg1QFKgyErgYQEqgZC/gJQB+gEgVgCIJHgGIPVgFIA9Tgg");
	this.shape_146.setTransform(1010.3,475.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-52.2,120.7,-52.2,-67.3).s().p("EghFAJdIq7qnIEDiVIFKgVIDdDnIDSgeIIliqQAIgDCxgyQCxgxEfhCQEZhBFDg1QFMgyErgYQEqgZC/gJQB+gEgUgCIFYgCIDIgEIPVgFIA9Tgg");
	this.shape_147.setTransform(1012.2,475.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-54.1,120.7,-54.1,-67.3).s().p("AY4JpMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAIgDCxgyQCwgxEghCQEZhBFDg1QFMgyErgYQEqgZC+gJQB/gEgUgCIFXgCICjgEIPVgFIA9Tgg");
	this.shape_148.setTransform(1014.1,475.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-56,120.7,-56,-67.3).s().p("Af9JuIkzgBIh/gEMg5pgAMIq9qnIEFiVIFKgVIDbDnIDSgeIImiqQAIgDCxgyQCxgxEfhCQEZhBFDg1QFMgyErgYQEqgZC+gJQB/gEgUgCIFXgCIB9gEIEzgCIKigDIA9Tgg");
	this.shape_149.setTransform(1016,475.4);

	this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120}]}).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(5));

	// texture_for_Crust
	this.instance_9 = new lib.plate_t_038("synched",0);
	this.instance_9.setTransform(53.4,36.5,1,1,0,0,0,53.4,36.5);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34));

	// Crust
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(217,4,61,0)").ss(1,1,1).p("AC+gCIl7AF");
	this.shape_150.setTransform(1068,383.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCDQIAAIGngBQDUAABtgCIF9gHIepABIA9RyMhvOABGg");
	this.shape_151.setTransform(930.2,409.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#793600").s().p("Eg3yAG6QCQkIDJjyIA9hIQCrjICoikQBHhFA/g7QBwhpBWhIICJh0QgFgFApgSQBQgMBvAWQAZAFAfALIAwATQA6AZBOApIA9AfQB8BECHBQIAHAFQCoBlB3BMIBFAsIA2AjIFCAqIL4BeQFeAGE1ADIERAAQDRAABugCIF8gHIMJAAIQ/ABIBVADIA9RtIhXADMhtSABDg");
	this.shape_152.setTransform(932.1,409.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#793600").s().p("Eg2jAOwIg7n5QCOkHDJjwIA8hJQCqjHCoijQBGhFA/g6QBvhpBVhIQCBhuAIgFQgEgGAogRQBPgPBtAUQAaAEAdALIAwARQA6AYBOAoIA9AfQB7BCCHBQIAIAFQCmBkB3BLIBFAsIA2AjIE/AuIClAYIJPBHQFbAIE0ADIEQABQDOAABwgCIF6gGIMGAAIQ6AAIBTAFIA7RoIhSAGMhrmABEg");
	this.shape_153.setTransform(933.9,409.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#793600").s().p("Eg2QAOtIg7n3QCOkGDHjwIA8hIQCpjGCniiQBGhFA+g6QBuhoBVhJQB+hrALgIQgEgFAngSQBQgQBqASQAaADAcAKIAvAQQA5AWBQAnIA8AeQB6BBCHBQIAJAFQCkBjB4BMIBEArIA2AjQChAaCbAYICkAaIJMBHQFYAIE0AFIEPAAQDMAABxgCIF4gGIMDAAIQ1ABIBQAIIA7RiIhPAJMhrGABEg");
	this.shape_154.setTransform(935.8,409.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#793600").s().p("Eg19AOpIg8n1QCOkEDGjvIA8hIQCojFCmiiQBGhEA+g7QBthnBUhIQB8hqANgJQgDgGAmgRQBPgTBoAQQAaACAbALQATAGAcAIQA4AVBRAmIA8AdQB5A/CIBRIAIAFQCjBhB4BMIBEArIA2AiQCgAdCZAZICiAcIJKBHQFWAJEyAGIEOABQDKgBBygBIF3gGIL/AAIQwAAIBOALIA6RdIhLALMhqmABEg");
	this.shape_155.setTransform(937.7,410);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#793600").s().p("Eg1rAOlIg6nyQCMkEDFjtIA8hIQCnjEClihQBFhEA+g7QBthmBUhIICIhzQgCgGAlgRQBQgVBkAOQAbABAaAKQARAGAdAGQA3AUBSAlIA8AdQB2A9CKBRIAIAFQCiBgB4BMIBEArIA2AiQCfAfCWAaICgAfIJIBGQFUAKEyAHIENABQDFAAB2gCIF0gFIL9AAIQrAAIBKANIA6RXIhJAPMhqFABEg");
	this.shape_156.setTransform(939.6,410.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#793600").s().p("Eg1YAOhIg6nwQCMkCDEjsIA7hIQCmjDCkihQBFhDA+g7QBrhmBUhIQB4hmAPgMQgBgHAkgRQBQgXBiANQAbAAAZAJQAQAGAeAFQA2ASBSAkIA8AcQB2A8CKBRIAIAFQCgBfB5BMIBEAqIA2AjQCeAhCUAcICfAgIJEBGQFSALExAIIEMABQDDAAB3gBIFzgFIL5gBIQmAAIBHAQIA6RSIhFARMhpmABEg");
	this.shape_157.setTransform(941.5,410.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#793600").s().p("Eg1FAOeIg6nuQCLkBDDjrIA7hHQCljDCjigQBEhDA+g6QBrhmBUhIICGhyQgBgHAkgQQBQgZBfAKQAbgBAYAJQAQAFAdAEQA2ARBTAjIA8AcQB0A6CLBRIAIAFQCfBeB5BLIBDArIA2AiQCeAkCSAdICdAiIJCBGIJ/AVIELABQDBAAB4gBIFxgFIL3AAIQggBIBEATIA6RNIhCATMhpFABEg");
	this.shape_158.setTransform(943.4,410.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#793600").s().p("Eg0zAOaIg5nrQCKkADCjqIA6hHQCljCCiifQBEhDA9g6QBrhlBThIICGhyQAAgHAigRQBQgbBdAJQAbgDAXAJQAPAFAeADQA0APBUAjIA8AaQBzA5CMBRIAIAFQCeBdB5BMIBDAqIA2AiQCdAmCPAeICcAkII/BGIJ8AXIEKACIE3gCIFxgEILzgBIQbAAIBBAVIA6RIIg/AVMholABFg");
	this.shape_159.setTransform(945.3,410.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#793600").s().p("Eg0gAOWIg5noQCKj/DAjpIA6hHQCkjAChifQBDhDA9g6QBqhkBThIICFhyQABgHAhgQQBRgeBaAIQAbgEAWAIQAOAEAfACQAzAOBVAiIA8AaQBxA2CMBSIAJAFQCcBbB6BMIBCAqIA2AiQCdApCMAfICbAmII8BFIJ5AaIEJABIE2gBIFvgEILwAAIQWgBIA+AXIA6RDIg8AYMhoFABFg");
	this.shape_160.setTransform(947.2,410.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#793600").s().p("Eg0NAOTIg5nmQCKj9C/jpIA5hGQCji/CgifQBDhCA9g6QBphjBThJQBthfAYgSQABgIAggQQBRgfBWAFQAcgFAVAIQANAEAgABQAyANBWAgIA7AZQBwA1CNBSIAJAFQCbBaB6BMIBDAqIA1AiQCcArCKAhICZAoII5BEIJ2AdIEIABIE1gBIFugEILtgBIQRgBIA7AaIA5Q+Ig5AbMhnkABFg");
	this.shape_161.setTransform(949.1,410.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#793600").s().p("Egz6AORIg5nkQCJj8C+jnIA5hGQCii/CgieQBChCA8g6QBphiBShJICEhxQACgIAggPQBQgiBVAEQAcgHAUAIQAMADAfAAQAyALBWAgIA8AZQBvAzCOBSIAIAFQCaBZB6BMIBCApIA2AiQCbAtCIAiICXArII3BEIJzAeIEHACIE0gBIFrgEILqAAIQMgCIA4AdIA5Q4Ig1AeMhnFABFg");
	this.shape_162.setTransform(950.9,410.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#793600").s().p("EgznAOOIg5nhQCIj7C9jnIA5hFQChi+CfidQBBhCA9g6QBnhiBThIICDhxQADgIAegQQBRgjBRABQAdgHATAHQALADAggBQAxAKBXAfIA8AXQBtAyCPBSIAIAFQCYBYB7BMIBCApIA2AiQCaAvCFAkICWAsII0BEIJwAhIEGABQCzAACAgBIFqgDILngBIQGgBIA1AfIA5QzIgyAgMhmlABFg");
	this.shape_163.setTransform(952.8,410.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#793600").s().p("EgzUAOMIg5nfQCHj6C8jlIA6hGQCgi9CdicQBBhCA9g5QBmhiBShIICDhxQADgIAegQQBQglBPAAQAdgJASAGQAKADAhgCQAvAJBYAeIA8AWQBsAxCQBSIAJAFQCWBXB7BMIBCAoIA2AiQCZAyCDAlICUAuIIxBEIJtAiIEFACIEygBIFogDILkgBQIXAAHqgBIAzAiIA4QtIgvAjMhmEABFg");
	this.shape_164.setTransform(954.7,410.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#793600").s().p("EgzCAOJIg4ncQCHj5C6jkIA5hFQCgi8CcicQBAhBA9g6QBlhhBShIICChxQAFgIAcgPQBRgoBNgCQAcgKARAGQAJACAhgDQAvAHBZAeIA8AWQBqAuCRBSIAJAFQCUBWB8BMIBBApIA2AhQCZA1CBAmICSAwIIvBDIJpAlIEEACIExgBIFmgDILhAAIP8gCIAwAkIA4QpIgsAlMhlkABFg");
	this.shape_165.setTransform(956.6,410.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#793600").s().p("EgyvAOHIg4naQCGj4C5jjIA5hEQCei8CbicQBBhAA8g5QBlhhBShIICChxQAEgJAcgOQBRgqBJgEQAdgKAQAFQAJABAhgDQAuAFBaAcIA8AWQBoAtCSBSIAIAFQCUBVB7BMIBCAoIA1AiQCZA2B+AoICRAyIIsBDIJmAnIEDABQCrABCFgBIFlgDILdAAIP4gCIAsAnIA4QjIgpAoMhlEABFg");
	this.shape_166.setTransform(958.5,410.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#793600").s().p("EgydAOGIg3nYQCFj3C4jiIA5hEQCdi6CaicQBBhAA7g5QBlhgBRhIICBhwQAFgKAbgOQBSgsBGgFQAdgMAPAFQAHABAjgFQAtAEBbAbIA7AVQBnArCTBTIAIAFQCTBTB8BMIBAApIA2AhQCZA5B7ApICPA0IIpBDIJjApIEDABQCnABCHgBIFjgCILbgBIPxgCIAqAqIA4QdIgmArMhkjABFg");
	this.shape_167.setTransform(960.4,410.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#793600").s().p("EgyKAOEIg3nVQCFj2C3jhIA4hDQCci6CaibQA/g/A8g6QBjhfBRhIICBhxQAGgJAZgOQBSguBEgHQAdgNAOAEQAHAAAjgFQAsADBbAaIA8AUQBlApCUBTIAIAGQCRBRB9BNIBBAnIA1AiQCYA8B4ApICOA3IInBCIJfArIECACIEtgBIFigCILXAAQIVAAHYgCIAnAsIA3QYIgjAuMhkDABFg");
	this.shape_168.setTransform(962.3,410.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#793600").s().p("Egx3AOCIg3nSQCEj1C2jgIA4hDQCbi4CZibQA/g/A7g5QBjhfBRhIICAhwQAHgKAYgOQBSgwBBgJQAdgOANAEQAGAAAkgHQAqACBdAZIA8ATQBjAoCVBTIAIAFQCQBRB9BNIBAAnIA1AhQCYA+B2AsICMA4IIkBBIJcAuIEBABIEsAAIFggBILVgBQITAAHUgCIAkAvIA3QSIggAxMhjjABFg");
	this.shape_169.setTransform(964.2,410.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#793600").s().p("EgxkAOBIg3nRQCDjzC2jeIA3hEQCai4CYiZQA+g/A8g5QBiheBQhIICAhwQAHgKAYgOQBRgyA/gLQAegPAMADIAogIQAqAABdAZIA9ASQBiAnCVBTIAIAFQCPBQB9BMIBAAnIA1AhQCWBAB1AtICKA7IIiBBIJZAvID/ACIErAAIFfgBILRgBIPigDIAhAyIA3QOIgcAzMhjDABFg");
	this.shape_170.setTransform(966.1,410.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#793600").s().p("EgxRAOAIg3nPQCDjxC0jeIA3hDQCai3CWiZQA+g/A7g5QBhhdBRhIQBWhNApgjQAIgKAWgOQBSg0A8gNQAegQALADIAogKQApgBBeAYIA8ARQBhAlCWBTIAJAFQCMBPB+BMIBAAnIA1AhQCWBDBxAuICJA9IIfBBIJWAxID+ACIErAAIFcgBILPgBQIRAAHLgDIAfA1IA2QIIgZA2MhijABFg");
	this.shape_171.setTransform(967.9,410.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#793600").s().p("Egw+AN+Ig3nMQCDjwCyjdIA3hDQCYi2CWiYQA+g/A6g4QBhhdBQhIQBUhLAqglQAJgKAWgNQBSg3A5gOQAegSAKADIAogMQAogCBfAXIA8ARQBfAjCXBTIAJAFQCLBOB+BMIBAAnIA1AhQCVBEBvAwICHA/IIcBAIJTA0ID+ACIEpAAIFbgBILLAAQIRgBHGgDIAcA3IA2QDIgWA5MhiDABFg");
	this.shape_172.setTransform(969.8,410.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#793600").s().p("EgwsAN9Ig2nKQCCjvCxjcIA2hCQCYi1CViYQA9g+A7g5QBghcBPhIIB+hvQAKgLAUgNQBSg5A3gQQAegTAJACQACgBAmgLQAngFBfAXIA8AQQBeAhCYBUIAJAFQCKBMB+BNIA/AmIA1AhQCVBHBsAxICGBAIIZBBIJQA2ID9ACIEnAAIFaAAILIgBQIQgBHCgDIAZA6IA2P+IgTA6MhhjABGg");
	this.shape_173.setTransform(971.7,410.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#793600").s().p("EgwZAN8Ig2nIQCBjuCwjbIA2hCQCXi0CUiXQA9g+A6g4QBfhcBQhIIB9hvQAKgLATgNQBTg6AzgTQAfgUAIACQABgCAmgMQAngGBgAWIA8APQBcAgCZBTIAJAFQCIBMB+BMIBAAnIA1AgQCUBKBpAyICFBCIIXBBIJMA4ID8ACIEmAAIFZAAILFgBIPMgEIAWA9IA2P4IgQA9MhhCABGg");
	this.shape_174.setTransform(973.6,410);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#793600").s().p("EgwGAN6Ig1nFQB/jtCwjZQAagiAbggQCXizCSiXQA8g+A7g4QBehbBPhIQBNhGAwgpQAKgLATgNQBTg8AxgUQAegWAIACQAAgDAmgNQAlgHBhAVQAcAGAhAIQBaAeCaBUIAJAFQCHBKB/BNIA/AmIA1AgQCTBMBnA0ICDBEIIUBAIJKA6ID6ADIEmAAIFWAAILCgBQIOgBG5gDIATA/IA1P0IgLA/MhgjABGg");
	this.shape_175.setTransform(975.5,409.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#793600").s().p("EgvzAN5Ig2nCQCAjsCujZIA1hBQCViyCSiXQA8g9A6g4QBehaBOhIQBLhEAxgrQAMgMARgMQBUg/AugVQAegXAHABQgBgDAngOQAkgJBiAUIA8AOQBaAcCaBUIAJAFQCFBJCABNIA/AmIA0AgID3CDICDBHIIQA/IJGA9ID6ACIEkABIFVAAQFCAAF9gBQIOgBG1gDIAPBBIA1PuIgIBDMhgDABGg");
	this.shape_176.setTransform(977.4,409.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#793600").s().p("EgvhAN4Ig1nAQB/jrCtjXIA1hBQCViyCRiVQA7g9A5g4QBdhaBPhIQBIhCAzgsQANgMAQgMQBThBArgYQAggXAFAAQgCgDAogPQAjgKBjASIA8AOQBYAaCbBVIAJAFQCEBICABMIA+AmIA1AgID0CGICABJIIPA/IJDA/ID4ACIEkABIFTABIK8gBQIMgCGxgDIANBEIA1PpIgGBFMhfiABGg");
	this.shape_177.setTransform(979.3,409.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#793600").s().p("EgvOAN3Ig1m+QB/jpCrjXIA1hBQCTiwCRiVQA6g9A6g4QBchZBOhIQBGhAA1guQANgMAPgMQBUhDAogZQAggZAEAAQgDgEAogQQAjgLBkARIA7ANQBXAZCcBUIAJAFQCDBHB/BNIA/AlIA1AgIDxCKIB+BLIIMA/IJABBID4ACIEiABIFSABQE7AAF9gBQIMgCGsgDIAKBHIA1PkIgDBHMhfCABGg");
	this.shape_178.setTransform(981.2,409.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#793600").s().p("EgvwAG7QB9joCsjWIAzhBQCTivCQiVQA5g8A5g4QBchYBOhIQBEg/A3gvIAcgYQBThFAlgcQAhgZADgBQgEgEApgRQAhgNBlARIA8AMQBVAXCdBVIAJAFQCBBFCABNIA+AlIA1AgIDuCOIB9BNIIJA+II9BDID3ACIEhACIFPABIK2gBQILgCGogDIAHBJIA0PeIABBLMheiABGg");
	this.shape_179.setTransform(983.1,409.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#793600").s().p("EgvfAG8QCQkJDLjzQDMj1DHjBQDDi+CJh0QCGhyAFgCQgGgFAqgSQApgSCYAfQBVAWCdBVQCjBXClBkQC0BtBrBEIB7BPIRACDQICAIQVgEQIKgBGjgEIA9RyMheDABGg");
	this.shape_180.setTransform(985.2,409.2);

	this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150}]}).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).wait(5));

	// grass
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4gCIFXgCITKgDIEzgBIKCgCIA9RyMhvOABGg");
	this.shape_181.setTransform(929.9,405.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#65AC00").s().p("Eg4FAGNIAAgBQFSnIDwkIIBghoQCui4B2hgQBvhZBDgpQAWgOASgIQBEggABAEQgFAEApAKQAlAHBzgZIAngJQAWgEAeAFQAUADAaAHQAzAOBHAdIBSAjQBtAxB5BCQC9BoB+BLIAtAbIBWA0IEkApIMWBoMA2ygAIIBJADIA9RsIhgAEMhtJABDg");
	this.shape_182.setTransform(931.8,405.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#65AC00").s().p("Eg2PAOEIhjn4IAAgBQFQnGDvkHIBfhnQCti3B2hgQBuhaBCgpQAXgOASgIQBDgfABADQgEADAoAKQAmAFBwgZIAngJQAXgFAdAFQATADAaAHQAzAOBHAcIBSAhQBrAvB7BCQC7BmB/BLIAsAcIBVAzIEiAsICsAaIJnBPMA2hgAFIBHAFIA7RnIhbAHMhrcABEg");
	this.shape_183.setTransform(933.6,405.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#65AC00").s().p("Eg19AOCIhin2IAAgBQFOnDDukHQAxg2AugwQCri3B2hgQBshZBDgpQAWgOASgJQBCgeACACQgDADAnAJQAnADBtgZIAngJQAXgFAcAEQASADAbAIQAyAOBHAZIBSAgQBqAtB8BCQC6BkB/BMIAsAbIBVAzIEgAvICqAcIJjBPIJ3AGMAsbgAJIBEAHIA7RiIhYAKMhq8ABEg");
	this.shape_184.setTransform(935.5,405.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#65AC00").s().p("Eg1qAN/IhinzIAAgBQFNnBDskGIBfhmQCqi1B2hhQBqhYBDgqQAXgOARgJQBAgeADABQgDADAnAIQAoABBqgYIAmgKQAYgFAbAEIAtALQAyANBHAYIBSAeQBpArB8BCQC5BjCABMIAsAaIBVAzIEcAzICpAdIJgBPIJ0AJMAsNgAJIBDAJIA6RdIhUANMhqcABEg");
	this.shape_185.setTransform(937.4,405.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#65AC00").s().p("Eg1XAN9IhinxIAAgBQFLm+DskGQAwg2AugwQCoi0B1hhQBrhXBCgrQAWgOASgIQA/geADAAQgCACAlAIQAqgBBngYIAngKQAYgGAaAEIAtALQAwAOBIAWIBSAcQBnAoB+BDQC2BhCBBMIAsAbIBVAyIEaA1ICnAgIJeBPIJwALMAsAgAJIBAALIA6RYIhRAQMhp8ABEg");
	this.shape_186.setTransform(939.3,405.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#65AC00").s().p("Eg1FAN6IhhnvIAAgBQFJm7DrkFIBdhmQCoiyB0hiQBqhXBCgrQAWgOARgJQA+gdAEAAQgBABAkAHQAqgDBlgYIAmgKQAagGAYAEQAQADAcAIIB5AiIBRAaQBmAmB/BDQC1BgCBBMIAsAaIBUAzIEYA4ICmAiIJbBOIJtANMArzgAJIA9AOIA6RTIhNASMhpdABEg");
	this.shape_187.setTransform(941.2,405.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#65AC00").s().p("Eg0yAN4IhhntIAAgBQFHm4DqkFIBdhlQCmiyB0hhQBohXBDgrQAVgOASgJQA8gdAFgBIAjAGQArgEBigYIAmgKQAagHAXAEIAsAMIB4AgIBSAYQBkAkCABCQCzBfCDBMIArAaIBUAyIEVA8ICkAkIJZBNIJqAQMArmgAJIA6AQIA6ROIhKAVMho9ABEg");
	this.shape_188.setTransform(943.1,405.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#65AC00").s().p("Eg0gAN1IhgnrIAAAAQFFm2DpkFIBdhkQCkiwB1hiQBmhXBDgrQAVgOASgJQA6gdAGgCIAjAFQAsgGBfgYIAmgKQAagHAWAEIAtAMQAtAMBKASIBRAWQBiAiCDBDQCyBdCCBMIAsAaIBTAyIESA+ICkAmIJVBNIJnATMArYgAJIA4ASIA6RIIhGAYMhodABFg");
	this.shape_189.setTransform(945,405.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#65AC00").s().p("Eg0NANyIhgnoIAAAAQFDm0DokDQAwg1AsgvQCkiwBzhiQBmhWBCgsQAWgOARgJQA5gdAHgCIAiAEQAtgIBegYIAlgKQAbgIAUAFIAsALQAtANBKAQIBSAUQBgAgCEBCQCwBcCEBNIArAZIBUAyIEPBBIChAoIJSBNIJkAVMArMgAJIA1AUIA6RDIhDAbMhn9ABFg");
	this.shape_190.setTransform(946.9,405.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#65AC00").s().p("Egz7ANvIhfnlIAAgBQFBmxDnkDIBchjQCjiuByhjQBmhWBCgsQAUgOASgJIA/ggQACgBAgAEQAugKBbgXIAkgLQAcgIAUAEIArAMQAtAMBKAPIBRASQBfAeCFBCQCuBbCFBMIAqAaIBUAxIENBFICfAqIJQBMIJhAYMAq+gAKIAzAXIA6Q+IhAAeMhndABFg");
	this.shape_191.setTransform(948.8,405.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#65AC00").s().p("EgzoANtIhfnjIAAgBQE/muDokDIBahjQChitBzhiQBjhWBDgsQAUgOASgKIA/ggQACgBAfADICHgjIAkgLQAcgIAUAEIArAMQArAMBMAMIBRARQBdAcCFBCQCtBZCFBNIArAZIBTAxIELBIICeArIJNBMIJdAbMAqygAKIAwAZIA5Q5Ig8AhMhm9ABFg");
	this.shape_192.setTransform(950.6,405.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#65AC00").s().p("EgzVANrIhfnhIAAgBQE+mrDlkCQAvg1ArguQCgisBzhjQBjhVBBgtQAVgOARgJIA+ghQAEgCAdADQAxgPBVgWIAkgLQAdgJASAEQAKAEAhAIQAqAMBMALIBRAPQBcAZCGBDQCsBXCFBNIArAZIBTAxIEIBLICdAtIJKBMIJbAdMAqkgAKIAtAcIA5QzIg4AkMhmeABFg");
	this.shape_193.setTransform(952.5,405.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#65AC00").s().p("EgzDANoIhenfIAAAAQE8mpDkkCIBahiQCfirByhjQBhhVBCgtIAmgYIA+ghQADgCAdACQAxgRBTgWIAjgLQAegJARAEIAqAMQAqAMBNAJQAlAHArAGQBbAXCHBDQCrBWCGBNIAqAZIBTAwIEGBOICaAwIJIBLIJYAfMAqWgAJIAsAdIA4QvIg1AmMhl+ABFg");
	this.shape_194.setTransform(954.4,405.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#65AC00").s().p("EgywANlIhencIAAAAQE6mnDkkBIBZhiQCdipByhjQBhhVBBgtQAUgOARgKIA+giQAEgDAcABQAzgSBPgWIAjgLQAfgKAPAEQAJAEAhAJQAqALBNAIQAlAGArAFQBZAVCJBDQCoBUCHBNIAqAZIBTAwIEDBRICZAyIJFBKIJUAiMAqKgAJIApAgIA4QpIgxApMhleABFg");
	this.shape_195.setTransform(956.3,405.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#65AC00").s().p("EgyeANjIhdnaIAAAAQE3mkDkkAQAug0ArguQCcioBxhkQBfhUBCguIAlgYIA8giQAGgDAbAAQAzgUBNgWIAjgLQAfgLAPAEQAHAEAiAJQApALBNAHQAmAFAqAEQBYATCKBCQCnBUCIBNIAqAYIBSAwIEABUICYA0IJCBKIJRAkMAp9gAJIAmAiIA4QkIguAsMhk+ABFg");
	this.shape_196.setTransform(958.2,405.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#65AC00").s().p("EgyLANgIhdnXIAAgBQE2mhDjkAQAtgzAqguQCbinBxhkQBehTBCgvIAlgYIA8giQAFgEAagBQA2gWBJgVIAjgMQAggLANAEQAGAEAkAJQAnALBOAFIBQAHQBWARCMBDQClBRCIBOIAqAYIBTAvID8BXICXA2II/BKIJOAnMApvgAKIAkAlIA3QeIgpAwMhkfABFg");
	this.shape_197.setTransform(960.1,405.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#65AC00").s().p("Egx5ANeIhcnVIAAgBQE0meDhkAIBYhgQCaimBwhlQBdhTBBguIAlgZIA8gjQAGgEAagBQA1gYBHgVIAigMQAhgLAMAEQAGADAjAKQAoAKBOADQAlAEArACQBUAOCNBDQCjBRCJBNIAqAYIBSAvID7BaICVA4II8BKIJLApMApigAKIAhAnIA3QZIgmAzMhj/ABFg");
	this.shape_198.setTransform(962,405.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#65AC00").s().p("EgxmANbIhcnTIAAAAQEymcDgj/QAtgzArgtQCYilBwhkQBdhTBBgvIAkgYQArgaAPgKQAIgFAYgCQA2gaBGgUIAhgNQAhgLALAEQAGADAjAKQAmAKBQACQAlADAqABQBTAMCOBDQCiBOCJBOIAqAYIBSAvID4BdICUA6II5BJIJIAsMApVgAKIAeApIA3QUIgiA1MhjfABGg");
	this.shape_199.setTransform(963.9,405.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#65AC00").s().p("EgxTANZIhcnRIAAAAQEwmZDhj/QAsgzAqgtQCWijBxhlQBahSBCgwIAkgYIA6gkQAIgGAXgCQA4gcBCgVIAhgMQAigMAKAEQAEAEAkAJQAmAKBPAAQAlACArAAQBSAKCOBDQCgBOCLBNIApAYIBSAuID2BhICSA7II2BJIJFAuMApIgAJIAcArIA3QPIgfA4MhjAABFg");
	this.shape_200.setTransform(965.7,405.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#65AC00").s().p("EgxBANWIhbnOIAAAAQEumXDgj+IBVhfQCWiiBvhmQBbhSBAgvIAkgZQApgZARgLQAJgHAWgDQA4geBAgUIAhgMQAigNAJAEQADAEAlAKQAlAJBRgBQAjABArgBQBRAICPBDQCfBMCLBNIAqAYIBRAuIDzBkICQA9II0BJIJCAwMAo7gAJIAZAtIA3QKIgbA7MhihABFg");
	this.shape_201.setTransform(967.6,405.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#65AC00").s().p("EgwuANTIhanLIAAgBQErmUDfj9QArgyAqgtQCVihBvhmQBYhRBBgwIAkgZIA5glQAJgHAWgDQA5ggA9gUIAhgNQAjgNAHAEQACAEAmAKQAkAJBRgDQAkAAArgCQBPAGCQBDQCdBKCNBOIApAYIBRAuIDxBmICOBAIIxBIII/AzMAotgAKIAXAwIA3QFIgZA+MhiAABFg");
	this.shape_202.setTransform(969.5,405.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#65AC00").s().p("EgwbANQIhanJQEpmSDej8QAsgyApgtQCTigBvhmQBYhRBAgwIAjgZIA5gmQAKgHAUgEQA7giA6gUIAhgMQAjgOAHAEQABAEAmAKQAkAJBRgFQAkgBArgDQBNAECSBDQCcBJCMBOIApAXIBRAuQB/A4BvAyICNBBIIuBIII8A2MAoggAKIAVAyIA1P/IgUBBMhhgABGg");
	this.shape_203.setTransform(971.4,405.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#65AC00").s().p("EgwJANOIhZnHQEnmPDdj8QAsgyApgsQCRifBvhmQBWhRBBgxIAjgZIA4gmQALgHATgGQA8gjA3gUIAggNQAkgOAGAEQAAAEAnAKQAjAJBRgGQAkgCArgEQBMACCTBDQCaBHCOBPIAoAWIBRAuQB+A5BtA0ICMBDIIrBHII4A5MAoUgAKIASA0IA1P6IgQBEMhhBABGg");
	this.shape_204.setTransform(973.3,405.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#65AC00").s().p("Egv2ANMIhZnFQElmMDcj8IBUheQCRidBuhnQBVhQBBgxIAigaIA4gmQALgIATgGQA8gmA1gTIAggNQAlgOAEADQAAAEAnALQAiAIBSgIQAkgCArgFQBKgBCUBDQCZBHCOBOIAoAWIBRAuQB9A7BrA1ICLBFIIoBHII1A7MAoGgAKIAQA2IA1P1IgNBHMhghABGg");
	this.shape_205.setTransform(975.2,405.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#65AC00").s().p("EgvjANJIhZnDQEjmJDcj7QAqgyApgsQCPicBthnQBVhQBBgxIAigaIA3gmQAMgJASgHQA9goAygTIAggMQAmgQACAEQgBAEAoALQAhAIBTgJQAjgEArgGQBJgDCWBEQCXBECOBPIApAWIBQAtQB9A9BpA2ICJBIIIlBGIIyA9MAn5gAKIANA5IA1PwIgJBJMhgBABGg");
	this.shape_206.setTransform(977.1,405.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#65AC00").s().p("EgvRANGIhYnAQEimHDaj6IBThdQCOibBthoQBUhPBAgyIAigZIA2gnQANgKAQgHQA/gqAwgTIAfgNQAmgPACADQgCAFAoAKQAgAIBUgLQAjgEArgHQBHgFCXBDQCVBECQBOIAoAWIBQAtQB7A/BoA3ICIBJIIiBHIIvA/MAnsgAKIAKA7IA1PrIgFBMMhfiABGg");
	this.shape_207.setTransform(978.9,405.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#65AC00").s().p("Egu+ANGIhYm+QEgmGDZj5QArgxAogrQCMiaBthoQBShOBBgzIAhgZIA2goQAOgKAPgIQBAgsAtgSIAegNQAngQABADQgDAFApAKQAgAIBTgNQAjgEAsgJQBFgHCYBDQCUBCCQBPIAoAWIBQAsQB6BBBnA4ICFBMIIgBGIIsBCMAnfgAKIAIA9IA0PmIgCBPMhfCABGg");
	this.shape_208.setTransform(980.8,405.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#65AC00").s().p("EgwEAGKQEemEDZj3QAqgxAogrQCLiZBshoQBShPBAgyIAhgaIA2goQAOgLAOgIQBBguAqgSIAfgOQAngQAAADQgEAFApALQAfAHBVgOQAigGAsgJQBEgJCZBDQCSBBCRBOIAnAWIBQAsQB6BCBkA6ICFBOIRFCKMAnSgAKIA5QgIACBSMheiABGg");
	this.shape_209.setTransform(982.8,405.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#65AC00").s().p("EgvyAGLQFTnKDxkJQDykKCVh3QCXh6BEgfQBGgfAAAEQgGAFArALQApAKCXgkQBDgLCaBDQCZBCCwBiQCpBcCDBPICCBPIRACMMAnEgAKIA9RyMheCABGg");
	this.shape_210.setTransform(984.9,405.3);

	this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181}]}).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).wait(5));

	// sea
	this.instance_10 = new lib.plate_t_019();
	this.instance_10.setTransform(356.5,432.8);

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.02,x:364.7},29).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,313.7,1280,217.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,275.8,1280,255.3), new cjs.Rectangle(0,272.6,1280,258.5), new cjs.Rectangle(0,269.4,1280,261.7), new cjs.Rectangle(0,266.1,1280,264.9), new cjs.Rectangle(0,262.9,1280,268.1), new cjs.Rectangle(0,259.7,1280,271.4), new cjs.Rectangle(0,245.6,1280,285.4), new cjs.Rectangle(0,242.1,1280,288.9), new cjs.Rectangle(0,238.7,1280,292.3), new cjs.Rectangle(0,235.3,1280,295.8), rect=new cjs.Rectangle(0,226.1,1280,304.9), rect, rect=new cjs.Rectangle(0,222.1,1280,308.9), rect];


(lib.main_anim_plate_tectonics_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj+ApfMAAAhS9MDH9AAAMAAABS9g");
	mask.setTransform(640,265.5);

	// Layer 6
	this.instance = new lib.plate_t_03();
	this.instance.setTransform(0.2,429);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// asthenosphare
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIFyiLIBvkZIA5gKIBQCgIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	this.shape.setTransform(316.2,482.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// Layer 7
	this.instance_1 = new lib.plate_t_024("synched",0,false);
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	this.shape_1.setTransform(344.5,482.7);

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60));

	// Lithosphere
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	this.shape_2.setTransform(344.5,482.7);

	this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(60));

	// Crust
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIKpiNIBkAAIB3AfIenBuIPeEXILaJrMhv3ABtg");
	this.shape_3.setTransform(345.2,479);

	this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(60));

	// volcaino
	this.instance_2 = new lib.plate_t_011();
	this.instance_2.setTransform(690.1,314);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// asthenosphare_texture
	this.instance_3 = new lib._new("synched",0);
	this.instance_3.setTransform(965,490.5,1,1,0,0,0,315,43.5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// asthenosphare
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCqgmFng6QC1gdCRgWINGhKIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_4.setTransform(966.2,490.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFog7QC0gdCSgWINGhJIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_5.setTransform(966.2,490.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFog7QCzgeCSgXINHhHIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_6.setTransform(966.2,490.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFng8IFFg1INIhGIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_7.setTransform(966.2,490.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFng9IFEg1INJhFIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_8.setTransform(966.2,490.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFmg9IFFg2INJhEIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_9.setTransform(966.2,490.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFmg+QCzgfCRgXINKhDIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_10.setTransform(966.2,490.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFmg+QCzggCRgYINKhBIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_11.setTransform(966.2,490.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFmg/QCyggCRgYINLhAIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_12.setTransform(966.2,490.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFmhAIFCg4INMg/IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_13.setTransform(966.2,490.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFlhAIFDg5INMg+IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_14.setTransform(966.2,490.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFlhBIFCg5INNg9IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_15.setTransform(966.2,490.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFkhBIFCg7INOg7IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_16.setTransform(966.2,490.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFkhCIFBg7INPg6IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_17.setTransform(966.2,490.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFkhDIFAg7INQg5IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_18.setTransform(966.2,490.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFjhDIFAg8INRg4IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_19.setTransform(966.2,490.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFjhEIFAg9INRg2IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_20.setTransform(966.2,490.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFjhEIE/g+INSg1IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_21.setTransform(966.2,490.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFihFIE/g+INTg0IEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_22.setTransform(966.2,490.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFhhGIFAg+INTgzIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_23.setTransform(966.2,490.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFhhGIE/g/INUgyIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_24.setTransform(966.2,490.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFhhHIE/hAINUgwIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_25.setTransform(966.2,490.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFghHIE/hBINVgvIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_26.setTransform(966.2,490.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFghIIE+hBINWguIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_27.setTransform(966.2,490.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFghJIE9hBINXgtIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_28.setTransform(966.2,490.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFfhJIE9hCINYgsIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_29.setTransform(966.2,490.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFfhKIE9hDINYgqIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_30.setTransform(966.2,490.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFfhKIE8hEINZgpIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_31.setTransform(966.2,490.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFehLIE8hEINagoIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_32.setTransform(966.2,490.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFehMIE7hEINbgnIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_33.setTransform(966.2,490.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbIIHhyIE7hFINbgmIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_34.setTransform(966.2,490.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbIIHhzIE6hGINcgkIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_35.setTransform(966.2,490.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbIIGh0IE7hGINcgjIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_36.setTransform(966.2,490.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbIIGh0IE6hHINdgiIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_37.setTransform(966.2,490.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbIIGh1IE5hHINeghIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_38.setTransform(966.2,490.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbIIFh1IE6hIINeggIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_39.setTransform(966.2,490.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbIIFh2IE5hJINfgeIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_40.setTransform(966.2,490.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFchRIE4hJINggdIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_41.setTransform(966.2,490.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCqgmFahRIE4hKIRhgiQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_42.setTransform(966.2,490.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFbhSIE3hKIRighQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_43.setTransform(966.2,490.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFbhSIE2hLIRjggQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_44.setTransform(966.2,490.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFahTIE3hMIRjgeQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_45.setTransform(966.2,490.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFahUIE2hMIRkgdQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_46.setTransform(966.2,490.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFZhUIE2hNIRlgcQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_47.setTransform(966.2,490.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFZhVIE2hNIRlgbQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_48.setTransform(966.2,490.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFYhVIE2hOIRmgaQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_49.setTransform(966.2,490.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFYhWQCsgrCKgkIRmgYQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_50.setTransform(966.2,490.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFYhXQCrgrCKgkIRngXQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_51.setTransform(966.2,490.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFXhXQCsgsCJgkIRogWQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_52.setTransform(966.2,490.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFXhYIE0hQIRpgVQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_53.setTransform(966.2,490.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFWhYIE0hRIRqgUQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_54.setTransform(966.2,490.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFWhZQCrgsCJgmIRqgSQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_55.setTransform(966.2,490.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFWhaQCqgsCJgmIRrgRQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_56.setTransform(966.2,490.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFVhaQCrgtCIgmIRsgQQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_57.setTransform(966.2,490.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFVhbIEyhTIRtgPQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_58.setTransform(966.2,490.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFVhbIEyhUIRtgOQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_59.setTransform(966.2,490.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFUhcIEyhVINugGIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_60.setTransform(966.2,490.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFUhdQCqguCIgnINugFIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_61.setTransform(966.2,490.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFUhdQCpgvCIgnINvgEIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_62.setTransform(966.2,490.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.4,95.2,-46.6).s().p("EgpjAGnInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQCpgmFUheQCogvCIgnINwgDIEAgGQEWgFBmACQD3AFAIACIcmAAIAJNag");
	this.shape_63.setTransform(966.2,490.6);

	this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).wait(1));

	// Layer 4
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.004)").s().p("AioiQIAzAAIEfgEIAAEoIlSACg");
	this.shape_64.setTransform(1050,398.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.012)").s().p("AioiPIFSgGIAAEmIlSAGg");
	this.shape_65.setTransform(1050,399);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.02)").s().p("AioiQIFSgHIAAEkIlSALg");
	this.shape_66.setTransform(1050,399);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.027)").s().p("AioiPIFSgJIAAEiIlSAPg");
	this.shape_67.setTransform(1050,399.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.035)").s().p("AioiQIFSgJIAAEfIlSAUg");
	this.shape_68.setTransform(1050,399.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.043)").s().p("AioiQIFSgKIAAEdIlSAYg");
	this.shape_69.setTransform(1050,399.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.051)").s().p("AioiQIFSgMIAAEcIlSAcg");
	this.shape_70.setTransform(1050,399.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.059)").s().p("AioiQIFSgNIAAEaIlSAhg");
	this.shape_71.setTransform(1050,399.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.067)").s().p("AioiQIFSgOIAAEXIlSAmg");
	this.shape_72.setTransform(1050,399.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.078)").s().p("AioiQIFSgPIAAEVIlSAqg");
	this.shape_73.setTransform(1050,399.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.086)").s().p("AioiRIFSgPIAAETIlSAug");
	this.shape_74.setTransform(1050,399.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.094)").s().p("AioiRIA0AAIEegQIAAERIlSAyg");
	this.shape_75.setTransform(1050,399.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.102)").s().p("AioiRIA0AAIEegSIAAEQIlSA3g");
	this.shape_76.setTransform(1050,399.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.11)").s().p("AioiRIA0AAIEegTIAAENIlSA8g");
	this.shape_77.setTransform(1050,399.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.118)").s().p("AioiRIA0AAIEegUIAAELIlSBAg");
	this.shape_78.setTransform(1050,399.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.125)").s().p("AioiRIA0AAIEegVIAAEIIlSBFg");
	this.shape_79.setTransform(1050,399.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.133)").s().p("AioiSIA1AAIEdgVIAAEGIlSBJg");
	this.shape_80.setTransform(1050,399.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.141)").s().p("AioiRIA1AAIEdgYIAAEFIlSBNg");
	this.shape_81.setTransform(1050,399.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.149)").s().p("AioiSIA1AAIEdgXIAAECIlSBSg");
	this.shape_82.setTransform(1050,399.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.149)").s().p("AioiSIA1AAIEdgZIAAECIlSBVg");
	this.shape_83.setTransform(1050,399.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.149)").s().p("AioiSIA1AAIEdgaIAAEAIlSBZg");
	this.shape_84.setTransform(1050,400);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.149)").s().p("AioiTIA1AAIEdgbIAAEBIlSBcg");
	this.shape_85.setTransform(1050,400);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.149)").s().p("AioiSIA1gBIEdgcIAAD/IlSBgg");
	this.shape_86.setTransform(1050,400);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.149)").s().p("AioiTIA1gBIEdgcIAAD+IlSBjg");
	this.shape_87.setTransform(1050,400.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.149)").s().p("AioiTIA0AAIEegeIAAD9IlSBmg");
	this.shape_88.setTransform(1050,400.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.149)").s().p("AioiTIA0gBIEegfIAAD9IlSBqg");
	this.shape_89.setTransform(1050,400.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.149)").s().p("AioiUIA0AAIEeggIAAD8IlSBtg");
	this.shape_90.setTransform(1050,400.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.149)").s().p("AioiUIA0AAIEeghIAAD6IlSBxg");
	this.shape_91.setTransform(1050,400.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.149)").s().p("AioiUIA0gBIEegiIAAD6IlSB0g");
	this.shape_92.setTransform(1050,400.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.149)").s().p("AioiVIA0AAIEegjIAAD5IlSB4g");
	this.shape_93.setTransform(1050,400.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.149)").s().p("AioiVIA0gBIEegjIAAD4IlSB7g");
	this.shape_94.setTransform(1050,400.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.149)").s().p("AioiVIA0AAIEeglIAAD2IlSB/g");
	this.shape_95.setTransform(1050,400.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.149)").s().p("AioiVIA0gBIEeglIAAD2IlSCBg");
	this.shape_96.setTransform(1050,400.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.149)").s().p("AioiVIA0gBIEegnIAAD1IlSCGg");
	this.shape_97.setTransform(1050,400.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.149)").s().p("AioiWIA0gBIEegnIAAD0IlSCJg");
	this.shape_98.setTransform(1050,400.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.149)").s().p("AioiWIAzgBIEfgpIAAD0IlSCMg");
	this.shape_99.setTransform(1050,400.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.149)").s().p("AioiWIAzgBIEfgqIAADzIlSCQg");
	this.shape_100.setTransform(1050,400.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.149)").s().p("AioiWIAzgCIEfgqIAADxIlSCUg");
	this.shape_101.setTransform(1050,400.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.149)").s().p("AioiXIAzgBIEfgrIAADwIlSCXg");
	this.shape_102.setTransform(1050,400.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.149)").s().p("AioiXIAzgBIEfgtIAADwIlSCbg");
	this.shape_103.setTransform(1050,400.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.149)").s().p("AioiXIAzgCIEfgtIAADvIlSCeg");
	this.shape_104.setTransform(1050,400.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.149)").s().p("AioiYIAzgBIEfguIAADuIlSChg");
	this.shape_105.setTransform(1050,400.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.149)").s().p("AioiYIAzgBIEfgvIAADtIlSCkg");
	this.shape_106.setTransform(1050,401);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.149)").s().p("AioiYIAzgCIEfgwIAADsIlSCpg");
	this.shape_107.setTransform(1050,401);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.149)").s().p("AioiYIAzgCIEfgxIAADsIlSCrg");
	this.shape_108.setTransform(1050,401.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.149)").s().p("AioiYIAzgCIEfgyIAADqIlSCwg");
	this.shape_109.setTransform(1050,401.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.149)").s().p("AioiZIAzgBIEfg0IAADqIlSCyg");
	this.shape_110.setTransform(1050,401.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.149)").s().p("AioiZIAzgCIEfg0IAADpIlSC2g");
	this.shape_111.setTransform(1050,401.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.149)").s().p("AioiZIAzgCIEfg1IAADoIlSC5g");
	this.shape_112.setTransform(1050,401.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.149)").s().p("AioiZIAzgDIEfg2IAADnIlSC9g");
	this.shape_113.setTransform(1050,401.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.149)").s().p("AioiaIAzgCIEfg3IAADmIlSDBg");
	this.shape_114.setTransform(1050,401.3);

	this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_64}]},9).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).wait(1));

	// Layer 3
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.004)").s().p("Aiqj0IFVgCIAAFSIlVCbg");
	this.shape_115.setTransform(1050.2,438.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.012)").s().p("AiqjvIFVgGIAAFOIlVCdg");
	this.shape_116.setTransform(1050.2,438.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.02)").s().p("AiqjqIFVgKIAAFKIlVCfg");
	this.shape_117.setTransform(1050.2,437.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.027)").s().p("AiqjlIFVgPIAAFHIlVCig");
	this.shape_118.setTransform(1050.2,437.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.035)").s().p("AiqjgIFVgTIAAFDIlVCkg");
	this.shape_119.setTransform(1050.2,437.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.043)").s().p("AiqjbIFVgYIAAFAIlVCng");
	this.shape_120.setTransform(1050.2,436.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.051)").s().p("AiqjWIFVgcIAAE9IlVCog");
	this.shape_121.setTransform(1050.2,436.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.059)").s().p("AiqjQIFVgiIAAE6IlVCrg");
	this.shape_122.setTransform(1050.2,436);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.067)").s().p("AiqjMIFVglIAAE2IlVCtg");
	this.shape_123.setTransform(1050.2,435.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.078)").s().p("AiqjGIFVgrIAAEzIlVCvg");
	this.shape_124.setTransform(1050.2,435.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.086)").s().p("AiqjBIFVgvIAAEvIlVCyg");
	this.shape_125.setTransform(1050.1,435);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.094)").s().p("Aiqi8IFVgzIAAErIlVC0g");
	this.shape_126.setTransform(1050.1,434.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.102)").s().p("Aiqi3IFVg3IAAEoIlVC1g");
	this.shape_127.setTransform(1050.1,434.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.11)").s().p("AiqixIFVg9IAAElIlVC4g");
	this.shape_128.setTransform(1050.1,434);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.118)").s().p("AiqitIFVhAIAAEhIlVC6g");
	this.shape_129.setTransform(1050.1,433.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.125)").s().p("AiqinIFVhGIAAEeIlVC9g");
	this.shape_130.setTransform(1050.1,433.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.133)").s().p("AipiiIFUhKIAAEaIlUC/g");
	this.shape_131.setTransform(1050.1,432.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.141)").s().p("AipidIFUhPIAAEYIlUDAg");
	this.shape_132.setTransform(1050.1,432.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.149)").s().p("AipiYIFUhTIAAETIlUDEg");
	this.shape_133.setTransform(1050.1,432.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.149)").s().p("AipiTIFUhXIAAEPIlUDGg");
	this.shape_134.setTransform(1050.1,432);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.149)").s().p("AipiPIFUhaIAAELIlUDHg");
	this.shape_135.setTransform(1050.1,431.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.149)").s().p("AipiKIFUhdIAAEGIlUDJg");
	this.shape_136.setTransform(1050.1,431.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.149)").s().p("AipiFIFUhhIAAEBIlUDMg");
	this.shape_137.setTransform(1050.1,431.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.149)").s().p("AipiBIFUhkIAAD9IlUDOg");
	this.shape_138.setTransform(1050.1,430.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.149)").s().p("Aiph8IFUhoIAAD5IlUDPg");
	this.shape_139.setTransform(1050.1,430.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.149)").s().p("Aiph3IFThrIAAD0IlTDRg");
	this.shape_140.setTransform(1050.1,430.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.149)").s().p("AiphzIFThuIAADwIlTDTg");
	this.shape_141.setTransform(1050.1,430);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.149)").s().p("AiphuIFThyIAADrIlTDWg");
	this.shape_142.setTransform(1050.1,429.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.149)").s().p("AiphqIFTh1IAADnIlTDXg");
	this.shape_143.setTransform(1050.1,429.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.149)").s().p("AiphlIFTh4IAADiIlTDZg");
	this.shape_144.setTransform(1050.1,429.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.149)").s().p("AiphgIFTh8IAADeIlTDbg");
	this.shape_145.setTransform(1050.1,428.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.149)").s().p("AiphdIFTh/IAADbIlTDeg");
	this.shape_146.setTransform(1050.1,428.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.149)").s().p("AiphZIFTiDIAADXIlTDig");
	this.shape_147.setTransform(1050.1,428.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.149)").s().p("AiphWIFTiGIAADSIlTDng");
	this.shape_148.setTransform(1050.1,428.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.149)").s().p("AiphSIFTiKIAADOIlTDrg");
	this.shape_149.setTransform(1050.1,428.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.149)").s().p("AiphPIFTiNIAADJIlTDwg");
	this.shape_150.setTransform(1050.1,428);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.149)").s().p("AiphLIFTiRIAADFIlTD0g");
	this.shape_151.setTransform(1050.1,427.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.149)").s().p("AiphIIFTiUIAADAIlTD5g");
	this.shape_152.setTransform(1050.1,427.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.149)").s().p("AiphEIFTiXIAAC7IlTD8g");
	this.shape_153.setTransform(1050.1,427.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.149)").s().p("AiphBIFTibIAAC3IlTEBg");
	this.shape_154.setTransform(1050.1,427.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.149)").s().p("Aipg+IFTidIAACxIlTEHg");
	this.shape_155.setTransform(1050.1,427.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.149)").s().p("Aipg6IFTiiIAACvIlTEJg");
	this.shape_156.setTransform(1050,427);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.149)").s().p("Aipg3IFTikIAACoIlTEQg");
	this.shape_157.setTransform(1050,426.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.149)").s().p("AipgzIFTioIAACkIlTETg");
	this.shape_158.setTransform(1050,426.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.149)").s().p("AipgwIFTirIAACgIlTEXg");
	this.shape_159.setTransform(1050,426.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.149)").s().p("AipgsIFTivIAACcIlTEbg");
	this.shape_160.setTransform(1050,426.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.149)").s().p("AipgoIFTizIAACXIlTEgg");
	this.shape_161.setTransform(1050,426.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.149)").s().p("AioglIFSi2IAACTIlSEkg");
	this.shape_162.setTransform(1050,426);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.149)").s().p("AiogiIFSi5IAACOIlSEpg");
	this.shape_163.setTransform(1050,425.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.149)").s().p("AiogeIFSi9IAACKIlSEtg");
	this.shape_164.setTransform(1050,425.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.149)").s().p("AiogbIFSjAIAACFIlSEyg");
	this.shape_165.setTransform(1050,425.5);

	this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_115}]},9).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).wait(1));

	// asthenosphare3
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#BA4A02","#F65900"],[0,1],20,57.5,20,-57.5).s().p("A45CsQLskqAAgIMAmEgAoIADFdg");
	this.shape_166.setTransform(1152.5,465.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#BA4A02","#F65900"],[0,1],19.5,57.5,19.5,-57.5).s().p("A41CrQLlkqAAgHMAmCgApIAEFeg");
	this.shape_167.setTransform(1152.7,465.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#BA4A02","#F65900"],[0,1],19,57.4,19,-57.6).s().p("A4xCqQLekqAAgHMAmCgAoIADFfg");
	this.shape_168.setTransform(1153,464.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#BA4A02","#F65900"],[0,1],18.6,57.3,18.6,-57.7).s().p("A4tCqQLXkqAAgIMAmBgAnIADFfg");
	this.shape_169.setTransform(1153.2,464.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#BA4A02","#F65900"],[0,1],18.2,57.2,18.2,-57.8).s().p("A4pCpQLRkqgBgHMAmAgAoIACFhg");
	this.shape_170.setTransform(1153.5,463.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#BA4A02","#F65900"],[0,1],17.7,57.1,17.7,-57.9).s().p("A4kCoQLIkqABgIMAl9gAmIADFhg");
	this.shape_171.setTransform(1153.8,463.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#BA4A02","#F65900"],[0,1],17.3,57,17.3,-58).s().p("A4gCnQLCkqAAgHMAl9gAmIACFhg");
	this.shape_172.setTransform(1154,462.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#BA4A02","#F65900"],[0,1],16.9,56.9,16.9,-58.1).s().p("A4cCmQK7kqAAgHMAl8gAmIACFjg");
	this.shape_173.setTransform(1154.3,462.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#BA4A02","#F65900"],[0,1],16.4,56.9,16.4,-58.1).s().p("A4YCmQK0kqAAgIMAl7gAlIACFjg");
	this.shape_174.setTransform(1154.5,461.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#BA4A02","#F65900"],[0,1],15.9,56.8,15.9,-58.2).s().p("A4UCmQKtkrAAgHMAl6gAlIACFjg");
	this.shape_175.setTransform(1154.8,461);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#BA4A02","#F65900"],[0,1],15.5,56.7,15.5,-58.3).s().p("A4QClQKmkrABgHMAl4gAlIABFlg");
	this.shape_176.setTransform(1155.1,460.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#BA4A02","#F65900"],[0,1],15.1,56.6,15.1,-58.4).s().p("A4LCkQKekqAAgIMAl4gAkIACFlg");
	this.shape_177.setTransform(1155.3,459.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#BA4A02","#F65900"],[0,1],14.6,56.5,14.6,-58.5).s().p("A4HCkQKYkrAAgIMAl2gAjIABFlg");
	this.shape_178.setTransform(1155.6,459.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#BA4A02","#F65900"],[0,1],14.1,56.4,14.1,-58.6).s().p("A4DCjQKRkrAAgHMAl1gAkIABFmg");
	this.shape_179.setTransform(1155.8,458.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#BA4A02","#F65900"],[0,1],13.7,56.4,13.7,-58.6).s().p("A3/CiQKKkqAAgIMAl0gAjIABFng");
	this.shape_180.setTransform(1156.1,458.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#BA4A02","#F65900"],[0,1],13.3,56.3,13.3,-58.7).s().p("A37ChQKDkqAAgIMAlzgAiIABFng");
	this.shape_181.setTransform(1156.4,457.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#BA4A02","#F65900"],[0,1],12.8,56.2,12.8,-58.8).s().p("A33CgQJ8kqAAgHMAlygAjIABFog");
	this.shape_182.setTransform(1156.6,457.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#BA4A02","#F65900"],[0,1],12.3,56.1,12.3,-58.9).s().p("A3zCgQJ1krAAgHMAlxgAiIABFpg");
	this.shape_183.setTransform(1156.9,456.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#BA4A02","#F65900"],[0,1],11.9,56,11.9,-59).s().p("A3uCfQJukqAAgIMAlvgAhIAAFpg");
	this.shape_184.setTransform(1157.1,456.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#BA4A02","#F65900"],[0,1],11.5,55.9,11.5,-59.1).s().p("A3qCfQJnkrAAgHMAlugAiIAAFrg");
	this.shape_185.setTransform(1157.4,455.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#BA4A02","#F65900"],[0,1],11,55.9,11,-59.1).s().p("A3mCeQJgkrAAgHMAltgAhIAAFrg");
	this.shape_186.setTransform(1157.7,455.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#BA4A02","#F65900"],[0,1],10.6,55.7,10.6,-59.3).s().p("A3iCdQJZkrAAgHMAlsgAgIAAFrg");
	this.shape_187.setTransform(1157.9,454.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#BA4A02","#F65900"],[0,1],10.1,55.7,10.1,-59.3).s().p("A3eCcQJSkqAAgIMAlrgAfIAAFrg");
	this.shape_188.setTransform(1158.2,454.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#BA4A02","#F65900"],[0,1],9.6,55.6,9.6,-59.4).s().p("A3aCcQJLkrAAgHMAlqgAgIgBFtg");
	this.shape_189.setTransform(1158.5,453.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#BA4A02","#F65900"],[0,1],9.2,55.5,9.2,-59.5).s().p("A3WCbQJEkqAAgIMAlpgAfIgBFtg");
	this.shape_190.setTransform(1158.7,453.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#BA4A02","#F65900"],[0,1],8.7,55.4,8.7,-59.6).s().p("A3SCbQI9ksAAgHMAlogAeIgBFug");
	this.shape_191.setTransform(1159,452.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#BA4A02","#F65900"],[0,1],8.2,55.3,8.2,-59.7).s().p("A3OCaQI2krAAgIMAlngAeIgBFvg");
	this.shape_192.setTransform(1159.3,452);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#BA4A02","#F65900"],[0,1],7.8,55.2,7.8,-59.8).s().p("A3KCZQIvkrAAgIMAlmgAdIgBFvg");
	this.shape_193.setTransform(1159.5,451.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#BA4A02","#F65900"],[0,1],7.4,55.1,7.4,-59.9).s().p("A3GCZQIoksABgHMAljgAeIAAFwg");
	this.shape_194.setTransform(1159.8,451);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#BA4A02","#F65900"],[0,1],6.9,55.1,6.9,-59.9).s().p("A3BCYQIgkrAAgIMAljgAdIgBFxg");
	this.shape_195.setTransform(1160.1,450.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#BA4A02","#F65900"],[0,1],6.4,55,6.4,-60).s().p("A2+CXQIakrAAgIMAligAcIgBFxg");
	this.shape_196.setTransform(1160.4,449.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#BA4A02","#F65900"],[0,1],6,54.9,6,-60.1).s().p("A25CWQITkrAAgHMAlhgAcIgDFxg");
	this.shape_197.setTransform(1160.6,449.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#BA4A02","#F65900"],[0,1],5.5,54.8,5.5,-60.2).s().p("A21CWQIMkrAAgIMAlfgAcIgCFzg");
	this.shape_198.setTransform(1160.9,448.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#BA4A02","#F65900"],[0,1],5.1,54.7,5.1,-60.3).s().p("A2xCVQIFkrAAgIMAlegAbIgCFzg");
	this.shape_199.setTransform(1161.1,448.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#BA4A02","#F65900"],[0,1],4.6,54.7,4.6,-60.3).s().p("A2tCUQH+krAAgHMAldgAbIgCFzg");
	this.shape_200.setTransform(1161.4,447.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#BA4A02","#F65900"],[0,1],4.1,54.6,4.1,-60.4).s().p("A2pCTQH3krAAgHMAlcgAbIgCF1g");
	this.shape_201.setTransform(1161.7,447.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#BA4A02","#F65900"],[0,1],3.7,54.4,3.7,-60.6).s().p("A2lCSQHwkqAAgIMAlbgAaIgDF1g");
	this.shape_202.setTransform(1162,446.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#BA4A02","#F65900"],[0,1],3.3,54.4,3.3,-60.6).s().p("A2hCSQHpkrAAgHMAlagAaIgDF2g");
	this.shape_203.setTransform(1162.2,446.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#BA4A02","#F65900"],[0,1],2.8,54.3,2.8,-60.7).s().p("A2dCSQHiksAAgHMAlZgAaIgDF3g");
	this.shape_204.setTransform(1162.5,445.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#BA4A02","#F65900"],[0,1],2.3,54.2,2.3,-60.8).s().p("A2ZCRQHbksAAgHMAlYgAZIgDF3g");
	this.shape_205.setTransform(1162.8,445.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#BA4A02","#F65900"],[0,1],1.8,54.1,1.8,-60.9).s().p("A2VCQQHUkrAAgIMAlXgAYIgDF3g");
	this.shape_206.setTransform(1163,444.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#BA4A02","#F65900"],[0,1],1.4,54,1.4,-61).s().p("A2RCPQHNkrAAgIMAlWgAYIgDF4g");
	this.shape_207.setTransform(1163.3,444.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#BA4A02","#F65900"],[0,1],0.9,54,0.9,-61).s().p("A2NCPQHGksAAgHMAlVgAYIgEF5g");
	this.shape_208.setTransform(1163.6,443.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#BA4A02","#F65900"],[0,1],0.5,53.9,0.5,-61.1).s().p("A2JCOQG/krAAgIMAlUgAXIgEF5g");
	this.shape_209.setTransform(1163.8,443);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#BA4A02","#F65900"],[0,1],0,53.8,0,-61.2).s().p("A2FCNQG4krAAgIMAlTgAWIgFF6g");
	this.shape_210.setTransform(1164.1,442.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#BA4A02","#F65900"],[0,1],-0.4,53.7,-0.4,-61.3).s().p("A2ACNQGxksAAgIMAlRgAWIgFF7g");
	this.shape_211.setTransform(1164.4,442);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#BA4A02","#F65900"],[0,1],-0.9,53.6,-0.9,-61.4).s().p("A19CMQGrksAAgHMAlQgAWIgFF7g");
	this.shape_212.setTransform(1164.7,441.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#BA4A02","#F65900"],[0,1],-1.3,53.5,-1.3,-61.5).s().p("A15CLQGkkrgBgIMAlPgAWIgEF9g");
	this.shape_213.setTransform(1164.9,440.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#BA4A02","#F65900"],[0,1],-1.8,53.4,-1.8,-61.6).s().p("A10CLQGcksAAgIMAlNgAVIgEF9g");
	this.shape_214.setTransform(1165.2,440.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#BA4A02","#F65900"],[0,1],-2.2,53.4,-2.2,-61.6).s().p("A1wCKQGVksAAgHMAlMgAVIgEF9g");
	this.shape_215.setTransform(1165.4,439.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#BA4A02","#F65900"],[0,1],-2.7,53.2,-2.7,-61.8).s().p("A1sCJQGOkrAAgIMAlLgAVIgFF+g");
	this.shape_216.setTransform(1165.7,439.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#BA4A02","#F65900"],[0,1],-3.1,53.2,-3.1,-61.8).s().p("A1oCIQGHkrAAgIMAlKgAUIgFF/g");
	this.shape_217.setTransform(1166,438.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#BA4A02","#F65900"],[0,1],-3.6,53.1,-3.6,-61.9).s().p("A1kCIQGAksAAgHMAlJgAUIgFF/g");
	this.shape_218.setTransform(1166.3,438.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#BA4A02","#F65900"],[0,1],-4,53,-4,-62).s().p("A1gCIQF5ksAAgIMAlIgAUIgFGAg");
	this.shape_219.setTransform(1166.5,437.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#BA4A02","#F65900"],[0,1],-4.5,52.9,-4.5,-62.1).s().p("A1cCHQFyksAAgIMAlHgATIgGGBg");
	this.shape_220.setTransform(1166.8,437.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#BA4A02","#F65900"],[0,1],-5,52.8,-5,-62.2).s().p("A1YCGQFrksAAgIMAlGgASIgGGBg");
	this.shape_221.setTransform(1167.1,436.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#BA4A02","#F65900"],[0,1],-5.4,52.7,-5.4,-62.3).s().p("A1UCFQFkksAAgIMAlFgASIgGGCg");
	this.shape_222.setTransform(1167.3,436.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#BA4A02","#F65900"],[0,1],-5.8,52.7,-5.8,-62.3).s().p("A1QCEQFdkrAAgIMAlEgASIgGGDg");
	this.shape_223.setTransform(1167.6,435.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#BA4A02","#F65900"],[0,1],-6.3,52.6,-6.3,-62.4).s().p("A1MCEQFWksAAgIMAlDgARIgHGDg");
	this.shape_224.setTransform(1167.9,435.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#BA4A02","#F65900"],[0,1],-6.8,52.5,-6.8,-62.5).s().p("A1ICDQFPksAAgIMAlCgARIgHGFg");
	this.shape_225.setTransform(1168.1,434.6);

	this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = this.shape_221.mask = this.shape_222.mask = this.shape_223.mask = this.shape_224.mask = this.shape_225.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_166}]}).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).wait(1));

	// Layer 8
	this.instance_4 = new lib.plate_t_035("synched",0);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// Lithosphere
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,120.7,-1,-67.3).s().p("AQlJpMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFNgyEogYQEqgZC/gJQB+gEgUgCIFYgCMAidgAJIA9Tgg");
	this.shape_226.setTransform(961,475.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,120.8,-1,-67.2).s().p("EgpEAJeIq8qnIEBiUIFIgWIDbDhIDOgXIIjioIANgDQAGgDCjguIAQgEQCtgwEQg/IASgEQEThAE0gxIAYgFQC2gbCvgUQB3gOBvgJIAqgDQEAgWCygIIA2gDIAwgCQBJgEgOgBIFCgFMAiygAIIA9Thg");
	this.shape_227.setTransform(961,475.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,120.9,-1,-67.1).s().p("EgpEAJfIq8qnIEBiUIFIgWIDbDhIDPgXIIiioIANgDQAGgDCjguIAQgEQCtgwEQg/IASgEQEThAE1gxIAXgFQC2gcCwgSQB3gOBvgKIAqgDQEAgVCxgIIA3gDIAwgCQBJgEgPgBIFCgHMAiygAIIA9Thg");
	this.shape_228.setTransform(961,475.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,120.8,-1,-67.2).s().p("EgpEAJeIq8qmIEBiVIFIgVIDcDiIDOgZIIiinIANgEQAIgDChgtIAQgEQCugwEQg/IASgEQEShAE1gyIAXgEQC2gbCxgUQB2gMBwgKIApgDQEAgUCygJIA3gCIAwgDQBIgEgOgCIFCgJMAixgAHIA9TgIg1ADg");
	this.shape_229.setTransform(961,475.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121,-1,-67).s().p("EgpEAJgIq8qmIEBiVIFIgVIDcDhIDOgYIIjinIAMgFICpgvIAQgFQCugwEQg/IASgEQEShAE1gyIAYgDQC0gbCzgUQB2gMBwgJIApgDQD+gVC0gHIA3gEIAwgCQBHgEgNgCIFBgMMAiNgAJIAkACIA9ThIg0AEg");
	this.shape_230.setTransform(961,475);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.1,-1,-66.9).s().p("EgpEAJhIq8qmIEBiVIFIgVIDcDhIDOgYIIjinIANgFICpgvIAQgFQCtgwEQg/IASgEQEThAE1gyIAXgDQC0gcCzgSQB3gMBwgKIApgCQD+gUC0gIIA4gDIAvgCQBHgFgNgCIFBgPMAiNgAJIAjADIA9ThIgzAFg");
	this.shape_231.setTransform(961,474.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.2,-1,-66.8).s().p("EgpEAJiIq8qmIEBiVIFIgVIDcDhIDOgYIIjioIANgEQAJgDCggtIAQgEQCugwEQg/IASgEQEShAE1gyIAYgEQCygbC1gSQB4gMBugJIApgDQD+gTC1gIIA4gDIAvgCQBGgFgMgCIFAgSMAiNgAJIAjAEIA9ThIgyAGg");
	this.shape_232.setTransform(961,474.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.3,-1,-66.7).s().p("EgpDAJjIq9qmIEBiVIFIgVIDcDhIDOgYIIjioIANgEQAKgDCfgtIAQgEQCtgwERg/IASgEQEShAE1gyIAYgEQCygaC2gSQB3gMBvgJIApgDQD9gTC2gIIA4gCIAvgCQBFgGgLgCIE/gVMAiOgAJIAiAFIA9ThIgxAHg");
	this.shape_233.setTransform(961,474.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.4,-1,-66.6).s().p("EgpDAJkIq9qnIECiUIFHgWIDcDiIDPgYIIjioIANgEQAKgECfgsIAPgEQCugwERg/IASgFQESg/E1gyIAYgEQCxgaC2gSQB4gMBvgIIApgDQD9gTC2gHIA3gDIAwgCQBFgGgKgDIE+gWMAiOgAJIAiAEIA7TiIgvAHg");
	this.shape_234.setTransform(961,474.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.5,-1,-66.5).s().p("EgpDAJlIq9qnIECiUIFIgWIDcDjIDOgZIIjioIANgEQALgECegsIAQgEQCtgwERg/IASgFQESg/E2gyIAXgEQCxgaC3gSQB4gLBvgJIApgCQD8gTC3gHIA3gCIAwgDQBEgGgJgDIE9gaMAiPgAJIAhAGIA7TiIguAIg");
	this.shape_235.setTransform(961,474.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.6,-1,-66.4).s().p("EgpDAJmIq9qnIECiUIFIgWIDcDjIDOgZIIjioIANgEICpgwIAQgEQCugwEQg/IASgFQETg/E1gyIAXgEQCwgbC5gRQB4gLBugIIAqgCQD7gTC4gHIA3gCIAwgDQBDgFgIgEIE8gdMAiPgAJIAhAHIA7TiIgtAJg");
	this.shape_236.setTransform(961,474.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.6,-1,-66.4).s().p("EgpDAJmIq9qmIECiVIFIgVIDcDiIDOgZIIjinIAOgFQALgECegrIAPgEQCugwERhAIASgEQESg/E2gyIAXgEQCvgaC5gRQB5gLBugIIAqgDQD6gRC5gHIA3gDIAwgCQBCgGgHgEIE8gfMAiPgAJIAgAHIA7TiIgsAKg");
	this.shape_237.setTransform(961,474.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.7,-1,-66.3).s().p("EgpDAJnIq9qmIECiVIFIgVIDcDiIDPgZIIiioIAOgEICpgwIAPgEQCugwERg/IASgEQEShAE2gyIAXgDQCugaC7gRQB5gLBugHIAqgDQD5gRC6gHIA3gDIAwgCQBCgGgHgEIE7giMAiQgAJIAfAIIA7TiIgrALg");
	this.shape_238.setTransform(961,474.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.8,-1,-66.2).s().p("EgpDAJoIq9qmIECiVIFIgVIDcDiIDPgZIIjioIANgEQANgECcgsIAQgEQCugwEQhAIASgDQEThAE1gyIAYgDQCtgaC8gQQB5gMBtgGIAqgDQD5gRC7gHIA3gCIAwgDQBBgGgGgFIE6gkMAiQgAJIAfAIIA7TiIgqANg");
	this.shape_239.setTransform(961,474.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,121.9,-1,-66.1).s().p("EgpDAJpIq9qmIECiVIFIgVIDcDiIDPgZIIjioIAOgEQANgECbgsIAQgEQCugwERhAIASgDQEShAE2gyIAXgDQCtgaC8gQQB6gLBtgHIAqgCQD5gRC7gHIA3gCIAwgCQBAgHgFgFIE6gnMAiQgAJIAeAJIA7TiIgpAOg");
	this.shape_240.setTransform(961,474.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122,-1,-66).s().p("EgpCAJqIq+qmIECiWIFIgUIDcDiIDPgaIIjinIAOgEQAOgFCbgrIAPgEQCugwERhAIASgEQESg/E2gyIAXgEQCsgZC+gQQB6gKBtgHIAqgDQD4gQC8gGIA3gDIAwgCQA/gHgEgFIE5gqMAiRgAJIAdAKIA7TjIgoAOg");
	this.shape_241.setTransform(961,474);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.1,-1,-65.9).s().p("EgpCAJrIq+qmIECiWIFIgUIDcDiIDPgaIIjinIAOgEQAPgFCagrIAPgEQCugwERhAIASgEQETg/E1gyIAYgEQCrgZC/gQQB5gKBtgGIArgDQD3gPC9gHIA3gCIAwgDQA/gHgEgFIE4gtMAiRgAJIAdALIA7TjIgnAPg");
	this.shape_242.setTransform(961,473.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.2,-1,-65.8).s().p("EgpCAJsIq+qmIECiWIFIgUIDcDiIDPgaIIjinIAOgFQAPgFCagqIAQgEQCugwEQhAIASgEQETg/E2gyIAXgEQCqgZDBgPQB5gKBtgHIAqgCQD3gPC+gGIA3gDIAwgCQA+gIgDgFIE4gwMAiRgAJIAcAMIA7TjIgmAQg");
	this.shape_243.setTransform(961,473.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.3,-1,-65.7).s().p("EgpCAJtIq+qnIECiVIFIgVIDcDjIDPgaIIkioIAOgEICogwIAQgDQCugxERg/IASgEQEShAE2gyIAYgEQCpgZDBgOQB6gKBtgGIAqgCQD2gPC/gGIA3gDIAwgCQA9gIgCgGIE3gxMAiSgAJIAbAMIA7TiIglARg");
	this.shape_244.setTransform(961,473.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.4,-1,-65.6).s().p("EgpCAJuIq+qnIECiVIFIgVIDcDjIDQgaIIjioIAOgEQAQgFCZgrIAPgEQCugwERhAIASgEQETg/E2gyIAXgDQCpgZDCgPQB6gJBsgGIArgCQD1gPC/gGIA4gDIAwgCQA8gIgBgGIE3g1MAiRgAJIAbANIA7TjIglASg");
	this.shape_245.setTransform(961,473.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.4,-1,-65.6).s().p("EgpCAJuIq+qmIECiVIFIgVIDcDiIDQgZIIjioIAOgEQARgGCYgqIAPgEQCvgwEQhAIASgEQETg/E2gyIAXgEQCogYDEgPQB6gJBsgGIArgCQD1gOC/gFIA4gDIAwgDQA8gIgBgGIE2g3MAiSgAJIAaANIA7TjIgkATg");
	this.shape_246.setTransform(961,473.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.5,-1,-65.5).s().p("EgpCAJvIq+qmIECiVIFJgVIDcDhIDPgYIIjioIAOgEQASgGCXgqIAQgEQCugwERhAIASgEQESg/E2gyIAYgEQCngYDEgOQB7gJBsgGIAqgCQD1gODAgFIA4gDIAwgCQA7gJAAgGIE1g6MAiTgAJIAZAOIA7TjIgjAUg");
	this.shape_247.setTransform(961,473.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.6,-1,-65.4).s().p("EgpCAJwIq+qmIECiWIFJgUIDcDhIDPgZIIkinIAOgFQASgFCXgqIAPgFQCugvERhAIASgEQETg/E2gyIAXgEQCmgZDGgNQB7gJBsgFIAqgDQD0gNDBgFIA4gDIAwgCQA6gIABgIIE1g8MAiSgAJIAZAOIA7TkIgiAVg");
	this.shape_248.setTransform(961,473.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.7,-1,-65.3).s().p("EgpCAJxIq+qmIEDiWIFIgUIDcDhIDQgZIIjinIAOgFQATgGCWgpIAQgFQCugvERhAIASgEQETg/E2gyIAXgEQClgZDHgNQB7gIBrgFIArgCQDzgNDDgFIA3gEIAwgBQA6gKACgHIEzg/MAiTgAJIAZAQIA6TjIggAWg");
	this.shape_249.setTransform(961,473.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.8,-1,-65.2).s().p("EgpBAJyIq/qmIEDiWIFIgUIDcDhIDQgZIIkioIANgEICpgwIAQgEQCugwERg/IASgEQEShAE3gyIAXgDQCkgYDJgNQB7gJBrgFIArgCQDygMDEgFIA3gDIAwgCQA5gJADgIIEyhCMAiUgAJIAYAQIA6TkIgfAXg");
	this.shape_250.setTransform(961,473.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,122.9,-1,-65.1).s().p("EgpBAJzIq/qmIEDiWIFIgUIDcDhIDQgZIIkioIAOgEICogwIAQgEQCugwERg/IASgEQEThAE2gyIAXgEQCkgXDKgNQB7gIBrgFIArgCQDxgMDEgFIA4gDIAxgCQA3gJAEgIIEyhFMAiTgAJIAYARIA6TkIgeAYg");
	this.shape_251.setTransform(961,473.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123,-1,-65).s().p("EgpBAJ0Iq/qmIEDiWIFIgUIDcDhIDQgZIIkioIAOgEQAUgHCVgpIAPgEQCugwEShAIASgEQETg/E2gyIAXgEQCjgXDKgNQB7gIBsgEIAqgCQDygMDEgEIA4gDIAxgDQA2gJAFgIIExhIMAiUgAJIAXASIA6TkIgeAZg");
	this.shape_252.setTransform(961,473);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.1,-1,-64.9).s().p("EgpBAJ1Iq/qnIEDiVIFJgVIDbDiIDQgZIIkipIAPgDICogxIAPgDQCvgwERhAIASgEQESg/E3gzIAXgDQCigXDMgNQB8gIBrgDIArgDQDwgKDFgFIA4gDIAxgDQA1gJAGgJIEwhJMAiVgAJIAWASIA6TkIgdAZg");
	this.shape_253.setTransform(961,473);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.2,-1,-64.8).s().p("EgpBAJ2Iq/qnIEDiVIFJgVIDbDiIDQgZIIkipIAPgDQAVgICTgpIAPgDQCwgwEQhAIASgEQETg/E3gzIAXgDQChgXDMgMQB8gIBrgDIArgCQDwgMDGgDIA4gDIAxgDQA1gKAGgJIEwhMMAiUgAJIAWASIA6TlIgcAag");
	this.shape_254.setTransform(961,472.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.2,-1,-64.8).s().p("EgpBAJ2Iq/qmIEDiVIFJgVIDbDiIDQgZIIkipIAPgEQAVgHCTgpIAQgEQCugwESg/IASgEQEShAE3gyIAXgDQCggXDOgMQB9gHBqgEIArgCQDvgKDHgEIA4gDIAwgDQA1gKAHgJIEvhPMAiVgAJIAVATIA6TlIgbAbg");
	this.shape_255.setTransform(961,472.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.3,-1,-64.7).s().p("EgpBAJ3Iq/qmIEDiVIFJgVIDbDiIDQgZIIkipIAPgEICpgwIAPgEQCvgwERg/IASgEQEShAE3gyIAXgDQCggXDPgMQB8gHBqgDIAsgCQDugKDIgEIA4gDIAwgDQA0gKAIgJIEuhSMAiWgAJIAUAUIA6TlIgaAcg");
	this.shape_256.setTransform(961,472.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.4,-1,-64.6).s().p("EgpBAJ4Iq/qmIEDiWIFJgUIDbDhIDQgZIIlioIAPgEICogwIAPgEQCvgwERg/IASgFQETg/E3gyIAXgEQCfgXDPgKQB9gIBqgDIAsgCQDugJDIgEIA4gDIAwgDQAzgKAJgKIEuhUMAiWgAJIATAVIA6TkIgZAeg");
	this.shape_257.setTransform(961,472.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.5,-1,-64.5).s().p("EgpAAJ5IrAqmIEDiWIFJgUIDbDhIDRgZIIkioIAPgEQAXgICRgoIAPgEQCwgwERg/IASgFQESg/E3gyIAYgEQCdgWDRgLQB8gGBqgEIAsgCQDugJDJgEIA4gCIAwgDQAzgLAJgKIEthXMAiWgAJIATAVIA6TlIgYAfg");
	this.shape_258.setTransform(961,472.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.6,-1,-64.4).s().p("EgpAAJ6IrAqmIEDiWIFJgUIDcDiIDQgaIIkioIAPgFICogvIAQgEQCvgwERhAIASgEQESg/E4gyIAXgEQCdgWDSgLQB7gGBrgDIAsgCQDtgJDKgDIA4gDIAwgDQAygLAKgKIEshaMAiXgAJIASAWIA6TlIgXAgg");
	this.shape_259.setTransform(961,472.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.7,-1,-64.3).s().p("EgpAAJ7IrAqmIEDiWIFJgUIDcDiIDQgaIIkipIAPgEQAYgICRgoIAPgEQCvgwERg/IASgEQEThAE3gyIAYgDQCcgWDSgKQB8gHBrgDIArgBQDugJDKgDIA4gDIAwgCQAygMAKgKIEshdMAiXgAJIARAXIA6TlIgWAhg");
	this.shape_260.setTransform(961,472.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.8,-1,-64.2).s().p("EgpAAJ8IrAqmIEDiWIFJgUIDcDiIDQgaIIkipIAQgEQAYgICQgoIAPgEQCvgwERg/IASgEQEUhAE2gyIAYgDQCbgWDVgKQB7gGBrgDIArgBQDtgIDLgDIA4gDIAwgDQAxgMALgKIEshgMAiWgAJIARAYIA6TmIgVAhg");
	this.shape_261.setTransform(961,472.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,123.9,-1,-64.1).s().p("Ego/AJ9IrBqnIEDiVIFJgVIDcDjIDQgaIIlipIAPgEICpgwIAOgEQCwgwEQhAIATgDQEShAE3gyIAYgDQCbgWDVgKQB7gGBrgCIAsgCQDsgHDLgDIA5gDIAwgDQAwgLAMgMIErhiMAiXgAJIAQAYIA6TmIgUAig");
	this.shape_262.setTransform(961,472.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124,-0.9,-64).s().p("Ego/AJ+IrBqnIEEiVIFIgVIDcDjIDRgaIIkipIAPgFICpgvIAPgEQCvgwERhAIASgDQEThAE3gyIAYgDQCagWDWgKQB8gFBqgCIAsgCQDrgHDNgDIA4gDIAwgCQAvgMAOgMIEphkMAiYgAJIAQAYIA5TmIgTAjg");
	this.shape_263.setTransform(960.9,472.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124,-0.9,-64).s().p("Ego/AJ+IrBqmIEEiVIFIgVIDcDiIDRgZIIlipIAPgFICogvIAPgEQCwgwEQhAIASgEQEUg/E3gyIAXgEQCZgVDYgJQB8gGBqgCIAsgBQDqgHDOgDIA4gDIAwgCQAvgMAOgMIEphnMAiXgAJIAQAZIA5TmIgSAkg");
	this.shape_264.setTransform(960.9,472);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.1,-0.9,-63.9).s().p("Ego/AJ/IrBqmIEEiVIFJgVIDcDjIDQgaIIlipIAPgFICogvIAQgEQCvgwERhAIASgEQETg/E3gyIAYgEQCYgVDYgJQB8gFBrgCIAsgBQDpgHDPgCIA4gDIAwgDQAugMAPgMIEohqMAiYgAJIAPAaIA5TmIgRAlg");
	this.shape_265.setTransform(960.9,471.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.2,-0.9,-63.8).s().p("Ego/AKAIrBqmIEEiWIFJgUIDcDiIDQgaIIlipIAPgEICpgvIAPgFQCvgvERhAIASgEQEThAE3gxIAYgEQCXgWDagIQB8gFBrgCIAsgBQDpgFDPgDIA4gDIAwgCQAtgNAQgMIEnhtMAiZgAJIAOAbIA5TmIgQAmg");
	this.shape_266.setTransform(960.9,471.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.3,-0.9,-63.7).s().p("Ego/AKBIrBqmIEEiWIFJgUIDcDiIDRgaIIkipIAPgEQAdgJCMgnIAPgEQCvgwERg/IASgFQEUg/E3gyIAXgDQCXgVDbgJQB8gEBqgCIAsgBQDpgFDPgDIA5gDIAwgCQAsgNARgMIEnhwMAiYgAJIAOAbIA5TnIgQAng");
	this.shape_267.setTransform(960.9,471.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.4,-0.9,-63.6).s().p("Ego/AKCIrBqmIEEiWIFJgUIDcDiIDRgaIIlipIAPgEICogwIAPgEQCwgwERhAIASgEQETg/E3gyIAYgDQCWgVDbgIQB9gFBqgBIAsgBQDogFDQgCIA5gDIAwgDQAsgNARgNIEmhyMAiZgAJIANAcIA5TnIgPAog");
	this.shape_268.setTransform(960.9,471.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.5,-0.9,-63.5).s().p("Ego/AKDIrBqmIEEiWIFJgUIDcDiIDRgaIIlipIAPgFICpgvIAPgEQCvgwERhAIASgEQETg/E4gyIAXgDQCVgVDdgIQB9gEBqgBIAsgBQDngFDRgCIA5gDIAwgDQArgNASgNIEmh1MAiZgAJIAMAdIA5TnIgOApg");
	this.shape_269.setTransform(960.9,471.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.6,-0.9,-63.4).s().p("Ego/AKEIrBqmIEEiWIFJgUIDcDiIDRgaIIlipIAPgFICpgvIAPgEQCvgwERhAIASgEQEUg/E3gyIAYgDQCUgVDegHQB9gFBpAAIAtgBQDmgFDSgBIA5gEIAwgCQAqgOATgNIElh4MAiZgAJIAMAeIA5TnIgNAqg");
	this.shape_270.setTransform(960.9,471.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.7,-0.9,-63.3).s().p("Ego+AKFIrCqnIEEiVIFJgVIDcDkIDRgbIIlipIAPgFQAfgKCKgmIAPgDQCwgxEQg/IASgEQEUg/E3gzIAYgDQCTgUDggHQB9gEBpgBIAsgBQDmgEDTgBIA5gEIAwgCQApgOAUgNIEkh7MAiagAJIALAeIA5ToIgMAqg");
	this.shape_271.setTransform(960.9,471.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.8,-0.9,-63.2).s().p("Ego+AKGIrCqnIEEiVIFJgVIDcDkIDRgbIIlipIAQgFICogwIAPgDQCwgxERg/IASgEQETg/E4gzIAXgDQCTgUDggHQB+gDBpgBIAsgBQDmgDDTgBIA5gEIAwgDQApgOAUgOIEkh9MAiagAJIAKAfIA5ToIgLArg");
	this.shape_272.setTransform(960.9,471.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.8,-0.9,-63.2).s().p("Ego+AKGIrCqmIEEiWIFJgUIDcDjIDRgbIImipIAPgEQAggKCJgmIAPgEQCvgwERg/IASgEQEUhAE3gyIAYgDQCSgUDhgHQB+gDBoAAIAtgBQDlgEDUgBIA5gDIAwgDQAogOAVgOIEjh/MAiagAJIAKAfIA5ToIgKAsg");
	this.shape_273.setTransform(960.9,471.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,124.9,-0.9,-63.1).s().p("Ego+AKHIrCqmIEEiWIFJgUIDcDjIDSgbIIlipIAPgEICpgwIAPgEQCvgwERhAIASgEQEUg/E3gyIAYgDQCRgUDjgGQB9gEBpABIAtgBQDkgDDVgBIA5gDIAwgDQAngPAWgOIEiiCMAibgAJIAJAgIA5ToIgJAtg");
	this.shape_274.setTransform(960.9,471.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125,-0.9,-63).s().p("Ego+AKIIrCqmIEEiWIFJgUIDcDjIDSgbIIliqIAQgDICogwIAPgFQCwgvERhAIASgEQEThAE4gxIAYgEQCQgTDjgGQB+gDBpAAIAtgBIG5gDIA5gDIAwgDQAmgPAXgOIEiiFMAibgAJIAIAgIA5ToIgIAvg");
	this.shape_275.setTransform(960.9,471);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.1,-0.9,-62.9).s().p("Ego+AKJIrCqmIEEiWIFJgUIDcDjIDSgcIIlipIAQgEICogvIAPgFQCwgvERhAIASgEQEUhAE3gxIAYgEQCPgTDlgFQB+gEBoABIAtgBQDjgCDXAAIA5gEIAwgDQAmgPAXgOIEhiIMAibgAJIAIAhIA5ToIgHAwg");
	this.shape_276.setTransform(960.9,470.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.2,-0.9,-62.8).s().p("Ego+AKKIrCqmIEEiWIFKgUIDcDjIDRgdIIlioIAQgEICpgvIAPgFQCvgvERhAIASgEQEUhAE4gxIAXgEQCPgTDmgFQB+gDBoABIAtgBIG6gCIA5gDIAwgEQAlgPAYgPIEgiKMAicgAJIAHAiIA5ToIgGAxg");
	this.shape_277.setTransform(960.9,470.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.3,-0.9,-62.7).s().p("Ego+AKLIrBqmIEEiWIFJgUIDcDjIDRgdIImioIAQgEQAigLCGglIAPgEQCwgwERg/IASgEQEThAE4gyIAYgDQCOgTDmgFQCAgDBnABIAtAAQDigCDYAAIA5gDIAwgDQAlgPAZgQIEfiNMAicgAJIAGAjIA5ToIgFAyg");
	this.shape_278.setTransform(960.9,470.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.4,-0.9,-62.6).s().p("Ego9AKMIrCqmIEEiWIFJgUIDcDjIDRgdIImioIAQgEICpgwIAOgEQCwgwERg/IASgEQEUhAE3gyIAYgDQCNgTDogFQB/gCBoABIAtAAIG6gBIA5gEIAwgDQAkgPAagQIEfiQMAicgAJIAFAjIA5TpIgEAzg");
	this.shape_279.setTransform(960.9,470.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.5,-0.9,-62.5).s().p("Ego9AKNIrCqnIEEiVIFJgVIDcDkIDRgdIImioIAQgFQAkgKCFglIAOgEQCwgwERhAIASgDQEVhAE3gyIAYgDQCMgTDpgFQB/gBBnABIAtgBIG7AAIA5gDIAwgEQAjgQAagPIEfiSMAicgAJIAFAjIA5TpIgDAzg");
	this.shape_280.setTransform(960.9,470.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.6,-0.9,-62.4).s().p("Ego9AKOIrCqnIEEiVIFJgVIDcDkIDSgdIIlioIARgFQAkgKCEglIAPgEQCwgwERhAIASgDQEThAE4gyIAYgDQCLgTDrgEQB/gCBnABIAtAAIG7AAIA5gDIAwgDQAigQAbgQIEeiWMAidgAJIAEAlIA5TpIgCA0g");
	this.shape_281.setTransform(960.9,470.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.6,-0.9,-62.4).s().p("Ego9AKOIrCqmIEEiWIFJgUIDcDkIDSgeIImioIAQgEICogwIAPgEQCwgwERg/IASgEQEUhAE4gyIAYgDQCKgSDsgEQB/gCBnACIAtAAIG7AAIA4gDIAxgDQAigQAbgQIEeiYMAidgAJIA8UOIgCA1g");
	this.shape_282.setTransform(960.9,470.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-0.9,125.7,-0.9,-62.3).s().p("Ego9AKPIrCqmIEEiWIFJgUIDdDkIDRgeIImioIAQgEICpgwIAOgEQCwgwERg/IASgEQEVhAE3gyIAYgDQCKgSDsgEQCAgBBnACIAtAAIG7ABIA4gEIAygDIA8ghIEdiaMAidgAJIA8VFg");
	this.shape_283.setTransform(960.9,470.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,125.8,-1,-62.2).s().p("Ego9AKQIrDqmIEEiWIFKgUIDcDkIDSgeIImioIAPgEQAmgMCDgkIAPgEQCwgwERg/IASgFQEUg/E4gyIAYgDQCJgSDtgDQCAgBBnABIAtAAIG7ACIA5gDIAxgEIA9ghIEbidMAiegAJIA8VHg");
	this.shape_284.setTransform(961,470.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,125.9,-1,-62.1).s().p("AQlKeMg5pgANIq8qmIEEiWIFJgUIDdDkIDRgeIImioQAGgCCzgyQC0gxEchCQEchCFCg0QCKgVEFgDQCAgBBmACIHpACIBqgGIFYjCMAidgAJIA9VJg");
	this.shape_285.setTransform(961,470.1);

	this.shape_226.mask = this.shape_227.mask = this.shape_228.mask = this.shape_229.mask = this.shape_230.mask = this.shape_231.mask = this.shape_232.mask = this.shape_233.mask = this.shape_234.mask = this.shape_235.mask = this.shape_236.mask = this.shape_237.mask = this.shape_238.mask = this.shape_239.mask = this.shape_240.mask = this.shape_241.mask = this.shape_242.mask = this.shape_243.mask = this.shape_244.mask = this.shape_245.mask = this.shape_246.mask = this.shape_247.mask = this.shape_248.mask = this.shape_249.mask = this.shape_250.mask = this.shape_251.mask = this.shape_252.mask = this.shape_253.mask = this.shape_254.mask = this.shape_255.mask = this.shape_256.mask = this.shape_257.mask = this.shape_258.mask = this.shape_259.mask = this.shape_260.mask = this.shape_261.mask = this.shape_262.mask = this.shape_263.mask = this.shape_264.mask = this.shape_265.mask = this.shape_266.mask = this.shape_267.mask = this.shape_268.mask = this.shape_269.mask = this.shape_270.mask = this.shape_271.mask = this.shape_272.mask = this.shape_273.mask = this.shape_274.mask = this.shape_275.mask = this.shape_276.mask = this.shape_277.mask = this.shape_278.mask = this.shape_279.mask = this.shape_280.mask = this.shape_281.mask = this.shape_282.mask = this.shape_283.mask = this.shape_284.mask = this.shape_285.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_226}]}).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).wait(1));

	// Crust_texture
	this.instance_5 = new lib.plate_t_05();
	this.instance_5.setTransform(571.2,314.9);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// Crust
	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(217,4,61,0)").ss(1,1,1).p("AC+gCIl7AF");
	this.shape_286.setTransform(1068,383.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCDQIAAIGngBQDUAABtgCIF9gHIepABIA9RyMhvOABGg");
	this.shape_287.setTransform(930.2,409.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCDQIBAIGmAAQDTgBBsgCIF8gHIesAAIA9RzMhvOABGg");
	this.shape_288.setTransform(930.2,409.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCEQICAHGkAAQDTgBBsgCIF5gIIewAAIA9R0MhvOABGg");
	this.shape_289.setTransform(930.2,409.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCEQICAIGkgBQDSAABqgDIF5gIIezgBIA9R1MhvOABGg");
	this.shape_290.setTransform(930.2,409.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCEQIDAIGigBQDSAABpgCIF4gKIe2gBIA9R2MhvOABGg");
	this.shape_291.setTransform(930.2,409.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCEQIEAIGgAAQDSgBBpgCIF1gLIe6gBIA9R3MhvOABGg");
	this.shape_292.setTransform(930.2,409.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCEQIFAJGfgBQDQgBBpgCIFzgLIe+gDIA9R5MhvOABGg");
	this.shape_293.setTransform(930.2,409.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCEQIFAJGfgBQDPAABogDIFzgMIfAgDIA9R6MhvOABGg");
	this.shape_294.setTransform(930.2,409.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCEQIGAJGdAAQDPgBBngCIFxgNIfEgEIA9R7MhvOABGg");
	this.shape_295.setTransform(930.2,409.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCFQIGAJGdgBQDOgBBmgCIFwgOIfGgEIA+R8MhvOABGg");
	this.shape_296.setTransform(930.2,409.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCFQIHAJGbgBQDOAABmgDIFtgOIfKgFIA+R9MhvOABGg");
	this.shape_297.setTransform(930.2,409.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCFQIHAJGbgBQDNAABlgDIFrgPIfOgFIA+R+MhvOABGg");
	this.shape_298.setTransform(930.2,409.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCFQIIAKGZgBQDNgBBjgDIFsgQIfQgFIA+R/MhvOABGg");
	this.shape_299.setTransform(930.2,409.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCFQIJAKGYgBQDLgBBkgCIFpgRIfUgHIA+SBMhvOABGg");
	this.shape_300.setTransform(930.2,409.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCFQIKAKGWgBQDLAABjgDIFngSIfYgHIA+SCMhvOABGg");
	this.shape_301.setTransform(930.2,409.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCGQIKAKGVgBQDLgBBigDIFmgSIfbgIIA+SDMhvOABGg");
	this.shape_302.setTransform(930.2,409.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCGQIKAKGUgBQDLgBBhgDIFlgTIfegIIA+SEMhvOABGg");
	this.shape_303.setTransform(930.2,409.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCGQILAKGTgBQDKAABggDIFkgUIfhgJIA+SFMhvOABGg");
	this.shape_304.setTransform(930.2,409.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCGQIMALGRgCQDKAABfgDIFigVIflgJIA+SGMhvOABGg");
	this.shape_305.setTransform(930.2,409.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCGQIMALGRgBQDJgBBegDIFggWIfogJIA/SHMhvOABGg");
	this.shape_306.setTransform(930.2,409.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCGQINALGPgBQDJgBBegDIFegWIfrgKIA/SIMhvOABGg");
	this.shape_307.setTransform(930.2,409.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCGQIOAMGOgCQDHAABegDIFdgYIfugLIA/SKMhvOABGg");
	this.shape_308.setTransform(930.2,409.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCHQIPALGNgBQDHgBBcgDIFbgYIfygMIA/SLMhvOABGg");
	this.shape_309.setTransform(930.2,409.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCHQIPALGMgBQDGgBBcgDIFagZIf1gMIA/SMMhvOABGg");
	this.shape_310.setTransform(930.2,409.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCHQIQAMGLgCQDFgBBbgDIFYgZIf5gNIA/SNMhvOABGg");
	this.shape_311.setTransform(930.2,409.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCHQIQAMGKgCQDFAABbgEIFXgaIf7gNIA/SOMhvOABGg");
	this.shape_312.setTransform(930.2,409.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCHQIRAMGIgBQDFgBBagDIFVgcIf/gNIA/SPMhvOABGg");
	this.shape_313.setTransform(930.2,409.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCHQISANGHgCQDEgBBYgDIFUgcMAgDgAOIA/SQMhvOABGg");
	this.shape_314.setTransform(930.2,409.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCIQITAMGFgCQDEAABYgEIFSgdMAgGgAPIA/SSMhvOABGg");
	this.shape_315.setTransform(930.2,409.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCIQITAMGFgBQDCgBBYgEIFQgdMAgKgAQIA/STMhvOABGg");
	this.shape_316.setTransform(930.2,409.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCIQIUANGDgCQDCgBBXgDIFPgfMAgNgAQIA/SUMhvOABGg");
	this.shape_317.setTransform(930.2,409.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCIQIUANGCgCQDCgBBWgDIFOgfMAgQgARIA/SVMhvOABGg");
	this.shape_318.setTransform(930.2,409.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCIQIVANGBgCQDBAABVgEIFMggMAgUgARIA/SWMhvOABGg");
	this.shape_319.setTransform(930.2,409.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCIQIWAOF/gCQDBgBBUgEIFLggMAgXgASIA/SXMhvOABGg");
	this.shape_320.setTransform(930.2,409.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCIQIWAOF/gCQDAgBBUgDIFIgiMAgbgASIA/SYMhvOABGg");
	this.shape_321.setTransform(930.2,409.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCJQIWANF+gCQC/AABUgEIFHgjMAgdgASIBASZMhvOABGg");
	this.shape_322.setTransform(930.2,409.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCJQIYAOF7gCQC/gBBTgEIFGgjMAgggAUIBASbMhvOABGg");
	this.shape_323.setTransform(930.2,409.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCJQIYAOF7gCQC+gBBSgEIFEgkMAgkgAUIBAScMhvOABGg");
	this.shape_324.setTransform(930.2,409.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCJQIYAOF6gCQC+gBBRgEIFDgkMAgngAVIBASdMhvOABGg");
	this.shape_325.setTransform(930.2,409.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCJQIaAPF4gDQC9AABRgEIFBgmMAgqgAVIBASeMhvOABGg");
	this.shape_326.setTransform(930.2,409.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCJQIaAPF4gCQC8gBBQgEIE/gmMAgugAWIBASfMhvOABGg");
	this.shape_327.setTransform(930.2,409.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCKQIbAOF2gCQC8gBBOgEIE/gnMAgxgAWIBASgMhvOABGg");
	this.shape_328.setTransform(930.2,409.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCKQIbAPF2gDQC6gBBOgEIE9goMAg1gAWIBAShMhvOABGg");
	this.shape_329.setTransform(930.2,409.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCKQIcAPF0gCQC7gBBNgEIE7gpMAg4gAYIBASjMhvOABGg");
	this.shape_330.setTransform(930.2,409.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCKQIcAPF0gCQC5gBBNgEIE6gqMAg7gAYIBASkMhvOABGg");
	this.shape_331.setTransform(930.2,409.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCKQIdAQFygDQC5gBBMgEIE4gqMAg/gAZIBASlMhvOABGg");
	this.shape_332.setTransform(930.2,409.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCKQIdAQFxgCQC5gBBLgFIE3grMAhBgAZIBBSmMhvOABGg");
	this.shape_333.setTransform(930.2,409.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCKQIfAQFugCQC5gBBKgEIE2gsMAhEgAaIBBSnMhvOABGg");
	this.shape_334.setTransform(930.2,409.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCLQIfAQFugDQC3gBBKgEIE0gtMAhIgAaIBBSoMhvOABGg");
	this.shape_335.setTransform(930.2,409.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCLQIgAQFsgDQC3gBBKgEIEyguMAhLgAaIBBSpMhvOABGg");
	this.shape_336.setTransform(930.2,409.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCLQIhAQFrgCQC2gBBJgFIEwguMAhPgAcIBBSrMhvOABGg");
	this.shape_337.setTransform(930.2,409.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCLQIhARFqgDQC2gBBIgFIEvgvMAhSgAcIBBSsMhvOABGg");
	this.shape_338.setTransform(930.2,409.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCLQIiARFpgDQC1gBBHgEIEugwMAhVgAdIBBStMhvOABGg");
	this.shape_339.setTransform(930.2,409.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCLQIiARFogCQC1gBBGgFIEsgxMAhZgAdIBBSuMhvOABGg");
	this.shape_340.setTransform(930.2,409.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCLQIjASFngDQC0gBBGgFIEqgxMAhcgAeIBBSvMhvOABGg");
	this.shape_341.setTransform(930.2,409.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCMQIkARFlgDQCzgBBGgFIEogyMAhggAeIBBSwMhvOABGg");
	this.shape_342.setTransform(930.2,409.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCMQIkARFlgDQCygBBEgEIEog0MAhjgAeIBBSxMhvOABGg");
	this.shape_343.setTransform(930.2,409.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCMQIlASFjgDQCzgBBCgFIEng0MAhlgAfIBCSyMhvOABGg");
	this.shape_344.setTransform(930.2,409.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCMQImASFigDQCxgBBDgFIEkg1MAhpgAgIBCS0MhvOABGg");
	this.shape_345.setTransform(930.2,409.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("rgba(217,4,61,0)").ss(1,1,1).p("ACRgZIkhAz");
	this.shape_346.setTransform(1052.5,382.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCMQImASFhgDQCxgBBCgFIEjg1MAhsgAhIBCS1MhvOABGg");
	this.shape_347.setTransform(930.2,409.2);

	this.shape_286.mask = this.shape_287.mask = this.shape_288.mask = this.shape_289.mask = this.shape_290.mask = this.shape_291.mask = this.shape_292.mask = this.shape_293.mask = this.shape_294.mask = this.shape_295.mask = this.shape_296.mask = this.shape_297.mask = this.shape_298.mask = this.shape_299.mask = this.shape_300.mask = this.shape_301.mask = this.shape_302.mask = this.shape_303.mask = this.shape_304.mask = this.shape_305.mask = this.shape_306.mask = this.shape_307.mask = this.shape_308.mask = this.shape_309.mask = this.shape_310.mask = this.shape_311.mask = this.shape_312.mask = this.shape_313.mask = this.shape_314.mask = this.shape_315.mask = this.shape_316.mask = this.shape_317.mask = this.shape_318.mask = this.shape_319.mask = this.shape_320.mask = this.shape_321.mask = this.shape_322.mask = this.shape_323.mask = this.shape_324.mask = this.shape_325.mask = this.shape_326.mask = this.shape_327.mask = this.shape_328.mask = this.shape_329.mask = this.shape_330.mask = this.shape_331.mask = this.shape_332.mask = this.shape_333.mask = this.shape_334.mask = this.shape_335.mask = this.shape_336.mask = this.shape_337.mask = this.shape_338.mask = this.shape_339.mask = this.shape_340.mask = this.shape_341.mask = this.shape_342.mask = this.shape_343.mask = this.shape_344.mask = this.shape_345.mask = this.shape_346.mask = this.shape_347.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_287},{t:this.shape_286}]}).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).wait(1));

	// sea
	this.instance_6 = new lib.plate_t_012();
	this.instance_6.setTransform(0,383.8);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	// grass
	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4gCIFXgCMAh/gAGIA9RyMhvOABGg");
	this.shape_348.setTransform(929.9,405.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMMA4OgAKIA9RyMhvOABGg");
	this.shape_349.setTransform(929.9,405.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AAIFXgEMAh/gAHIA9RzMhvOABGg");
	this.shape_350.setTransform(929.9,405.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ABIFXgFMAh/gAHIA9RzMhvOABGg");
	this.shape_351.setTransform(929.9,405.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ACIFXgHMAh/gAHIA9R0MhvOABGg");
	this.shape_352.setTransform(929.9,405.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ADIFXgIMAh/gAHIA9R0MhvOABGg");
	this.shape_353.setTransform(929.9,405.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AEIFXgJMAh/gAIIA9R1MhvOABGg");
	this.shape_354.setTransform(929.9,405.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AFIFXgKMAh/gAIIA9R1MhvOABGg");
	this.shape_355.setTransform(929.9,405.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AGIFXgMMAh/gAIIA9R2MhvOABGg");
	this.shape_356.setTransform(929.9,405.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AHIFXgNMAh/gAIIA9R2MhvOABGg");
	this.shape_357.setTransform(929.9,405.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AIIFXgOMAh/gAJIA9R3MhvOABGg");
	this.shape_358.setTransform(929.9,405.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AJIFXgPMAh/gAJIA9R3MhvOABGg");
	this.shape_359.setTransform(929.9,405.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AJIFXgPMAh/gAKIA9R4MhvOABGg");
	this.shape_360.setTransform(929.9,405.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AKIFXgRMAh/gAJIA9R4MhvOABGg");
	this.shape_361.setTransform(929.9,405.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ALIFXgSMAh/gAKIA9R5MhvOABGg");
	this.shape_362.setTransform(929.9,405.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AMIFXgTMAh/gAKIA9R5MhvOABGg");
	this.shape_363.setTransform(929.9,405.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ANIFXgUMAh/gALIA9R6MhvOABGg");
	this.shape_364.setTransform(929.9,405.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AOIFXgVMAh/gALIA9R6MhvOABGg");
	this.shape_365.setTransform(929.9,405.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4APIFXgXMAh/gAKIA9R6MhvOABGg");
	this.shape_366.setTransform(929.9,405.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AQIFXgYMAh/gALIA9R7MhvOABGg");
	this.shape_367.setTransform(929.9,405.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ARIFXgZMAh/gAMIA9R8MhvOABGg");
	this.shape_368.setTransform(929.9,405.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ASIFXgaMAh/gAMIA9R8MhvOABGg");
	this.shape_369.setTransform(929.9,405.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ATIFXgcMAh/gAMIA9R9MhvOABGg");
	this.shape_370.setTransform(929.9,405.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AUIFXgdMAh/gAMIA9R9MhvOABGg");
	this.shape_371.setTransform(929.9,405.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AVIFXgeMAh/gANIA9R+MhvOABGg");
	this.shape_372.setTransform(929.9,405.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AWIFXgfMAh/gANIA9R+MhvOABGg");
	this.shape_373.setTransform(929.9,405.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AWIFXgfMAh/gAOIA9R/MhvOABGg");
	this.shape_374.setTransform(929.9,405.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AXIFXghMAh/gANIA9R/MhvOABGg");
	this.shape_375.setTransform(929.9,405.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AYIFXgiMAh/gANIA9R/MhvOABGg");
	this.shape_376.setTransform(929.9,405.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AZIFXgjMAh/gAOIA9SAMhvOABGg");
	this.shape_377.setTransform(929.9,405.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AaIFXgkMAh/gAOIA9SAMhvOABGg");
	this.shape_378.setTransform(929.9,405.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AbIFXglMAh/gAPIA9SBMhvOABGg");
	this.shape_379.setTransform(929.9,405.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AcIFXgnMAh/gAOIA9SBMhvOABGg");
	this.shape_380.setTransform(929.9,405.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AdIFXgoMAh/gAPIA9SCMhvOABGg");
	this.shape_381.setTransform(929.9,405.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AeIFXgpMAh/gAQIA9SDMhvOABGg");
	this.shape_382.setTransform(929.9,405.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AfIFXgqMAh/gAQIA9SDMhvOABGg");
	this.shape_383.setTransform(929.9,405.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AgIFXgsMAh/gAQIA9SEMhvOABGg");
	this.shape_384.setTransform(929.9,405.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AhIFXgtMAh/gAQIA9SEMhvOABGg");
	this.shape_385.setTransform(929.9,405.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AiIFXguMAh/gARIA9SFMhvOABGg");
	this.shape_386.setTransform(929.9,405.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AjIFXgvMAh/gARIA9SFMhvOABGg");
	this.shape_387.setTransform(929.9,405.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AkIFXgxMAh/gARIA9SGMhvOABGg");
	this.shape_388.setTransform(929.9,405.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AlIFXgyMAh/gARIA9SGMhvOABGg");
	this.shape_389.setTransform(929.9,405.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AmIFXgzMAh/gASIA9SHMhvOABGg");
	this.shape_390.setTransform(929.9,405.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AnIFXg0MAh/gASIA9SHMhvOABGg");
	this.shape_391.setTransform(929.9,405.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AoIFXg2MAh/gASIA9SIMhvOABGg");
	this.shape_392.setTransform(929.9,405.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ApIFXg3MAh/gASIA9SIMhvOABGg");
	this.shape_393.setTransform(929.9,405.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ApIFXg3MAh/gATIA9SJMhvOABGg");
	this.shape_394.setTransform(929.9,405.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AqIFXg4MAh/gATIA9SJMhvOABGg");
	this.shape_395.setTransform(929.9,405.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4ArIFXg5MAh/gAUIA9SKMhvOABGg");
	this.shape_396.setTransform(929.9,405.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AsIFXg7MAh/gATIA9SKMhvOABGg");
	this.shape_397.setTransform(929.9,405.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AtIFXg8MAh/gATIA9SKMhvOABGg");
	this.shape_398.setTransform(929.9,405.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AuIFXg9MAh/gAUIA9SLMhvOABGg");
	this.shape_399.setTransform(929.9,405.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AvIFXg+MAh/gAUIA9SLMhvOABGg");
	this.shape_400.setTransform(929.9,405.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AwIFXg/MAh/gAVIA9SMMhvOABGg");
	this.shape_401.setTransform(929.9,405.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AwIFXhAMAh/gAUIA9SMMhvOABGg");
	this.shape_402.setTransform(929.9,405.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4AxIFXhBMAh/gAVIA9SNMhvOABGg");
	this.shape_403.setTransform(929.9,405.3);

	this.shape_348.mask = this.shape_349.mask = this.shape_350.mask = this.shape_351.mask = this.shape_352.mask = this.shape_353.mask = this.shape_354.mask = this.shape_355.mask = this.shape_356.mask = this.shape_357.mask = this.shape_358.mask = this.shape_359.mask = this.shape_360.mask = this.shape_361.mask = this.shape_362.mask = this.shape_363.mask = this.shape_364.mask = this.shape_365.mask = this.shape_366.mask = this.shape_367.mask = this.shape_368.mask = this.shape_369.mask = this.shape_370.mask = this.shape_371.mask = this.shape_372.mask = this.shape_373.mask = this.shape_374.mask = this.shape_375.mask = this.shape_376.mask = this.shape_377.mask = this.shape_378.mask = this.shape_379.mask = this.shape_380.mask = this.shape_381.mask = this.shape_382.mask = this.shape_383.mask = this.shape_384.mask = this.shape_385.mask = this.shape_386.mask = this.shape_387.mask = this.shape_388.mask = this.shape_389.mask = this.shape_390.mask = this.shape_391.mask = this.shape_392.mask = this.shape_393.mask = this.shape_394.mask = this.shape_395.mask = this.shape_396.mask = this.shape_397.mask = this.shape_398.mask = this.shape_399.mask = this.shape_400.mask = this.shape_401.mask = this.shape_402.mask = this.shape_403.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_348}]}).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,313.7,1280,217.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.plate_t_015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 copy
	this.instance = new lib.plate_t_031();
	this.instance.setTransform(-22.1,-148.1,1,1,16);
	this.instance.alpha = 0;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-10,-8,21,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({alpha:1},5).to({_off:true},40).wait(7));

	// Layer 5
	this.instance_1 = new lib.plate_t_031();
	this.instance_1.setTransform(-5,-143.8,1,1,39.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_1.cache(-10,-8,21,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).to({alpha:1},5).to({_off:true},40).wait(7));

	// Layer 4 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AhWAOQgngOAAgTQAAgTAnASQAnASAvADQAyAFAagDQAagDASAAQASAAgmAOQgnAQg3AAQg1AAgngQg");
	this.shape.setTransform(-20.4,-147.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AiIgBQAJgaAxAHQAyAHAwAEQAyADAZABIAsAAQg7Adg8gBQg6gBg1ABIgEAAQgyAAAJgYg");
	this.shape_1.setTransform(-22.5,-146.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AiXAIQASggA9gDQA9gEAwACQAyACAZAEQAZAFASAAQg7AdhAgCQg/gChFARQgXAGgNAAQgaAAALgWg");
	this.shape_2.setTransform(-24.3,-145.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AilAXQAbgmBIgPQBGgOAyAAQAyAAAZAJQAZAIASAAQg7AdhGgCQhDgChUAgQgmAPgPAAQgSAAAOgWg");
	this.shape_3.setTransform(-26.2,-144.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("Ai1AmQAjguBTgZQBSgZAygCQAygBAZAMQAYANASAAQASAAgmAPQgnAQhKgEQhJgEhiAwQgzAagPAAQgPAAASgXg");
	this.shape_4.setTransform(-27.8,-143.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},50).wait(7));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AhjAOQgmgOASAAQASAAAaADQAaADAxgFQAwgDAngSQAngSAAATQAAATgnAOQgnAQg1AAQg3AAgngQg");
	this.shape_5.setTransform(-18,-146.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("Ah4AOQgmgOAOgEQANgFAdgBIBQgFIBigJQAvgGAVAdQAVAbhEgCQhFgCg1AEIgVAAQgqAAgggMg");
	this.shape_6.setTransform(-15.9,-146.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("ABpAgQhhgUg2AHQg4AIgngPQgngNAJgKQAJgLAggGQAhgGA0gCQAygDA6AHQA5AHAqAlQAbAagiAAQgRAAghgGg");
	this.shape_7.setTransform(-13.7,-146.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AByApQh9glg5ALQg4ALgngOQgngNAEgQQAFgQAjgLQAkgKA2gCQA1gBBBAUQBDATA+AvQAjAcgZAAQgUAAg3gQg");
	this.shape_8.setTransform(-11.5,-146.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AB7AyQibg1g5ANQg5AOgngNQgngMAAgWQAAgVAmgQQAngPA3AAQA3AABKAgQBNAgBSA5QArAegVAAQgUAAhLgag");
	this.shape_9.setTransform(-9.3,-146.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("ACNA8IgegLQiSgzg9ACIg0ADQgeAAgYgFQgMgEgJgEQgYgMgBgQIAAgBQAAgRAXgNQAKgFANgEQASgHAWgDQAcgEAmAFQAqADA2ATQAXAJAYALQAjAQAJAMQAxAbBMAyQAuAfgTAAQgTAAhTgfg");
	this.shape_10.setTransform(-7,-144.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("ACdBGIghgNQieg8hFgEQgkgDgWAAQghgBgagHIgYgIQgcgMgBgRIAAgBQAAgSAbgOQALgFAPgEQAUgGAZgDQAdgDAtAJQAtAHA6AXQAeALAYAMQAtAVgFALQArAeBeA6QA2AigRAAQgSAAhfglg");
	this.shape_11.setTransform(-4.5,-143.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("ACuBRIgmgPQiphEhOgOQgogHgXgBQgkgCgcgHQgPgDgLgFQghgMgBgTIAAAAQAAgTAfgOQANgGAQgEQAXgGAbgBQAdgCA1ANQAwALBAAaQAiANAZAMQA3AbgUAJQAnAhBwBDQA8AlgPAAQgRAAhpgrg");
	this.shape_12.setTransform(-2,-141.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AC+BbIgpgRQi2hNhWgWQgtgMgXgCQgngDgegGIgegIQglgMAAgUIAAgBQAAgUAigPQAPgGARgEQAZgFAfgBQAegBA7ASQAzAOBHAeQAmAPAZANQBBAhgiAIQAhAjCDBMQBEAogOAAQgPAAh1gyg");
	this.shape_13.setTransform(0.6,-139.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("ACfBRQkmiBhDgGQhCgFgpgNQgqgMAAgVQAAgWAngPQAngQA4AAQA5AACsBJQChBDhEAKQAeAnCgBbQBCAlgLAAQgQAAivhOg");
	this.shape_14.setTransform(3.3,-138.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},59).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},45).wait(7));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgCTAi7QgxgZgbguQgZgqgNgvQgLgxAlgOQAkgNAmgHQBPgfgQhNQgRhNgRgdQgxiXBDiUQAhg/gKhAQgJgXgFgZQACghAQgeQAdhzg9hrQgahJg1g7QhEggmWFpQn4mKp/mIQrvnMAAqNQAAqNLvnNQLxnOQmAAQQnAALwHOQLwHNAAKNQAAKNrwHMQq9Guh4HeQsxnZhfAPQhcAOgNADQgNADgJASQgQAdgDAUQgJApAQApQASAoAVAsQAVAtgSAtQgbAegMAjQAEAiAMAgQABAUgIAUQgrBsgLBwQAABIAQBHQADAOAGANQAlBbBLA/QAjAaAsAZQAsAZAIAvQAFBBgpA4QgoA4hBAPQgdAHgfAAQg7AAg4gZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-10.2,y:-234.2}).wait(113).to({graphics:null,x:0,y:0}).wait(7));

	// Layer 6 copy 4
	this.instance_2 = new lib.plate_t_031();
	this.instance_2.setTransform(-18.6,-138.2,1,1,-70.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_2.cache(-10,-8,21,16);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).to({alpha:1},8).to({_off:true},42).wait(7));

	// Layer 6 copy 3
	this.instance_3 = new lib.plate_t_031();
	this.instance_3.setTransform(-21,-99.5,1,1,-70.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_3.cache(-10,-8,21,16);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({alpha:1},7).to({_off:true},55).wait(7));

	// Layer 6 copy 2
	this.instance_4 = new lib.plate_t_031();
	this.instance_4.setTransform(-17.1,-57.5,1,1,-70.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_4.cache(-10,-8,21,16);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({alpha:1},7).to({_off:true},71).wait(7));

	// Layer 6 copy
	this.instance_5 = new lib.plate_t_031();
	this.instance_5.setTransform(-1.2,-24,1,1,-70.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_5.cache(-10,-8,21,16);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({alpha:1},10).to({_off:true},78).wait(7));

	// Layer 6
	this.instance_6 = new lib.plate_t_031();
	this.instance_6.setTransform(-25.7,-31.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_6.cache(-10,-8,21,16);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({alpha:1},10).to({_off:true},78).wait(7));

	// Layer 8
	this.instance_7 = new lib.plate_t_057("synched",0);
	this.instance_7.setTransform(-13.8,-26.8,1,1,0,0,0,26.9,16.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({alpha:1},10).to({_off:true},78).wait(7));

	// Layer 3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AqACjIAAlFIUAAAIAAFFg");
	this.shape_15.setTransform(15.1,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AqAC3IAAlnQJzgOKNAVIAAFgg");
	this.shape_16.setTransform(15.1,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AqADLIAAmIQJlgeKaAqIABF8g");
	this.shape_17.setTransform(15.1,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("Ap/DfIgBmqQJYgtKnBAIACGXg");
	this.shape_18.setTransform(15,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("Ap/DzIgBnMQJKg7K0BUIADGzg");
	this.shape_19.setTransform(15,-3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("Ap/EHIgBnuQI8hKLCBqIADHOg");
	this.shape_20.setTransform(15,-5.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("Ap/EbIgBoPQIuhaLPB/IAEHqg");
	this.shape_21.setTransform(15,-7.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("Ap/EuIgBoxQIghoLdCUIAEIFg");
	this.shape_22.setTransform(15,-9.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("Ap/FCIgBpSQISh4LqCqIAFIgg");
	this.shape_23.setTransform(15,-11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("Ap/FWIgBp0QIEiGL3C+IAGI8g");
	this.shape_24.setTransform(15,-13.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("Ap/FqIgBqWQH2iVMFDUIAGJXg");
	this.shape_25.setTransform(15,-15.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("Ap/F+IgBq4QHpikMSDpIAGJzg");
	this.shape_26.setTransform(15,-17.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("Ap/GSIgBrZQHbizMfD+IAHKOg");
	this.shape_27.setTransform(15,-19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("Ap/GmIgBr7QHNjCMsETIAIKqg");
	this.shape_28.setTransform(15,-21.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("Ap/G6IgBsdQG/jRM6EpIAILFg");
	this.shape_29.setTransform(15,-23.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("Ap/HOIgBs/QGxjfNHE9IAJLhg");
	this.shape_30.setTransform(15,-25.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("Ap/HiIgBtgQGjjvNVFTIAJL8g");
	this.shape_31.setTransform(15,-27.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("Ap/H2IgBuCQGVj+NiFoIAKMYg");
	this.shape_32.setTransform(15,-29);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("Ap/IKIgBukQGHkNNvF+IALMzg");
	this.shape_33.setTransform(15,-31);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("Ap/IeIgBvGQF5kbN9GSIALNPg");
	this.shape_34.setTransform(15,-33);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("Ap+IyIgDvoQFskqOLGoIAMNqg");
	this.shape_35.setTransform(14.9,-35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("Ap+JGIgDwJQFek6OYG9IANOGg");
	this.shape_36.setTransform(14.9,-37);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("Ap+JaIgDwrQFQlIOlHSIAOOhg");
	this.shape_37.setTransform(14.9,-39);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("Ap+JuIgDxNQFClXOzHnIAOO9g");
	this.shape_38.setTransform(14.9,-41);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("Ap+KCIgDxvQE1lmO/H9IAPPYg");
	this.shape_39.setTransform(14.9,-43);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("Ap+KWIgDyQQEml1POIRIAPP0g");
	this.shape_40.setTransform(14.9,-45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("Ap+KqIgDyyQEZmEPaInIAQQPg");
	this.shape_41.setTransform(14.9,-47);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("Ap+K+IgDzUQELmTPnI8IARQrg");
	this.shape_42.setTransform(14.9,-49);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("Ap+LSIgDz2QD9miP1JRIARRHg");
	this.shape_43.setTransform(14.9,-51);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("Ap+LlIgD0XQDvmwQDJmIARRhg");
	this.shape_44.setTransform(14.9,-53);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("Ap+L5IgD05QDhm/QQJ7IASR9g");
	this.shape_45.setTransform(14.9,-55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("Ap+MNIgD1aQDTnPQeKRIASSYg");
	this.shape_46.setTransform(14.9,-57);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF6600").s().p("Ap+MhIgD18QDFndQrKlIATS0g");
	this.shape_47.setTransform(14.9,-59);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6600").s().p("Ap+M1IgD2eQC3nsQ4K7IAUTPg");
	this.shape_48.setTransform(14.9,-61);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF6600").s().p("Ap+NJIgD3AQCpn7RGLQIAUTrg");
	this.shape_49.setTransform(14.9,-63);

	this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},25).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},54).wait(7));

	// Layer 9
	this.instance_8 = new lib.plate_t_014("synched",0);
	this.instance_8.setTransform(-18.5,-106.8,0.621,0.882,0,0,0,-0.1,-0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({_off:false},0).to({alpha:1,startPosition:9},9).to({_off:true},74).wait(7));

	// Symbol 8
	this.instance_9 = new lib.plate_t_030("synched",0);
	this.instance_9.setTransform(13.5,1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({y:-14.1,startPosition:5},15).to({_off:true},79).wait(7));

	// Symbol 8
	this.instance_10 = new lib.plate_t_030("synched",0);
	this.instance_10.setTransform(-2.5,1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({y:-14.1,startPosition:8},17).to({_off:true},82).wait(7));

	// Symbol 8
	this.instance_11 = new lib.plate_t_030("synched",0);
	this.instance_11.setTransform(-19.5,1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({y:-14.1},20).to({_off:true},84).wait(7));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ApOhjQABAAJNgPIJPgPIr1DlIjKAegApOhjIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:20,y:-0.9}).wait(113).to({graphics:null,x:0,y:0}).wait(7));

	// Layer 7 copy
	this.instance_12 = new lib.plate_t_031();
	this.instance_12.setTransform(2.3,4.3,1,1,9);
	this.instance_12.alpha = 0;
	this.instance_12.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_12.cache(-10,-8,21,16);

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},12).to({_off:true},101).wait(7));

	// Layer 7
	this.instance_13 = new lib.plate_t_031();
	this.instance_13.setTransform(-12.1,7,1,1,38.5);
	this.instance_13.alpha = 0;
	this.instance_13.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_13.cache(-10,-8,21,16);

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},12).to({_off:true},101).wait(7));

	// Layer 2
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6600").s().p("AnSBYIAAivIOlAAIAACvg");
	this.shape_50.setTransform(-2.3,21.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6600").s().p("AnbBcIAAi3IO3AAIAAC3g");
	this.shape_51.setTransform(-1.4,12);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6600").s().p("AnjBfIAAi9IPHAAIAAC9g");
	this.shape_52.setTransform(-0.6,11.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6600").s().p("AnsBjIAAjFIPZAAIAADFg");
	this.shape_53.setTransform(0.3,11.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF6600").s().p("An1BnIAAjNIPrAAIAADNg");
	this.shape_54.setTransform(1.2,10.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF6600").s().p("An+BrIAAjUIP9AAIAADUg");
	this.shape_55.setTransform(2.1,10.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF6600").s().p("AoGBuIAAjbIQNAAIAADbg");
	this.shape_56.setTransform(2.9,10.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6600").s().p("AoPByIAAjjIQfAAIAADjg");
	this.shape_57.setTransform(3.8,9.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6600").s().p("AoYB2IAAjrIQwAAIAADrg");
	this.shape_58.setTransform(4.7,9.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6600").s().p("AogB6IAAjzIRBAAIAADzg");
	this.shape_59.setTransform(5.5,9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6600").s().p("AopB9IAAj5IRTAAIAAD5g");
	this.shape_60.setTransform(6.4,8.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6600").s().p("AoyCBIAAkBIRkAAIAAEBg");
	this.shape_61.setTransform(7.3,8.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6600").s().p("Ao6CFIAAkJIR1AAIAAEJg");
	this.shape_62.setTransform(8.1,7.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6600").s().p("ApDCJIAAkRISHAAIAAERg");
	this.shape_63.setTransform(9,7.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6600").s().p("ApMCMIAAkXISZAAIAAEXg");
	this.shape_64.setTransform(9.9,7.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF6600").s().p("ApUCQIAAkfISpAAIAAEfg");
	this.shape_65.setTransform(10.7,6.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6600").s().p("ApdCUIAAknIS7AAIAAEng");
	this.shape_66.setTransform(11.6,6.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF6600").s().p("ApmCYIAAkuITNAAIAAEug");
	this.shape_67.setTransform(12.5,6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6600").s().p("ApuCbIAAk1ITdAAIAAE1g");
	this.shape_68.setTransform(13.3,5.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF6600").s().p("Ap3CfIAAk9ITvAAIAAE9g");
	this.shape_69.setTransform(14.2,5.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6600").s().p("AqACjIAAlFIUAAAIAAFFg");
	this.shape_70.setTransform(15.1,4.9);

	this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},84).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1).to({y:20.4},0).wait(1).to({y:19.4},0).wait(1).to({y:18.4},0).wait(1).to({y:17.4},0).wait(1).to({y:16.4},0).wait(1).to({y:15.4},0).wait(1).to({y:14.4},0).wait(1).to({y:13.4},0).wait(1).to({y:12.4},0).to({_off:true},1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-9.1,52.6,21.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-39.2,-3.5,83.7,15.7), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-39.2,-3.5,85.4,15.7), new cjs.Rectangle(-39.2,-3.5,87.1,15.7), new cjs.Rectangle(-39.2,-6.1,88.9,18.3), new cjs.Rectangle(-39.2,-6.1,90.6,18.3), new cjs.Rectangle(-39.2,-6.1,92.4,18.3), new cjs.Rectangle(-39.2,-6.1,94.1,18.3), new cjs.Rectangle(-39.2,-6.1,95.8,18.3), new cjs.Rectangle(-39.2,-6.1,97.6,18.3), new cjs.Rectangle(-39.2,-6.1,99.3,18.3), new cjs.Rectangle(-39.2,-6.1,101,18.3), new cjs.Rectangle(-39.2,-6.1,102.8,18.3), new cjs.Rectangle(-39.2,-6.7,104.5,18.9), new cjs.Rectangle(-39.2,-7.6,106.2,19.8), new cjs.Rectangle(-39.2,-8.5,108,20.7), new cjs.Rectangle(-39.2,-11.3,109.7,23.5), new cjs.Rectangle(-49,-47.6,128.2,59.8), rect=new cjs.Rectangle(-49,-42.7,128.2,54.9), rect, rect=new cjs.Rectangle(-49.1,-42.7,128.3,54.9), rect, new cjs.Rectangle(-71.3,-228.5,150.5,240.7), new cjs.Rectangle(-73,-232.8,152.2,245), new cjs.Rectangle(-73.9,-237.5,153.1,249.7), new cjs.Rectangle(-74.5,-242.2,153.7,254.4), new cjs.Rectangle(-74.8,-247,154,259.2), new cjs.Rectangle(-75,-251.8,154.2,264), new cjs.Rectangle(-75.2,-256.4,154.4,268.6), new cjs.Rectangle(-75.3,-261,154.5,273.2), new cjs.Rectangle(-75.4,-265.7,154.6,277.8), new cjs.Rectangle(-75.3,-270.1,154.5,282.3), new cjs.Rectangle(-74.9,-274.5,154.1,286.7), new cjs.Rectangle(-73.9,-278.7,153.1,290.9), new cjs.Rectangle(-72.6,-282.7,151.8,294.8), new cjs.Rectangle(-70.8,-286.3,150,298.5), new cjs.Rectangle(-68.8,-289.5,148,301.7), new cjs.Rectangle(-66.6,-292.4,145.8,304.5), new cjs.Rectangle(-64.2,-294.9,143.4,307), new cjs.Rectangle(-61.7,-297.1,140.9,309.3), new cjs.Rectangle(-59.1,-299.1,138.3,311.3), new cjs.Rectangle(-58.1,-300.7,137.3,312.9), new cjs.Rectangle(-57.9,-302.2,137.1,314.3), new cjs.Rectangle(-57.6,-303.4,136.8,315.5), new cjs.Rectangle(-57.6,-304.3,136.8,316.5), new cjs.Rectangle(-57.6,-305.1,136.8,317.3), new cjs.Rectangle(-57.5,-305.7,136.7,317.9), new cjs.Rectangle(-57.5,-306.2,136.7,318.4), new cjs.Rectangle(-57.4,-306.6,136.6,318.8), new cjs.Rectangle(-57.3,-306.8,136.5,319), new cjs.Rectangle(-57.1,-306.9,136.3,319.1), new cjs.Rectangle(-56.9,-307,137.7,319.2), new cjs.Rectangle(-56.6,-307.1,140,319.3), new cjs.Rectangle(-56.4,-307.3,143.3,319.5), new cjs.Rectangle(-56.4,-307.6,144.7,319.8), new cjs.Rectangle(-56.3,-307.9,147.1,320.1), new cjs.Rectangle(-56.3,-308.3,150.5,320.5), new cjs.Rectangle(-56.2,-308.8,152.7,321), new cjs.Rectangle(-56.2,-309.4,156.1,321.5), new cjs.Rectangle(-56.2,-310,157.4,322.2), new cjs.Rectangle(-56.1,-310.7,159.5,322.9), new cjs.Rectangle(-56,-311.5,161.6,323.7), new cjs.Rectangle(-55.8,-312.3,164.7,324.5), new cjs.Rectangle(-55.7,-313.2,166.7,325.4), new cjs.Rectangle(-55.6,-314.2,167.6,326.4), new cjs.Rectangle(-55.4,-315.2,169.5,327.4), new cjs.Rectangle(-55.2,-316.3,171.4,328.5), new cjs.Rectangle(-55.1,-317.4,173.2,329.6), new cjs.Rectangle(-54.9,-318.7,174.9,330.8), new cjs.Rectangle(-54.6,-319.9,177.5,332.1), new cjs.Rectangle(-54.4,-321.2,178.2,333.4), new cjs.Rectangle(-54.4,-322.6,179.9,334.8), new cjs.Rectangle(-54.3,-324,181.6,336.2), new cjs.Rectangle(-54.3,-325.4,184.2,337.6), new cjs.Rectangle(-54.2,-326.9,184.8,339.1), new cjs.Rectangle(-54.2,-328.4,186.3,340.6), new cjs.Rectangle(-54.2,-330,187.9,342.2), new cjs.Rectangle(-54,-331.5,189.2,343.7), new cjs.Rectangle(-54,-333.1,190.6,345.3), new cjs.Rectangle(-54,-334.7,193,346.8), new cjs.Rectangle(-53.9,-336.3,193.3,348.5), new cjs.Rectangle(-53.9,-337.9,194.6,350.1), new cjs.Rectangle(-53.8,-339.5,196.8,351.7), new cjs.Rectangle(-53.8,-341.2,196.9,353.4), new cjs.Rectangle(-53.7,-342.9,198.1,355), new cjs.Rectangle(-53.7,-344.5,199.1,356.7), new cjs.Rectangle(-53.7,-346.1,200.3,358.3), new cjs.Rectangle(-53.6,-347.8,201.2,360), new cjs.Rectangle(-53.5,-349.4,202.1,361.6), new cjs.Rectangle(-53.5,-351,203.1,363.2), new cjs.Rectangle(-53.4,-352.6,203.9,364.8), new cjs.Rectangle(-53.4,-354.3,204.8,366.5), new cjs.Rectangle(-53.3,-355.9,205.6,368), new cjs.Rectangle(-53.2,-357.4,206.4,369.6), new cjs.Rectangle(-53.2,-358.9,208.1,371.1), new cjs.Rectangle(-53.1,-360.5,207.9,372.7), new cjs.Rectangle(-53.1,-362,208.5,374.2), new cjs.Rectangle(-53,-363.5,209.2,375.7), new cjs.Rectangle(-52.9,-365,209.7,377.2), new cjs.Rectangle(-52.9,-366.5,210.3,378.7), new cjs.Rectangle(-52.8,-367.9,210.9,380.1), new cjs.Rectangle(-52.7,-369.4,211.4,381.5), new cjs.Rectangle(-52.6,-370.8,211.9,383), new cjs.Rectangle(-52.6,-372.2,212.3,384.3), new cjs.Rectangle(-52.6,-373.5,212.8,385.7), new cjs.Rectangle(-52.4,-374.8,213.2,387), new cjs.Rectangle(-52.4,-376.1,213.6,388.3), new cjs.Rectangle(-52.3,-377.4,213.9,389.5), new cjs.Rectangle(-52.2,-378.6,215.2,390.8), new cjs.Rectangle(-52.2,-379.8,214.6,392), new cjs.Rectangle(-52.1,-381,214.9,393.2), new cjs.Rectangle(-52,-382,215.2,394.2)];


(lib.main_anim_plate_tectonics_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.instance = new lib.plate_t_020("synched",0);
	this.instance.setTransform(435.8,478.9,1,1,0,0,0,20,5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:513.3},33).to({regX:20.1,regY:5.6,scaleX:1,scaleY:1,rotation:25.1,x:522.3,y:481.6},5).to({regX:20,regY:5.5,scaleX:1,scaleY:1,rotation:25.2,x:558.1,y:491.9},20).wait(61));

	// Layer 3
	this.instance_1 = new lib.plate_t_020("synched",0);
	this.instance_1.setTransform(383.3,478.9,1,1,0,0,0,20,5.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:507.9,y:479.5},58).wait(61));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj+ApfMAAAhS9MDH9AAAMAAABS9g");
	mask.setTransform(640,265.5);

	// Layer 2
	this.instance_2 = new lib.plate_t_015("synched",0,false);
	this.instance_2.setTransform(726.3,461.9);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(113));

	// Layer 6
	this.instance_3 = new lib.plate_t_023("synched",0,false);
	this.instance_3.setTransform(640,360,1,1,0,0,0,640,360);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// asthenosphare
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIFyiLIBvkZIA5gKIBQCgIEEDSIScgoIPoD5IKfG4Mhk6AA7g");
	this.shape.setTransform(316.2,482.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIGJiLIBskZIA8gKIBQCgIEDDSISNgoIPhD5IKfG4Mhk6AA7g");
	this.shape_1.setTransform(316.2,482.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIGfiLIBskZIA8gKIBQCgIEEDSIR8goIPbD5IKfG4Mhk6AA7g");
	this.shape_2.setTransform(316.2,482.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIG1iLIBskZIA8gKIBQCgIEEDSIRsgoIPVD5IKfG4Mhk6AA7g");
	this.shape_3.setTransform(316.2,482.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIHLiLIBskZIA8gKIBQCgIEEDSIRdgoIPOD5IKfG4Mhk6AA7g");
	this.shape_4.setTransform(316.2,482.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIHiiLIBskZIA8gKIBPCgIEEDSIRNgoIPID5IKfG4Mhk6AA7g");
	this.shape_5.setTransform(316.2,482.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIH1iLIBukZIA8gKIBRCgIEEDSIQ8goIPCD5IKfG4Mhk6AA7g");
	this.shape_6.setTransform(316.2,482.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIIMiLIBukZIA8gKIBQCgIEEDSIQtgoIO7D5IKfG4Mhk6AA7g");
	this.shape_7.setTransform(316.2,482.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIIiiLIBukZIA8gKIBQCgIEEDSIQdgoIO1D5IKfG4Mhk6AA7g");
	this.shape_8.setTransform(316.2,482.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkII4iLIBukZIA8gKIBQCgIEEDSIQNgoIOvD5IKfG4Mhk6AA7g");
	this.shape_9.setTransform(316.2,482.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIJPiLIBtkZIA9gKIBQCgIEEDSIP9goIOoD5IKfG4Mhk6AA7g");
	this.shape_10.setTransform(316.2,482.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIJkiLIBvkZIA7gKIBQCgIEEDSIPugoIOiD5IKfG4Mhk6AA7g");
	this.shape_11.setTransform(316.2,482.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIJ7iLIBtkZIA9gKIBQCgIEEDSIPegoIObD5IKfG4Mhk6AA7g");
	this.shape_12.setTransform(316.2,482.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIKRiLIBukZIA8gKIBQCgIEEDSIPOgoIOVD5IKfG4Mhk6AA7g");
	this.shape_13.setTransform(316.2,482.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIKniLIBukZIA8gKIBQCgIEEDSIO+goIOPD5IKfG4Mhk6AA7g");
	this.shape_14.setTransform(316.2,482.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIK9iLIBvkZIA7gKIBQCgIEEDSIOvgoIOID5IKfG4Mhk6AA7g");
	this.shape_15.setTransform(316.2,482.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkILUiLIBtkZIA9gKIBQCgIEDDSIOfgoIOCD5IKfG4Mhk6AA7g");
	this.shape_16.setTransform(316.2,482.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkILpiLIBukZIA8gKIBRCgIEEDSIOOgoIN8D5IKfG4Mhk6AA7g");
	this.shape_17.setTransform(316.2,482.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIMAiLIBukZIA8gKIBQCgIEEDSIN/goIN1D5IKfG4Mhk6AA7g");
	this.shape_18.setTransform(316.2,482.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIMWiLIBukZIA8gKIBQCgIEEDSINvgoINvD5IKfG4Mhk6AA7g");
	this.shape_19.setTransform(316.2,482.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIMsiLIBukZIA8gKIBQCgIEEDSINfgoINpD5IKfG4Mhk6AA7g");
	this.shape_20.setTransform(316.2,482.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkINCiLIBukZIA9gKIBQCgIEEDSINPgoINiD5IKfG4Mhk6AA7g");
	this.shape_21.setTransform(316.2,482.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkINZiLIBukZIA7gKIBQCgIEEDSINAgoINcD5IKfG4Mhk6AA7g");
	this.shape_22.setTransform(316.2,482.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkINviLIBukZIA8gKIBQCgIEEDSIMvgoINWD5IKfG4Mhk6AA7g");
	this.shape_23.setTransform(316.2,482.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIOFiLIBukZIA8gKIBQCgIEEDSIMggoINPD5IKfG4Mhk6AA7g");
	this.shape_24.setTransform(316.2,482.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIObiLIBukZIA8gKIBQCgIEEDSIMQgoINJD5IKfG4Mhk6AA7g");
	this.shape_25.setTransform(316.2,482.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIOxiLIBvkZIA7gKIBQCgIEEDSIMAgoINDD5IKfG4Mhk6AA7g");
	this.shape_26.setTransform(316.2,482.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIPIiLIBtkZIA9gKIBQCgIEEDSILvgoIM9D5IKfG4Mhk6AA7g");
	this.shape_27.setTransform(316.2,482.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIPdiLIBvkZIA7gKIBQCgIEFDSILggoIM2D5IKfG4Mhk6AA7g");
	this.shape_28.setTransform(316.2,482.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIP0iLIBukZIA8gKIBQCgIEEDSILRgoIMvD5IKfG4Mhk6AA7g");
	this.shape_29.setTransform(316.2,482.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIQKiLIBukZIA8gKIBQCgIEEDSILAgoIMqD5IKfG4Mhk6AA7g");
	this.shape_30.setTransform(316.2,482.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIQhiLIBtkZIA9gKIBQCgIEDDSIKxgoIMjD5IKfG4Mhk6AA7g");
	this.shape_31.setTransform(316.2,482.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIQ2iLIBukZIA8gKIBQCgIEFDSIKhgoIMcD5IKfG4Mhk6AA7g");
	this.shape_32.setTransform(316.2,482.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIRNiLIBukZIA8gKIBPCgIEEDSIKRgoIMXD5IKfG4Mhk6AA7g");
	this.shape_33.setTransform(316.2,482.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIRjiLIBukZIA8gKIBQCgIEEDSIKBgoIMQD5IKfG4Mhk6AA7g");
	this.shape_34.setTransform(316.2,482.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIR5iLIBukZIA8gKIBQCgIEEDSIJygoIMJD5IKfG4Mhk6AA7g");
	this.shape_35.setTransform(316.2,482.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkISPiLIBukZIA8gKIBQCgIEEDSIJhgoIMED5IKfG4Mhk6AA7g");
	this.shape_36.setTransform(316.2,482.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkISmiLIBukZIA7gKIBQCgIEEDSIJSgoIL9D5IKfG4Mhk6AA7g");
	this.shape_37.setTransform(316.2,482.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIS7iLIBukZIA9gKIBQCgIEEDSIJCgoIL2D5IKfG4Mhk6AA7g");
	this.shape_38.setTransform(316.2,482.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkITSiLIBukZIA8gKIBQCgIEEDSIIygoILwD5IKfG4Mhk6AA7g");
	this.shape_39.setTransform(316.2,482.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIToiLIBukZIA8gKIBQCgIEEDSIIigoILqD5IKfG4Mhk6AA7g");
	this.shape_40.setTransform(316.2,482.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIT+iLIBukZIA8gKIBQCgIEEDSIISgoILkD5IKfG4Mhk6AA7g");
	this.shape_41.setTransform(316.2,482.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIUViLIBtkZIA9gKIBQCgIEEDSIICgoILdD5IKfG4Mhk6AA7g");
	this.shape_42.setTransform(316.2,482.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIUqiLIBvkZIA7gKIBQCgIEEDSIHzgoILXD5IKfG4Mhk6AA7g");
	this.shape_43.setTransform(316.2,482.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIVBiLIBukZIA8gKIBQCgIEDDSIHjgoILRD5IKfG4Mhk6AA7g");
	this.shape_44.setTransform(316.2,482.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIVXiLIBukZIA8gKIBQCgIEEDSIHTgoILKD5IKfG4Mhk6AA7g");
	this.shape_45.setTransform(316.2,482.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIVtiLIBukZIA8gKIBQCgIEEDSIHDgoILED5IKfG4Mhk6AA7g");
	this.shape_46.setTransform(316.2,482.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIWDiLIBukZIA8gKIBQCgIEFDSIGygoIK+D5IKfG4Mhk6AA7g");
	this.shape_47.setTransform(316.2,482.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIWaiLIBukZIA8gKIBPCgIEEDSIGkgoIK3D5IKfG4Mhk6AA7g");
	this.shape_48.setTransform(316.2,482.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIWviLIBukZIA9gKIBQCgIEEDSIGTgoIKxD5IKfG4Mhk6AA7g");
	this.shape_49.setTransform(316.2,482.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIXGiLIBukZIA8gKIBQCgIEEDSIGDgoIKrD5IKfG4Mhk6AA7g");
	this.shape_50.setTransform(316.2,482.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIXciLIBukZIA8gKIBQCgIEEDSIF0goIKkD5IKfG4Mhk6AA7g");
	this.shape_51.setTransform(316.2,482.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIXyiLIBukZIA8gKIBQCgIEEDSIFkgoIKeD5IKfG4Mhk6AA7g");
	this.shape_52.setTransform(316.2,482.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIYJiLIBtkZIA9gKIBQCgIEEDSIFTgoIKYD5IKfG4Mhk6AA7g");
	this.shape_53.setTransform(316.2,482.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIYeiLIBvkZIA7gKIBQCgIEEDSIFFgoIKRD5IKfG4Mhk6AA7g");
	this.shape_54.setTransform(316.2,482.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIY1iLIBukZIA8gKIBQCgIEEDSIE0goIKLD5IKfG4Mhk6AA7g");
	this.shape_55.setTransform(316.2,482.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIZLiLIBukZIA8gKIBQCgIEEDSIElgoIKED5IKfG4Mhk6AA7g");
	this.shape_56.setTransform(316.2,482.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIZhiLIBukZIA8gKIBQCgIEEDSIEVgoIJ+D5IKfG4Mhk6AA7g");
	this.shape_57.setTransform(316.2,482.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIZ3iLIBvkZIA7gKIBQCgIEFDSIEEgoIJ4D5IKfG4Mhk6AA7g");
	this.shape_58.setTransform(316.2,482.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#733706","#FF5A00"],[0,1],1.2,59.3,1.2,-48.7).s().p("EgyTgEDIM+D6IdihkIaOiLIBtkZIA9gKIBQCgIEDDSID2goIJxD5IKfG4Mhk6AA7g");
	this.shape_59.setTransform(316.2,482.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(61));

	// Layer 7
	this.instance_4 = new lib.plate_t_022("synched",0,false);
	this.instance_4.setTransform(640,360,1,1,0,0,0,640,360);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Lithosphere
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIK8igIAKAzIAUgKIAAgpICqAzIemBtIPeEYILaJrMhv1ABtg");
	this.shape_60.setTransform(344.5,482.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnILTigIAKAzIAUgzICqAzIePBtIPeEYILaJrMhv1ABtg");
	this.shape_61.setTransform(344.5,482.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnILoigIAKAzIAUgzICqAzId6BtIPeEYILaJrMhv1ABtg");
	this.shape_62.setTransform(344.5,482.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIL/igIAKAzIAUgzICqAzIdjBtIPeEYILaJrMhv1ABtg");
	this.shape_63.setTransform(344.5,482.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIMVigIAKAzIAUgzICoAzIdPBtIPeEYILaJrMhv1ABtg");
	this.shape_64.setTransform(344.5,482.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIMrigIAKAzIAUgzICoAzIc5BtIPeEYILaJrMhv1ABtg");
	this.shape_65.setTransform(344.5,482.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnINBigIAKAzIAUgzICoAzIcjBtIPeEYILaJrMhv1ABtg");
	this.shape_66.setTransform(344.5,482.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnINXigIAKAzIAUgzICoAzIcNBtIPeEYILaJrMhv1ABtg");
	this.shape_67.setTransform(344.5,482.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnINtigIAKAzIAUgzICoAzIb3BtIPeEYILaJrMhv1ABtg");
	this.shape_68.setTransform(344.5,482.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIODigIAKAzIAVgzICnAzIbhBtIPeEYILaJrMhv1ABtg");
	this.shape_69.setTransform(344.5,482.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIOaigIAKAzIAUgzICoAzIbKBtIPeEYILaJrMhv1ABtg");
	this.shape_70.setTransform(344.5,482.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIOvigIAKAzIAUgzICoAzIa1BtIPeEYILaJrMhv1ABtg");
	this.shape_71.setTransform(344.5,482.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIPGigIAKAzIASgzICqAzIaeBtIPeEYILaJrMhv1ABtg");
	this.shape_72.setTransform(344.5,482.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIPZigIAKAzIAUgzICqAzIaJBtIPeEYILaJrMhv1ABtg");
	this.shape_73.setTransform(344.5,482.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIPwigIAKAzIAUgzICqAzIZyBtIPeEYILaJrMhv1ABtg");
	this.shape_74.setTransform(344.5,482.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIQGigIAKAzIAUgzICqAzIZcBtIPeEYILaJrMhv1ABtg");
	this.shape_75.setTransform(344.5,482.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIQcigIAKAzIAUgzICqAzIZGBtIPeEYILaJrMhv1ABtg");
	this.shape_76.setTransform(344.5,482.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIQyigIAKAzIAUgzICqAzIYwBtIPeEYILaJrMhv1ABtg");
	this.shape_77.setTransform(344.5,482.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIRIigIAKAzIAUgzICqAzIYaBtIPeEYILaJrMhv1ABtg");
	this.shape_78.setTransform(344.5,482.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIRfigIAKAzIATgzICrAzIYDBtIPeEYILaJrMhv1ABtg");
	this.shape_79.setTransform(344.5,482.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIR0igIAKAzIAVgzICpAzIXuBtIPeEYILaJrMhv1ABtg");
	this.shape_80.setTransform(344.5,482.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnISLigIAKAzIATgzICrAzIXXBtIPeEYILaJrMhv1ABtg");
	this.shape_81.setTransform(344.5,482.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnISgigIAKAzIAUgzICqAzIXCBtIPeEYILaJrMhv1ABtg");
	this.shape_82.setTransform(344.5,482.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIS3igIAKAzIAUgzICqAzIWrBtIPeEYILaJrMhv1ABtg");
	this.shape_83.setTransform(344.5,482.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnITNigIAJAzIAUgzICqAzIWWBtIPeEYILaJrMhv1ABtg");
	this.shape_84.setTransform(344.5,482.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnITjigIAKAzIAUgzICqAzIV/BtIPeEYILaJrMhv1ABtg");
	this.shape_85.setTransform(344.5,482.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIT5igIAKAzIAUgzICqAzIVpBtIPeEYILaJrMhv1ABtg");
	this.shape_86.setTransform(344.5,482.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIUPigIAKAzIAUgzICqAzIVTBtIPeEYILaJrMhv1ABtg");
	this.shape_87.setTransform(344.5,482.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIUligIAKAzIAUgzICqAzIU9BtIPeEYILaJrMhv1ABtg");
	this.shape_88.setTransform(344.5,482.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIU7igIAKAzIAUgzICqAzIUnBtIPeEYILaJrMhv1ABtg");
	this.shape_89.setTransform(344.5,482.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIVSigIAKAzIATgzICqAzIURBtIPeEYILaJrMhv1ABtg");
	this.shape_90.setTransform(344.5,482.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIVnigIAKAzIAVgzICpAzIT7BtIPeEYILaJrMhv1ABtg");
	this.shape_91.setTransform(344.5,482.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIV+igIAKAzIATgzICrAzITkBtIPeEYILaJrMhv1ABtg");
	this.shape_92.setTransform(344.5,482.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIWTigIAKAzIAUgzICqAzITPBtIPeEYILaJrMhv1ABtg");
	this.shape_93.setTransform(344.5,482.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIWqigIAKAzIAUgzICqAzIS4BtIPeEYILaJrMhv1ABtg");
	this.shape_94.setTransform(344.5,482.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIXAigIAKAzIAUgzICqAzISiBtIPeEYILaJrMhv1ABtg");
	this.shape_95.setTransform(344.5,482.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIXWigIAKAzIAUgzICqAzISMBtIPeEYILaJrMhv1ABtg");
	this.shape_96.setTransform(344.5,482.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIXsigIAKAzIAUgzICqAzIR2BtIPeEYILaJrMhv1ABtg");
	this.shape_97.setTransform(344.5,482.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIYCigIAKAzIAUgzICqAzIRgBtIPeEYILaJrMhv1ABtg");
	this.shape_98.setTransform(344.5,482.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIYYigIAKAzIAUgzICqAzIRKBtIPeEYILaJrMhv1ABtg");
	this.shape_99.setTransform(344.5,482.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIYuigIAKAzIAUgzICqAzIQ0BtIPeEYILaJrMhv1ABtg");
	this.shape_100.setTransform(344.5,482.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIZFigIAKAzIATgzICrAzIQdBtIPeEYILaJrMhv1ABtg");
	this.shape_101.setTransform(344.5,482.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIZaigIAKAzIAVgzICpAzIQIBtIPeEYILaJrMhv1ABtg");
	this.shape_102.setTransform(344.5,482.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIZxigIAKAzIAUgzICqAzIPxBtIPeEYILaJrMhv1ABtg");
	this.shape_103.setTransform(344.5,482.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIaGigIAKAzIAUgzICqAzIPcBtIPeEYILaJrMhv1ABtg");
	this.shape_104.setTransform(344.5,482.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIadigIAKAzIAUgzICqAzIPFBtIPeEYILaJrMhv1ABtg");
	this.shape_105.setTransform(344.5,482.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIazigIAKAzIAUgzICqAzIOvBtIPeEYILaJrMhv1ABtg");
	this.shape_106.setTransform(344.5,482.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIbJigIAKAzIAUgzICqAzIOZBtIPeEYILaJrMhv1ABtg");
	this.shape_107.setTransform(344.5,482.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIbfigIAKAzIAUgzICqAzIODBtIPeEYILaJrMhv1ABtg");
	this.shape_108.setTransform(344.5,482.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIb1igIAKAzIAUgzICqAzINtBtIPeEYILaJrMhv1ABtg");
	this.shape_109.setTransform(344.5,482.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIcLigIAKAzIAUgzICqAzINXBtIPeEYILaJrMhv1ABtg");
	this.shape_110.setTransform(344.5,482.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIchigIAKAzIAVgzICqAzINABtIPeEYILaJrMhv1ABtg");
	this.shape_111.setTransform(344.5,482.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIc4igIAKAzIATgzICqAzIMrBtIPeEYILaJrMhv1ABtg");
	this.shape_112.setTransform(344.5,482.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIdNigIAKAzIAVgzICpAzIMVBtIPeEYILaJrMhv1ABtg");
	this.shape_113.setTransform(344.5,482.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIdkigIAKAzIATgzICrAzIL+BtIPeEYILaJrMhv1ABtg");
	this.shape_114.setTransform(344.5,482.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnId5igIAKAzIAUgzICqAzILpBtIPeEYILaJrMhv1ABtg");
	this.shape_115.setTransform(344.5,482.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIeQigIAKAzIAUgzICqAzILSBtIPeEYILaJrMhv1ABtg");
	this.shape_116.setTransform(344.5,482.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIemigIAKAzIAUgzICqAzIK8BtIPeEYILaJrMhv1ABtg");
	this.shape_117.setTransform(344.5,482.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIe8igIAKAzIAUgzICqAzIKmBtIPeEYILaJrMhv1ABtg");
	this.shape_118.setTransform(344.5,482.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#474646","#474646","#8E8D8C"],[0,0.208,1],44.6,64.3,44.6,-59.7).s().p("Eg4KgJrIPUEEIRXhFIIHAnIfSigIAKAzIAUgKIAAgpICqAzIKQBtIPeEYILaJrMhv1ABtg");
	this.shape_119.setTransform(344.5,482.7);

	this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60}]}).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(61));

	// Crust
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIKpiNIBkAAIB3AfIenBuIPeEXILaJrMhv3ABtg");
	this.shape_120.setTransform(345.2,479);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIK+iNIBkAAIB5AfIeQBuIPeEXILaJrMhv3ABtg");
	this.shape_121.setTransform(345.2,479);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApILUiNIBkAAIB4AfId7BuIPeEXILaJrMhv3ABtg");
	this.shape_122.setTransform(345.2,479);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApILqiNIBkAAIB4AfIdlBuIPeEXILaJrMhv3ABtg");
	this.shape_123.setTransform(345.2,479);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIMAiNIBkAAIB2AfIdRBuIPeEXILaJrMhv3ABtg");
	this.shape_124.setTransform(345.2,479);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIMWiNIBkAAIB1AfIc8BuIPeEXILaJrMhv3ABtg");
	this.shape_125.setTransform(345.2,479);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIMriNIBkAAIB3AfIclBuIPeEXILaJrMhv3ABtg");
	this.shape_126.setTransform(345.2,479);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApINBiNIBkAAIB2AfIcQBuIPeEXILaJrMhv3ABtg");
	this.shape_127.setTransform(345.2,479);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApINXiNIBkAAIB2AfIb6BuIPeEXILaJrMhv3ABtg");
	this.shape_128.setTransform(345.2,479);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApINtiNIBkAAIB2AfIbkBuIPeEXILaJrMhv3ABtg");
	this.shape_129.setTransform(345.2,479);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIODiNIBhAAIB4AfIbPBuIPeEXILaJrMhv3ABtg");
	this.shape_130.setTransform(345.2,479);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIOYiNIBiAAIB5AfIa4BuIPeEXILaJrMhv3ABtg");
	this.shape_131.setTransform(345.2,479);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIOviNIBiAAIB3AfIajBuIPeEXILaJrMhv3ABtg");
	this.shape_132.setTransform(345.2,479);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIPEiNIBiAAIB4AfIaNBuIPeEXILaJrMhv3ABtg");
	this.shape_133.setTransform(345.2,479);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIPYiNIBkAAIB4AfIZ3BuIPeEXILaJrMhv3ABtg");
	this.shape_134.setTransform(345.2,479);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIPtiNIBkAAIB4AfIZiBuIPeEXILaJrMhv3ABtg");
	this.shape_135.setTransform(345.2,479);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIQDiNIBlAAIB4AfIZLBuIPeEXILaJrMhv3ABtg");
	this.shape_136.setTransform(345.2,479);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIQaiNIBjAAIB4AfIY2BuIPeEXILaJrMhv3ABtg");
	this.shape_137.setTransform(345.2,479);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIQviNIBkAAIB4AfIYgBuIPeEXILaJrMhv3ABtg");
	this.shape_138.setTransform(345.2,479);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIRFiNIBkAAIB4AfIYKBuIPeEXILaJrMhv3ABtg");
	this.shape_139.setTransform(345.2,479);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIRbiNIBkAAIB4AfIX0BuIPeEXILaJrMhv3ABtg");
	this.shape_140.setTransform(345.2,479);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIRxiNIBkAAIB3AfIXfBuIPeEXILaJrMhv3ABtg");
	this.shape_141.setTransform(345.2,479);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApISGiNIBkAAIB4AfIXJBuIPeEXILaJrMhv3ABtg");
	this.shape_142.setTransform(345.2,479);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApISciNIBkAAIB4AfIWzBuIPeEXILaJrMhv3ABtg");
	this.shape_143.setTransform(345.2,479);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApISyiNIBkAAIB4AfIWdBuIPeEXILaJrMhv3ABtg");
	this.shape_144.setTransform(345.2,479);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApITIiNIBkAAIB4AfIWHBuIPeEXILaJrMhv3ABtg");
	this.shape_145.setTransform(345.2,479);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApITeiNIBkAAIB3AfIVyBuIPeEXILaJrMhv3ABtg");
	this.shape_146.setTransform(345.2,479);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApITziNIBkAAIB5AfIVbBuIPeEXILaJrMhv3ABtg");
	this.shape_147.setTransform(345.2,479);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIUKiNIBkAAIB3AfIVGBuIPeEXILaJrMhv3ABtg");
	this.shape_148.setTransform(345.2,479);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIUfiNIBkAAIB4AfIUwBuIPeEXILaJrMhv3ABtg");
	this.shape_149.setTransform(345.2,479);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIU1iNIBkAAIB4AfIUaBuIPeEXILaJrMhv3ABtg");
	this.shape_150.setTransform(345.2,479);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIVLiNIBkAAIB3AfIUFBuIPeEXILaJrMhv3ABtg");
	this.shape_151.setTransform(345.2,479);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIVgiNIBkAAIB5AfITuBuIPeEXILaJrMhv3ABtg");
	this.shape_152.setTransform(345.2,479);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIV3iNIBkAAIB3AfITZBuIPeEXILaJrMhv3ABtg");
	this.shape_153.setTransform(345.2,479);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIWMiNIBkAAIB4AfITDBuIPeEXILaJrMhv3ABtg");
	this.shape_154.setTransform(345.2,479);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIWiiNIBkAAIB4AfIStBuIPeEXILaJrMhv3ABtg");
	this.shape_155.setTransform(345.2,479);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIW4iNIBkAAIB4AfISXBuIPeEXILaJrMhv3ABtg");
	this.shape_156.setTransform(345.2,479);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIXNiNIBkAAIB5AfISBBuIPeEXILaJrMhv3ABtg");
	this.shape_157.setTransform(345.2,479);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIXkiNIBkAAIB3AfIRsBuIPeEXILaJrMhv3ABtg");
	this.shape_158.setTransform(345.2,479);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIX5iNIBkAAIB4AfIRWBuIPeEXILaJrMhv3ABtg");
	this.shape_159.setTransform(345.2,479);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIYPiNIBkAAIB4AfIRABuIPeEXILaJrMhv3ABtg");
	this.shape_160.setTransform(345.2,479);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIYliNIBkAAIB4AfIQqBuIPeEXILaJrMhv3ABtg");
	this.shape_161.setTransform(345.2,479);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIY6iNIBlAAIB4AfIQUBuIPeEXILaJrMhv3ABtg");
	this.shape_162.setTransform(345.2,479);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIZRiNIBjAAIB4AfIP/BuIPeEXILaJrMhv3ABtg");
	this.shape_163.setTransform(345.2,479);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIZmiNIBkAAIB5AfIPoBuIPeEXILaJrMhv3ABtg");
	this.shape_164.setTransform(345.2,479);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIZ8iNIBkAAIB4AfIPTBuIPeEXILaJrMhv3ABtg");
	this.shape_165.setTransform(345.2,479);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIaSiNIBkAAIB4AfIO9BuIPeEXILaJrMhv3ABtg");
	this.shape_166.setTransform(345.2,479);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIaoiNIBkAAIB3AfIOoBuIPeEXILaJrMhv3ABtg");
	this.shape_167.setTransform(345.2,479);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIa9iNIBkAAIB4AfIOSBuIPeEXILaJrMhv3ABtg");
	this.shape_168.setTransform(345.2,479);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIbTiNIBlAAIB4AfIN7BuIPeEXILaJrMhv3ABtg");
	this.shape_169.setTransform(345.2,479);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIbpiNIBkAAIB4AfINmBuIPeEXILaJrMhv3ABtg");
	this.shape_170.setTransform(345.2,479);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIb/iNIBkAAIB4AfINQBuIPeEXILaJrMhv3ABtg");
	this.shape_171.setTransform(345.2,479);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIcViNIBkAAIB4AfIM6BuIPeEXILaJrMhv3ABtg");
	this.shape_172.setTransform(345.2,479);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIcqiNIBkAAIB5AfIMkBuIPeEXILaJrMhv3ABtg");
	this.shape_173.setTransform(345.2,479);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIdBiNIBkAAIB3AfIMPBuIPeEXILaJrMhv3ABtg");
	this.shape_174.setTransform(345.2,479);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIdWiNIBkAAIB4AfIL5BuIPeEXILaJrMhv3ABtg");
	this.shape_175.setTransform(345.2,479);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIdsiNIBkAAIB4AfILjBuIPeEXILaJrMhv3ABtg");
	this.shape_176.setTransform(345.2,479);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIeCiNIBkAAIB4AfILNBuIPeEXILaJrMhv3ABtg");
	this.shape_177.setTransform(345.2,479);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIeXiNIBkAAIB5AfIK3BuIPeEXILaJrMhv3ABtg");
	this.shape_178.setTransform(345.2,479);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#793600").s().p("Eg4KgJrIPUEEIRWhGIIIApIeuiNIBkAAIB3AfIKiBuIPeEXILaJrMhv3ABtg");
	this.shape_179.setTransform(345.2,479);

	this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120}]}).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).wait(61));

	// volcaino
	this.instance_5 = new lib.plate_t_011();
	this.instance_5.setTransform(690.1,314);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// asthenosphare_texture
	this.instance_6 = new lib.plate_t_04();
	this.instance_6.setTransform(650,447);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// asthenosphare
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#6D3606","#FF5C00","#FF5C00"],[0,0.984,1],95.2,129.5,95.2,-46.5).s().p("EgpjAGoInznUIFehaIC+DaIGkgyQAIgEEDhFQEDhHGYhbQGXhbHHg+QG3g3GIgOQGHgND1AFQD3AFAIACIcmAAIAJNag");
	this.shape_180.setTransform(966.2,490.5);

	this.shape_180.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_180).wait(120));

	// Layer 8
	this.instance_7 = new lib.plate_t_035("synched",0);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Lithosphere
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#5B5B5B","#5B5B5B","#9C9A9A"],[0,0.561,1],-1,120.7,-1,-67.3).s().p("AQlJpMg5pgAMIq8qnIEEiVIFJgVIDdDnIDRgeIImiqQAGgDCzgyQC0gxEchCQEchCFCg0QFNgyEogYQEqgZC/gJQB+gEgUgCIFYgCMAidgAJIA9Tgg");
	this.shape_181.setTransform(961,475.4);

	this.shape_181.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_181).wait(120));

	// Crust_texture
	this.instance_8 = new lib.plate_t_05();
	this.instance_8.setTransform(571.2,314.9);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Crust
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("rgba(217,4,61,0)").ss(1,1,1).p("AC+gCIl7AF");
	this.shape_182.setTransform(1068,383.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#793600").s().p("Eg4FAG8QCRkJDKjzQDLj0DHjCQDIjBCFhxQCFhxAGgDQgGgFAqgSQApgSCYAfQBUAWCeBVQCeBUCpBnQCqBmB2BLIB7BPIRCCDQIAAIGngBQDUAABtgCIF9gHIepABIA9RyMhvOABGg");
	this.shape_183.setTransform(930.2,409.2);

	this.shape_182.mask = this.shape_183.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_183},{t:this.shape_182}]}).wait(120));

	// grass
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#65AC00").s().p("Eg4YAGLQFUnLDwkIQDxkICWh5QCWh5BGggQBGgfgBAEQgGAFArALQAqAKCWgkQBDgLCaBDQCbBDCuBhQCvBgB9BLICCBPIRCCMIQ4gCIFXgCMAh/gAGIA9RyMhvOABGg");
	this.shape_184.setTransform(929.9,405.3);

	this.shape_184.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_184).wait(120));

	// sea
	this.instance_9 = new lib.plate_t_012();
	this.instance_9.setTransform(0,383.8);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,313.7,1280,217.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,233.4,1280,297.7), new cjs.Rectangle(0,229.1,1280,302), new cjs.Rectangle(0,224.4,1280,306.7), new cjs.Rectangle(0,219.7,1280,311.4), new cjs.Rectangle(0,214.9,1280,316.2), new cjs.Rectangle(0,210.1,1280,321), new cjs.Rectangle(0,205.4,1280,325.6), new cjs.Rectangle(0,200.8,1280,330.2), new cjs.Rectangle(0,196.2,1280,334.9), new cjs.Rectangle(0,191.7,1280,339.3), new cjs.Rectangle(0,187.3,1280,343.7), new cjs.Rectangle(0,183.1,1280,347.9), new cjs.Rectangle(0,179.2,1280,351.9), new cjs.Rectangle(0,175.6,1280,355.5), new cjs.Rectangle(0,172.3,1280,358.7), new cjs.Rectangle(0,169.5,1280,361.6), new cjs.Rectangle(0,167,1280,364.1), new cjs.Rectangle(0,164.7,1280,366.3), new cjs.Rectangle(0,162.8,1280,368.3), new cjs.Rectangle(0,161.1,1280,369.9), new cjs.Rectangle(0,159.7,1280,371.4), new cjs.Rectangle(0,158.5,1280,372.6), new cjs.Rectangle(0,157.5,1280,373.5), new cjs.Rectangle(0,156.7,1280,374.3), new cjs.Rectangle(0,156.1,1280,374.9), new cjs.Rectangle(0,155.6,1280,375.4), new cjs.Rectangle(0,155.3,1280,375.8), new cjs.Rectangle(0,155,1280,376), new cjs.Rectangle(0,154.9,1280,376.1), new cjs.Rectangle(0,154.9,1280,376.2), new cjs.Rectangle(0,154.7,1280,376.3), new cjs.Rectangle(0,154.5,1280,376.5), new cjs.Rectangle(0,154.3,1280,376.8), new cjs.Rectangle(0,153.9,1280,377.1), new cjs.Rectangle(0,153.5,1280,377.5), new cjs.Rectangle(0,153,1280,378), new cjs.Rectangle(0,152.5,1280,378.6), new cjs.Rectangle(0,151.8,1280,379.2), new cjs.Rectangle(0,151.1,1280,379.9), new cjs.Rectangle(0,150.4,1280,380.7), new cjs.Rectangle(0,149.5,1280,381.5), new cjs.Rectangle(0,148.6,1280,382.4), new cjs.Rectangle(0,147.6,1280,383.4), new cjs.Rectangle(0,146.6,1280,384.4), new cjs.Rectangle(0,145.5,1280,385.5), new cjs.Rectangle(0,144.4,1280,386.6), new cjs.Rectangle(0,143.2,1280,387.9), new cjs.Rectangle(0,141.9,1280,389.1), new cjs.Rectangle(0,140.6,1280,390.4), new cjs.Rectangle(0,139.2,1280,391.8), new cjs.Rectangle(0,137.8,1280,393.2), new cjs.Rectangle(0,136.4,1280,394.6), new cjs.Rectangle(0,134.9,1280,396.1), new cjs.Rectangle(0,133.4,1280,397.6), new cjs.Rectangle(0,131.9,1280,399.2), new cjs.Rectangle(0,130.3,1280,400.7), new cjs.Rectangle(0,128.8,1280,402.3), new cjs.Rectangle(0,127.2,1280,403.9), new cjs.Rectangle(0,125.5,1280,405.5), new cjs.Rectangle(0,123.9,1280,407.1), new cjs.Rectangle(0,122.3,1280,408.7), new cjs.Rectangle(0,120.6,1280,410.4), new cjs.Rectangle(0,119,1280,412.1), new cjs.Rectangle(0,117.4,1280,413.7), new cjs.Rectangle(0,115.7,1280,415.3), new cjs.Rectangle(0,114.1,1280,417), new cjs.Rectangle(0,112.4,1280,418.6), new cjs.Rectangle(0,110.8,1280,420.2), new cjs.Rectangle(0,109.2,1280,421.8), new cjs.Rectangle(0,107.6,1280,423.5), new cjs.Rectangle(0,106,1280,425.1), new cjs.Rectangle(0,104.4,1280,426.6), new cjs.Rectangle(0,102.9,1280,428.1), new cjs.Rectangle(0,101.4,1280,429.7), new cjs.Rectangle(0,99.8,1280,431.2), new cjs.Rectangle(0,98.3,1280,432.7), new cjs.Rectangle(0,96.8,1280,434.2), new cjs.Rectangle(0,95.3,1280,435.7), new cjs.Rectangle(0,93.9,1280,437.1), new cjs.Rectangle(0,92.5,1280,438.6), new cjs.Rectangle(0,91.1,1280,440), new cjs.Rectangle(0,89.7,1280,441.4), new cjs.Rectangle(0,88.3,1280,442.7)];


// stage content:
(lib.animation_plate_tectonics = function() {
	this.initialize();

	// main_anim_plate_tectonics_04
	this.instance = new lib.main_anim_plate_tectonics_04();
	this.instance.setTransform(640.4,360,1,1,0,0,0,640.4,360);

	// main_anim_plate_tectonics_03
	this.instance_1 = new lib.main_anim_plate_tectonics_03();
	this.instance_1.setTransform(640.4,360,1,1,0,0,0,640.4,360);

	// main_anim_plate_tectonics_02
	this.instance_2 = new lib.main_anim_plate_tectonics_02();
	this.instance_2.setTransform(640.4,360,1,1,0,0,0,640.4,360);

	// main_anim_plate_tectonics_01
	this.instance_3 = new lib.main_anim_plate_tectonics_01();
	this.instance_3.setTransform(640.4,360,1,1,0,0,0,640.4,360);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(65,360,2130,605.8);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;