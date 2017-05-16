

function simpleGallery(){
	
	var btnNext = document.querySelector(".btn-next");
	var btnPrev = document.querySelector(".btn-prev");
	var galeryItens = document.querySelectorAll(".gallery-container img");
	var maxItens = galeryItens.length;
	var imgActive = 0;
	var imgPrev = maxItens;

	navGallery();

	function slideImage(){
		if(imgActive < 0){
			imgActive = maxItens-1;

		}else if(imgActive >= maxItens){
			imgActive = 0;
		}

		galeryItens[imgPrev].classList.remove('active');
		galeryItens[imgActive].classList.add('active');
	}

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




