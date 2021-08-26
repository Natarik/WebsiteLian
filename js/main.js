//burger handler

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header_nav');
	const menuCloseItem = document.querySelector('.header_nav-close');
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header_nav_active');
	});
		menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header_nav_active');
	});
}());


// gallery

function openLink(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();