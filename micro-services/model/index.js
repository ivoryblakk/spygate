var model = {
	db: {
		0: {tim: 'tim'},
		1: {tim: 'mit'}
	},
	nextID: 2,
	create: function(newObject) {
		newObject.id = this.nextID;
		this.db[this.nextID] = newObject;
		this.nextID++
	},
	read: function(id) {
		return this.db[id]
	},
	update: function(id, newValue, key) {
		this.db[id][key] = newValue;
	},
	remove: function(id) {
		delete this.db[id];
	},
	getAll: function() {
		return this.db;
	}
};

module.exports = model;