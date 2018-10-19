function downloadClk() {
	var nameMap = '';
	$('#tishiDiv').html('<span id="">下载中请不要关闭窗口</span>')
	mui('.downloader').button('loading');
	$.each($('input:radio'), function() {
		if(this.checked) {
			console.log($(this).val());
			nameMap = $(this).val();
		}
	});

	var dtask = plus.downloader.createDownload("http://101.201.105.176/AirMap/" + nameMap + ".zip", {}, function(d, status) {
		// 下载完成
		if(status == 200) {
			//			alert("下载成功: " + d.filename);
			console.log("地图下载成功: " + d.filename);
			mui.toast("地图下载成功");
			zipDecompress(d.filename)
			mui('.downloader').button('reset');
		} else {
			mui.toast("地图下载失败");
			mui('.downloader').button('reset');
		}
		$('#tishiDiv').html('')
	});
	dtask.start();
}

function zipDecompress(filename) {
	var zipfile = filename;
	var targetPath = '_downloads/';
	plus.zip.decompress(zipfile, targetPath,
		function() {
			console.log("解压成功")
			//			alert("解压成功");
		},
		function(error) {
			console.log("解压失败");
		});
}