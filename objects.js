//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'Jaime Madsen'
me.age = 24
me['hair color'] = 'red'

//2. Iterate over the object to console.log the propery or key names. 

for(var prop in me) {
	console.log(prop);
}