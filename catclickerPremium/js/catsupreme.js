var $ul = $('.catList');
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

	createCatNames: function(){
		var names = [];
		for(i=0;model.length;i++){
			names.push(model[i].name);
		}
		return names
	}


}

var view1 = {
	displayList: function(){
		for (i = 0; i < octopus.createCatNames.length; i++){
			var elem = '<li>' + octopus.createCatNames[i] + '</li>';
		$catList.append(elem);
		}
	}
}
view1.displayList();