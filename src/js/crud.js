function crudComponente() {
	return {
		"crud": {
			template:"#crud-template",
			props:["fields", "items", "title"],
			data() {
				return {
					headers: header(this.fields),
					dialog: false,
					editFields: editfield(this.fields),
					selectedItem: {}
				};
			},
			methods: {
				add: function() {
					add(this.fields, this.items);
				},
				remove: function(item) {
					remove(item, this.items);
				},
				edit: function(item) {
					this.dialog = true;
					this.selectedItem = item;
					mapField(item, this.editFields)
				},
				save: function() {
					fieldToItem(this.editFields, this.selectedItem);
					this.dialog = false;
				},
				close: function() {
					this.dialog = false;
				}
			}
		}
	};
	
	function fieldToItem(fields, item) {
		for(var x in fields) {
			item[fields[x].name] = fields[x].value;
		}
	}
	
	function mapField(item, fields) {
		for(var x in fields) {
			fields[x].value = item[fields[x].name];
		}
	}
	
	function editfield(fields) {
		var editfields = [];
		for(var x in fields) {
			var obj = {};
			obj["name"] = fields[x].name;
			obj["value"] = fields[x].value;
			obj["label"] = fields[x].label;
			editfields.push(obj);
		}
		return editfields;
	}
	
	function add(fields, items) {
		var obj = {};
		for(var x in fields) {
			obj[fields[x].name] = fields[x].value;
			fields[x].value = "";
		}
		items.push(obj);
	}

	function remove(item, items) {
		var index = items.indexOf(item);
		items.splice(index, 1);
	}

	function header(fields) {
		var headers = [];
		for(var x in fields) {
			headers.push({ text: fields[x].label, value: fields[x].name });
		}
		return headers;
	}
}
