// Variables
var root;
var sum = 0;

// p5.js setup function
function setup() {
	noCanvas();
	root = new Node();
	var iterations = 400;
	var top_value = 10000;
	for (var i = 0; i < iterations; i++) {
		root.addValue(floor(random(top_value)));
	}
	root.display();
	createP('got ' + sum + ' for a expected value of ' + iterations * top_value/2);
}

// Node object
function Node() {
	this.value = null; // integer
	this.comment = ''; // a string
	this.left = null; // a Node
	this.right = null; // a Node
}

// Generic addValue function for a node
Node.prototype.addValue = function(val) {
	if (this.value == null) {
		this.value = val;
		this.left = new Node();
		this.right = new Node();
	} else {
		if (val < this.value) {
			this.left.addValue(val);
		} else if (val > this.value) {
			this.right.addValue(val);
		}
	}
}

// Display the values in sorted order
Node.prototype.display = function() {
	if (this.left != null) {
		this.left.display();
	}
	if (this.value != null) {
		createDiv(this.value);
		sum += this.value;
	}
	if (this.right != null) {
		this.right.display();
	}
}
