define(['Ti/_/declare', 'Ti/_/Evented'], function(declare, Evented){
	var Alarm = declare('Tizen.Alarm.Alarm', Evented, {
		constants: {
			id: {
				get: function() {
					return this._obj.id;
				}
			}
		}

	});

	Alarm.prototype.declaredClass = 'Tizen.Alarm.Alarm';
	return Alarm;

});