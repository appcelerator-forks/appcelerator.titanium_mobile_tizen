// Wraps Tizen interface "CompositeFilter" that resides in Tizen module "Tizen".

define(['Ti/_/declare', 'Tizen/_/AbstractFilter'], function(declare, AbstractFilter) {

	var filter = declare(AbstractFilter, {

		constructor: function(args) {
			if (args.toString() === '[object CompositeFilter]') {
				// args is a native Tizen object; simply wrap it (take ownership of it)
				this._obj = args;
			} else {
				// args is a dictionary that the user of the wrapper module passed to the creator function.
				var i = 0,
					filters = args.filters,
					filtersCount = filters.length,
					result = [];

				for (; i < filtersCount; i++) {
					result.push(filters[i]._obj);
				}
				args.filters = result;
				this._obj = new tizen.CompositeFilter(args.type, args.filters);
			}
		},

		properties: {
			type: {
				get: function() {
					return this._obj.type;
				},
				set: function(value) {
					this._obj.type = value;
				}
			},
			filters: {
				get: function() {
					return this._obj.filters;
				},
				set: function(value) {
					this._obj.filters = value;
				}
			}
		}

	});

	// Initialize declaredClass, so that toString() works properly on such objects.
	// Correct operation of toString() is required for proper wrapping and automated testing.
	filter.prototype.declaredClass = 'Tizen.CompositeFilter';
	return filter;
});