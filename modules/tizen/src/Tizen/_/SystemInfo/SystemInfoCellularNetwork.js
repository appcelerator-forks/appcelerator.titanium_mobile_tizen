// Wraps Tizen interface "SystemInfoProperty" that resides in Tizen module "SystemInfo".

define(['Ti/_/declare', 'Ti/_/Evented'], function(declare, Evented) {

	var celluralNetwork = declare(Evented, {

		constructor: function(args) {
			if (args.toString() === '[object cellularnetworkinfo]') {
				// args is a native Tizen object; simply wrap it (take ownership of it)
				this._obj = args;
			}
		},

		constants: {
			status: {
				get: function() {
					return this._obj.status;
				}
			},
			apn: {
				get: function() {
					return this._obj.apn;
				}
			},
			ipAddress: {
				get: function() {
					return this._obj.ipAddress;
				}
			},
			ipv6Address: {
				get: function() {
					return this._obj.ipv6Address;
				}
			},
			mcc: {
				get: function() {
					return this._obj.mcc;
				}
			},
			mnc: {
				get: function() {
					return this._obj.mnc;
				}
			},
			cellId: {
				get: function() {
					return this._obj.cellId;
				}
			},
			lac: {
				get: function() {
					return this._obj.lac;
				}
			},
			isRoaming: {
				get: function() {
					return this._obj.isRoaming;
				}
			}
		}

	});

	// Initialize declaredClass, so that toString() works properly on such objects.
	// Correct operation of toString() is required for proper wrapping and automated testing.
	celluralNetwork.prototype.declaredClass = 'Tizen.SystemInfo.SystemInfoCellularNetwork';
	return celluralNetwork;
});
