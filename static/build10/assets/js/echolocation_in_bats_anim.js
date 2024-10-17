(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1132,
	height: 574,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/images/batEye.png", id:"batEye"},
		{src:"assets/images/batFace.png", id:"batFace"},
		{src:"assets/images/batFace2.png", id:"batFace2"},
		{src:"assets/images/batWing.png", id:"batWing"}
	]
};



// symbols:



(lib.batEye = function() {
	this.initialize(img.batEye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.batFace = function() {
	this.initialize(img.batFace);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,71);


(lib.batFace2 = function() {
	this.initialize(img.batFace2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,71);


(lib.batWing = function() {
	this.initialize(img.batWing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,102);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B0403").s().p("AgBAAIAAgBIADgDIAAAJIgDgFg");
	this.shape.setTransform(-1.9,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525144").s().p("AAAADIAAgEIAAAEg");
	this.shape_1.setTransform(3.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFA1A0").s().p("AAAgFIAAgEQAAACABADIAAAEIgBAHIAAADIAAgPg");
	this.shape_2.setTransform(-3.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E49A9B").s().p("AgCALIAAgCIACgHIAAgFQgBgCgCgCIAAgBIAAgBIABgJQAEABABAIIAAABQABAIgBADQAAAHgDAFIAAACIAAABIgBABIgBgIg");
	this.shape_3.setTransform(-3,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E39598").s().p("AgGARIABgBIACgBIADABQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgDACQADgFAAgHQAAgDAAgIIAAgBQAAgIgHgBIAAAAIABgBIAAgCIACgKIAAAAIAEAAIACgBIABAAIABABIACAPIABARQACAPgEANQgCAGgDACIAAAAQgDgIgDgKg");
	this.shape_4.setTransform(-2.6,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD9496").s().p("AgBAoIgDgFIABAAQADgCABgGQAEgNgCgPIgBgRIgCgPQABgBAAgDQAAgEACgCQANAwgQAnIgBgEgAgEAQIgDgBIAAgCIADgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgCABIgBAAg");
	this.shape_5.setTransform(-2.2,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE8F92").s().p("AACALIgBAAIgBABIgFABIAAAAQACgKADgGIAAgCIABgGIABgBIAEAOQgCACABAEQAAADgCACIgBgCg");
	this.shape_6.setTransform(-2.5,-4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C0001").s().p("AgKAzIAAgLQAAgEAEgHQAEgHAAgFQACAAAAgDIABgFQADgLgDgUIgCghIABAAQACABADADQACACABAFIADARQABAKgFAHIAAADQACAKgFAPIgDAIIgFATIgBAJIAAACIgFgFg");
	this.shape_7.setTransform(-0.5,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#280202").s().p("AgCgeIgEgQIAAgBIAEgGIAAgCIABgBQADAJABALQADAXABALQACASgEAPQAAAFgEAHQgBAHAAAEIgGADQAPgngLgwg");
	this.shape_8.setTransform(-1.5,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#180001").s().p("AACAMQgBgMgBgVQgBgLgFgIIAAgBIACgDIAAgBIABgBIAAAAIAAABIAAABIADAJIABAJIAFAfQACAUgDANIgBAFQgBADgDABQAEgPgCgUg");
	this.shape_9.setTransform(-1,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C0504").s().p("AAAAGIgBgIIAAgBIAAAAIgBAAIAFgLIgCADIgBAEIAAABIAAgBIABAEIAAAAQACADAAAFIAAACIAAAIIgDgJg");
	this.shape_10.setTransform(-1.1,-6.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010000").s().p("AgCBLIgFgEIgEgGIgBgBIAAgCIABgJIAHgTIADgIQADgPgCgLIAAgDQAFgGgBgKIgDgRQgBgFAAgCQgDgDgDgBIgCgBIAAgHIAAgDQAAgFgCgEIAAgBIgBgDIgCABIACgBIACgFIABgCIAAgBIAAAAIACACIAGAKIADAIIgBAAQAGAMACANQAGAbgEAgIgCAOQgDATgFAPIgCAHIgCgFgAgJhMIAAAAIAAAAg");
	this.shape_11.setTransform(0.2,0);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-3.5,-8,7,16.1);
p.frameBounds = [rect];


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E3DF").s().p("AAIAJQgHAAgDgCQgFgCgEgFIgDgCIAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIACAAQAKABAGgGIACAAIAAACIAGAOIABADIgHgBg");
	this.shape.setTransform(-0.4,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E5E3").s().p("AgKADQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAFgCAIgGQAKgFACADQACACAAADIgEALIgBADIAAACQgJgLgKACg");
	this.shape_1.setTransform(-0.8,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALBxIgBgBIgIgSIAAgBIgBgDIgEgQIAAgCIgGgbQgJgyAMgxIAAgCIABgDIAEgNQAEgUAKgTIAAgBIABAAIAAACQgkBKAOBQQADAPAEAPIADAQIACADIAIATIAAAAIgBABIAAAAIAAAAg");
	this.shape_2.setTransform(0.9,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-2.3,-11.3,4.7,22.7);
p.frameBounds = [rect];


(lib.rays_butterfly_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-14.5,-5,10.9,13.4).ss(2.5,0,0,3).p("AiLhDQArgmA5ADQAyACAvAhQAvAhAUAtQAVA0gUAw");
	this.shape.setTransform(1.2,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-16.2,-5.7,12.1,15).ss(2.5,0,0,3).p("AibhLQAvgrBAADQA4ACA1AlQA0AlAWAzQAYA6gWA2");
	this.shape_1.setTransform(3.8,-5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-17.8,-6.3,13.5,16.5).ss(2.5,0,0,3).p("AirhUQA0gvBHADQA/ADA6ApQA6AoAYA5QAaBAgYA8");
	this.shape_2.setTransform(6.3,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-19.6,-7,14.7,18).ss(2.5,0,0,3).p("Ai8hcQA6g0BNAEQBFACA/AtQBAAtAaA+QAeBGgcBB");
	this.shape_3.setTransform(8.9,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-21.3,-7.7,16,19.5).ss(2.5,0,0,3).p("AjMhlQA+g4BVAEQBLADBFAwQBFAxAdBEQAfBLgdBI");
	this.shape_4.setTransform(11.4,-17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-22.9,-8.2,17.4,21.1).ss(2.5,0,0,3).p("AjchtQBDg9BcAEQBQADBLA1QBKA0AgBKQAiBSggBN");
	this.shape_5.setTransform(14,-21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-24.7,-8.9,18.6,22.6).ss(2.5,0,0,3).p("Ajth2QBJhBBiAEQBWAEBRA4QBQA4AhBPQAlBYgiBT");
	this.shape_6.setTransform(16.6,-25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-26.3,-9.5,19.9,24.2).ss(2.5,0,0,3).p("Aj9h+QBNhFBpAEQBdAEBWA8QBVA8AkBVQAnBegkBY");
	this.shape_7.setTransform(19.1,-29.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-28,-10.2,21.2,25.7).ss(2.5,0,0,3).p("AkNiHQBShJBwAEQBjAEBbBAQBbBAAmBaQAqBkgnBe");
	this.shape_8.setTransform(21.7,-33.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-29.7,-10.8,22.5,27.2).ss(2.5,0,0,3).p("AkdiPQBXhOB2AFQBpAEBhBEQBhBEAoBgQAtBqgqBj");
	this.shape_9.setTransform(24.2,-37.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-31.4,-11.4,23.8,28.8).ss(2.5,0,0,3).p("AkuiXQBchTB9AFQBwAFBmBIQBmBHArBmQAvBwgsBp");
	this.shape_10.setTransform(26.8,-41.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-33.1,-12,25.1,30.3).ss(2.5,0,0,3).p("Ak+igQBihXCDAFQB2AFBsBMQBrBMAtBrQAyB2guBv");
	this.shape_11.setTransform(29.3,-45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-34.8,-12.7,26.4,31.8).ss(2.5,0,0,3).p("AlOioQBmhcCKAGQB8AFByBQQBxBPAvBxQA0B8gwB1");
	this.shape_12.setTransform(31.9,-49.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-36.4,-13.3,27.7,33.4).ss(2.5,0,0,3).p("AleixQBrhgCRAGQCCAFB3BUQB2BTAyB2QA3CDgzB6");
	this.shape_13.setTransform(34.5,-53);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-38.1,-14,29,34.9).ss(2.5,0,0,3).p("Alvi6QBxhkCXAGQCIAGB9BXQB8BXA0B8QA5CIg1CB");
	this.shape_14.setTransform(37,-57);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-39.8,-14.6,30.3,36.5).ss(2.5,0,0,3).p("Al/jCQB1hpCfAHQCOAFCCBcQCCBbA2CBQA8CPg4CG");
	this.shape_15.setTransform(39.6,-61);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-41.5,-15.3,31.6,38).ss(2.5,0,0,3).p("AmPjLQB6htCmAHQCUAGCIBfQCHBfA4CHQA+CUg5CM");
	this.shape_16.setTransform(42.1,-64.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-43.2,-15.9,32.9,39.5).ss(2.5,0,0,3).p("AmgjTQCAhyCsAHQCaAGCNBkQCNBiA7CNQBBCag9CS");
	this.shape_17.setTransform(44.7,-68.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-44.9,-16.6,34.2,41).ss(2.5,0,0,3).p("AmwjbQCEh3CzAIQChAGCTBnQCSBnA9CSQBDCgg+CY");
	this.shape_18.setTransform(47.3,-72.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-46.5,-17.2,35.5,42.6).ss(2.5,0,0,3).p("AnAjkQCJh7C6AIQCmAGCZBsQCXBqBACYQBGCmhBCd");
	this.shape_19.setTransform(49.8,-76.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-48.2,-17.8,36.8,44.1).ss(2.5,0,0,3).p("AnQjsQCOh/DAAHQCtAHCeBvQCdBvBCCdQBICshDCj");
	this.shape_20.setTransform(52.4,-80.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-49.9,-18.5,38.1,45.6).ss(2.5,0,0,3).p("Anhj1QCTiEDHAIQCzAHCkB0QCiByBFCjQBKCyhFCp");
	this.shape_21.setTransform(55,-84.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-51.6,-19.1,39.4,47.2).ss(2.5,0,0,3).p("Anxj9QCYiIDOAIQC5AHCpB3QCoB2BHCpQBNC4hICu");
	this.shape_22.setTransform(57.5,-88.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-53.3,-19.7,40.7,48.7).ss(2.5,0,0,3).p("AoBkGQCdiMDUAIQDAAICuB7QCuB6BJCuQBQC+hLC0");
	this.shape_23.setTransform(60.1,-92.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-55,-20.4,42,50.2).ss(2.5,0,0,3).p("AoRkOQCiiRDbAJQDFAIC1B+QCzB+BLC0QBSDEhMC6");
	this.shape_24.setTransform(62.6,-96.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-56.6,-21,43.3,51.8).ss(2.5,0,0,3).p("AoikXQCoiVDiAJQDLAIC6CDQC4CBBOC5QBVDLhPC/");
	this.shape_25.setTransform(65.2,-100.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-58.4,-21.6,44.5,53.3).ss(2.5,0,0,3).p("AoykfQCsiaDpAJQDRAJDACGQC+CGBQC/QBXDQhRDF");
	this.shape_26.setTransform(67.8,-104.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-60.1,-22.3,45.8,54.8).ss(2.5,0,0,3).p("ApCkoQCxieDvAKQDYAIDFCLQDDCJBTDEQBaDXhUDL");
	this.shape_27.setTransform(70.3,-108.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-61.7,-23,47.2,56.3).ss(2.5,0,0,3).p("ApTkxQC2iiD3AKQDeAIDKCPQDJCNBVDKQBcDdhWDQ");
	this.shape_28.setTransform(72.9,-112.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","#FFCC00","#FFCC00","rgba(255,204,0,0.498)","rgba(255,204,0,0)"],[0,0.075,0.369,0.682,0.906,1],-63.4,-23.6,48.5,57.9).ss(2.5,0,0,3).p("Apjk5QC7inD9AKQDkAJDQCTQDPCRBXDPQBfDjhZDW");
	this.shape_29.setTransform(75.4,-116.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["rgba(255,214,51,0)","rgba(255,214,51,0.478)","rgba(255,214,51,0.8)","rgba(255,214,51,0.8)","rgba(255,214,51,0.4)","rgba(255,214,51,0)"],[0,0.259,0.494,0.745,0.925,1],-65.2,-24.3,49.7,59.4).ss(2.5,0,0,3).p("ApzlBQDAisEDAKQDqAKDWCWQDUCVBZDVQBiDphbDc");
	this.shape_30.setTransform(78,-120.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["rgba(255,224,102,0)","rgba(255,224,102,0.361)","rgba(255,224,102,0.6)","rgba(255,224,102,0.6)","rgba(255,224,102,0.298)","rgba(255,224,102,0)"],[0,0.443,0.62,0.808,0.945,1],-66.8,-24.8,51.1,61).ss(2.5,0,0,3).p("AqDlKQDFivEKAKQDxAKDbCaQDZCYBcDbQBkDvhdDi");
	this.shape_31.setTransform(80.5,-124.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["rgba(255,235,153,0)","rgba(255,235,153,0.239)","rgba(255,235,153,0.4)","rgba(255,235,153,0.4)","rgba(255,235,153,0.2)","rgba(255,235,153,0)"],[0,0.631,0.749,0.875,0.961,1],-68.5,-25.5,52.3,62.5).ss(2.5,0,0,3).p("AqUlSQDKi1ESALQD2AKDhCeQDeCdBfDgQBmD1hgDn");
	this.shape_32.setTransform(83.1,-128.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["rgba(255,245,204,0)","rgba(255,245,204,0.122)","rgba(255,245,204,0.2)","rgba(255,245,204,0.2)","rgba(255,245,204,0.098)","rgba(255,245,204,0)"],[0,0.816,0.875,0.937,0.98,1],-70.2,-26.2,53.6,64).ss(2.5,0,0,3).p("AqklbQDPi5EYALQD9AKDmCiQDkChBhDmQBpD7hiDt");
	this.shape_33.setTransform(85.7,-132.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,1],-71.9,-26.8,54.9,65.6).ss(2.5,0,0,3).p("Aq0ljQDUi9EfALQECAKDsCmQDqCkBjDsQBrEBhkDz");
	this.shape_34.setTransform(88.2,-136.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-13,30.2,24.1);
p.frameBounds = [rect, new cjs.Rectangle(-13.1,-18.2,33.4,26.6), new cjs.Rectangle(-12.2,-23.5,36.7,29.2), new cjs.Rectangle(-11.3,-28.7,40,31.7), new cjs.Rectangle(-10.3,-33.9,43.2,34.2), new cjs.Rectangle(-9.4,-39.2,46.5,36.8), new cjs.Rectangle(-8.5,-44.4,49.7,39.3), new cjs.Rectangle(-7.5,-49.7,52.9,41.9), new cjs.Rectangle(-6.6,-54.9,56.3,44.4), new cjs.Rectangle(-5.7,-60.2,59.5,46.9), new cjs.Rectangle(-4.7,-65.4,62.7,49.5), new cjs.Rectangle(-3.8,-70.7,66,52), new cjs.Rectangle(-2.9,-75.9,69.2,54.6), new cjs.Rectangle(-1.9,-81.1,72.5,57.1), new cjs.Rectangle(-1,-86.4,75.8,59.6), new cjs.Rectangle(-0.1,-91.6,79,62.2), new cjs.Rectangle(0.8,-96.9,82.3,64.7), new cjs.Rectangle(1.8,-102.1,85.5,67.2), new cjs.Rectangle(2.7,-107.3,88.8,69.8), new cjs.Rectangle(3.6,-112.6,92.1,72.3), new cjs.Rectangle(4.6,-117.8,95.3,74.9), new cjs.Rectangle(5.5,-123.1,98.5,77.4), new cjs.Rectangle(6.4,-128.3,101.8,79.9), new cjs.Rectangle(7.4,-133.5,105.1,82.4), new cjs.Rectangle(8.3,-138.8,108.3,85), new cjs.Rectangle(9.2,-144,111.6,87.5), new cjs.Rectangle(10.2,-149.3,114.8,90.1), new cjs.Rectangle(11.1,-154.5,118.1,92.6), new cjs.Rectangle(12,-159.7,121.4,95.1), new cjs.Rectangle(13,-165,124.6,97.7), new cjs.Rectangle(13.9,-170.2,127.8,100.2), new cjs.Rectangle(14.8,-175.5,131.1,102.8), new cjs.Rectangle(15.8,-180.7,134.4,105.2), new cjs.Rectangle(16.7,-185.9,137.7,107.8), new cjs.Rectangle(17.6,-191.2,140.9,110.4)];


(lib.rays_bat_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,204,0,0)").ss(3,0,0,3).p("AkzkoQhMB7A1CMQAwB9CCBeQCBBdCIAKQCXAKBdhm");
	this.shape.setTransform(-0.2,-29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.035)","rgba(255,204,0,0.035)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-197,-33.6,45.4,220.6).ss(3,0,0,3).p("AlVlJQhWCIA7CdQA2CLCQBpQCRBnCWALQCpALBnhx");
	this.shape_1.setTransform(-2.6,-25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.071)","rgba(255,204,0,0.071)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-194.7,-37.1,47.8,217.1).ss(3,0,0,3).p("Al5lqQhdCWBBCsQA6CZCgB0QCeByCnAMQC5AMByh8");
	this.shape_2.setTransform(-4.9,-22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.102)","rgba(255,204,0,0.102)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-192.3,-40.6,50.2,213.6).ss(3,0,0,3).p("AmbmLQhnCkBHC8QBACnCuB/QCuB8C1ANQDLANB8iI");
	this.shape_3.setTransform(-7.3,-18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.137)","rgba(255,204,0,0.137)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-189.9,-44.1,52.6,210.1).ss(3,0,0,3).p("Am+msQhvCyBNDLQBFC2C9CJQC8CHDFAOQDcAOCGiT");
	this.shape_4.setTransform(-9.7,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.173)","rgba(255,204,0,0.173)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-187.5,-47.6,54.9,206.6).ss(3,0,0,3).p("AnhnNQh4C/BTDcQBLDEDLCTQDLCSDUAOQDtAQCRie");
	this.shape_5.setTransform(-12.1,-11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.208)","rgba(255,204,0,0.208)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-185.1,-51.1,57.3,203.1).ss(3,0,0,3).p("AoEnuQiADNBZDrQBQDSDaCfQDZCbDkAQQD+ARCbiq");
	this.shape_6.setTransform(-14.5,-8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.243)","rgba(255,204,0,0.243)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-182.7,-54.6,59.7,199.6).ss(3,0,0,3).p("AonoPQiIDbBeD7QBWDgDpCpQDnCmD0ARQEPASCli1");
	this.shape_7.setTransform(-16.9,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.275)","rgba(255,204,0,0.275)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-180.4,-58.1,62.1,196.1).ss(3,0,0,3).p("ApKowQiRDpBkELQBcDuD3C0QD2CwEDASQEgATCvjB");
	this.shape_8.setTransform(-19.2,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.31)","rgba(255,204,0,0.31)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-178,-61.6,64.5,192.6).ss(3,0,0,3).p("ApspRQibD2BrEbQBhD9EFC+QEFC7ETATQExAUC6jM");
	this.shape_9.setTransform(-21.6,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.345)","rgba(255,204,0,0.345)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-175.6,-65.1,66.8,189.1).ss(3,0,0,3).p("AqQpyQiiEEBwErQBmELEVDIQETDGEiAUQFCAVDEjX");
	this.shape_10.setTransform(-24,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.38)","rgba(255,204,0,0.38)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-173.2,-68.6,69.2,185.6).ss(3,0,0,3).p("AqyqTQisESB3E6QBrEZEjDUQEiDQEyAVQFTAWDOjj");
	this.shape_11.setTransform(-26.4,9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.416)","rgba(255,204,0,0.416)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-170.9,-72.1,71.6,182.1).ss(3,0,0,3).p("ArWq0QizEgB8FKQBxEnEyDeQEwDbFBAWQFkAYDZjv");
	this.shape_12.setTransform(-28.7,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.447)","rgba(255,204,0,0.447)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-168.5,-75.6,74,178.6).ss(3,0,0,3).p("Ar4rVQi9EtCDFaQB2E2FADpQE/DkFRAYQF1AZDjj6");
	this.shape_13.setTransform(-31.1,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.482)","rgba(255,204,0,0.482)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-166.1,-79.1,76.4,175.1).ss(3,0,0,3).p("Asbr2QjFE7CIFqQB8FEFPDzQFNDvFgAZQGGAaDukG");
	this.shape_14.setTransform(-33.5,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.518)","rgba(255,204,0,0.518)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-163.7,-82.6,78.7,171.7).ss(3,0,0,3).p("As+sXQjOFJCPF6QCBFSFdD+QFcD6FwAZQGXAbD4kQ");
	this.shape_15.setTransform(-35.9,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.553)","rgba(255,204,0,0.553)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-161.3,-86.1,81.1,168.1).ss(3,0,0,3).p("Aths5QjWFYCUGJQCHFgFsEJQFqEEF/AbQGoAcEDkc");
	this.shape_16.setTransform(-38.3,27);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.584)","rgba(255,204,0,0.584)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-158.9,-89.6,83.5,164.6).ss(3,0,0,3).p("AuDtaQjgFlCbGZQCMFvF6ETQF6EPGOAcQG5AdENko");
	this.shape_17.setTransform(-40.7,30.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.62)","rgba(255,204,0,0.62)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-156.6,-93.1,85.9,161.1).ss(3,0,0,3).p("Aunt7QjnFzCgGpQCRF9GKEeQGHEZGeAdQHKAeEYkz");
	this.shape_18.setTransform(-43,34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.655)","rgba(255,204,0,0.655)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-154.2,-96.6,88.3,157.6).ss(3,0,0,3).p("AvJucQjxGBCnG4QCWGLGYEpQGXEkGtAeQHbAfEik+");
	this.shape_19.setTransform(-45.4,37.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.69)","rgba(255,204,0,0.69)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-151.8,-100.1,90.7,154.1).ss(3,0,0,3).p("Avsu9Qj5GPCsHIQCcGZGnE0QGlEtG9AgQHsAgEslK");
	this.shape_20.setTransform(-47.8,41);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.725)","rgba(255,204,0,0.725)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-149.4,-103.6,93,150.6).ss(3,0,0,3).p("AwPveQkCGcCzHYQChGoG1E+QG0E4HMAhQH9AhE3lV");
	this.shape_21.setTransform(-50.2,44.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.757)","rgba(255,204,0,0.757)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-147,-107.1,95.4,147.1).ss(3,0,0,3).p("Awyv/QkKGqC4HoQCnG2HEFIQHCFDHcAiQIOAiFBlg");
	this.shape_22.setTransform(-52.6,48);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.792)","rgba(255,204,0,0.792)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-144.6,-110.6,97.8,143.6).ss(3,0,0,3).p("AxVwgQkSG4C+H4QCsHEHTFTQHQFNHrAjQIgAjFLls");
	this.shape_23.setTransform(-55,51.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.827)","rgba(255,204,0,0.827)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-142.2,-114.1,100.2,140.1).ss(3,0,0,3).p("Ax3xBQkcHGDEIHQCyHSHhFeQHfFYH7AkQIwAkFWl3");
	this.shape_24.setTransform(-57.4,55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.863)","rgba(255,204,0,0.863)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-139.9,-117.6,102.6,136.7).ss(3,0,0,3).p("AybxiQkkHUDLIXQC3HhHvFoQHuFiIKAlQJCAmFgmD");
	this.shape_25.setTransform(-59.7,58.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.898)","rgba(255,204,0,0.898)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-137.5,-121.1,104.9,133.1).ss(3,0,0,3).p("Ay+yDQksHhDQInQC8HvH/FzQH8FtIaAlQJSAoFrmP");
	this.shape_26.setTransform(-62.1,62);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.929)","rgba(255,204,0,0.929)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-135.1,-124.6,107.3,129.6).ss(3,0,0,3).p("AzgykQk2HvDWI3QDCH9INF9QILF4IpAmQJkApF1ma");
	this.shape_27.setTransform(-64.5,65.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.965)","rgba(255,204,0,0.965)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-132.8,-128.1,109.7,126.2).ss(3,0,0,3).p("A0EzFQk9H9DcJGQDHILIcGJQIZGBI5AoQJ0AqGAml");
	this.shape_28.setTransform(-66.8,69);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["rgba(255,204,0,0)","#FFCC00","#FFCC00","rgba(255,204,0,0)"],[0,0.369,0.682,1],-130.4,-131.6,112.1,122.7).ss(3,0,0,3).p("A0mzmQlHIKDiJXQDNIZIqGTQIoGMJIApQKGArGKmx");
	this.shape_29.setTransform(-69.2,72.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.8)","rgba(255,204,0,0.8)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-133.8,-135.1,115,125.9).ss(3,0,0,3).p("A1J0HQlPIYDoJmQDSIoI5GeQI2GWJYAqQKXAsGUm8");
	this.shape_30.setTransform(-71.6,76);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.6)","rgba(255,204,0,0.6)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-137.3,-138.5,118,129.2).ss(3,0,0,3).p("A1s0oQlYImDuJ2QDXI2JIGoQJFGhJnArQKoAtGfnI");
	this.shape_31.setTransform(-74,79.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.4)","rgba(255,204,0,0.4)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-140.7,-142,120.9,132.4).ss(3,0,0,3).p("A2P1JQlgIzD0KGQDdJFJWGyQJTGsJ3AsQK5AuGpnT");
	this.shape_32.setTransform(-76.4,83);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0.2)","rgba(255,204,0,0.2)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-144.2,-145.5,123.9,135.6).ss(3,0,0,3).p("A2y1qQlpJBD6KWQDiJSJlG+QJiG2KGAtQLKAvG0ne");
	this.shape_33.setTransform(-78.7,86.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["rgba(255,204,0,0)","rgba(255,204,0,0)","rgba(255,204,0,0)","rgba(255,204,0,0)"],[0,0.369,0.682,1],-147.6,-148.9,126.8,138.9).ss(3,0,0,3).p("A3V2LQlxJPEAKlQDnJhJ0HIQJwHBKWAuQLbAwG+nq");
	this.shape_34.setTransform(-81.1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-60.2,74.1,61.8);
p.frameBounds = [rect, new cjs.Rectangle(-43.4,-60,82.1,68.4), new cjs.Rectangle(-49.7,-59.8,90.1,75), new cjs.Rectangle(-56.1,-59.6,98.1,81.6), new cjs.Rectangle(-62.5,-59.4,106,88.2), new cjs.Rectangle(-68.9,-59.3,114.1,95.7), new cjs.Rectangle(-75.3,-59.1,122.1,102.3), new cjs.Rectangle(-81.6,-58.9,130,108), new cjs.Rectangle(-88,-58.7,138,114.6), new cjs.Rectangle(-94.4,-58.5,146.1,121.3), new cjs.Rectangle(-100.8,-58.3,154,127.9), new cjs.Rectangle(-107.2,-58.1,162,134.5), new cjs.Rectangle(-113.5,-57.9,170,141.1), new cjs.Rectangle(-119.9,-57.7,178,147.7), new cjs.Rectangle(-126.3,-57.5,186,154.3), new cjs.Rectangle(-132.7,-57.3,194,160.9), new cjs.Rectangle(-139.1,-57.1,202,167.5), new cjs.Rectangle(-145.4,-56.9,210,174.1), new cjs.Rectangle(-151.8,-56.7,218,180.8), new cjs.Rectangle(-158.2,-56.5,226,187.4), new cjs.Rectangle(-164.6,-56.3,234,194), new cjs.Rectangle(-170.9,-56.1,242,200.6), new cjs.Rectangle(-177.3,-55.9,250,207.2), new cjs.Rectangle(-183.7,-55.7,257.9,213.8), new cjs.Rectangle(-190.1,-55.5,265.9,220.4), new cjs.Rectangle(-196.5,-55.4,274,227), new cjs.Rectangle(-202.8,-55.2,281.9,233.6), new cjs.Rectangle(-209.2,-55,289.9,240.2), new cjs.Rectangle(-215.6,-54.8,297.9,246.8), new cjs.Rectangle(-222,-54.6,305.9,253.5), new cjs.Rectangle(-228.4,-54.4,313.9,260.1), new cjs.Rectangle(-234.7,-54.2,321.9,266.7), new cjs.Rectangle(-241.1,-54,329.9,273.2), new cjs.Rectangle(-247.5,-53.8,337.9,279.9), new cjs.Rectangle(-253.9,-53.6,345.9,286.5)];


(lib.jamSonar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(18,159,73,0)","rgba(200,255,196,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(18,159,73,0)"],[0,0.075,0.369,0.682,0.906,1],-14.5,-5,10.9,13.4).ss(2.5,0,0,3).p("AiLhDQArgmA5ADQAyACAvAhQAvAhAUAtQAVA0gUAw");
	this.shape.setTransform(1.2,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(26,162,79,0)","rgba(200,255,196,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(26,162,79,0)"],[0,0.075,0.369,0.682,0.906,1],-16.2,-5.7,12.1,15).ss(2.5,0,0,3).p("AibhLQAvgrBAADQA4ACA1AlQA0AlAWAzQAYA6gWA2");
	this.shape_1.setTransform(3.8,-5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["rgba(34,166,86,0)","rgba(201,255,196,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(34,166,86,0)"],[0,0.075,0.369,0.682,0.906,1],-17.8,-6.3,13.5,16.5).ss(2.5,0,0,3).p("AirhUQA0gvBHADQA/ADA6ApQA6AoAYA5QAaBAgYA8");
	this.shape_2.setTransform(6.3,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["rgba(43,169,92,0)","rgba(201,255,197,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(43,169,92,0)"],[0,0.075,0.369,0.682,0.906,1],-19.6,-7,14.7,18).ss(2.5,0,0,3).p("Ai8hcQA6g0BNAEQBFACA/AtQBAAtAaA+QAeBGgcBB");
	this.shape_3.setTransform(8.9,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["rgba(51,172,98,0)","rgba(202,255,197,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(51,172,98,0)"],[0,0.075,0.369,0.682,0.906,1],-21.3,-7.7,16,19.5).ss(2.5,0,0,3).p("AjMhlQA+g4BVAEQBLADBFAwQBFAxAdBEQAfBLgdBI");
	this.shape_4.setTransform(11.4,-17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["rgba(59,176,104,0)","rgba(202,255,197,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(59,176,104,0)"],[0,0.075,0.369,0.682,0.906,1],-22.9,-8.2,17.4,21.1).ss(2.5,0,0,3).p("AjchtQBDg9BcAEQBQADBLA1QBKA0AgBKQAiBSggBN");
	this.shape_5.setTransform(14,-21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["rgba(67,179,111,0)","rgba(202,255,197,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(67,179,111,0)"],[0,0.075,0.369,0.682,0.906,1],-24.7,-8.9,18.6,22.6).ss(2.5,0,0,3).p("Ajth2QBJhBBiAEQBWAEBRA4QBQA4AhBPQAlBYgiBT");
	this.shape_6.setTransform(16.6,-25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["rgba(75,182,117,0)","rgba(203,255,198,0.6)","#129F49","#129F49","rgba(194,255,189,0.498)","rgba(75,182,117,0)"],[0,0.075,0.369,0.682,0.906,1],-26.3,-9.5,19.9,24.2).ss(2.5,0,0,3).p("Aj9h+QBNhFBpAEQBdAEBWA8QBVA8AkBVQAnBegkBY");
	this.shape_7.setTransform(19.1,-29.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["rgba(83,185,123,0)","rgba(203,255,198,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(83,185,123,0)"],[0,0.075,0.369,0.682,0.906,1],-28,-10.2,21.2,25.7).ss(2.5,0,0,3).p("AkNiHQBShJBwAEQBjAEBbBAQBbBAAmBaQAqBkgnBe");
	this.shape_8.setTransform(21.7,-33.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["rgba(92,189,129,0)","rgba(204,255,198,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(92,189,129,0)"],[0,0.075,0.369,0.682,0.906,1],-29.7,-10.8,22.5,27.2).ss(2.5,0,0,3).p("AkdiPQBXhOB2AFQBpAEBhBEQBhBEAoBgQAtBqgqBj");
	this.shape_9.setTransform(24.2,-37.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["rgba(100,192,136,0)","rgba(204,255,198,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(100,192,136,0)"],[0,0.075,0.369,0.682,0.906,1],-31.4,-11.4,23.8,28.8).ss(2.5,0,0,3).p("AkuiXQBchTB9AFQBwAFBmBIQBmBHArBmQAvBwgsBp");
	this.shape_10.setTransform(26.8,-41.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["rgba(108,195,142,0)","rgba(205,255,199,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(108,195,142,0)"],[0,0.075,0.369,0.682,0.906,1],-33.1,-12,25.1,30.3).ss(2.5,0,0,3).p("Ak+igQBihXCDAFQB2AFBsBMQBrBMAtBrQAyB2guBv");
	this.shape_11.setTransform(29.3,-45.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["rgba(116,199,148,0)","rgba(205,255,199,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(116,199,148,0)"],[0,0.075,0.369,0.682,0.906,1],-34.8,-12.7,26.4,31.8).ss(2.5,0,0,3).p("AlOioQBmhcCKAGQB8AFByBQQBxBPAvBxQA0B8gwB1");
	this.shape_12.setTransform(31.9,-49.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["rgba(124,202,155,0)","rgba(205,255,199,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(124,202,155,0)"],[0,0.075,0.369,0.682,0.906,1],-36.4,-13.3,27.7,33.4).ss(2.5,0,0,3).p("AleixQBrhgCRAGQCCAFB3BUQB2BTAyB2QA3CDgzB6");
	this.shape_13.setTransform(34.5,-53);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["rgba(132,205,161,0)","rgba(206,255,199,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(132,205,161,0)"],[0,0.075,0.369,0.682,0.906,1],-38.1,-14,29,34.9).ss(2.5,0,0,3).p("Alvi6QBxhkCXAGQCIAGB9BXQB8BXA0B8QA5CIg1CB");
	this.shape_14.setTransform(37,-57);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["rgba(141,209,167,0)","rgba(206,255,200,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(141,209,167,0)"],[0,0.075,0.369,0.682,0.906,1],-39.8,-14.6,30.3,36.5).ss(2.5,0,0,3).p("Al/jCQB1hpCfAHQCOAFCCBcQCCBbA2CBQA8CPg4CG");
	this.shape_15.setTransform(39.6,-61);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["rgba(149,212,173,0)","rgba(207,255,200,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(149,212,173,0)"],[0,0.075,0.369,0.682,0.906,1],-41.5,-15.3,31.6,38).ss(2.5,0,0,3).p("AmPjLQB6htCmAHQCUAGCIBfQCHBfA4CHQA+CUg5CM");
	this.shape_16.setTransform(42.1,-64.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["rgba(157,215,180,0)","rgba(207,255,200,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(157,215,180,0)"],[0,0.075,0.369,0.682,0.906,1],-43.2,-15.9,32.9,39.5).ss(2.5,0,0,3).p("AmgjTQCAhyCsAHQCaAGCNBkQCNBiA7CNQBBCag9CS");
	this.shape_17.setTransform(44.7,-68.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["rgba(165,219,186,0)","rgba(207,255,200,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(165,219,186,0)"],[0,0.075,0.369,0.682,0.906,1],-44.9,-16.6,34.2,41).ss(2.5,0,0,3).p("AmwjbQCEh3CzAIQChAGCTBnQCSBnA9CSQBDCgg+CY");
	this.shape_18.setTransform(47.3,-72.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["rgba(173,222,192,0)","rgba(208,255,201,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(173,222,192,0)"],[0,0.075,0.369,0.682,0.906,1],-46.5,-17.2,35.5,42.6).ss(2.5,0,0,3).p("AnAjkQCJh7C6AIQCmAGCZBsQCXBqBACYQBGCmhBCd");
	this.shape_19.setTransform(49.8,-76.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["rgba(181,225,199,0)","rgba(208,255,201,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(181,225,199,0)"],[0,0.075,0.369,0.682,0.906,1],-48.2,-17.8,36.8,44.1).ss(2.5,0,0,3).p("AnQjsQCOh/DAAHQCtAHCeBvQCdBvBCCdQBICshDCj");
	this.shape_20.setTransform(52.4,-80.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["rgba(190,229,205,0)","rgba(209,255,201,0.6)","#129F49","#129F49","rgba(193,255,190,0.498)","rgba(190,229,205,0)"],[0,0.075,0.369,0.682,0.906,1],-49.9,-18.5,38.1,45.6).ss(2.5,0,0,3).p("Anhj1QCTiEDHAIQCzAHCkB0QCiByBFCjQBKCyhFCp");
	this.shape_21.setTransform(55,-84.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["rgba(198,232,211,0)","rgba(209,255,201,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(198,232,211,0)"],[0,0.075,0.369,0.682,0.906,1],-51.6,-19.1,39.4,47.2).ss(2.5,0,0,3).p("Anxj9QCYiIDOAIQC5AHCpB3QCoB2BHCpQBNC4hICu");
	this.shape_22.setTransform(57.5,-88.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["rgba(206,235,217,0)","rgba(210,255,202,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(206,235,217,0)"],[0,0.075,0.369,0.682,0.906,1],-53.3,-19.7,40.7,48.7).ss(2.5,0,0,3).p("AoBkGQCdiMDUAIQDAAICuB7QCuB6BJCuQBQC+hLC0");
	this.shape_23.setTransform(60.1,-92.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["rgba(214,238,224,0)","rgba(210,255,202,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(214,238,224,0)"],[0,0.075,0.369,0.682,0.906,1],-55,-20.4,42,50.2).ss(2.5,0,0,3).p("AoRkOQCiiRDbAJQDFAIC1B+QCzB+BLC0QBSDEhMC6");
	this.shape_24.setTransform(62.6,-96.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["rgba(222,242,230,0)","rgba(210,255,202,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(222,242,230,0)"],[0,0.075,0.369,0.682,0.906,1],-56.6,-21,43.3,51.8).ss(2.5,0,0,3).p("AoikXQCoiVDiAJQDLAIC6CDQC4CBBOC5QBVDLhPC/");
	this.shape_25.setTransform(65.2,-100.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["rgba(230,245,236,0)","rgba(211,255,202,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(230,245,236,0)"],[0,0.075,0.369,0.682,0.906,1],-58.4,-21.6,44.5,53.3).ss(2.5,0,0,3).p("AoykfQCsiaDpAJQDRAJDACGQC+CGBQC/QBXDQhRDF");
	this.shape_26.setTransform(67.8,-104.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["rgba(239,248,242,0)","rgba(211,255,203,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(239,248,242,0)"],[0,0.075,0.369,0.682,0.906,1],-60.1,-22.3,45.8,54.8).ss(2.5,0,0,3).p("ApCkoQCxieDvAKQDYAIDFCLQDDCJBTDEQBaDXhUDL");
	this.shape_27.setTransform(70.3,-108.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["rgba(247,252,249,0)","rgba(212,255,203,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(247,252,249,0)"],[0,0.075,0.369,0.682,0.906,1],-61.7,-23,47.2,56.3).ss(2.5,0,0,3).p("ApTkxQC2iiD3AKQDeAIDKCPQDJCNBVDKQBcDdhWDQ");
	this.shape_28.setTransform(72.9,-112.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["rgba(255,255,255,0)","rgba(212,255,203,0.6)","#129F49","#129F49","rgba(192,255,191,0.498)","rgba(255,255,255,0)"],[0,0.075,0.369,0.682,0.906,1],-63.4,-23.6,48.5,57.9).ss(2.5,0,0,3).p("Apjk5QC7inD9AKQDkAJDQCTQDPCRBXDPQBfDjhZDW");
	this.shape_29.setTransform(75.4,-116.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["rgba(255,255,255,0)","rgba(221,255,213,0.478)","rgba(65,178,109,0.8)","rgba(65,178,109,0.8)","rgba(205,255,204,0.4)","rgba(255,255,255,0)"],[0,0.259,0.494,0.745,0.925,1],-65.2,-24.3,49.7,59.4).ss(2.5,0,0,3).p("ApzlBQDAisEDAKQDqAKDWCWQDUCVBZDVQBiDphbDc");
	this.shape_30.setTransform(78,-120.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["rgba(255,255,255,0)","rgba(229,255,224,0.361)","rgba(113,197,146,0.6)","rgba(113,197,146,0.6)","rgba(217,255,217,0.298)","rgba(255,255,255,0)"],[0,0.443,0.62,0.808,0.945,1],-66.8,-24.8,51.1,61).ss(2.5,0,0,3).p("AqDlKQDFivEKAKQDxAKDbCaQDZCYBcDbQBkDvhdDi");
	this.shape_31.setTransform(80.5,-124.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["rgba(255,255,255,0)","rgba(238,255,234,0.239)","rgba(160,217,182,0.4)","rgba(160,217,182,0.4)","rgba(230,255,229,0.2)","rgba(255,255,255,0)"],[0,0.631,0.749,0.875,0.961,1],-68.5,-25.5,52.3,62.5).ss(2.5,0,0,3).p("AqUlSQDKi1ESALQD2AKDhCeQDeCdBfDgQBmD1hgDn");
	this.shape_32.setTransform(83.1,-128.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["rgba(255,255,255,0)","rgba(246,255,245,0.122)","rgba(208,236,219,0.2)","rgba(208,236,219,0.2)","rgba(242,255,242,0.098)","rgba(255,255,255,0)"],[0,0.816,0.875,0.937,0.98,1],-70.2,-26.2,53.6,64).ss(2.5,0,0,3).p("AqklbQDPi5EYALQD9AKDmCiQDkChBhDmQBpD7hiDt");
	this.shape_33.setTransform(85.7,-132.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,1],-71.9,-26.8,54.9,65.6).ss(2.5,0,0,3).p("Aq0ljQDUi9EfALQECAKDsCmQDqCkBjDsQBrEBhkDz");
	this.shape_34.setTransform(88.2,-136.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-13,30.2,24.1);
p.frameBounds = [rect, new cjs.Rectangle(-13.1,-18.2,33.4,26.6), new cjs.Rectangle(-12.2,-23.5,36.7,29.2), new cjs.Rectangle(-11.3,-28.7,40,31.7), new cjs.Rectangle(-10.3,-33.9,43.2,34.2), new cjs.Rectangle(-9.4,-39.2,46.5,36.8), new cjs.Rectangle(-8.5,-44.4,49.7,39.3), new cjs.Rectangle(-7.5,-49.7,52.9,41.9), new cjs.Rectangle(-6.6,-54.9,56.3,44.4), new cjs.Rectangle(-5.7,-60.2,59.5,46.9), new cjs.Rectangle(-4.7,-65.4,62.7,49.5), new cjs.Rectangle(-3.8,-70.7,66,52), new cjs.Rectangle(-2.9,-75.9,69.2,54.6), new cjs.Rectangle(-1.9,-81.1,72.5,57.1), new cjs.Rectangle(-1,-86.4,75.8,59.6), new cjs.Rectangle(-0.1,-91.6,79,62.2), new cjs.Rectangle(0.8,-96.9,82.3,64.7), new cjs.Rectangle(1.8,-102.1,85.5,67.2), new cjs.Rectangle(2.7,-107.3,88.8,69.8), new cjs.Rectangle(3.6,-112.6,92.1,72.3), new cjs.Rectangle(4.6,-117.8,95.3,74.9), new cjs.Rectangle(5.5,-123.1,98.5,77.4), new cjs.Rectangle(6.4,-128.3,101.8,79.9), new cjs.Rectangle(7.4,-133.5,105.1,82.4), new cjs.Rectangle(8.3,-138.8,108.3,85), new cjs.Rectangle(9.2,-144,111.6,87.5), new cjs.Rectangle(10.2,-149.3,114.8,90.1), new cjs.Rectangle(11.1,-154.5,118.1,92.6), new cjs.Rectangle(12,-159.7,121.4,95.1), new cjs.Rectangle(13,-165,124.6,97.7), new cjs.Rectangle(13.9,-170.2,127.8,100.2), new cjs.Rectangle(14.8,-175.5,131.1,102.8), new cjs.Rectangle(15.8,-180.7,134.4,105.2), new cjs.Rectangle(16.7,-185.9,137.7,107.8), new cjs.Rectangle(17.6,-191.2,140.9,110.4)];


(lib.glow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D70303").s().p("ApUEDQgHAAgFgEQgGgGABgHIAAnjQgBgGAGgGQAGgGAGABISpAAQAHgBAGAGQAEAFAAAHIAAHjQAAAIgEAFQgGAEgHAAgApCDhISFAAIAAnAIyFAAg");
	this.shape.setTransform(0,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-25.5,123,52);
p.frameBounds = [rect];


(lib.butterfly_anim_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3A87C").s().p("AgRA5QgHgBAAgIQgDgmAPgbQAMgaAagOQgcAZgFBWQgEAEgEAAIgCgBg");
	this.shape.setTransform(-0.3,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3A87C").s().p("AgaAxQgDgiAPgZQASgiAXgNQgOAOgMAiQgIAagCAmIgLADQgGgCAAgHg");
	this.shape_1.setTransform(-0.1,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3A87C").s().p("AgcAyQgCgiARgaQAVgiAVgOQgNAQgOAiQgKAbgCAkIgMAEQgFgCgBgHg");
	this.shape_2.setTransform(0.1,-5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3A87C").s().p("AgeAyQgCghAUgbQAYgjATgNQgLAPgRAjQgNAcgCAjIgLAEQgGgCgBgHg");
	this.shape_3.setTransform(0.3,-5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3A87C").s().p("AgfAzQgDgiAXgaQAcglAQgNIgcA0QgQAdgDAhIgLAFQgGgCAAgHg");
	this.shape_4.setTransform(0.4,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3A87C").s().p("AghAzQgDghAagcQAeglAOgMQgHARgWAjQgSAdgDAhIgLAFQgGgBAAgIg");
	this.shape_5.setTransform(0.6,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3A87C").s().p("AgjAzQgCggAcgdIAtgxQgGARgXAjQgWAfgCAfIgLAFQgGgBgBgIg");
	this.shape_6.setTransform(0.8,-6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3A87C").s().p("AglA0QgCggAfgdQAlgoAJgLQgEASgaAkQgYAfgDAeIgLAGQgGgBgBgIg");
	this.shape_7.setTransform(1,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3A87C").s().p("AgmA0QgDggAigdQAogoAHgLQgDATgcAjQgbAhgDAdIgKAFQgHgBAAgIg");
	this.shape_8.setTransform(1.1,-6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3A87C").s().p("AghA+QgHgBAAgIQgDggAlgeQAqgoAFgMQAAATgfAlQgfAjgCAdQgEADgEAAIgCAAg");
	this.shape_9.setTransform(1.3,-6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3A87C").s().p("AgnA0QgCggAigdQAogpAHgKQgDATgcAjQgbAhgDAdIgLAFQgGgBgBgIg");
	this.shape_10.setTransform(1.2,-6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3A87C").s().p("AglA0QgCggAfgeQAmgmAIgMQgDASgbAkQgYAggDAdIgLAGQgGgBgBgIg");
	this.shape_11.setTransform(1,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3A87C").s().p("AgjA0QgDghAdgcIAugzQgGASgYAkQgWAegDAfIgLAGQgGgCAAgHg");
	this.shape_12.setTransform(0.8,-6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3A87C").s().p("AgiAzQgCghAagcQAggmANgLQgHARgWAjQgUAegCAgIgLAFQgGgBgBgIg");
	this.shape_13.setTransform(0.7,-6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3A87C").s().p("AggAzQgDghAYgbQAegmAPgMIgdA0QgRAdgDAhIgLAFQgGgCAAgHg");
	this.shape_14.setTransform(0.5,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3A87C").s().p("AgfAyQgCghAVgbQAbgkARgMQgKAQgSAjQgPAcgCAiIgLAEQgGgBgBgIg");
	this.shape_15.setTransform(0.4,-5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3A87C").s().p("AgdAyQgDghATgbQAYgjATgNQgLAPgQAjQgMAbgDAkIgLAEQgGgCAAgHg");
	this.shape_16.setTransform(0.2,-5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C3A87C").s().p("AgcAxQgCghAQgaQAVgjAWgMQgOAOgNAjQgKAagCAlIgMADQgFgBgBgIg");
	this.shape_17.setTransform(0.1,-5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C3A87C").s().p("AgaAxQgCgiAOgZQASgiAXgNQgOAOgMAiQgHAagCAmIgMADQgFgCgBgHg");
	this.shape_18.setTransform(-0.1,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.9,-11.5,5.3,11.6);
p.frameBounds = [rect, new cjs.Rectangle(-2.9,-11.6,5.6,11.7), new cjs.Rectangle(-2.9,-11.7,5.9,11.8), new cjs.Rectangle(-2.9,-11.8,6.3,11.9), new cjs.Rectangle(-2.9,-11.9,6.7,12), new cjs.Rectangle(-2.8,-12,7,12.1), new cjs.Rectangle(-2.8,-12.1,7.3,12.2), new cjs.Rectangle(-2.8,-12.2,7.7,12.3), new cjs.Rectangle(-2.8,-12.3,8,12.4), new cjs.Rectangle(-2.8,-12.4,8.4,12.5), new cjs.Rectangle(-2.8,-12.3,8.1,12.4), new cjs.Rectangle(-2.8,-12.2,7.7,12.3), new cjs.Rectangle(-2.8,-12.1,7.4,12.2), new cjs.Rectangle(-2.8,-12,7.1,12.1), new cjs.Rectangle(-2.8,-11.9,6.8,12), new cjs.Rectangle(-2.9,-11.9,6.5,12), new cjs.Rectangle(-2.9,-11.8,6.2,11.9), new cjs.Rectangle(-2.9,-11.7,5.9,11.8), new cjs.Rectangle(-2.9,-11.6,5.6,11.7), new cjs.Rectangle(-2.9,-11.5,5.3,11.6)];


(lib.butterfly_anim_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3A87C").s().p("AghCOQgRgEADgWQACgVANgMQAGgFAGALQAGAKAAATQAAANgEAGQgFAGgGAAIgEgBgAhaBwQgPgDACgVQABgTAMgKQAFgFAGAKQAGAKgBAQQABALgEAGQgEAFgGAAIgDAAgABXBoQgSgEADgXQACgVANgLQAGgGAHALQAFALAAASQAAANgEAHQgFAFgGAAIgDAAgAAEAVQgtgKAHg8QAHg4AhggQARgPAQAeQAPAeAAAwQABAjgMARQgLAPgRAAIgLgCg");
	this.shape.setTransform(-0.9,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#694642").s().p("AgTD8QhfgKgcg+QgVgxAPhmQAViNAhhDQAmhLA8ABQAzABApBMQAqBNAMB0QARCLgoA2QghAshOAAQgQAAgTgCg");
	this.shape_1.setTransform(-1.7,28.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-17.3,3.2,31.2,50.8);
p.frameBounds = [rect];


(lib.butterfly_anim_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#694642").s().p("ACPCEQgRgDghgWQgMgHgCgFQgEgFAFgEQAMgIAUgCQATgBAUAFQAOAEAGAKQAHALgGAMQgIAQgPAAIgGgBgABWAVQgagIgIgJQgIgFAGgJQASgXAmgOQAlgMApABQAcAAASAQQAUARgGAZQgIApgpADIgIAAQgjAAhCgXgAgKgEQh1gPh1AcQBggxCKAkgAB0hfQgNgEgDgFQgFgDAFgFQAJgLAUgFQASgEAVABQAOABAIAIQAJAJgEAOQgFAUgVABQgRgBgkgQg");
	this.shape.setTransform(31.3,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF7F2B").s().p("AAVC4QhCgagigLQgwgPg2gKQhKgNglgmQgfghAEgmQAUhdB5g0QB0gyDHgKQCGgMAlBRQAlBRhCCgQggBNhFATQgWAHgZAAQgxAAg9gYg");
	this.shape_1.setTransform(32.1,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-20.8,64.3,41.6);
p.frameBounds = [rect];


(lib.butterfly_anim_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5B097").s().p("AhNCIQgbgygGhJQgFhEAOg5QAPg8AegRQAWgMAdgBIALAAQAdABAWAMQAeARAPA8QAOA5gFBEQgGBJgbAyQgeA5gwAKQgvgKgeg5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-20.3,22.6,40.8);
p.frameBounds = [rect];


(lib.btrflyRight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3A87C").s().p("AgKB7QgHgFACgIQACgHAKgHQAKgKALgCQALgCAAAHQgBARgNAMQgJAJgGAAQgFAAgFgEgAhGBhQgHgGACgIQACgIAKgIQAPgLAMgCQAMgDgBAIQAAASgQAPQgJAJgJAAQgFAAgGgEgAAAgHQgTgPAFgXQAHgWAagVQAmgeAhgHQAhgGgBAWQgDAwgoAoQgaAYgXAAQgRAAgNgKgAh0gUQgHgFACgJQADgIAKgHQAOgLAMgEQAMgBAAAIQgBARgPAPQgJAKgJAAQgGAAgGgFg");
	this.shape.setTransform(-7.2,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#694642").s().p("AinCbQhNhOAQhAQASg/B3hKQBihABWgQQBVgPAgAnQAoAwgjBNQgfBBhiBqQhHBMgyANQgNAEgNAAQg1AAg1g2g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-20.9,46.5,41.8);
p.frameBounds = [rect];


(lib.btrflyLeft = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3A87C").s().p("ABaB+QghgHgmgeQgagVgHgWQgFgXATgPQAjgcAsAqQAoAoADAwQABARgUAAIgNgBgAhSBBQgMgEgOgLQgKgHgDgIQgCgJAHgFQAOgMAQARQAPAPABARQAAAHgIAAIgEAAgAgkg1QgMgCgPgLQgKgIgCgIQgCgIAHgGQAOgKAPAPQAQAPAAASQABAGgHAAIgFgBgAAShTQgLgCgKgKQgKgHgCgHQgCgIAHgFQAKgKAPAPQANAMABARQAAAFgGAAIgFAAg");
	this.shape.setTransform(-7.2,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#694642").s().p("ABdDNQhWgQhihAQh3hKgSg/QgQhABNhOQBDhDBBARQAyANBHBMQBiBqAfBBQAjBNgoAwQgXAcgzAAQgUAAgXgEg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-20.9,46.5,41.8);
p.frameBounds = [rect];


(lib.batFace2copy = function() {
	this.initialize();

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjoCxQgggfgZg5QgdhAgGggQgEgXABg1IAChDIAAgfQgBgOABgIQAPADAVAJQApARAXAZQAmAnASAUQAfAkAPAhQAPAfARA3QARA4gQAGQgQAHgXAUQgXAVABAWQAAAHgJAAQgTAAg1gbgAB5CBQgZgsgVASQAFgnAeg5QAhg8AigyQAegtBAgZQAggNAagDIgFAvQgFAvACAAQgFB8gzBPQgaAogyAtQgsgUgYgsg");
	mask.setTransform(0.2,-16.3);

	// Layer 2
	this.instance = new lib.batFace2();
	this.instance.setTransform(-33,-35.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-32.7,-35.5,65.7,39.7);
p.frameBounds = [rect];


(lib.batFace2_1 = function() {
	this.initialize();

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgLAoQgLAAgLgRIgJgQIAOgMQADgFAHgPQAGgPAMABQAEAAAFADIAGAJIAJAPQACAEAHAFQAGADADAAQADANgLANQgMAMgIACIgOAAIgLAAg");
	mask.setTransform(0.4,11.5);

	// Layer 2
	this.instance = new lib.batFace2();
	this.instance.setTransform(-33,-35.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-3.9,7.5,8.7,8.2);
p.frameBounds = [rect];


(lib.batFace_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.batFace();
	this.instance.setTransform(-33,-35.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-33,-35.5,66,71);
p.frameBounds = [rect];


(lib.bateyes1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.batEye();
	this.instance.setTransform(-5.5,-5.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-5.5,-5.5,11,11);
p.frameBounds = [rect];


(lib.batBwing1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.batWing();
	this.instance.setTransform(-154,-46);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-154,-46,174,102);
p.frameBounds = [rect];


(lib.rays_butterfly_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EBGEAfoMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEAeEMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEAchMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEAa9MiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEAZZMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAX1MiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAWQMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEAUsMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEATIMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEARkMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEAQAMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEAOdMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEAM5MiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEALVMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAJxMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAIMMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEAGoMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEAFEMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEADgMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEAB8MiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEAAZMiMHAAAQgKAAgIgIQgHgHAAgKQAAgJAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAIAAAAgEBGEgBJMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgCtMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgERMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgF2MiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgHaMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgI+MiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgKiMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgMGMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEgNpMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEgPNMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEgQxMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgSVMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgT6MiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgVeMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgXCMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgYmMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgaKMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEgbtMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAAAgEBGEgdRMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEge1MiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAg");
	mask.setTransform(49,10.4);

	// Layer 10
	this.instance = new lib.rays_butterfly_2("synched",0);
	this.instance.setTransform(1.4,0.2,1,1,55.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(35));

	// Layer 9
	this.instance_1 = new lib.rays_butterfly_2("synched",0);
	this.instance_1.setTransform(1.4,0.2,1,1,55.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({_off:true},35).wait(3));

	// Layer 8
	this.instance_2 = new lib.rays_butterfly_2("synched",0);
	this.instance_2.setTransform(1.4,0.2,1,1,55.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},35).wait(6));

	// Layer 7
	this.instance_3 = new lib.rays_butterfly_2("synched",0);
	this.instance_3.setTransform(1.4,0.2,1,1,55.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true},35).wait(9));

	// Layer 6
	this.instance_4 = new lib.rays_butterfly_2("synched",0);
	this.instance_4.setTransform(1.4,0.2,1,1,55.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},35).wait(12));

	// Layer 5
	this.instance_5 = new lib.rays_butterfly_2("synched",0);
	this.instance_5.setTransform(1.4,0.2,1,1,55.5);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},35).wait(15));

	// Layer 4
	this.instance_6 = new lib.rays_butterfly_2("synched",0);
	this.instance_6.setTransform(1.4,0.2,1,1,55.5);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},35).wait(18));

	// Layer 3
	this.instance_7 = new lib.rays_butterfly_2("synched",0);
	this.instance_7.setTransform(1.4,0.2,1,1,55.5);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},35).wait(21));

	// Layer 1
	this.instance_8 = new lib.rays_butterfly_2("synched",0);
	this.instance_8.setTransform(1.4,0.2,1,1,55.5);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({_off:true},35).wait(24));

	// Layer 2
	this.instance_9 = new lib.rays_butterfly_2("synched",0);
	this.instance_9.setTransform(1.4,0.2,1,1,55.5);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},35).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.3,-16.3,13.8,34.6);
p.frameBounds = [rect, new cjs.Rectangle(4.2,-18.2,15.1,38.3), new cjs.Rectangle(8.7,-20.2,16.4,42.2), new cjs.Rectangle(-0.3,-22.2,31.2,46), new cjs.Rectangle(4.2,-24.1,32.6,49.8), new cjs.Rectangle(8.7,-26.1,33.9,53.5), new cjs.Rectangle(-0.3,-28,48.8,57.3), new cjs.Rectangle(4.2,-30,50.1,61.2), new cjs.Rectangle(8.7,-32,51.4,64.9), new cjs.Rectangle(-0.3,-33.9,66.2,68.7), new cjs.Rectangle(4.2,-35.9,67.6,72.5), new cjs.Rectangle(8.7,-37.9,68.9,76.3), new cjs.Rectangle(-0.3,-39.8,83.8,80.1), new cjs.Rectangle(4.2,-41.8,85,83.9), new cjs.Rectangle(8.7,-43.8,86.4,87.7), new cjs.Rectangle(-0.3,-45.7,101.2,91.4), new cjs.Rectangle(4.2,-47.7,102.6,95.3), new cjs.Rectangle(8.7,-49.7,103.9,99), new cjs.Rectangle(-0.3,-51.6,118.7,102.8), new cjs.Rectangle(4.2,-53.6,120,106.6), new cjs.Rectangle(8.7,-55.5,121.4,110.4), new cjs.Rectangle(-0.3,-57.5,136.2,114.2), new cjs.Rectangle(4.2,-59.5,137.5,118), new cjs.Rectangle(8.7,-61.5,138.9,121.8), new cjs.Rectangle(-0.3,-63.4,153.7,125.5), new cjs.Rectangle(4.2,-65.4,155,129.3), new cjs.Rectangle(8.7,-67.3,156.4,133.1), new cjs.Rectangle(-0.3,-69.3,171.2,136.9), new cjs.Rectangle(4.2,-71.3,172.5,140.8), new cjs.Rectangle(8.7,-73.2,173.9,144.5), new cjs.Rectangle(13.2,-75.2,175.2,148.2), new cjs.Rectangle(17.7,-77.2,176.5,152.1), new cjs.Rectangle(22.2,-79.1,177.9,155.8), new cjs.Rectangle(26.7,-81.1,179.2,159.7), new cjs.Rectangle(31.2,-83.1,180.5,163.4), new cjs.Rectangle(35.7,-79.1,164.4,155.8), new cjs.Rectangle(40.2,-81.1,165.6,159.7), new cjs.Rectangle(44.7,-83.1,167,163.4), new cjs.Rectangle(49.2,-79.1,150.8,155.8), new cjs.Rectangle(53.7,-81.1,152.2,159.7), new cjs.Rectangle(58.2,-83.1,153.5,163.4), new cjs.Rectangle(62.7,-79.1,137.4,155.8), new cjs.Rectangle(67.2,-81.1,138.7,159.7), new cjs.Rectangle(71.7,-83.1,140,163.4), new cjs.Rectangle(76.2,-79.1,123.9,155.8), new cjs.Rectangle(80.7,-81.1,125.2,159.7), new cjs.Rectangle(85.2,-83.1,126.5,163.4), new cjs.Rectangle(89.7,-79.1,110.4,155.8), new cjs.Rectangle(94.2,-81.1,111.6,159.7), new cjs.Rectangle(98.7,-83.1,113,163.4), new cjs.Rectangle(103.2,-79.1,96.8,155.8), new cjs.Rectangle(107.7,-81.1,98.2,159.7), new cjs.Rectangle(112.1,-83.1,99.6,163.4), new cjs.Rectangle(116.7,-79.1,83.4,155.8), new cjs.Rectangle(121.2,-81.1,84.7,159.7), new cjs.Rectangle(125.7,-83.1,86,163.4), new cjs.Rectangle(130.2,-79.1,69.9,155.8), new cjs.Rectangle(134.7,-81.1,71.2,159.7), new cjs.Rectangle(139.2,-83.1,72.5,163.4), new cjs.Rectangle(143.7,-79.1,56.4,155.8), new cjs.Rectangle(148.2,-81.1,57.7,159.7), new cjs.Rectangle(152.7,-83.1,59,163.4)];


(lib.rays_bat_1_withReverse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EBGEAfoMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEAeEMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEAchMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEAa9MiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEAZZMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAX1MiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAWQMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEAUsMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEATIMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEARkMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEAQAMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEAOdMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEAM5MiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEALVMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAJxMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEAIMMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEAGoMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEAFEMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEADgMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEAB8MiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEAAZMiMHAAAQgKAAgIgIQgHgHAAgKQAAgJAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAIAAAAgEBGEgBJMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgCtMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgERMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgF2MiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgHaMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgI+MiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgKiMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgMGMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEgNpMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEgPNMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEgQxMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgSVMiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAgEBGEgT6MiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgVeMiMHAAAQgKABgIgIQgHgHAAgKQAAgLAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAALQAAAKgIAHQgHAHgKAAIAAAAgEBGEgXCMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgYmMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKABMCMHAAAQAKgBAHAIQAIAHAAAKQAAALgIAHQgHAHgKAAIAAAAgEBGEgaKMiMHAAAQgKABgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAgBgEBGEgbtMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAHgKABIAAAAgEBGEgdRMiMHAAAQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAAKQAAALgIAHQgHAIgKAAIAAAAgEBGEge1MiMHAAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgIAKAAMCMHAAAQAKAAAHAIQAIAHAAALQAAAKgIAHQgHAIgKAAIAAAAg");
	mask.setTransform(49,10.4);

	// Layer 10
	this.instance = new lib.rays_butterfly_1("synched",4);
	this.instance.setTransform(266.8,-12.9,1,1,0,0,180);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(35));

	// Layer 8
	this.instance_1 = new lib.rays_bat_2("synched",0);
	this.instance_1.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(35));

	// Layer 7
	this.instance_2 = new lib.rays_bat_2("synched",0);
	this.instance_2.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true},35).wait(5));

	// Layer 6
	this.instance_3 = new lib.rays_bat_2("synched",0);
	this.instance_3.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({_off:true},35).wait(10));

	// Layer 5
	this.instance_4 = new lib.rays_bat_2("synched",0);
	this.instance_4.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},35).wait(15));

	// Layer 4
	this.instance_5 = new lib.rays_bat_2("synched",0);
	this.instance_5.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},35).wait(20));

	// Layer 3
	this.instance_6 = new lib.rays_bat_2("synched",0);
	this.instance_6.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({_off:true},35).wait(25));

	// Layer 2
	this.instance_7 = new lib.rays_bat_2("synched",0);
	this.instance_7.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},35).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.1,-41.9,34.2,85.9);
p.frameBounds = [rect, new cjs.Rectangle(-4.7,-46.7,37.8,95.2), new cjs.Rectangle(-1.1,-51.6,41.2,104.6), new cjs.Rectangle(2.4,-56.5,44.7,113.8), new cjs.Rectangle(5.8,-61.3,48.2,123.2), new cjs.Rectangle(-8.1,-66.2,69.2,132.6), new cjs.Rectangle(-4.7,-71.1,72.7,141.9), new cjs.Rectangle(-1.1,-75.9,76.2,151.2), new cjs.Rectangle(2.4,-80.8,79.7,160.5), new cjs.Rectangle(5.8,-85.7,83.2,169.9), new cjs.Rectangle(-8.1,-90.6,104.1,179.2), new cjs.Rectangle(-4.7,-95.4,107.7,188.4), new cjs.Rectangle(-1.1,-100.3,111.1,197.8), new cjs.Rectangle(2.4,-105.1,114.6,207.1), new cjs.Rectangle(5.8,-110,118.2,216.4), new cjs.Rectangle(-8.1,-114.9,139.1,225.8), new cjs.Rectangle(-4.7,-119.7,142.6,235.1), new cjs.Rectangle(-1.1,-124.6,146.1,244.4), new cjs.Rectangle(2.4,-129.5,149.6,253.8), new cjs.Rectangle(5.8,-134.4,153.1,263.1), new cjs.Rectangle(-8.1,-139.2,174.1,272.4), new cjs.Rectangle(-4.7,-144.1,177.6,281.7), new cjs.Rectangle(-1.1,-148.9,181.1,291), new cjs.Rectangle(2.4,-153.8,184.6,300.3), new cjs.Rectangle(5.8,-158.6,188.1,309.6), new cjs.Rectangle(-8.1,-163.6,209.1,319), new cjs.Rectangle(-4.7,-168.4,212.6,328.4), new cjs.Rectangle(-1.1,-173.3,216,337.6), new cjs.Rectangle(2.4,-178.2,219.5,347), new cjs.Rectangle(5.8,-183,223,356.3), new cjs.Rectangle(-8.1,-187.9,270.8,365.6), new cjs.Rectangle(-4.7,-192,262.8,374.2), new cjs.Rectangle(-1.1,-192,268.3,378.7), new cjs.Rectangle(2.4,-192,260.3,383.1), new cjs.Rectangle(5.8,-192,258,387.6), new cjs.Rectangle(9.3,-187.9,257.8,365.6), new cjs.Rectangle(12.8,-192,249.8,374.2), new cjs.Rectangle(16.3,-192,241.9,378.7), new cjs.Rectangle(19.8,-192,247.4,383.1), new cjs.Rectangle(23.2,-192,240.6,387.6), new cjs.Rectangle(26.7,-187.9,231.5,365.6), new cjs.Rectangle(30.2,-192,237,374.2), new cjs.Rectangle(33.7,-192,229,378.7), new cjs.Rectangle(37.2,-192,221,383.1), new cjs.Rectangle(40.7,-192,226.5,387.6), new cjs.Rectangle(44.2,-187.9,218.5,365.6), new cjs.Rectangle(47.7,-192,210.5,374.2), new cjs.Rectangle(51.2,-192,216,378.7), new cjs.Rectangle(54.6,-192,208.1,383.1), new cjs.Rectangle(58.1,-192,205.7,387.6), new cjs.Rectangle(61.6,-187.9,205.6,365.6), new cjs.Rectangle(65.1,-192,197.5,374.2), new cjs.Rectangle(68.6,-192,189.6,378.7), new cjs.Rectangle(72.1,-192,195.1,383.1), new cjs.Rectangle(75.5,-192,188.3,387.6), new cjs.Rectangle(79.1,-187.9,179.1,365.6), new cjs.Rectangle(78.4,-192,175.3,374.2), new cjs.Rectangle(72.6,-192,177.2,378.7), new cjs.Rectangle(66.8,-192,190.1,383.1), new cjs.Rectangle(61,-192,202.9,387.6), new cjs.Rectangle(55.1,-187.9,180.8,365.6), new cjs.Rectangle(66.8,-192,176.2,374.2), new cjs.Rectangle(61,-192,188.9,378.7), new cjs.Rectangle(55.1,-192,201.8,383.1), new cjs.Rectangle(66.8,-192,197.1,387.6)];


(lib.rays_bat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.rays_bat_2("synched",0);
	this.instance.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(35));

	// Layer 7
	this.instance_1 = new lib.rays_bat_2("synched",0);
	this.instance_1.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({_off:true},35).wait(5));

	// Layer 6
	this.instance_2 = new lib.rays_bat_2("synched",0);
	this.instance_2.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({_off:true},35).wait(10));

	// Layer 5
	this.instance_3 = new lib.rays_bat_2("synched",0);
	this.instance_3.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({_off:true},35).wait(15));

	// Layer 4
	this.instance_4 = new lib.rays_bat_2("synched",0);
	this.instance_4.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({_off:true},35).wait(20));

	// Layer 3
	this.instance_5 = new lib.rays_bat_2("synched",0);
	this.instance_5.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({_off:true},35).wait(25));

	// Layer 2
	this.instance_6 = new lib.rays_bat_2("synched",0);
	this.instance_6.setTransform(-0.1,0.1,1,1,-128.7,0,0,-0.1,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},35).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.1,-41.9,34.2,85.9);
p.frameBounds = [rect, new cjs.Rectangle(-4.7,-46.7,37.8,95.2), new cjs.Rectangle(-1.1,-51.6,41.2,104.6), new cjs.Rectangle(2.4,-56.5,44.7,113.8), new cjs.Rectangle(5.8,-61.3,48.2,123.2), new cjs.Rectangle(-8.1,-66.2,69.2,132.6), new cjs.Rectangle(-4.7,-71.1,72.7,141.9), new cjs.Rectangle(-1.1,-75.9,76.2,151.2), new cjs.Rectangle(2.4,-80.8,79.7,160.5), new cjs.Rectangle(5.8,-85.7,83.2,169.9), new cjs.Rectangle(-8.1,-90.6,104.1,179.2), new cjs.Rectangle(-4.7,-95.4,107.7,188.4), new cjs.Rectangle(-1.1,-100.3,111.1,197.8), new cjs.Rectangle(2.4,-105.1,114.6,207.1), new cjs.Rectangle(5.8,-110,118.2,216.4), new cjs.Rectangle(-8.1,-114.9,139.1,225.8), new cjs.Rectangle(-4.7,-119.7,142.6,235.1), new cjs.Rectangle(-1.1,-124.6,146.1,244.4), new cjs.Rectangle(2.4,-129.5,149.6,253.8), new cjs.Rectangle(5.8,-134.4,153.1,263.1), new cjs.Rectangle(-8.1,-139.2,174.1,272.4), new cjs.Rectangle(-4.7,-144.1,177.6,281.7), new cjs.Rectangle(-1.1,-148.9,181.1,291), new cjs.Rectangle(2.4,-153.8,184.6,300.3), new cjs.Rectangle(5.8,-158.6,188.1,309.6), new cjs.Rectangle(-8.1,-163.6,209.1,319), new cjs.Rectangle(-4.7,-168.4,212.6,328.4), new cjs.Rectangle(-1.1,-173.3,216,337.6), new cjs.Rectangle(2.4,-178.2,219.5,347), new cjs.Rectangle(5.8,-183,223,356.3), new cjs.Rectangle(-8.1,-187.9,244,365.6), new cjs.Rectangle(-4.7,-192.7,247.6,374.9), new cjs.Rectangle(-1.1,-197.6,251,384.2), new cjs.Rectangle(2.4,-202.5,254.5,393.6), new cjs.Rectangle(5.8,-207.3,258,402.9), new cjs.Rectangle(9.3,-187.9,226.6,365.6), new cjs.Rectangle(12.8,-192.7,230.1,374.9), new cjs.Rectangle(16.3,-197.6,233.6,384.2), new cjs.Rectangle(19.8,-202.5,237.1,393.6), new cjs.Rectangle(23.2,-207.3,240.6,402.9), new cjs.Rectangle(26.7,-187.9,209.2,365.6), new cjs.Rectangle(30.2,-192.7,212.7,374.9), new cjs.Rectangle(33.7,-197.6,216.1,384.2), new cjs.Rectangle(37.2,-202.5,219.6,393.6), new cjs.Rectangle(40.7,-207.3,223.1,402.9), new cjs.Rectangle(44.2,-187.9,191.7,365.6), new cjs.Rectangle(47.7,-192.7,195.3,374.9), new cjs.Rectangle(51.2,-197.6,198.7,384.2), new cjs.Rectangle(54.6,-202.5,202.2,393.6), new cjs.Rectangle(58.1,-207.3,205.7,402.9), new cjs.Rectangle(61.6,-187.9,174.3,365.6), new cjs.Rectangle(65.1,-192.7,177.8,374.9), new cjs.Rectangle(68.6,-197.6,181.3,384.2), new cjs.Rectangle(72.1,-202.5,184.8,393.6), new cjs.Rectangle(75.5,-207.3,188.3,402.9), new cjs.Rectangle(79.1,-187.9,156.8,365.6), new cjs.Rectangle(82.6,-192.7,160.4,374.9), new cjs.Rectangle(86,-197.6,163.8,384.2), new cjs.Rectangle(89.5,-202.5,167.3,393.6), new cjs.Rectangle(93,-207.3,170.8,402.9), new cjs.Rectangle(96.5,-187.9,139.4,365.6), new cjs.Rectangle(99.9,-192.7,143,374.9), new cjs.Rectangle(103.5,-197.6,146.4,384.2), new cjs.Rectangle(106.9,-202.5,149.9,393.6), new cjs.Rectangle(110.4,-207.3,153.4,402.9)];


(lib.jamSonar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10 copy 5
	this.instance = new lib.jamSonar2("synched",0);
	this.instance.setTransform(1.4,0.2,1,1,55.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).to({_off:true},35).wait(1));

	// Layer 9 copy 4
	this.instance_1 = new lib.jamSonar2("synched",0);
	this.instance_1.setTransform(1.4,0.2,1,1,55.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({_off:true},35).wait(4));

	// Layer 8 copy 4
	this.instance_2 = new lib.jamSonar2("synched",0);
	this.instance_2.setTransform(1.4,0.2,1,1,55.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(141).to({_off:false},0).to({_off:true},35).wait(7));

	// Layer 7 copy 4
	this.instance_3 = new lib.jamSonar2("synched",0);
	this.instance_3.setTransform(1.4,0.2,1,1,55.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(138).to({_off:false},0).to({_off:true},35).wait(10));

	// Layer 6 copy 4
	this.instance_4 = new lib.jamSonar2("synched",0);
	this.instance_4.setTransform(1.4,0.2,1,1,55.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(135).to({_off:false},0).to({_off:true},35).wait(13));

	// Layer 5 copy 4
	this.instance_5 = new lib.jamSonar2("synched",0);
	this.instance_5.setTransform(1.4,0.2,1,1,55.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(132).to({_off:false},0).to({_off:true},35).wait(16));

	// Layer 4 copy 4
	this.instance_6 = new lib.jamSonar2("synched",0);
	this.instance_6.setTransform(1.4,0.2,1,1,55.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({_off:true},35).wait(19));

	// Layer 3 copy 4
	this.instance_7 = new lib.jamSonar2("synched",0);
	this.instance_7.setTransform(1.4,0.2,1,1,55.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(126).to({_off:false},0).to({_off:true},35).wait(22));

	// Layer 1 copy 4
	this.instance_8 = new lib.jamSonar2("synched",0);
	this.instance_8.setTransform(1.4,0.2,1,1,55.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(123).to({_off:false},0).to({_off:true},35).wait(25));

	// Layer 2 copy 4
	this.instance_9 = new lib.jamSonar2("synched",0);
	this.instance_9.setTransform(1.4,0.2,1,1,55.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120).to({_off:false},0).to({_off:true},35).wait(28));

	// Layer 10 copy 2
	this.instance_10 = new lib.jamSonar2("synched",0);
	this.instance_10.setTransform(1.4,0.2,1,1,55.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(117).to({_off:false},0).to({_off:true},35).wait(31));

	// Layer 9 copy 2
	this.instance_11 = new lib.jamSonar2("synched",0);
	this.instance_11.setTransform(1.4,0.2,1,1,55.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(114).to({_off:false},0).to({_off:true},35).wait(34));

	// Layer 8 copy 2
	this.instance_12 = new lib.jamSonar2("synched",0);
	this.instance_12.setTransform(1.4,0.2,1,1,55.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(111).to({_off:false},0).to({_off:true},35).wait(37));

	// Layer 7 copy 2
	this.instance_13 = new lib.jamSonar2("synched",0);
	this.instance_13.setTransform(1.4,0.2,1,1,55.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(108).to({_off:false},0).to({_off:true},35).wait(40));

	// Layer 6 copy 2
	this.instance_14 = new lib.jamSonar2("synched",0);
	this.instance_14.setTransform(1.4,0.2,1,1,55.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(105).to({_off:false},0).to({_off:true},35).wait(43));

	// Layer 5 copy 2
	this.instance_15 = new lib.jamSonar2("synched",0);
	this.instance_15.setTransform(1.4,0.2,1,1,55.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(102).to({_off:false},0).to({_off:true},35).wait(46));

	// Layer 4 copy 2
	this.instance_16 = new lib.jamSonar2("synched",0);
	this.instance_16.setTransform(1.4,0.2,1,1,55.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(99).to({_off:false},0).to({_off:true},35).wait(49));

	// Layer 3 copy 2
	this.instance_17 = new lib.jamSonar2("synched",0);
	this.instance_17.setTransform(1.4,0.2,1,1,55.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(96).to({_off:false},0).to({_off:true},35).wait(52));

	// Layer 1 copy 2
	this.instance_18 = new lib.jamSonar2("synched",0);
	this.instance_18.setTransform(1.4,0.2,1,1,55.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(93).to({_off:false},0).to({_off:true},35).wait(55));

	// Layer 2 copy 2
	this.instance_19 = new lib.jamSonar2("synched",0);
	this.instance_19.setTransform(1.4,0.2,1,1,55.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({_off:false},0).to({_off:true},35).wait(58));

	// Layer 10 copy 3
	this.instance_20 = new lib.jamSonar2("synched",0);
	this.instance_20.setTransform(1.4,0.2,1,1,55.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(88).to({_off:false},0).to({_off:true},35).wait(60));

	// Layer 9 copy 3
	this.instance_21 = new lib.jamSonar2("synched",0);
	this.instance_21.setTransform(1.4,0.2,1,1,55.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(85).to({_off:false},0).to({_off:true},35).wait(63));

	// Layer 8 copy 3
	this.instance_22 = new lib.jamSonar2("synched",0);
	this.instance_22.setTransform(1.4,0.2,1,1,55.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(82).to({_off:false},0).to({_off:true},35).wait(66));

	// Layer 7 copy 3
	this.instance_23 = new lib.jamSonar2("synched",0);
	this.instance_23.setTransform(1.4,0.2,1,1,55.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(79).to({_off:false},0).to({_off:true},35).wait(69));

	// Layer 6 copy 3
	this.instance_24 = new lib.jamSonar2("synched",0);
	this.instance_24.setTransform(1.4,0.2,1,1,55.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(76).to({_off:false},0).to({_off:true},35).wait(72));

	// Layer 5 copy 3
	this.instance_25 = new lib.jamSonar2("synched",0);
	this.instance_25.setTransform(1.4,0.2,1,1,55.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(73).to({_off:false},0).to({_off:true},35).wait(75));

	// Layer 4 copy 3
	this.instance_26 = new lib.jamSonar2("synched",0);
	this.instance_26.setTransform(1.4,0.2,1,1,55.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(70).to({_off:false},0).to({_off:true},35).wait(78));

	// Layer 3 copy 3
	this.instance_27 = new lib.jamSonar2("synched",0);
	this.instance_27.setTransform(1.4,0.2,1,1,55.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(67).to({_off:false},0).to({_off:true},35).wait(81));

	// Layer 1 copy 3
	this.instance_28 = new lib.jamSonar2("synched",0);
	this.instance_28.setTransform(1.4,0.2,1,1,55.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(64).to({_off:false},0).to({_off:true},35).wait(84));

	// Layer 2 copy 3
	this.instance_29 = new lib.jamSonar2("synched",0);
	this.instance_29.setTransform(1.4,0.2,1,1,55.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(61).to({_off:false},0).to({_off:true},35).wait(87));

	// Layer 10 copy 4
	this.instance_30 = new lib.jamSonar2("synched",0);
	this.instance_30.setTransform(1.4,0.2,1,1,55.5);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(59).to({_off:false},0).to({_off:true},35).wait(89));

	// Layer 10 copy
	this.instance_31 = new lib.jamSonar2("synched",0);
	this.instance_31.setTransform(1.4,0.2,1,1,55.5);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(56).to({_off:false},0).to({_off:true},35).wait(92));

	// Layer 9 copy
	this.instance_32 = new lib.jamSonar2("synched",0);
	this.instance_32.setTransform(1.4,0.2,1,1,55.5);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(53).to({_off:false},0).to({_off:true},35).wait(95));

	// Layer 8 copy
	this.instance_33 = new lib.jamSonar2("synched",0);
	this.instance_33.setTransform(1.4,0.2,1,1,55.5);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(50).to({_off:false},0).to({_off:true},35).wait(98));

	// Layer 7 copy
	this.instance_34 = new lib.jamSonar2("synched",0);
	this.instance_34.setTransform(1.4,0.2,1,1,55.5);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(47).to({_off:false},0).to({_off:true},35).wait(101));

	// Layer 6 copy
	this.instance_35 = new lib.jamSonar2("synched",0);
	this.instance_35.setTransform(1.4,0.2,1,1,55.5);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(44).to({_off:false},0).to({_off:true},35).wait(104));

	// Layer 5 copy
	this.instance_36 = new lib.jamSonar2("synched",0);
	this.instance_36.setTransform(1.4,0.2,1,1,55.5);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(41).to({_off:false},0).to({_off:true},35).wait(107));

	// Layer 4 copy
	this.instance_37 = new lib.jamSonar2("synched",0);
	this.instance_37.setTransform(1.4,0.2,1,1,55.5);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(38).to({_off:false},0).to({_off:true},35).wait(110));

	// Layer 3 copy
	this.instance_38 = new lib.jamSonar2("synched",0);
	this.instance_38.setTransform(1.4,0.2,1,1,55.5);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(35).to({_off:false},0).to({_off:true},35).wait(113));

	// Layer 1 copy
	this.instance_39 = new lib.jamSonar2("synched",0);
	this.instance_39.setTransform(1.4,0.2,1,1,55.5);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(32).to({_off:false},0).to({_off:true},35).wait(116));

	// Layer 2 copy
	this.instance_40 = new lib.jamSonar2("synched",0);
	this.instance_40.setTransform(1.4,0.2,1,1,55.5);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(29).to({_off:false},0).to({_off:true},35).wait(119));

	// Layer 10
	this.instance_41 = new lib.jamSonar2("synched",0);
	this.instance_41.setTransform(1.4,0.2,1,1,55.5);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(27).to({_off:false},0).to({_off:true},35).wait(121));

	// Layer 9
	this.instance_42 = new lib.jamSonar2("synched",0);
	this.instance_42.setTransform(1.4,0.2,1,1,55.5);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(24).to({_off:false},0).to({_off:true},35).wait(124));

	// Layer 8
	this.instance_43 = new lib.jamSonar2("synched",0);
	this.instance_43.setTransform(1.4,0.2,1,1,55.5);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(21).to({_off:false},0).to({_off:true},35).wait(127));

	// Layer 7
	this.instance_44 = new lib.jamSonar2("synched",0);
	this.instance_44.setTransform(1.4,0.2,1,1,55.5);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(18).to({_off:false},0).to({_off:true},35).wait(130));

	// Layer 6
	this.instance_45 = new lib.jamSonar2("synched",0);
	this.instance_45.setTransform(1.4,0.2,1,1,55.5);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(15).to({_off:false},0).to({_off:true},35).wait(133));

	// Layer 5
	this.instance_46 = new lib.jamSonar2("synched",0);
	this.instance_46.setTransform(1.4,0.2,1,1,55.5);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(12).to({_off:false},0).to({_off:true},35).wait(136));

	// Layer 4
	this.instance_47 = new lib.jamSonar2("synched",0);
	this.instance_47.setTransform(1.4,0.2,1,1,55.5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(9).to({_off:false},0).to({_off:true},35).wait(139));

	// Layer 3
	this.instance_48 = new lib.jamSonar2("synched",0);
	this.instance_48.setTransform(1.4,0.2,1,1,55.5);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(6).to({_off:false},0).to({_off:true},35).wait(142));

	// Layer 1
	this.instance_49 = new lib.jamSonar2("synched",0);
	this.instance_49.setTransform(1.4,0.2,1,1,55.5);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(3).to({_off:false},0).to({_off:true},35).wait(145));

	// Layer 2
	this.instance_50 = new lib.jamSonar2("synched",0);
	this.instance_50.setTransform(1.4,0.2,1,1,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({_off:true},35).wait(148));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.3,-16.3,13.8,34.6);
p.frameBounds = [rect, new cjs.Rectangle(4.2,-18.2,15.1,38.3), new cjs.Rectangle(8.7,-20.2,16.4,42.2), new cjs.Rectangle(-0.3,-22.2,31.2,46), new cjs.Rectangle(4.2,-24.1,32.6,49.8), new cjs.Rectangle(8.7,-26.1,33.9,53.5), new cjs.Rectangle(-0.3,-28,48.8,57.3), new cjs.Rectangle(4.2,-30,50.1,61.2), new cjs.Rectangle(8.7,-32,51.4,64.9), new cjs.Rectangle(-0.3,-33.9,66.2,68.7), new cjs.Rectangle(4.2,-35.9,67.6,72.5), new cjs.Rectangle(8.7,-37.9,68.9,76.3), new cjs.Rectangle(-0.3,-39.8,83.8,80.1), new cjs.Rectangle(4.2,-41.8,85,83.9), new cjs.Rectangle(8.7,-43.8,86.4,87.7), new cjs.Rectangle(-0.3,-45.7,101.2,91.4), new cjs.Rectangle(4.2,-47.7,102.6,95.3), new cjs.Rectangle(8.7,-49.7,103.9,99), new cjs.Rectangle(-0.3,-51.6,118.7,102.8), new cjs.Rectangle(4.2,-53.6,120,106.6), new cjs.Rectangle(8.7,-55.5,121.4,110.4), new cjs.Rectangle(-0.3,-57.5,136.2,114.2), new cjs.Rectangle(4.2,-59.5,137.5,118), new cjs.Rectangle(8.7,-61.5,138.9,121.8), new cjs.Rectangle(-0.3,-63.4,153.7,125.5), new cjs.Rectangle(4.2,-65.4,155,129.3), new cjs.Rectangle(8.7,-67.3,156.4,133.1), new cjs.Rectangle(-0.3,-69.3,171.2,136.9), new cjs.Rectangle(4.2,-71.3,172.5,140.8), new cjs.Rectangle(-0.3,-73.2,182.9,144.5), new cjs.Rectangle(4.2,-75.2,184.2,148.2), new cjs.Rectangle(8.7,-77.2,185.5,152.1), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(-0.3,-83.1,212.1,163.4), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(-0.3,-83.1,212.1,163.4), new cjs.Rectangle(4.2,-79.1,195.9,155.8), new cjs.Rectangle(8.7,-81.1,197.2,159.7), new cjs.Rectangle(-0.3,-83.1,212.1,163.4), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-79.1,200.4,155.8), new cjs.Rectangle(4.2,-81.1,201.7,159.7), new cjs.Rectangle(8.7,-83.1,203,163.4), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(-0.3,-81.1,206.2,159.7), new cjs.Rectangle(4.2,-83.1,207.6,163.4), new cjs.Rectangle(8.7,-79.1,191.4,155.8), new cjs.Rectangle(13.2,-81.1,192.7,159.7), new cjs.Rectangle(17.7,-83.1,194,163.4), new cjs.Rectangle(22.2,-79.1,177.9,155.8), new cjs.Rectangle(26.7,-81.1,179.2,159.7), new cjs.Rectangle(31.2,-83.1,180.5,163.4), new cjs.Rectangle(35.7,-79.1,164.4,155.8), new cjs.Rectangle(40.2,-81.1,165.6,159.7), new cjs.Rectangle(44.7,-83.1,167,163.4), new cjs.Rectangle(49.2,-79.1,150.8,155.8), new cjs.Rectangle(53.7,-81.1,152.2,159.7), new cjs.Rectangle(58.2,-83.1,153.5,163.4), new cjs.Rectangle(62.7,-79.1,137.4,155.8), new cjs.Rectangle(67.2,-81.1,138.7,159.7), new cjs.Rectangle(71.7,-83.1,140,163.4), new cjs.Rectangle(76.2,-79.1,123.9,155.8), new cjs.Rectangle(80.7,-81.1,125.2,159.7), new cjs.Rectangle(85.2,-83.1,126.5,163.4), new cjs.Rectangle(89.7,-79.1,110.4,155.8), new cjs.Rectangle(94.2,-81.1,111.6,159.7), new cjs.Rectangle(98.7,-83.1,113,163.4), new cjs.Rectangle(103.2,-79.1,96.8,155.8), new cjs.Rectangle(107.7,-81.1,98.2,159.7), new cjs.Rectangle(112.1,-83.1,99.6,163.4), new cjs.Rectangle(116.7,-79.1,83.4,155.8), new cjs.Rectangle(121.2,-81.1,84.7,159.7), new cjs.Rectangle(125.7,-83.1,86,163.4), new cjs.Rectangle(130.2,-79.1,69.9,155.8), new cjs.Rectangle(134.7,-81.1,71.2,159.7), new cjs.Rectangle(139.2,-83.1,72.5,163.4), new cjs.Rectangle(143.7,-79.1,56.4,155.8), new cjs.Rectangle(148.2,-81.1,57.7,159.7), new cjs.Rectangle(152.7,-83.1,59,163.4), null];


(lib.button_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.glow();
	this.instance.setTransform(0.5,0.5);
	this.instance.alpha = 0.102;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-63,-27,127,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},12).to({alpha:0.301},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-29,139,68);
p.frameBounds = [rect, rect=new cjs.Rectangle(-63,-27,131,60), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-65,-29,139,68), rect=new cjs.Rectangle(-63,-27,131,60), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.butterFly_Run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3 copy
	this.instance = new lib.butterfly_anim_3("synched",0);
	this.instance.setTransform(1.5,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.38,x:0.4},2).to({scaleX:1,x:1.5},2).wait(1));

	// Symbol 4 copy
	this.instance_1 = new lib.btrflyLeft("synched",0);
	this.instance_1.setTransform(24.5,11.6,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.38,x:9.2},2).to({scaleY:1,x:24.5},2).wait(1));

	// Symbol 3
	this.instance_2 = new lib.butterfly_anim_3("synched",0);
	this.instance_2.setTransform(-2.1,-15.2,1,1,0,0,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.38,x:-1},2).to({scaleX:1,x:-2.1},2).wait(1));

	// Symbol 4
	this.instance_3 = new lib.btrflyRight("synched",0);
	this.instance_3.setTransform(-25,11.6,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.38,x:-9.8},2).to({scaleY:1,x:-25},2).wait(1));

	// Symbol 5
	this.instance_4 = new lib.butterfly_anim_5("synched",0);
	this.instance_4.setTransform(3.6,-28.3,1,1,0,0,0,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// Symbol 5
	this.instance_5 = new lib.butterfly_anim_5("synched",0);
	this.instance_5.setTransform(-4.6,-28.3,1,1,0,0,-180,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5));

	// Symbol 2
	this.instance_6 = new lib.butterfly_anim_2("synched",0);
	this.instance_6.setTransform(0.6,-1.6,1,1,0,0,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.4,-36,132.2,70.9);
p.frameBounds = [rect, new cjs.Rectangle(-46,-36,91.4,70.9), new cjs.Rectangle(-25.6,-36,50.7,70.9), new cjs.Rectangle(-46,-36,91.4,70.9), new cjs.Rectangle(-66.4,-36,132.2,70.9)];


(lib.butterfly_anim_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butterFly_Run("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:11.3,x:-1.6,y:-19.5,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:59.4,x:5.2,y:-37.5,startPosition:2},0).wait(1).to({rotation:118.3,x:28.6,y:-37.8,startPosition:3},0).wait(1).to({rotation:129.6,x:50.2,y:-26.6,startPosition:4},0).wait(1).to({rotation:134.1,x:68.9,y:-13.8,startPosition:0},0).wait(1).to({rotation:136.4,x:86.3,y:-0.2,startPosition:1},0).wait(1).to({rotation:137.9,x:102.8,y:13.7,startPosition:2},0).wait(1).to({rotation:138.9,x:118.8,y:27.9,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:139.4,x:134.4,y:42.3,startPosition:4},0).wait(1).to({rotation:139.9,x:149.7,y:56.9,startPosition:0},0).wait(1).to({rotation:140.4,x:164.7,y:71.6,startPosition:1},0).wait(1).to({rotation:134.1,x:180.4,y:85.2,startPosition:2},0).wait(1).to({rotation:129.3,x:197,y:97.6,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:122.9,x:214.7,y:108.3,startPosition:4},0).wait(1).to({rotation:114.1,x:233.5,y:116.7,alpha:0.801,startPosition:0},0).wait(1).to({rotation:102.5,x:253.4,y:121.8,alpha:0.602,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:87.7,x:274.2,y:122.3,alpha:0.398,startPosition:2},0).wait(1).to({rotation:71.7,x:294.6,y:117.1,alpha:0.199,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:57.4,x:313.1,y:106.9,alpha:0,startPosition:4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.4,-36,132.2,70.9);
p.frameBounds = [rect, new cjs.Rectangle(-43.2,-61.9,91,80.5), new cjs.Rectangle(-30.6,-74.9,77.1,65.3), new cjs.Rectangle(-11.8,-76.3,90.3,91.6), new cjs.Rectangle(2.7,-76.1,112.3,117.9), new cjs.Rectangle(20.7,-62.7,114.9,115.8), new cjs.Rectangle(46.4,-40.8,93.6,93.6), new cjs.Rectangle(71,-20,71.8,74.3), new cjs.Rectangle(79.2,-12.8,93.5,93.3), new cjs.Rectangle(85.5,-5.7,117.4,112.8), new cjs.Rectangle(100.8,8.9,117.6,112.5), new cjs.Rectangle(125.3,30.9,93.4,93.1), new cjs.Rectangle(147.6,52.5,73.4,72.8), new cjs.Rectangle(156.6,57.7,93.1,93.4), new cjs.Rectangle(168.4,58.2,107.6,120), new cjs.Rectangle(189.4,62,99.7,125.2), new cjs.Rectangle(215.1,80.7,81.3,90.9), new cjs.Rectangle(239,95.8,71.9,50.7), new cjs.Rectangle(255.1,65.3,85.2,90.7), new cjs.Rectangle(266.4,36.4,107.5,120.2)];


(lib.butterfly_anim_eating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3 copy
	this.instance = new lib.butterfly_anim_3("synched",0);
	this.instance.setTransform(4.4,-2.3,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},10).wait(1));

	// Symbol 4 copy
	this.instance_1 = new lib.btrflyLeft("synched",0);
	this.instance_1.setTransform(-22.4,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},10).wait(1));

	// Symbol 3
	this.instance_2 = new lib.butterfly_anim_3("synched",0);
	this.instance_2.setTransform(4.4,1.3,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},10).wait(1));

	// Symbol 4
	this.instance_3 = new lib.btrflyRight("synched",0);
	this.instance_3.setTransform(-22.4,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},10).wait(1));

	// Symbol 5
	this.instance_4 = new lib.butterfly_anim_5("synched",0);
	this.instance_4.setTransform(17.5,-4.4,1,1,0,90,-90,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},10).wait(1));

	// Symbol 5
	this.instance_5 = new lib.butterfly_anim_5("synched",0);
	this.instance_5.setTransform(17.5,3.9,1,1,90,0,0,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},10).wait(1));

	// Symbol 2
	this.instance_6 = new lib.butterfly_anim_2("synched",0);
	this.instance_6.setTransform(-9.2,-1.3,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.7,-66.6,70.9,132.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.butterfly_anim_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 5
	this.instance = new lib.butterfly_anim_5("synched",0);
	this.instance.setTransform(-4.6,-13.3,1,1,0,0,180,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-5.5,skewX:-0.5,skewY:179.5,x:-4.4,startPosition:9},29).wait(1));

	// Symbol 5
	this.instance_1 = new lib.butterfly_anim_5("synched",0);
	this.instance_1.setTransform(4.4,-13.3,1,1,0,0,0,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-5.7,rotation:-0.5,x:4.6,y:-13.6,startPosition:9},29).wait(1));

	// Symbol 3
	this.instance_2 = new lib.butterfly_anim_3("synched",0);
	this.instance_2.setTransform(-1.9,-0.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.02,skewX:-81.2,skewY:98.8,x:-4,y:-1.9},29).wait(1));

	// Symbol 3
	this.instance_3 = new lib.butterfly_anim_3("synched",0);
	this.instance_3.setTransform(1.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.07,rotation:75.6,x:5.8,y:-2.9},29).wait(1));

	// Symbol 4
	this.instance_4 = new lib.butterfly_anim_4("synched",0);
	this.instance_4.setTransform(6.1,5,1,1,0,-38.7,141.3,-1.8,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-1.9,regY:3,scaleY:0.87,skewX:-2.5,skewY:177.5,x:6.5,y:4.7},29).wait(1));

	// Symbol 4
	this.instance_5 = new lib.butterfly_anim_4("synched",0);
	this.instance_5.setTransform(-7.6,4.7,1,1,39.7,0,0,-3.2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.86,rotation:-5.5,x:-7.2,y:4.5},29).wait(1));

	// Symbol 2
	this.instance_6 = new lib.butterfly_anim_2("synched",0);
	this.instance_6.setTransform(0.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-0.5,x:0.6,y:13.2},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.2,-21,131.6,71.3);
p.frameBounds = [rect, new cjs.Rectangle(-66.5,-19.3,132.5,70), new cjs.Rectangle(-66.9,-19.4,133.3,70.4), new cjs.Rectangle(-67.1,-19.6,133.9,70.9), new cjs.Rectangle(-67.2,-19.7,134.3,71.2), new cjs.Rectangle(-67.1,-19.7,134.4,71.6), new cjs.Rectangle(-66.9,-19.8,134.4,71.8), new cjs.Rectangle(-66.7,-19.9,134.1,72.1), new cjs.Rectangle(-66.2,-20.1,133.5,72.3), new cjs.Rectangle(-65.8,-20.2,132.8,72.6), new cjs.Rectangle(-65.1,-20.1,131.6,72.6), new cjs.Rectangle(-64.3,-20,130.4,72.5), new cjs.Rectangle(-63.4,-19.9,128.9,72.4), new cjs.Rectangle(-62.4,-19.9,127.2,72.4), new cjs.Rectangle(-61.3,-19.8,125.3,72.2), new cjs.Rectangle(-59.9,-19.7,123,72), new cjs.Rectangle(-58.5,-19.6,120.5,71.9), new cjs.Rectangle(-57.1,-19.6,117.9,71.7), new cjs.Rectangle(-55.5,-19.5,115.1,72.7), new cjs.Rectangle(-53.8,-19.4,112,73.8), new cjs.Rectangle(-52,-19.4,108.9,74.9), new cjs.Rectangle(-50,-19.5,105.3,76), new cjs.Rectangle(-48.1,-19.7,101.6,77), new cjs.Rectangle(-46.1,-19.8,97.9,77.9), new cjs.Rectangle(-44,-19.9,94,78.7), new cjs.Rectangle(-41.8,-19.9,89.9,79.5), new cjs.Rectangle(-39.5,-20,85.6,80.6), new cjs.Rectangle(-37.2,-20.2,81.3,81.5), new cjs.Rectangle(-34.9,-20.3,77,82.4), new cjs.Rectangle(-32.6,-20.3,72.5,83.2)];


(lib.butterfly_anim_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3 copy
	this.instance = new lib.butterfly_anim_3("synched",0);
	this.instance.setTransform(4.4,-2.3,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.38,y:-1.2},9).to({scaleX:1,y:-2.3},10).wait(1));

	// Symbol 4 copy
	this.instance_1 = new lib.btrflyLeft("synched",0);
	this.instance_1.setTransform(-22.4,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.38,y:-10},9).to({scaleY:1,y:-25.2},10).wait(1));

	// Symbol 3
	this.instance_2 = new lib.butterfly_anim_3("synched",0);
	this.instance_2.setTransform(4.4,1.3,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.38,y:0.2},9).to({scaleX:1,y:1.3},10).wait(1));

	// Symbol 4
	this.instance_3 = new lib.btrflyRight("synched",0);
	this.instance_3.setTransform(-22.4,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.38,y:9},9).to({scaleY:1,y:24.3},10).wait(1));

	// Symbol 5
	this.instance_4 = new lib.butterfly_anim_5("synched",0);
	this.instance_4.setTransform(17.5,-4.4,1,1,0,90,-90,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// Symbol 5
	this.instance_5 = new lib.butterfly_anim_5("synched",0);
	this.instance_5.setTransform(17.5,3.9,1,1,90,0,0,-0.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// Symbol 2
	this.instance_6 = new lib.butterfly_anim_2("synched",0);
	this.instance_6.setTransform(-9.2,-1.3,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.7,-66.6,70.9,132.2);
p.frameBounds = [rect, new cjs.Rectangle(-45.7,-62.1,70.9,123.2), new cjs.Rectangle(-45.7,-57.5,70.9,114), new cjs.Rectangle(-45.7,-53,70.9,105), new cjs.Rectangle(-45.7,-48.4,70.9,95.9), new cjs.Rectangle(-45.7,-43.9,70.9,86.9), new cjs.Rectangle(-45.7,-39.4,70.9,77.8), new cjs.Rectangle(-45.7,-34.9,70.9,68.8), new cjs.Rectangle(-45.7,-30.3,70.9,59.7), new cjs.Rectangle(-45.7,-25.8,70.9,50.7), new cjs.Rectangle(-45.7,-29.9,70.9,58.9), new cjs.Rectangle(-45.7,-34,70.9,67), new cjs.Rectangle(-45.7,-38.1,70.9,75.2), new cjs.Rectangle(-45.7,-42.1,70.9,83.3), new cjs.Rectangle(-45.7,-46.1,70.9,91.4), new cjs.Rectangle(-45.7,-50.3,70.9,99.6), new cjs.Rectangle(-45.7,-54.3,70.9,107.8), new cjs.Rectangle(-45.7,-58.4,70.9,115.9), new cjs.Rectangle(-45.7,-62.5,70.9,124.1), new cjs.Rectangle(-45.7,-66.6,70.9,132.2)];


(lib.batEye_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bateyes1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:0},0).wait(1).to({scaleY:0.18},0).wait(2).to({startPosition:0},0).wait(1).to({scaleY:1},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.5,-5.5,11,11);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-5.5,-1,11,2), rect, rect, rect=new cjs.Rectangle(-5.5,-5.5,11,11), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mainEcholocationInBatsAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// batEye copy
	this.instance = new lib.batEye_1("synched",0);
	this.instance.setTransform(-10.1,-46.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-56.3,startPosition:9},9,cjs.Ease.get(1)).wait(1).to({y:-56.2,startPosition:12},0).to({y:-46.3,startPosition:19},17).to({startPosition:0},10,cjs.Ease.get(-1)).wait(1));

	// batEye
	this.instance_1 = new lib.batEye_1("synched",0);
	this.instance_1.setTransform(10.9,-46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-56.3,startPosition:9},9,cjs.Ease.get(1)).wait(1).to({y:-56.2,startPosition:12},0).to({y:-46.3,startPosition:19},17).to({startPosition:0},10,cjs.Ease.get(-1)).wait(1));

	// batFace
	this.instance_2 = new lib.batFace_1("synched",0);
	this.instance_2.setTransform(-0.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-60.5},9,cjs.Ease.get(1)).wait(1).to({y:-60.4},0).to({y:-50.5},17).to({startPosition:0},10,cjs.Ease.get(-1)).wait(1));

	// batWing copy
	this.instance_3 = new lib.batBwing1("synched",0);
	this.instance_3.setTransform(25,-35,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.58,skewX:50.7,skewY:230.7,y:-45},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:0.59,skewX:49.9,skewY:229.9,x:24.9,y:-44.9},0).to({scaleX:1,scaleY:1,skewX:-33.8,skewY:146.2,x:25,y:-35},17).to({skewX:0,skewY:180},10,cjs.Ease.get(-1)).wait(1));

	// batWing
	this.instance_4 = new lib.batBwing1("synched",0);
	this.instance_4.setTransform(-25,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.59,rotation:-51,y:-45},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:0.6,rotation:-50.1,y:-44.9},0).to({scaleX:1,scaleY:1,rotation:34,y:-35},17).to({rotation:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179,-86,358,107);
p.frameBounds = [rect, new cjs.Rectangle(-184,-88.1,368,129.5), new cjs.Rectangle(-182.7,-89.9,365.5,147.9), new cjs.Rectangle(-177.2,-91.5,354.6,162.1), new cjs.Rectangle(-169.6,-92.9,339.2,172.7), new cjs.Rectangle(-161.5,-94,323.1,180.1), new cjs.Rectangle(-153.9,-94.9,307.9,185.5), new cjs.Rectangle(-148.1,-95.5,296.3,188.8), new cjs.Rectangle(-144.2,-95.9,288.5,190.8), new cjs.Rectangle(-143.1,-96,286.4,191.6), new cjs.Rectangle(-144.6,-95.9,289.3,190.5), new cjs.Rectangle(-153.4,-95.3,306.8,184.3), new cjs.Rectangle(-161.4,-94.7,322.5,177.5), new cjs.Rectangle(-168,-94.1,336.1,170.2), new cjs.Rectangle(-173.7,-93.5,347.3,161.9), new cjs.Rectangle(-177.9,-93,355.7,152.9), new cjs.Rectangle(-180.9,-92.4,361.7,143.1), new cjs.Rectangle(-182.5,-91.8,364.9,133.3), new cjs.Rectangle(-182.8,-91.2,365.5,122.4), new cjs.Rectangle(-181.7,-90.6,363.3,111), new cjs.Rectangle(-179.2,-90.1,358.5,99.1), new cjs.Rectangle(-182,-89.5,364,100.5), new cjs.Rectangle(-184.6,-102.1,369.3,116.1), new cjs.Rectangle(-186.5,-115.1,373,131.7), new cjs.Rectangle(-187.2,-127.3,374.6,146.2), new cjs.Rectangle(-187.2,-138.7,374.3,159.4), new cjs.Rectangle(-185.9,-149.4,372,171.3), new cjs.Rectangle(-184,-159.1,368.1,181.8), new cjs.Rectangle(-184,-158.3,368.3,181.1), new cjs.Rectangle(-184.6,-156.5,369.4,179.4), new cjs.Rectangle(-185.7,-153.2,371.6,176.5), new cjs.Rectangle(-186.8,-148.8,373.8,172.5), new cjs.Rectangle(-187.9,-142.2,375.9,166.4), new cjs.Rectangle(-188.6,-134.3,377.3,158.7), new cjs.Rectangle(-188.5,-124.6,377,149), new cjs.Rectangle(-187.2,-112.1,374.4,136), new cjs.Rectangle(-184.1,-97.6,368.3,120.5), new cjs.Rectangle(-179,-86,358,107)];


(lib.Butterfly_eatingNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(33.3,0);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(25.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E3DF").s().p("AAIAJQgHAAgDgCQgFgCgEgFIgDgCIAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIADAAQAKABAGgGIACAAIABACIAFAOIABADIgHgBg");
	this.shape.setTransform(22.7,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E5E3").s().p("AgKADQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAEgCAJgGQAKgFADADQABACAAADIgEALIgBADIAAACQgJgLgKACg");
	this.shape_1.setTransform(22.3,-7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALBxIgBgBIgIgSIAAgBIgBgDIgEgQIAAgCIgGgbQgJgyAMgxIAAgCIABgDIAEgNQAEgUAKgTIAAgBIABAAIAAACQgkBKAOBQQADAPAEAPIADAQIACADIAIATIAAAAIgBABIAAAAIAAAAg");
	this.shape_2.setTransform(24,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B0403").s().p("AgBAAIAAgBIADgDIAAAJIgDgFg");
	this.shape_3.setTransform(23.2,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525144").s().p("AAAADIAAgEIAAAEg");
	this.shape_4.setTransform(28.6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E49A9B").s().p("AgCALIAAgCIACgHIAAgFQgBgCgCgCIAAgBIAAgBIABgJQAEABABAIIAAABQABAIgBADQAAAHgDAFIAAACIAAABIgBABIgBgIg");
	this.shape_5.setTransform(22.1,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DFA1A0").s().p("AAAgFIAAgEQAAACABADIAAAEIgBAHIAAADIAAgPg");
	this.shape_6.setTransform(21.8,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E39598").s().p("AgGARIABgBIACgBIADABQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgDACQADgFAAgHQAAgDAAgIIAAgBQAAgIgHgBIAAAAIABgBIAAgCIACgKIAAAAIAEAAIACgBIABAAIABABIACAPIABARQACAPgEANQgCAGgDACIAAAAQgDgIgDgKg");
	this.shape_7.setTransform(22.5,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DD9496").s().p("AgBAoIgDgFIABAAQADgCABgGQAEgNgCgPIgBgRIgCgPQABgBAAgDQAAgEACgCQANAwgQAnIgBgEgAgEAQIgDgBIAAgCIADgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgCABIgBAAg");
	this.shape_8.setTransform(22.9,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE8F92").s().p("AACALIgBAAIgBABIgFABIAAAAQACgKADgGIAAgCIABgGIABgBIAEAOQgCACABAEQAAADgCACIgBgCg");
	this.shape_9.setTransform(22.6,-4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C0001").s().p("AgKAzIAAgLQAAgEAEgHQAEgHAAgFQACAAAAgDIABgFQADgLgDgUIgCghIABAAQACABADADQACACABAFIADARQABAKgFAHIAAADQACAKgFAPIgDAIIgFATIgBAJIAAACIgFgFg");
	this.shape_10.setTransform(24.6,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#280202").s().p("AgCgeIgEgQIAAgBIAEgGIAAgCIABgBQADAJABALQADAXABALQACASgEAPQAAAFgEAHQgBAHAAAEIgGADQAPgngLgwg");
	this.shape_11.setTransform(23.6,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#180001").s().p("AACAMQgBgMgBgVQgBgLgFgIIAAgBIACgDIAAgBIABgBIAAAAIAAABIAAABIADAJIABAJIAFAfQACAUgDANIgBAFQgBADgDABQAEgPgCgUg");
	this.shape_12.setTransform(24.1,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C0504").s().p("AAAAGIgBgIIAAgBIAAAAIgBAAIAFgLIgCADIgBAEIAAABIAAgBIABAEIAAAAQACADAAAFIAAACIAAAIIgDgJg");
	this.shape_13.setTransform(24,-6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#010000").s().p("AgCBLIgFgEIgEgGIgBgBIAAgCIABgJIAHgTIADgIQADgPgCgLIAAgDQAFgGgBgKIgDgRQgBgFAAgCQgDgDgDgBIgCgBIAAgHIAAgDQAAgFgCgEIAAgBIgBgDIgCABIACgBIACgFIABgCIAAgBIAAAAIACACIAGAKIADAIIgBAAQAGAMACANQAGAbgEAgIgCAOQgDATgFAPIgCAHIgCgFgAgJhMIAAAAIAAAAg");
	this.shape_14.setTransform(25.3,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E49A9B").s().p("AgCALIAAgBIACgIIAAgFQgBgCgCgCIAAgBIAAgBIABgJQAEABABAIIAAABQABAIgBADQAAAHgDAFIAAACIAAABIgBABIgBgIg");
	this.shape_15.setTransform(18.1,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DFA1A0").s().p("AAAgFIAAgEQAAACABADIAAAEIgBAIIAAACIAAgPg");
	this.shape_16.setTransform(17.8,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E39598").s().p("AAAAjQgDgIgDgKIABgBIACgBIADABQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgDACQADgFAAgHQAAgDAAgIIAAgBQAAgIgHgBIAAAAIABgBIAAgCIACgKIAAAAIAEAAIACgBIABAAIABABIACAPIABARQACAPgEANQgCAGgDACg");
	this.shape_17.setTransform(18.5,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DE8F92").s().p("AACALIgBAAIgBABIgFABIAAAAQACgKADgGIAAgCIACgGIAAgBIAEAOQgCACAAAEQABADgCACIgBgCg");
	this.shape_18.setTransform(18.6,-4.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#180001").s().p("AACAMQgBgMgBgVQgBgLgFgIIAAgBIACgDIAAgBIABgBIAAABIAAABIADAJIABAJIAFAfQACAUgDANIgBAFQgBADgDABQAEgPgCgUg");
	this.shape_19.setTransform(20.1,-2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#010000").s().p("AgCBLIgFgEIgEgGIgBgBIAAgCIABgJIAHgTIADgIQADgPgCgLIAAgDQAFgGgBgKIgDgRQgBgFAAgCQgDgDgDgBIgCgBIAAgHIAAgDQAAgFgCgEIAAgBIgBgDIgCABIACgBIACgFIABgCIAAgBIAAAAIACACIAGAKIADAIIgBAAQAGAMACANQAGAbgEAgIgCAOQgDATgFAPIgCAHIgCgFg");
	this.shape_20.setTransform(21.3,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0C0504").s().p("AAAAGIgBgIIAAgBIgBAAIAFgLIgBADIgCAEIAAABIAAgBIABAEIAAAAQACADAAAFIAAACIAAAIIgDgJg");
	this.shape_21.setTransform(20,-6.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DE8F92").s().p("AACALIgBAAIgBABIgFABIAAAAQACgKADgGIAAgCIABgGIABgBIAEAOQgCACAAAEQAAADgBACIgBgCg");
	this.shape_22.setTransform(19.6,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:23.6}},{t:this.shape_10,p:{x:24.6}},{t:this.shape_9},{t:this.shape_8,p:{x:22.9}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:28.6}},{t:this.shape_3,p:{x:23.2}}]},4).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:23.6}},{t:this.shape_10,p:{x:24.6}},{t:this.shape_9},{t:this.shape_8,p:{x:22.9}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:28.6}},{t:this.shape_3,p:{x:23.2}}]},5).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_21,p:{x:20}},{t:this.shape_20,p:{x:21.3}},{t:this.shape_19,p:{x:20.1}},{t:this.shape_11,p:{x:19.6}},{t:this.shape_18},{t:this.shape_8,p:{x:18.9}},{t:this.shape_17,p:{x:18.5}},{t:this.shape_16,p:{x:17.8}},{t:this.shape_15,p:{x:18.1}},{t:this.shape_10,p:{x:20.6}},{t:this.shape_4,p:{x:24.6}},{t:this.shape_3,p:{x:19.2}}]},4).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:23.6}},{t:this.shape_10,p:{x:24.6}},{t:this.shape_9},{t:this.shape_8,p:{x:22.9}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:28.6}},{t:this.shape_3,p:{x:23.2}}]},4).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_11,p:{x:20.6}},{t:this.shape_22},{t:this.shape_17,p:{x:19.5}},{t:this.shape_15,p:{x:19.1}},{t:this.shape_16,p:{x:18.8}},{t:this.shape_8,p:{x:19.9}},{t:this.shape_21,p:{x:21}},{t:this.shape_20,p:{x:22.3}},{t:this.shape_19,p:{x:21.1}},{t:this.shape_10,p:{x:21.6}},{t:this.shape_4,p:{x:25.6}},{t:this.shape_3,p:{x:20.2}}]},4).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:25.1,y:-0.1},5).wait(50));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnPAHQAXwUOBGBQiXGPCeDVIAABdQixDhCyFzQkGBsi8AAQnuAAAQrug");
	var mask_graphics_10 = new cjs.Graphics().p("AnPAHQAXwUOBGBQiXGPCeDVIAABdQixDhCyFzQkGBsi8AAQnuAAAQrug");
	var mask_graphics_12 = new cjs.Graphics().p("AnPAHQAXwUOBGBQiXGPCaCzIAECiQixC+CyFzQkGBsi8AAQnuAAAQrug");
	var mask_graphics_17 = new cjs.Graphics().p("AnPAHQAXxIOBGUQiXGjCWC4QgcBWAhBUQiuDMCyGFQkGBxi8AAQnuAAAQsTg");
	var mask_graphics_22 = new cjs.Graphics().p("AnPAIQAXyfOBG0QiXHECaDLIAEC4QixDXCyGkQkGB6i8AAQnuAAAQtRg");
	var mask_graphics_26 = new cjs.Graphics().p("AnPAHQAXxIOBGUQiXGjCWC4QgcBWAhBUQiuDMCyGFQkGBxi8AAQnuAAAQsTg");
	var mask_graphics_30 = new cjs.Graphics().p("AnPAIQAXyfOBG0QiXHEB6C9QgdBDAoCUQiYDGCyGkQkGB6i8AAQnuAAAQtRg");
	var mask_graphics_34 = new cjs.Graphics().p("AnPAHQAXxIOBGUQiXGjCWC4QgcBWAhBUQiuDMCyGFQkGBxi8AAQnuAAAQsTg");
	var mask_graphics_38 = new cjs.Graphics().p("AnPAIQAXyfOBG0QiXHECaDLIAEC4QixDXCyGkQkGB6i8AAQnuAAAQtRg");
	var mask_graphics_42 = new cjs.Graphics().p("AnPAHQAXxIOBGUQiXGjCWC4QgcBWAhBUQiuDMCyGFQkGBxi8AAQnuAAAQsTg");
	var mask_graphics_46 = new cjs.Graphics().p("AnPAIQAXyfOBG0QiYHICADUIAHCVQiZDtCyGkQkGB6i8AAQnuAAAQtRg");
	var mask_graphics_50 = new cjs.Graphics().p("AnPAHQAXxIOBGUQiXGjCWC4QgcBWAhBUQiuDMCyGFQkGBxi8AAQnuAAAQsTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-12.6,y:-0.3}).wait(10).to({graphics:mask_graphics_10,x:-12.6,y:-0.3}).wait(2).to({graphics:mask_graphics_12,x:-21.8,y:-0.3}).wait(5).to({graphics:mask_graphics_17,x:-21.8,y:-0.3}).wait(5).to({graphics:mask_graphics_22,x:-21.8,y:-0.3}).wait(4).to({graphics:mask_graphics_26,x:-21.8,y:-0.3}).wait(4).to({graphics:mask_graphics_30,x:-21.8,y:-0.3}).wait(4).to({graphics:mask_graphics_34,x:-21.8,y:-0.3}).wait(4).to({graphics:mask_graphics_38,x:-21.8,y:-0.3}).wait(4).to({graphics:mask_graphics_42,x:-21.8,y:-0.3}).wait(4).to({graphics:mask_graphics_46,x:-21.8,y:-0.3}).wait(4).to({graphics:mask_graphics_50,x:-21.8,y:-0.3}).wait(5));

	// Symbol 3 copy
	this.instance_2 = new lib.butterfly_anim_3("synched",0);
	this.instance_2.setTransform(4.4,-2.3,1,1,0,90,-90);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},10).to({scaleY:0.26,skewX:15.8,skewY:-164.2},2).to({scaleX:1,scaleY:0.21,skewX:10.5,skewY:-173,x:36.8,y:-0.6},10).to({scaleY:0.19,skewX:8.9,skewY:-175.7,x:47.9,y:-1.2},6).to({scaleX:1,scaleY:0.26,skewX:4.4,skewY:-176.7,x:59,y:-2.3},10).to({scaleX:1,scaleY:0.19,skewX:1.4,skewY:-179.2,x:72.4,y:-0.4},6).to({x:91.6},10).wait(1));

	// Symbol 4 copy
	this.instance_3 = new lib.btrflyLeft("synched",0);
	this.instance_3.setTransform(-5.6,-4.8,1,1,0,0,0,16.8,20.4);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},10).to({regX:16.6,scaleX:0.25,rotation:-62.4,x:-5.7},2).to({scaleX:0.21,scaleY:0.98,rotation:0,skewX:-75.7,skewY:-69.1,x:26.6,y:-2.6},10).to({regX:16.7,regY:20.5,scaleX:0.19,scaleY:0.98,skewX:-80.2,skewY:-71.1,x:37.9,y:-3},6).to({scaleX:0.26,scaleY:0.99,skewX:-80.5,skewY:-79,x:49,y:-4.8},10).to({regX:16.6,scaleX:0.19,scaleY:1,skewX:-85.4,skewY:-81.9,x:62.4,y:-2.2},6).to({x:81.6},10).wait(1));

	// Symbol 3
	this.instance_4 = new lib.butterfly_anim_3("synched",0);
	this.instance_4.setTransform(4.4,1.3,1,1,90);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},10).to({scaleY:0.45,rotation:166.7},2).to({scaleX:1,scaleY:0.37,rotation:0,skewX:173.5,skewY:175.7,x:36.7,y:2.4},10).to({scaleX:1,scaleY:0.33,skewX:176.1,skewY:178.5,x:47.9,y:1.5},6).to({scaleY:0.46,skewX:179.6,skewY:180.7,x:59},10).to({scaleY:0.34,skewX:184.5,skewY:182.6,x:72.4,y:2.4},6).to({x:91.6},10).wait(1));

	// Symbol 4
	this.instance_5 = new lib.btrflyRight("synched",0);
	this.instance_5.setTransform(-4.8,4.6,1,1,0,0,0,17.6,-19.7);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},10).to({regY:-19.8,scaleX:0.29,rotation:64.7,y:4.5},2).to({regX:17.9,regY:-19.7,scaleX:0.24,scaleY:0.99,rotation:0,skewX:77.2,skewY:71.2,x:27.5,y:5},10).to({regX:18.2,scaleX:0.22,scaleY:0.99,skewX:81.3,skewY:72.9,x:38.7,y:3.9},6).to({regX:17.9,scaleX:0.29,scaleY:1,skewX:81.6,skewY:80.3,x:49.9,y:4.8},10).to({regX:17.6,regY:-19.8,scaleX:0.22,scaleY:1,skewX:86.2,skewY:83.3,x:63.2},6).to({x:82.4},10).wait(1));

	// Symbol 5
	this.instance_6 = new lib.butterfly_anim_5("synched",0);
	this.instance_6.setTransform(17.5,-4.4,1,1,0,90,-90,-0.1,-5.6);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},10).to({startPosition:5},2).to({regX:-0.2,scaleX:0.82,x:49.9,y:-2.2,startPosition:15},10).to({scaleX:0.74,x:61,y:-2.7,startPosition:0},6).to({regX:-0.1,scaleX:1.02,x:72.1,y:-4.3,startPosition:5},10).to({regX:-0.2,scaleX:0.75,x:85.5,y:-1.9,startPosition:10},6).to({x:104.7,startPosition:18},10).wait(1));

	// Symbol 5
	this.instance_7 = new lib.butterfly_anim_5("synched",0);
	this.instance_7.setTransform(17.5,3.9,1,1,90,0,0,-0.1,-5.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},10).to({startPosition:5},2).to({scaleX:0.82,x:49.9,y:4.4,startPosition:15},10).to({scaleX:0.74,x:61,y:3.3,startPosition:0},6).to({scaleX:1.02,x:72.1,y:4.1,startPosition:5},10).to({scaleX:0.75,x:85.5,y:4.2,startPosition:10},6).to({x:104.7,startPosition:18},10).wait(1));

	// Symbol 2
	this.instance_8 = new lib.butterfly_anim_2("synched",0);
	this.instance_8.setTransform(-9.2,-1.3,1,1,90);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},10).to({startPosition:0},2).to({scaleX:0.82,x:23.2,y:0.2},10).to({scaleX:0.74,x:34.3,y:-0.5},6).to({scaleX:1.02,x:45.4,y:-1.2},10).to({scaleX:0.75,x:58.8,y:0.4},6).to({x:78},10).wait(1));

	// Layer 8
	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.setTransform(33.3,0);

	this.instance_10 = new lib.Tween8("synched",0);
	this.instance_10.setTransform(25.1,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E3DF").s().p("AAIAJQgHAAgDgCQgFgCgEgFIgDgCIAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIADAAQAKABAGgGIACAAIABACIAFAOIABADIgHgBg");
	this.shape_23.setTransform(22.7,7.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6E5E3").s().p("AgKADQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAEgCAJgGQAKgFADADQABACAAADIgEALIgBADIAAACQgJgLgKACg");
	this.shape_24.setTransform(22.3,-7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AALBxIgBgBIgIgSIAAgBIgBgDIgEgQIAAgCIgGgbQgJgyAMgxIAAgCIABgDIAEgNQAEgUAKgTIAAgBIABAAIAAACQgkBKAOBQQADAPAEAPIADAQIACADIAIATIAAAAIgBABIAAAAIAAAAg");
	this.shape_25.setTransform(24,-1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E5E3").s().p("AAJANIAAgBIgHgFQgJgHgLAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAHgEAOgFQASgFADAEIABADIgBAFIgEAFQgBAEgBABIgBACIAAAAIAAAAIgCAFIgDgBg");
	this.shape_26.setTransform(23.6,-11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3E3DF").s().p("AAYAMIgMAAQgLAAgFgDQgIgDgFgFIgGgDIAAgCQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAABABIADAAQAQAAAKgHIAAAAIAEABIADAHIACADIAAAAIAFAJIABADg");
	this.shape_27.setTransform(24.3,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B0403").s().p("AgBAAIAAgBIADgDIAAAJIgDgFg");
	this.shape_28.setTransform(23.2,5.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#525144").s().p("AAAADIAAgEIAAAEg");
	this.shape_29.setTransform(28.6,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E49A9B").s().p("AgCALIACgJIAAgFQgBgCgCgCIAAgBIAAgBIABgJQAEABABAIIAAABQABAIgBADQAAAHgDAFIAAACQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAIgBgIg");
	this.shape_30.setTransform(22.1,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DFA1A0").s().p("AAAgFIAAgEQAAACABADIAAAEIgBAKIAAgPg");
	this.shape_31.setTransform(21.8,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E39598").s().p("AgGARQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIADABQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgDACQADgFAAgHQAAgDAAgIIAAgBQAAgIgHgBIABgBIAAgCIACgKIAAAAIAEAAIACgBIABAAIABABIACAPIABARQACAPgEANQgCAGgDACQgDgIgDgKg");
	this.shape_32.setTransform(22.5,0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DD9496").s().p("AgEAjQAEgCABgGQAEgNgCgPIgBgRIgCgPQABgBAAgDQAAgEACgCQANAwgQAnIgEgJgAgEAQIgDgBIAAgCIADgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgCABIgBAAg");
	this.shape_33.setTransform(22.9,0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DE8F92").s().p("AACALIgBAAIgBABIgFABIAAAAQACgKADgGIAAgCIABgGIABgBIAEAOQgCACABAEQAAADgCACIgBgCg");
	this.shape_34.setTransform(22.6,-4.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0C0001").s().p("AgKAzIAAgLQAAgEAEgHQAEgHAAgFQACAAAAgDIABgFQADgLgDgUIgCghQADAAADAEQACACABAFIADARQABAKgFAHIAAADQACAKgFAPIgIAbIgBAJIAAACIgFgFg");
	this.shape_35.setTransform(24.6,0.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#280202").s().p("AgCgeIgEgQIAAgBIAEgGIAAgCIABgBQADAJABALQADAXABALQACASgEAPQAAAFgEAHQgBAHAAAEIgGADQAPgngLgwg");
	this.shape_36.setTransform(23.6,-0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0C0504").s().p("AAAADIgBgHIgBgCIACgFIABAFQACAEAAAEIAAAKIgDgJg");
	this.shape_37.setTransform(24,-6.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#180001").s().p("AACAMQgBgMgBgVQgBgLgFgIIAAgBIACgEIABgBIAAACIADAJIABAJIAFAfQACAUgDANIgBAFQgBADgDABQAEgPgCgUg");
	this.shape_38.setTransform(24.1,-2.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#010000").s().p("AgCBKIgFgEIgFgHIAAgCIABgJIAKgbQADgPgCgKIAAgEQAFgGgBgKIgDgRQgBgFAAgCQgDgEgFgBIAAgKQAAgFgCgFIgCgEIADgFIAAAAIABAAIgBABIAAABIABABIABAAIABgBIAAgCQAGAJADAJIgBAAQAGAMACANQAGAbgEAgIgCAOQgDATgFAPIgCAHIgCgFg");
	this.shape_39.setTransform(25.3,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAlCYQgFgJgGgNIgBgCIgFgKIAAgBIgCgEIgDgHIgEgBIAAAAQgDgBgCgCIgLgRIgEgEQgMgPgFgHIAAABQgRgZABglIAAgGIAAAAIABgNIAAAAQACgQAGgPQACgHADgGIADgEIACgGIADgEIABAAIAGgKIAAAAIAEgGIAFgGIADgDIAFAGIAAABIADABIACgFIAAgBIAAAAIABgBQABgBABgEIAEgHIABgFQAHgPAKgPIABgBIABABIAAAAIAAABQgQAYgJAaIACADQALAMAHAPQAGANADAQQAEASAAAVIAAAEIgCAVIgCAQIAAAAQgDATgGARIgIAYQgCADgDACIAAAAIACAHIACAEIAAAAIAAABIAFAKQAHAPAGAIIAAABIgBABIgBAAgAABhPIgBAEIgDAFIgBABIgCAEIAAAAIgBABIAAADIgEAFIAAABIgBAAIgCAGIgBACQgDAJgCAJIgCAKIAAACIgBABIAAAJIAAABIAAABIgBADIABAPIABAIQADAKADAIIAFAJIABABIAFAHIAEAGIAEAGIAEAFIAEAEIACgGQAFgQADgSIACgPQAEgggFgaQgDgOgFgLIAAAAQgEgJgGgJIgBACIAAAAIgCAAIAAAAIAAgBIAAgBIAAAAg");
	this.shape_40.setTransform(24.1,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6E5E3").s().p("AAJANIAAgBQgMgMgPAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAHgEAOgFQASgFADAEQACADgCAFIgEAFQgBAEgBABIgDAHIgDgBg");
	this.shape_41.setTransform(23.6,-11.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAlCYQgFgJgGgNIgBgCIgFgKIAAgBIgCgEIgDgHIgEgBIAAAAQgDgBgCgCIgLgRIgEgEQgMgPgFgHIAAABQgRgZABglIAAgGIAAAAIABgNIAAAAQACgQAGgPQACgHADgGIADgEIACgGIADgEIABAAIAGgKIAAAAIAEgGIAFgGQACgDACAAIAEAAIAAAAIADABIABABIABABQAJgZAQgYIABgBIABABIAAAAIAAABQgQAYgJAaIACADQALAMAHAPQAGANADAQQAEASAAAVIAAAEIgCAVIgCAQIAAAAQgDATgGARIgIAYQgCADgDACIAAAAIACAHIACAEIAAAAIAAABIAFAKQAHAPAGAIIAAABIgBABIgBAAgAABhPIgBAEIgDAFIgBABIgCAEIAAAAIgBABIAAADIgEAFIAAABIgBAAIgCAGIgBACQgDAJgCAJIgCAKIAAACIgBABIAAAJIAAABIAAABIgBADIABAPIABAIQADAKADAIIAFAJIABABIAFAHIAEAGIAEAGIAEAFIAEAEIACgGQAFgQADgSIACgPQAEgggFgaQgDgOgFgLIAAAAQgEgJgGgJIgBACIAAAAIgCAAIAAAAIAAgBIAAgBIAAAAg");
	this.shape_42.setTransform(24.1,0.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E3E3DF").s().p("AAXAMIgKAAQgMAAgFgDQgHgDgHgFIgFgDIABgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIAFAAQAPAAAKgHIABAAIADABIADAHIACADIAAAAIAFAJIABADg");
	this.shape_43.setTransform(20.3,12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DE8F92").s().p("AACALIgBAAIgBABIgFABIAAAAQACgKADgGIAAgCIACgGIAAgBIAEAOQgCACAAAEQABADgCACIgBgCg");
	this.shape_44.setTransform(18.6,-4.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E3E3DF").s().p("AAXAMIgLAAQgLAAgFgDQgIgDgFgFIgGgDIAAgCQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIAFAAQAPAAAKgHIABAAIADABIADAHIACADIAAAAIAFAJIABADg");
	this.shape_45.setTransform(21.3,12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DE8F92").s().p("AACALIgBAAIgBABIgFABIAAAAQACgKADgGIAAgCIABgGIABgBIAEAOQgCACAAAEQAAADgBACIgBgCg");
	this.shape_46.setTransform(19.6,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},4).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:25.3}},{t:this.shape_38,p:{x:24.1}},{t:this.shape_37,p:{x:24}},{t:this.shape_36,p:{x:23.6}},{t:this.shape_35,p:{x:24.6}},{t:this.shape_34},{t:this.shape_33,p:{x:22.9}},{t:this.shape_32,p:{x:22.5}},{t:this.shape_31,p:{x:21.8}},{t:this.shape_30,p:{x:22.1}},{t:this.shape_29,p:{x:28.6}},{t:this.shape_28,p:{x:23.2}},{t:this.shape_27},{t:this.shape_26}]},4).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},4).to({state:[{t:this.shape_42,p:{x:24.1}},{t:this.shape_41,p:{x:23.6}},{t:this.shape_39,p:{x:25.3}},{t:this.shape_38,p:{x:24.1}},{t:this.shape_37,p:{x:24}},{t:this.shape_36,p:{x:23.6}},{t:this.shape_35,p:{x:24.6}},{t:this.shape_34},{t:this.shape_33,p:{x:22.9}},{t:this.shape_32,p:{x:22.5}},{t:this.shape_31,p:{x:21.8}},{t:this.shape_30,p:{x:22.1}},{t:this.shape_29,p:{x:28.6}},{t:this.shape_28,p:{x:23.2}},{t:this.shape_27}]},5).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},4).to({state:[{t:this.shape_42,p:{x:20.1}},{t:this.shape_41,p:{x:19.6}},{t:this.shape_37,p:{x:20}},{t:this.shape_38,p:{x:20.1}},{t:this.shape_36,p:{x:19.6}},{t:this.shape_39,p:{x:21.3}},{t:this.shape_44},{t:this.shape_33,p:{x:18.9}},{t:this.shape_31,p:{x:17.8}},{t:this.shape_30,p:{x:18.1}},{t:this.shape_32,p:{x:18.5}},{t:this.shape_35,p:{x:20.6}},{t:this.shape_29,p:{x:24.6}},{t:this.shape_43},{t:this.shape_28,p:{x:19.2}}]},4).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},4).to({state:[{t:this.shape_42,p:{x:24.1}},{t:this.shape_41,p:{x:23.6}},{t:this.shape_39,p:{x:25.3}},{t:this.shape_38,p:{x:24.1}},{t:this.shape_37,p:{x:24}},{t:this.shape_36,p:{x:23.6}},{t:this.shape_34},{t:this.shape_33,p:{x:22.9}},{t:this.shape_35,p:{x:24.6}},{t:this.shape_32,p:{x:22.5}},{t:this.shape_31,p:{x:21.8}},{t:this.shape_30,p:{x:22.1}},{t:this.shape_29,p:{x:28.6}},{t:this.shape_28,p:{x:23.2}},{t:this.shape_27}]},4).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},4).to({state:[{t:this.shape_41,p:{x:20.6}},{t:this.shape_42,p:{x:21.1}},{t:this.shape_46},{t:this.shape_36,p:{x:20.6}},{t:this.shape_32,p:{x:19.5}},{t:this.shape_30,p:{x:19.1}},{t:this.shape_31,p:{x:18.8}},{t:this.shape_33,p:{x:19.9}},{t:this.shape_39,p:{x:22.3}},{t:this.shape_37,p:{x:21}},{t:this.shape_38,p:{x:21.1}},{t:this.shape_35,p:{x:21.6}},{t:this.shape_29,p:{x:25.6}},{t:this.shape_28,p:{x:20.2}},{t:this.shape_45}]},4).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,x:25.1,y:-0.1},5).wait(50));

	// batEye
	this.instance_11 = new lib.batEye_1("synched",0);
	this.instance_11.setTransform(48.9,-10.1,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:40.9,startPosition:5},5).wait(7).to({x:40.7,y:-10.3,startPosition:12},0).to({x:42.1,y:-10.1,startPosition:17},10).to({x:38.1,startPosition:12},6).to({x:37.7,y:-10.5,startPosition:17},5).to({x:43.3,y:-10.1},5).to({x:38.5,startPosition:12},6).wait(11));

	// batEye
	this.instance_12 = new lib.batEye_1("synched",0);
	this.instance_12.setTransform(48.9,10.9,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:40.9,startPosition:5},5).wait(7).to({x:40.7,y:10.7,startPosition:12},0).to({x:42.1,y:10.9,startPosition:17},10).to({x:38.1,startPosition:12},6).to({x:37.7,y:10.5,startPosition:17},5).to({x:43.3,y:10.9},5).to({x:38.5,startPosition:12},6).wait(11));

	// batFace2
	this.instance_13 = new lib.batFace2_1("synched",0);
	this.instance_13.setTransform(53,-0.5,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:45},5).wait(7).to({x:44.8,y:-0.7},0).to({x:46.2,y:-0.5},10).to({x:42.2},6).to({x:41.8,y:-0.9},5).to({x:47.4,y:-0.5},5).to({x:42.6},6).wait(11));

	// Symbol 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#68405F").s().p("AiDCeQg4hCAAhcQAAhbA4hBQA3hCBMAAQBNAAA3BCQA3BBAABbQAABcg3BCQg3BBhNAAQhMAAg3hBg");
	this.shape_47.setTransform(44.9,0.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#68405F").s().p("AiHCgQg0hDAAhdQgBhcA0hCQA1hDBSACQBPACA3BBQA3BCAABaQAABdg3BBQg3BBhPACIgEAAQhPAAgzhBg");
	this.shape_48.setTransform(43.3,0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#68405F").s().p("AiLCiQgwhEgBheQgChdAyhEQAyhEBVAEQBUAEA3BBQA3BCAABaQAABdg3BBQg3BBhTADIgHAAQhRAAgvhAg");
	this.shape_49.setTransform(41.7,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#68405F").s().p("AiOCkQgthFgChfQgCheAvhFQAvhGBaAGQBXAHA3BBQA3BCAABaQAABdg3BBQg3BBhXAEIgKAAQhSAAgrhAg");
	this.shape_50.setTransform(40.1,0.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#68405F").s().p("AiSCmQgphGgDhgQgDhfAshHQAthHBdAJQBcAIA3BCQA3BBAABaQAABdg3BCQg3BBhbAFIgOAAQhTAAgnhAg");
	this.shape_51.setTransform(38.6,0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#68405F").s().p("AiVCoQgmhIgEhgQgEhgAqhIQAqhJBiALQBfAKA3BCQA3BBAABbQAABcg3BCQg3BBhfAHIgRAAQhUAAgjhAg");
	this.shape_52.setTransform(37,0.1);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#68405F").s().p("AiRCmQgqhHgDhfQgDhfAthHQAshHBeAIQBbAJA3BBQA3BCAABaQAABdg3BBQg3BBhbAGIgOAAQhTAAgmhAg");
	this.shape_53.setTransform(36.8,-0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#68405F").s().p("AiOCkQgthFgChfQgDheAwhFQAvhGBZAGQBYAGA3BCQA3BBAABbQAABcg3BCQg3BBhXAEIgKAAQhSAAgrhAg");
	this.shape_54.setTransform(36.6,-0.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#68405F").s().p("AiKCiQgxhEgBheQgChdAyhEQAyhEBWAEQBTAEA3BCQA3BBAABbQAABcg3BCQg3BBhTACIgHAAQhRAAguhAg");
	this.shape_55.setTransform(36.4,-0.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#68405F").s().p("AiHCgQg0hDAAhdQgBhcA0hDQA1hDBSADQBQACA3BBQA3BCAABaQAABdg3BBQg3BBhQACIgDAAQhQAAgzhBg");
	this.shape_56.setTransform(36.2,-0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#68405F").s().p("AiDCeQg3hCAAhcQAAhbA3hBQA3hCBMAAQBNAAA3BCQA3BBAABbQAABcg3BCQg3BBhNAAQhMAAg3hBg");
	this.shape_57.setTransform(36.1,-0.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#68405F").s().p("AiJChQgxhEgChdQgBhdAzhDQAyhEBVADQBSAEA3BBQA3BCAABaQAABdg3BBQg3BBhSADIgFAAQhRAAgwhBg");
	this.shape_58.setTransform(36.3,-0.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#68405F").s().p("AiPClQgshGgChfQgDheAuhGQAvhGBbAHQBZAHA3BBQA3BCAABaQAABdg3BBQg3BBhZAFIgNAAQhRAAgphAg");
	this.shape_59.setTransform(36.7,-0.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#68405F").s().p("AiSCpQgphIgEhhQgEhfAshKQAshLBgAMQBeAMA3BCQA2BCAABbQAABcg2BCQg3BBhdAIIgRAAQhSAAglhBg");
	this.shape_60.setTransform(37,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#68405F").s().p("AiPCrQgshJgEhhQgEhfAuhMQAuhNBfAOQBcANA2BDQA2BCAABbQAABcg2BCQg2BBhaAIIgTABQhPAAgnhBg");
	this.shape_61.setTransform(37,-0.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#68405F").s().p("AiMCtQgvhKgEhhQgEhfAwhOQAwhOBdAPQBbAPA2BDQA1BCAABbQAABcg2BCQg1BBhYAJIgTABQhMAAgqhBg");
	this.shape_62.setTransform(37,-0.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#68405F").s().p("AiKCvQgxhLgEhhQgEhfAyhQQAyhQBbAQQBaARA1BDQA1BDAABbQAABcg1BCQg2BChVAJIgTABQhLAAgshBg");
	this.shape_63.setTransform(37,-0.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#68405F").s().p("AiHCwQg0hLgEhhQgEhfA0hSQA0hTBaATQBYASA1BDQA0BEAABbQAABcg1BCQg1BChVAKIgSABQhHAAgvhCg");
	this.shape_64.setTransform(37,-0.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#68405F").s().p("AiKCuQgxhKgEhhQgEhfAyhQQAxhQBcAQQBaAQA1BEQA1BDAABaQAABdg1BCQg2BBhWAJIgTABQhLAAgrhBg");
	this.shape_65.setTransform(36.6,-0.2);
	this.shape_65._off = true;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#68405F").s().p("AiOCsQgthJgEhhQgEhfAvhNQAvhOBeAOQBcAPA2BCQA1BDAABaQAABdg2BCQg2BBhZAIIgTABQhNAAgphBg");
	this.shape_66.setTransform(36.3,-0.1);
	this.shape_66._off = true;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#68405F").s().p("AiRCqQgqhJgEhhQgEhfAthLQAshLBgANQBdAMA3BCQA2BCAABbQAABcg2BCQg3BBhcAIIgSABQhRAAglhBg");
	this.shape_67.setTransform(35.9,0);
	this.shape_67._off = true;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#68405F").s().p("AiHCwQg0hLgEhhQgEhfA0hSQA0hSBaASQBYASA1BEQA0BDAABbQAABcg1BCQg1BChVAKIgSABQhIAAguhCg");
	this.shape_68.setTransform(33,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47}]}).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_68,p:{x:33}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_68,p:{x:37}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_68,p:{x:33}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_52}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(5).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).wait(4).to({_off:true},1).wait(8).to({_off:false,x:35.6},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(23).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:33.6},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:36.6},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:33.6},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(24).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:34.3},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:36.3},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:34.3},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(25).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:34.9},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:35.9},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:34.9},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5));

	// batFace2 copy
	this.instance_14 = new lib.batFace2copy("synched",0);
	this.instance_14.setTransform(53,-0.5,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:45,y:-0.9},5).wait(7).to({x:44.8,y:-0.7},0).to({x:46.2,y:-0.5},10).to({x:42.2},6).to({x:41.8,y:-0.9},5).to({x:47.4,y:-0.5},5).to({x:42.6},6).wait(11));

	// Symbol 2
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#51364C").s().p("Ai6DeQhNhdgBiBQABiBBNhcQBOhcBsAAQBtAABPBcQBMBcAACBQAACBhMBdQhPBchtAAQhsAAhOhcg");
	this.shape_69.setTransform(45.3,0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#51364C").s().p("Ai6DeQhNhdAAiBQAAiBBNhcQBOhcBsAAQBtAABOBcQBOBcAACBQAACBhOBdQhOBchtAAQhsAAhOhcg");
	this.shape_70.setTransform(43.8,0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#51364C").s().p("Ai6DeQhNhdAAiBQAAiBBNhcQBOhcBsAAQBtAABPBcQBNBcgBCBQABCBhNBdQhPBchtAAQhsAAhOhcg");
	this.shape_71.setTransform(42.3,0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#51364C").s().p("Ai6DeQhOhdABiBQgBiBBOhcQBOhcBsAAQBtAABOBcQBOBcAACBQAACBhOBdQhOBchtAAQhsAAhOhcg");
	this.shape_72.setTransform(40.8,0.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#51364C").s().p("Ai6DeQhOhdAAiBQAAiBBOhcQBOhcBsAAQBuAABNBcQBNBcAACBQAACBhNBdQhNBchuAAQhsAAhOhcg");
	this.shape_73.setTransform(37.9,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#51364C").s().p("Ai6DeQhNhdgBiBQABiBBNhcQBOhcBsAAQBuAABOBcQBMBcAACBQAACBhMBdQhOBchuAAQhsAAhOhcg");
	this.shape_74.setTransform(37.1,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#51364C").s().p("Ai6DiQhOhfAAiDQAAiDBOheQBOheBsAAQBuAABNBeQBOBeAACDQAACDhOBfQhNBehuAAQhsAAhOheg");
	this.shape_75.setTransform(36.4,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#51364C").s().p("Ai6DlQhNhfAAiGQAAiGBNhfQBOhfBsAAQBtAABPBfQBNBfgBCGQABCGhNBfQhPBghtAAQhsAAhOhgg");
	this.shape_76.setTransform(36.9,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#51364C").s().p("Ai6DpQhNhhAAiIQAAiIBNhhQBOhgBsAAQBtAABOBgQBOBhAACIQAACIhOBhQhOBhhtAAQhsAAhOhhg");
	this.shape_77.setTransform(37.5,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#51364C").s().p("Ai6DpQhNhhgBiIQABiIBNhhQBOhgBsAAQBuAABOBgQBMBhAACIQAACIhMBhQhOBhhuAAQhsAAhOhhg");
	this.shape_78.setTransform(37.1,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#51364C").s().p("Ai6DpQhOhhABiIQgBiIBOhhQBOhgBsAAQBtAABOBgQBOBhAACIQAACIhOBhQhOBhhtAAQhsAAhOhhg");
	this.shape_79.setTransform(36.7,0);
	this.shape_79._off = true;

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#51364C").s().p("Ai6DpQhNhhgBiIQABiIBNhhQBOhgBsAAQBtAABPBgQBMBhAACIQAACIhMBhQhPBhhtAAQhsAAhOhhg");
	this.shape_80.setTransform(36.3,0);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#51364C").s().p("Ai6DpQhOhhAAiIQAAiIBOhhQBOhgBsAAQBuAABNBgQBOBhAACIQAACIhOBhQhNBhhuAAQhsAAhOhhg");
	this.shape_81.setTransform(36,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#51364C").s().p("Ai6DpQhOhhAAiIQAAiIBOhhQBOhgBsAAQBtAABPBgQBMBhAACIQAACIhMBhQhPBhhtAAQhsAAhOhhg");
	this.shape_82.setTransform(36.4,0);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#51364C").s().p("Ai6DpQhNhhAAiIQAAiIBNhhQBOhgBsAAQBtAABPBgQBNBhgBCIQABCIhNBhQhPBhhtAAQhsAAhOhhg");
	this.shape_83.setTransform(36.5,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#51364C").s().p("Ai6DpQhOhhABiIQgBiIBOhhQBOhgBsAAQBuAABNBgQBOBhAACIQAACIhOBhQhNBhhuAAQhsAAhOhhg");
	this.shape_84.setTransform(34.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69,p:{x:45.3,y:0.6}}]}).to({state:[{t:this.shape_70,p:{x:43.8,y:0.5}}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72,p:{x:40.8,y:0.2}}]},1).to({state:[{t:this.shape_72,p:{x:39.4,y:0.1}}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_70,p:{x:37.5,y:0}}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_72,p:{x:36.7,y:0}}]},1).to({state:[{t:this.shape_69,p:{x:36.3,y:0}}]},1).to({state:[{t:this.shape_72,p:{x:35.9,y:0}}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77,p:{x:37.5,y:0}}]},1).to({state:[{t:this.shape_78,p:{x:37.1}}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_81,p:{x:36,y:0}}]},1).to({state:[{t:this.shape_77,p:{x:36.1,y:0}}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83,p:{x:36.5,y:0}}]},1).to({state:[{t:this.shape_81,p:{x:36,y:0}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_78,p:{x:33.6}}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83,p:{x:32.9,y:0}}]},1).to({state:[{t:this.shape_77,p:{x:33.9,y:0}}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81,p:{x:36.9,y:-1}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_77,p:{x:34.3,y:-0.1}}]},1).to({state:[{t:this.shape_83,p:{x:33.8,y:-0.1}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_83,p:{x:34.7,y:-0.2}}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:35.9},0).to({_off:true},1).wait(2).to({_off:false,x:36.2},0).to({_off:true},1).wait(4).to({_off:false,x:35},0).to({_off:true},1).wait(8).to({_off:false,x:34.9},0).to({_off:true},1).wait(1).to({_off:false,x:35.9,y:-0.5},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:34.9,y:0},0).to({_off:true},1).wait(4).to({_off:false,x:33.2,y:-0.2},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(16).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,x:34.5},0).to({_off:true},1).wait(1).to({_off:false,x:32.7},0).wait(1).to({x:31.8},0).wait(1).to({x:30.9},0).to({_off:true},1).wait(4).to({_off:false,x:35.4,y:-0.3},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:32.7,y:-0.2},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(21).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:35.5},0).to({_off:true},1).wait(6).to({_off:false,x:31.9},0).to({_off:true},1).wait(5).to({_off:false,x:36.4,y:-0.8},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:33.2,y:-0.2},0).to({_off:true},1).wait(2).to({_off:false,x:33.7},0).to({_off:true},1).wait(6));

	// batBwing1
	this.instance_15 = new lib.batBwing1("synched",0);
	this.instance_15.setTransform(37.5,25,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:29.5,y:24.6},5).wait(7).to({x:29.3,y:24.8},0).to({scaleX:0.96,x:30.7,y:24.1},10).to({scaleX:1,x:26.7,y:25},6).to({scaleX:0.98,x:26.3,y:24.2},5).to({scaleX:0.96,x:31.9,y:24.1},5).to({scaleX:1,x:27.1,y:25},6).wait(11));

	// batBwing1
	this.instance_16 = new lib.batBwing1("synched",0);
	this.instance_16.setTransform(37.5,-25,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:29.5,y:-25.4},5).wait(7).to({x:29.3,y:-25.2},0).to({scaleX:0.96,x:30.7,y:-24},10).to({scaleX:1,x:26.7,y:-25},6).to({scaleX:0.98,x:26.3,y:-24.9},5).to({scaleX:0.96,x:31.9,y:-24},5).to({scaleX:1,x:27.1,y:-25},6).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.7,-179,134.2,358);
p.frameBounds = [rect, new cjs.Rectangle(-45.7,-179.1,132.6,358), new cjs.Rectangle(-45.7,-179.1,131,358), new cjs.Rectangle(-45.7,-179.2,129.4,358), new cjs.Rectangle(-45.7,-179.3,127.8,358), rect=new cjs.Rectangle(-45.7,-179.4,126.2,358), rect, rect, rect, rect, rect, new cjs.Rectangle(-42.4,-179.4,122.9,358), new cjs.Rectangle(-57.6,-179.2,138,358), new cjs.Rectangle(-54.6,-178.5,135.1,356.7), new cjs.Rectangle(-51.6,-177.7,132.2,355.2), new cjs.Rectangle(-48.6,-177,129.3,353.9), new cjs.Rectangle(-45.6,-176.3,126.5,352.5), new cjs.Rectangle(-42.5,-175.6,123.5,351), new cjs.Rectangle(-39.4,-174.9,120.6,349.7), new cjs.Rectangle(-36.4,-174.2,117.7,348.3), new cjs.Rectangle(-33.3,-173.5,114.7,346.9), new cjs.Rectangle(-30.2,-172.7,111.8,345.5), new cjs.Rectangle(-27,-172,108.7,344.1), new cjs.Rectangle(-25.9,-173.2,107,346.4), new cjs.Rectangle(-26.6,-174.3,107,348.7), new cjs.Rectangle(-27.3,-175.5,107,351.2), new cjs.Rectangle(-27.9,-176.7,107,353.4), new cjs.Rectangle(-28.6,-177.8,107,355.7), new cjs.Rectangle(-29.3,-179,107,358), new cjs.Rectangle(-29.4,-178.4,107,356.7), new cjs.Rectangle(-29.4,-177.8,107,355.3), new cjs.Rectangle(-29.5,-177.1,107,353.9), new cjs.Rectangle(-29.6,-176.5,107,352.5), new cjs.Rectangle(-29.7,-175.9,107,351.1), new cjs.Rectangle(-28.6,-175.1,107,349.7), new cjs.Rectangle(-27.4,-174.4,107,348.3), new cjs.Rectangle(-26.3,-173.6,107,346.9), new cjs.Rectangle(-25.2,-172.8,107,345.5), new cjs.Rectangle(-24.1,-172,107,344.1), new cjs.Rectangle(-24.9,-173.2,107,346.4), new cjs.Rectangle(-25.7,-174.3,107,348.7), new cjs.Rectangle(-26.5,-175.5,107,351.2), new cjs.Rectangle(-27.3,-176.7,107,353.4), new cjs.Rectangle(-28.1,-177.8,107,355.7), rect=new cjs.Rectangle(-28.9,-179,107,358), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:



(lib.echolocation_in_bats_anim = function() {
	this.initialize();

	// rays_bat_1_withReverse
	this.instance = new lib.rays_bat_1_withReverse();

	// Butterfly_eatingNew
	this.instance_1 = new lib.Butterfly_eatingNew();
	this.instance_1.setTransform(0,0,1,1,-90);

	// Butterfly_run
	this.instance_2 = new lib.butterfly_anim_run();

	// Butterfly_eating
	this.instance_3 = new lib.butterfly_anim_eating();
	this.instance_3.setTransform(0,0,1,1,-90);

	// button glow
	this.instance_4 = new lib.button_glow();
	this.instance_4.setTransform(0.5,0.5);

	// echoOfBat
	this.instance_5 = new lib.rays_butterfly_1();

	// jamSonar
	this.instance_6 = new lib.jamSonar();

	// screamOfBat
	this.instance_7 = new lib.rays_bat_1();

	// butterfly_anim_6
	this.instance_8 = new lib.butterfly_anim_6();

	// butterfly_anim_1
	this.instance_9 = new lib.butterfly_anim_1();
	this.instance_9.setTransform(0,0,1,1,-90);

	// mainAnimation
	this.instance_10 = new lib.mainEcholocationInBatsAnim();

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(164.1,94.9,901.9,405);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;