define(["underscore", 'base/extend', 'eventable'], function(_, extend, E){
	var Component = function(){
		var params = {};
		this.get = function(property){
			if(!params.hasOwnProperty(property)){
				console.log("Warning: Getting non-existant property '"+property+"'");
			}
			this.trigger("get:"+property);
			this.trigger("get", property);
			return params[property];
		};
		this.setProperty = function(property, value){
			var oldValue;
			if(params.hasOwnProperty(property))
				oldValue = params[property];
			this.trigger("set:"+property, value, oldValue);
			this.trigger("set", property, value, oldValue);
			params[property] = value;
		};
		this.set = function(property){
			var self = this;
			if(_.isString(property)){
				this.setProperty(property, arguments[1]);
			}
			else if(_.isObject(property)){
				_.map(property, function(value,property){
					self.setProperty(property, value);
				});
			}
			else
				console.log("Warning: bad property");
			return this;
		};
		this.init();
	};
	_.extend(Component.prototype, E, {
		init: function(){}
	});
	Component.extend = extend;
	return Component;
});