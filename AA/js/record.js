//		var lineBool = true; //设置保存的轨迹为true  未保存的轨迹为false
$("#stopNameSpan1").html(localStorage.getItem('stopWarnRecord1'))
$("#stopNameSpan2").html(localStorage.getItem('stopWarnRecord2'))
$("#stopNameSpan3").html(localStorage.getItem('stopWarnRecord3'))
$("#stopNameSpan4").html(localStorage.getItem('stopWarnRecord4'))

document.getElementById("M_Toggle").addEventListener('toggle', function(e) {
	var isActive = e.detail.isActive;
	if(isActive) {
		console.log("isA")
		localStorage.setItem('stopWarnRecord1', "warn.mp3");
		localStorage.setItem('stopWarnRecord2', "warnpianli.mp3");
		localStorage.setItem('stopWarnRecord3', "warngaowei.mp3");
		localStorage.setItem('stopWarnRecord4', "warngps.mp3");
		$('#boolDiv').css('display', 'none')
	} else {
		console.log("OFF")
		$('#boolDiv').css('display', 'block')
	}
});

//开始录音11111111111111111111111111111111111111111111111
var r1 = plus.audio.getRecorder();

//录音
function startRecord1() {
	$('#loadingDiv1').append('<p class="mui-progressbar mui-progressbar-infinite"></p>')
	if(r1 == null) {
		alert("设备未准备音频");
		return;
	}
	r1.record({
		filename: "_doc/audio/"
	}, function(e) {
		console.log(e);
		$("#stopNameSpan1").html(e);
		localStorage.setItem('stopWarnRecord1', e);
	}, function(e) {
		console.log("Audio record Failed: " + e.message);
	});
}

function stopRecord1() {
	r1.stop();
	$('#loadingDiv1').html('')
}

var p1 = null;

function startPlay1() {
	if(plus.audio == undefined) {
		alert("Device not ready!");
	}
	$("#stopNameSpan1").html();
	p1 = plus.audio.createPlayer($("#stopNameSpan1").html());
	p1.play(function() {
		console.log("Audio play success!");
	}, function(e) {
		alert("Audio play error: " + e.message);
	});
}



//开始录音2222222222222222222222222222222222222222222222
var r2 = plus.audio.getRecorder();

//录音
function startRecord2() {
	$('#loadingDiv2').append('<p class="mui-progressbar mui-progressbar-infinite"></p>')
	if(r2 == null) {
		alert("设备未准备音频");
		return;
	}
	r2.record({
		filename: "_doc/audio/"
	}, function(e) {
		console.log(e);
		$("#stopNameSpan2").html(e);
		localStorage.setItem('stopWarnRecord2', e);
	}, function(e) {
		console.log("Audio record Failed: " + e.message);
	});
}

function stopRecord2() {
	r2.stop();
	$('#loadingDiv2').html('')
}

var p2 = null;

function startPlay2() {
	if(plus.audio == undefined) {
		alert("Device not ready!");
	}
	$("#stopNameSpan2").html();
	p2 = plus.audio.createPlayer($("#stopNameSpan2").html());
	p2.play(function() {
		console.log("Audio play success!");
	}, function(e) {
		alert("Audio play error: " + e.message);
	});
}




//开始录音333333333333333333333333333333333333333333333
var r3 = plus.audio.getRecorder();

//录音
function startRecord3() {
	$('#loadingDiv3').append('<p class="mui-progressbar mui-progressbar-infinite"></p>')
	if(r3 == null) {
		alert("设备未准备音频");
		return;
	}
	r3.record({
		filename: "_doc/audio/"
	}, function(e) {
		console.log(e);
		$("#stopNameSpan3").html(e);
		localStorage.setItem('stopWarnRecord3', e);
	}, function(e) {
		console.log("Audio record Failed: " + e.message);
	});
}

function stopRecord3() {
	r3.stop();
	$('#loadingDiv3').html('')
}

var p3 = null;

function startPlay3() {
	if(plus.audio == undefined) {
		alert("Device not ready!");
	}
	$("#stopNameSpan3").html();
	p3 = plus.audio.createPlayer($("#stopNameSpan3").html());
	p3.play(function() {
		console.log("Audio play success!");
	}, function(e) {
		alert("Audio play error: " + e.message);
	});
}





//开始录音333333333333333333333333333333333333333333333
var r4 = plus.audio.getRecorder();

//录音
function startRecord4() {
	$('#loadingDiv4').append('<p class="mui-progressbar mui-progressbar-infinite"></p>')
	if(r4 == null) {
		alert("设备未准备音频");
		return;
	}
	r4.record({
		filename: "_doc/audio/"
	}, function(e) {
		console.log(e);
		$("#stopNameSpan4").html(e);
		localStorage.setItem('stopWarnRecord4', e);
	}, function(e) {
		console.log("Audio record Failed: " + e.message);
	});
}

function stopRecord4() {
	r4.stop();
	$('#loadingDiv4').html('')
}

var p4 = null;

function startPlay4() {
	if(plus.audio == undefined) {
		alert("Device not ready!");
	}
	$("#stopNameSpan4").html();
	p4 = plus.audio.createPlayer($("#stopNameSpan4").html());
	p4.play(function() {
		console.log("Audio play success!");
	}, function(e) {
		alert("Audio play error: " + e.message);
	});
}

