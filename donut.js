$(document).ready(function() {
    $('#menu').accordion({ header: "h3", collapsible: true, active: false })    
});
$(document).ready(function() {
    $('#slider').leanSlider();
});

function ranNum(min, max) {
	return (Math.floor(Math.random() * (max - min)));
};

function DonutShop(location, minCust, maxCust, aveSold) {
	this.location = location;
	this.openTime = 7;
	this.closeTime = 18;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.aveSold = aveSold;
	this.custPerHour = this.generateCustPerHour();
};

DonutShop.prototype.generateCustPerHour = function() {
	var x = [];
	for (var i = 0; i < this.getTotalHours(); i++) {
		x[i] = ranNum(this.minCust, this.maxCust); 
	};
	return x;
};

DonutShop.prototype.getTotalHours = function() {
	return (this.closeTime - this.openTime); 
};

DonutShop.prototype.donutsPerHour = function() {
	var donutsPerHour = [];
	for (var i = 0; i < this.custPerHour.length; i++) {
		donutsPerHour.push((this.custPerHour[i] * this.aveSold));
	};
	return donutsPerHour;
};

DonutShop.prototype.aveDonutsPerHour = function() {
	var donutsAve = Math.ceil(this.donutsPerDay() / this.getTotalHours());
	return donutsAve;
};

DonutShop.prototype.donutsPerDay = function() {
	var totalDonuts = 0;
	var donutsPerHour = this.donutsPerHour();
	for(var i = 0; i < donutsPerHour.length; i++) {
		totalDonuts += donutsPerHour[i];
	}
	return totalDonuts;
};

DonutShop.prototype.whatToBake = function() {
	alert('To keep with demands at the ' + this.location + ' location, this store must bake ' 
		+ this.aveDonutsPerHour() + ' per hour. To keep up with the demand of ' + this.donutsPerDay() + ' per day.')
};

function processForm() {
	var location = document.getElementById('donut').elements['location'].value;
	var minCust = document.getElementById('donut').elements['minCust'].value;
	var maxCust = document.getElementById('donut').elements['maxCust'].value;
	var aveSold = document.getElementById('donut').elements['aveSold'].value;
	var shop = new DonutShop(location, minCust, maxCust, aveSold);
	shop.whatToBake();
	//for testing
	// console.log(location);
	// console.log(minCust);
	// console.log(maxCust);
	// console.log(aveSold);
};

