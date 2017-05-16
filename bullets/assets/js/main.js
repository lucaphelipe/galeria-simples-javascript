

function simpleGallery(){
	
	var galleryContainer = document.querySelector(".gallery-container");
	var btnNext = document.querySelector(".btn-next");
	var btnPrev = document.querySelector(".btn-prev");
	var galeryItens = document.querySelectorAll(".gallery-container img");
	var maxItens = galeryItens.length;
	var imgActive = 0;
	var imgPrev = maxItens;

	createBullets();
	clickBullets();
	navGallery();

	//Create the pagination
	function createBullets(){
		var pagination = document.createElement('div');
		pagination.classList.add('btns-pagination');
		galleryContainer.appendChild(pagination);

		for(i = 0; i < maxItens; i++){
			var bullet = document.createElement('span');
			bullet.classList.add('bullet');
			bullet.textContent = i+1;	
			pagination.appendChild(bullet);
		}
	}

	//Pagination
	function clickBullets(){
		var bullet = document.querySelectorAll('.bullet');
		bullet[imgActive].classList.add('current');

		[...bullet].forEach((v,i) => v.addEventListener('click', function() {
 			galeryItens[imgActive].classList.remove('active');
 			bullet[imgActive].classList.remove('current');

 			bullet[i].classList.add('current');
	  		galeryItens[i].classList.add('active');

	  		imgActive = i;
		}));
	}

	//Cheange Images
	function slideImage(){
		var bullet = document.querySelectorAll('.bullet');

		if(imgActive < 0){
			imgActive = maxItens-1;

		}else if(imgActive >= maxItens){
			imgActive = 0;
		}

		galeryItens[imgPrev].classList.remove('active');
		galeryItens[imgActive].classList.add('active');

		bullet[imgPrev].classList.remove('current');
		bullet[imgActive].classList.add('current');
	}

	//Navigation
	function navGallery(){
		btnNext.addEventListener("click", function() {
			imgPrev = imgActive;
		    imgActive++;
		    slideImage();
		});

		btnPrev.addEventListener("click", function() {
		    imgPrev = imgActive;
		    imgActive--;
		    slideImage();
		});
	}
}

simpleGallery();




