var $container = $('#container');
var images = ['images/cat.jpg', 'images/cat2.jpg','images/cat3.jpg','images/cat4.jpg','images/cat5.jpg'];
var names = ['George','Suay Maak','Lion King','Dixie','Dairy Cat'];
var listClass = ['cat1','cat2','cat3','cat4','cat5'];
var idCats = ['count1','count2','count3','count4','count5'];
var $catList = $('.catlist');
var createList = function (){

	for (i = 0; i < names.length; i++) {
		var name = names[i];
		var clss = listClass[i];
		var elem = '<li class=' + clss+ '>' + name + '</li>';
		$catList.append(elem);
		var grabList = document.querySelector('.' + clss);
		grabList.addEventListener('click', (function(clsscopy) {
			return function(){
				 //must write code here to show given div that is clicked
				 document.getElementById(clsscopy).style.display = "block";
				 $("div:not(#" + clsscopy + ", #container)").css("display", "none");

				

			};

		})(clss));
  ;
};
}
createList();

var Cat = function(catimage,id,names,counter){
	var clicks = 0;
	var dive = document.createElement('div');
	dive.id += id;
	var img = document.createElement("img");
	img.src = catimage;
	img.className += "cat";
	var addDive = document.getElementById('container').appendChild(dive);
	var displayImage = document.getElementById(id).appendChild(img);
	var count = document.createElement('p');
	count.id += counter;
	count.innerHTML = 'Clicks:' + clicks;
	$( count ).insertAfter( img );
	var name = document.createElement('h2');
	$( name ).insertBefore( img );
	name.className = 'name';
	name.innerHTML = names;
	var changecount = document.getElementById(id);
	changecount.addEventListener('click', function(){
		clicks = clicks + 1;
		count.innerHTML = 'Clicks:' + clicks;
	}, false);
};

var cat1 = new Cat(images[0],'cat1',names[0], idCats[0]);
var cat2 = new Cat(images[1],'cat2',names[1], idCats[1]);
var cat3 = new Cat(images[2],'cat3',names[2], idCats[2]);
var cat4 = new Cat(images[3],'cat4',names[3], idCats[3]);
var cat5 = new Cat(images[4],'cat5',names[4], idCats[4]);
