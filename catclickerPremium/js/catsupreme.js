var $ul = $('#catlist');
var test = function(){document.getElementById('container').appendChild(dive);}
var model = {
	selectedCat: null,
	cats: [
	
	{
		name: 'George',
		clicks: 0,
		image: 'images/cat.jpg'
	},
	{
		name: 'Suay',
		clicks: 0,
		image: 'images/cat2.jpg'
	},
	{
		name: 'Lion',
		clicks: 0,
		image: 'images/cat3.jpg'
	},
	{
		name: 'Dixie',
		clicks: 0,
		image: 'images/cat4.jpg'
	},
	{
		name: 'Dairy',
		clicks: 0,
		image: 'images/cat5.jpg'
	}

],
display: false
};

var octopus = {

	init: function(){
		model.selectedCat = model.cats[0];
		viewImg.init();
		viewList.init();
		viewAdmin.init();
		

	},

	getAllCats: function(){
		return model.cats;
	},

	getSelectedCat: function() {
		return model.selectedCat;
	},
	setCurrentCat: function(cat) {
        model.selectedCat = cat;
    },
    clickCounter: function(){
    	model.selectedCat.clicks++;
    	viewImg.render();
    },

    getDisplay: function(){
    	return model.display;

    },

    updateCat: function(){
    	var cat = octopus.getSelectedCat();
    	cat.name = document.getElementById('catname').value;
		cat.image = document.getElementById('url').value;
		cat.clicks = document.getElementById('clicks').value;
		return cat;
    },

    setDisplay: function(torf){
    	model.display = torf;
    },

    openCloseAdminView: function(){
    	viewAdmin.render;
    },


};

var viewAdmin = {
	init: function (){
		var selectedCat = octopus.getSelectedCat();
		octopus.setDisplay(false);
		viewAdmin.render();
		this.admin = document.getElementById('admin');
		this.admin.addEventListener("click", function(){
    	octopus.setDisplay(true);
    	viewAdmin.render();
    
});	
		this.cancel = document.getElementById('cancel');
		this.cancel.addEventListener("click", function(){
    	octopus.setDisplay(false);
    	viewAdmin.render();
    
});
		this.save = document.getElementById('save');

		this.save.addEventListener("click", function(){
		//code to update information from fields should go here
		octopus.updateCat();
    	octopus.setDisplay(false);
    	viewAdmin.render();
    	viewImg.render();
    	viewList.render();
    	
    	//viewList.render();
    
});
	},

	render: function () {
		this.catName = document.getElementById('catname');
		this.uRL = document.getElementById('url');
		this.clicks = document.getElementById('clicks');
		this.selectedCat = octopus.getSelectedCat();
		this.catName.value = this.selectedCat.name;
		this.uRL.value = this.selectedCat.image;
		this.clicks.value = this.selectedCat.clicks;

		var visible = octopus.getDisplay();

		if (visible === false) {
			$( "#form" ).toggle(false);
		} else if (visible === true) {
			$( "#form" ).toggle(true);
		};

		
	}
}

var viewList = {
	
	init: function(){

		this.catListElem = document.getElementById('catlist');


		this.render();
	},

	render: function(){
		this.catListElem.innerHTML = '';
		var cats = octopus.getAllCats();

		for (i=0; i< cats.length; i++){
			var cat = cats[i];
			elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    viewImg.render();
                    viewAdmin.render();
                };
            })(cat));
			this.catListElem.appendChild(elem);

		}
		
	}
};
var viewImg = {

	init: function(){

		this.mainCatDiv = document.getElementById('container');
		this.catName = document.getElementById('name');
		this.counter = document.getElementById('clickCount');
		this.imgID = document.getElementById('currentCat');

		this.imgID.addEventListener('click', function(){
			octopus.clickCounter();
		});

		this.render();
	},

	render: function(){

		var currentCat = octopus.getSelectedCat();
		this.imgID.src = currentCat.image;
		this.counter.textContent = currentCat.clicks;
		this.catName.textContent = currentCat.name;

	}
};
octopus.init();