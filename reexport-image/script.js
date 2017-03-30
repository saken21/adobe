(function() {

	var SIZE_RATIO   = 1.2;
	var IMAGE_FOLDER = '_linkImages';

	var parent = activeDocument;
	var path   = parent.path + '/' + IMAGE_FOLDER + '/';
	var items  = parent.placedItems;

	Folder(path).create();

	for (var i = 0; i < items.length; i++) {
		saveImage(items[i]);
	}

	function saveImage(item) {

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