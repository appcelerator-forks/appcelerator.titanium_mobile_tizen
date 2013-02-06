/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2012 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
 
module.exports = new function() {
	var finish;
	var valueOf;
	this.init = function(testUtils) {
		finish = testUtils.finish;
		valueOf = testUtils.valueOf;
	}

	this.name = "platform";
	this.tests = [
		{name: "apiPoints"}
	]

	if (Ti.Platform.osname === 'tizen' || Ti.Platform.osname === 'mobileweb') {
		this.tests.push({name: "displayCaps"});
	}

	this.apiPoints = function(testRun) {
		valueOf(testRun, Ti.Platform.createUUID).shouldBeFunction();
		valueOf(testRun, Ti.Platform.openURL).shouldBeFunction();
		valueOf(testRun, Ti.Platform.is24HourTimeFormat).shouldBeFunction();
		valueOf(testRun, Ti.Platform.is24HourTimeFormat()).shouldBeBoolean();
    	valueOf(testRun, Ti.Platform.BATTERY_STATE_CHARGING).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.BATTERY_STATE_FULL).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.BATTERY_STATE_UNKNOWN).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.BATTERY_STATE_UNPLUGGED).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.address).shouldBeString();
		valueOf(testRun, Ti.Platform.architecture).shouldBeString();
    	valueOf(testRun, Ti.Platform.availableMemory).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.batteryMonitoring).shouldBeBoolean();
    	valueOf(testRun, Ti.Platform.displayCaps).shouldBeObject();
    	valueOf(testRun, Ti.Platform.displayCaps).shouldNotBeNull();
    	valueOf(testRun, Ti.Platform.displayCaps.dpi).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.displayCaps.density).shouldBeString();
    	valueOf(testRun, Ti.Platform.displayCaps.platformHeight).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.displayCaps.platformWidth).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.id).shouldBeString();
    	valueOf(testRun, Ti.Platform.locale).shouldBeString();
    	valueOf(testRun, Ti.Platform.macaddress).shouldBeString();
    	valueOf(testRun, Ti.Platform.model).shouldBeString();
    	valueOf(testRun, Ti.Platform.name).shouldBeString();
    	valueOf(testRun, Ti.Platform.netmask).shouldBeString();
    	valueOf(testRun, Ti.Platform.osname).shouldBeString();
    	valueOf(testRun, Ti.Platform.ostype).shouldBeString();
    	valueOf(testRun, Ti.Platform.processorCount).shouldBeNumber();
    	valueOf(testRun, Ti.Platform.version).shouldBeString();
    	valueOf(testRun, Ti.Platform.runtime).shouldBeString();
    	if (Ti.Platform.osname === 'android') {
    		valueOf(testRun, Ti.Platform.runtime === 'rhino' || Ti.Platform.runtime === 'v8').shouldBeTrue();
    	} else if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
        	valueOf(testRun, Ti.Platform.runtime).shouldBe("javascriptcore");
    	} else {
        	valueOf(testRun, Ti.Platform.runtime.length).shouldBeGreaterThan(0);
    	}

		finish(testRun);
	}

	this.displayCaps = function(testRun) {
	
		// In Mobile Web-based platforms, the platform's reported display capabilities
		// correspond to those of the browser that hosts the running application.

		var body = document.body,
			measureDiv = document.createElement('div'),
			dpi;

		// Absolute width of the display		
		valueOf(testRun, Ti.Platform.displayCaps.platformWidth).shouldBeEqual(window.innerWidth);
		// Absolute height of the display
		valueOf(testRun, Ti.Platform.displayCaps.platformHeight).shouldBeEqual(window.innerHeight);

		measureDiv.style.width = "1in";
		measureDiv.style.visibility = "hidden";
		body.appendChild(measureDiv);
		dpi = parseInt(measureDiv.clientWidth);
		body.removeChild(measureDiv);

		// Display density expressed as dots-per-inch
		valueOf(testRun, Ti.Platform.displayCaps.dpi).shouldBeEqual(dpi);
		
		finish(testRun);
	}
}
