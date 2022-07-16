

let page = document.querySelector('.page');
		let languageButtonRu = document.querySelector('.lanquage__button_ru');
		let languageButtonHe = document.querySelector('.lanquage__button_he');
		
		languageButtonRu.onclick = function() {
			console.log('кнопка нажата');
			page.classList.remove('page__lanquage_he');
			page.classList.add('page__lanquage_ru');
		}
		languageButtonHe.onclick = function() {
			console.log('кнопка нажата');
			page.classList.remove('page__lanquage_ru');
			page.classList.add('page__lanquage_he');
		}


		