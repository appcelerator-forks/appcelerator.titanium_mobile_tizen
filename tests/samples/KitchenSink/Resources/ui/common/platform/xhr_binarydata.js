function xhr_binary() {
	
	var win = Titanium.UI.createWindow();
	
	var l = Titanium.UI.createLabel({
		text:'Downloading image...',
		font:{fontSize:13},
		top:10,
		left:10,
		width:300,
		color:'#888'
	});
	win.add(l);
	var imageView = Titanium.UI.createImageView({
		top:50,
		left:10,
		height:100,
		width:80
	});
	win.add(imageView);
	
	var xhr = Titanium.Network.createHTTPClient();
	
	xhr.onload = function()
	{
		var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'ti.png');
		
		//ImageView will support Blob and File on Tizen/MobileWeb if we implement Base64 in Blob
		//The next row demonstrate it. 
		//this.responseData._data = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
		
		f.write(this.responseData);
		imageView.image = f.nativePath;
	};
	
	// open the client (and test HTTPS)
	xhr.open('GET','http://www.appcelerator.com/wp-content/themes/appcelerator/img/a-logo.png');
	
	// send the data
	xhr.send();
	
	return win;
};

module.exports = xhr_binary;
