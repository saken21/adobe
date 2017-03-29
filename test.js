(function() {

	var parent = activeDocument;
	var path   = parent.path + '/_linkImages/';

	Folder(path).create();

	var items = parent.placedItems;

	for (var i = 0; i < items.length; i++) {

		var item   = items[i];
		var width  = item.width;
		var height = item.height;
		var file   = item.file;
		var uri    = decodeURI(file.absoluteURI);

		var doc     = app.open(file);
		var options = new ExportOptionsPNG24();
		var png     = new File(path + 'test.png');

		options.horizontalScale  = 120;
		options.verticalScale    = 120;
		options.artBoardClipping = true;

		doc.exportFile(png,ExportType.PNG24,options);
		doc.close(SaveOptions.DONOTSAVECHANGES);

	}

})();