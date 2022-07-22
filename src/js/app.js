
const select = document.querySelector('select');
const allLang = ['ru', 'he'];

let page = document.querySelector('.page');

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if(!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['heading'][hash];
	
	for (let key in langArr) {
		let elem = document.querySelector('.lng__' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}

	// change dir
	let lang = select.value;
	
	if (lang === "ru") {
		console.log('кнопка нажата');
		page.classList.remove('page__lanquage_he');
		page.classList.add('page__lanquage_ru');
	} else {
		console.log('кнопка нажата');
		page.classList.remove('page__lanquage_ru');
		page.classList.add('page__lanquage_he');
	}
}



changeLanguage();