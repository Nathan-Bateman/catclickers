var $ul = $('.catList');
var catNames = [];
var model = [
	
	{
		name: 'George',
		clicks: 0,
		image: 'images/cat.jpg'
	},
	{
		name: 'Suay Maak',
		clicks: 0,
		image: 'images/cat2.jpg'
	},
	{
		name: 'Lion King',
		clicks: 0,
		image: 'images/cat3.jpg'
	},
	{
		name: 'Dixie',
		clicks: 0,
		image: 'images/cat4.jpg'
	},
	{
		name: 'Dairy Cat',
		clicks: 0,
		image: 'images/cat5.jpg'
	}

]

var octopus = {

	createCatNames: 'nothing'


}

var view1 = {
	init: function(){
		for (i = 0; i < model[i].length; i++){
			var listName = model[i].name
			var elem = '<li>' + listName + '</li>';
		$ul.append(elem);
		}
	}
}

view1.init();