(function() {

	var SIZE_RATIO   = 1.2;
	var IMAGE_FOLDER = '_linkImages';

	var parent = app.activeDocument;
	var path   = parent.filePath + '/' + IMAGE_FOLDER + '/';
	var pages  = parent.pages;

	Folder(path).create();

	for (var i = 0; i < pages.length; i++) {
		analyzePage(pages[i]);
	}

	function analyzePage(page) {

		var images = page.allGraphics;

		for (var i = 0; i < images.length; i++) {
			saveImage(images[i]);
		}

	}

	function saveImage(image) {

		alert(image.geometricBounds); // 座標
		alert(image.actualPpi); // 元画像の解像度
		alert(image.effectivePpi); // 配置画像の解像度

		return;

		var w       = Math.floor(item.width  * SIZE_RATIO);
		var h       = Math.floor(item.height * SIZE_RATIO);
		var file    = item.file;
		var doc     = open(file);
		var rawItem = doc.pageItems[0];

		doc.artboards[0].artboardRect = [0,h,w,0];

		rawItem.width  = w;
		rawItem.height = h;

		var options = new ExportOptionsPNG24();
		var png     = new File(path + i + '.png');

		doc.exportFile(png,ExportType.PNG24,options);
		doc.close(SaveOptions.DONOTSAVECHANGES);

	}

})();