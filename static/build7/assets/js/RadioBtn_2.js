(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/images/Carnivore_Cannie_Gglow.png", id:"Carnivore_Cannie_Gglow"},
		{src:"assets/images/Carnivore_Cannie_Rglow.png", id:"Carnivore_Cannie_Rglow"},
		{src:"assets/images/Carnivore_Car_Gglow.png", id:"Carnivore_Car_Gglow"},
		{src:"assets/images/Carnivore_Car_Rglow.png", id:"Carnivore_Car_Rglow"},
		{src:"assets/images/Carnivore_Incisor_Gglow.png", id:"Carnivore_Incisor_Gglow"},
		{src:"assets/images/Carnivore_Incisor_Rglow.png", id:"Carnivore_Incisor_Rglow"},
		{src:"assets/images/Carnivore_molar_Gglow.png", id:"Carnivore_molar_Gglow"},
		{src:"assets/images/Carnivore_molar_Rglow.png", id:"Carnivore_molar_Rglow"},
		{src:"assets/images/Herbivore_Cannie_Gglow.png", id:"Herbivore_Cannie_Gglow"},
		{src:"assets/images/Herbivore_Cannie_Rglow.png", id:"Herbivore_Cannie_Rglow"},
		{src:"assets/images/Herbivore_Incisor_Gglow.png", id:"Herbivore_Incisor_Gglow"},
		{src:"assets/images/Herbivore_Incisor_Rglow.png", id:"Herbivore_Incisor_Rglow"},
		{src:"assets/images/Herbivore_Molar_Gglow.png", id:"Herbivore_Molar_Gglow"},
		{src:"assets/images/Herbivore_Molar_Rglow.png", id:"Herbivore_Molar_Rglow"},
		{src:"assets/images/Insectivore_canine_Gglow.png", id:"Insectivore_canine_Gglow"},
		{src:"assets/images/Insectivore_canine_Rglow.png", id:"Insectivore_canine_Rglow"},
		{src:"assets/images/Insectivore_incisors_Gglow.png", id:"Insectivore_incisors_Gglow"},
		{src:"assets/images/Insectivore_incisors_Rglow.png", id:"Insectivore_incisors_Rglow"},
		{src:"assets/images/Insectivore_molar_Gglow.png", id:"Insectivore_molar_Gglow"},
		{src:"assets/images/Insectivore_molar_Rglow.png", id:"Insectivore_molar_Rglow"},
		{src:"assets/images/omnivore_Cannie_Gglow.png", id:"omnivore_Cannie_Gglow"},
		{src:"assets/images/omnivore_Cannie_Rglow.png", id:"omnivore_Cannie_Rglow"},
		{src:"assets/images/omnivore_Incisor_Gglow.png", id:"omnivore_Incisor_Gglow"},
		{src:"assets/images/omnivore_Incisor_Rglow.png", id:"omnivore_Incisor_Rglow"},
		{src:"assets/images/omnivore_Molar_Gglow.png", id:"omnivore_Molar_Gglow"},
		{src:"assets/images/omnivore_Molar_Rglow.png", id:"omnivore_Molar_Rglow"},
		{src:"assets/images/Rodent_molar_Gglow.png", id:"Rodent_molar_Gglow"},
		{src:"assets/images/Rodent_molar_Rglow.png", id:"Rodent_molar_Rglow"},
		{src:"assets/images/Rodent_Tooth_Gglow.png", id:"Rodent_Tooth_Gglow"},
		{src:"assets/images/Rodent_Tooth_Rglow.png", id:"Rodent_Tooth_Rglow"}
	]
};



// symbols:



(lib.Carnivore_Cannie_Gglow = function() {
	this.initialize(img.Carnivore_Cannie_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,90);


(lib.Carnivore_Cannie_Rglow = function() {
	this.initialize(img.Carnivore_Cannie_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,90);


(lib.Carnivore_Car_Gglow = function() {
	this.initialize(img.Carnivore_Car_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,70);


(lib.Carnivore_Car_Rglow = function() {
	this.initialize(img.Carnivore_Car_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,70);


(lib.Carnivore_Incisor_Gglow = function() {
	this.initialize(img.Carnivore_Incisor_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,75);


(lib.Carnivore_Incisor_Rglow = function() {
	this.initialize(img.Carnivore_Incisor_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,75);


(lib.Carnivore_molar_Gglow = function() {
	this.initialize(img.Carnivore_molar_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,78);


(lib.Carnivore_molar_Rglow = function() {
	this.initialize(img.Carnivore_molar_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,78);


(lib.Herbivore_Cannie_Gglow = function() {
	this.initialize(img.Herbivore_Cannie_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,54);


(lib.Herbivore_Cannie_Rglow = function() {
	this.initialize(img.Herbivore_Cannie_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,54);


(lib.Herbivore_Incisor_Gglow = function() {
	this.initialize(img.Herbivore_Incisor_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,62);


(lib.Herbivore_Incisor_Rglow = function() {
	this.initialize(img.Herbivore_Incisor_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,62);


(lib.Herbivore_Molar_Gglow = function() {
	this.initialize(img.Herbivore_Molar_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,62);


(lib.Herbivore_Molar_Rglow = function() {
	this.initialize(img.Herbivore_Molar_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,62);


(lib.Insectivore_canine_Gglow = function() {
	this.initialize(img.Insectivore_canine_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,95);


(lib.Insectivore_canine_Rglow = function() {
	this.initialize(img.Insectivore_canine_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,95);


(lib.Insectivore_incisors_Gglow = function() {
	this.initialize(img.Insectivore_incisors_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,108);


(lib.Insectivore_incisors_Rglow = function() {
	this.initialize(img.Insectivore_incisors_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,108);


(lib.Insectivore_molar_Gglow = function() {
	this.initialize(img.Insectivore_molar_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,103);


(lib.Insectivore_molar_Rglow = function() {
	this.initialize(img.Insectivore_molar_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,103);


(lib.omnivore_Cannie_Gglow = function() {
	this.initialize(img.omnivore_Cannie_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,67);


(lib.omnivore_Cannie_Rglow = function() {
	this.initialize(img.omnivore_Cannie_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,67);


(lib.omnivore_Incisor_Gglow = function() {
	this.initialize(img.omnivore_Incisor_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,45);


(lib.omnivore_Incisor_Rglow = function() {
	this.initialize(img.omnivore_Incisor_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,45);


(lib.omnivore_Molar_Gglow = function() {
	this.initialize(img.omnivore_Molar_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,49);


(lib.omnivore_Molar_Rglow = function() {
	this.initialize(img.omnivore_Molar_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,49);


(lib.Rodent_molar_Gglow = function() {
	this.initialize(img.Rodent_molar_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,59);


(lib.Rodent_molar_Rglow = function() {
	this.initialize(img.Rodent_molar_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,59);


(lib.Rodent_Tooth_Gglow = function() {
	this.initialize(img.Rodent_Tooth_Gglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,133);


(lib.Rodent_Tooth_Rglow = function() {
	this.initialize(img.Rodent_Tooth_Rglow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,133);


(lib.rodentMolarRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Rodent_molar_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,81,59);
p.frameBounds = [rect];


(lib.rodentMolarGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Rodent_molar_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,81,59);
p.frameBounds = [rect];


(lib.rodentFrontToothRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Rodent_Tooth_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85,133);
p.frameBounds = [rect];


(lib.rodentFrontToothGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Rodent_Tooth_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85,133);
p.frameBounds = [rect];


(lib.omniMolarRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.omnivore_Molar_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,141,49);
p.frameBounds = [rect];


(lib.omniMolarGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.omnivore_Molar_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,141,49);
p.frameBounds = [rect];


(lib.omniIncisorRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.omnivore_Incisor_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,65,45);
p.frameBounds = [rect];


(lib.omniIncisorGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.omnivore_Incisor_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,65,45);
p.frameBounds = [rect];


(lib.omniCanineRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.omnivore_Cannie_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,67);
p.frameBounds = [rect];


(lib.omniCanineGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.omnivore_Cannie_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,67);
p.frameBounds = [rect];


(lib.insectMolarRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Insectivore_molar_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,195,103);
p.frameBounds = [rect];


(lib.insectMolarGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Insectivore_molar_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,195,103);
p.frameBounds = [rect];


(lib.insectIncisorRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Insectivore_incisors_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,49,108);
p.frameBounds = [rect];


(lib.insectIncisorGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Insectivore_incisors_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,49,108);
p.frameBounds = [rect];


(lib.insectCanineRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Insectivore_canine_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,63,95);
p.frameBounds = [rect];


(lib.insectCanineGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Insectivore_canine_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,63,95);
p.frameBounds = [rect];


(lib.herbMolarRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Herbivore_Molar_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,147,62);
p.frameBounds = [rect];


(lib.herbMolarGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Herbivore_Molar_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,147,62);
p.frameBounds = [rect];


(lib.herbIncisiorRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Herbivore_Incisor_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,55,62);
p.frameBounds = [rect];


(lib.herbIncisiorGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Herbivore_Incisor_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,55,62);
p.frameBounds = [rect];


(lib.herbCanineRglow = function() {
	this.initialize();

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgEjGIAUgPQAKgHAOgGQAEAAAMgDIAaAAIAAARQAAAAgBAAQgDABgCABQgIAIgMARQgDAGgDAGIgGAKQgBACgBACIgDAHQgEAIgCAFQAAAFgCADQgCAJgEACQgFADgBABQgDADgBADQgBAAAAABQgRgFgIgIIgGgJQgDgEgCgGQgIgQAAgMQgDgBgDgBIAAgRQASgCAOgIgAhKDUQgHgPAAgTQAHgBAAgHQAHAAAMAEQAGABAZADIAbAEQAJABAIAAIABAAQAFAAADAAIABAAQAEgDADgCIAAAaQgCABgBAAQgKAEgHAJQgFACgEAEIgGAAQgCADgEAAQgYADgUAAIgJAAQgFAAgCgBIgBAAQgBgBgBAAIACAAQgCgBAAgDQgBAAAAgCQgJgKADAAg");
	this.shape.setTransform(10.9,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4DjIgGgBIgBABIgBgCIABAAIgBgBIAAgBIAAgBIgCgCQgIgIACAAQgGgNAAgQQAHgCAAgGQAHABALADIAdAEIAZACIAZACIAEgDIAAAAIAAAAIACgBIAAAWQgLAEgHAIQgFABgDAEIgGgBQAAADgGAAQgXADgSAAgAhFDFQAGAFACAIQAJABAEAEIgCACIgBAAIAagCIAAgBIABAAQAZgHAMgKQgwgEgSAAIgEgBQgJAAgDAFgAAFhzQgJgEgGgFIgGgJQgDgEgCgGQgHgOAAgNIgGgBIAAgQQASgCANgIIATgNQAJgHAOgFIAPgEIAZAAIAAAOIgFACQgIAJgLARIgHALIgFAKIgCAEIgEAHIgFAOIgCAHQgCAGgDADIgHAEQgDADgBADIgJgDgAAijIIgXAOQgOAJgRACIAAABQADASAIAPQAEAHAEACQACACAGgBQAFgCACgEQADgDABgIQACgHACgDIAIgNIAFgLIAJgLIAGgJIABgCIgRAEgAAeiDIAAAAgAAgiKIAFgOIgEAMIgDAJIACgHgAA3i4QALgRAIgJIAFgCIAAACIgGACQgHAIgLAQIgHALIAHgLgABPjUg");
	this.shape_1.setTransform(11,26.1);

	// Layer 1
	this.instance = new lib.Herbivore_Cannie_Rglow();

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,24,54);
p.frameBounds = [rect];


(lib.herbCanineGglow = function() {
	this.initialize();

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AgEjGIAUgPQAKgHAOgGQAEAAAMgDIAaAAIAAARQAAAAgBAAQgDABgCABQgIAIgMARQgDAGgDAGIgGAKQgBACgBACIgDAHQgEAIgCAFQAAAFgCADQgCAJgEACQgFADgBABQgDADgBADQgBAAAAABQgRgFgIgIIgGgJQgDgEgCgGQgIgQAAgMQgDgBgDgBIAAgRQASgCAOgIgAhKDUQgHgPAAgTQAHgBAAgHQAHAAAMAEQAGABAZADIAbAEQAJABAIAAIABAAQAFAAADAAIABAAQAEgDADgCIAAAaQgCABgBAAQgKAEgHAJQgFACgEAEIgGAAQgCADgEAAQgYADgUAAIgJAAQgFAAgCgBIgBAAQgBgBgBAAIACAAQgCgBAAgDQgBAAAAgCQgJgKADAAg");
	this.shape.setTransform(10.9,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4DjIgGgBIgBABIgBgCIABAAIgBgBIAAgBIAAgBIgCgCQgIgIACAAQgGgNAAgQQAHgCAAgGQAHABALADIAdAEIAZACIAZACIAEgDIAAAAIAAAAIACgBIAAAWQgLAEgHAIQgFABgDAEIgGgBQAAADgGAAQgXADgSAAgAhFDFQAGAFACAIQAJABAEAEIgCACIgBAAIAagCIAAgBIABAAQAZgHAMgKQgwgEgSAAIgEgBQgJAAgDAFgAAFhzQgJgEgGgFIgGgJQgDgEgCgGQgHgOAAgNIgGgBIAAgQQASgCANgIIATgNQAJgHAOgFIAPgEIAZAAIAAAOIgFACQgIAJgLARIgHALIgFAKIgCAEIgEAHIgFAOIgCAHQgCAGgDADIgHAEQgDADgBADIgJgDgAAijIIgXAOQgOAJgRACIAAABQADASAIAPQAEAHAEACQACACAGgBQAFgCACgEQADgDABgIQACgHACgDIAIgNIAFgLIAJgLIAGgJIABgCIgRAEgAAeiDIAAAAgAAgiKIAFgOIgEAMIgDAJIACgHgAA3i4QALgRAIgJIAFgCIAAACIgGACQgHAIgLAQIgHALIAHgLgABPjUg");
	this.shape_1.setTransform(11,26.1);

	// Layer 1
	this.instance = new lib.Herbivore_Cannie_Gglow();

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,24,54);
p.frameBounds = [rect];


(lib.carnMolarRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_molar_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,112,78);
p.frameBounds = [rect];


(lib.carnMolarGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_molar_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,112,78);
p.frameBounds = [rect];


(lib.carnIncisorRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_Incisor_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,43,75);
p.frameBounds = [rect];


(lib.carnIncisorGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_Incisor_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,43,75);
p.frameBounds = [rect];


(lib.carnCarnassialRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_Car_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,70);
p.frameBounds = [rect];


(lib.carnCarnassialGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_Car_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,70);
p.frameBounds = [rect];


(lib.carnCanineRglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_Cannie_Rglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39,90);
p.frameBounds = [rect];


(lib.carnCanineGglow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Carnivore_Cannie_Gglow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39,90);
p.frameBounds = [rect];


(lib.Rodant_Molar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkBDoIgGgGIgDgIIgGgHQADgCAAgHQAAgGgGgfQgFggAAgGQAAgXALgLIAbACQAVARAHAOQAGgDADgFQAFgFATAAIAWABQAHADAGAEIAIgKQAJgKAHgDIAfACIAUARIABgMQABgKALgFQAXgGASAAQAUALAIARIABABIgBgFQAAgEAJgJQAHgIAFgDQAOgBAOAHIAMAHQACAAAIgJQAIgIABACIAgACIAMAUQAEgSAUgJQAfgPBUgIIAGAGIABgBQAEAJAHAJQgJAEgGALIgBADIgrA6IgnA3QgHgEgJAAIgEAAIACgDIgCAAIgFgCQgDAFgJAEIgVAAQgVgBgBgBQgLAEgMAAQgfAAgWgPQgDAIgNALIgbAAQgdgCgCgBQgMgDgGgDQgKAVgJADIgdgBQgKgFgMgLQgFAFgNAHQgbAPglAAQgoAAgLgHgAkMBsQAFAMgBASIgDAfQgBAlAsARQAigDAagHQAcgHAAgHIAAgBIgHgKQAAgGAEgCQgCgIgEgKQgKgagQgIIgZAFIgIALIgGAJQgFgBgUgcQgMgRgOAAIgHABgAh2BxQgIAHgHAJIgEAEIACAEQADAJABAQQABAFAFAQQAFADAFAFQAMAPALAHIAOgBQAFgEADgNQAEgKAKgEIAMALQALAHAKAAIAogCIAHgHIgEgOIgFgGQAAgDADgCIgJgeQgLglgdAAQgYAAgEAOQgDAIgCAPQgLABgYgYgAAWCLQAGAJAFAOIACAEIANAJIAYATIBNgCIAHgHQgJgQgNgcIgUgrIgSACIgDAJQgEAGgMAAQgEAAgJgEQgLgGgHgIIgOABQgEAEgBAGQgDAJACALQgHgCgDgEIAGARgADqBKQghAIgbACQgQAEgFAOQgFAMgFAGIAGAKQAVApABAOIAKACIAFACIAJgMIBLhnIgDgEIgEAAQgKAAgTAEgADDgxQgRgLgIgIIgLALIhFADIgdACQgOgGgFgKIgGgKIgCACQgOAOgDAAIgNgBQgIgIgIgOIgEgHQgHALgGAEQglgBgfgbQgNgLgHgCQgJgCgMAGIgJANIgzgRQgGAAgJAFQgJAGgGAAQgMAAgLgJIgOgNQghABgMAHQgNAIgIABQgDgFACgGIACgPQAAgJgHgaIgFgUQgCgLABgFIABgHIABAAQAHgNAFgDQAPgJAmAFQAHACALALIANANIAOAAIANgNQAJgIADgBQAgAEAUARIAZAWIAAAAIAJAAQANgLAigEQAegDAVAEQAKAHAJALIACADQABgDAAgCQADAHACAIIAZgBQALADAIAJIACgDIAKgJQAVAAARAIQAOAHAjADQAbgKAkAKQASAFAQAHQAHAAADgEIADgHIAkAAQALAJAXAOIAKAIIADgCQABAFACAEQgFAGgBAMQgUAmgMAIQgjgCgLgFQgFgEgEAAIgKAGIgLAIgACoiWIAFAfQADAYAKALQAAADgBADIANANIAZAAQAEgDALgMQAGgHAIAAQAGAAAGAFIAOAOIAXgCQAHgHAJgWQADgHAEgEIgHgEQgUgNgMgMIgSABQgJAIgBAMQgCAHgLAEQgHgSgTgOQgSgMgTAAIgNABgAAuhjIAHAEIgKAKIAHAHQAHAHAEADIAZgDQAWgCAsgBIAIgHQgDgGABgGIABgCIABAAIgCgJIgBgjQg/gEgNgQQgNAAgMAJQADAHAAAEQAAANgBAAIgDACQgDADgDAAQgEgPgHgJQgLgPgVgCIAAAIQAAAKgJAcIgHAPIABACIATARIAQgKIAQgJgAhMhyQAOAKAOALIAOgBIAJgKIgDgDIABgEQACAAADACQAJgPACgUIADgQIgFgIQgMgTgTgCIgoADQgPABgJACIgCADIgEAAIgKAAIgBABQAAACgIAAIgEgBQAHAdAAAQIAAADIAEgDQAWABAcASgAiyiAQAQAIAIACQAHgJgBgZQgCgYADgJIgQgMQgXgUgPAAQgLAAgFAJQgFAMgDABIgcgCQgGgIgFgFQgLgKgTgFQgSABgKAGIgKAJQAIAZAIAtIAIgDQAHgDAHAAIAlABQAKADAHAIQAHAHAHAAIAUgKQAOABAOAHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AkHCqIADgeQACgTgFgLQARgGAQAVQAUAcAEACIAGgKIAJgLIAZgFQAPAIALAbQAEAJACAJQgEABAAAGIAHALIAAABQAAAGgcAHQgaAHgiADQgsgRAAglgAhvDBQgEgGgFgCQgFgRgBgFQgBgPgDgKIgCgEIADgEQAIgJAIgHIATgBQAYAZALgBQACgQACgIQAFgOAYAAQAbAAAMAlIAJAeQgCACAAADIAFAGIAEAPIgHAGIgpACQgKAAgKgHIgMgKQgKADgEAKQgEANgFAEIgNABQgLgHgNgOgAA1CwIgNgJIgCgEQgGgOgFgJIgGgRQADAEAHACQgCgLADgIQABgGAEgFIANgBQAIAJAKAFQAKAFAEgBQAMABADgHIAEgJIASgCIAUArQANAcAIAQIgGAIIhNABIgYgTgAC5C8IgJgCQgCgNgUgpIgGgLQAFgGAFgMQAFgOAPgEQAcgCAggHQAZgGAJABIADAEIhLBnIgJAMgADLhAIgNgMQABgEAAgDQgLgLgDgYIgEgeQAagGAXARQAUANAGASQAMgEACgHQABgLAJgJIASgBQAMANAUANIAGADQgDAEgDAHQgJAWgIAIIgWABIgPgOQgFgFgGABQgIAAgGAGQgLAMgEADgAA3hNIgHgGIAKgLIgHgEIgEgCIgQAJIgQAKIgTgRIgBgCIAFgPQALgbAAgLIAAgIQAVACAKAPQAIAJAEAQQACgBADgCIADgDQACAAAAgMQgBgFgDgHQANgJAMABQAOAQA+ADIACAjIACAKIgBAAIgBABQgBAGADAGIgIAHQgtACgVABIgZADQgEgDgHgHgAhIhwQgcgTgVgBIgFADIABgDQAAgPgHgdIAEAAQAHAAABgCIAAgBIAKAAIAFAAIACgDQAJgCAPgBIAogDQATACAMAUIAFAHIgDAQQgCAUgJAPQgDgCgCAAIgBAEIADADIgKALIgNAAQgOgLgPgJgAiuh/QgNgHgOgBIgUAKQgIAAgGgGQgIgJgJgDIglgBQgHAAgHAEIgIACQgJgsgHgaIAKgJQAJgFATgCQATAFAKAKQAGAGAGAHIAcACQADgBAFgMQAFgJALAAQAPAAAXAUIAPANQgCAIABAYQACAagHAIQgJgCgQgIg");
	this.shape_1.setTransform(-0.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AkGCqIACgfQACgSgFgMQARgFAQAWQAUAbAEABIAHgJIAIgLIAYgFQARAIAKAaQAEAKACAIQgFACAAAGIAIAKIAAABQAAAHgcAHQgaAHgiAEQgsgSABglgAhuDAQgFgEgFgEQgFgQgBgFQgBgQgEgJIgBgEIAEgEQAHgJAIgGIASgCQAZAZALgCQACgPADgHQAEgOAYgBQAbAAANAlIAJAeQgEACAAAEIAGAGIADANIgGAHIgoACQgKAAgLgHIgNgLQgKAEgDALQgDAMgFAFIgOABQgLgIgMgPgAA1CxIgOgJIgCgFQgEgOgGgJIgHgRQAEAEAGACQgCgKAEgKQABgFAEgFIAOAAQAHAHALAGQAJAEAEABQAMgBAEgGIACgJIASgCIAUArQANAcAKARIgHAGIhNACIgYgSgAC6C8IgKgCQgBgNgWgpIgFgLQAFgGAFgMQAFgOAQgEQAagCAigIQAYgFAIACIAEADIhMBnIgIAMgADLg/IgOgOQACgDAAgDQgLgLgCgYIgGgfQAbgFAYAQQASAOAIASQALgEABgHQACgMAIgHIATgCQAMAMAUANIAHAFQgEAEgDAGQgJAXgIAGIgXACIgNgOQgGgEgGgBQgIAAgGAHQgLAMgFAEgAA3hNIgHgHIAJgKIgGgEIgFgCIgPAKIgQAKIgTgSIgCgBIAGgQQALgbAAgKIAAgJQAVACALAPQAGAJAFAPQACAAAEgDIACgBQABgBAAgNQAAgEgCgHQAMgJANAAQAMAQBAAEIAAAjIADAJIgBAAIgCADQAAAFADAHIgJAGQgrABgXACIgYADQgEgDgHgHgAhHhxQgcgRgXgCIgDADIAAgDQAAgQgHgdIAEABQAIAAAAgCIABAAIAKAAIAEgBIACgCQAIgDAQgBIAngDQAUADAMASIAEAIIgCAQQgCAVgJAPQgEgDgCAAIgBAEIAEADIgJAKIgOACQgOgMgOgKgAith/QgOgGgOgBIgVAKQgGgBgHgHQgHgIgKgDIglgBQgHAAgIADIgHADQgJgsgIgZIALgJQAKgHASAAQATAEAKAKQAGAFAFAIIAcACQAEgBAFgLQAFgKALAAQAPAAAXAUIAPAMQgCAJACAYQABAagIAIQgHgCgQgIg");
	this.shape_2.setTransform(-0.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AkGCqIACgfQACgSgFgMQARgFAQAWQAUAbAEABIAHgJIAIgLIAYgFQARAIAKAaQAEAKACAIQgFACAAAGIAIAKIAAABQAAAHgcAHQgaAHgiAEQgsgSABglgAhuDAQgFgEgFgEQgFgQgBgFQgBgQgEgJIgBgEIAEgEQAHgJAIgGIASgCQAZAZALgCQACgPADgHQAEgOAYgBQAbAAANAlIAJAeQgEACAAAEIAGAGIADANIgGAHIgoACQgKAAgLgHIgNgLQgKAEgDALQgDAMgFAFIgOABQgLgIgMgPgAA1CxIgOgJIgCgFQgEgOgGgJIgHgRQAEAEAGACQgCgKAEgKQABgFAEgFIAOAAQAHAHALAGQAJAEAEABQAMgBAEgGIACgJIASgCIAUArQANAcAKARIgHAGIhNACIgYgSgAC6C8IgKgCQgBgNgWgpIgFgLQAFgGAFgMQAFgOAQgEQAagCAigIQAYgFAIACIAEADIhMBnIgIAMgADLg/IgOgOQACgDAAgDQgLgLgCgYIgGgfQAbgFAYAQQASAOAIASQALgEABgHQACgMAIgHIATgCQAMAMAUANIAHAFQgEAEgDAGQgJAXgIAGIgXACIgNgOQgGgEgGgBQgIAAgGAHQgLAMgFAEgAA3hNIgHgHIAJgKIgGgEIgFgCIgPAKIgQAKIgTgSIgCgBIAGgQQALgbAAgKIAAgJQAVACALAPQAGAJAFAPQACAAAEgDIACgBQABgBAAgNQAAgEgCgHQAMgJANAAQAMAQBAAEIAAAjIADAJIgBAAIgCADQAAAFADAHIgJAGQgrABgXACIgYADQgEgDgHgHgAhHhxQgcgRgXgCIgDADIAAgDQAAgQgHgdIAEABQAIAAAAgCIABAAIAKAAIAEgBIACgCQAIgDAQgBIAngDQAUADAMASIAEAIIgCAQQgCAVgJAPQgEgDgCAAIgBAEIAEADIgJAKIgOACQgOgMgOgKgAith/QgOgGgOgBIgVAKQgGgBgHgHQgHgIgKgDIglgBQgHAAgIADIgHADQgJgsgIgZIALgJQAKgHASAAQATAEAKAKQAGAFAFAIIAcACQAEgBAFgLQAFgKALAAQAPAAAXAUIAPAMQgCAJACAYQABAagIAIQgHgCgQgIg");
	this.shape_3.setTransform(-0.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AkHCqIADgeQACgTgFgLQARgGAQAVQAUAcAEACIAGgKIAJgLIAZgFQAPAIALAbQAEAJACAJQgEABAAAGIAHALIAAABQAAAGgcAHQgaAHgiADQgsgRAAglgAhvDBQgEgGgFgCQgFgRgBgFQgBgPgDgKIgCgEIADgEQAIgJAIgHIATgBQAYAZALgBQACgQACgIQAFgOAYAAQAbAAAMAlIAJAeQgCACAAADIAFAGIAEAPIgHAGIgpACQgKAAgKgHIgMgKQgKADgEAKQgEANgFAEIgNABQgLgHgNgOgAA1CwIgNgJIgCgEQgGgOgFgJIgGgRQADAEAHACQgCgLADgIQABgGAEgFIANgBQAIAJAKAFQAKAFAEgBQAMABADgHIAEgJIASgCIAUArQANAcAIAQIgGAIIhNABIgYgTgAC5C8IgJgCQgCgNgUgpIgGgLQAFgGAFgMQAFgOAPgEQAcgCAggHQAZgGAJABIADAEIhLBnIgJAMgADLhAIgNgMQABgEAAgDQgLgLgDgYIgEgeQAagGAXARQAUANAGASQAMgEACgHQABgLAJgJIASgBQAMANAUANIAGADQgDAEgDAHQgJAWgIAIIgWABIgPgOQgFgFgGABQgIAAgGAGQgLAMgEADgAA3hNIgHgGIAKgLIgHgEIgEgCIgQAJIgQAKIgTgRIgBgCIAFgPQALgbAAgLIAAgIQAVACAKAPQAIAJAEAQQACgBADgCIADgDQACAAAAgMQgBgFgDgHQANgJAMABQAOAQA+ADIACAjIACAKIgBAAIgBABQgBAGADAGIgIAHQgtACgVABIgZADQgEgDgHgHgAhIhwQgcgTgVgBIgFADIABgDQAAgPgHgdIAEAAQAHAAABgCIAAgBIAKAAIAFAAIACgDQAJgCAPgBIAogDQATACAMAUIAFAHIgDAQQgCAUgJAPQgDgCgCAAIgBAEIADADIgKALIgNAAQgOgLgPgJgAiuh/QgNgHgOgBIgUAKQgIAAgGgGQgIgJgJgDIglgBQgHAAgHAEIgIACQgJgsgHgaIAKgJQAJgFATgCQATAFAKAKQAGAGAGAHIAcACQADgBAFgMQAFgJALAAQAPAAAXAUIAPANQgCAIABAYQACAagHAIQgJgCgQgIg");
	this.shape_4.setTransform(-0.5,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AkGCqIACgfQACgSgFgMQARgFAQAWQAUAbAEABIAHgJIAIgLIAYgFQARAIAKAaQAEAKACAIQgFACAAAGIAIAKIAAABQAAAHgcAHQgaAHgiAEQgsgSABglgAhuDAQgFgEgFgEQgFgQgBgFQgBgQgEgJIgBgEIAEgEQAHgJAIgGIASgCQAZAZALgCQACgPADgHQAEgOAYgBQAbAAANAlIAJAeQgEACAAAEIAGAGIADANIgGAHIgoACQgKAAgLgHIgNgLQgKAEgDALQgDAMgFAFIgOABQgLgIgMgPgAA1CxIgOgJIgCgFQgEgOgGgJIgHgRQAEAEAGACQgCgKAEgKQABgFAEgFIAOAAQAHAHALAGQAJAEAEABQAMgBAEgGIACgJIASgCIAUArQANAcAKARIgHAGIhNACIgYgSgAC6C8IgKgCQgBgNgWgpIgFgLQAFgGAFgMQAFgOAQgEQAagCAigIQAYgFAIACIAEADIhMBnIgIAMgADLg/IgOgOQACgDAAgDQgLgLgCgYIgGgfQAbgFAYAQQASAOAIASQALgEABgHQACgMAIgHIATgCQAMAMAUANIAHAFQgEAEgDAGQgJAXgIAGIgXACIgNgOQgGgEgGgBQgIAAgGAHQgLAMgFAEgAA3hNIgHgHIAJgKIgGgEIgFgCIgPAKIgQAKIgTgSIgCgBIAGgQQALgbAAgKIAAgJQAVACALAPQAGAJAFAPQACAAAEgDIACgBQABgBAAgNQAAgEgCgHQAMgJANAAQAMAQBAAEIAAAjIADAJIgBAAIgCADQAAAFADAHIgJAGQgrABgXACIgYADQgEgDgHgHgAhHhxQgcgRgXgCIgDADIAAgDQAAgQgHgdIAEABQAIAAAAgCIABAAIAKAAIAEgBIACgCQAIgDAQgBIAngDQAUADAMASIAEAIIgCAQQgCAVgJAPQgEgDgCAAIgBAEIAEADIgJAKIgOACQgOgMgOgKgAith/QgOgGgOgBIgVAKQgGgBgHgHQgHgIgKgDIglgBQgHAAgIADIgHADQgJgsgIgZIALgJQAKgHASAAQATAEAKAKQAGAFAFAIIAcACQAEgBAFgLQAFgKALAAQAPAAAXAUIAPAMQgCAJACAYQABAagIAIQgHgCgQgIg");
	this.shape_5.setTransform(-0.4,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AkGCqIACgfQACgSgFgMQARgFAQAWQAUAbAEABIAHgJIAIgLIAYgFQARAIAKAaQAEAKACAIQgFACAAAGIAIAKIAAABQAAAHgcAHQgaAHgiAEQgsgSABglgAhuDAQgFgEgFgEQgFgQgBgFQgBgQgEgJIgBgEIAEgEQAHgJAIgGIASgCQAZAZALgCQACgPADgHQAEgOAYgBQAbAAANAlIAJAeQgEACAAAEIAGAGIADANIgGAHIgoACQgKAAgLgHIgNgLQgKAEgDALQgDAMgFAFIgOABQgLgIgMgPgAA1CxIgOgJIgCgFQgEgOgGgJIgHgRQAEAEAGACQgCgKAEgKQABgFAEgFIAOAAQAHAHALAGQAJAEAEABQAMgBAEgGIACgJIASgCIAUArQANAcAKARIgHAGIhNACIgYgSgAC6C8IgKgCQgBgNgWgpIgFgLQAFgGAFgMQAFgOAQgEQAagCAigIQAYgFAIACIAEADIhMBnIgIAMgADLg/IgOgOQACgDAAgDQgLgLgCgYIgGgfQAbgFAYAQQASAOAIASQALgEABgHQACgMAIgHIATgCQAMAMAUANIAHAFQgEAEgDAGQgJAXgIAGIgXACIgNgOQgGgEgGgBQgIAAgGAHQgLAMgFAEgAA3hNIgHgHIAJgKIgGgEIgFgCIgPAKIgQAKIgTgSIgCgBIAGgQQALgbAAgKIAAgJQAVACALAPQAGAJAFAPQACAAAEgDIACgBQABgBAAgNQAAgEgCgHQAMgJANAAQAMAQBAAEIAAAjIADAJIgBAAIgCADQAAAFADAHIgJAGQgrABgXACIgYADQgEgDgHgHgAhHhxQgcgRgXgCIgDADIAAgDQAAgQgHgdIAEABQAIAAAAgCIABAAIAKAAIAEgBIACgCQAIgDAQgBIAngDQAUADAMASIAEAIIgCAQQgCAVgJAPQgEgDgCAAIgBAEIAEADIgJAKIgOACQgOgMgOgKgAith/QgOgGgOgBIgVAKQgGgBgHgHQgHgIgKgDIglgBQgHAAgIADIgHADQgJgsgIgZIALgJQAKgHASAAQATAEAKAKQAGAFAFAIIAcACQAEgBAFgLQAFgKALAAQAPAAAXAUIAPAMQgCAJACAYQABAagIAIQgHgCgQgIg");
	this.shape_6.setTransform(-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.rodentMolarRglow();
	this.redGlow.setTransform(-0.5,-0.5,1,1,0,0,0,38.5,28);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.rodentMolarGglow();
	this.greenGlow.setTransform(-0.5,-0.5,1,1,0,0,0,38.5,28);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-28.5,81,59);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Rodant_frontTooth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AFAI4IgqgBQgIgFgZgKIgdgMIhqg9QgigUgxgvQg1g3gZgYQgngkgcgwQgbg1gOgZIgZhSQgIgcgIgQIAKAKIAjAcQAMALASAWQAUARAlAIQABABAgACIAnABIAmgBQAaArApAyQAUAYAKAIQANAKAfANIA4AaIAnARQAoAnAQAzQAMApACBjIAAALQgLgFgRgDgAlbjWQAAhFACgNIAVhuQAJgwAlhMIAXgsIAHALQASAaAqAgQAPAMA4AiIALAGQgaAogUBJQgWBQAAA7QAAARAGAMQgBAJgmAXQgTAMgLAVQgJAWgGAMQgWAogCAaQgDAkgIAaQg8hqAAijg");
	this.shape.setTransform(-0.3,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFhJUQgLAAgDgBIgDgEQgFgFg4gEQgDAAgJgFQgLgGgIgCQgUgEgLgHIgagQQgOgHghgWQgcgSgNgGQgjgRgxgyQgyg3gWgTQhGg9gnhbQgOghgOgvIgYhQIAAgUIAGAFIgBgFIAAgHIABgCIAHgBQAIAJAVAVQAYAXANAJQANAJAHALQAHAMAFADQASAMBfAAIAYAAIADgCIACgCIAEAFIAJAAIACACIACAFQgCADAAAEIAAAAIAZAhQAaAhAYAXQAqApA6AeIADgCIAAgFIAJAEQALAEANgCQAtAYAiBTQAZA4gDBTQgBAZAHAWQgJAIgEALIgCgFgAFZI1IAAgKQgChjgMgpQgQgzgognIgngRIg4gaQgfgNgNgKQgKgIgUgYQgpgzgagqIgmAAIgngBQgggBgBgBQglgIgUgSQgSgVgMgLIgjgdIgKgJQAIAQAIAbIAZBTQAOAYAbA1QAcAxAnAjQAZAYA1A3QAxAwAiAUIBqA9IAdAMQAZAKAIAFIAqABQARACALAFIAAAAgADkEjIAOAHIgMgIIgCABgAlhg+QgOg/AAhiQAAhtAYhbQAYheAyhIQAKgDAIgIQATAgAxAhQAdAUAwAbIALAGIAAAAQADACAEAAIACADIAMAHIgFAFIgCADQgFAFgDAFIgEgCIgPAhQgYA2gJAnQgQBEACBHQABAQgVAVQgaAWgKAKQgLAKgLAYIgOAjQgPAcgEAlQgCAYABA0IgCACQgDADgEABQg4hDgVhbgAkZodQglBNgJAwIgVBuQgCANAABFQAACjA8BqQAIgbADgkQACgZAWgpQAGgLAJgXQALgUATgMQAmgXABgJQgGgNAAgQQAAg7AWhQQAUhJAagoIgLgHQg4ghgPgMQgqghgSgZIgHgMIgXAsg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AFAI4IgqgBQgIgFgZgKIgdgMIhqg9QgigUgxgvQg1g3gZgYQgngkgcgwQgbg1gOgZIgZhSQgIgcgIgQIAKAKIAjAcQAMALASAWQAUARAlAIQABABAgACIAnABIAmgBQAaArApAyQAUAYAKAIQANAKAfANIA4AaIAnARQAoAnAQAzQAMApACBjIAAALQgLgFgRgDgAlbjWQAAhFACgNIAVhuQAJgwAlhMIAXgsIAHALQASAaAqAgQAPAMA4AiIALAGQgaAogUBJQgWBQAAA7QAAARAGAMQgBAJgmAXQgTAMgLAVQgJAWgGAMQgWAogCAaQgDAkgIAaQg8hqAAijg");
	this.shape_2.setTransform(-0.3,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AFAI4IgqgBQgIgFgZgKIgdgMIhqg9QgigUgxgvQg1g3gZgYQgngkgcgwQgbg1gOgZIgZhSQgIgcgIgQIAKAKIAjAcQAMALASAWQAUARAlAIQABABAgACIAnABIAmgBQAaArApAyQAUAYAKAIQANAKAfANIA4AaIAnARQAoAnAQAzQAMApACBjIAAALQgLgFgRgDgAlbjWQAAhFACgNIAVhuQAJgwAlhMIAXgsIAHALQASAaAqAgQAPAMA4AiIALAGQgaAogUBJQgWBQAAA7QAAARAGAMQgBAJgmAXQgTAMgLAVQgJAWgGAMQgWAogCAaQgDAkgIAaQg8hqAAijg");
	this.shape_3.setTransform(-0.3,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AFAI4IgqgBQgIgFgZgKIgdgMIhqg9QgigUgxgvQg1g3gZgYQgngkgcgwQgbg1gOgZIgZhSQgIgcgIgQIAKAKIAjAcQAMALASAWQAUARAlAIQABABAgACIAnABIAmgBQAaArApAyQAUAYAKAIQANAKAfANIA4AaIAnARQAoAnAQAzQAMApACBjIAAALQgLgFgRgDgAlbjWQAAhFACgNIAVhuQAJgwAlhMIAXgsIAHALQASAaAqAgQAPAMA4AiIALAGQgaAogUBJQgWBQAAA7QAAARAGAMQgBAJgmAXQgTAMgLAVQgJAWgGAMQgWAogCAaQgDAkgIAaQg8hqAAijg");
	this.shape_4.setTransform(-0.3,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AFAI4IgqgBQgIgFgZgKIgdgMIhqg9QgigUgxgvQg1g3gZgYQgngkgcgwQgbg1gOgZIgZhSQgIgcgIgQIAKAKIAjAcQAMALASAWQAUARAlAIQABABAgACIAnABIAmgBQAaArApAyQAUAYAKAIQANAKAfANIA4AaIAnARQAoAnAQAzQAMApACBjIAAALQgLgFgRgDgAlbjWQAAhFACgNIAVhuQAJgwAlhMIAXgsIAHALQASAaAqAgQAPAMA4AiIALAGQgaAogUBJQgWBQAAA7QAAARAGAMQgBAJgmAXQgTAMgLAVQgJAWgGAMQgWAogCAaQgDAkgIAaQg8hqAAijg");
	this.shape_5.setTransform(-0.3,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AFAI4IgqgBQgIgFgZgKIgdgMIhqg9QgigUgxgvQg1g3gZgYQgngkgcgwQgbg1gOgZIgZhSQgIgcgIgQIAKAKIAjAcQAMALASAWQAUARAlAIQABABAgACIAnABIAmgBQAaArApAyQAUAYAKAIQANAKAfANIA4AaIAnARQAoAnAQAzQAMApACBjIAAALQgLgFgRgDgAlbjWQAAhFACgNIAVhuQAJgwAlhMIAXgsIAHALQASAaAqAgQAPAMA4AiIALAGQgaAogUBJQgWBQAAA7QAAARAGAMQgBAJgmAXQgTAMgLAVQgJAWgGAMQgWAogCAaQgDAkgIAaQg8hqAAijg");
	this.shape_6.setTransform(-0.3,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.rodentFrontToothRglow();
	this.redGlow.setTransform(0,-1,1,1,0,0,0,41,64);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.rodentFrontToothGglow();
	this.greenGlow.setTransform(0,-1,1,1,0,0,0,41,64);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-65,85,133);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Omnivore_Molar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("ApOCcIgJgGIAAAAIgIgFIgBABIgBgBIgMgMIgEgFIgBgHIgBgDIgCgHIABgBQgDgFAEgDIAEgEQADgDAKAAQARAAAWAEQAJACAEACQADACAHAJQAOAUAVAEIAFAEIgCgBIAAABQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEAFQgGAKgLACQgGAAABADIgaABIgEAAQgNAAgIgGgAn4CQIAEAAIgKgMIAAgBQgBgDgDgCIgRgWQAXgaAggZQAFAHARADQASAEAGAEQAEAEAEAIIAGAOQAIATANgBIgBgCIAGAFIABACIgEADQgGALgFACIgJACIgLAGQgHADgKACIgUABQgWAAgVgGgAlrB7IgBgHIgFgOIgEgJIgMgYQgFABAAAHIACAJIACAKIgGgPQgCgHABgCQACgDAHgBQAIgDAKgKIAMgFQAGgCADgDIAGgHQAEgCAIgDQAEgDABgDIAFAAIABgBQACADAEADQAIAFAKACIAaAFQAIACADAEQAEAEAAAJIgBAPQAAAJAFAIIACADIAAABIgBAHQgCADgGAAIgKABQABAEgEAEIgJACQgRABgLgCIgOgCIgIACIgHAEQgJADgHAAQgIAAgGgDgAi3ByQgVgDgJgDQgLgDgJgEIAAgFQAAgMgDgHIgBgGIgDgLIABAAIABgCIABACQADgGgEgDIAAgDQAEgFAMgGIASgJQAJgFAGgBQANgEAPACQAPADAKAKQAKAIABAIQABAEAAAGIgBAKQABAGACAEIAAADIgCAEIgBAMIgDAGQgIgEgHACIgLAGQgIAFgEABIgGAAIgLAAgAgBBvIgPgGQgJgFgGAEIgFAEQgEADgHAAIgMAAQgBgIgOgHIgMgDQgGgBgJACIgLAEIACgFIABgHIgBgOIACgQQAAgNAFgEQAFgDAKgEQAFgCAJgNQAHgKAIAAQAEABAIAGQATAOAYgDIAQgFQALgDAHAAQALAAALAIQAJAHAFALIAFAUQAAAIACAEQAAAIgCAEQgBADgGAFQgHAFgGACQgFADgJgBIgPAAIgJABIgFAEIgIACIgBAAgAB4BmIgHgEQgIAAgEgCIgFgFIAAgDIgBgCIgBgCIgDAAIgBAAIgDgJIgDgJIgCgEIgBgEIABgLIABgKIAFgFQAHgJADAAQACgBAIAAQAKgCAHgGIALgBQABgDAGgCQAHgBgCgFIAJgEQAEgBAEADIAHAFIAKACQAVACAUgEIAAgDIAMABQAFACAFAFIAPAQQADADACAHIAHAWQAEAJAFACIACACIgGAHQgCAEgDABIgHAAIgKAEQgKAEgQgBIgRgBQgQgFgJAAQgGAAgGADQgGADgCAGQgDgBgEADIgHAEIgaACQgFAAgCgCgAErBCQgBgFgEgEQgBgBAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAABIgCgNQgCgPAAgIQAFABAHgFIALgIIAIgDQACgBABgEIADgGQACABAEgDQAEgEACAAQACgBAGAEIAKAJQAFAEAEABQAGACAMAAQAGgKAHgDIAJgBIAUABIAOAGQAQAGAQgIIAFgHIAJgLIALgDIAHAAIAHAEQAIAFAUgCQAFgGgCgIQgBgIgHgEIAGgHIANgLQAPgLAJAAQAEAAACACIAGAFQADADAGACQAEACADAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAIAGADIAJACQAFADADADIADAGIgGADIg+AjQgNAFgVAKQgPAGgHACQgXgBgLAEQgEABgGAFIgKAFIgXAEIgYAJIgVAEIgWADQgYAKgNADQgGABgIAAIgMgBgAoRAQIgMgJIgMgCQgHgCgCgDIgDgIQgCgHgFgFQARgLALgKIAAgDQAEAAAAgEQAFABAGgIQADgCAMADQAJACAHgCIADAAIAHgCQAPgEACgDIAFgGQACgDAHgBQATgEAMADIAAgBIACABQAQACAPAAQAHABAAgEIACABIAAACIgEAGQgBAEAAAGIABAJQgCAIABADIACAGIABANIABABQgOACgKAIQgPAKgHgBQgFgBgIgEQgPgJgSACIgRgkQgDgFgCgBQgFgEgDAEIAPAjQADAHAEAFIgEACIgGAFIgGAIQgHAKgJAAQgFAAgHgFgAlAAEIgJgFQgQgIgIAAIgJgBIgGgEIgEgEIgBgGIgEgMQgCgIAAgEIAEgNQAAgGgBgEIAGACIACgDIgEgIIADgDIAWgHIAJgGIACgCQAFAGAKACQAJADARAAQASABAHABIAMABIABAKIACALIAAAVIABAJIgGACIgJAEIgHABQgCABgFAFQgEADgDABIAAAFQgLADgLARIgCAEQgDgGgDgDgAjGgKQgHgBgJgGQgOgHgPgEIgBgJIAAgOQAAgRgJgPQAIgBADgGQAQABAJgDIAAgDIAKAEIAPACIA7AGIgBAaIABANIgGgBQgHAAgMAJQgJAHgDABIgIAEIgFAJQgDAFgHAAIgFAAgABPgUIgQgIQgPgHgMgMQgFgFgGgJIAAgEIgDgGIgDgDIgBAAIAAgEQAAgHACgDIAEgGQABgEgCgDIACgBIAEgDQACgCAGAAIAIABIARgCQAFAAAdADQAVACAMgHIAAgCIAQgGQAJgDAEgEIAJgGQAIgBAAgDIA2AAQAEAJAMAEIAOADIgLAoIgBAQIABALQAAAHgEACQgEACgEgBQgKgBgMgFIgLAJQgJAGADAGQgLADgSgJIgagRQgMgEgKADQgNADgEAKIgEAMQgEAHgFABIgBAAIgKgCgAhngVQgKgDgIgGIAAgFIAAgBQABgPgCgSQgBgGABgDIACgGIAAAAIABgBQAEgCADgDIAFABQAWADAmgFQAqgGAOgBIgCAEIAAAIIAAAUQAAAKAEAHIgCACQgEgCgFAAQgWgBgOADQgUAFgMAMIgIAIQgFAEgIAAQgGAAgIgDgAGkgpIgHgCQgBgFgFgFQgGgFgHABQgFABgIAGIgKAJQgJAFgKgBQgKgBgGgIIgIgNQgFgGgFgBQgFAAgHAGQgLAKgGAKIgKgCQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgNAAIAAAAIAAgBQAAgMAHgeIAEgQIACgDIADgDQACADAEABQgEgGAMgIQATgLAOgBQAHAAAZAFQASAEALgFQAHgEALgJQANgJAYAFQAMABAXAHIACABIACABIAOAAIABgBIACAAQABAAAIgDQAcgNANgDQAVgGASAEQAVADAMAOIAJALIgMAaQgDgCgDAFIgDAJQgBADgFAGIgGAHIgGgEQgLgJgIgCQgLgBgJAGQgMAOgHABIgJAPQgGABgBAGQgBAFACAFIgHgGQgDgEgMgHIgPgKIgEgCQgEgFgGABQgDAAgGAGQgQARgGANIgFABQgBgDgFgCg");
	this.shape.setTransform(-0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ao+C0QgKgBgIgGQgJgFgIgJIgFACQgFgFgIgFIgFgFIAEAAIADABIgNgRQgEgFAAgDIAAgJIgDgKQgBgGAEgDQgBgIAFgEIAGgCIAHgBQAUAAAYADQAPADAFADQAGAEAJANQgDgFAAgGQAAgJASgQQAQgOAKgLQAGgHAEgCQAGgBAHADIAMAHQAFACAOABQALACAGAEQAFAEAGALIACAEQAFgBAEAHIAKANQgFgKgCgNQgCgHACgDQACgEAGgEIA1gfQAFgEABgDQAHAAAEAFIABAAIgCgBIgKgIQgDgBgIgBQgIgBgEgCQgDgBgDgCIgCgDQgEADgKACQgDAAgUAMQgPAJgLgEIgIgGIgJgFIgLgBIgKgBIgGgCIAAABIgGAGIgJAOQgGAHgFACQgJAEgSgLQgIgFgMgEQgOgEgGgFQgDgEgEgJIgEgOIgEABQgEgBgBgFIAAgEIABgEQADgFALgFQAEgDAHgGIAKgKIAJgHIAFgFQADgBAHABIAZAFIACAAQABAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIAIgDQAFAAACgCQADgDAFgGIAPgBQAQgBAhABQAdgBASgMIANgLIAEgDIAFABIACACIABgBQABgBAGABQAMAFAVAAQAZgBAJABIAJADIAAAAIAVgCIAFgCIAGgFQAFACAGAAIAAADIAMABQALACAjABQAaABAPAGIAAgBQAZAAAigIIAagFQANgCAXACQAGAAACABIADACIgBgBQAFgIAQgEIARgEQAGAAAYACQATACAKgFIAVgLIAJgDIAQgJQAIgEATAAIAdABQAHAAAEACQAFACAHAHIARAHIAGAEIAAgBIADgBQACADABAFIABgBIACgDQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQACgGAHgFQAQgPAYACIAWADQANADAIgDQAGgBAHgFIAMgIQARgJAZAEQAQACAbALQAJACABAFIADAAIADgEQAegTATgHQAegKAYALQAMAFAUAVIAEAEIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIADAFQAEAGAGAEIgFAAIAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABIgCACIgBAEIgIAUQgGAOgHABQACAHgGAFIABAAIAMALIAFAEQAEACAJABQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAIABAAQgCAHABALQgDADgBACIgpAXIgXAJQgLADgFAHIgeAQQgSAJgLACQgOgBgHACQgGABgMAHQgKAFgVAFQgbAJgQACIgaAEIgYAJQgPAFgQgDIgOgDQAAAEgDAEIgCACQABACgFAEQgFADABADIgXAFQACACgFAAIgiAAIgMgBIgJgDQgPgGgIAJIgEAEQgCACgEABQgIAEgEAAIgiAAIgUgJQgKgHgFgIIgCgBIgCAAIAAABQgBAHgCACIgFAEIgFADIgHAIIgKABIgSgBQgKgCgGADIgIAFIgHABQgJgBgFgDIgLgFQgDABgGAIIgSAAQgNAAgFgFIgGgHQgIgHgPAAIgWAAIgBAEIgEAFIgBABQACAGgEADQgDADgFACIgDABIgGgCIgLAAIgLABIgXABIABgCQgcgFgUgLIgDgBIAAADQAAAHgDADQgCACgGAAIgJABQAAAFgFACIgIABIgXgBIgTgBIgTAHQgMAEgMgDQgNgDgJgIIgNAMQgNAMgIgCQgCADgFACQgNAGgagCQgZgBgMgDIgJgDQACAEgBAFQgBAHgIAEQgLAIgdAAQgSgBgEgCgApcCVIAAABIAJAFQAJAHAQgBIAaAAQgBgEAGAAQALgCAGgKIAEgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABIAAgBIACABIgFgEQgVgFgOgTQgHgJgDgCQgEgDgJgBQgWgEgRAAQgKAAgDADIgEADQgEAEADAFIgBAAIACAHIABAEIABAGIAEAGIAMAMIABAAIABAAgAm+CUQAKgBAHgEIALgGIAJgBQAFgCAGgLIAEgEIgBgBIgGgGIABADQgNAAgIgSIgGgOQgEgIgEgEQgGgEgSgEQgRgDgFgIQggAagXAZIARAXQADACABACIAAABIAKAMIgEAAQAgAKAfgFgAl6BdIAEAIIAFAOIABAHQANAIARgIIAHgDIAIgDIAOACQALADARgCIAJgBQAEgEgBgEIAKgBQAGAAACgDIABgHIAAgCIgCgDQgFgHAAgKIABgPQAAgJgEgEQgDgDgIgDIgagFQgKgBgIgGQgEgCgCgEIgBABIgFAAQgBAEgEACQgIADgEADIgGAGQgDADgGADIgMAFQgKAKgIACQgHABgCADQgBADACAGIAGAPIgCgJIgCgJQAAgHAFgBIAMAYgAj0A7IgBABIADAKIABAHQADAGAAAMIAAAFQAJAFALADQAJACAVADQANACAEgCQAEgBAIgFIALgGQAHgBAIAEIADgHIABgMIACgDIAAgDQgCgEgBgGIABgLQAAgGgBgEQgBgHgKgJQgKgJgPgDQgPgDgNAFQgGABgJAFIgSAIQgMAHgEAFIAAACQAEADgDAGIgBgBIgBABgAgVBoIAPAGQAEABAFgCIAFgEIAJgCIAPABQAJAAAFgCQAGgCAHgGQAGgFABgDQACgDAAgIQgCgFAAgIIgFgUQgFgLgJgHQgLgHgLAAQgHAAgLADIgQAEQgYADgTgOQgIgGgEAAQgIgBgHAKQgJANgFADQgKADgFADQgFAFAAAMIgCAQIABAPIgBAGIgCAFIALgDQAJgCAGAAIAMAEQAOAHABAHIAMAAQAHABAEgDIAFgEQADgCAEAAQAEAAAEACgACYgDIgJAFQACAFgHABQgGACgBACIgLACQgHAGgKABQgIAAgCABQgDABgHAIIgFAGIgBAJIgBAMIABADIACAEIADAKIADAIIABAAIADABIABACIABACIAAADIAFAEQAEADAIAAIAHAEQACABAFAAIAagCIAHgDQAEgDADAAQACgFAGgEQAGgDAGABQAJAAAQAFIARAAQAQACAKgFIAKgDIAHgBQADAAACgEIAGgIIgCgCQgFgBgEgJIgHgXQgCgHgDgDIgPgPQgFgFgFgDIgMAAIAAADQgUADgVgBIgKgDIgHgEQgEgDgDAAIgBAAgAEhA4QAEAFABAFQAPACALgDQANgCAYgKIAWgEIAVgEIAYgJIAXgEIAKgFQAGgEAEgBQALgFAXABQAHgBAPgHQAVgJANgGIA+giIAGgEIgDgFQgDgEgFgDIgJgCIgGgDQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDABgEgCQgGgCgDgDIgGgFQgCgCgEAAQgJgBgPALIgNAMIgGAHQAHAEABAIQACAHgFAGQgUACgIgFIgHgDIgHAAIgLADIgJAKIgFAIQgQAHgQgFIgOgHIgUgBIgJACQgHACgGAKQgMAAgGgCQgEgBgFgDIgKgJQgGgFgCABQgCAAgEAEQgEADgCgBIgDAHQgBAEgCABIgIADIgLAHQgHAFgFAAQAAAHACAQIACAMIAAAAIACgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAgADfgOIAGABQAEABAGAHQAGAFADACIAHACQAIADADAKIAEASIAGARIACALIADABIABgCQgCgCgBgDIgFgTQgFgUACgLQANgLAQgHQAFgSASgEQADgBADACQgFgGgEgIIgFAAIgQARQgFAFgDABQgEAAgGgCIgOgMIgMABIgCAAQgBAIgCADIgjgEIAAADQgGAAgEAFQgEAFACAFQgWACgNgHIgSgNQgKgHgKAAQgNAAgGAKQgDARgHAFQgGAEgMgDIgQgGIgMgFQgJgFgOgNQgKgJgDgGIgBgCIgBACIgDAEIgCACIgCACQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAIgFADQgEABgMABQgSACgQAIQgIADgDAFIgFAHIACACIAPAIQAOAIAdgGQAdgEAMACQASAHAMAUQAAgGABgBQACgFAIgEIAGgIQACgBAFAAQAJgCAUgFQAKgDAEgFIAGgGQAEgDADgBIAFABIASAJQAIAEAMgBIATgDIAAgDgAiVgVIgOALIgJAFIgFAHIADAAQALACAKAEQAVAKAKAWIABABQAAgFABgEIAIgJIAbgZIgCAAQgWgEgKgGQgLgGgFgJIAAAAQgKADgEADgAk9ARIAGACQAJADAFAAIAOACQAJABAGACQAJADAGALIAAgBIABgEQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADgIQAJgDARgKQAKgIAJgCIgPgGQgGgDgSgHIgJgEQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAABQgDADgIACIgLAEIgFAEQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgDACIgFABIgEAAQgFACAAAHQgHADgHgCIgDgDIABAEgAolgsIAAACQgLAKgRALQAFAFACAIIADAIQACACAHACIAMADIAMAIQAHAFAFAAQAJAAAHgKIAGgIIAGgFIAEgCQgEgFgDgHIgPgjQADgDAFADQACABADAGIARAkQASgCAPAJQAIAEAFAAQAHABAPgKQAKgIAOgCIgBgBIgBgMIgCgHQgBgDACgHIgBgKQAAgGABgDIAEgHIAAgCIgCgBQAAAEgHgBQgPAAgQgCIgCAAIAAAAQgMgCgTAEQgHABgCACIgFAHQgCADgPAEIgHACIgDgBQgHADgJgDQgMgDgDADQgGAIgFgBQAAAEgEAAgAl8g9IgEAMQAAAFACAIIAEAMIABAGIAEADIAGAEIAJABQAIAAAQAIIAJAFQADADADAHIACgFQALgRALgCIAAgGQADAAAEgEQAFgFACgBIAHgBIAJgEIAGgBIgBgJIAAgWIgCgKIgBgKIgMgBQgHgCgSAAQgRgBgJgCQgKgDgFgFIgCACIgJAFIgWAIIgDACIAEAIIgCADIgGgCQABAFAAAGgAkChUQAJAQAAAQIAAAOIABAJQAPAEAOAHQAJAGAHABQALADAEgHIAFgJIAIgFQADAAAJgIQAMgIAHAAIAGAAIgBgMIABgbIg7gFIgPgCIgKgEIAAACQgJAEgQgBQgDAFgIABgAFggOQAIADAFgBIADgFIgEAAQgJABgJgEIgIgEQAHAGAHAEgAHKgtIgDAFQgHAFgBADIgEAJQgCAFgDACIAFgBQAIgCAFgGIAFgIQAEgFADgCQAEgCAIAAIACAAIgEgFIgJgIQgIAEgDAGgAAYhpIgEADIgCAAQACAEgBAEIgEAGQgCADAAAGIAAAFIABAAIADACIADAGIAAAFQAGAIAFAGQAMALAPAHIAQAIQAJADACgBQAFgBAEgHIAEgLQAEgLANgDQAKgCAMAEIAaAQQASAKALgEQgDgGAJgGIALgJQAMAFAKABQAEABAEgCQAEgCAAgGIgBgLIABgQIALgoIgOgDQgMgEgEgKIg2ABQAAACgIABIgJAHQgEAEgJADIgQAGIAAACQgMAHgVgDQgdgDgFABIgRACIgIgBQgGAAgCACgAh8hVIgBAAIAAABIgCAGQgBACABAGQACASgBAPIAAACIAAAFQAIAFAKAEQASAGAJgIIAIgHQAMgNAUgEQAOgEAWACQAFAAAEABIACgCQgEgHAAgJIAAgUIAAgIIACgEQgOABgqAGQgmAFgWgEIgFgBQgDAEgEACgAGGggIgGAGQAHgBAOABIABAAIgHgIIgCgCIgHAEgAGSg1QAFAEABAFIAHACQAFACABAEIAFgCQAGgMAQgRQAGgGADAAQAGgBAEAFIAEACIAPAKQAMAHADADIAHAGQgCgFABgEQABgHAGgBIAJgPQAHAAAMgOQAJgHALACQAIABALAJIAGAFIAGgHQAFgGABgEIADgIQADgGADACIAMgaIgJgKQgMgOgVgEQgSgDgVAFQgNAEgcANQgIADgBgBIgCAAIgBABIgOAAIgCAAIgCgCQgXgGgMgCQgYgEgNAIQgLAKgHAEQgLAFgSgEQgZgGgHABQgOABgTALQgMAHAEAHQgEgBgCgEIgDADIgCADIgEARQgHAeAAALIAAACIAAAAIANAAIAFABQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAKACQAGgKALgKQAHgFAFAAQAFAAAFAHIAIAMQAGAIAKABQAKACAJgFIAKgKQAIgGAFgBIACAAQAGAAAFAFgAKEggIABgDIAAADgAlfhyIABAAIABAAIAAABIgCgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ApOCcIgJgGIAAAAIgIgFIgBABIgBgBIgMgMIgEgFIgBgHIgBgDIgCgHIABgBQgDgFAEgDIAEgEQADgDAKAAQARAAAWAEQAJACAEACQADACAHAJQAOAUAVAEIAFAEIgCgBIAAABQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEAFQgGAKgLACQgGAAABADIgaABIgEAAQgNAAgIgGgAn4CQIAEAAIgKgMIAAgBQgBgDgDgCIgRgWQAXgaAggZQAFAHARADQASAEAGAEQAEAEAEAIIAGAOQAIATANgBIgBgCIAGAFIABACIgEADQgGALgFACIgJACIgLAGQgHADgKACIgUABQgWAAgVgGgAlrB7IgBgHIgFgOIgEgJIgMgYQgFABAAAHIACAJIACAKIgGgPQgCgHABgCQACgDAHgBQAIgDAKgKIAMgFQAGgCADgDIAGgHQAEgCAIgDQAEgDABgDIAFAAIABgBQACADAEADQAIAFAKACIAaAFQAIACADAEQAEAEAAAJIgBAPQAAAJAFAIIACADIAAABIgBAHQgCADgGAAIgKABQABAEgEAEIgJACQgRABgLgCIgOgCIgIACIgHAEQgJADgHAAQgIAAgGgDgAi3ByQgVgDgJgDQgLgDgJgEIAAgFQAAgMgDgHIgBgGIgDgLIABAAIABgCIABACQADgGgEgDIAAgDQAEgFAMgGIASgJQAJgFAGgBQANgEAPACQAPADAKAKQAKAIABAIQABAEAAAGIgBAKQABAGACAEIAAADIgCAEIgBAMIgDAGQgIgEgHACIgLAGQgIAFgEABIgGAAIgLAAgAgBBvIgPgGQgJgFgGAEIgFAEQgEADgHAAIgMAAQgBgIgOgHIgMgDQgGgBgJACIgLAEIACgFIABgHIgBgOIACgQQAAgNAFgEQAFgDAKgEQAFgCAJgNQAHgKAIAAQAEABAIAGQATAOAYgDIAQgFQALgDAHAAQALAAALAIQAJAHAFALIAFAUQAAAIACAEQAAAIgCAEQgBADgGAFQgHAFgGACQgFADgJgBIgPAAIgJABIgFAEIgIACIgBAAgAB4BmIgHgEQgIAAgEgCIgFgFIAAgDIgBgCIgBgCIgDAAIgBAAIgDgJIgDgJIgCgEIgBgEIABgLIABgKIAFgFQAHgJADAAQACgBAIAAQAKgCAHgGIALgBQABgDAGgCQAHgBgCgFIAJgEQAEgBAEADIAHAFIAKACQAVACAUgEIAAgDIAMABQAFACAFAFIAPAQQADADACAHIAHAWQAEAJAFACIACACIgGAHQgCAEgDABIgHAAIgKAEQgKAEgQgBIgRgBQgQgFgJAAQgGAAgGADQgGADgCAGQgDgBgEADIgHAEIgaACQgFAAgCgCgAErBCQgBgFgEgEQgBgBAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAABIgCgNQgCgPAAgIQAFABAHgFIALgIIAIgDQACgBABgEIADgGQACABAEgDQAEgEACAAQACgBAGAEIAKAJQAFAEAEABQAGACAMAAQAGgKAHgDIAJgBIAUABIAOAGQAQAGAQgIIAFgHIAJgLIALgDIAHAAQADABAEADQAIAFAUgCQAFgGgCgIQgBgIgHgEIAGgHIANgLQAPgLAJAAQAEAAACACIAGAFQADADAGACQAEACADAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAIAGADIAJACQAFADADADIADAGIgGADIg+AjQgNAFgVAKQgPAGgHACQgXgBgLAEQgEABgGAFIgKAFIgXAEIgYAJIgVAEIgWADQgYAKgNADQgGABgIAAIgMgBgAoRAQIgMgJIgMgCQgHgCgCgDIgDgIQgCgHgFgFQARgLALgKIAAgDQAEAAAAgEQAFABAGgIQADgCAMADQAJACAHgCIADAAIAHgCQAPgEACgDIAFgGQACgDAHgBQATgEAMADIAAgBIACABQAQACAPAAQAHABAAgEIACABIAAACIgEAGQgBAEAAAGIABAJQgCAIABADIACAGIABANIABABQgOACgKAIQgPAKgHgBQgFgBgIgEQgPgJgSACIgRgkQgDgFgCgBQgFgEgDAEIAPAjQADAHAEAFIgEACIgGAFIgGAIQgHAKgJAAQgFAAgHgFgAlAAEIgJgFQgQgIgIAAIgJgBIgGgEIgEgEIgBgGIgEgMQgCgIAAgEIAEgNQAAgGgBgEIAGACIACgDIgEgIIADgDIAWgHIAJgGIACgCQAFAGAKACQAJADARAAQASABAHABIAMABIABAKIACALIAAAVIABAJIgGACIgJAEIgHABQgCABgFAFQgEADgDABIAAAFQgLADgLARIgCAEQgDgGgDgDgAjGgKQgHgBgJgGQgOgHgPgEIgBgJIAAgOQAAgRgJgPQAIgBADgGQAQABAJgDIAAgDIAKAEIAPACIA7AGIgBAaIABANIgGgBQgHAAgMAJQgJAHgDABIgIAEIgFAJQgDAFgHAAIgFAAgABPgUIgQgIQgPgHgMgMQgFgFgGgJIAAgEIgDgGIgDgDIgBAAIAAgEQAAgHACgDIAEgGQABgEgCgDIACgBIAEgDQACgCAGAAIAIABIARgCQAFAAAdADQAVACAMgHIAAgCIAQgGQAJgDAEgEIAJgGQAIgBAAgDIA2AAQAEAJAMAEIAOADIgLAoIgBAQIABALQAAAHgEACQgEACgEgBQgKgBgMgFIgLAJQgJAGADAGQgLADgSgJIgagRQgMgEgKADQgNADgEAKIgEAMQgEAHgFABIgBAAIgKgCgAhngVQgKgDgIgGIAAgFIAAgBQABgPgCgSQgBgGABgDIACgGIAAAAIABgBQAEgCADgDIAFABQAWADAmgFQAqgGAOgBIgCAEIAAAIIAAAUQAAAKAEAHIgCACQgEgCgFAAQgWgBgOADQgUAFgMAMIgIAIQgFAEgIAAQgGAAgIgDgAGkgpIgHgCQgBgFgFgFQgGgFgHABQgFABgIAGIgKAJQgJAFgKgBQgKgBgGgIIgIgNQgFgGgFgBQgFAAgHAGQgLAKgGAKIgKgCQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgNAAIAAAAIAAgBQAAgMAHgeIAEgQIACgDIADgDQACADAEABQgEgGAMgIQATgLAOgBQAHAAAZAFQASAEALgFQAHgEALgJQANgJAYAFQAMABAXAHIACABIACABIAOAAIABgBIACAAQABAAAIgDQAcgNANgDQAVgGASAEQAVADAMAOIAJALIgMAaQgDgCgDAFIgDAJQgBADgFAGIgGAHIgGgEQgLgJgIgCQgLgBgJAGQgMAOgHABIgJAPQgGABgBAGQgBAFACAFIgHgGQgDgEgMgHIgPgKIgEgCQgEgFgGABQgDAAgGAGQgQARgGANIgFABQgBgDgFgCg");
	this.shape_2.setTransform(-0.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ao+C0QgKgBgIgGQgJgFgIgJIgFACQgFgFgIgFIgFgFIAEAAIADABIgNgRQgEgFAAgDIAAgJIgDgKQgBgGAEgDQgBgIAFgEIAGgCIAHgBQAUAAAYADQAPADAFADQAGAEAJANQgDgFAAgGQAAgJASgQQAQgOAKgLQAGgHAEgCQAGgBAHADIAMAHQAFACAOABQALACAGAEQAFAEAGALIACAEQAFgBAEAHIAKANQgFgKgCgNQgCgHACgDQACgEAGgEIA1gfQAFgEABgDQAHAAAEAFIABAAIgCgBIgKgIQgDgBgIgBQgIgBgEgCQgDgBgDgCIgCgDQgEADgKACQgDAAgUAMQgPAJgLgEIgIgGIgJgFIgLgBIgKgBIgGgCIAAABIgGAGIgJAOQgGAHgFACQgJAEgSgLQgIgFgMgEQgOgEgGgFQgDgEgEgJIgEgOIgEABQgEgBgBgFIAAgEIABgEQADgFALgFQAEgDAHgGIAKgKIAJgHIAFgFQADgBAHABIAZAFIACAAQABAAAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIAIgDQAFAAACgCQADgDAFgGIAPgBQAQgBAhABQAdgBASgMIANgLIAEgDIAFABIACACIABgBQABgBAGABQAMAFAVAAQAZgBAJABIAJADIAAAAIAVgCIAFgCIAGgFQAFACAGAAIAAADIAMABQALACAjABQAaABAPAGIAAgBQAZAAAigIIAagFQANgCAXACQAGAAACABIADACIgBgBQAFgIAQgEIARgEQAGAAAYACQATACAKgFIAVgLIAJgDIAQgJQAIgEATAAIAdABQAHAAAEACQAFACAHAHIARAHIAGAEIAAgBIADgBQACADABAFIABgBIACgDQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQACgGAHgFQAQgPAYACIAWADQANADAIgDQAGgBAHgFIAMgIQARgJAZAEQAQACAbALQAJACABAFIADAAIADgEQAegTATgHQAegKAYALQAMAFAUAVIAEAEIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIADAFQAEAGAGAEIgFAAIAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABIgCACIgBAEIgIAUQgGAOgHABQACAHgGAFIABAAIAMALIAFAEQAEACAJABQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAIABAAQgCAHABALQgDADgBACIgpAXIgXAJQgLADgFAHIgeAQQgSAJgLACQgOgBgHACQgGABgMAHQgKAFgVAFQgbAJgQACIgaAEIgYAJQgPAFgQgDIgOgDQAAAEgDAEIgCACQABACgFAEQgFADABADIgXAFQACACgFAAIgiAAIgMgBIgJgDQgPgGgIAJIgEAEQgCACgEABQgIAEgEAAIgiAAIgUgJQgKgHgFgIIgCgBIgCAAIAAABQgBAHgCACIgFAEIgFADIgHAIIgKABIgSgBQgKgCgGADIgIAFIgHABQgJgBgFgDIgLgFQgDABgGAIIgSAAQgNAAgFgFIgGgHQgIgHgPAAIgWAAIgBAEIgEAFIgBABQACAGgEADQgDADgFACIgDABIgGgCIgLAAIgLABIgXABIABgCQgcgFgUgLIgDgBIAAADQAAAHgDADQgCACgGAAIgJABQAAAFgFACIgIABIgXgBIgTgBIgTAHQgMAEgMgDQgNgDgJgIIgNAMQgNAMgIgCQgCADgFACQgNAGgagCQgZgBgMgDIgJgDQACAEgBAFQgBAHgIAEQgLAIgdAAQgSgBgEgCgApcCVIAAABIAJAFQAJAHAQgBIAaAAQgBgEAGAAQALgCAGgKIAEgEQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABIAAgBIACABIgFgEQgVgFgOgTQgHgJgDgCQgEgDgJgBQgWgEgRAAQgKAAgDADIgEADQgEAEADAFIgBAAIACAHIABAEIABAGIAEAGIAMAMIABAAIABAAgAm+CUQAKgBAHgEIALgGIAJgBQAFgCAGgLIAEgEIgBgBIgGgGIABADQgNAAgIgSIgGgOQgEgIgEgEQgGgEgSgEQgRgDgFgIQggAagXAZIARAXQADACABACIAAABIAKAMIgEAAQAgAKAfgFgAl6BdIAEAIIAFAOIABAHQANAIARgIIAHgDIAIgDIAOACQALADARgCIAJgBQAEgEgBgEIAKgBQAGAAACgDIABgHIAAgCIgCgDQgFgHAAgKIABgPQAAgJgEgEQgDgDgIgDIgagFQgKgBgIgGQgEgCgCgEIgBABIgFAAQgBAEgEACQgIADgEADIgGAGQgDADgGADIgMAFQgKAKgIACQgHABgCADQgBADACAGIAGAPIgCgJIgCgJQAAgHAFgBIAMAYgAj0A7IgBABIADAKIABAHQADAGAAAMIAAAFQAJAFALADQAJACAVADQANACAEgCQAEgBAIgFIALgGQAHgBAIAEIADgHIABgMIACgDIAAgDQgCgEgBgGIABgLQAAgGgBgEQgBgHgKgJQgKgJgPgDQgPgDgNAFQgGABgJAFIgSAIQgMAHgEAFIAAACQAEADgDAGIgBgBIgBABgAgVBoIAPAGQAEABAFgCIAFgEIAJgCIAPABQAJAAAFgCQAGgCAHgGQAGgFABgDQACgDAAgIQgCgFAAgIIgFgUQgFgLgJgHQgLgHgLAAQgHAAgLADIgQAEQgYADgTgOQgIgGgEAAQgIgBgHAKQgJANgFADQgKADgFADQgFAFAAAMIgCAQIABAPIgBAGIgCAFIALgDQAJgCAGAAIAMAEQAOAHABAHIAMAAQAHABAEgDIAFgEQADgCAEAAQAEAAAEACgACYgDIgJAFQACAFgHABQgGACgBACIgLACQgHAGgKABQgIAAgCABQgDABgHAIIgFAGIgBAJIgBAMIABADIACAEIADAKIADAIIABAAIADABIABACIABACIAAADIAFAEQAEADAIAAIAHAEQACABAFAAIAagCIAHgDQAEgDADAAQACgFAGgEQAGgDAGABQAJAAAQAFIARAAQAQACAKgFIAKgDIAHgBQADAAACgEIAGgIIgCgCQgFgBgEgJIgHgXQgCgHgDgDIgPgPQgFgFgFgDIgMAAIAAADQgUADgVgBIgKgDIgHgEQgEgDgDAAIgBAAgAEhA4QAEAFABAFQAPACALgDQANgCAYgKIAWgEIAVgEIAYgJIAXgEIAKgFQAGgEAEgBQALgFAXABQAHgBAPgHQAVgJANgGIA+giIAGgEIgDgFQgDgEgFgDIgJgCIgGgDQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDABgEgCQgGgCgDgDIgGgFQgCgCgEAAQgJgBgPALIgNAMIgGAHQAHAEABAIQACAHgFAGQgUACgIgFQgEgDgDAAIgHAAIgLADIgJAKIgFAIQgQAHgQgFIgOgHIgUgBIgJACQgHACgGAKQgMAAgGgCQgEgBgFgDIgKgJQgGgFgCABQgCAAgEAEQgEADgCgBIgDAHQgBAEgCABIgIADIgLAHQgHAFgFAAQAAAHACAQIACAMIAAAAIACgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAgADfgOIAGABQAEABAGAHQAGAFADACIAHACQAIADADAKIAEASIAGARIACALIADABIABgCQgCgCgBgDIgFgTQgFgUACgLQANgLAQgHQAFgSASgEQADgBADACQgFgGgEgIIgFAAIgQARQgFAFgDABQgEAAgGgCIgOgMIgMABIgCAAQgBAIgCADIgjgEIAAADQgGAAgEAFQgEAFACAFQgWACgNgHIgSgNQgKgHgKAAQgNAAgGAKQgDARgHAFQgGAEgMgDIgQgGIgMgFQgJgFgOgNQgKgJgDgGIgBgCIgBACIgDAEIgCACIgCACQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAIgFADQgEABgMABQgSACgQAIQgIADgDAFIgFAHIACACIAPAIQAOAIAdgGQAdgEAMACQASAHAMAUQAAgGABgBQACgFAIgEIAGgIQACgBAFAAQAJgCAUgFQAKgDAEgFIAGgGQAEgDADgBIAFABIASAJQAIAEAMgBIATgDIAAgDgAiVgVIgOALIgJAFIgFAHIADAAQALACAKAEQAVAKAKAWIABABQAAgFABgEIAIgJIAbgZIgCAAQgWgEgKgGQgLgGgFgJIAAAAQgKADgEADgAk9ARIAGACQAJADAFAAIAOACQAJABAGACQAJADAGALIAAgBIABgEQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADgIQAJgDARgKQAKgIAJgCIgPgGQgGgDgSgHIgJgEQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAABQgDADgIACIgLAEIgFAEQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgDACIgFABIgEAAQgFACAAAHQgHADgHgCIgDgDIABAEgAolgsIAAACQgLAKgRALQAFAFACAIIADAIQACACAHACIAMADIAMAIQAHAFAFAAQAJAAAHgKIAGgIIAGgFIAEgCQgEgFgDgHIgPgjQADgDAFADQACABADAGIARAkQASgCAPAJQAIAEAFAAQAHABAPgKQAKgIAOgCIgBgBIgBgMIgCgHQgBgDACgHIgBgKQAAgGABgDIAEgHIAAgCIgCgBQAAAEgHgBQgPAAgQgCIgCAAIAAAAQgMgCgTAEQgHABgCACIgFAHQgCADgPAEIgHACIgDgBQgHADgJgDQgMgDgDADQgGAIgFgBQAAAEgEAAgAl8g9IgEAMQAAAFACAIIAEAMIABAGIAEADIAGAEIAJABQAIAAAQAIIAJAFQADADADAHIACgFQALgRALgCIAAgGQADAAAEgEQAFgFACgBIAHgBIAJgEIAGgBIgBgJIAAgWIgCgKIgBgKIgMgBQgHgCgSAAQgRgBgJgCQgKgDgFgFIgCACIgJAFIgWAIIgDACIAEAIIgCADIgGgCQABAFAAAGgAkChUQAJAQAAAQIAAAOIABAJQAPAEAOAHQAJAGAHABQALADAEgHIAFgJIAIgFQADAAAJgIQAMgIAHAAIAGAAIgBgMIABgbIg7gFIgPgCIgKgEIAAACQgJAEgQgBQgDAFgIABgAFggOQAIADAFgBIADgFIgEAAQgJABgJgEIgIgEQAHAGAHAEgAHKgtIgDAFQgHAFgBADIgEAJQgCAFgDACIAFgBQAIgCAFgGIAFgIQAEgFADgCQAEgCAIAAIACAAIgEgFIgJgIQgIAEgDAGgAAYhpIgEADIgCAAQACAEgBAEIgEAGQgCADAAAGIAAAFIABAAIADACIADAGIAAAFQAGAIAFAGQAMALAPAHIAQAIQAJADACgBQAFgBAEgHIAEgLQAEgLANgDQAKgCAMAEIAaAQQASAKALgEQgDgGAJgGIALgJQAMAFAKABQAEABAEgCQAEgCAAgGIgBgLIABgQIALgoIgOgDQgMgEgEgKIg2ABQAAACgIABIgJAHQgEAEgJADIgQAGIAAACQgMAHgVgDQgdgDgFABIgRACIgIgBQgGAAgCACgAh8hVIgBAAIAAABIgCAGQgBACABAGQACASgBAPIAAACIAAAFQAIAFAKAEQASAGAJgIIAIgHQAMgNAUgEQAOgEAWACQAFAAAEABIACgCQgEgHAAgJIAAgUIAAgIIACgEQgOABgqAGQgmAFgWgEIgFgBQgDAEgEACgAGGggIgGAGQAHgBAOABIABAAIgHgIIgCgCIgHAEgAGSg1QAFAEABAFIAHACQAFACABAEIAFgCQAGgMAQgRQAGgGADAAQAGgBAEAFIAEACIAPAKQAMAHADADIAHAGQgCgFABgEQABgHAGgBIAJgPQAHAAAMgOQAJgHALACQAIABALAJIAGAFIAGgHQAFgGABgEIADgIQADgGADACIAMgaIgJgKQgMgOgVgEQgSgDgVAFQgNAEgcANQgIADgBgBIgCAAIgBABIgOAAIgCAAIgCgCQgXgGgMgCQgYgEgNAIQgLAKgHAEQgLAFgSgEQgZgGgHABQgOABgTALQgMAHAEAHQgEgBgCgEIgDADIgCADIgEARQgHAeAAALIAAACIAAAAIANAAIAFABQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAKACQAGgKALgKQAHgFAFAAQAFAAAFAHIAIAMQAGAIAKABQAKACAJgFIAKgKQAIgGAFgBIACAAQAGAAAFAFgAKEggIABgDIAAADgAlfhyIABAAIABAAIAAABIgCgBg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A844B").s().p("ApOCcIgJgGIAAAAIgIgFIgBABIgBgBIgMgMIgEgFIgBgHIgBgDIgCgHIABgBQgDgFAEgDIAEgEQADgDAKAAQARAAAWAEQAJACAEACQADACAHAJQAOAUAVAEIAFAEIgCgBIAAABQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEAFQgGAKgLACQgGAAABADIgaABIgEAAQgNAAgIgGgAn4CQIAEAAIgKgMIAAgBQgBgDgDgCIgRgWQAXgaAggZQAFAHARADQASAEAGAEQAEAEAEAIIAGAOQAIATANgBIgBgCIAGAFIABACIgEADQgGALgFACIgJACIgLAGQgHADgKACIgUABQgWAAgVgGgAlrB7IgBgHIgFgOIgEgJIgMgYQgFABAAAHIACAJIACAKIgGgPQgCgHABgCQACgDAHgBQAIgDAKgKIAMgFQAGgCADgDIAGgHQAEgCAIgDQAEgDABgDIAFAAIABgBQACADAEADQAIAFAKACIAaAFQAIACADAEQAEAEAAAJIgBAPQAAAJAFAIIACADIAAABIgBAHQgCADgGAAIgKABQABAEgEAEIgJACQgRABgLgCIgOgCIgIACIgHAEQgJADgHAAQgIAAgGgDgAi3ByQgVgDgJgDQgLgDgJgEIAAgFQAAgMgDgHIgBgGIgDgLIABAAIABgCIABACQADgGgEgDIAAgDQAEgFAMgGIASgJQAJgFAGgBQANgEAPACQAPADAKAKQAKAIABAIQABAEAAAGIgBAKQABAGACAEIAAADIgCAEIgBAMIgDAGQgIgEgHACIgLAGQgIAFgEABIgGAAIgLAAgAgBBvIgPgGQgJgFgGAEIgFAEQgEADgHAAIgMAAQgBgIgOgHIgMgDQgGgBgJACIgLAEIACgFIABgHIgBgOIACgQQAAgNAFgEQAFgDAKgEQAFgCAJgNQAHgKAIAAQAEABAIAGQATAOAYgDIAQgFQALgDAHAAQALAAALAIQAJAHAFALIAFAUQAAAIACAEQAAAIgCAEQgBADgGAFQgHAFgGACQgFADgJgBIgPAAIgJABIgFAEIgIACIgBAAgAB4BmIgHgEQgIAAgEgCIgFgFIAAgDIgBgCIgBgCIgDAAIgBAAIgDgJIgDgJIgCgEIgBgEIABgLIABgKIAFgFQAHgJADAAQACgBAIAAQAKgCAHgGIALgBQABgDAGgCQAHgBgCgFIAJgEQAEgBAEADIAHAFIAKACQAVACAUgEIAAgDIAMABQAFACAFAFIAPAQQADADACAHIAHAWQAEAJAFACIACACIgGAHQgCAEgDABIgHAAIgKAEQgKAEgQgBIgRgBQgQgFgJAAQgGAAgGADQgGADgCAGQgDgBgEADIgHAEIgaACQgFAAgCgCgAErBCQgBgFgEgEQgBgBAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAABIgCgNQgCgPAAgIQAFABAHgFIALgIIAIgDQACgBABgEIADgGQACABAEgDQAEgEACAAQACgBAGAEIAKAJQAFAEAEABQAGACAMAAQAGgKAHgDIAJgBIAUABIAOAGQAQAGAQgIIAFgHIAJgLIALgDIAHAAQADABAEADQAIAFAUgCQAFgGgCgIQgBgIgHgEIAGgHIANgLQAPgLAJAAQAEAAACACIAGAFQADADAGACQAEACADAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAIAGADIAJACQAFADADADIADAGIgGADIg+AjQgNAFgVAKQgPAGgHACQgXgBgLAEQgEABgGAFIgKAFIgXAEIgYAJIgVAEIgWADQgYAKgNADQgGABgIAAIgMgBgAoRAQIgMgJIgMgCQgHgCgCgDIgDgIQgCgHgFgFQARgLALgKIAAgDQAEAAAAgEQAFABAGgIQADgCAMADQAJACAHgCIADAAIAHgCQAPgEACgDIAFgGQACgDAHgBQATgEAMADIAAgBIACABQAQACAPAAQAHABAAgEIACABIAAACIgEAGQgBAEAAAGIABAJQgCAIABADIACAGIABANIABABQgOACgKAIQgPAKgHgBQgFgBgIgEQgPgJgSACIgRgkQgDgFgCgBQgFgEgDAEIAPAjQADAHAEAFIgEACIgGAFIgGAIQgHAKgJAAQgFAAgHgFgAlAAEIgJgFQgQgIgIAAIgJgBIgGgEIgEgEIgBgGIgEgMQgCgIAAgEIAEgNQAAgGgBgEIAGACIACgDIgEgIIADgDIAWgHIAJgGIACgCQAFAGAKACQAJADARAAQASABAHABIAMABIABAKIACALIAAAVIABAJIgGACIgJAEIgHABQgCABgFAFQgEADgDABIAAAFQgLADgLARIgCAEQgDgGgDgDgAjGgKQgHgBgJgGQgOgHgPgEIgBgJIAAgOQAAgRgJgPQAIgBADgGQAQABAJgDIAAgDIAKAEIAPACIA7AGIgBAaIABANIgGgBQgHAAgMAJQgJAHgDABIgIAEIgFAJQgDAFgHAAIgFAAgABPgUIgQgIQgPgHgMgMQgFgFgGgJIAAgEIgDgGIgDgDIgBAAIAAgEQAAgHACgDIAEgGQABgEgCgDIACgBIAEgDQACgCAGAAIAIABIARgCQAFAAAdADQAVACAMgHIAAgCIAQgGQAJgDAEgEIAJgGQAIgBAAgDIA2AAQAEAJAMAEIAOADIgLAoIgBAQIABALQAAAHgEACQgEACgEgBQgKgBgMgFIgLAJQgJAGADAGQgLADgSgJIgagRQgMgEgKADQgNADgEAKIgEAMQgEAHgFABIgBAAIgKgCgAhngVQgKgDgIgGIAAgFIAAgBQABgPgCgSQgBgGABgDIACgGIAAAAIABgBQAEgCADgDIAFABQAWADAmgFQAqgGAOgBIgCAEIAAAIIAAAUQAAAKAEAHIgCACQgEgCgFAAQgWgBgOADQgUAFgMAMIgIAIQgFAEgIAAQgGAAgIgDgAGkgpIgHgCQgBgFgFgFQgGgFgHABQgFABgIAGIgKAJQgJAFgKgBQgKgBgGgIIgIgNQgFgGgFgBQgFAAgHAGQgLAKgGAKIgKgCQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgNAAIAAAAIAAgBQAAgMAHgeIAEgQIACgDIADgDQACADAEABQgEgGAMgIQATgLAOgBQAHAAAZAFQASAEALgFQAHgEALgJQANgJAYAFQAMABAXAHIACABIACABIAOAAIABgBIACAAQABAAAIgDQAcgNANgDQAVgGASAEQAVADAMAOIAJALIgMAaQgDgCgDAFIgDAJQgBADgFAGIgGAHIgGgEQgLgJgIgCQgLgBgJAGQgMAOgHABIgJAPQgGABgBAGQgBAFACAFIgHgGQgDgEgMgHIgPgKIgEgCQgEgFgGABQgDAAgGAGQgQARgGANIgFABQgBgDgFgCg");
	this.shape_4.setTransform(-0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE9752").s().p("ApOCcIgJgGIAAAAIgIgFIgBABIgBgBIgMgMIgEgFIgBgHIgBgDIgCgHIABgBQgDgFAEgDIAEgEQADgDAKAAQARAAAWAEQAJACAEACQADACAHAJQAOAUAVAEIAFAEIgCgBIAAABQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEAFQgGAKgLACQgGAAABADIgaABIgEAAQgNAAgIgGgAn4CQIAEAAIgKgMIAAgBQgBgDgDgCIgRgWQAXgaAggZQAFAHARADQASAEAGAEQAEAEAEAIIAGAOQAIATANgBIgBgCIAGAFIABACIgEADQgGALgFACIgJACIgLAGQgHADgKACIgUABQgWAAgVgGgAlrB7IgBgHIgFgOIgEgJIgMgYQgFABAAAHIACAJIACAKIgGgPQgCgHABgCQACgDAHgBQAIgDAKgKIAMgFQAGgCADgDIAGgHQAEgCAIgDQAEgDABgDIAFAAIABgBQACADAEADQAIAFAKACIAaAFQAIACADAEQAEAEAAAJIgBAPQAAAJAFAIIACADIAAABIgBAHQgCADgGAAIgKABQABAEgEAEIgJACQgRABgLgCIgOgCIgIACIgHAEQgJADgHAAQgIAAgGgDgAi3ByQgVgDgJgDQgLgDgJgEIAAgFQAAgMgDgHIgBgGIgDgLIABAAIABgCIABACQADgGgEgDIAAgDQAEgFAMgGIASgJQAJgFAGgBQANgEAPACQAPADAKAKQAKAIABAIQABAEAAAGIgBAKQABAGACAEIAAADIgCAEIgBAMIgDAGQgIgEgHACIgLAGQgIAFgEABIgGAAIgLAAgAgBBvIgPgGQgJgFgGAEIgFAEQgEADgHAAIgMAAQgBgIgOgHIgMgDQgGgBgJACIgLAEIACgFIABgHIgBgOIACgQQAAgNAFgEQAFgDAKgEQAFgCAJgNQAHgKAIAAQAEABAIAGQATAOAYgDIAQgFQALgDAHAAQALAAALAIQAJAHAFALIAFAUQAAAIACAEQAAAIgCAEQgBADgGAFQgHAFgGACQgFADgJgBIgPAAIgJABIgFAEIgIACIgBAAgAB4BmIgHgEQgIAAgEgCIgFgFIAAgDIgBgCIgBgCIgDAAIgBAAIgDgJIgDgJIgCgEIgBgEIABgLIABgKIAFgFQAHgJADAAQACgBAIAAQAKgCAHgGIALgBQABgDAGgCQAHgBgCgFIAJgEQAEgBAEADIAHAFIAKACQAVACAUgEIAAgDIAMABQAFACAFAFIAPAQQADADACAHIAHAWQAEAJAFACIACACIgGAHQgCAEgDABIgHAAIgKAEQgKAEgQgBIgRgBQgQgFgJAAQgGAAgGADQgGADgCAGQgDgBgEADIgHAEIgaACQgFAAgCgCgAErBCQgBgFgEgEQgBgBAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAABIgCgNQgCgPAAgIQAFABAHgFIALgIIAIgDQACgBABgEIADgGQACABAEgDQAEgEACAAQACgBAGAEIAKAJQAFAEAEABQAGACAMAAQAGgKAHgDIAJgBIAUABIAOAGQAQAGAQgIIAFgHIAJgLIALgDIAHAAIAHAEQAIAFAUgCQAFgGgCgIQgBgIgHgEIAGgHIANgLQAPgLAJAAQAEAAACACIAGAFQADADAGACQAEACADAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAIAGADIAJACQAFADADADIADAGIgGADIg+AjQgNAFgVAKQgPAGgHACQgXgBgLAEQgEABgGAFIgKAFIgXAEIgYAJIgVAEIgWADQgYAKgNADQgGABgIAAIgMgBgAoRAQIgMgJIgMgCQgHgCgCgDIgDgIQgCgHgFgFQARgLALgKIAAgDQAEAAAAgEQAFABAGgIQADgCAMADQAJACAHgCIADAAIAHgCQAPgEACgDIAFgGQACgDAHgBQATgEAMADIAAgBIACABQAQACAPAAQAHABAAgEIACABIAAACIgEAGQgBAEAAAGIABAJQgCAIABADIACAGIABANIABABQgOACgKAIQgPAKgHgBQgFgBgIgEQgPgJgSACIgRgkQgDgFgCgBQgFgEgDAEIAPAjQADAHAEAFIgEACIgGAFIgGAIQgHAKgJAAQgFAAgHgFgAlAAEIgJgFQgQgIgIAAIgJgBIgGgEIgEgEIgBgGIgEgMQgCgIAAgEIAEgNQAAgGgBgEIAGACIACgDIgEgIIADgDIAWgHIAJgGIACgCQAFAGAKACQAJADARAAQASABAHABIAMABIABAKIACALIAAAVIABAJIgGACIgJAEIgHABQgCABgFAFQgEADgDABIAAAFQgLADgLARIgCAEQgDgGgDgDgAjGgKQgHgBgJgGQgOgHgPgEIgBgJIAAgOQAAgRgJgPQAIgBADgGQAQABAJgDIAAgDIAKAEIAPACIA7AGIgBAaIABANIgGgBQgHAAgMAJQgJAHgDABIgIAEIgFAJQgDAFgHAAIgFAAgABPgUIgQgIQgPgHgMgMQgFgFgGgJIAAgEIgDgGIgDgDIgBAAIAAgEQAAgHACgDIAEgGQABgEgCgDIACgBIAEgDQACgCAGAAIAIABIARgCQAFAAAdADQAVACAMgHIAAgCIAQgGQAJgDAEgEIAJgGQAIgBAAgDIA2AAQAEAJAMAEIAOADIgLAoIgBAQIABALQAAAHgEACQgEACgEgBQgKgBgMgFIgLAJQgJAGADAGQgLADgSgJIgagRQgMgEgKADQgNADgEAKIgEAMQgEAHgFABIgBAAIgKgCgAhngVQgKgDgIgGIAAgFIAAgBQABgPgCgSQgBgGABgDIACgGIAAAAIABgBQAEgCADgDIAFABQAWADAmgFQAqgGAOgBIgCAEIAAAIIAAAUQAAAKAEAHIgCACQgEgCgFAAQgWgBgOADQgUAFgMAMIgIAIQgFAEgIAAQgGAAgIgDgAGkgpIgHgCQgBgFgFgFQgGgFgHABQgFABgIAGIgKAJQgJAFgKgBQgKgBgGgIIgIgNQgFgGgFgBQgFAAgHAGQgLAKgGAKIgKgCQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgNAAIAAAAIAAgBQAAgMAHgeIAEgQIACgDIADgDQACADAEABQgEgGAMgIQATgLAOgBQAHAAAZAFQASAEALgFQAHgEALgJQANgJAYAFQAMABAXAHIACABIACABIAOAAIABgBIACAAQABAAAIgDQAcgNANgDQAVgGASAEQAVADAMAOIAJALIgMAaQgDgCgDAFIgDAJQgBADgFAGIgGAHIgGgEQgLgJgIgCQgLgBgJAGQgMAOgHABIgJAPQgGABgBAGQgBAFACAFIgHgGQgDgEgMgHIgPgKIgEgCQgEgFgGABQgDAAgGAGQgQARgGANIgFABQgBgDgFgCg");
	this.shape_5.setTransform(-0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#964675").s().p("ApOCcIgJgGIAAAAIgIgFIgBABIgBgBIgMgMIgEgFIgBgHIgBgDIgCgHIABgBQgDgFAEgDIAEgEQADgDAKAAQARAAAWAEQAJACAEACQADACAHAJQAOAUAVAEIAFAEIgCgBIAAABQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEAFQgGAKgLACQgGAAABADIgaABIgEAAQgNAAgIgGgAn4CQIAEAAIgKgMIAAgBQgBgDgDgCIgRgWQAXgaAggZQAFAHARADQASAEAGAEQAEAEAEAIIAGAOQAIATANgBIgBgCIAGAFIABACIgEADQgGALgFACIgJACIgLAGQgHADgKACIgUABQgWAAgVgGgAlrB7IgBgHIgFgOIgEgJIgMgYQgFABAAAHIACAJIACAKIgGgPQgCgHABgCQACgDAHgBQAIgDAKgKIAMgFQAGgCADgDIAGgHQAEgCAIgDQAEgDABgDIAFAAIABgBQACADAEADQAIAFAKACIAaAFQAIACADAEQAEAEAAAJIgBAPQAAAJAFAIIACADIAAABIgBAHQgCADgGAAIgKABQABAEgEAEIgJACQgRABgLgCIgOgCIgIACIgHAEQgJADgHAAQgIAAgGgDgAi3ByQgVgDgJgDQgLgDgJgEIAAgFQAAgMgDgHIgBgGIgDgLIABAAIABgCIABACQADgGgEgDIAAgDQAEgFAMgGIASgJQAJgFAGgBQANgEAPACQAPADAKAKQAKAIABAIQABAEAAAGIgBAKQABAGACAEIAAADIgCAEIgBAMIgDAGQgIgEgHACIgLAGQgIAFgEABIgGAAIgLAAgAgBBvIgPgGQgJgFgGAEIgFAEQgEADgHAAIgMAAQgBgIgOgHIgMgDQgGgBgJACIgLAEIACgFIABgHIgBgOIACgQQAAgNAFgEQAFgDAKgEQAFgCAJgNQAHgKAIAAQAEABAIAGQATAOAYgDIAQgFQALgDAHAAQALAAALAIQAJAHAFALIAFAUQAAAIACAEQAAAIgCAEQgBADgGAFQgHAFgGACQgFADgJgBIgPAAIgJABIgFAEIgIACIgBAAgAB4BmIgHgEQgIAAgEgCIgFgFIAAgDIgBgCIgBgCIgDAAIgBAAIgDgJIgDgJIgCgEIgBgEIABgLIABgKIAFgFQAHgJADAAQACgBAIAAQAKgCAHgGIALgBQABgDAGgCQAHgBgCgFIAJgEQAEgBAEADIAHAFIAKACQAVACAUgEIAAgDIAMABQAFACAFAFIAPAQQADADACAHIAHAWQAEAJAFACIACACIgGAHQgCAEgDABIgHAAIgKAEQgKAEgQgBIgRgBQgQgFgJAAQgGAAgGADQgGADgCAGQgDgBgEADIgHAEIgaACQgFAAgCgCgAErBCQgBgFgEgEQgBgBAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAABIgCgNQgCgPAAgIQAFABAHgFIALgIIAIgDQACgBABgEIADgGQACABAEgDQAEgEACAAQACgBAGAEIAKAJQAFAEAEABQAGACAMAAQAGgKAHgDIAJgBIAUABIAOAGQAQAGAQgIIAFgHIAJgLIALgDIAHAAQADABAEADQAIAFAUgCQAFgGgCgIQgBgIgHgEIAGgHIANgLQAPgLAJAAQAEAAACACIAGAFQADADAGACQAEACADAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAIAGADIAJACQAFADADADIADAGIgGADIg+AjQgNAFgVAKQgPAGgHACQgXgBgLAEQgEABgGAFIgKAFIgXAEIgYAJIgVAEIgWADQgYAKgNADQgGABgIAAIgMgBgAoRAQIgMgJIgMgCQgHgCgCgDIgDgIQgCgHgFgFQARgLALgKIAAgDQAEAAAAgEQAFABAGgIQADgCAMADQAJACAHgCIADAAIAHgCQAPgEACgDIAFgGQACgDAHgBQATgEAMADIAAgBIACABQAQACAPAAQAHABAAgEIACABIAAACIgEAGQgBAEAAAGIABAJQgCAIABADIACAGIABANIABABQgOACgKAIQgPAKgHgBQgFgBgIgEQgPgJgSACIgRgkQgDgFgCgBQgFgEgDAEIAPAjQADAHAEAFIgEACIgGAFIgGAIQgHAKgJAAQgFAAgHgFgAlAAEIgJgFQgQgIgIAAIgJgBIgGgEIgEgEIgBgGIgEgMQgCgIAAgEIAEgNQAAgGgBgEIAGACIACgDIgEgIIADgDIAWgHIAJgGIACgCQAFAGAKACQAJADARAAQASABAHABIAMABIABAKIACALIAAAVIABAJIgGACIgJAEIgHABQgCABgFAFQgEADgDABIAAAFQgLADgLARIgCAEQgDgGgDgDgAjGgKQgHgBgJgGQgOgHgPgEIgBgJIAAgOQAAgRgJgPQAIgBADgGQAQABAJgDIAAgDIAKAEIAPACIA7AGIgBAaIABANIgGgBQgHAAgMAJQgJAHgDABIgIAEIgFAJQgDAFgHAAIgFAAgABPgUIgQgIQgPgHgMgMQgFgFgGgJIAAgEIgDgGIgDgDIgBAAIAAgEQAAgHACgDIAEgGQABgEgCgDIACgBIAEgDQACgCAGAAIAIABIARgCQAFAAAdADQAVACAMgHIAAgCIAQgGQAJgDAEgEIAJgGQAIgBAAgDIA2AAQAEAJAMAEIAOADIgLAoIgBAQIABALQAAAHgEACQgEACgEgBQgKgBgMgFIgLAJQgJAGADAGQgLADgSgJIgagRQgMgEgKADQgNADgEAKIgEAMQgEAHgFABIgBAAIgKgCgAhngVQgKgDgIgGIAAgFIAAgBQABgPgCgSQgBgGABgDIACgGIAAAAIABgBQAEgCADgDIAFABQAWADAmgFQAqgGAOgBIgCAEIAAAIIAAAUQAAAKAEAHIgCACQgEgCgFAAQgWgBgOADQgUAFgMAMIgIAIQgFAEgIAAQgGAAgIgDgAGkgpIgHgCQgBgFgFgFQgGgFgHABQgFABgIAGIgKAJQgJAFgKgBQgKgBgGgIIgIgNQgFgGgFgBQgFAAgHAGQgLAKgGAKIgKgCQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgNAAIAAAAIAAgBQAAgMAHgeIAEgQIACgDIADgDQACADAEABQgEgGAMgIQATgLAOgBQAHAAAZAFQASAEALgFQAHgEALgJQANgJAYAFQAMABAXAHIACABIACABIAOAAIABgBIACAAQABAAAIgDQAcgNANgDQAVgGASAEQAVADAMAOIAJALIgMAaQgDgCgDAFIgDAJQgBADgFAGIgGAHIgGgEQgLgJgIgCQgLgBgJAGQgMAOgHABIgJAPQgGABgBAGQgBAFACAFIgHgGQgDgEgMgHIgPgKIgEgCQgEgFgGABQgDAAgGAGQgQARgGANIgFABQgBgDgFgCg");
	this.shape_6.setTransform(-0.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0692E2").s().p("ApOCcIgJgGIAAAAIgIgFIgBABIgBgBIgMgMIgEgFIgBgHIgBgDIgCgHIABgBQgDgFAEgDIAEgEQADgDAKAAQARAAAWAEQAJACAEACQADACAHAJQAOAUAVAEIAFAEIgCgBIAAABQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEAFQgGAKgLACQgGAAABADIgaABIgEAAQgNAAgIgGgAn4CQIAEAAIgKgMIAAgBQgBgDgDgCIgRgWQAXgaAggZQAFAHARADQASAEAGAEQAEAEAEAIIAGAOQAIATANgBIgBgCIAGAFIABACIgEADQgGALgFACIgJACIgLAGQgHADgKACIgUABQgWAAgVgGgAlrB7IgBgHIgFgOIgEgJIgMgYQgFABAAAHIACAJIACAKIgGgPQgCgHABgCQACgDAHgBQAIgDAKgKIAMgFQAGgCADgDIAGgHQAEgCAIgDQAEgDABgDIAFAAIABgBQACADAEADQAIAFAKACIAaAFQAIACADAEQAEAEAAAJIgBAPQAAAJAFAIIACADIAAABIgBAHQgCADgGAAIgKABQABAEgEAEIgJACQgRABgLgCIgOgCIgIACIgHAEQgJADgHAAQgIAAgGgDgAi3ByQgVgDgJgDQgLgDgJgEIAAgFQAAgMgDgHIgBgGIgDgLIABAAIABgCIABACQADgGgEgDIAAgDQAEgFAMgGIASgJQAJgFAGgBQANgEAPACQAPADAKAKQAKAIABAIQABAEAAAGIgBAKQABAGACAEIAAADIgCAEIgBAMIgDAGQgIgEgHACIgLAGQgIAFgEABIgGAAIgLAAgAgBBvIgPgGQgJgFgGAEIgFAEQgEADgHAAIgMAAQgBgIgOgHIgMgDQgGgBgJACIgLAEIACgFIABgHIgBgOIACgQQAAgNAFgEQAFgDAKgEQAFgCAJgNQAHgKAIAAQAEABAIAGQATAOAYgDIAQgFQALgDAHAAQALAAALAIQAJAHAFALIAFAUQAAAIACAEQAAAIgCAEQgBADgGAFQgHAFgGACQgFADgJgBIgPAAIgJABIgFAEIgIACIgBAAgAB4BmIgHgEQgIAAgEgCIgFgFIAAgDIgBgCIgBgCIgDAAIgBAAIgDgJIgDgJIgCgEIgBgEIABgLIABgKIAFgFQAHgJADAAQACgBAIAAQAKgCAHgGIALgBQABgDAGgCQAHgBgCgFIAJgEQAEgBAEADIAHAFIAKACQAVACAUgEIAAgDIAMABQAFACAFAFIAPAQQADADACAHIAHAWQAEAJAFACIACACIgGAHQgCAEgDABIgHAAIgKAEQgKAEgQgBIgRgBQgQgFgJAAQgGAAgGADQgGADgCAGQgDgBgEADIgHAEIgaACQgFAAgCgCgAErBCQgBgFgEgEQgBgBAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAABIgCgNQgCgPAAgIQAFABAHgFIALgIIAIgDQACgBABgEIADgGQACABAEgDQAEgEACAAQACgBAGAEIAKAJQAFAEAEABQAGACAMAAQAGgKAHgDIAJgBIAUABIAOAGQAQAGAQgIIAFgHIAJgLIALgDIAHAAQADABAEADQAIAFAUgCQAFgGgCgIQgBgIgHgEIAGgHIANgLQAPgLAJAAQAEAAACACIAGAFQADADAGACQAEACADAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAIAGADIAJACQAFADADADIADAGIgGADIg+AjQgNAFgVAKQgPAGgHACQgXgBgLAEQgEABgGAFIgKAFIgXAEIgYAJIgVAEIgWADQgYAKgNADQgGABgIAAIgMgBgAoRAQIgMgJIgMgCQgHgCgCgDIgDgIQgCgHgFgFQARgLALgKIAAgDQAEAAAAgEQAFABAGgIQADgCAMADQAJACAHgCIADAAIAHgCQAPgEACgDIAFgGQACgDAHgBQATgEAMADIAAgBIACABQAQACAPAAQAHABAAgEIACABIAAACIgEAGQgBAEAAAGIABAJQgCAIABADIACAGIABANIABABQgOACgKAIQgPAKgHgBQgFgBgIgEQgPgJgSACIgRgkQgDgFgCgBQgFgEgDAEIAPAjQADAHAEAFIgEACIgGAFIgGAIQgHAKgJAAQgFAAgHgFgAlAAEIgJgFQgQgIgIAAIgJgBIgGgEIgEgEIgBgGIgEgMQgCgIAAgEIAEgNQAAgGgBgEIAGACIACgDIgEgIIADgDIAWgHIAJgGIACgCQAFAGAKACQAJADARAAQASABAHABIAMABIABAKIACALIAAAVIABAJIgGACIgJAEIgHABQgCABgFAFQgEADgDABIAAAFQgLADgLARIgCAEQgDgGgDgDgAjGgKQgHgBgJgGQgOgHgPgEIgBgJIAAgOQAAgRgJgPQAIgBADgGQAQABAJgDIAAgDIAKAEIAPACIA7AGIgBAaIABANIgGgBQgHAAgMAJQgJAHgDABIgIAEIgFAJQgDAFgHAAIgFAAgABPgUIgQgIQgPgHgMgMQgFgFgGgJIAAgEIgDgGIgDgDIgBAAIAAgEQAAgHACgDIAEgGQABgEgCgDIACgBIAEgDQACgCAGAAIAIABIARgCQAFAAAdADQAVACAMgHIAAgCIAQgGQAJgDAEgEIAJgGQAIgBAAgDIA2AAQAEAJAMAEIAOADIgLAoIgBAQIABALQAAAHgEACQgEACgEgBQgKgBgMgFIgLAJQgJAGADAGQgLADgSgJIgagRQgMgEgKADQgNADgEAKIgEAMQgEAHgFABIgBAAIgKgCgAhngVQgKgDgIgGIAAgFIAAgBQABgPgCgSQgBgGABgDIACgGIAAAAIABgBQAEgCADgDIAFABQAWADAmgFQAqgGAOgBIgCAEIAAAIIAAAUQAAAKAEAHIgCACQgEgCgFAAQgWgBgOADQgUAFgMAMIgIAIQgFAEgIAAQgGAAgIgDgAGkgpIgHgCQgBgFgFgFQgGgFgHABQgFABgIAGIgKAJQgJAFgKgBQgKgBgGgIIgIgNQgFgGgFgBQgFAAgHAGQgLAKgGAKIgKgCQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgNAAIAAAAIAAgBQAAgMAHgeIAEgQIACgDIADgDQACADAEABQgEgGAMgIQATgLAOgBQAHAAAZAFQASAEALgFQAHgEALgJQANgJAYAFQAMABAXAHIACABIACABIAOAAIABgBIACAAQABAAAIgDQAcgNANgDQAVgGASAEQAVADAMAOIAJALIgMAaQgDgCgDAFIgDAJQgBADgFAGIgGAHIgGgEQgLgJgIgCQgLgBgJAGQgMAOgHABIgJAPQgGABgBAGQgBAFACAFIgHgGQgDgEgMgHIgPgKIgEgCQgEgFgGABQgDAAgGAGQgQARgGANIgFABQgBgDgFgCg");
	this.shape_7.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_3},{t:this.shape_6}]},1).to({state:[{t:this.shape_3},{t:this.shape_7}]},1).wait(1));

	// Layer_7
	this.redGlow = new lib.omniMolarRglow();
	this.redGlow.setTransform(-0.9,-0.9,1,1,0,0,0,68.5,22);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_8
	this.greenGlow = new lib.omniMolarGglow();
	this.greenGlow.setTransform(-0.9,-0.9,1,1,0,0,0,68.5,22);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.4,-22.9,141,49);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Omnivore_Incisor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AATCQQgEgBgHgGQgPgMgNgFQgRgFgIgEIgTgJQgGgCgLgBIgSgDQgPgHgJgCIgMgEIgQgJIgJgGQgEgGABgFQAPAAAMgCIAMgCQAMgDANAAIACAAQAMAKATAHIBFAdQALAGAMAIIAYAQQgJAIgFALQgNAAgEgBgAA0BxQgFgCgJgIQgSgOgUgJQgGgEgXgIIgUgHQgRgFgMgHIgGgEIgDgDIAAAAIgIgIIAwACIArACQAIAAAugFIAmgGQAdAQAVAOIATANIgEAEQgHAHgFACQgBADgDAEQgeAagnAAIgQgDgACyBBQgHgBgLgHIhXg1QAIgEAKAAQAKADASACQAqABASgEQAagGAHABQAIABANAEIABAAQAPAIAGABIADABIgZAaIgJAJQgWATgRAAIgHgBgAj4AQQgEgCgCgJQgEgIABgMIADgRQABgLAAgHIgBgRIABgJIgBgEIAMgdQADgCACgEQADAAAEgDQAFgEAGADQAEADAEAGIAJAQIAAADIgBALQgBARACAIQABAIAFALQAGARAJALQgKAFgGgBQgLgFgGABQgFAAgIAIIgKAPQgCADgDAAQgDAAgDgCgAiggSQgFAAgGAEQgEgEgDgGQgRggAFgkIAAgLQACgKAHgJQAKgMAPgGQAKgEAIAAQALABAQALQAfAWAHAUIAEAKIgCAQQgEAVgLAJQgIAGgMADIgXADQgNADgLAFIgHADIAAgHgAgHg0QgHgFgHgLIgKgQIABgCQgBgCgDgCIgBgBIACAAQAIACAGgDQAEgBAIgHIAJgJIALgIIANgEQAPgDAFABIAQADQAJADAUABIAMABIgGASQgFAMgDAEQgHAIgOABIgYAAQgHAAgFACQgEACgHAJQgGAIgFACQgDABgEAAQgEAAgGgEg");
	this.shape.setTransform(0.5,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANClQgMgNgHgQIgIgEIgMgDIgOgHQgOgHgEgBQgLAAgFgCQgHAAgIgEIgQgGIgUgIIgVgMIgJgEQgFgCgEgGQgGgJAAgPIABgDIADgBQAigFARAAIAOAAQgGgJADgIIACgFIAFgBQAJgBAeADQAfADAxgDIAqgCQAIgBADACIAGADQgJgFgDgFQgEgFABgEQAAgGAEgEQAEgDAIAAQAJAAAGAEIAcAAQAbAAAPgDIAQgGQAJgDAHAAQAOgCAZALIAIADIARAHIAFgBIAAAPIgDgBIgCgBIgCAAQgGgCgQgHIgBAAQgMgFgIAAQgHgBgbAGQgRADgqgBQgSgBgLgCQgJABgIABIBXA1QAKAHAIACQAUAEAZgXIAJgIIAZgbQADACACAEIAAAQQgCAGgKAKIgSARIgHAFQgQALgPABQgKAAgLgEQgDALgLALQgHAHgTANQgMAHgHADQgKADgVAAQgTgCgFgBIgCgBIADAHQADAIgFAHIgDAFQgBACAAADQgMABgLgBIgKgBIAIAGgAh2AyIgMACQgMADgPAAQgBAFAEAFIAJAGIAPAKIANADQAIADAQAHIARADQALABAGACIATAIQAIAEARAGQANAFAPAMQAIAGAEABQADABAOAAQAFgLAIgIIgYgQQgLgJgLgFIhGgeQgSgHgMgJIgDAAQgNAAgLACgAhSAnIABAAIADADIAGAEQALAIASAEIATAIQAXAHAHAFQATAIASAOQAJAIAGADIAPADQAoAAAdgbQAEgDAAgDQAFgCAHgIIAEgEIgTgMQgVgPgdgQIgmAGQguAFgJAAIgqgBIgvgDIAHAIgAj6AZQgPgKgBggQgBgPACgMIABgDQgDgCAAgHQgBgsAQgrIAdAAIgEAHIAHAAQAFAAADACQADABAGAHIAHALQABgNAFgJQAFgIAOgJQANgKAKAAQALgBAKAFQAgANAWAYQAKAKAFAKIACACIADAEIABABQAGAEAFgCIADAAIAAgBIgFgCQABgDAFgBIAIgCQAHgBAGgGIAUgVIAFgDQAHgFAKgBQAMgCAiAGQAcAEAQgFIAHgDIAAAWIgDAAIABADQAAAIgDAKQgHAdgQAHQgHACgJAAIgQAAQgXABgDAOQgPAJgLAAQgLgBgOgRIgRgXIgDgGIgFAAIgCAAIgCgCIgDgBIgEgBQAGAcgHARQgKAYgaAEIgRADQgFAAgXAIQgOADgKgBIgHADIgTAEQgKAAgHgEQgKAMgGAPIgLAAQgQAAgIgFgAjgh5QgFADgDAAQgCAEgDACIgLAeIABADIgBAJIAAASQABAGgCALIgCASQgCAMAEAIQACAIAEACQAHAFAEgGIALgNQAHgJAFgBQAGAAALAEQAHACAJgGQgIgKgHgRQgFgMgBgIQgCgHACgRIABgMIAAgCIgKgQQgEgGgEgDIgFgCQgDAAgCACgAiagNIAHgEQALgFANgDIAWgDQANgCAHgGQAMgJADgWIACgPIgEgKQgHgVgfgVQgPgMgLAAQgIgBgLAEQgPAHgKAMQgGAIgDAKIAAAMQgFAjASAhQADAGADADQAHgDAEAAIABAHgAgdhcQAEABAAACIgBADIAKAQQAHALAHAEQAIAIAKgFQAFgBAGgJQAGgIAEgCQAFgCAHAAIAZAAQAOgCAHgHQADgEAEgMIAGgTIgLAAQgUgBgKgDIgPgEQgFgBgQADIgMAEIgMAIIgIAKQgIAHgEABQgGACgJgCIgCAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AATCQQgEgBgHgGQgPgMgNgFQgRgFgIgEIgTgJQgGgCgLgBIgSgDQgPgHgJgCIgMgEIgQgJIgJgGQgEgGABgFQAPAAAMgCIAMgCQAMgDANAAIACAAQAMAKATAHIBFAdQALAGAMAIIAYAQQgJAIgFALQgNAAgEgBgAA0BxQgFgCgJgIQgSgOgUgJQgGgEgXgIIgUgHQgRgFgMgHIgGgEIgDgDIAAAAIgIgIIAwACIArACQAIAAAugFIAmgGQAdAQAVAOIATANIgEAEQgHAHgFACQgBADgDAEQgeAagnAAIgQgDgACyBBQgHgBgLgHIhXg1QAIgEAKAAQAKADASACQAqABASgEQAagGAHABQAIABANAEIABAAQAPAIAGABIADABIgZAaIgJAJQgWATgRAAIgHgBgAj4AQQgEgCgCgJQgEgIABgMIADgRQABgLAAgHIgBgRIABgJIgBgEIAMgdQADgCACgEQADAAAEgDQAFgEAGADQAEADAEAGIAJAQIAAADIgBALQgBARACAIQABAIAFALQAGARAJALQgKAFgGgBQgLgFgGABQgFAAgIAIIgKAPQgCADgDAAQgDAAgDgCgAiggSQgFAAgGAEQgEgEgDgGQgRggAFgkIAAgLQACgKAHgJQAKgMAPgGQAKgEAIAAQALABAQALQAfAWAHAUIAEAKIgCAQQgEAVgLAJQgIAGgMADIgXADQgNADgLAFIgHADIAAgHgAgHg0QgHgFgHgLIgKgQIABgCQgBgCgDgCIgBgBIACAAQAIACAGgDQAEgBAIgHIAJgJIALgIIANgEQAPgDAFABIAQADQAJADAUABIAMABIgGASQgFAMgDAEQgHAIgOABIgYAAQgHAAgFACQgEACgHAJQgGAIgFACQgDABgEAAQgEAAgGgEg");
	this.shape_2.setTransform(0.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AATCQQgEgBgHgGQgPgMgNgFQgRgFgIgEIgTgJQgGgCgLgBIgSgDQgPgHgJgCIgMgEIgQgJIgJgGQgEgGABgFQAPAAAMgCIAMgCQAMgDANAAIACAAQAMAKATAHIBFAdQALAGAMAIIAYAQQgJAIgFALQgNAAgEgBgAA0BxQgFgCgJgIQgSgOgUgJQgGgEgXgIIgUgHQgRgFgMgHIgGgEIgDgDIAAAAIgIgIIAwACIArACQAIAAAugFIAmgGQAdAQAVAOIATANIgEAEQgHAHgFACQgBADgDAEQgeAagnAAIgQgDgACyBBQgHgBgLgHIhXg1QAIgEAKAAQAKADASACQAqABASgEQAagGAHABQAIABANAEIABAAQAPAIAGABIADABIgZAaIgJAJQgWATgRAAIgHgBgAj4AQQgEgCgCgJQgEgIABgMIADgRQABgLAAgHIgBgRIABgJIgBgEIAMgdQADgCACgEQADAAAEgDQAFgEAGADQAEADAEAGIAJAQIAAADIgBALQgBARACAIQABAIAFALQAGARAJALQgKAFgGgBQgLgFgGABQgFAAgIAIIgKAPQgCADgDAAQgDAAgDgCgAiggSQgFAAgGAEQgEgEgDgGQgRggAFgkIAAgLQACgKAHgJQAKgMAPgGQAKgEAIAAQALABAQALQAfAWAHAUIAEAKIgCAQQgEAVgLAJQgIAGgMADIgXADQgNADgLAFIgHADIAAgHgAgHg0QgHgFgHgLIgKgQIABgCQgBgCgDgCIgBgBIACAAQAIACAGgDQAEgBAIgHIAJgJIALgIIANgEQAPgDAFABIAQADQAJADAUABIAMABIgGASQgFAMgDAEQgHAIgOABIgYAAQgHAAgFACQgEACgHAJQgGAIgFACQgDABgEAAQgEAAgGgEg");
	this.shape_3.setTransform(0.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AATCQQgEgBgHgGQgPgMgNgFQgRgFgIgEIgTgJQgGgCgLgBIgSgDQgPgHgJgCIgMgEIgQgJIgJgGQgEgGABgFQAPAAAMgCIAMgCQAMgDANAAIACAAQAMAKATAHIBFAdQALAGAMAIIAYAQQgJAIgFALQgNAAgEgBgAA0BxQgFgCgJgIQgSgOgUgJQgGgEgXgIIgUgHQgRgFgMgHIgGgEIgDgDIAAAAIgIgIIAwACIArACQAIAAAugFIAmgGQAdAQAVAOIATANIgEAEQgHAHgFACQgBADgDAEQgeAagnAAIgQgDgACyBBQgHgBgLgHIhXg1QAIgEAKAAQAKADASACQAqABASgEQAagGAHABQAIABANAEIABAAQAPAIAGABIADABIgZAaIgJAJQgWATgRAAIgHgBgAj4AQQgEgCgCgJQgEgIABgMIADgRQABgLAAgHIgBgRIABgJIgBgEIAMgdQADgCACgEQADAAAEgDQAFgEAGADQAEADAEAGIAJAQIAAADIgBALQgBARACAIQABAIAFALQAGARAJALQgKAFgGgBQgLgFgGABQgFAAgIAIIgKAPQgCADgDAAQgDAAgDgCgAiggSQgFAAgGAEQgEgEgDgGQgRggAFgkIAAgLQACgKAHgJQAKgMAPgGQAKgEAIAAQALABAQALQAfAWAHAUIAEAKIgCAQQgEAVgLAJQgIAGgMADIgXADQgNADgLAFIgHADIAAgHgAgHg0QgHgFgHgLIgKgQIABgCQgBgCgDgCIgBgBIACAAQAIACAGgDQAEgBAIgHIAJgJIALgIIANgEQAPgDAFABIAQADQAJADAUABIAMABIgGASQgFAMgDAEQgHAIgOABIgYAAQgHAAgFACQgEACgHAJQgGAIgFACQgDABgEAAQgEAAgGgEg");
	this.shape_4.setTransform(0.5,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AATCQQgEgBgHgGQgPgMgNgFQgRgFgIgEIgTgJQgGgCgLgBIgSgDQgPgHgJgCIgMgEIgQgJIgJgGQgEgGABgFQAPAAAMgCIAMgCQAMgDANAAIACAAQAMAKATAHIBFAdQALAGAMAIIAYAQQgJAIgFALQgNAAgEgBgAA0BxQgFgCgJgIQgSgOgUgJQgGgEgXgIIgUgHQgRgFgMgHIgGgEIgDgDIAAAAIgIgIIAwACIArACQAIAAAugFIAmgGQAdAQAVAOIATANIgEAEQgHAHgFACQgBADgDAEQgeAagnAAIgQgDgACyBBQgHgBgLgHIhXg1QAIgEAKAAQAKADASACQAqABASgEQAagGAHABQAIABANAEIABAAQAPAIAGABIADABIgZAaIgJAJQgWATgRAAIgHgBgAj4AQQgEgCgCgJQgEgIABgMIADgRQABgLAAgHIgBgRIABgJIgBgEIAMgdQADgCACgEQADAAAEgDQAFgEAGADQAEADAEAGIAJAQIAAADIgBALQgBARACAIQABAIAFALQAGARAJALQgKAFgGgBQgLgFgGABQgFAAgIAIIgKAPQgCADgDAAQgDAAgDgCgAiggSQgFAAgGAEQgEgEgDgGQgRggAFgkIAAgLQACgKAHgJQAKgMAPgGQAKgEAIAAQALABAQALQAfAWAHAUIAEAKIgCAQQgEAVgLAJQgIAGgMADIgXADQgNADgLAFIgHADIAAgHgAgHg0QgHgFgHgLIgKgQIABgCQgBgCgDgCIgBgBIACAAQAIACAGgDQAEgBAIgHIAJgJIALgIIANgEQAPgDAFABIAQADQAJADAUABIAMABIgGASQgFAMgDAEQgHAIgOABIgYAAQgHAAgFACQgEACgHAJQgGAIgFACQgDABgEAAQgEAAgGgEg");
	this.shape_5.setTransform(0.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AATCQQgEgBgHgGQgPgMgNgFQgRgFgIgEIgTgJQgGgCgLgBIgSgDQgPgHgJgCIgMgEIgQgJIgJgGQgEgGABgFQAPAAAMgCIAMgCQAMgDANAAIACAAQAMAKATAHIBFAdQALAGAMAIIAYAQQgJAIgFALQgNAAgEgBgAA0BxQgFgCgJgIQgSgOgUgJQgGgEgXgIIgUgHQgRgFgMgHIgGgEIgDgDIAAAAIgIgIIAwACIArACQAIAAAugFIAmgGQAdAQAVAOIATANIgEAEQgHAHgFACQgBADgDAEQgeAagnAAIgQgDgACyBBQgHgBgLgHIhXg1QAIgEAKAAQAKADASACQAqABASgEQAagGAHABQAIABANAEIABAAQAPAIAGABIADABIgZAaIgJAJQgWATgRAAIgHgBgAj4AQQgEgCgCgJQgEgIABgMIADgRQABgLAAgHIgBgRIABgJIgBgEIAMgdQADgCACgEQADAAAEgDQAFgEAGADQAEADAEAGIAJAQIAAADIgBALQgBARACAIIACAJIAEAKQAGARAJALQgKAFgGgBIgDgBQgJgEgFABQgFAAgIAIIgKAPQgCADgDAAQgDAAgDgCgAiggSQgFAAgGAEQgEgEgDgGQgRggAFgkIAAgLQACgKAHgJQAKgMAPgGQAKgEAIAAQALABAQALQAfAWAHAUIAEAKIgCAQQgEAVgLAJQgIAGgMADIgXADQgNADgLAFIgHADIAAgHgAgHg0QgHgFgHgLIgKgQIABgCQgBgCgDgCIgBgBIACAAQAIACAGgDQAEgBAIgHIAJgJIALgIIANgEQAPgDAFABIAQADQAJADAUABIAMABIgGASQgFAMgDAEQgHAIgOABIgYAAQgHAAgFACQgEACgHAJQgGAIgFACQgDABgEAAQgEAAgGgEg");
	this.shape_6.setTransform(0.5,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AANClQgMgNgHgQIgIgEIgMgDIgOgHQgOgHgEgBQgLAAgFgCQgHAAgIgEIgQgGIgUgIIgVgMIgJgEQgFgCgEgGQgGgJAAgPIABgDIADgBQAigFARAAIAOAAQgGgJADgIIACgFIAFgBQAJgBAeADQAfADAxgDIAqgCQAIgBADACIAGADQgJgFgDgFQgEgFABgEQAAgGAEgEQAEgDAIAAQAJAAAGAEIAcAAQAbAAAPgDIAQgGQAJgDAHAAQAOgCAZALIAIADIARAHIAFgBIAAAPIgDgBIgCgBIgCAAQgGgCgQgHIgBAAQgMgFgIAAQgHgBgbAGQgRADgqgBQgSgBgLgCQgJABgIABIBXA1QAKAHAIACQAUAEAZgXIAJgIIAZgbQADACACAEIAAAQQgCAGgKAKIgSARIgHAFQgQALgPABQgKAAgLgEQgDALgLALQgHAHgTANQgMAHgHADQgKADgVAAQgTgCgFgBIgCgBIADAHQADAIgFAHIgDAFQgBACAAADQgMABgLgBIgKgBIAIAGgAh2AyIgMACQgMADgPAAQgBAFAEAFIAJAGIAPAKIANADQAIADAQAHIARADQALABAGACIATAIQAIAEARAGQANAFAPAMQAIAGAEABQADABAOAAQAFgLAIgIIgYgQQgLgJgLgFIhGgeQgSgHgMgJIgDAAQgNAAgLACgAhSAnIABAAIADADIAGAEQALAIASAEIATAIQAXAHAHAFQATAIASAOQAJAIAGADIAPADQAoAAAdgbQAEgDAAgDQAFgCAHgIIAEgEIgTgMQgVgPgdgQIgmAGQguAFgJAAIgqgBIgvgDIAHAIgAj6AZQgPgKgBggQgBgPACgMIABgDQgDgCAAgHQgBgsAQgrIAdAAIgEAHIAHAAQAFAAADACQADABAGAHIAHALIABgJQACgHADgGQAFgIAOgJQANgKAKAAQALgBAKAFQAgANAWAYQAKAKAFAKIACACIADAEIABABQAGAEAFgCIADAAIAAgBIgFgCQABgDAFgBIAIgCQAHgBAGgGIAUgVIAFgDQAHgFAKgBQAMgCAiAGQAcAEAQgFIAHgDIAAAWIgDAAIABADQAAAIgDAKQgHAdgQAHQgHACgJAAIgQAAQgXABgDAOQgPAJgLAAQgLgBgOgRIgRgXIgDgGIgFAAIgCAAIgCgCIgDgBIgEgBQAGAcgHARQgKAYgaAEIgRADQgFAAgXAIQgOADgKgBIgHADIgTAEQgHAAgGgCIgEgCQgKAMgGAPIgLAAQgQAAgIgFgAjgh5QgFADgDAAQgCAEgDACIgLAeIABADIgBAJIAAASQABAGgCALIgCASQgCAMAEAIQACAIAEACQAHAFAEgGIALgNQAHgJAFgBQAFAAAJADIADABQAHACAJgGQgIgKgHgRIgEgLIgCgJQgCgHACgRIABgMIAAgCIgKgQQgEgGgEgDIgFgCQgDAAgCACgAiagNIAHgEQALgFANgDIAWgDQANgCAHgGQAMgJADgWIACgPIgEgKQgHgVgfgVQgPgMgLAAQgIgBgLAEQgPAHgKAMQgGAIgDAKIAAAMQgFAjASAhQADAGADADQAHgDAEAAIABAHgAgdhcQAEABAAACIgBADIAKAQQAHALAHAEQAIAIAKgFQAFgBAGgJQAGgIAEgCQAFgCAHAAIAZAAQAOgCAHgHQADgEAEgMIAGgTIgLAAQgUgBgKgDIgPgEQgFgBgQADIgMAEIgMAIIgIAKQgIAHgEABQgGACgJgCIgCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.omniIncisorRglow();
	this.redGlow.setTransform(0,-0.5,1,1,0,0,0,31,21);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.omniIncisorGglow();
	this.greenGlow.setTransform(0,-0.5,1,1,0,0,0,31,21);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-21.5,65,45);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Omnivore_Cannie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AiXD9IgDAAQgNgTgFgMQgHgQgDgWQgEgeACgbQADgUAGgaIAGgbIALgUIADgIQABgFADgDIAHgHQAFgFAAgEQASgCAGAFQAEAEACAKQAFATAHAPIAGANQAJAOAPAQQAJAJAeAYQAIAHAIAEIAMAFQAIAFACALQADAKgEAJQgGAMgCAIIgBAKIgHAJQgFAHgCAHIgDACIgOAJQgHAFgLACIgIACIgNgBQgNgCgHACIgSAEQgEABgIAAIgPACQgOgBgCgFgAgtCjIAHAJIALALIAGAAIABgCIgEgHIgGgCIgNgJIAAgBIgCABgAhLCNQAAAFAFAFIAMASQADAEADAAIAGABQACgEgFgGQgLgPgCgEIgDgFQgCgCgDAAQgDABgCACgAheBsQgCANABAGIADAQQABADADAFIAEADQADABAGgBQABgBgEgHQgBgJgDgEIgDgFIAAgHQABgIgJgGQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAiFAmQgCAMABAHIACAMQAFAVAEAIQAGAJAFAAIACgCIgPgrIgBgOQgBgIgEgDgAAgBmQgagTgLgVQgGgLgHgQQgFgNgDgMIAAgBIgBgEQgDgKgBgNQgDgmABgTQADgZAJgUQAFgLASgjIAPgWQACgDAGgFIBEg9IAHAAIAAgBQAGADAHAAQAMAAADABQAFACAGADQASAOANATIAIANIAHAPIABAPIAAAXIgBANQgBAGgFAJIgEAIQgIAMACAFQgFAAgEAHIgGAKIgJADQgSgCgRARQgMALgGAQQgFANAAAPQAAASAHASIARAeQAKASADAOIAEATQgEAOgUADIgKAAQgdAAghgZgAA6AvQADAEAFAEIAIAIQAGACAFAAQABgFgBgCIgIgJIgGgIQgDgGgJgBIAAABIgBAAQgDAGADAGgAAvg5QgDAGAAAQIAAATQAAASAIAHQAIAFAEgGIAAgGIgBggIABgMQABgFAHgKQABgEAAgFQgCgFgEAAQgOABgGANgABNhZIACACIAEAEIADADIACAAIAHABIgBgIIgDgDIgGgGIgHgCIAAABIgCAAQAAAFABADgABoh+IgJADIgBAGIgCABQgDADAFAGQADAFAHAAQgBgDADgCQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAMgCQgBgEACgEQgGgGgJgCQABADgEAAgACFiPIAEAFQADAEADAAQADAAAFgBQADgBAEgEIADgBIgBgGQgGgKgIgBg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah9EOQgNAAgHgCIgBgBIgBABQgCADgDgDQgOgJgFgHIgKgTIgDAAIgCgFIgBgDQgBgHgFgFIgDgLQgIgdAAglQAAgZAGgeIAGgjQACgJADgEIAHgMIABgBIADgHIACgGQACgEACgDIAAgCIAJgIIAGgJQACgBAHAAIAKAAIAKABQAJADAIALIABAAQAAAHAEAGIAAAAQABAJAFAGIAEAFIAAAAIAIAUQASArAqAVIAaAOQAFAEAFAIIAEgEIAKgHIAJgBIAMgBQgSgKgSgNQgRgPgKgOQgIgKgJgVQgKgTgCgNQABgHgDgFIgBgCIgDgnIgBgfQADguAjg4QAIgMAHgFQgBgFAGgIIAPgNQAkgjAZgJIAHgBIABAAQAGgFANAAQAKgBAGABQAGACAOAIIATAQQALAJARAbIAHALQAEAGACAMQABAMABAXQAAAbgIAKIAHgFQgEAFgDAIIgIAUIgQAHIAAAAIgDAFQgBABgGAAQgEAAgGAGQgGAGgEAAIgJABIAAABIgKAOIgIAOQgIASAGAXQADAKAGALIACAAIAAABQAAAIAGAGIABADQAJAPACAHQADAHADAQIABAIIAAAAIAAAHIAAABQgFAFgBAJQgGAGgMACQgXAEgYgGQgHADgMAAIgWABIgNADQgDAAgDAEIgCABIAFALQAGAXgJAUQgFANgJAJQgGAJgKAEIgPAMQgJAFgTADIgFABIgaAFIgJADQgJADgNAAIgJgBgAiJEAIAOgBQAJAAAEgBIASgFQAHgBANABIANABIAHgBQALgCAIgFIAOgJIADgCQACgIAFgGIAHgJIACgKQABgIAGgMQAEgKgDgJQgDgLgFgFIgOgFQgJgFgIgGQgdgYgJgJQgPgQgJgOIgGgNQgHgPgFgUQgCgKgEgDQgHgFgSACQAAAEgEAFIgHAHQgDACgBAFIgDAIIgLAUIgHAbQgFAbgDATQgDAcAEAeQAEAWAGAQQAGALANAUIADgBQACAGAOAAgAAXjGQgGAEgCAEIgPAWQgSAigGAMQgIAUgDAZQgCATAEAmQABANADAKIABAEIAAABQADALAFANQAHARAFAKQALAWAaATQAnAdAhgFQAVgCADgOIgDgUQgDgNgKgSIgRgeQgHgSAAgSQAAgPAFgOQAFgPANgLQAQgRATACIAJgEIAGgJQAEgIAFAAQgCgEAHgMIAFgIQAFgKAAgFIABgOIAAgWIgBgQIgGgOIgIgOQgNgSgTgOQgFgEgFgBQgDgBgNAAQgGgBgGgCIAAABIgHAAgAgdC1IgMgMIgGgIIACgBIAMAJIAHADIADAGIgBADIgDABIgCgBgAg2CrQgDAAgEgFIgLgRQgFgFAAgFQACgDADAAQADAAACACIADAFQACAEALAPQAEAGgBAEIgGgBgABLCfIACgDIAEADgAhXCXIgDgDQgDgEgBgDIgDgQQgCgHACgMQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAIAFgBAJIABAHIADAFQACAEACAJQAEAHgBABIgFAAIgFgBgAh9BgQgEgJgFgUIgCgMQgBgHACgMIACgCQAEAEABAIIABANIAPAsIgCACQgGAAgFgJgABIA8IgIgIQgGgEgCgEQgDgGACgFIACAAIAAgCQAJACADAGIAFAIIAIAJQACACgBAFQgFAAgGgDgAAyAGQgJgGABgSIAAgUQgBgPAEgGQAGgNAOgBQAEAAACAFQAAAFgBAEQgHAKgBAFIgBAMIABAgIAAAGQgCADgDAAQgDAAgEgDgABWhSIgDgBIgCgCIgEgEIgDgDQAAgCAAgGIACAAIAAgBIAHADIAGAFIACAEIABAHgABbhtQgEgGADgDIABgCIABgGIAKgDQAEAAgBgCQAIABAHAHQgCAEAAAEIgLACQAAAAAAAAQgBABAAAAQAAABgBAAQAAABgBABQgDACAAADQgGAAgEgFgACNiIQgDgBgDgDIgEgFIANgPQAIABAGAKIABAFIgDACQgEAEgDABIgGABIgCAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AiXD9IgDAAQgNgTgFgMQgHgQgDgWQgEgeACgbQADgUAGgaIAGgbIALgUIADgIQABgFADgDIAHgHQAFgFAAgEQASgCAGAFQAEAEACAKQAFATAHAPIAGANQAJAOAPAQQAJAJAeAYQAIAHAIAEIAMAFQAIAFACALQADAKgEAJQgGAMgCAIIgBAKIgHAJQgFAHgCAHIgDACIgOAJQgHAFgLACIgIACIgNgBQgNgCgHACIgSAEQgEABgIAAIgPACQgOgBgCgFgAgtCjIAHAJIALALIAGAAIABgCIgEgHIgGgCIgNgJIAAgBIgCABgAhLCNQAAAFAFAFIAMASQADAEADAAIAGABQACgEgFgGQgLgPgCgEIgDgFQgCgCgDAAQgDABgCACgAheBsQgCANABAGIADAQQABADADAFIAEADQADABAGgBQABgBgEgHQgBgJgDgEIgDgFIAAgHQABgIgJgGQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAiFAmQgCAMABAHIACAMQAFAVAEAIQAGAJAFAAIACgCIgPgrIgBgOQgBgIgEgDgAAgBmQgagTgLgVQgGgLgHgQQgFgNgDgMIAAgBIgBgEQgDgKgBgNQgDgmABgTQADgZAJgUQAFgLASgjIAPgWQACgDAGgFIBEg9IAHAAIAAgBQAGADAHAAQAMAAADABQAFACAGADQASAOANATIAIANIAHAPIABAPIAAAXIgBANQgBAGgFAJIgEAIQgIAMACAFQgFAAgEAHIgGAKIgJADQgSgCgRARQgMALgGAQQgFANAAAPQAAASAHASIARAeQAKASADAOIAEATQgEAOgUADIgKAAQgdAAghgZgAA6AvQADAEAFAEIAIAIQAGACAFAAQABgFgBgCIgIgJIgGgIQgDgGgJgBIAAABIgBAAQgDAGADAGgAAvg5QgDAGAAAQIAAATQAAASAIAHQAIAFAEgGIAAgGIgBggIABgMQABgFAHgKQABgEAAgFQgCgFgEAAQgOABgGANgABNhZIACACIAEAEIADADIACAAIAHABIgBgIIgDgDIgGgGIgHgCIAAABIgCAAQAAAFABADgABoh+IgJADIgBAGIgCABQgDADAFAGQADAFAHAAQgBgDADgCQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAMgCQgBgEACgEQgGgGgJgCQABADgEAAgACFiPIAEAFQADAEADAAQADAAAFgBQADgBAEgEIADgBIgBgGQgGgKgIgBg");
	this.shape_2.setTransform(-0.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AiXD9IgDAAQgNgTgFgMQgHgQgDgWQgEgeACgbQADgUAGgaIAGgbIALgUIADgIQABgFADgDIAHgHQAFgFAAgEQASgCAGAFQAEAEACAKQAFATAHAPIAGANQAJAOAPAQQAJAJAeAYQAIAHAIAEIAMAFQAIAFACALQADAKgEAJQgGAMgCAIIgBAKIgHAJQgFAHgCAHIgDACIgOAJQgHAFgLACIgIACIgNgBQgNgCgHACIgSAEQgEABgIAAIgPACQgOgBgCgFgAgtCjIAHAJIALALIAGAAIABgCIgEgHIgGgCIgNgJIAAgBIgCABgAhLCNQAAAFAFAFIAMASQADAEADAAIAGABQACgEgFgGQgLgPgCgEIgDgFQgCgCgDAAQgDABgCACgAheBsQgCANABAGIADAQQABADADAFIAEADQADABAGgBQABgBgEgHQgBgJgDgEIgDgFIAAgHQABgIgJgGQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAiFAmQgCAMABAHIACAMQAFAVAEAIQAGAJAFAAIACgCIgPgrIgBgOQgBgIgEgDgAAgBmQgagTgLgVQgGgLgHgQQgFgNgDgMIAAgBIgBgEQgDgKgBgNQgDgmABgTQADgZAJgUQAFgLASgjIAPgWQACgDAGgFIBEg9IAHAAIAAgBQAGADAHAAQAMAAADABQAFACAGADQASAOANATIAIANIAHAPIABAPIAAAXIgBANQgBAGgFAJIgEAIQgIAMACAFQgFAAgEAHIgGAKIgJADQgSgCgRARQgMALgGAQQgFANAAAPQAAASAHASIARAeQAKASADAOIAEATQgEAOgUADIgKAAQgdAAghgZgAA6AvQADAEAFAEIAIAIQAGACAFAAQABgFgBgCIgIgJIgGgIQgDgGgJgBIAAABIgBAAQgDAGADAGgAAvg5QgDAGAAAQIAAATQAAASAIAHQAIAFAEgGIAAgGIgBggIABgMQABgFAHgKQABgEAAgFQgCgFgEAAQgOABgGANgABNhZIACACIAEAEIADADIACAAIAHABIgBgIIgDgDIgGgGIgHgCIAAABIgCAAQAAAFABADgABoh+IgJADIgBAGIgCABQgDADAFAGQADAFAHAAQgBgDADgCQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAMgCQgBgEACgEQgGgGgJgCQABADgEAAgACFiPIAEAFQADAEADAAQADAAAFgBQADgBAEgEIADgBIgBgGQgGgKgIgBg");
	this.shape_3.setTransform(-0.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AiXD9IgDAAQgNgTgFgMQgHgQgDgWQgEgeACgbQADgUAGgaIAGgbIALgUIADgIQABgFADgDIAHgHQAFgFAAgEQASgCAGAFQAEAEACAKQAFATAHAPIAGANQAJAOAPAQQAJAJAeAYQAIAHAIAEIAMAFQAIAFACALQADAKgEAJQgGAMgCAIIgBAKIgHAJQgFAHgCAHIgDACIgOAJQgHAFgLACIgIACIgNgBQgNgCgHACIgSAEQgEABgIAAIgPACQgOgBgCgFgAgtCjIAHAJIALALIAGAAIABgCIgEgHIgGgCIgNgJIAAgBIgCABgAhLCNQAAAFAFAFIAMASQADAEADAAIAGABQACgEgFgGQgLgPgCgEIgDgFQgCgCgDAAQgDABgCACgAheBsQgCANABAGIADAQQABADADAFIAEADQADABAGgBQABgBgEgHQgBgJgDgEIgDgFIAAgHQABgIgJgGQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAiFAmQgCAMABAHIACAMQAFAVAEAIQAGAJAFAAIACgCIgPgrIgBgOQgBgIgEgDgAAgBmQgagTgLgVQgGgLgHgQQgFgNgDgMIAAgBIgBgEQgDgKgBgNQgDgmABgTQADgZAJgUQAFgLASgjIAPgWQACgDAGgFIBEg9IAHAAIAAgBQAGADAHAAQAMAAADABQAFACAGADQASAOANATIAIANIAHAPIABAPIAAAXIgBANQgBAGgFAJIgEAIQgIAMACAFQgFAAgEAHIgGAKIgJADQgSgCgRARQgMALgGAQQgFANAAAPQAAASAHASIARAeQAKASADAOIAEATQgEAOgUADIgKAAQgdAAghgZgAA6AvQADAEAFAEIAIAIQAGACAFAAQABgFgBgCIgIgJIgGgIQgDgGgJgBIAAABIgBAAQgDAGADAGgAAvg5QgDAGAAAQIAAATQAAASAIAHQAIAFAEgGIAAgGIgBggIABgMQABgFAHgKQABgEAAgFQgCgFgEAAQgOABgGANgABNhZIACACIAEAEIADADIACAAIAHABIgBgIIgDgDIgGgGIgHgCIAAABIgCAAQAAAFABADgABoh+IgJADIgBAGIgCABQgDADAFAGQADAFAHAAQgBgDADgCQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAMgCQgBgEACgEQgGgGgJgCQABADgEAAgACFiPIAEAFQADAEADAAQADAAAFgBQADgBAEgEIADgBIgBgGQgGgKgIgBg");
	this.shape_4.setTransform(-0.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AiXD9IgDAAQgNgTgFgMQgHgQgDgWQgEgeACgbQADgUAGgaIAGgbIALgUIADgIQABgFADgDIAHgHQAFgFAAgEQASgCAGAFQAEAEACAKQAFATAHAPIAGANQAJAOAPAQQAJAJAeAYQAIAHAIAEIAMAFQAIAFACALQADAKgEAJQgGAMgCAIIgBAKIgHAJQgFAHgCAHIgDACIgOAJQgHAFgLACIgIACIgNgBQgNgCgHACIgSAEQgEABgIAAIgPACQgOgBgCgFgAgtCjIAHAJIALALIAGAAIABgCIgEgHIgGgCIgNgJIAAgBIgCABgAhLCNQAAAFAFAFIAMASQADAEADAAIAGABQACgEgFgGQgLgPgCgEIgDgFQgCgCgDAAQgDABgCACgAheBsQgCANABAGIADAQQABADADAFIAEADQADABAGgBQABgBgEgHQgBgJgDgEIgDgFIAAgHQABgIgJgGQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAiFAmQgCAMABAHIACAMQAFAVAEAIQAGAJAFAAIACgCIgPgrIgBgOQgBgIgEgDgAAgBmQgagTgLgVQgGgLgHgQQgFgNgDgMIAAgBIgBgEQgDgKgBgNQgDgmABgTQADgZAJgUQAFgLASgjIAPgWQACgDAGgFIBEg9IAHAAIAAgBQAGADAHAAQAMAAADABQAFACAGADQASAOANATIAIANIAHAPIABAPIAAAXIgBANQgBAGgFAJIgEAIQgIAMACAFQgFAAgEAHIgGAKIgJADQgSgCgRARQgMALgGAQQgFANAAAPQAAASAHASIARAeQAKASADAOIAEATQgEAOgUADIgKAAQgdAAghgZgAA6AvQADAEAFAEIAIAIQAGACAFAAQABgFgBgCIgIgJIgGgIQgDgGgJgBIAAABIgBAAQgDAGADAGgAAvg5QgDAGAAAQIAAATQAAASAIAHQAIAFAEgGIAAgGIgBggIABgMQABgFAHgKQABgEAAgFQgCgFgEAAQgOABgGANgABNhZIACACIAEAEIADADIACAAIAHABIgBgIIgDgDIgGgGIgHgCIAAABIgCAAQAAAFABADgABoh+IgJADIgBAGIgCABQgDADAFAGQADAFAHAAQgBgDADgCQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAMgCQgBgEACgEQgGgGgJgCQABADgEAAgACFiPIAEAFQADAEADAAQADAAAFgBQADgBAEgEIADgBIgBgGQgGgKgIgBg");
	this.shape_5.setTransform(-0.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AiXD9IgDAAQgNgTgFgMQgHgQgDgWQgEgeACgbQADgUAGgaIAGgbIALgUIADgIQABgFADgDIAHgHQAFgFAAgEQASgCAGAFQAEAEACAKQAFATAHAPIAGANQAJAOAPAQQAJAJAeAYQAIAHAIAEIAMAFQAIAFACALQADAKgEAJQgGAMgCAIIgBAKIgHAJQgFAHgCAHIgDACIgOAJQgHAFgLACIgIACIgNgBQgNgCgHACIgSAEQgEABgIAAIgPACQgOgBgCgFgAgtCjIAHAJIALALIAGAAIABgCIgEgHIgGgCIgNgJIAAgBIgCABgAhLCNQAAAFAFAFIAMASQADAEADAAIAGABQACgEgFgGQgLgPgCgEIgDgFQgCgCgDAAQgDABgCACgAheBsQgCANABAGIADAQQABADADAFIAEADQADABAGgBQABgBgEgHQgBgJgDgEIgDgFIAAgHQABgIgJgGQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAiFAmQgCAMABAHIACAMQAFAVAEAIQAGAJAFAAIACgCIgPgrIgBgOQgBgIgEgDgAAgBmQgagTgLgVQgGgLgHgQQgFgNgDgMIAAgBIgBgEQgDgKgBgNQgDgmABgTQADgZAJgUQAFgLASgjIAPgWQACgDAGgFIBEg9IAHAAIAAgBQAGADAHAAQAMAAADABQAFACAGADQASAOANATIAIANIAHAPIABAPIAAAXIgBANQgBAGgFAJIgEAIQgIAMACAFQgFAAgEAHIgGAKIgJADQgSgCgRARQgMALgGAQQgFANAAAPQAAASAHASIARAeQAKASADAOIAEATQgEAOgUADIgKAAQgdAAghgZgAA6AvQADAEAFAEIAIAIQAGACAFAAQABgFgBgCIgIgJIgGgIQgDgGgJgBIAAABIgBAAQgDAGADAGgAAvg5QgDAGAAAQIAAATQAAASAIAHQAIAFAEgGIAAgGIgBggIABgMQABgFAHgKQABgEAAgFQgCgFgEAAQgOABgGANgABNhZIACACIAEAEIADADIACAAIAHABIgBgIIgDgDIgGgGIgHgCIAAABIgCAAQAAAFABADgABoh+IgJADIgBAGIgCABQgDADAFAGQADAFAHAAQgBgDADgCQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAMgCQgBgEACgEQgGgGgJgCQABADgEAAgACFiPIAEAFQADAEADAAQADAAAFgBQADgBAEgEIADgBIgBgGQgGgKgIgBg");
	this.shape_6.setTransform(-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.omniCanineRglow();
	this.redGlow.setTransform(-1,-1.5,1,1,0,0,0,24.5,31);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.omniCanineGglow();
	this.greenGlow.setTransform(-1,-1.5,1,1,0,0,0,24.5,31);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-32.5,53,67);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Insectivore_Molar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AIlA9QgJAqAVAfAE3AAQANA9hJAFAkXhCQANgigPghAowhWQAZAUgHAgAnIhkQAFApASAQAgjhLQgOgPATgc");
	this.shape.setTransform(-19.6,-27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("ABajpQgLAAgKAAIAAACAF9jxIAHADAGRilQADAGAGAFQAHAFALAWIgCgLAKCiNIAOAFIASAQIAeAXAKOE4QAAgCAAgBQAAgBAAAAAKNFDIABgOADiE1IgEAJIgFAIIgGANIAJALQgKgHAAADAm5ltQABgBAAgBApymbIAJALAq/lOIADgEApSlXQAKAKAPAAIgGACAjEl3QAEAFAHADQABAAAAAAQACAAALAPQAEADADAGAj6EtQACAGgCAFIALAiIAFASAneGRQANAGAXAF");
	this.shape_1.setTransform(-3.5,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.098)").s().p("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");
	this.shape_2.setTransform(0.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AppHFQgXgBgIgIQgHgEgBgHIgDADIgEACIgLgTQgMgUgLgOIAHAIIAPAOQgBgOgDgfQgGgeACgQQABgNAFgFQAJgFALABQAVAGANATIAKASIAMANIARAMQAXATARAFIAEgCIABgBQgMgWgDghQgEgXACgpQAAgLAEgFQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIAAgHIABgEQACgBAGAAQADADAAAEIABAAQAGADADAGQAmAyAyAiQATAOAPgEQgghAAEhJQABgbALgJQAQgHAPALQAIAFALAQIBEBhQALAMADALIAAgCQALAJAMACQANAAAKgJQALgNACgJQAAgOACgHIAFgNIAQgZIAGgKIAGgLQACgEABgMQgBgNgCgHIgEgOQgBgHAEgHQADgLAEgFIADgIQACgBAGAAQAJgCAHADQAKAGAPATIARAbIAGAKQAEADAHAFQAFAFAGAKIAGANIAIAKQALAKAFACQAGAAAEgEIAJgFQAQgLARAGQAHACAKAHQANAFACAEQADABAEAGIAFAJIAIAFQAIgHAJgQQALgWAMgFQAUgLAgAbQApAiASAmIADgPQAEgMAEgEQAFgHANgFIASgLQADgCAGgFIAJgGQADgBAJAAQADgCAEgFIAJgLQAGgGARACIANACQAFAEAHARQAHAUANASQAHAHAGAEIAdAAQAGgEADgHQATggAOgJQAVgOAZAJQAJAFAGAFQACACAAAEQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQABABAAAAQABABAAABQAJAJADAAQACACAHAAIAvAAQAHAAAGABQAFACAHAGIgDgQQgBgmAUgUIASgQQAKgKACgIQAUgBAOAOQAQAQAAAUQAXgJAGgPQABAAAFgTQAEgdAbgOQAagNAcALQgDAEgGACIgMABQgQAEgNAMQgMALgEAQIgDASQgEALgEAFQgIALgRAFQgMAEgJgGQgHgFgHgSQgGgSgJgFQgOAXgYANQgBAKgHAUQgJAVAFAYQAJAKACAJIAAAEQAFABACAFIAAAGQAGASgBANQACgCAHACQAUADAXgKQAPgGAZgOQAIgOAQgGQAAgXASgUQARgVAXgEIAPAAQALAAAGgBQAUgCAGgNIAAgFIAAgEIAAgBIgBgQQgGgSgGgHQgJgIAAgDQAAAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAQAHAHAWQADAFAAAEQAEgIAEgDQAEgFABgGQAAgOACgHIADgLIgDgFQgCgHAAgGIgFgJQgDgHgKAAQgHgCgFACQgEAFgIAAIgIALIgFACQAAAFgFAGQgEAFgFAAQgIACgOgEIAAgFQAMAAAGgLIAGgJQADgLANgDQAWgLAUAHIAHAEIAAABQAJAJARAIIABAFQACANgCAJQAAAFgFAOIAAASQgEAHgHAJIgHAHQAAAGgCAHQgDATgGAIQgKAKgTACQgUAAgJACQgYADgOAUQgSAUACAXQgLAEgQAKQgVAPgGABQgnAWgogOQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgGALgOALQgVAQgiADQgyAHgtgZQACAPgHAJQgkABgUgDQgcgEgUgOQgBAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgJAGQgUAMgLAUQgOAAgKALQgYADgXgMQgYgNgOgVQgIgOgBgNIgCAFIgMANIgLAXQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAGgCIgFASQgTADgTgHQgUgHgPgOQgIAOgRAGQgQAFgPgEQgdgDgXgZQAEAOgDASQgJgCgdACQgZAAgPgFQgVgGgZgYQgNAVgJAHQgDADgOAEQgYACgUgJQgXgHgNgSQAAAHgKAAIhGAAQgBADgDACQgHAEgIgHIgCgCIgHAAQgPAAgGADIgPAPQgMAMgUAGQgSAFgSgEIgmgKIgIgCIgCABQgFACgEgDQgLABgIAGIAAALQgPADgSACIgkgCgAqXE1QgBADgBAJQgCAtAEATQAFAUgBAJQAAAEgCABIACACIACADQAIAJAKAGQAMAFARgBQAaAAAZgJQgGgGALgHQAGgCAHgBIgBgEIgEgHQgDgGABgGQgIgBgKgFQgSgJgagVIgBgGQgZgTgQgfIgCAAQgFAAgEAGgAndG1QgXgFgNgGQANAGAXAFgAndG1QgJgJAFACQAiAHAbgXIAJgJIAKgHQAJgGAVgBQgJgLgOgNIgIgIIgCgFQgQADgigXIgQgLQgVgOgNgPQgMgMgTgbQAAAEgEAFIAAAJIABAFQAAAHgBAGIAAASQABAiAJAZQAHASgFANIADAGIADAHIAGAGIACADIAkAQIAAAAgADCFsIAJAXQAJAOAJAJQAQARAWAAQAQAAAVgRIAegcQANgJAJgEQAFACACAFIAAAJQAnAWAwgHIgCgQIAAgJIAAgEIAEAAQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAQgKgHACgSIACgSIACgDQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQACAFAAANQABALACAFIAEANQABAHAAAFQAYALAcACQAkABAkgMQAegOAGgUIABgJIAAgCIAAgDIAAgBIgGgBIgDgEIgBgEIAAgBIgDgEIgBgKQgDgUgSgHQgCgCgPAAIgugEIgHAAQgEgBgBgGIgUgVIACAAQgPgJgOAFIgJAHIgJAGQgDADgIANIgVAeIgYACQgPAAgKgEQgHgDgIgJQgPgQgFgOQgEgEgDgJIgGgMQgDgGgHAEIgEAFQgOAUgYAAQABAFgJAFIgUALQgMAGgGAHQgDAHgGAOIgHAWQgBAMABAJIgJAAQgCgMAAgJIgDAJIgGAIIgFANIAJALIgHgEIgCgBIAAAAIAAAAIgCABIACgBIAAAAIAAAAIACABIAHAEIgJgLIAFgNIAGgIQABAIAGANgAisCdQgEACgBAEQgEACAAAGQAAAFADADIABALIABAUIgBAJQgEADgDAHIgDAKIgIAMQgEAGgFAKIgCAHIgCAKQgCAHgEAKIgEAMIgFAMIgBACIgJACQgFACgFAGIgFACQgLAGgEANQgDANAHALQAFAGAIAEIABABIADAFQAGAKAMAFQAJAEANABQAMACAKgDQAEgCAKgKQAEgFAOgJIgCgDQAFgEADgFIAFAFIAGgEIgDAGIAGADIADABQAQARAUACQAIAEAHACQAOAEAOgEQAOgFAGgNIADgJQAUAVAOACQANADAUgHIAfgOQAIgCAGABIALAIQAMAJAPAAQAQAAAKgKQALgLADgXIAAgCIADgDQAIgKACgLQABgIgFgSQgIgWgJgJIgKgHIgKgIIgNgQQgHgIgLgBQgLgBgJAGIgLALQgIALgBAKIggARIgBgBIgGgMIgIgMQgLgMgZgEQgOgDgHACQgIACgGAFQgbgEgbgHQgFgIABgSIAAgBQgIgLgOgOQgKgIAAgIQAAgDADgCIgEAAIgFABIgCgIQgDgJgHgEQgEgCgEAAQgDAAgDACgAmdDRQgHBHAjBEIAGAEQARARAJAMIAHALIAFAGQAWgFAqgGQgLgHAJgLQgFgFAKAHIAFASIgFgSIgLgiIABgFIgBgGIABAGIgBAFQgZgXgRgdQgYgjgKgSQgSgbgWgZQgKAHgCAWgAE/goQgLgBgMgNQgfgggGgnIgEgNQgCgHgDgEQgKAJgVAAQgMAAgIgFQgCgCAAgDQgHAHgKADIgZANQgNALgHABQgOAIgWAAQglAAgLgWQgFgJAAgVQAAgQABgIQAEgFAAgDQgCgEgGgEQgIgDgBgEIAAgCIAAACIg8AgQgaANgMgEIgNgDQgJgGgDAAQgGgBgHAAIgLgCQgNgEgQgQQgRgSgFgKQgGgJgGgUQgDgVgDgJQgGgPgQgXQgGgJgGgCIgIAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIAAgCQggATgNAUIgOAgIgSBBQgJAiACAcQgXACgYgZQgRgSgUgdIgegzIgrhNIgIAJQgMASgEAJQgIAOgCALQgCAMAFAWIAEAXIAFAZQAEAHAFAQQAEAOgCALQgQAEgQgPQgQgQgJgHQgQgJgEgJQgFgDgEgJIgDgQIgQgbIgLgdQgFgQgKgJIAGgCQgPAAgKgKQAKAKAPAAIgGACIAAAGIgEADQgFAOAGASIAHAgIAOBDIAGAaQgLAGgUgNQgngcgbgrIgQggIgQghQgIgRgMgNIgDAEIADgEQgTArAJAtIAGATIAAALQgCAHACAFQABAIAJAMQAKAOACAIQgGADgMgFIgRgLQgGgDgLgEQgMgFgFgEIgUgQIgQgLQgHgHAAgJQgNAAgOgUIgOgTQgEgGABgFQgNgHgEgOQgEgHgBgJQgDABgEgBIgIAEIAAAAQADgHACgHIACgGIADABQAMgTAQgQQALgEAgAAQAbACAOgHQALgIALgQIATgTQAQgLAZAFQAXAEAWASQALgOAPgIQAPgDASAHIAcASQALAHAHAAQAHAAANgNQAVgXASgHQAkgSBAAdQAGAAAGACQARADAHAAQAJgCAOgKIAbgWQAOgMALgCQAUgEAVAZIAOASQAEAHADAEQAOACAYgLIAWgHQAGAAANAFQAcAPALAeQAEAJAEADQADAEAJgCQBEgFA4ADQARAAAKAEQATAFAXAdQAPAUAEAMIAGALQADADAJAEQAPACAGgCIALgEQAIgDAEAAQAGAAAJACIAFgEIANgFQAFgCAHgJQAIgEAJAGIAQAHIAPAFQAKAEAFADQAKAGAPAQQAOASALASQATghAWgaQAQgJATAOQAIAEAUAVQAMAOAUAPQAFAFAEAAQAFAAAEgHQABgCAEgNIAHgMQAKgLAPAEQAMAAALALIANAKQgBACAIACIAHAFQADAEAGAKQABAEAIAHQAQgJAHgTQAGAAAIgGQAKgHAEAAQAMgDAVAKQAMAGAGAFQAIAOADAAQADAEAJADIAJALIAKAHQAGACABAEQAEgCAEAAIADAAQACAGAFAGIgBAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgNAgACAmIAAAXQAAAOgFAJQgbACgugQIgWgLQgBgCAKAAIgegXIgMgSIgIgHIAAACQACADAAAEQAHAlgKAhQgPAFgVgOQghgYgbgZQgMgMgHgCQgDAmgPAiQgbAFgZgLQgZgMgOgXQgFgLgIgXIAMAOIgDgLQARAfAMAMQALALAMADQAOAGANgGQALgZAFgXQAGgcAMAAQAHAAALAMQAgAnAvAbQAKgcgEgfIAAgDIgBgJIABAAIADgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIAFAAIAEAHIAlAfQAKAJADABQAFAGASAFIAdAHQAMAEAGgGQAFgDAAgNQgCgeACgQQACgZAMgOQgIgCgGAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIgLgCQgNgOgagbQgMgLgIgBQgIgCgPAHQgJAEgHAFIgKAMQgIAJgFAAIAAAEQAEALgIAFIgEACQAAgGgBgDQgIADgEgFIAJgHQgEgEgEgFQgKgNgUgRQgPgPgMAEQgHACgGAHIgGASQgJAVgPgCQgFgBgHgGQgmgigQgTQgKgLgIAAQgFAAgLAJQgTATgPASQgEACgDAAIgHgDIAHADQgMgCgNgKQgOgUgJgHQgJgHgSgJQgOgHgJAAQgPABgFALIgQAEQgHAHgLADQgJACgJgDIAEgGQgFAEgIAAQgYADgWgOIgMgLIAAgBIgIgQQgDgLgQgSQgLgNgEgBQgOgJgiAAIhsAFQgRAAgHgFQgHgEgDgLQgCgKgCgGQgHgQgJgHQgLgLgLACQgFAAgOAHQgLAGgHgEQAAABAAABQABABgBAAQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgLAAgFgBQgEADgEgDIgBAAQgEgCgCgEIgUgXQgMgOgLAAQgFAAgHAFIgnAdQgTAKgKAAIgNgBQgJgEgDAAQgOgDgCgCIgDAAQgKACgTgIQgZgJgZAJIgEAAQgRAIgQARQgRAQgHAEQgMAEgPgGQgJgDgOgLQgggXgSAMIgOAPIgJgLIAJALIgCABQgJAJgJgFIACgFQgEAAgFgEIgFgFQgQgJgUAFQgTAFgNAQIgEAGIgHAHQgGAHgEAEQgKADgOAAIgmACQgTAAgHAEQgJADgSASQACAFAAAGIgCAAIAWAkQAMAXAKAJQAIADAMAJQAKAJABAJQAHACAHAHIANAMQAHAGAPAFIAZALQgRgNgEgnIgDgbIgBgjIABgYIAMgcQAEAAAJASQAGgUAFAFQAEACADAHIAFALIANASQAEAHAFAQQAFANALARQAKASATAUQAWAeAYAIQgFgJgEgRIgDgaQgDgLgJgZQgFgXgBgPQgDgRAGgSIADgJQACgCAUAVQgHgXAJAJQAFAFAFAPIAbA9QANAcANAQQAIAJASANIASAOQgLgegEgWIgEgbQgIgsAIgUQAGgSANgLQAAgMAKgFQAEgCAFAMIABgCQAFgMAHAHIgFALQARAJAPAXIAWAuQAOAZAXAdQAOASAgAeQACgKAAgJQALhGAdg5QAQgdANgLQAKgHAMgBIAHAAQAJABAHAEIgFADIACAAQACAAAKAPQAEADAEAGQgMgSAEACQAdAZAKAnIAHAXQAGAOAJARQAMAQAPAFQASAHAOgJQALAGAIAMIA4geQAQgLAOgCQANgCACAQIAVAAQAQARgCAXIgHACQACAFgCAMQAAALADAGQAGAFAJAAQAaAFAdgSIASgKIAPgGIARgKQALgIAHAAQAGAGgGALIAFADQAUACAQgQIAAgHQALAAAHAVIATA3QAGAPAGAFIAGAEIAGAFIAFALQAEADAFgBQAHgCACgGQAFgHAEgKIAFgUQAJgXAPgPIADgDQAGAFAAAJQgGgFgDgGQADAGAGAFIAAAEQgBAKgGAEQAAAEgFAIQgDAIgDADQgCAGAAAIQgCALgCAEQgEAKgIAGQgIAEgHAAIgFgBgAJthvIgPgFgAjclWQgHgDgEgFQAEAFAHADgAKEhYIgFgHIAeAXQgRgJgIgHgAJ/hfgAF3iBIAAAAgArfk5IAAAAgAqMl3g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("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");
	this.shape_4.setTransform(0.1,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AppHFQgXgBgIgIQgHgEgBgHIgDADIgEACIgLgTQgMgUgLgOIAHAIIAPAOQgBgOgDgfQgGgeACgQQABgNAFgFQAJgFALABQAVAGANATIAKASIAMANIARAMQAXATARAFIAEgCIABgBQgMgWgDghQgEgXACgpQAAgLAEgFQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIAAgHIABgEQACgBAGAAQADADAAAEIABAAQAGADADAGQAmAyAyAiQATAOAPgEQgghAAEhJQABgbALgJQAQgHAPALQAIAFALAQIBEBhQALAMADALIAAgCQALAJAMACQANAAAKgJQALgNACgJQAAgOACgHIAFgNIAQgZIAGgKIAGgLQACgEABgMQgBgNgCgHIgEgOQgBgHAEgHQADgLAEgFIADgIQACgBAGAAQAJgCAHADQAKAGAPATIARAbIAGAKQAEADAHAFQAFAFAGAKIAGANIAIAKQALAKAFACQAGAAAEgEIAJgFQAQgLARAGQAHACAKAHQANAFACAEQADABAEAGIAFAJIAIAFQAIgHAJgQQALgWAMgFQAUgLAgAbQApAiASAmIADgPQAEgMAEgEQAFgHANgFIASgLQADgCAGgFIAJgGQADgBAJAAQADgCAEgFIAJgLQAGgGARACIANACQAFAEAHARQAHAUANASQAHAHAGAEIAdAAQAGgEADgHQATggAOgJQAVgOAZAJQAJAFAGAFQACACAAAEQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQABABAAAAQABABAAABQAJAJADAAQACACAHAAIAvAAQAHAAAGABQAFACAHAGIgDgQQgBgmAUgUIASgQQAKgKACgIQAUgBAOAOQAQAQAAAUQAXgJAGgPQABAAAFgTQAEgdAbgOQAagNAcALQgDAEgGACIgMABQgQAEgNAMQgMALgEAQIgDASQgEALgEAFQgIALgRAFQgMAEgJgGQgHgFgHgSQgGgSgJgFQgOAXgYANQgBAKgHAUQgJAVAFAYQAJAKACAJIAAAEQAFABACAFIAAAGQAGASgBANQACgCAHACQAUADAXgKQAPgGAZgOQAIgOAQgGQAAgXASgUQARgVAXgEIAPAAQALAAAGgBQAUgCAGgNIAAgFIAAgEIAAgBIgBgQQgGgSgGgHQgJgIAAgDQAAAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAQAHAHAWQADAFAAAEQAEgIAEgDQAEgFABgGQAAgOACgHIADgLIgDgFQgCgHAAgGIgFgJQgDgHgKAAQgHgCgFACQgEAFgIAAIgIALIgFACQAAAFgFAGQgEAFgFAAQgIACgOgEIAAgFQAMAAAGgLIAGgJQADgLANgDQAWgLAUAHIAHAEIAAABQAJAJARAIIABAFQACANgCAJQAAAFgFAOIAAASQgEAHgHAJIgHAHQAAAGgCAHQgDATgGAIQgKAKgTACQgUAAgJACQgYADgOAUQgSAUACAXQgLAEgQAKQgVAPgGABQgnAWgogOQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgGALgOALQgVAQgiADQgyAHgtgZQACAPgHAJQgkABgUgDQgcgEgUgOQgBAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgJAGQgUAMgLAUQgOAAgKALQgYADgXgMQgYgNgOgVQgIgOgBgNIgCAFIgMANIgLAXQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAGgCIgFASQgTADgTgHQgUgHgPgOQgIAOgRAGQgQAFgPgEQgdgDgXgZQAEAOgDASQgJgCgdACQgZAAgPgFQgVgGgZgYQgNAVgJAHQgDADgOAEQgYACgUgJQgXgHgNgSQAAAHgKAAIhGAAQgBADgDACQgHAEgIgHIgCgCIgHAAQgPAAgGADIgPAPQgMAMgUAGQgSAFgSgEIgmgKIgIgCIgCABQgFACgEgDQgLABgIAGIAAALQgPADgSACIgkgCgAqXE1QgBADgBAJQgCAtAEATQAFAUgBAJQAAAEgCABIACACIACADQAIAJAKAGQAMAFARgBQAaAAAZgJQgGgGALgHQAGgCAHgBIgBgEIgEgHQgDgGABgGQgIgBgKgFQgSgJgagVIgBgGQgZgTgQgfIgCAAQgFAAgEAGgAndG1QgXgFgNgGQANAGAXAFgAndG1QgJgJAFACQAiAHAbgXIAJgJIAKgHQAJgGAVgBQgJgLgOgNIgIgIIgCgFQgQADgigXIgQgLQgVgOgNgPQgMgMgTgbQAAAEgEAFIAAAJIABAFQAAAHgBAGIAAASQABAiAJAZQAHASgFANIADAGIADAHIAGAGIACADIAkAQIAAAAgADCFsIAJAXQAJAOAJAJQAQARAWAAQAQAAAVgRIAegcQANgJAJgEQAFACACAFIAAAJQAnAWAwgHIgCgQIAAgJIAAgEIAEAAQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAQgKgHACgSIACgSIACgDQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQACAFAAANQABALACAFIAEANQABAHAAAFQAYALAcACQAkABAkgMQAegOAGgUIABgJIAAgCIAAgDIAAgBIgGgBIgDgEIgBgEIAAgBIgDgEIgBgKQgDgUgSgHQgCgCgPAAIgugEIgHAAQgEgBgBgGIgUgVIACAAQgPgJgOAFIgJAHIgJAGQgDADgIANIgVAeIgYACQgPAAgKgEQgHgDgIgJQgPgQgFgOQgEgEgDgJIgGgMQgDgGgHAEIgEAFQgOAUgYAAQABAFgJAFIgUALQgMAGgGAHQgDAHgGAOIgHAWQgBAMABAJIgJAAQgCgMAAgJIgDAJIgGAIIgFANIAJALIgHgEIgCgBIAAAAIAAAAIgCABIACgBIAAAAIAAAAIACABIAHAEIgJgLIAFgNIAGgIQABAIAGANgAisCdQgEACgBAEQgEACAAAGQAAAFADADIABALIABAUIgBAJQgEADgDAHIgDAKIgIAMQgEAGgFAKIgCAHIgCAKQgCAHgEAKIgEAMIgFAMIgBACIgJACQgFACgFAGIgFACQgLAGgEANQgDANAHALQAFAGAIAEIABABIADAFQAGAKAMAFQAJAEANABQAMACAKgDQAEgCAKgKQAEgFAOgJIgCgDQAFgEADgFIAFAFIAGgEIgDAGIAGADIADABQAQARAUACQAIAEAHACQAOAEAOgEQAOgFAGgNIADgJQAUAVAOACQANADAUgHIAfgOQAIgCAGABIALAIQAMAJAPAAQAQAAAKgKQALgLADgXIAAgCIADgDQAIgKACgLQABgIgFgSQgIgWgJgJIgKgHIgKgIIgNgQQgHgIgLgBQgLgBgJAGIgLALQgIALgBAKIggARIgBgBIgGgMIgIgMQgLgMgZgEQgOgDgHACQgIACgGAFQgbgEgbgHQgFgIABgSIAAgBQgIgLgOgOQgKgIAAgIQAAgDADgCIgEAAIgFABIgCgIQgDgJgHgEQgEgCgEAAQgDAAgDACgAmdDRQgHBHAjBEIAGAEQARARAJAMIAHALIAFAGQAWgFAqgGQgLgHAJgLQgFgFAKAHIAFASIgFgSIgLgiIABgFIgBgGIABAGIgBAFQgZgXgRgdQgYgjgKgSQgSgbgWgZQgKAHgCAWgAE/goQgLgBgMgNQgfgggGgnIgEgNQgCgHgDgEQgKAJgVAAQgMAAgIgFQgCgCAAgDQgHAHgKADIgZANQgNALgHABQgOAIgWAAQglAAgLgWQgFgJAAgVQAAgQABgIQAEgFAAgDQgCgEgGgEQgIgDgBgEIg8AgQgaANgMgEIgNgDQgJgGgDAAQgGgBgHAAIgLgCQgNgEgQgQQgRgSgFgKQgGgJgGgUQgDgVgDgJQgGgPgQgXQgGgJgGgCIgIAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIAAgCQggATgNAUIgOAgIgSBBQgJAiACAcQgXACgYgZQgRgSgUgdIgegzIgrhNIgIAJQgMASgEAJQgIAOgCALQgCAMAFAWIAEAXIAFAZQAEAHAFAQQAEAOgCALQgQAEgQgPQgQgQgJgHQgQgJgEgJQgFgDgEgJIgDgQIgQgbIgLgdQgFgQgKgJIAGgCQgPAAgKgKQAKAKAPAAIgGACIAAAGIgEADQgFAOAGASIAHAgIAOBDIAGAaQgLAGgUgNQgngcgbgrIgQggIgQghQgIgRgMgNIgDAEIADgEQgTArAJAtIAGATIAAALQgCAHACAFQABAIAJAMQAKAOACAIQgGADgMgFIgRgLQgGgDgLgEQgMgFgFgEIgUgQIgQgLQgHgHAAgJQgNAAgOgUIgOgTQgEgGABgFQgNgHgEgOQgEgHgBgJQgDABgEgBIgIAEIAAAAQADgHACgHIACgGIADABQAMgTAQgQQALgEAgAAQAbACAOgHQALgIALgQIATgTQAQgLAZAFQAXAEAWASQALgOAPgIQAPgDASAHIAcASQALAHAHAAQAHAAANgNQAVgXASgHQAkgSBAAdQAGAAAGACQARADAHAAQAJgCAOgKIAbgWQAOgMALgCQAUgEAVAZIAOASQAEAHADAEQAOACAYgLIAWgHQAGAAANAFQAcAPALAeQAEAJAEADQADAEAJgCQBEgFA4ADQARAAAKAEQATAFAXAdQAPAUAEAMIAGALQADADAJAEQAPACAGgCIALgEQAIgDAEAAQAGAAAJACIAFgEIANgFQAFgCAHgJQAIgEAJAGIAQAHIAPAFQAKAEAFADQAKAGAPAQQAOASALASQATghAWgaQAQgJATAOQAIAEAUAVQAMAOAUAPQAFAFAEAAQAFAAAEgHQABgCAEgNIAHgMQAKgLAPAEQAMAAALALIANAKQgBACAIACIAHAFQADAEAGAKQABAEAIAHQAQgJAHgTQAGAAAIgGQAKgHAEAAQAMgDAVAKQAMAGAGAFQAIAOADAAQADAEAJADIAJALIAKAHQAGACABAEQAEgCAEAAIADAAQACAGAFAGIgBAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgNAgACAmIAAAXQAAAOgFAJQgbACgugQIgWgLQgBgCAKAAIgegXIgMgSIgIgHIAAACQACADAAAEQAHAlgKAhQgPAFgVgOQghgYgbgZQgMgMgHgCQgDAmgPAiQgbAFgZgLQgZgMgOgXQgFgLgIgXIAMAOIgDgLQARAfAMAMQALALAMADQAOAGANgGQALgZAFgXQAGgcAMAAQAHAAALAMQAgAnAvAbQAKgcgEgfIAAgDIgBgJIABAAIADgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIAFAAIAEAHIAlAfQAKAJADABQAFAGASAFIAdAHQAMAEAGgGQAFgDAAgNQgCgeACgQQACgZAMgOQgIgCgGAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIgLgCQgNgOgagbQgMgLgIgBQgIgCgPAHQgJAEgHAFIgKAMQgIAJgFAAIAAAEQAEALgIAFIgEACQAAgGgBgDQgIADgEgFIAJgHQgEgEgEgFQgKgNgUgRQgPgPgMAEQgHACgGAHIgGASQgJAVgPgCQgFgBgHgGQgmgigQgTQgKgLgIAAQgFAAgLAJQgTATgPASQgEACgDAAIgHgDIAHADQgMgCgNgKQgOgUgJgHQgJgHgSgJQgOgHgJAAQgPABgFALIgQAEQgHAHgLADQgJACgJgDIAEgGQgFAEgIAAQgYADgWgOIgMgLIAAgBIgIgQQgDgLgQgSQgLgNgEgBQgOgJgiAAIhsAFQgRAAgHgFQgHgEgDgLQgCgKgCgGQgHgQgJgHQgLgLgLACQgFAAgOAHQgLAGgHgEQAAABAAABQABABgBAAQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgLAAgFgBQgEADgEgDIgBAAQgEgCgCgEIgUgXQgMgOgLAAQgFAAgHAFIgnAdQgTAKgKAAIgNgBQgJgEgDAAQgOgDgCgCIgDAAQgKACgTgIQgZgJgZAJIgEAAQgRAIgQARQgRAQgHAEQgMAEgPgGQgJgDgOgLQgggXgSAMIgOAPIgJgLIAJALIgCABQgJAJgJgFIACgFQgEAAgFgEIgFgFQgQgJgUAFQgTAFgNAQIgEAGIgHAHQgGAHgEAEQgKADgOAAIgmACQgTAAgHAEQgJADgSASQACAFAAAGIgCAAIAWAkQAMAXAKAJQAIADAMAJQAKAJABAJQAHACAHAHIANAMQAHAGAPAFIAZALQgRgNgEgnIgDgbIgBgjIABgYIAMgcQAEAAAJASQAGgUAFAFQAEACADAHIAFALIANASQAEAHAFAQQAFANALARQAKASATAUQAWAeAYAIQgFgJgEgRIgDgaQgDgLgJgZQgFgXgBgPQgDgRAGgSIADgJQACgCAUAVQgHgXAJAJQAFAFAFAPIAbA9QANAcANAQQAIAJASANIASAOQgLgegEgWIgEgbQgIgsAIgUQAGgSANgLQAAgMAKgFQAEgCAFAMIABgCQAFgMAHAHIgFALQARAJAPAXIAWAuQAOAZAXAdQAOASAgAeQACgKAAgJQALhGAdg5QAQgdANgLQAKgHAMgBIAHAAQAJABAHAEIgFADIACAAQACAAAKAPQAEADAEAGQgMgSAEACQAdAZAKAnIAHAXQAGAOAJARQAMAQAPAFQASAHAOgJQALAGAIAMIA4geQAQgLAOgCQANgCACAQIAAACIAAgCIAVAAQAQARgCAXIgHACQACAFgCAMQAAALADAGQAGAFAJAAQAaAFAdgSIASgKIAPgGIARgKQALgIAHAAQAGAGgGALIAFADQAUACAQgQIAAgHQALAAAHAVIATA3QAGAPAGAFIAGAEIAGAFIAFALQAEADAFgBQAHgCACgGQAFgHAEgKIAFgUQAJgXAPgPIADgDQAGAFAAAJQgGgFgDgGQADAGAGAFIAAAEQgBAKgGAEQAAAEgFAIQgDAIgDADQgCAGAAAIQgCALgCAEQgEAKgIAGQgIAEgHAAIgFgBgAJthvIgPgFgAjclWQgHgDgEgFQAEAFAHADgAKEhYIgFgHIAeAXQgRgJgIgHgAJ/hfgAF3iBIAAAAgArfk5IAAAAgAqMl3g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("ABajpQgLAAgKAAIAAACAF9jxIAHADAGRilQADAGAGAFQAHAFALAWIgCgLAKCiNIAOAFIASAQIAeAXAKOE1QAAgBAAAAAKOE4QAAgCAAgBAKNFDIABgOADiE1IgEAJIgFAIIgGANIAJALQgKgHAAADAm5ltQABgBAAgBApymbIAJALAq/lOIADgEApSlXQAKAKAPAAIgGACAjEl3QAEAFAHADQABAAAAAAQACAAALAPQAEADADAGAj6EtQACAGgCAFIALAiIAFASAneGRQANAGAXAF");
	this.shape_6.setTransform(-3.5,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A844B").s().p("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");
	this.shape_7.setTransform(0.1,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE9752").s().p("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");
	this.shape_8.setTransform(0.1,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#79385F").s().p("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");
	this.shape_9.setTransform(0.1,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0692E2").s().p("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");
	this.shape_10.setTransform(0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_7},{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_8},{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_9},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_10},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.insectMolarRglow();
	this.redGlow.setTransform(-1.5,0,1,1,0,0,0,95,50);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.insectMolarGglow();
	this.greenGlow.setTransform(-1.5,0,1,1,0,0,0,95,50);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-50,195,103);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Insectivore_Incisor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AAwG4IgQgJIgBAAIgTgWIgEgEIABgBIgCAAIgFAAIgEgHQgFgEgCgEIADgCIAQAAIANADIADABIgBABIADgBQAKAVAGAJQAMARAQANIgBABIgXgMgAA3GZIgQgUIABgBQACAFgCgNIgCgHQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCAAIABgCQABgDAIgCIANAEQAPAaAPASIANAPIgKAGQgEADgCAEQgOgNgOgTgABgGFQgPgQgMgIIABgDIgGgQIAZgEQANAaAOAWIAPATIgLAFIgBAAIgXgZgACBFxIgegkIAAgEIgHgDIgDgGIAYgFQAOALAVAfIATAaQgDAFgCAIIAAABIgJAEIgYgggAiclfQgJguAAgcIgBgaIAHAHQAPAPAFADIAHACIAIA4QAGAdAKAYIgIAJIgCgBIgLAKQgDAEgEACQgLgMgJgwgAg8lpQgFgRgIgpIAKAAIAVANIAWAOIABAAIAIAoIAFAQIgBACIABAMQgGACgGAHIgPARQgRgZgKgogAhxmBQgCgHgBgOIAAgRIAXACQAHAIADgBIACAAIALBGQAEAQAEANIgHADQgNAIgEAAQgUgtgHgkg");
	this.shape.setTransform(-0.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABIHgIAAgFQgRgBgkgjIgCgCQgRgMgIgMQgJAAgFgNQgEgJAAgFQAAgGAEgCQAJgEAfgCIgBgBIgBgFIABgCIgBgBIACgBIACgCIACgBIALgGIAPABIAAAAIABAAIADABQgCgHgBgIQABgCAFgCQAHgCASgEIgEgHQgCgSAsgBQApAfASAuIABAAIABAEIAGgGIAAAQIgCACIgHAHQgGAEgQAGQgPAFgMAIQgHAFgMAMIgOARIgFAOIgBAFgAgLGGQACAFAFAEIAEAGIAFAAIACAAIgBABIAEAEIATAWIABABIAQAIIAXANIABgBQgQgOgMgRQgGgJgKgVIgDABIABgBIgDgBIgNgDIgQAAgAAlGGIAQAUQAOATAOANQACgEAEgDIAKgGIgNgOQgPgTgPgaIgNgEQgIACgBADIgBACIACAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIACAIQACAMgCgEgAA+FbIAGAQIgBADQAMAJAPAQIAXAZIABgBIALgFIgPgTQgOgVgNgbgABXFBIADAHIAHACIAAAFIAeAkIAYAfIAJgEIAAAAQACgJADgFIgTgaQgVgfgOgKgAirlHIgCgLIAAgBIgBgGIgIhQQgDgLABgJQAAgMAFgGIADACIgCgFIABgLQAIgEAEAJIAGAQIAJAKQAEAEADABIAGABIABABQAOABAkAAQAWAAAPAIQAHAEAFAGIARAKQANAGAFAFQAEAHABAtIgBANIgCASIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIgTAWQgPARgCAAQgMAAgLgcIgIAIQgMAMgDAAIgMAAIgIgOIgNAOQgSASgHAAQgSAAgMg+gAinmoQAAAcAJAuQAJAxALALQAEgCADgDIALgLIACACIAIgJQgKgYgGgdIgIg5IgHgCQgFgCgPgQIgHgHIABAagAg+loQAKAoARAZIAPgRQAGgGAGgCIgBgNIABgCIgFgQIgIgnIgBAAIgWgPIgVgMIgKAAQAIApAFAQgAh2mVQABAOACAHQAHAkAUAuQAEgBANgHIAHgDQgEgNgEgRIgLhFIgCAAQgDAAgHgHIgXgCIAAAQgAi2nSIAAgBIAAABg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAwG4IgQgJIgBAAIgTgWIgEgEIABgBIgCAAIgFAAIgEgHQgFgEgCgEIADgCIAQAAIANADIADABIgBABIADgBQAKAVAGAJQAMARAQANIgBABIgXgMgAA3GZIgQgUIABgBQACAFgCgNIgCgHQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCAAIABgCQABgDAIgCIANAEQAPAaAPASIANAPIgKAGQgEADgCAEQgOgNgOgTgABgGFQgPgQgMgIIABgDIgGgQIAZgEQANAaAOAWIAPATIgLAFIgBAAIgXgZgACBFxIgegkIAAgEIgHgDIgDgGIAYgFQAOALAVAfIATAaQgDAFgCAIIAAABIgJAEIgYgggAiclfQgJguAAgcIgBgaIAHAHQAPAPAFADIAHACIAIA4QAGAdAKAYIgIAJIgCgBIgLAKQgDAEgEACQgLgMgJgwgAg8lpQgFgRgIgpIAKAAIAVANIAWAOIABAAIAIAoIAFAQIgBACIABAMQgGACgGAHIgPARQgRgZgKgogAhxmBQgCgHgBgOIAAgRIAXACQAHAIADgBIACAAIALBGQAEAQAEANIgHADQgNAIgEAAQgUgtgHgkg");
	this.shape_2.setTransform(-0.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AAwG4IgQgJIgBAAIgTgWIgEgEIABgBIgCAAIgFAAIgEgHQgFgEgCgEIADgCIAQAAIANADIADABIgBABIADgBQAKAVAGAJQAMARAQANIgBABIgXgMgAA3GZIgQgUIABgBQACAFgCgNIgCgHQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCAAIABgCQABgDAIgCIANAEQAPAaAPASIANAPIgKAGQgEADgCAEQgOgNgOgTgABgGFQgPgQgMgIIABgDIgGgQIAZgEQANAaAOAWIAPATIgLAFIgBAAIgXgZgACBFxIgegkIAAgEIgHgDIgDgGIAYgFQAOALAVAfIATAaQgDAFgCAIIAAABIgJAEIgYgggAiclfQgJguAAgcIgBgaIAHAHQAPAPAFADIAHACIAIA4QAGAdAKAYIgIAJIgCgBIgLAKQgDAEgEACQgLgMgJgwgAg8lpQgFgRgIgpIAKAAIAVANIAWAOIABAAIAIAoIAFAQIgBACIABAMQgGACgGAHIgPARQgRgZgKgogAhxmBQgCgHgBgOIAAgRIAXACQAHAIADgBIACAAIALBGQAEAQAEANIgHADQgNAIgEAAQgUgtgHgkg");
	this.shape_3.setTransform(-0.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AAwG4IgQgJIgBAAIgTgWIgEgEIABgBIgCAAIgFAAIgEgHQgFgEgCgEIADgCIAQAAIANADIADABIgBABIADgBQAKAVAGAJQAMARAQANIgBABIgXgMgAA3GZIgQgUIABgBQACAFgCgNIgCgHQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCAAIABgCQABgDAIgCIANAEQAPAaAPASIANAPIgKAGQgEADgCAEQgOgNgOgTgABgGFQgPgQgMgIIABgDIgGgQIAZgEQANAaAOAWIAPATIgLAFIgBAAIgXgZgACBFxIgegkIAAgEIgHgDIgDgGIAYgFQAOALAVAfIATAaQgDAFgCAIIAAABIgJAEIgYgggAiclfQgJguAAgcIgBgaIAHAHQAPAPAFADIAHACIAIA4QAGAdAKAYIgIAJIgCgBIgLAKQgDAEgEACQgLgMgJgwgAg8lpQgFgRgIgpIAKAAIAVANIAWAOIABAAIAIAoIAFAQIgBACIABAMQgGACgGAHIgPARQgRgZgKgogAhxmBQgCgHgBgOIAAgRIAXACQAHAIADgBIACAAIALBGQAEAQAEANIgHADQgNAIgEAAQgUgtgHgkg");
	this.shape_4.setTransform(-0.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AAwG4IgQgJIgBAAIgTgWIgEgEIABgBIgCAAIgFAAIgEgHQgFgEgCgEIADgCIAQAAIANADIADABIgBABIADgBQAKAVAGAJQAMARAQANIgBABIgXgMgAA3GZIgQgUIABgBQACAFgCgNIgCgHQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCAAIABgCQABgDAIgCIANAEQAPAaAPASIANAPIgKAGQgEADgCAEQgOgNgOgTgABgGFQgPgQgMgIIABgDIgGgQIAZgEQANAaAOAWIAPATIgLAFIgBAAIgXgZgACBFxIgegkIAAgEIgHgDIgDgGIAYgFQAOALAVAfIATAaQgDAFgCAIIAAABIgJAEIgYgggAiclfQgJguAAgcIgBgaIAHAHQAPAPAFADIAHACIAIA4QAGAdAKAYIgIAJIgCgBIgLAKQgDAEgEACQgLgMgJgwgAg8lpQgFgRgIgpIAKAAIAVANIAWAOIABAAIAIAoIAFAQIgBACIABAMQgGACgGAHIgPARQgRgZgKgogAhxmBQgCgHgBgOIAAgRIAXACQAHAIADgBIACAAIALBGQAEAQAEANIgHADQgNAIgEAAQgUgtgHgkg");
	this.shape_5.setTransform(-0.2,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AAwG4IgQgJIgBAAIgTgWIgEgEIABgBIgCAAIgFAAIgEgHQgFgEgCgEIADgCIAQAAIANADIADABIgBABIADgBQAKAVAGAJQAMARAQANIgBABIgXgMgAA3GZIgQgUIABgBQACAFgCgNIgCgHQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCAAIABgCQABgDAIgCIANAEQAPAaAPASIANAPIgKAGQgEADgCAEQgOgNgOgTgABgGFQgPgQgMgIIABgDIgGgQIAZgEQANAaAOAWIAPATIgLAFIgBAAIgXgZgACBFxIgegkIAAgEIgHgDIgDgGIAYgFQAOALAVAfIATAaQgDAFgCAIIAAABIgJAEIgYgggAiclfQgJguAAgcIgBgaIAHAHQAPAPAFADIAHACIAIA4QAGAdAKAYIgIAJIgCgBIgLAKQgDAEgEACQgLgMgJgwgAg8lpQgFgRgIgpIAKAAIAVANIAWAOIABAAIAIAoIAFAQIgBACIABAMQgGACgGAHIgPARQgRgZgKgogAhxmBQgCgHgBgOIAAgRIAXACQAHAIADgBIACAAIALBGQAEAQAEANIgHADQgNAIgEAAQgUgtgHgkg");
	this.shape_6.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.insectIncisorRglow();
	this.redGlow.setTransform(-0.7,-1.2,1,1,0,0,0,22.5,52);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.insectIncisorGglow();
	this.greenGlow.setTransform(-0.7,-1.2,1,1,0,0,0,22.5,52);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-53.2,49,108);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Insectivore_Cannie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA0GbQgNgDgJgLQADgGgBgHIgCgGIAAAAIgBgCIgBgCIgYgoQgFgMAAgIIABgRQAAgKgEgSIgIgbQgEgPgBgHIABgWIAAgMIAAgLIAFgNIABgZQAAgZAKgXQABgFABgEIABgBIAFgBIAAACQARAIAQATIAgArQA4BOBMA6IAbAXQAHAHAGAHIAAgBIAAABIAFAGIABABIAAAlQgKALgagBQgzAAgXgOQgOgKgFACQgFADgFAGIgHALQgCACgFACIgIAFIgFAHIgDAKQgFAHgIADQgFACgEAAIgIgCgAAGBZIgDAKIgDAVQgBAJABAQQAAASgBAHIgDALQgCAHAAAIQAAAYADAMIAHAdQAHAeABAMIAAAQQAAAKADAGQAEAIALALIAFALIAGALIAMANIABABQAGgCAIgFQACgKAHgHQAHgGAJgCQgBgJAJgGQAIgHAKACQAIAAAJAFIARAKQAWAKAlgEQAZgCAAgOQABgFgEgGIgJgKIgPgPIgMgKQgHgEgLgLQgdgZgRgSQgHgHgegkIhahvIgBAEgAgeAGIgXgMQgZgRgWgTIgagaQglgtgQgaQgKgQgMgXQgQgggKgYQgSgsgEgfQgCgWACgXQACgLACgHIAHgHIADgIIADgCIACgBIAAABIASABQACADgFADQAdAJAXgCIAugIQAZgGAJgGIAKgIQAGgFAFgCQAGgCAMAAIAgABIAKABIAAgBQAGgDAKAMIAAABIABABIAAAFQgEADgBAEIgBAAQgKAVgEAiQgEA3AJAzIAKArIAIAeQAXBVAXAtQAQAbACAIQAIAXgEARQg/gMg1ghgAjml8IAAADQgBAGgEAMQgHAaAMAtIALAmIAPAkIAJAWQACAFAOASIAQAdQALAUAeAiQASAUATARQAPAOALAIQANAKARAKQA0AcAqAHQAFgMgMgUQghg8gThBIgch5QgNhEAOhDQAFgBAFgJQgdAAgOAFIgcANQg3Aag9gQQgKgCgMgMIgKABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AA1GIIgMgMIgFgLIgGgMQgLgLgDgIQgEgGAAgJIAAgRQAAgMgIgeIgHgcQgCgMAAgYQAAgJACgHIADgLQAAgGAAgTQgBgQABgJIADgVIAEgKIABgDIBZBuQAeAkAIAIQARASAcAYQALAMAHADIANAKIAPAQIAIAJQAFAGgBAFQgBAOgYADQglADgWgKIgRgKQgKgEgHgBQgLgCgIAHQgJAGACAKQgJABgIAHQgHAGgCALQgHAFgHABgAgcgEQgRgJgOgKQgLgJgOgOQgUgRgRgUQgegigMgUIgQgdQgNgSgCgFIgJgWIgPgkIgLglQgMguAHgaQAEgLABgHIAAgCIAJgBQANALAJACQA9AQA4gaIAcgNQANgFAdAAQgFAKgFAAQgOBDAOBEIAcB5QASBCAhA7QAMAUgEAMQgqgGg0gdg");
	this.shape_1.setTransform(0,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AA1GIIgMgMIgFgLIgGgMQgLgLgDgIQgEgGAAgJIAAgRQAAgMgIgeIgHgcQgCgMAAgYQAAgJACgHIADgLQAAgGAAgTQgBgQABgJIADgVIAEgKIABgDIBZBuQAeAkAIAIQARASAcAYQALAMAHADIANAKIAPAQIAIAJQAFAGgBAFQgBAOgYADQglADgWgKIgRgKQgKgEgHgBQgLgCgIAHQgJAGACAKQgJABgIAHQgHAGgCALQgHAFgHABgAgcgEQgRgJgOgKQgLgJgOgOQgUgRgRgUQgegigMgUIgQgdQgNgSgCgFIgJgWIgPgkIgLglQgMguAHgaQAEgLABgHIAAgCIAJgBQANALAJACQA9AQA4gaIAcgNQANgFAdAAQgFAKgFAAQgOBDAOBEIAcB5QASBCAhA7QAMAUgEAMQgqgGg0gdg");
	this.shape_2.setTransform(0,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AA1GIIgMgMIgFgLIgGgMQgLgLgDgIQgEgGAAgJIAAgRQAAgMgIgeIgHgcQgCgMAAgYQAAgJACgHIADgLQAAgGAAgTQgBgQABgJIADgVIAEgKIABgDIBZBuQAeAkAIAIQARASAcAYQALAMAHADIANAKIAPAQIAIAJQAFAGgBAFQgBAOgYADQglADgWgKIgRgKQgKgEgHgBQgLgCgIAHQgJAGACAKQgJABgIAHQgHAGgCALQgHAFgHABgAgcgEQgRgJgOgKQgLgJgOgOQgUgRgRgUQgegigMgUIgQgdQgNgSgCgFIgJgWIgPgkIgLglQgMguAHgaQAEgLABgHIAAgCIAJgBQANALAJACQA9AQA4gaIAcgNQANgFAdAAQgFAKgFAAQgOBDAOBEIAcB5QASBCAhA7QAMAUgEAMQgqgGg0gdg");
	this.shape_3.setTransform(0,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AA1GIIgMgMIgFgLIgGgMQgLgLgDgIQgEgGAAgJIAAgRQAAgMgIgeIgHgcQgCgMAAgYQAAgJACgHIADgLQAAgGAAgTQgBgQABgJIADgVIAEgKIABgDIBZBuQAeAkAIAIQARASAcAYQALAMAHADIANAKIAPAQIAIAJQAFAGgBAFQgBAOgYADQglADgWgKIgRgKQgKgEgHgBQgLgCgIAHQgJAGACAKQgJABgIAHQgHAGgCALQgHAFgHABgAgcgEQgRgJgOgKQgLgJgOgOQgUgRgRgUQgegigMgUIgQgdQgNgSgCgFIgJgWIgPgkIgLglQgMguAHgaQAEgLABgHIAAgCIAJgBQANALAJACQA9AQA4gaIAcgNQANgFAdAAQgFAKgFAAQgOBDAOBEIAcB5QASBCAhA7QAMAUgEAMQgqgGg0gdg");
	this.shape_4.setTransform(0,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#79385F").s().p("AA1GIIgMgMIgFgLIgGgMQgLgLgDgIQgEgGAAgJIAAgRQAAgMgIgeIgHgcQgCgMAAgYQAAgJACgHIADgLQAAgGAAgTQgBgQABgJIADgVIAEgKIABgDIBZBuQAeAkAIAIQARASAcAYQALAMAHADIANAKIAPAQIAIAJQAFAGgBAFQgBAOgYADQglADgWgKIgRgKQgKgEgHgBQgLgCgIAHQgJAGACAKQgJABgIAHQgHAGgCALQgHAFgHABgAgcgEQgRgJgOgKQgLgJgOgOQgUgRgRgUQgegigMgUIgQgdQgNgSgCgFIgJgWIgPgkIgLglQgMguAHgaQAEgLABgHIAAgCIAJgBQANALAJACQA9AQA4gaIAcgNQANgFAdAAQgFAKgFAAQgOBDAOBEIAcB5QASBCAhA7QAMAUgEAMQgqgGg0gdg");
	this.shape_5.setTransform(0,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AA1GIIgMgMIgFgLIgGgMQgLgLgDgIQgEgGAAgJIAAgRQAAgMgIgeIgHgcQgCgMAAgYQAAgJACgHIADgLQAAgGAAgTQgBgQABgJIADgVIAEgKIABgDIBZBuQAeAkAIAIQARASAcAYQALAMAHADIANAKIAPAQIAIAJQAFAGgBAFQgBAOgYADQglADgWgKIgRgKQgKgEgHgBQgLgCgIAHQgJAGACAKQgJABgIAHQgHAGgCALQgHAFgHABgAgcgEQgRgJgOgKQgLgJgOgOQgUgRgRgUQgegigMgUIgQgdQgNgSgCgFIgJgWIgPgkIgLglQgMguAHgaQAEgLABgHIAAgCIAJgBQANALAJACQA9AQA4gaIAcgNQANgFAdAAQgFAKgFAAQgOBDAOBEIAcB5QASBCAhA7QAMAUgEAMQgqgGg0gdg");
	this.shape_6.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.insectCanineRglow();
	this.redGlow.setTransform(-1,-0.5,1,1,0,0,0,29,45.5);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.insectCanineGglow();
	this.greenGlow.setTransform(-1,-0.5,1,1,0,0,0,29,45.5);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-46,63,95);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Herbivore_Molar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApWDzQgDgDAAgFIABgCQAFgVgHgSIAAgNQAAgXADgRIgFgIIgBgHIgBgDQAMgcAXgYQAjgEARAEQALADAFgBQAGAAAKgHQAKgIAFgCQAPgFASALQALAFAFAIIADgEIALgGQAWgHAVAJQAIAEADAGIAEgCIAEAAQACgFAHgBIAHgCIAigBIALgBIAGgGQgZAAgXgEQgegEgKgRIgBgBQgrgIgnAIQgVAFgHAAQgJgBgRgHIgMgFIgOAFQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAQgCACgHAAQgcAAgFgCQgSAAgPgCQgMgDgGgGQgEgFABgLQACgLgCgCQAAgNgNgUQgBgIgDgGQgDgIgGgHIgBgDIgKgQQgJgXADgWIANgHQAHgOARgFQAQgHAPAIQAIADAPAMQAPAKALgEQAGgDALgMQAQgSAaAEQARADAWATQAaAUAMAGIASAFIAEADIgBgXQAIgCAIgGQAMgCAKAEQAMAHARAWQAEgBAEgGIAGgJQAEgJARgQQAOgDAIALQAHAJAFAQQgBgXACgWQAIgFAQANQASAMAKgEQABAAAIgFQALgGALADQAOAEAFAOQANgLAFgRQAcAEAMAYQALAFAQgOQAFgCAIgJIAMgGQAIgDANAFIATAKQAKAFAIAAQANAAAFgIQgBgDABgCIAHgDQAVgHATAPQANAKAFAMIAGgEIAJgKQAMgMAKAEIAGAGIAJAEQAGADAHgGQAHgEADgIIAHgPQAEgJAFgEQAKgHAOAGQALADALALQAIAIAEAIIABgBQANgJAXgCQAagEALgJQgDgNAKgKQAIgDAHAEQAIADADAHQAHADAIgGIAMgLQANgJAPgCQAIAGAXgGQAWgEAIAIQAHAGAAAMQAVgMAYAEIAKABQAGABAFgCQAGgDAGgLQAHgHALgBQAKgCAIAGQAMgRANgFQATgKAOALQAIAGAFAOIACgCQADAJAHAIIgGAFIABAgQgBAbAEAIIADALIgCAKQgDADgFABIgIABQAFAHAEAIIACAAIACADIADgFQACAHAEAIIgEAJQAEAKABALQAHAogXALQgHAGgPADQglAJgSADQgWAEgTAAIgDAHIgHAKQgFAFgKABQgFACgOgCIgWACQgDAFgFADIgDABIAAgVIgGAH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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("ApQDjIAAgBQACgQAAgSQACgGgBgQQgBgWABgOIADgIQACgMADgGIgEgDIAIgGQARgOATAAQAHAAAQAEQAOAEAJgBQAKgCAIgEIAKgIQAFgEAGAAQAIgCAKALIAJAKQgBADAAADIgaAFIAAAEQAQAGATgCIAAgLIAHgCQgBgLALgGQAHgDAMACQAGAAACABQADADAAAFIAAAyIABAlQgJAQgLAEIgKAEIgFAJQgEABgGAAIgXABIgIgBQgEgBgHgGQgDgDgDgBIAGgFQgHgJgKAAQgFgHgCgEQgGAGACAIIADADQgHAIADALQgiAGghgCQgLAAgGADQgFAFgEACQgEACgDAAIgDAAgAlADAIgLgDQgQgDgQAGIAAgHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgEAAgEQABgKgBgcQAAgYAEgMIACgBQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAIAEAAIACAAQADAAAGgGQAFgCAIAAIAfgDIANgDQAFgBALgLQAIgIAIABIgBAEIADgFQADgGAFADIABgCIgEgEIADgCIABAAQADACAGACQAHABAQAAIA0gFQAIAAAGgCIAFAKQADAIAAAFIgBAQIABAQQADALgCAFQAAABABAAQAAABAAABQAAAAAAABQABAAAAABIgCAAIgFAAIAAACQgKADgFAGQgLANgHAEIgOAJIgIAHQgOAIgWgSIgJgEQgDgEgEgDQADgIgCgLIAAgKIgIgBIgEgDQAAASgBALQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQgCAGgHAEIgLAIQgIAHgEAOQgLAAgLAGQgCACgDAAIgEAAgAj7BLIAAADIACgDIABAAIgBgEgAhhCGQgCgBgGgCQAEgCgCgDQgJgEgKABIACgIQACgOgBgXQgBgKgCgBIgEgLIgEgLIADgDQAEgHgDgMIgFgUQgCgEAAgKIAAgPQgBgIgGgOIgJgXQgDgIgBgOQgCgQgBgEIgBgGQAFgDADgEQAMgQAKABQAEADAEAIQAEAKADACIALADQAYAEALgIQAHgEALgMQAEgEAGgCQAHgBAEADQAJALAPAFQANAEAOgEQAHgBAEgEQAEgGgDgEIAggDQABAHADAEIgDAAQgCASAAAIIAGAWIADAPQADAEADAKIAAABQgCAHAAAIQ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JAEQgIACAAACIgXAMQgKAGgJAAQgEAAgFgCgACdhAIAEAFQAEAFgBAGIgBAJQAAAFAEACQACgCAAgEIAAgFIAAgJQgFgIgBgEIAAgEQAAgDgFgDQgFAEAEAGgAENgMIgVgFIgDAAQAEgOgGgTQgGgjABgLQAAgEAEgNQADgNAAgHIAAgCQAIgJAMgCQAEgCAagBQAUgBAJgJQgEgNAMgLQAKAIAKADQAMACAKgEQAFgCAKgJQAJgFAYgCQAXAAAJgFIgCALQgDADAAAEIABAAQgHAdAGAcIAEARQADAJAAAJQAAAPgEANIgWAUQgSANgRAAQgMACgagLQgZgKgNADQgKAKACAPQgHAIgPAAQgIAAgMgDgAFHhxQADACAAAGQAAASgCACQgCASAEAGQACAAACgEIAAgoQAAgIgDgDgAHygsQgNgEgKABIgBgJQAAgVgEgMIgEgIIgBgEIgFgeQgBgRACgNIANgKIAAgHIAAAAQAJgGAOgCQAQAAAfAJIAbgdQgBAFAFAEQAGACAFgCIARgNQANgNAVgDIAHAbIgCAIIADgBQAFAhgCAiIgHAKIgDAAQgEgBAAAEQgEACgEAFQgLAJgRAEIAAADIgLABIAAgHQADgGAAgEQADgHgDgDQgDgDgCAHIgNAbIgIAFIAEAEQgBACAAADIgGAGIgIAEQgJAHAEAGQgKAAgFAJIgEAAQgKAAgVgGg");
	this.shape_1.setTransform(0.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ApWDzQgDgDAAgFIABgCQAFgVgHgSIAAgNQAAgXADgRIgFgIIgBgHIgBgDQAMgcAXgYQAjgEARAEQALADAFgBQAGAAAKgHQAKgIAFgCQAPgFASALQALAFAFAIIADgEIALgGQAWgHAVAJQAIAEADAGIAEgCIAEAAQACgFAHgBIAHgCIAigBIALgBIAGgGQgZAAgXgEQgegEgKgRIgBgBQgrgIgnAIQgVAFgHAAQgJgBgRgHIgMgFIgOAFQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAQgCACgHAAQgcAAgFgCQgSAAgPgCQgMgDgGgGQgEgFABgLQACgLgCgCQAAgNgNgUQgBgIgDgGQgDgIgGgHIgBgDIgKgQQgJgXADgWIANgHQAHgOARgFQAQgHAPAIQAIADAPAMQAPAKALgEQAGgDALgMQAQgSAaAEQARADAWATQAaAUAMAGIASAFIAEADIgBgXQAIgCAIgGQAMgCAKAEQAMAHARAWQAEgBAEgGIAGgJQAEgJARgQQAOgDAIALQAHAJAFAQQgBgXACgWQAIgFAQANQASAMAKgEQABAAAIgFQALgGALADQAOAEAFAOQANgLAFgRQAcAEAMAYQALAFAQgOQAFgCAIgJIAMgGQAIgDANAFIATAKQAKAFAIAAQANAAAFgIQgBgDABgCIAHgDQAVgHATAPQANAKAFAMIAGgEIAJgKQAMgMAKAEIAGAGIAJAEQAGADAHgGQAHgEADgIIAHgPQAEgJAFgEQAKgHAOAGQALADALALQAIAIAEAIIABgBQANgJAXgCQAagEALgJQgDgNAKgKQAIgDAHAEQAIADADAHQAHADAIgGIAMgLQANgJAPgCQAIAGAXgGQAWgEAIAIQAHAGAAAMQAVgMAYAEIAKABQAGABAFgCQAGgDAGgLQAHgHALgBQAKgCAIAGQAMgRANgFQATgKAOALQAIAGAFAOIACgCQADAJAHAIIgGAFIABAgQgBAbAEAIIADALIgCAKQgDADgFABIgIABQAFAHAEAIIACAAIACADIADgFQACAHAEAIIgEAJQAEAKABALQAHAogXALQgHAGgPADQglAJgSADQgWAEgTAAIgDAHIgHAKQgFAFgKABQgFACgOgCQgLAAgLACQgDAFgFADIgDABIAAgVI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");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ApQDjIAAgBQACgQAAgSQACgGgBgQQgBgWABgOIADgIQACgMADgGIgEgDIAIgGQARgOATAAQAHAAAQAEQAOAEAJgBQAKgCAIgEIAKgIQAFgEAGAAQAIgCAKALIAJAKQgBADAAADIgaAFIAAAEQAQAGATgCIAAgLIAHgCQgBgLALgGQAHgDAMACQAGAAACABQADADAAAFIAAAyIABAlQgJAQgLAEIgKAEIgFAJQgEABgGAAIgXABIgIgBQgEgBgHgGQgDgDgDgBIAGgFQgHgJgKAAQgFgHgCgEQgGAGACAIIADADQgHAIADALQgiAGghgCQgLAAgGADQgFAFgEACQgEACgDAAIgDAAgAlADAIgLgDQgQgDgQAGIAAgHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgEAAgEQABgKgBgcQAAgYAEgMIACgBQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAIAEAAIACAAQADAAAGgGQAFgCAIAAIAfgDIANgDQAFgBALgLQAIgIAIABIgBAEIADgFQADgGAFADIABgCIgEgEIADgCIABAAQADACAGACQAHABAQAAIA0gFQAIAAAGgCIAFAKQADAIAAAFIgBAQIABAQQADALgCAFQAAABABAAQAAABAAABQAAAAAAABQABAAAAABIgCAAIgFAAIAAACQgKADgFAGQgLANgHAEIgOAJIgIAHQgOAIgWgSIgJgEQgDgEgEgDQADgIgCgLIAAgKIgIgBIgEgDQAAASgBALQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQgCAGgHAEIgLAIQgIAHgEAOQgLAAgLAGQgCACgDAAIgEAAgAj7BLIAAADIACgDIABAAIgBgEgAhhCGQgCgBgGgCQAEgCgCgDQgJgEgKABIACgIQACgOgBgXQgBgKgCgBIgEgLIgEgLIADgDQAEgHgDgMIgFgUQgCgEAAgKIAAgPQgBgIgGgOIgJgXQgDgIgBgOQgCgQgBgEIgBgGQAFgDADgEQAMgQAKABQAEADAEAIQAEAKADACIALADQAYAEALgIQAHgEALgMQAEgEAGgCQAHgBAEADQAJALAPAFQANAEAOgEQAHgBAEgEQAEgGgDgEIAggDQABAHADAEIgDAAQgCASAAAIIAGAWIADAPQADAEADAKIAAABQgCAHAAAIQ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JAEQgIACAAACIgXAMQgKAGgJAAQgEAAgFgCgACdhAIAEAFQAEAFgBAGIgBAJQAAAFAEACQACgCAAgEIAAgFIAAgJQgFgIgBgEIAAgEQAAgDgFgDQgFAEAEAGgAENgMIgVgFIgDAAQAEgOgGgTQgGgjABgLQAAgEAEgNQADgNAAgHIAAgCQAIgJAMgCQAEgCAagBQAUgBAJgJQgEgNAMgLQAKAIAKADQAMACAKgEQAFgCAKgJQAJgFAYgCQAXAAAJgFIgCALQgDADAAAEIABAAQgHAdAGAcIAEARQADAJAAAJQAAAPgEANIgWAUQgSANgRAAQgMACgagLQgZgKgNADQgKAKACAPQgHAIgPAAQgIAAgMgDgAFHhxQADACAAAGQAAASgCACQgCASAEAGQACAAACgEIAAgoQAAgIgDgDgAHygsQgNgEgKABIgBgJQAAgVgEgMIgEgIIgBgEIgFgeQgBgRACgNIANgKIAAgHIAAAAQAJgGAOgCQAQAAAfAJIAbgdQgBAFAFAEQAGACAFgCIARgNQANgNAVgDIAHAbIgCAIIADgBQAFAhgCAiIgHAKIgDAAQgEgBAAAEQgEACgEAFQgLAJgRAEIAAADIgLABIAAgHQADgGAAgEQADgHgDgDQgDgDgCAHIgNAbIgIAFIAEAEQgBACAAADIgGAGIgIAEQgJAHAEAGQgKAAgFAJIgEAAQgKAAgVgGg");
	this.shape_3.setTransform(0.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A844B").s().p("ApQDjIAAgBQACgQAAgSQACgGgBgQQgBgWABgOIADgIQACgMADgGIgEgDIAIgGQARgOATAAQAHAAAQAEQAOAEAJgBQAKgCAIgEIAKgIQAFgEAGAAQAIgCAKALIAJAKQgBADAAADIgaAFIAAAEQAQAGATgCIAAgLIAHgCQgBgLALgGQAHgDAMACQAGAAACABQADADAAAFIAAAyIABAlQgJAQgLAEIgKAEIgFAJQgEABgGAAIgXABIgIgBQgEgBgHgGQgDgDgDgBIAGgFQgHgJgKAAQgFgHgCgEQgGAGACAIIADADQgHAIADALQgiAGghgCQgLAAgGADQgFAFgEACQgEACgDAAIgDAAgAlADAIgLgDQgQgDgQAGIAAgHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgEAAgEQABgKgBgcQAAgYAEgMIACgBQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAIAEAAIACAAQADAAAGgGQAFgCAIAAIAfgDIANgDQAFgBALgLQAIgIAIABIgBAEIADgFQADgGAFADIABgCIgEgEIADgCIABAAQADACAGACQAHABAQAAIA0gFQAIAAAGgCIAFAKQADAIAAAFIgBAQIABAQQADALgCAFQAAABABAAQAAABAAABQAAAAAAABQABAAAAABIgCAAIgFAAIAAACQgKADgFAGQgLANgHAEIgOAJIgIAHQgOAIgWgSIgJgEQgDgEgEgDQADgIgCgLIAAgKIgIgBIgEgDQAAASgBALQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQgCAGgHAEIgLAIQgIAHgEAOQgLAAgLAGQgCACgDAAIgEAAgAj7BLIAAADIACgDIABAAIgBgEgAhhCGQgCgBgGgCQAEgCgCgDQgJgEgKABIACgIQACgOgBgXQgBgKgCgBIgEgLIgEgLIADgDQAEgHgDgMIgFgUQgCgEAAgKIAAgPQgBgIgGgOIgJgXQgDgIgBgOQgCgQgBgEIgBgGQAFgDADgEQAMgQAKABQAEADAEAIQAEAKADACIALADQAYAEALgIQAHgEALgMQAEgEAGgCQAHgBAEADQAJALAPAFQANAEAOgEQAHgBAEgEQAEgGgDgEIAggDQABAHADAEIgDAAQgCASAAAIIAGAWIADAPQADAEADAKIAAABQgCAHAAAIQ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JAEQgIACAAACIgXAMQgKAGgJAAQgEAAgFgCgACdhAIAEAFQAEAFgBAGIgBAJQAAAFAEACQACgCAAgEIAAgFIAAgJQgFgIgBgEIAAgEQAAgDgFgDQgFAEAEAGgAENgMIgVgFIgDAAQAEgOgGgTQgGgjABgLQAAgEAEgNQADgNAAgHIAAgCQAIgJAMgCQAEgCAagBQAUgBAJgJQgEgNAMgLQAKAIAKADQAMACAKgEQAFgCAKgJQAJgFAYgCQAXAAAJgFIgCALQgDADAAAEIABAAQgHAdAGAcIAEARQADAJAAAJQAAAPgEANIgWAUQgSANgRAAQgMACgagLQgZgKgNADQgKAKACAPQgHAIgPAAQgIAAgMgDgAFHhxQADACAAAGQAAASgCACQgCASAEAGQACAAACgEIAAgoQAAgIgDgDgAHygsQgNgEgKABIgBgJQAAgVgEgMIgEgIIgBgEIgFgeQgBgRACgNIANgKIAAgHIAAAAQAJgGAOgCQAQAAAfAJIAbgdQgBAFAFAEQAGACAFgCIARgNQANgNAVgDIAHAbIgCAIIADgBQAFAhgCAiIgHAKIgDAAQgEgBAAAEQgEACgEAFQgLAJgRAEIAAADIgLABIAAgHQADgGAAgEQADgHgDgDQgDgDgCAHIgNAbIgIAFIAEAEQgBACAAADIgGAGIgIAEQgJAHAEAGQgKAAgFAJIgEAAQgKAAgVgGg");
	this.shape_4.setTransform(0.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE9752").s().p("ApQDjIAAgBQACgQAAgSQACgGgBgQQgBgWABgOIADgIQACgMADgGIgEgDIAIgGQARgOATAAQAHAAAQAEQAOAEAJgBQAKgCAIgEIAKgIQAFgEAGAAQAIgCAKALIAJAKQgBADAAADIgaAFIAAAEQAQAGATgCIAAgLIAHgCQgBgLALgGQAHgDAMACQAGAAACABQADADAAAFIAAAyIABAlQgJAQgLAEIgKAEIgFAJQgEABgGAAIgXABIgIgBQgEgBgHgGQgDgDgDgBIAGgFQgHgJgKAAQgFgHgCgEQgGAGACAIIADADQgHAIADALQgiAGghgCQgLAAgGADQgFAFgEACQgEACgDAAIgDAAgAlADAIgLgDQgQgDgQAGIAAgHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgEAAgEQABgKgBgcQAAgYAEgMIACgBQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAIAEAAIACAAQADAAAGgGQAFgCAIAAIAfgDIANgDQAFgBALgLQAIgIAIABIgBAEIADgFQADgGAFADIABgCIgEgEIADgCIABAAQADACAGACQAHABAQAAIA0gFQAIAAAGgCIAFAKQADAIAAAFIgBAQIABAQQADALgCAFQAAABABAAQAAABAAABQAAAAAAABQABAAAAABIgCAAIgFAAIAAACQgKADgFAGQgLANgHAEIgOAJIgIAHQgOAIgWgSIgJgEQgDgEgEgDQADgIgCgLIAAgKIgIgBIgEgDQAAASgBALQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQgCAGgHAEIgLAIQgIAHgEAOQgLAAgLAGQgCACgDAAIgEAAgAj7BLIAAADIACgDIABAAIgBgEgAhhCGQgCgBgGgCQAEgCgCgDQgJgEgKABIACgIQACgOgBgXQgBgKgCgBIgEgLIgEgLIADgDQAEgHgDgMIgFgUQgCgEAAgKIAAgPQgBgIgGgOIgJgXQgDgIgBgOQgCgQgBgEIgBgGQAFgDADgEQAMgQAKABQAEADAEAIQAEAKADACIALADQAYAEALgIQAHgEALgMQAEgEAGgCQAHgBAEADQAJALAPAFQANAEAOgEQAHgBAEgEQAEgGgDgEIAggDQABAHADAEIgDAAQgCASAAAIIAGAWIADAPQADAEADAKIAAABQgCAHAAAIQACAGAAAMQAAALgGAEQgFADgNgBIgngEQgLALgJAJIAAAKQgEAAgGADIgJADQgGAAgJgGQgKgGgGABQgFAAgGAIQgIAKgCABQgGADgIAAQgPABgSgBQAAgBAAAAQgBAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQAPAIASAAQASgBAMgKQAKgHABAAQAHgBAMAIQAOAKAHgHQAKgCAEgNQARgWAMgCQAIgBARAEQAMADAIgBIgCATIABBDIgEADQgGAEACAFQgGAAgGAHIgNAIQgFADgPgEIgcgHIgNgBIAAgCQAKgCACgDQAHgHgEgFQgMAEgOgCIgJAZQgLAAgKAHQgTACgNAAIgNgBgAg/hOIABAHIAFAHQAEAIgDAPQgDAPADAHIAEAAIADgWQAAgNgDgHIgEgKQgBgBAAgIQAAgGgFgDQgCADABAIgAAFhAIAAAVQAAAGABAFIAEAAQACgFAAgLQAAgLgCgGIgFABgACRB9IgagNQgOgFgLAFQABgjgBgrQAAgPgEgKQAEgFAAgIQAHADAIABQAPAAAEABQAHACALAJQALAKAHABQAQAHAhgSQAIgEAGgEQgBAMAGAVQAJAagCALQgIAJgLAHIgPAJQgKAEgEAEQgMAPgIAEQgFACgGAAQgHAAgIgDgAEpBNIglgFIgHAAQAAgNgFgNIgKgYQgGgOACgIIAHgIIABAAIAXAIQAdAIAMgDQAOgCADgHIADgJQAAAFAFAJIABACIAAgMIADgIIgBgFIADgBQAEgBAFABQADgBAEAEQAHABAPAIQAOAHALAAQAQACAagSIALgIIADACQADAEAAAJIAAAJIgDAFQAAAHAEAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIABAOQAAAHgCAFQgDgDgGAAQgOAJgMAGQABAHgFAGQgFAHgGAAQgGAAgOgFQgTgIgUACQACgMgGgXQgGAAgFgDQAFAQgDAOQgCAMgJAKQgIAKgLAAgAlVAoQgOgDgEgHIACgEQABgEgEgDIgCgDQgBgCABgFQADgcgJgeQgJgZgQgUQABgHgBgIIAdgKQAHADAEAJQAGALAFAFQALALAMgFIAAgEIAIgCIAAgLQADgCALgMQAJgKAJAEQACAEgBAHIAOAKIABATQAIgHgBgWQgBgYAGgJQAfAdAUgIQAEgBAIgGQAJgFAFACIAEALIgBAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIACALIAEAYIAIAaQAHAUAFAoIAEAeIgBgBQgDADgFgCIAAACIhGAEIgPAAIAAgCQgDgIgHgHQACAEgDAGQgDAEgFABQgEADgQACIgYAFIgIABQgOAAgWgGgAkOgeIACACIgDAEQgCABAAAGIACAGIAIAAIABACIACgDQABgBgDgEIgEgDIAEgIIACgCIAAgHIgIgBIAAABIgDAAQAAAFABACgAHbAqIAAgDQABgigNgZIAHgHIAEgJQAEgBAHABQAHAAALAGIANABIAPAGQAJADAFAAQAFgHAKAAIAAgLQALgJAGgGQAFgHADgHIABgEQAIABANgBQAFgGAIgBIACAAIAcAAIAFAIIgDAIIAHACIACAEQAGAUgHANQgFAJgNAGQgHAEgPADIgqAJIAAACIgcAHQADgCADgHIAIgEQAEgCAAgDQgLgGgHADQgEAAgGAGQgQAOgEAIIgFAKQgGAHgQABIgSAAgApnAXQgGgEACgKIABgOQgBgLgKgPQgEgIgHgHIACAAQgDgDAAgDIABgEIgCgEIgCABQgMgYgHgaIAPgGIAAgIQATgMALgCQAMAAAcAPQAXANAOgEQALgUALgFQAMgGASAJQAHACAWAPQAbAUAhAHQABAGAGAJQAWAegDAlIgBAXIAAACQgEAAgGADQgJABgRgEIgZgCQgIAAgaAGQgUAGgOgEQgGgCgCgCQAAgDABgDQgBACgEAAQgJgHgEgLQgFgNgCgZIgCglQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAABQgGAhAHAlQADAKAFAIQgEAAgDACQgEAAgBAEQgDAEABACIg1ACQgLAAgEgDgACeAHIgGgGIgGgDQgLgLgQAAQgOAAgLAHIABgWIAFgJIABgIQgBgDgFgFIgCgLQgGgGAAgCQACgIgCgFIgFgLQgCgCAAgRIgBgEIAFAGIACAYQAIgMgBgMIANgCQACgHAFgGQAGgGAIgBQAbAUAOgMQAHgGAFgRQAEgHAHgEQAJgDAIABQAHACAGAGQAGAGABAIIACAEIgCAAQgBAGABAFQgFAnADAQIAEAOQACAIAAAGQADAQgJAKIgJAEQgIACAAACIgXAMQgKAGgJAAQgEAAgFgCgACdhAIAEAFQAEAFgBAGIgBAJQAAAFAEACQACgCAAgEIAAgFIAAgJQgFgIgBgEIAAgEQAAgDgFgDQgFAEAEAGgAENgMIgVgFIgDAAQAEgOgGgTQgGgjABgLQAAgEAEgNQADgNAAgHIAAgCQAIgJAMgCQAEgCAagBQAUgBAJgJQgEgNAMgLQAKAIAKADQAMACAKgEQAFgCAKgJQAJgFAYgCQAXAAAJgFIgCALQgDADAAAEIABAAQgHAdAGAcIAEARQADAJAAAJQAAAPgEANIgWAUQgSANgRAAQgMACgagLQgZgKgNADQgKAKACAPQgHAIgPAAQgIAAgMgDgAFHhxQADACAAAGQAAASgCACQgCASAEAGQACAAACgEIAAgoQAAgIgDgDgAHygsQgNgEgKABIgBgJQAAgVgEgMIgEgIIgBgEIgFgeQgBgRACgNIANgKIAAgHIAAAAQAJgGAOgCQAQAAAfAJIAbgdQgBAFAFAEQAGACAFgCIARgNQANgNAVgDIAHAbIgCAIIADgBQAFAhgCAiIgHAKIgDAAQgEgBAAAEQgEACgEAFQgLAJgRAEIAAADIgLABIAAgHQADgGAAgEQADgHgDgDQgDgDgCAHIgNAbIgIAFIAEAEQgBACAAADIgGAGIgIAEQgJAHAEAGQgKAAgFAJIgEAAQgKAAgVgGg");
	this.shape_5.setTransform(0.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#964675").s().p("ApQDjIAAgBQACgQAAgSQACgGgBgQQgBgWABgOIADgIQACgMADgGIgEgDIAIgGQARgOATAAQAHAAAQAEQAOAEAJgBQAKgCAIgEIAKgIQAFgEAGAAQAIgCAKALIAJAKQgBADAAADIgaAFIAAAEQAQAGATgCIAAgLIAHgCQgBgLALgGQAHgDAMACQAGAAACABQADADAAAFIAAAyIABAlQgJAQgLAEIgKAEIgFAJQgEABgGAAIgXABIgIgBQgEgBgHgGQgDgDgDgBIAGgFQgHgJgKAAQgFgHgCgEQgGAGACAIIADADQgHAIADALQgiAGghgCQgLAAgGADQgFAFgEACQgEACgDAAIgDAAgAlADAIgLgDQgQgDgQAGIAAgHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgEAAgEQABgKgBgcQAAgYAEgMIACgBQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAIAEAAIACAAQADAAAGgGQAFgCAIAAIAfgDIANgDQAFgBALgLQAIgIAIABIgBAEIADgFQADgGAFADIABgCIgEgEIADgCIABAAQADACAGACQAHABAQAAIA0gFQAIAAAGgCIAFAKQADAIAAAFIgBAQIABAQQADALgCAFQAAABABAAQAAABAAABQAAAAAAABQABAAAAABIgCAAIgFAAIAAACQgKADgFAGQgLANgHAEIgOAJIgIAHQgOAIgWgSIgJgEQgDgEgEgDQADgIgCgLIAAgKIgIgBIgEgDQAAASgBALQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQgCAGgHAEIgLAIQgIAHgEAOQgLAAgLAGQgCACgDAAIgEAAgAj7BLIAAADIACgDIABAAIgBgEgAhhCGQgCgBgGgCQAEgCgCgDQgJgEgKABIACgIQACgOgBgXQgBgKgCgBIgEgLIgEgLIADgDQAEgHgDgMIgFgUQgCgEAAgKIAAgPQgBgIgGgOIgJgXQgDgIgBgOQgCgQgBgEIgBgGQAFgDADgEQAMgQAKABQAEADAEAIQAEAKADACIALADQAYAEALgIQAHgEALgMQAEgEAGgCQAHgBAEADQAJALAPAFQANAEAOgEQAHgBAEgEQAEgGgDgEIAggDQABAHADAEIgDAAQgCASAAAIIAGAWIADAPQADAEADAKIAAABQgCAHAAAIQ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JAEQgIACAAACIgXAMQgKAGgJAAQgEAAgFgCgACdhAIAEAFQAEAFgBAGIgBAJQAAAFAEACQACgCAAgEIAAgFIAAgJQgFgIgBgEIAAgEQAAgDgFgDQgFAEAEAGgAENgMIgVgFIgDAAQAEgOgGgTQgGgjABgLQAAgEAEgNQADgNAAgHIAAgCQAIgJAMgCQAEgCAagBQAUgBAJgJQgEgNAMgLQAKAIAKADQAMACAKgEQAFgCAKgJQAJgFAYgCQAXAAAJgFIgCALQgDADAAAEIABAAQgHAdAGAcIAEARQADAJAAAJQAAAPgEANIgWAUQgSANgRAAQgMACgagLQgZgKgNADQgKAKACAPQgHAIgPAAQgIAAgMgDgAFHhxQADACAAAGQAAASgCACQgCASAEAGQACAAACgEIAAgoQAAgIgDgDgAHygsQgNgEgKABIgBgJQAAgVgEgMIgEgIIgBgEIgFgeQgBgRACgNIANgKIAAgHIAAAAQAJgGAOgCQAQAAAfAJIAbgdQgBAFAFAEQAGACAFgCIARgNQANgNAVgDIAHAbIgCAIIADgBQAFAhgCAiIgHAKIgDAAQgEgBAAAEQgEACgEAFQgLAJgRAEIAAADIgLABIAAgHQADgGAAgEQADgHgDgDQgDgDgCAHIgNAbIgIAFIAEAEQgBACAAADIgGAGIgIAEQgJAHAEAGQgKAAgFAJIgEAAQgKAAgVgGg");
	this.shape_6.setTransform(0.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0692E2").s().p("ApQDjIAAgBQACgQAAgSQACgGgBgQQgBgWABgOIADgIQACgMADgGIgEgDIAIgGQARgOATAAQAHAAAQAEQAOAEAJgBQAKgCAIgEIAKgIQAFgEAGAAQAIgCAKALIAJAKQgBADAAADIgaAFIAAAEQAQAGATgCIAAgLIAHgCQgBgLALgGQAHgDAMACQAGAAACABQADADAAAFIAAAyIABAlQgJAQgLAEIgKAEIgFAJQgEABgGAAIgXABIgIgBQgEgBgHgGQgDgDgDgBIAGgFQgHgJgKAAQgFgHgCgEQgGAGACAIIADADQgHAIADALQgiAGghgCQgLAAgGADQgFAFgEACQgEACgDAAIgDAAgAlADAIgLgDQgQgDgQAGIAAgHQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgEAAgEQABgKgBgcQAAgYAEgMIACgBQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAIAEAAIACAAQADAAAGgGQAFgCAIAAIAfgDIANgDQAFgBALgLQAIgIAIABIgBAEIADgFQADgGAFADIABgCIgEgEIADgCIABAAQADACAGACQAHABAQAAIA0gFQAIAAAGgCIAFAKQADAIAAAFIgBAQIABAQQADALgCAFQAAABABAAQAAABAAABQAAAAAAABQABAAAAABIgCAAIgFAAIAAACQgKADgFAGQgLANgHAEIgOAJIgIAHQgOAIgWgSIgJgEQgDgEgEgDQADgIgCgLIAAgKIgIgBIgEgDQAAASgBALQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQgCAGgHAEIgLAIQgIAHgEAOQgLAAgLAGQgCACgDAAIgEAAgAj7BLIAAADIACgDIABAAIgBgEgAhhCGQgCgBgGgCQAEgCgCgDQgJgEgKABIACgIQACgOgBgXQgBgKgCgBIgEgLIgEgLIADgDQAEgHgDgMIgFgUQgCgEAAgKIAAgPQgBgIgGgOIgJgXQgDgIgBgOQgCgQgBgEIgBgGQAFgDADgEQAMgQAKABQAEADAEAIQAEAKADACIALADQAYAEALgIQAHgEALgMQAEgEAGgCQAHgBAEADQAJALAPAFQANAEAOgEQAHgBAEgEQAEgGgDgEIAggDQABAHADAEIgDAAQgCASAAAIIAGAWIADAPQADAEADAKIAAABQgCAHAAAIQACAGAAAMQAAALgGAEQgFADgNgBIgngEQgLALgJAJIAAAKQgEAAgGADIgJADQgGAAgJgGQgKgGgGABQgFAAgGAIQgIAKgCABQgGADgIAAQgPABgSgBQAAgBAAAAQgBAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQAPAIASAAQASgBAMgKQAKgHABAAQAHgBAMAIQAOAKAHgHQAKgCAEgNQARgWAMgCQAIgBARAEQAMADAIgBIgCATIABBDIgEADQgGAEACAFQgGAAgGAHIgNAIQgFADgPgEIgcgHIgNgBIAAgCQAKgCACgDQAHgHgEgFQgMAEgOgCIgJAZQgLAAgKAHQgTACgNAAIgNgBgAg/hOIABAHIAFAHQAEAIgDAPQgDAPADAHIAEAAIADgWQAAgNgDgHIgEgKQgBgBAAgIQAAgGgFgDQgCADABAIgAAFhAIAAAVQAAAGABAFIAEAAQACgFAAgLQAAgLgCgGIgFABgACRB9IgagNQgOgFgLAFQABgjgBgrQAAgPgEgKQAEgFAAgIQAHADAIABQAPAAAEABQAHACALAJQALAKAHABQAQAHAhgSQAIgEAGgEQgBAMAGAVQAJAagCALQgIAJgLAHIgPAJQgKAEgEAEQgMAPgIAEQgFACgGAAQgHAAgIgDgAEpBNIglgFIgHAAQAAgNgFgNIgKgYQgGgOACgIIAHgIIABAAIAXAIQAdAIAMgDQAOgCADgHIADgJQAAAFAFAJIABACIAAgMIADgIIgBgFIADgBQAEgBAFABQADgBAEAEQAHABAPAIQAOAHALAAQAQACAagSIALgIIADACQADAEAAAJIAAAJIgDAFQAAAHAEAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIABAOQAAAHgCAFQgDgDgGAAQgOAJgMAGQABAHgFAGQgFAHgGAAQgGAAgOgFQgTgIgUACQACgMgGgXQgGAAgFgDQAFAQgDAOQgCAMgJAKQgIAKgLAAgAlVAoQgOgDgEgHIACgEQABgEgEgDIgCgDQgBgCABgFQADgcgJgeQgJgZgQgUQABgHgBgIIAdgKQAHADAEAJQAGALAFAFQALALAMgFIAAgEIAIgCIAAgLQADgCALgMQAJgKAJAEQACAEgBAHIAOAKIABATQAIgHgBgWQgBgYAGgJQAfAdAUgIQAEgBAIgGQAJgFAFACIAEALIgBAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIACALIAEAYIAIAaQAHAUAFAoIAEAeIgBgBQgDADgFgCIAAACIhGAEIgPAAIAAgCQgDgIgHgHQACAEgDAGQgDAEgFABQgEADgQACIgYAFIgIABQgOAAgWgGgAkOgeIACACIgDAEQgCABAAAGIACAGIAIAAIABACIACgDQABgBgDgEIgEgDIAEgIIACgCIAAgHIgIgBIAAABIgDAAQAAAFABACgAHbAqIAAgDQABgigNgZIAHgHIAEgJQAEgBAHABQAHAAALAGIANABIAPAGQAJADAFAAQAFgHAKAAIAAgLQALgJAGgGQAFgHADgHIABgEQAIABANgBQAFgGAIgBIACAAIAcAAIAFAIIgDAIIAHACIACAEQAGAUgHANQgFAJgNAGQgHAEgPADIgqAJIAAACIgcAHQADgCADgHIAIgEQAEgCAAgDQgLgGgHADQgEAAgGAGQgQAOgEAIIgFAKQgGAHgQABIgSAAgApnAXQgGgEACgKIABgOQgBgLgKgPQgEgIgHgHIACAAQgDgDAAgDIABgEIgCgEIgCABQgMgYgHgaIAPgGIAAgIQATgMALgCQAMAAAcAPQAXANAOgEQALgUALgFQAMgGASAJQAHACAWAPQAbAUAhAHQABAGAGAJQAWAegDAlIgBAXIAAACQgEAAgGADQgJABgRgEIgZgCQgIAAgaAGQgUAGgOgEQgGgCgCgCQAAgDABgDQgBACgEAAQgJgHgEgLQgFgNgCgZIgCglQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAABQgGAhAHAlQADAKAFAIQgEAAgDACQgEAAgBAEQgDAEABACIg1ACQgLAAgEgDgACeAHIgGgGIgGgDQgLgLgQAAQgOAAgLAHIABgWIAFgJIABgIQgBgDgFgFIgCgLQgGgGAAgCQACgIgCgFIgFgLQgCgCAAgRIgBgEIAFAGIACAYQAIgMgBgMIANgCQACgHAFgGQAGgGAIgBQAbAUAOgMQAHgGAFgRQAEgHAHgEQAJgDAIABQAHACAGAGQAGAGABAIIACAEIgCAAQgBAGABAFQgFAnADAQIAEAOQACAIAAAGQADAQgJAKIgJAEQgIACAAACIgXAMQgKAGgJAAQgEAAgFgCgACdhAIAEAFQAEAFgBAGIgBAJQAAAFAEACQACgCAAgEIAAgFIAAgJQgFgIgBgEIAAgEQAAgDgFgDQgFAEAEAGgAENgMIgVgFIgDAAQAEgOgGgTQgGgjABgLQAAgEAEgNQADgNAAgHIAAgCQAIgJAMgCQAEgCAagBQAUgBAJgJQgEgNAMgLQAKAIAKADQAMACAKgEQAFgCAKgJQAJgFAYgCQAXAAAJgFIgCALQgDADAAAEIABAAQgHAdAGAcIAEARQADAJAAAJQAAAPgEANIgWAUQgSANgRAAQgMACgagLQgZgKgNADQgKAKACAPQgHAIgPAAQgIAAgMgDgAFHhxQADACAAAGQAAASgCACQgCASAEAGQACAAACgEIAAgoQAAgIgDgDgAHygsQgNgEgKABIgBgJQAAgVgEgMIgEgIIgBgEIgFgeQgBgRACgNIANgKIAAgHIAAAAQAJgGAOgCQAQAAAfAJIAbgdQgBAFAFAEQAGACAFgCIARgNQANgNAVgDIAHAbIgCAIIADgBQAFAhgCAiIgHAKIgDAAQgEgBAAAEQgEACgEAFQgLAJgRAEIAAADIgLABIAAgHQADgGAAgEQADgHgDgDQgDgDgCAHIgNAbIgIAFIAEAEQgBACAAADIgGAGIgIAEQgJAHAEAGQgKAAgFAJIgEAAQgKAAgVgGg");
	this.shape_7.setTransform(0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.herbMolarRglow();
	this.redGlow.setTransform(-1.5,7,1,1,0,0,0,71.5,37);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.herbMolarGglow();
	this.greenGlow.setTransform(-1.5,7,1,1,0,0,0,71.5,37);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-30,147,62);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Herbivore_Incisor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AAPDiIgjgMIhJgOQgqgKgXgTIA3gRIAHAFIAJAKQANANALgEIgSgTQgTgUgOgBIBogBIABABIAAADIABgBQADgBACgEQAIAPAVAIQANAGAFAFIAHAIQACADAIgCQAHAAADACIAKAJIAPAGIAYAMIAEACIgHADIAAADQgHACgCAGIgiADIgCAAIgMgBQgIgCgLgKQghgbgWgJIgBAGQAFAAAHAFIAHAJQAHAHALAIQAMAJAJAEQABAEACACQgNAAgSgFgABhC4IgtgWQgkgSgSgTIAAgBIA4gCIABgKQALgQAWgGQASgGAVACIApAGQAYAEAPgBQgLABgGANQgBADgEAUQgEAVgMAVQgMARgNACIgOABIgFACQgLgDgRgJgAjHgVIAAh0IASgvQAFgPABgJIAEgHQAPgIATAAQASgBASAGQABAPAOAKQAIAFAHAAQgMAiAAAUQgBAMABASIABAdQAAANgBAMIgBgFQgNAMgdAJQghALgKAGIgNAKQgIAFgIABQACADgDAGQgDAEgFADQAIgMAAgYgAhHhiQgBglAGgWIAHgaIAAgHIABAAQAAgLAMgIIAWgMIAOgGQAHgDAEAAQAHABARAHQAaAMAdgBQgDAIgEATQgEAagNAwQgGAYgHAIQgJAJgOAFIgZAGQgmALgbAdg");
	this.shape.setTransform(0.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAtD7IgHgIIgrgRQgKgDhNgRQg1gMgbgWQgGgEAAgEQAAgEAJgFQAbgLAbACIgEgEQgCgDAAgGIAAgKIBrAAQAGAAAEABIgBgMIA4gGIABgLQAMgXAxABQAyABAzAHIAAAcQgFAFgDAJIgDATQgEASgKARQgLAUgQAHIgFACQgDADgEABQgFABgGgCIgCAIQgCAEgHAHIgDAFIgFABIgVgBQACADACAFQgJgEgJgBQABAEgEADQgMAFgOgBIAFAEgAAzDkQgCgCAAgEQgJgEgNgJQgLgIgHgHIgJgJQgEgFgGAAIACgGQAWAJAgAbQAMAKAHACIAMABIACAAIAigDQACgGAHgCIAAgDIAHgDIgEgCIgYgMIgPgGIgKgJQgDgCgHAAQgIACgCgDIgHgIQgEgFgOgGQgVgIgKgPQAAAEgDABIgBABIAAgDIgBgBIhnABQANABATAUIASATQgLAEgNgNIgJgKIgHgFIg3ARQAXATAqAKIBJAOIAjAMQASAFANAAIAAAAgABdBXQgVAGgLAQIgBAKIg7ACIAAABQAUATAlASIAtAWQARAJAKADIAFgCIAPgBQAMgCAMgRQAMgVAEgVQAEgUACgDQAGgNALgBQgQABgYgEIgogGIgJgBQgRAAgOAFgAjRAXQgFgEABgJQAAgFADgJQAEgRAAgYIgCgoQgBgvAMgsIAFgEIADgKIAAgEIgBgSIAGAAIAAgKIADAAIAAABIABgBIABAAIAAgCIAEgIIAGAAIAAgCQAggIAQADQAOABAMAIQAMAJAEANIAOAAQAAgNAUgMQAYgPAMgBQAKgBARAGIAbALQAYAIAZgDIAAgCIAHAAIACgBIABAAIAAARQgJAPgGAcIgLA5QgGAigOAOQgKAJgWAGIgiALQgQAGgdAaQgMAAgIgDQgKgFgBgIQAAgFADgIIACgGIgBAAQgEAHgIAFQgIAFgmANQgdAKgLANQgGAKgHAEQgEACgFAAQgGAAgDgDgAiEjiQgTAAgPAIIgEAHQgBAJgFAPIgSAvIAAB0QAAAYgHAMQAFgDACgEQADgFgBgEQAHgBAIgFIANgKQALgGAhgLQAcgJANgMIABAFQACgMgBgNIgBgdQgBgSABgMQABgUAMgiQgIAAgIgFQgOgKgBgPQgPgGgQAAIgFABgAgFjmIgOAGIgWAMQgLAIgBALIAAAAIgBAHIgHAaQgGAWABAlIABBQQAbgdAmgLIAZgGQAPgFAIgJQAHgIAHgYQANgwAEgaQADgTADgIQgdABgagMQgRgHgGgBIgCAAQgFAAgFADg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAPDiIgjgMIhJgOQgrgKgWgTIA3gRIAHAFIAJAKQAMANAMgEIgTgTQgSgUgNgBIBngBIABABIAAADIABgBQADgBACgEQAIAPAVAIQAOAGAEAFIAGAIQADADAHgCQAIAAACACIALAJIAOAGIAZAMIADACIgGADIAAADQgHACgCAGIgiADIgCAAIgNgBQgGgCgNgKQgfgbgWgJIgCAGQAGAAAFAFIAIAJQAHAHALAIQAMAJAJAEQAAAEADACQgOAAgRgFgABhC4IgtgWQgkgSgSgTIgBgBIA6gCIABgKQALgQAUgGQATgGAWACIAoAGQAYAEAQgBQgMABgFANQgCADgEAUQgEAVgNAVQgLARgMACIgPABIgGACQgJgDgSgJgAjHgVIgBh0IASgvQAGgPABgJIADgHQAQgIATAAQATgBAQAGQABAPAPAKQAIAFAIAAQgMAigCAUQgBAMABASIACAdQABANgCAMIgCgFQgMAMgdAJQggALgLAGIgOAKQgHAFgIABQACADgDAGQgCAEgGADQAIgMAAgYgAhHhiQgBglAFgWIAIgaIABgHIAAAAQAAgLALgIIAXgMIANgGQAIgDAFAAQAFABARAHQAaAMAdgBQgDAIgCATQgFAagMAwQgHAYgIAIQgHAJgPAFIgYAGQgoALgaAdg");
	this.shape_2.setTransform(0.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AAPDiIgjgMIhJgOQgrgKgWgTIA3gRIAHAFIAJAKQAMANAMgEIgTgTQgSgUgNgBIBngBIABABIAAADIABgBQADgBACgEQAIAPAVAIQAOAGAEAFIAGAIQADADAHgCQAIAAACACIALAJIAOAGIAZAMIADACIgGADIAAADQgHACgCAGIgiADIgCAAIgNgBQgGgCgNgKQgfgbgWgJIgCAGQAGAAAFAFIAIAJQAHAHALAIQAMAJAJAEQAAAEADACQgOAAgRgFgABhC4IgtgWQgkgSgSgTIgBgBIA6gCIABgKQALgQAUgGQATgGAWACIAoAGQAYAEAQgBQgMABgFANQgCADgEAUQgEAVgNAVQgLARgMACIgPABIgGACQgJgDgSgJgAjHgVIgBh0IASgvQAGgPABgJIADgHQAQgIATAAQATgBAQAGQABAPAPAKQAIAFAIAAQgMAigCAUQgBAMABASIACAdQABANgCAMIgCgFQgMAMgdAJQggALgLAGIgOAKQgHAFgIABQACADgDAGQgCAEgGADQAIgMAAgYgAhHhiQgBglAFgWIAIgaIABgHIAAAAQAAgLALgIIAXgMIANgGQAIgDAFAAQAFABARAHQAaAMAdgBQgDAIgCATQgFAagMAwQgHAYgIAIQgHAJgPAFIgYAGQgoALgaAdg");
	this.shape_3.setTransform(0.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AAPDiIgjgMIhJgOQgqgKgXgTIA3gRIAHAFIAJAKQANANALgEIgSgTQgTgUgOgBIBogBIABABIAAADIABgBQADgBACgEQAIAPAVAIQANAGAFAFIAHAIQACADAIgCQAHAAADACIAKAJIAPAGIAYAMIAEACIgHADIAAADQgHACgCAGIgiADIgCAAIgMgBQgIgCgLgKQghgbgWgJIgBAGQAFAAAHAFIAHAJQAHAHALAIQAMAJAJAEQABAEACACQgNAAgSgFgABhC4IgtgWQgkgSgSgTIAAgBIA4gCIABgKQALgQAWgGQASgGAVACIApAGQAYAEAPgBQgLABgGANQgBADgEAUQgEAVgMAVQgMARgNACIgOABIgFACQgLgDgRgJgAjHgVIAAh0IASgvQAFgPABgJIAEgHQAPgIATAAQASgBASAGQABAPAOAKQAIAFAHAAQgMAiAAAUQgBAMABASIABAdQAAANgBAMIgBgFQgNAMgdAJQghALgKAGIgNAKQgIAFgIABQACADgDAGQgDAEgFADQAIgMAAgYgAhHhiQgBglAGgWIAHgaIAAgHIABAAQAAgLAMgIIAWgMIAOgGQAHgDAEAAQAHABARAHQAaAMAdgBQgDAIgEATQgEAagNAwQgGAYgHAIQgJAJgOAFIgZAGQgmALgbAdg");
	this.shape_4.setTransform(0.6,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AAPDiIgjgMIhJgOQgrgKgWgTIA3gRIAHAFIAJAKQAMANAMgEIgTgTQgSgUgNgBIBngBIABABIAAADIABgBQADgBACgEQAIAPAVAIQAOAGAEAFIAGAIQADADAHgCQAIAAACACIALAJIAOAGIAZAMIADACIgGADIAAADQgHACgCAGIgiADIgCAAIgNgBQgGgCgNgKQgfgbgWgJIgCAGQAGAAAFAFIAIAJQAHAHALAIQAMAJAJAEQAAAEADACQgOAAgRgFgABhC4IgtgWQgkgSgSgTIgBgBIA6gCIABgKQALgQAUgGQATgGAWACIAoAGQAYAEAQgBQgMABgFANQgCADgEAUQgEAVgNAVQgLARgMACIgPABIgGACQgJgDgSgJgAjHgVIgBh0IASgvQAGgPABgJIADgHQAQgIATAAQATgBAQAGQABAPAPAKQAIAFAIAAQgMAigCAUQgBAMABASIACAdQABANgCAMIgCgFQgMAMgdAJQggALgLAGIgOAKQgHAFgIABQACADgDAGQgCAEgGADQAIgMAAgYgAhHhiQgBglAFgWIAIgaIABgHIAAAAQAAgLALgIIAXgMIANgGQAIgDAFAAQAFABARAHQAaAMAdgBQgDAIgCATQgFAagMAwQgHAYgIAIQgHAJgPAFIgYAGQgoALgaAdg");
	this.shape_5.setTransform(0.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AAPDiIgjgMIhJgOQgrgKgWgTIA3gRIAHAFIAJAKQAMANAMgEIgTgTQgSgUgNgBIBngBIABABIAAADIABgBQADgBACgEQAIAPAVAIQAOAGAEAFIAGAIQADADAHgCQAIAAACACIALAJIAOAGIAZAMIADACIgGADIAAADQgHACgCAGIgiADIgCAAIgNgBQgGgCgNgKQgfgbgWgJIgCAGQAGAAAFAFIAIAJQAHAHALAIQAMAJAJAEQAAAEADACQgOAAgRgFgABhC4IgtgWQgkgSgSgTIgBgBIA6gCIABgKQALgQAUgGQATgGAWACIAoAGQAYAEAQgBQgMABgFANQgCADgEAUQgEAVgNAVQgLARgMACIgPABIgGACQgJgDgSgJgAjHgVIgBh0IASgvQAGgPABgJIADgHQAQgIATAAQATgBAQAGQABAPAPAKQAIAFAIAAQgMAigCAUQgBAMABASIACAdQABANgCAMIgCgFQgMAMgdAJQggALgLAGIgOAKQgHAFgIABQACADgDAGQgCAEgGADQAIgMAAgYgAhHhiQgBglAFgWIAIgaIABgHIAAAAQAAgLALgIIAXgMIANgGQAIgDAFAAQAFABARAHQAaAMAdgBQgDAIgCATQgFAagMAwQgHAYgIAIQgHAJgPAFIgYAGQgoALgaAdg");
	this.shape_6.setTransform(0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.herbIncisiorRglow();
	this.redGlow.setTransform(-1.5,-1,1,1,0,0,0,25.5,29);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.herbIncisiorGglow();
	this.greenGlow.setTransform(-1.5,-1,1,1,0,0,0,25.5,29);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-30,55,62);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Herbivore_Cannie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AgpDSIACgBQgDgEgKgBQgCgIgFgFQADgGAMABQASABAxAEQgNAKgZAIIAAAAIgBABIgZABgAAGiKQgEgCgCgHQgIgPgDgSIAAgBQAPgCARgJIAWgNIARgFIgBABIgGAJIgJANIgEALIgJALQgCADgBAIQgCAIgDADQgCAEgFACIgDAAIgHgBg");
	this.shape.setTransform(-0.9,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4DjIgGgBIgBAAIgBgBIABAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIgCgCQgIgJACAAQgGgNAAgRQAHgBAAgFQAHAAALADIAdADIAZAEIAZABIAGgFIAAAYQgLADgHAIQgFACgDADIgGAAQAAACgGABQgXACgSAAgAhFDFQAGAFACAIQAJABAEAEIgCABIgBABIAagBIAAgBIABAAQAZgIAMgKQgwgEgSgBIgEAAQgJAAgDAFgAgKh8IgGgJQgDgEgCgGQgHgOAAgNIgGAAIAAgRQASgCANgIIATgOQAJgGAOgGIAPgDIAZAAIAAARIgGABQgHAIgLAQQgRAbgFARQgDAOgFADIgHAFQgDACgBADQgQgEgIgHgAAijHIgXANQgOAJgRACIAAABQADASAIAPQAEAHAEACQACACAGgBQAFgCACgEQADgDABgIQACgIACgDIAIgLIAFgLIAJgNIAGgJIABgBIgRAFg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgpDSIADgBQgFgEgJgBQgCgIgGgFQAEgGAMABQATABAwAEQgMAKgaAIIgBAAIAAABIgaABgAAHiKQgFgCgCgHQgIgPgCgSIAAgBQAOgCAQgJIAYgNIARgFIgBABIgGAJIgKANIgFALIgIALQgCADgCAIQgBAIgCADQgDAEgFACIgEAAIgFgBg");
	this.shape_2.setTransform(-0.9,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AgpDSIADgBQgFgEgJgBQgCgIgGgFQAEgGAMABQATABAwAEQgMAKgaAIIgBAAIAAABIgaABgAAHiKQgFgCgCgHQgIgPgCgSIAAgBQAOgCAQgJIAYgNIARgFIgBABIgGAJIgKANIgFALIgIALQgCADgCAIQgBAIgCADQgDAEgFACIgEAAIgFgBg");
	this.shape_3.setTransform(-0.9,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AgpDSIACgBQgDgEgKgBQgCgIgFgFQADgGAMABQASABAxAEQgNAKgZAIIAAAAIgBABIgZABgAAGiKQgEgCgCgHQgIgPgDgSIAAgBQAPgCARgJIAWgNIARgFIgBABIgGAJIgJANIgEALIgJALQgCADgBAIQgCAIgDADQgCAEgFACIgDAAIgHgBg");
	this.shape_4.setTransform(-0.9,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AgpDSIADgBQgFgEgJgBQgCgIgGgFQAEgGAMABQATABAwAEQgMAKgaAIIgBAAIAAABIgaABgAAHiKQgFgCgCgHQgIgPgCgSIAAgBQAOgCAQgJIAYgNIARgFIgBABIgGAJIgKANIgFALIgIALQgCADgCAIQgBAIgCADQgDAEgFACIgEAAIgFgBg");
	this.shape_5.setTransform(-0.9,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AgpDSIADgBQgFgEgJgBQgCgIgGgFQAEgGAMABQATABAwAEQgMAKgaAIIgBAAIAAABIgaABgAAHiKQgFgCgCgHQgIgPgCgSIAAgBQAOgCAQgJIAYgNIARgFIgBABIgGAJIgKANIgFALIgIALQgCADgCAIQgBAIgCADQgDAEgFACIgEAAIgFgBg");
	this.shape_6.setTransform(-0.9,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_1}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Layer_4
	this.redGlow = new lib.herbCanineRglow();
	this.redGlow.setTransform(1,1,1,1,0,0,0,12,27);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Layer_3
	this.greenGlow = new lib.herbCanineGglow();
	this.greenGlow.setTransform(1,1,1,1,0,0,0,12,27);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11,-26,24,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Carnivore_Molar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Molar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("ACCE5QgEAAgGgCIgJgFQgGgCgHACIgPABQgRACgggCIgagBIgPgDIgSgJQgZgNgUgDQgTgCgEgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIAAgLIADgIIAIgMQAGgNAGgFQAHgEANgFIAIgGQAEgCARgDQAAASADAFIADAAQADgFAAgHIAAgGIACgCIAAgEIACgBIAGgDQAFgCACgFQAFABAHgIQAIgHAFAAQACgGALgHQAJgDAEACQAAAEAEAEIAGAGIAGAMQABAEAHAFIAAAEQAFAUAbAWQAJAHAGACIAKADIAKADIALAJQACADACABQgBAFAKAOQAFAIgFADQgCAAAAAAQgBgBgBAAQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIgKAAIgGAEQgKAHgIAAIgCgBgAixEXIgRgHQgNgFgWAAQgJgBgKABIgMABQggAFgWgGQgFgBgDABIAAgBIAPgdQAFgGAMgFQAMgHAEgDQAEgDAGgGIAHgFIAIgKQARgXAcgFQAMAeAdAOIAXAKQAMAGAFAJQADAFACAOQABAJAEAFIgCACQgEAGgFACQgDACgHAAQgTAEgJAAQgIAAgHgDgAF2g8QgHAAgDgDQgFgBgQgbQgQgdACgjIABgUIACAAIAkATIAVALIAUAKQAcAMANAAIARgBIAGAAIgUAYQgoAbgLACQgHAIgFACIgHABgAi9haQgEgEABgJQACgUgJgRIgLgOIgKgOIgOgZIgEgLQgBgGABgGQABgHAIgPIAGgLQAGgJAFgBIAHABQAGACACgCIADAAQAFACAKgCIAagBQAGAAADgBIATgIIAGgBQAFAAAJAEIALAHIARAMIAOAGIAIAGQADAEAJACQAPAFAPgFIAEgBQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQADADACAAIAAAFQgFAAAAAFIAAAKIgCAEIAAAGQgCAKAEAHIABAFQgLAEgEAEIgDAFIgRAPQgGAEgMABQgPAAgFACIgOAIQgGAEgXAGQgTAEgIAHIgIAIIgHAFQgDAFgCABQgCACgHAAQgIAAgCgCgAnLj9QgKgVgBgVIgCgOIAAgBQABAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAgDQAFADAJAAIAcAAQALAAAEACQAFACAFADQADADAFAGQAEABADADIgJAGQgPAJgFAMQgEAHgEAPQgCAPgEAGIgEABQgRgOgKgUg");
	this.shape.setTransform(-1.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABxFIIgKgFQgHgCgSACIgbABQgTAAgkgDQgQgDgEgCIgQgJQgWgOgWgCQgSgEgEgDIgJgFIgHAJIgFAEIgMAEQgUADgXgDQgKgDgEgCIgOgFQgOgHgVACQgZACgMAAQgYAAgVgFIgIgCIgEgEIAAABQACADgEADIgCAEQgDgFgFgDQgEgDgGgCIAHgGIAEAAIAAgIIAEgMIAHgSQAEgIAKgHIATgKQAMgJAMgLIALgNQARgRAXgEQAHgDAHAEQADADADAGIAFAMQAEAKANAJIAYAKQAPAIAKAIQANAMAGAQQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQADgHgCgEIAHgGIAFgIQAHgKANgFQAHgBAAgEQALgGAIgBIAOgDQAHAAAFgCQAGgDAJgHIAYgUIAMgIQALgCAKAHQAGAFAIALQAXAgAHAVIAHAFIAIAHQADAEAEABQAEADAKABQAJADAKAIQAHAHAEAFQACgFAFgEQgBAEABAFQAHACAAAGIAAAFIgCACIAHAOQgBANAHAKIAEAFIgPgBIgJgBIAAAGQgQAIgMAAQgGAAgFgCgABeEvIAJAFQAGADAEAAQAJABALgIIAGgDIAKAAQADABABACIAIgBIgJgEQAFgCgFgJQgKgOABgFQgCgBgCgCIgLgJIgKgEIgKgCQgGgDgJgGQgbgXgFgUIAAgDQgHgFgBgEIgGgNIgGgGQgEgEAAgDQgEgDgJAEQgLAGgCAGQgFAAgGAIQgHAHgFgBQgCAFgHADIgGACIgCABIAAAEIgCADIAAAGQAAAGgDAFIgDAAQgDgFAAgRQgRACgEADIgIAGQgNAFgHAEQgGAFgGAMIgIANIgDAHIAAALQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAAAQAEACATADQAUACAZAOIASAJIARACIAYABQAgADARgDIAPgBIAHgBIAGABgAj2EIQAWAAANAFIARAIQAHACAIAAQAJAAATgDQAHAAADgDQAFgBAEgGIACgDQgEgFgBgJQgCgNgDgFQgFgJgMgGIgXgKQgdgOgMgeQgcAFgRAWIgIAKIgHAFQgGAHgEACQgEAEgMAGQgMAFgFAGIgPAdIAAABQADgBAFABQAWAHAggFIAMgCIAKAAIAJAAgADmDgIAHgCIgBABIAAABgAFbgmQgCgDgEgDIgOgLQgBgBgEgPQgFgSgKgKIgEgPIAAgDQACgVgMgPIgEgEIACgHIgBgCIAAgOIgCgFIAAgEQAHgGAMgFIACAEQAFAMAQAFQAIACAQABIAhARQAaAOAPAAIAXgEQAPgBAHAEIANAIQAEAAACADIAEACIAEACIAAAXIgKgFIgFAEIgPAGIgiAUQgKAFgLAMIgPAPQgHAHgGAEQgJAEgMAAQgLAAgIgCgAE4ieQgCAjAQAdQAQAcAFABQADACAHAAIAJAAIAHgBQAFgBAHgJQALgBAogcIAUgXIgGAAIgRABQgNAAgcgNIgUgKIgVgLIgkgTIgCAAgAi7hLQgKABgFgCQgEgCgGgHQgKgNgCgHQgBgFABgIIgBgMQgBgJgNgRQgPgUgKgYIgFgPQgBgNAGgRQAHgNAGgCIgFAAQgXACgLgDQgGgCgLgGIgRgJIgUgFIgVgCQgGAAgEgDIgCAAIAAADQgCAFgHAFIgNAGQgLAGgGANQgDAEgCALIgJAbQgKAFgMgHQgHgEgKgMIgPgWQgMgUgDgRQgCgOAEgWIAAgCIAFgGQAEADACADIAigCQASgDAKAFIAMAIIALAJIAWADQAKACAHAFQAaABAWAKQARAJAGABIAagDQAdgCATAKQAFgDAKgBIARgCIAOgDIAKgFQAJgEANACQAOACANAIIAkAWIAMAGIAWAFIAUADIABAAQAEAGALABQgCALgBAOQgBARADAMIAAALQgFAEgEANQgEALgGABIAAAIQgGABgFAHQgDgGAAgFQgLAGgIACIgKAAIgLABIgJAFIgIAFIgOAEIgdAIQgJAEgCADIgJAIIgHADIgDAGIgCAFQgEgBgLAAgAjwj7IgGALQgIAPgBAGQgBAGABAHIAEALIAOAZIAKAOIALANQAJASgCAUQgBAJAEADQACADAIAAQAHAAACgDQACgBADgFIAHgFIAIgHQAIgIATgEQAXgGAGgEIAOgHQAFgDAPAAQAMgBAGgEIARgPIADgFQAEgDALgEIgBgFQgEgIACgKIAAgGIACgEIAAgKQAAgFAFAAIAAgFQgCAAgDgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIgEABQgPAFgPgFQgJgDgDgDIgIgHIgOgGIgRgLIgLgIQgJgDgFAAIgGABIgTAHQgDACgGAAIgaABQgKABgFgBIgDAAQgCABgGgBIgHgBQgFABgGAJgAnpk3IACANQABAWAKAVQAKAUARAOIAEgCQAEgGACgPQAEgPAEgGQAFgNAPgIIAJgHQgDgCgEgBQgFgHgDgCQgFgEgFgBQgEgDgLAAIgcAAQgJAAgFgCIAAACQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBgBAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ACCE5QgEAAgGgCIgJgFQgGgCgHACIgPABQgRACgggCIgagBIgPgDIgSgJQgZgNgUgDQgTgCgEgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIAAgLIADgIIAIgMQAGgNAGgFQAHgEANgFIAIgGQAEgCARgDQAAASADAFIADAAQADgFAAgHIAAgGIACgCIAAgEIACgBIAGgDQAFgCACgFQAFABAHgIQAIgHAFAAQACgGALgHQAJgDAEACQAAAEAEAEIAGAGIAGAMQABAEAHAFIAAAEQAFAUAbAWQAJAHAGACIAKADIAKADIALAJQACADACABQgBAFAKAOQAFAIgFADQgCAAAAAAQgBgBgBAAQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIgKAAIgGAEQgKAHgIAAIgCgBgAixEXIgRgHQgNgFgWAAQgJgBgKABIgMABQggAFgWgGQgFgBgDABIAAgBIAPgdQAFgGAMgFQAMgHAEgDQAEgDAGgGIAHgFIAIgKQARgXAcgFQAMAeAdAOIAXAKQAMAGAFAJQADAFACAOQABAJAEAFIgCACQgEAGgFACQgDACgHAAQgTAEgJAAQgIAAgHgDgAF2g8QgHAAgDgDQgFgBgQgbQgQgdACgjIABgUIACAAIAkATIAVALIAUAKQAcAMANAAIARgBIAGAAIgUAYQgoAbgLACQgHAIgFACIgHABgAi9haQgEgEABgJQACgUgJgRIgLgOIgKgOIgOgZIgEgLQgBgGABgGQABgHAIgPIAGgLQAGgJAFgBIAHABQAGACACgCIADAAQAFACAKgCIAagBQAGAAADgBIATgIIAGgBQAFAAAJAEIALAHIARAMIAOAGIAIAGQADAEAJACQAPAFAPgFIAEgBQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQADADACAAIAAAFQgFAAAAAFIAAAKIgCAEIAAAGQgCAKAEAHIABAFQgLAEgEAEIgDAFIgRAPQgGAEgMABQgPAAgFACIgOAIQgGAEgXAGQgTAEgIAHIgIAIIgHAFQgDAFgCABQgCACgHAAQgIAAgCgCgAnLj9QgKgVgBgVIgCgOIAAgBQABAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAgDQAFADAJAAIAcAAQALAAAEACQAFACAFADQADADAFAGQAEABADADIgJAGQgPAJgFAMQgEAHgEAPQgCAPgEAGIgEABQgRgOgKgUg");
	this.shape_2.setTransform(-1.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("ACCE5QgEAAgGgCIgJgFQgGgCgHACIgPABQgRACgggCIgagBIgPgDIgSgJQgZgNgUgDQgTgCgEgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIAAgLIADgIIAIgMQAGgNAGgFQAHgEANgFIAIgGQAEgCARgDQAAASADAFIADAAQADgFAAgHIAAgGIACgCIAAgEIACgBIAGgDQAFgCACgFQAFABAHgIQAIgHAFAAQACgGALgHQAJgDAEACQAAAEAEAEIAGAGIAGAMQABAEAHAFIAAAEQAFAUAbAWQAJAHAGACIAKADIAKADIALAJQACADACABQgBAFAKAOQAFAIgFADQgCAAAAAAQgBgBgBAAQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIgKAAIgGAEQgKAHgIAAIgCgBgAixEXIgRgHQgNgFgWAAQgJgBgKABIgMABQggAFgWgGQgFgBgDABIAAgBIAPgdQAFgGAMgFQAMgHAEgDQAEgDAGgGIAHgFIAIgKQARgXAcgFQAMAeAdAOIAXAKQAMAGAFAJQADAFACAOQABAJAEAFIgCACQgEAGgFACQgDACgHAAQgTAEgJAAQgIAAgHgDgAF2g8QgHAAgDgDQgFgBgQgbQgQgdACgjIABgUIACAAIAkATIAVALIAUAKQAcAMANAAIARgBIAGAAIgUAYQgoAbgLACQgHAIgFACIgHABgAi9haQgEgEABgJQACgUgJgRIgLgOIgKgOIgOgZIgEgLQgBgGABgGQABgHAIgPIAGgLQAGgJAFgBIAHABQAGACACgCIADAAQAFACAKgCIAagBQAGAAADgBIATgIIAGgBQAFAAAJAEIALAHIARAMIAOAGIAIAGQADAEAJACQAPAFAPgFIAEgBQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQADADACAAIAAAFQgFAAAAAFIAAAKIgCAEIAAAGQgCAKAEAHIABAFQgLAEgEAEIgDAFIgRAPQgGAEgMABQgPAAgFACIgOAIQgGAEgXAGQgTAEgIAHIgIAIIgHAFQgDAFgCABQgCACgHAAQgIAAgCgCgAnLj9QgKgVgBgVIgCgOIAAgBQABAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAgDQAFADAJAAIAcAAQALAAAEACQAFACAFADQADADAFAGQAEABADADIgJAGQgPAJgFAMQgEAHgEAPQgCAPgEAGIgEABQgRgOgKgUg");
	this.shape_3.setTransform(-1.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("ACCE5QgEAAgGgCIgJgFQgGgCgHACIgPABQgRACgggCIgagBIgPgDIgSgJQgZgNgUgDQgTgCgEgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIAAgLIADgIIAIgMQAGgNAGgFQAHgEANgFIAIgGQAEgCARgDQAAASADAFIADAAQADgFAAgHIAAgGIACgCIAAgEIACgBIAGgDQAFgCACgFQAFABAHgIQAIgHAFAAQACgGALgHQAJgDAEACQAAAEAEAEIAGAGIAGAMQABAEAHAFIAAAEQAFAUAbAWQAJAHAGACIAKADIAKADIALAJQACADACABQgBAFAKAOQAFAIgFADQgCAAAAAAQgBgBgBAAQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIgKAAIgGAEQgKAHgIAAIgCgBgAixEXIgRgHQgNgFgWAAQgJgBgKABIgMABQggAFgWgGQgFgBgDABIAAgBIAPgdQAFgGAMgFQAMgHAEgDQAEgDAGgGIAHgFIAIgKQARgXAcgFQAMAeAdAOIAXAKQAMAGAFAJQADAFACAOQABAJAEAFIgCACQgEAGgFACQgDACgHAAQgTAEgJAAQgIAAgHgDgAF2g8QgHAAgDgDQgFgBgQgbQgQgdACgjIABgUIACAAIAkATIAVALIAUAKQAcAMANAAIARgBIAGAAIgUAYQgoAbgLACQgHAIgFACIgHABgAi9haQgEgEABgJQACgUgJgRIgLgOIgKgOIgOgZIgEgLQgBgGABgGQABgHAIgPIAGgLQAGgJAFgBIAHABQAGACACgCIADAAQAFACAKgCIAagBQAGAAADgBIATgIIAGgBQAFAAAJAEIALAHIARAMIAOAGIAIAGQADAEAJACQAPAFAPgFIAEgBQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQADADACAAIAAAFQgFAAAAAFIAAAKIgCAEIAAAGQgCAKAEAHIABAFQgLAEgEAEIgDAFIgRAPQgGAEgMABQgPAAgFACIgOAIQgGAEgXAGQgTAEgIAHIgIAIIgHAFQgDAFgCABQgCACgHAAQgIAAgCgCgAnLj9QgKgVgBgVIgCgOIAAgBQABAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAgDQAFADAJAAIAcAAQALAAAEACQAFACAFADQADADAFAGQAEABADADIgJAGQgPAJgFAMQgEAHgEAPQgCAPgEAGIgEABQgRgOgKgUg");
	this.shape_4.setTransform(-1.7,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("ACCE5QgEAAgGgCIgJgFQgGgCgHACIgPABQgRACgggCIgagBIgPgDIgSgJQgZgNgUgDQgTgCgEgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIAAgLIADgIIAIgMQAGgNAGgFQAHgEANgFIAIgGQAEgCARgDQAAASADAFIADAAQADgFAAgHIAAgGIACgCIAAgEIACgBIAGgDQAFgCACgFQAFABAHgIQAIgHAFAAQACgGALgHQAJgDAEACQAAAEAEAEIAGAGIAGAMQABAEAHAFIAAAEQAFAUAbAWQAJAHAGACIAKADIAKADIALAJQACADACABQgBAFAKAOQAFAIgFADQgCAAAAAAQgBgBgBAAQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIgKAAIgGAEQgKAHgIAAIgCgBgAixEXIgRgHQgNgFgWAAQgJgBgKABIgMABQggAFgWgGQgFgBgDABIAAgBIAPgdQAFgGAMgFQAMgHAEgDQAEgDAGgGIAHgFIAIgKQARgXAcgFQAMAeAdAOIAXAKQAMAGAFAJQADAFACAOQABAJAEAFIgCACQgEAGgFACQgDACgHAAQgTAEgJAAQgIAAgHgDgAF2g8QgHAAgDgDQgFgBgQgbQgQgdACgjIABgUIACAAIAkATIAVALIAUAKQAcAMANAAIARgBIAGAAIgUAYQgoAbgLACQgHAIgFACIgHABgAi9haQgEgEABgJQACgUgJgRIgLgOIgKgOIgOgZIgEgLQgBgGABgGQABgHAIgPIAGgLQAGgJAFgBIAHABQAGACACgCIADAAQAFACAKgCIAagBQAGAAADgBIATgIIAGgBQAFAAAJAEIALAHIARAMIAOAGIAIAGQADAEAJACQAPAFAPgFIAEgBQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQADADACAAIAAAFQgFAAAAAFIAAAKIgCAEIAAAGQgCAKAEAHIABAFQgLAEgEAEIgDAFIgRAPQgGAEgMABQgPAAgFACIgOAIQgGAEgXAGQgTAEgIAHIgIAIIgHAFQgDAFgCABQgCACgHAAQgIAAgCgCgAnLj9QgKgVgBgVIgCgOIAAgBQABAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAgDQAFADAJAAIAcAAQALAAAEACQAFACAFADQADADAFAGQAEABADADIgJAGQgPAJgFAMQgEAHgEAPQgCAPgEAGIgEABQgRgOgKgUg");
	this.shape_5.setTransform(-1.7,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("ACCE5QgEAAgGgCIgJgFQgGgCgHACIgPABQgRACgggCIgagBIgPgDIgSgJQgZgNgUgDQgTgCgEgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIAAgLIADgIIAIgMQAGgNAGgFQAHgEANgFIAIgGQAEgCARgDQAAASADAFIADAAQADgFAAgHIAAgGIACgCIAAgEIACgBIAGgDQAFgCACgFQAFABAHgIQAIgHAFAAQACgGALgHQAJgDAEACQAAAEAEAEIAGAGIAGAMQABAEAHAFIAAAEQAFAUAbAWQAJAHAGACIAKADIAKADIALAJQACADACABQgBAFAKAOQAFAIgFADQgCAAAAAAQgBgBgBAAQgBAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIgKAAIgGAEQgKAHgIAAIgCgBgAixEXIgRgHQgNgFgWAAQgJgBgKABIgMABQggAFgWgGQgFgBgDABIAAgBIAPgdQAFgGAMgFQAMgHAEgDQAEgDAGgGIAHgFIAIgKQARgXAcgFQAMAeAdAOIAXAKQAMAGAFAJQADAFACAOQABAJAEAFIgCACQgEAGgFACQgDACgHAAQgTAEgJAAQgIAAgHgDgAF2g8QgHAAgDgDQgFgBgQgbQgQgdACgjIABgUIACAAIAkATIAVALIAUAKQAcAMANAAIARgBIAGAAIgUAYQgoAbgLACQgHAIgFACIgHABgAi9haQgEgEABgJQACgUgJgRIgLgOIgKgOIgOgZIgEgLQgBgGABgGQABgHAIgPIAGgLQAGgJAFgBIAHABQAGACACgCIADAAQAFACAKgCIAagBQAGAAADgBIATgIIAGgBQAFAAAJAEIALAHIARAMIAOAGIAIAGQADAEAJACQAPAFAPgFIAEgBQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQADADACAAIAAAFQgFAAAAAFIAAAKIgCAEIAAAGQgCAKAEAHIABAFQgLAEgEAEIgDAFIgRAPQgGAEgMABQgPAAgFACIgOAIQgGAEgXAGQgTAEgIAHIgIAIIgHAFQgDAFgCABQgCACgHAAQgIAAgCgCgAnLj9QgKgVgBgVIgCgOIAAgBQABAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAgDQAFADAJAAIAcAAQALAAAEACQAFACAFADQADADAFAGQAEABADADIgJAGQgPAJgFAMQgEAHgEAPQgCAPgEAGIgEABQgRgOgKgUg");
	this.shape_6.setTransform(-1.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Molar
	this.redGlow = new lib.carnMolarRglow();
	this.redGlow.setTransform(-1,-0.5,1,1,0,0,0,54,37);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Molar
	this.greenGlow = new lib.carnMolarGglow();
	this.greenGlow.setTransform(-1,-0.5,1,1,0,0,0,54,37);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-37.5,112,78);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Carnivore_incisor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Incisor
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("ABEEqQgFgCgGgFIgKgJQgGgDgHgBQgHAAgEAFIgFAHQgDAEgEAAIgLgUQgGgOgIgDQgFgDgGAAQgGAAgEADQgEADAAAFQgCgGgEgFQgDgDgRgMQgNgJgJgOQgGgJABgHQABgFAEgDQAEgDAEACQAWAWAQACQAGABAJgCIAFAAQACAAADAHQAEAGAJACIAOgBQADgCADABQADABACACIAEANQADAIAHADIAHABIAaABIAHABIgBAPIgEAYIAAAEIgDgCgAgWheIgDgZQgBgMAEgTQAEgbAIgZQAKgiAPgVQAFgHASgRIACgBQAHgFAFgCQAGgBAFADQAJAGACAPQgBAPACAHQACAPAKAEQADABAIAAIAcgCQAHAAACABIAFAFIABABQgFAGgDAHQgEANgDAEQgHAFgCAEIgEAHQgDADgEABQgeAQgkAmIgIAKQgKAMgGAJQgGALgEAEIgGAKIgDAGQgCAEgKACgAhYiAQgCgCgDgHIgHgXQgDgIgBgFIgBgQIABgwIABgIIADgKIAJgTQAFgCAFAEIAIAHIAKAEIALAHQAGAEAMAAQAOABAHgCIAIgCIgFAKIgNAdQgEgBgHABQgIACgHAJIgJAPIgGANIgDAKIgNAlQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAgAiDirQgMg4ADgdQACgQAHgLQAHgMALgEIABABQAEADACAFIACACIAAAAIgCAFIgFAHQgEAEAAAEIAAAJIgDAGIgBALIABBBIACAJIAAABIgIASQgEgGgDgQg");
	this.shape.setTransform(-0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABHE3QgRgGgNgQQgDACgDAEIgFAHQgJAKgOgJQgHgEgEgLIgEgHQgHgNgFgGQgEADgFAAIgBAFIgBAAIgSAAIgBgGIgGgKIgHgEQgQgGgSgYQgHgIgDgGQgFgKADgKQABgGADgBQAEgFAKABQAHAAAEACQAFACAIAJQAHAJAGABQAEACAGgBIAKgBQAIAAAHAEQAHAEAEAIQANgHAPAIQAOAJACAQQATgBAJACIAGABIADACIAHADQAEACACACIACAHIABAIIAAAWIgEACQgBAHABAIIAAAAIgDAEQgBACgFABIgEABIgBgCgAAtEYIAKAJQAGAFAFACIADACIAAgDIAEgZIABgPIgHgBIgagBIgHgBQgHgCgDgIIgEgOQgCgCgDgBQgDAAgDABIgOABQgJgBgEgGQgDgHgCAAIgFAAQgJABgGAAQgQgDgWgWQgEgCgEADQgEADgBAFQgBAHAGAKQAJAOANAIQARAMADADQAEAFACAGQAAgEAEgDQAEgEAGAAQAGAAAFADQAIAEAHANIAKAUQAEAAADgEIAFgHQAEgFAHABQAHAAAGADgAgZgpQgIgHgDgTIgGg9QAAgJACgPQADgVADgJIADgIIAEgNIgHAGQgFAFgEAGQgFAJgGASIgNAiQgBAFgCACIgDADQgEACgFgCIgJgEIgJgFQgDgCgEgIIgDgHIgFAIQgRACgKgcQgGgTgFgfQgDgRgBgPQAAgOAEgWQAFgTAIgHQAGgEAHAAIgBgBIADgBIAIgDIAHAFIAGAGIAHAFQADADABADIAEACIAKAHIAMAFIANAIQADACANABQATAAAGgDQAEgBAFgFQAEgEAAAAQADgBADAFQANgOASgGIABgBIAEgDQAGgEAJADQAIADAGAHQAMAOACARIAAAKQABAHACADQARgDAQABQAKAAAGAEIAFADIACAFIAAABIAFAEIAJAHIAAAXIgBADQgEABgEADIgCACQgHAFgEAGIAAgCIgNANQgGAGgMAHIgUANQgLAHgLALQgLALgOATIgGAJIgZAjQgHAJgKAAQgJAAgGgGgAAykiQgFABgHAFIgCACQgSAQgFAHQgOAVgLAiQgIAZgEAbQgEATABANIADAYIAHAvQAKgBACgEIADgHIAGgKQAEgEAGgLQAGgIAKgNIAIgJQAkgnAegPQAEgBADgEIAEgGQACgEAHgFQADgEAEgNQADgIAFgGIgBgBIgFgEQgCgBgHAAIgcACQgIAAgDgBQgKgEgCgPQgCgHABgQQgCgPgJgFQgEgDgFAAIgCABgAhdkUIgJATIgDAKIgBAIIgBAxIABAPQABAFADAJIAHAXQADAGACACQAEAEAEgEIANglIADgKIAGgMIAJgQQAHgJAIgBQAHgCAEACIANgdIAFgKIgIACQgHABgOAAQgMgBgGgDIgLgHIgKgFIgIgHQgDgCgEAAIgDAAgAiFkdQgHAMgCAPQgDAeAMA4QADAPAEAGIAIgSIAAgBIgCgJIgBhAIABgLIADgGIAAgJQAAgEAEgFIAFgHIACgEIAAAAIgCgDQgCgEgEgDIgBgBQgLADgHAMg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ABEEqQgFgCgGgFIgKgJQgGgDgHgBQgHAAgEAFIgFAHQgDAEgEAAIgLgUQgGgOgIgDQgFgDgGAAQgGAAgEADQgEADAAAFQgCgGgEgFQgDgDgRgMQgNgJgJgOQgGgJABgHQABgFAEgDQAEgDAEACQAWAWAQACQAGABAJgCIAFAAQACAAADAHQAEAGAJACIAOgBQADgCADABQADABACACIAEANQADAIAHADIAHABIAaABIAHABIgBAPIgEAYIAAAEIgDgCgAgWheIgDgZQgBgMAEgTQAEgbAIgZQAKgiAPgVQAFgHASgRIACgBQAHgFAFgCQAGgBAFADQAJAGACAPQgBAPACAHQACAPAKAEQADABAIAAIAcgCQAHAAACABIAFAFIABABQgFAGgDAHQgEANgDAEQgHAFgCAEIgEAHQgDADgEABQgeAQgkAmIgIAKQgKAMgGAJQgGALgEAEIgGAKIgDAGQgCAEgKACgAhYiAQgCgCgDgHIgHgXQgDgIgBgFIgBgQIABgwIABgIIADgKIAJgTQAFgCAFAEIAIAHIAKAEIALAHQAGAEAMAAQAOABAHgCIAIgCIgFAKIgNAdQgEgBgHABQgIACgHAJIgJAPIgGANIgDAKIgNAlQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAgAiDirQgMg4ADgdQACgQAHgLQAHgMALgEIABABQAEADACAFIACACIAAAAIgCAFIgFAHQgEAEAAAEIAAAJIgDAGIgBALIABBBIACAJIAAABIgIASQgEgGgDgQg");
	this.shape_2.setTransform(-0.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("ABEEqQgFgCgGgFIgKgJQgGgDgHgBQgHAAgEAFIgFAHQgDAEgEAAIgLgUQgGgOgIgDQgFgDgGAAQgGAAgEADQgEADAAAFQgCgGgEgFQgDgDgRgMQgNgJgJgOQgGgJABgHQABgFAEgDQAEgDAEACQAWAWAQACQAGABAJgCIAFAAQACAAADAHQAEAGAJACIAOgBQADgCADABQADABACACIAEANQADAIAHADIAHABIAaABIAHABIgBAPIgEAYIAAAEIgDgCgAgWheIgDgZQgBgMAEgTQAEgbAIgZQAKgiAPgVQAFgHASgRIACgBQAHgFAFgCQAGgBAFADQAJAGACAPQgBAPACAHQACAPAKAEQADABAIAAIAcgCQAHAAACABIAFAFIABABQgFAGgDAHQgEANgDAEQgHAFgCAEIgEAHQgDADgEABQgeAQgkAmIgIAKQgKAMgGAJQgGALgEAEIgGAKIgDAGQgCAEgKACgAhYiAQgCgCgDgHIgHgXQgDgIgBgFIgBgQIABgwIABgIIADgKIAJgTQAFgCAFAEIAIAHIAKAEIALAHQAGAEAMAAQAOABAHgCIAIgCIgFAKIgNAdQgEgBgHABQgIACgHAJIgJAPIgGANIgDAKIgNAlQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAgAiDirQgMg4ADgdQACgQAHgLQAHgMALgEIABABQAEADACAFIACACIAAAAIgCAFIgFAHQgEAEAAAEIAAAJIgDAGIgBALIABBBIACAJIAAABIgIASQgEgGgDgQg");
	this.shape_3.setTransform(-0.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("ABEEqQgFgCgGgFIgKgJQgGgDgHgBQgHAAgEAFIgFAHQgDAEgEAAIgLgUQgGgOgIgDQgFgDgGAAQgGAAgEADQgEADAAAFQgCgGgEgFQgDgDgRgMQgNgJgJgOQgGgJABgHQABgFAEgDQAEgDAEACQAWAWAQACQAGABAJgCIAFAAQACAAADAHQAEAGAJACIAOgBQADgCADABQADABACACIAEANQADAIAHADIAHABIAaABIAHABIgBAPIgEAYIAAAEIgDgCgAgWheIgDgZQgBgMAEgTQAEgbAIgZQAKgiAPgVQAFgHASgRIACgBQAHgFAFgCQAGgBAFADQAJAGACAPQgBAPACAHQACAPAKAEQADABAIAAIAcgCQAHAAACABIAFAFIABABQgFAGgDAHQgEANgDAEQgHAFgCAEIgEAHQgDADgEABQgeAQgkAmIgIAKQgKAMgGAJQgGALgEAEIgGAKIgDAGQgCAEgKACgAhYiAQgCgCgDgHIgHgXQgDgIgBgFIgBgQIABgwIABgIIADgKIAJgTQAFgCAFAEIAIAHIAKAEIALAHQAGAEAMAAQAOABAHgCIAIgCIgFAKIgNAdQgEgBgHABQgIACgHAJIgJAPIgGANIgDAKIgNAlQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAgAiDirQgMg4ADgdQACgQAHgLQAHgMALgEIABABQAEADACAFIACACIAAAAIgCAFIgFAHQgEAEAAAEIAAAJIgDAGIgBALIABBBIACAJIAAABIgIASQgEgGgDgQg");
	this.shape_4.setTransform(-0.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("ABEEqQgFgCgGgFIgKgJQgGgDgHgBQgHAAgEAFIgFAHQgDAEgEAAIgLgUQgGgOgIgDQgFgDgGAAQgGAAgEADQgEADAAAFQgCgGgEgFQgDgDgRgMQgNgJgJgOQgGgJABgHQABgFAEgDQAEgDAEACQAWAWAQACQAGABAJgCIAFAAQACAAADAHQAEAGAJACIAOgBQADgCADABQADABACACIAEANQADAIAHADIAHABIAaABIAHABIgBAPIgEAYIAAAEIgDgCgAgWheIgDgZQgBgMAEgTQAEgbAIgZQAKgiAPgVQAFgHASgRIACgBQAHgFAFgCQAGgBAFADQAJAGACAPQgBAPACAHQACAPAKAEQADABAIAAIAcgCQAHAAACABIAFAFIABABQgFAGgDAHQgEANgDAEQgHAFgCAEIgEAHQgDADgEABQgeAQgkAmIgIAKQgKAMgGAJQgGALgEAEIgGAKIgDAGQgCAEgKACgAhYiAQgCgCgDgHIgHgXQgDgIgBgFIgBgQIABgwIABgIIADgKIAJgTQAFgCAFAEIAIAHIAKAEIALAHQAGAEAMAAQAOABAHgCIAIgCIgFAKIgNAdQgEgBgHABQgIACgHAJIgJAPIgGANIgDAKIgNAlQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAgAiDirQgMg4ADgdQACgQAHgLQAHgMALgEIABABQAEADACAFIACACIAAAAIgCAFIgFAHQgEAEAAAEIAAAJIgDAGIgBALIABBBIACAJIAAABIgIASQgEgGgDgQg");
	this.shape_5.setTransform(-0.2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("ABEEqQgFgCgGgFIgKgJQgGgDgHgBQgHAAgEAFIgFAHQgDAEgEAAIgLgUQgGgOgIgDQgFgDgGAAQgGAAgEADQgEADAAAFQgCgGgEgFQgDgDgRgMQgNgJgJgOQgGgJABgHQABgFAEgDQAEgDAEACQAWAWAQACQAGABAJgCIAFAAQACAAADAHQAEAGAJACIAOgBQADgCADABQADABACACIAEANQADAIAHADIAHABIAaABIAHABIgBAPIgEAYIAAAEIgDgCgAgWheIgDgZQgBgMAEgTQAEgbAIgZQAKgiAPgVQAFgHASgRIACgBQAHgFAFgCQAGgBAFADQAJAGACAPQgBAPACAHQACAPAKAEQADABAIAAIAcgCQAHAAACABIAFAFIABABQgFAGgDAHQgEANgDAEQgHAFgCAEIgEAHQgDADgEABQgeAQgkAmIgIAKQgKAMgGAJQgGALgEAEIgGAKIgDAGQgCAEgKACgAhYiAQgCgCgDgHIgHgXQgDgIgBgFIgBgQIABgwIABgIIADgKIAJgTQAFgCAFAEIAIAHIAKAEIALAHQAGAEAMAAQAOABAHgCIAIgCIgFAKIgNAdQgEgBgHABQgIACgHAJIgJAPIgGANIgDAKIgNAlQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAAAgAiDirQgMg4ADgdQACgQAHgLQAHgMALgEIABABQAEADACAFIACACIAAAAIgCAFIgFAHQgEAEAAAEIAAAJIgDAGIgBALIABBBIACAJIAAABIgIASQgEgGgDgQg");
	this.shape_6.setTransform(-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_1}]},1).to({state:[{t:this.shape_5},{t:this.shape_1}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Incisor
	this.redGlow = new lib.carnIncisorRglow();
	this.redGlow.setTransform(-1,-1.5,1,1,0,0,0,19.5,35);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Incisor
	this.greenGlow = new lib.carnIncisorGglow();
	this.greenGlow.setTransform(-1,-1.5,1,1,0,0,0,19.5,35);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-36.5,43,75);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Carnivore_Carnassial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// carnassial
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AA6ESQhVgQgNgfQgKgaAfg0IAOgSIAFALQAHAZAFAFQABACACACIAFAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAXgYAwghQAbgUAPgHIAFgBQADAVgCAlQAAAVgDAZQAAACADAEQABADAFAAQASACAPgRIgCAAQADgEACAAQAJAMAIAdIAIAkIhIANQgfAFgWAAQgQAAgLgDgAiPiRQAAgVADgZQAAgDgDgEQgBgDgFAAQgSgCgPARIACAAQgDAEgDAAQgIgNgHgdIgIgkIBIgLQA1gJAbAHQBUARAOAgQAJAaggAzIgOASIgEgLQgHgZgFgFQgBgCgDgCIgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQgWAXgxAhQgbAUgPAGIgFABQgDgVADgkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA2EkQhggTgPgnQgQgfAng+IAAgCQAOgUAJgGQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAEgBQAMAAAIAaIAFAPQAXgVAqgdQAdgVAPgHQAKgFAFAAQALAAADAKIAAACQAFAXgDAqIAAABIgBAjIAJgIQAHgIAHgCQAIgCAIAHIABACQAKAMAKAjQAFATAFAdIgBAGIgGAEIhSANQghAFgYAAQgRAAgMgCgAgTCVQgfA0AKAaQANAfBVAQQAbAHA1gJIBIgNIgIgkQgIgdgJgMQgCAAgDAEIACAAQgPARgSgCQgFAAgBgDQgDgEAAgCQADgZAAgVQACglgDgVIgFABQgPAHgbAUQgwAhgXAYQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFAAQgCgCgBgCQgFgFgHgZIgFgLIgOASgAiShFQgLAAgCgKIAAgCQgFgXADgqIAAgBIABgjIgIAIQgIAIgGACQgJACgHgIIgCgBQgJgNgKgjQgFgTgEgdIABgGIAGgEIBSgMQA6gIAcAHQBfATAPAoQAQAfgoA+IAAABQgOAUgJAGQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgMAAgIgaIgFgPQgXAVgrAcQgdAVgPAGQgJAFgFAAIgBAAgAiVjJQAFAAABADQADAEAAADQgDAZAAAVQgDAkADAVIAFgBQAPgGAbgUQAxghAWgXQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAFAAQADACABACQAFAFAHAZIAEALIAOgSQAggzgJgaQgOgghUgRQgbgHg1AJIhIALIAIAkQAHAdAIANQADAAADgEIgCAAQANgPAPAAIAFAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AA6ESQhVgQgNgfQgKgaAfg0IAOgSIAFALQAHAZAFAFQABACACACIAFAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBQAXgYAwghQAbgUAPgHIAFgBQADAVgCAlQAAAVgDAZQAAACADAEQABADAFAAQASACAPgRIgCAAQADgEACAAQAJAMAIAdIAIAkIhIANQgfAFgWAAQgQAAgLgDgAiPiRQAAgVADgZQAAgDgDgEQgBgDgFAAQgSgCgPARIACAAQgDAEgDAAQgIgNgHgdIgIgkIBIgLQA1gJAbAHQBUARAOAgQAJAaggAzIgOASIgEgLQgHgZgFgFQgBgCgDgCIgFAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQgWAXgxAhQgbAUgPAGIgFABQgDgVADgkg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2EkQhggTgPgnQgQgfAng+IAAgCQAOgUAJgGQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAEgBQAMAAAIAaIAFAPQAXgVAqgdQAdgVAPgHQAKgFAFAAQALAAADAKIAAACQAFAXgDAqIAAABIgBAjIAJgIQAHgIAHgCQAIgCAIAHIABACQAKAMAKAjQAFATAFAdIgBAGIgGAEIhSANQghAFgYAAQgRAAgMgCgAgTCVQgfA0AKAaQANAfBVAQQAbAHA1gJIBIgNIgIgkQgIgdgJgMQgCAAgDAEIACAAQgPARgSgCQgFAAgBgDQgDgEAAgCQADgZAAgVQACglgDgVIgFABQgPAHgbAUQgwAhgXAYQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBAAIgFAAQgCgCgBgCQgFgFgHgZIgFgLIgOASgAiShFQgLAAgCgKIAAgCQgFgXADgqIAAgBIABgjIgIAIQgIAIgGACQgJACgHgIIgCgBQgJgNgKgjQgFgTgEgdIABgGIAGgEIBSgMQA6gIAcAHQBfATAPAoQAQAfgoA+IAAABQgOAUgJAGQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgMAAgIgaIgFgPQgXAVgrAcQgdAVgPAGQgJAFgFAAIgBAAgAiVjJQAFAAABADQADAEAAADQgDAZAAAVQgDAkADAVIAFgBQAPgGAbgUQAxghAWgXQABgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAIAFAAQADACABACQAFAFAHAZIAEALIAOgSQAggzgJgaQgOgghUgRQgbgHg1AJIhIALIAIAkQAHAdAIANQADAAADgEIgCAAQANgPAPAAIAFAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A844B").s().p("AA6ESQhVgQgNgfQgKgaAfg0IAOgSIAFALQAHAZAFAFQABACACACIAFAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBQAXgYAwghQAbgUAPgHIAFgBQADAVgCAlQAAAVgDAZQAAACADAEQABADAFAAQASACAPgRIgCAAQADgEACAAQAJAMAIAdIAIAkIhIANQgfAFgWAAQgQAAgLgDgAiPiRQAAgVADgZQAAgDgDgEQgBgDgFAAQgSgCgPARIACAAQgDAEgDAAQgIgNgHgdIgIgkIBIgLQA1gJAbAHQBUARAOAgQAJAaggAzIgOASIgEgLQgHgZgFgFQgBgCgDgCIgFAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQgWAXgxAhQgbAUgPAGIgFABQgDgVADgkg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE9752").s().p("AA6ESQhVgQgNgfQgKgaAfg0IAOgSIAFALQAHAZAFAFQABACACACIAFAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAXgYAwghQAbgUAPgHIAFgBQADAVgCAlQAAAVgDAZQAAACADAEQABADAFAAQASACAPgRIgCAAQADgEACAAQAJAMAIAdIAIAkIhIANQgfAFgWAAQgQAAgLgDgAiPiRQAAgVADgZQAAgDgDgEQgBgDgFAAQgSgCgPARIACAAQgDAEgDAAQgIgNgHgdIgIgkIBIgLQA1gJAbAHQBUARAOAgQAJAaggAzIgOASIgEgLQgHgZgFgFQgBgCgDgCIgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQgWAXgxAhQgbAUgPAGIgFABQgDgVADgkg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#964675").s().p("AA6ESQhVgQgNgfQgKgaAfg0IAOgSIAFALQAHAZAFAFQABACACACIAFAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBQAXgYAwghQAbgUAPgHIAFgBQADAVgCAlQAAAVgDAZQAAACADAEQABADAFAAQASACAPgRIgCAAQADgEACAAQAJAMAIAdIAIAkIhIANQgfAFgWAAQgQAAgLgDgAiPiRQAAgVADgZQAAgDgDgEQgBgDgFAAQgSgCgPARIACAAQgDAEgDAAQgIgNgHgdIgIgkIBIgLQA1gJAbAHQBUARAOAgQAJAaggAzIgOASIgEgLQgHgZgFgFQgBgCgDgCIgFAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQgWAXgxAhQgbAUgPAGIgFABQgDgVADgkg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0692E2").s().p("AA6ESQhVgQgNgfQgKgaAfg0IAOgSIAFALQAHAZAFAFQABACACACIAFAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBQAXgYAwghQAbgUAPgHIAFgBQADAVgCAlQAAAVgDAZQAAACADAEQABADAFAAQASACAPgRIgCAAQADgEACAAQAJAMAIAdIAIAkIhIANQgfAFgWAAQgQAAgLgDgAiPiRQAAgVADgZQAAgDgDgEQgBgDgFAAQgSgCgPARIACAAQgDAEgDAAQgIgNgHgdIgIgkIBIgLQA1gJAbAHQBUARAOAgQAJAaggAzIgOASIgEgLQgHgZgFgFQgBgCgDgCIgFAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQgWAXgxAhQgbAUgPAGIgFABQgDgVADgkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_3},{t:this.shape_6}]},1).to({state:[{t:this.shape_3},{t:this.shape_7}]},1).wait(1));

	// carnassial
	this.redGlow = new lib.carnCarnassialRglow();
	this.redGlow.setTransform(-0.5,-1,1,1,0,0,0,27,33);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// carnassial
	this.greenGlow = new lib.carnCarnassialGglow();
	this.greenGlow.setTransform(-0.5,-1,1,1,0,0,0,27,33);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-34,58,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.Carnivore_Cannie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cannie
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AgyFyQgJgCgEgDIgMgNIgKgJIgLgIQgHgHgEgHIgFgKIADAAQAAgFgFgEQgBgIABgHIABgBIAAgOIAEgWIAAAAIABgNIABAAIABgDIADgGQADgTAMgcIAkhTIADgEIADgCIAEgGIAIgTQgDAcAEAcIAfB0IADAPIADAOQACAIAFAHIALAUQAGAKAAAGQAAAIABADQAGAFAAADQAAAEgCADQgEAFgLAHIgSAKQgPAHgNAAQgJAAgNgEgAgxA7QgHhGAEhNQAAgWADgXQAFgxAHgqQAIgrALgdQAOgpAUgSQALgJAWgJQA1A5AGATQAKAcgCANQgCAMgOAWIgzBIIgEAFIgsBNQgVAwgTAzIgJAhIgBgFg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjGCQgQgCgSgMQgMgIgRgRIgSgSQgKgMgEgLIgBAAIgBgHIgCgFIABgCIAAABIAAgEIAFgYIABgDIABgCQAEgJgCgJIgBgFQACgOAIgaIAPgpQAOgjANgXIANgXQgIgWgEgjQgIhLAJhMIADghIADgOIgFAFIABgDIAAgEIABgIIAAgDIAAgDIAEgHQABgEABgLIAAgBQADgFAAgHIABgEIABACIAAAAQAIglALglQATg6AfgOQAMgFAUgCQADAAAJAJIgEABQAOAHAEAEQAzA8AGAVQAGAUgCAQIAEAAQgDAEgBAEIgCAAQgDALgGAKQgHAEgFAJIgKARIgKANIguBCQgQAZgOAbQgOAigLAZIgOAnQAFADADAIQACAHgBAQQgCAVACAPIAEAYIAiCFQAFARAEAIIAIANQAFAIABAFQABAKACAEIACADIACgBIAAASIgGAIQgJAJgLAEQgHADAAACQgaAIgRAAIgJAAgAhtFAQAEAGAHAHIALAJIAKAIIAMANQAEAEAJABQANAEAJAAQANAAARgHIAQgJQALgHAEgGQACgDABgEQgBgDgGgFQgBgCABgJQgBgGgGgKIgLgUQgFgHgCgHIgCgPIgEgPIgfhzQgEgdADgcIgIATIgDAGIgEACIgCAFIglBSQgMAdgDASIgDAHIAAACIgBAAIgCANIAAABIgEAVIAAAPIgBAAQgBAHABAIQAFAEAAAFIgDAAIAFALgAAOllQgUATgOAoQgLAdgHAsQgIApgFAyQgDAXAAAVQgEBNAHBGIABAFIAJghQATgzAWgwIAshNIADgFIAzhIQAPgWABgMQACgNgJgcQgHgTg1g5QgWAKgLAIg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgyFyQgJgCgEgDIgMgNIgKgJIgLgIQgHgHgEgHIgFgKIADAAQAAgFgFgEQgBgIABgHIABgBIAAgOIAEgWIAAAAIABgNIABAAIABgDIADgGQADgTAMgcIAkhTIADgEIADgCIAEgGIAIgTQgDAcAEAcIAfB0IADAPIADAOQACAIAFAHIALAUQAGAKAAAGQAAAIABADQAGAFAAADQAAAEgCADQgEAFgLAHIgSAKQgPAHgNAAQgJAAgNgEgAgxA7QgHhGAEhNQAAgWADgXQAFgxAHgqQAIgrALgdQAOgpAUgSQALgJAWgJQA1A5AGATQAKAcgCANQgCAMgOAWIgzBIIgEAFIgsBNQgVAwgTAzIgJAhIgBgFg");
	this.shape_2.setTransform(-0.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A844B").s().p("AgyFyQgJgCgEgDIgMgNIgKgJIgLgIQgHgHgEgHIgFgKIADAAQAAgFgFgEQgBgIABgHIABgBIAAgOIAEgWIAAAAIABgNIABAAIABgDIADgGQADgTAMgcIAkhTIADgEIADgCIAEgGIAIgTQgDAcAEAcIAfB0IADAPIADAOQACAIAFAHIALAUQAGAKAAAGQAAAIABADQAGAFAAADQAAAEgCADQgEAFgLAHIgSAKQgPAHgNAAQgJAAgNgEgAgxA7QgHhGAEhNQAAgWADgXQAFgxAHgqQAIgrALgdQAOgpAUgSQALgJAWgJQA1A5AGATQAKAcgCANQgCAMgOAWIgzBIIgEAFIgsBNQgVAwgTAzIgJAhIgBgFg");
	this.shape_3.setTransform(-0.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE9752").s().p("AgyFyQgJgCgEgDIgMgNIgKgJIgLgIQgHgHgEgHIgFgKIADAAQAAgFgFgEQgBgIABgHIABgBIAAgOIAEgWIAAAAIABgNIABAAIABgDIADgGQADgTAMgcIAkhTIADgEIADgCIAEgGIAIgTQgDAcAEAcIAfB0IADAPIADAOQACAIAFAHIALAUQAGAKAAAGQAAAIABADQAGAFAAADQAAAEgCADQgEAFgLAHIgSAKQgPAHgNAAQgJAAgNgEgAgxA7QgHhGAEhNQAAgWADgXQAFgxAHgqQAIgrALgdQAOgpAUgSQALgJAWgJQA1A5AGATQAKAcgCANQgCAMgOAWIgzBIIgEAFIgsBNQgVAwgTAzIgJAhIgBgFg");
	this.shape_4.setTransform(-0.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#964675").s().p("AgyFyQgJgCgEgDIgMgNIgKgJIgLgIQgHgHgEgHIgFgKIADAAQAAgFgFgEQgBgIABgHIABgBIAAgOIAEgWIAAAAIABgNIABAAIABgDIADgGQADgTAMgcIAkhTIADgEIADgCIAEgGIAIgTQgDAcAEAcIAfB0IADAPIADAOQACAIAFAHIALAUQAGAKAAAGQAAAIABADQAGAFAAADQAAAEgCADQgEAFgLAHIgSAKQgPAHgNAAQgJAAgNgEgAgxA7QgHhGAEhNQAAgWADgXQAFgxAHgqQAIgrALgdQAOgpAUgSQALgJAWgJQA1A5AGATQAKAcgCANQgCAMgOAWIgzBIIgEAFIgsBNQgVAwgTAzIgJAhIgBgFg");
	this.shape_5.setTransform(-0.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0692E2").s().p("AgyFyQgJgCgEgDIgMgNIgKgJIgLgIQgHgHgEgHIgFgKIADAAQAAgFgFgEQgBgIABgHIABgBIAAgOIAEgWIAAAAIABgNIABAAIABgDIADgGQADgTAMgcIAkhTIADgEIADgCIAEgGIAIgTQgDAcAEAcIAfB0IADAPIADAOQACAIAFAHIALAUQAGAKAAAGQAAAIABADQAGAFAAADQAAAEgCADQgEAFgLAHIgSAKQgPAHgNAAQgJAAgNgEgAgxA7QgHhGAEhNQAAgWADgXQAFgxAHgqQAIgrALgdQAOgpAUgSQALgJAWgJQA1A5AGATQAKAcgCANQgCAMgOAWIgzBIIgEAFIgsBNQgVAwgTAzIgJAhIgBgFg");
	this.shape_6.setTransform(-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

	// Cannie
	this.redGlow = new lib.carnCanineRglow();
	this.redGlow.setTransform(-1,-1,1,1,0,0,0,17.5,43);

	this.timeline.addTween(cjs.Tween.get(this.redGlow).wait(6));

	// Cannie
	this.greenGlow = new lib.carnCanineGglow();
	this.greenGlow.setTransform(-1,-1,1,1,0,0,0,17.5,43);

	this.timeline.addTween(cjs.Tween.get(this.greenGlow).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.5,-44,39,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


// stage content:
(lib.RadioBtn_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Types_of_teeth
	this.instance = new lib.Carnivore_incisor();
	this.instance.setTransform(200,200);

	this.instance_1 = new lib.Carnivore_Cannie();
	this.instance_1.setTransform(200,200);

	this.instance_2 = new lib.Carnivore_Molar();
	this.instance_2.setTransform(200,200);

	this.instance_3 = new lib.Carnivore_Carnassial();
	this.instance_3.setTransform(200,200);

	this.instance_4 = new lib.Herbivore_Incisor();
	this.instance_4.setTransform(200,200);

	this.instance_5 = new lib.Herbivore_Cannie();
	this.instance_5.setTransform(200,200);

	this.instance_6 = new lib.Herbivore_Molar();
	this.instance_6.setTransform(200,200);

	this.instance_7 = new lib.Insectivore_Incisor();
	this.instance_7.setTransform(200,200);

	this.instance_8 = new lib.Insectivore_Cannie();
	this.instance_8.setTransform(200,200);

	this.instance_9 = new lib.Insectivore_Molar();
	this.instance_9.setTransform(200,200);

	this.instance_10 = new lib.Rodant_frontTooth();
	this.instance_10.setTransform(200,200);

	this.instance_11 = new lib.Rodant_Molar();
	this.instance_11.setTransform(200,200);

	this.instance_12 = new lib.Omnivore_Incisor();
	this.instance_12.setTransform(200,200);

	this.instance_13 = new lib.Omnivore_Cannie();
	this.instance_13.setTransform(200,200);

	this.instance_14 = new lib.Omnivore_Molar();
	this.instance_14.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(379.5,363.5,43,75);
p.frameBounds = [rect, new cjs.Rectangle(381.5,356,39,90), new cjs.Rectangle(345,362.5,112,78), new cjs.Rectangle(372.5,366,58,70), new cjs.Rectangle(373,370,55,62), new cjs.Rectangle(389,374,24,54), new cjs.Rectangle(327,370,147,62), new cjs.Rectangle(376.8,346.8,49,108), new cjs.Rectangle(370,354,63,95), new cjs.Rectangle(303.5,350,195,103), new cjs.Rectangle(359,335,85,133), new cjs.Rectangle(361,371.5,81,59), new cjs.Rectangle(369,378.5,65,45), new cjs.Rectangle(374.5,367.5,53,67), new cjs.Rectangle(330.6,377.1,141,49)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;