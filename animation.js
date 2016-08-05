var triangle  = '400,   399.9 260.3, 400.5 100,   400.5 139.1, 321.8 180.1, 239.5 218.6, 162.7 250,   99.8  280,   159.9 322.8, 245.3 360.1, 320.1';
var rectangle = '400.2, 399.6 260.1, 400.1 100.5, 399.6 99.5,  298.4 99.5,  186.4 99.5,  100.5 250.6, 100.5 399.7, 99.9  400.2, 223.6 399.8, 314.4';
var hex       = '380.5, 324.2 250.4, 400.2 120.2, 325.2 119.6, 249.7 119.6, 175.3 183.8, 137.9 249.1, 99.8  315.3, 137.6 379.6, 174.3 380.5, 244.7';
var star      = '343.6, 399   250.7, 348.3 158.2, 400   175.4, 291.5 100,   215.2 203.6, 198.8 249.4, 100   296.3, 198.3 400,   213.6 325.4, 290.7';
var colors    = ['#1abc9c','#2980b9','#e67e22','#f1c40f'];
var action    = '.action';

var toTriangle = function()
{
	anime({
		targets: [action],
		points:triangle,
		duration:1000,
		fill:colors[0],
		easing:'easeInCirc',
		complete:function(){toRectangle();},
	});
}
var toRectangle = function()
{
	anime({
		targets: [action],
		points:rectangle,
		duration:1000,
		fill:colors[1],
		easing:'easeInCirc',
		complete:function(){toHex();}
	});
}
var toHex = function()
{
	anime({
		targets: [action],
		points:hex,
		duration:1000,
		fill:colors[2],
		easing:'easeInCirc',
		complete:function(){toStar();}
	});
}
var toStar = function()
{
	anime({
		targets: [action],
		points:star,
		duration:1000,
		fill:colors[3],
		easing:'easeInCirc',
		complete:function(){toTriangle();}
	});
}
toRectangle();