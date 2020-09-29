$(document).ready(function(){

var camheightmin = document.getElementById("camheightmin")
var camheightmax = document.getElementById("camheightmax")
var trackersize = document.getElementById("trackersize")
var trackerdistance = document.getElementById("trackerdistance")
var areawidth = document.getElementById("areawidth")
var areadepth = document.getElementById("areadepth")
		var camavgheight = (Number(camheightmin.value)+Number(camheightmax.value))/2

		$("#trackerdistance").val(Math.round((camavgheight * 0.145) * 100))
		$("#trackersize").val(Number(camheightmax.value) / 400 *10000)
		$("#trackercount").val(Math.round((Number(areawidth.value)/(camavgheight * 0.145))*(Number(areadepth.value)/(camavgheight * 0.145))))
$(":input").bind('change', function () {
		var camavgheight = (Number(camheightmin.value)+Number(camheightmax.value))/2
		console.log(camavgheight)
		$("#trackerdistance").val(Math.round((camavgheight * 0.145) * 100))
		$("#trackersize").val(Number(camheightmax.value) / 400 *10000)
		$("#trackercount").val(Math.round((Number(areawidth.value)/(camavgheight * 0.145))*(Number(areadepth.value)/(camavgheight * 0.145))))
	});
	
$("input[type='number']").inputSpinner()
});
