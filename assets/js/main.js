var iUp = (function () {
	var time = 0,
		duration = 150,
		clean = function () {
			time = 0;
		},
		up = function (element) {
			setTimeout(function () {
				element.classList.add("up");
			}, time);
			time += duration;
		},
		down = function (element) {
			element.classList.remove("up");
		},
		toggle = function (element) {
			setTimeout(function () {
				element.classList.toggle("up");
			}, time);
			time += duration;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	};
})();


function decryptEmail(encoded) {
	var address = atob(encoded);
	window.location.href = "mailto:" + address;
}
function getBingImages(imgUrls) {
	/**
	 * 获取Bing壁纸
	 * 先使用 GitHub Action 每天获取 Bing 壁纸 URL 并更新 images.json 文件
	 * 然后读取 images.json 文件中的数据
	 */
	var indexName = "bing-image-index";
	var index = sessionStorage.getItem(indexName);
	var panel = document.querySelector('#panel');
	if (isNaN(index) || index == 7) index = 0;
	else index++;
	var imgUrl = imgUrls[index];
	var url = "https://www.cn.bing.com" + imgUrl;
	panel.style.background = "url('" + url + "') center center no-repeat #666";
	panel.style.backgroundSize = "cover";
	sessionStorage.setItem(indexName, index);
}
document.addEventListener('DOMContentLoaded', function () {
	// 获取一言数据
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.responseText);
			document.getElementById('description').innerHTML = res.hitokoto + "<br/> -「<strong>" + res.from + "</strong>」";
		}
	};
	xhr.open("GET", "https://v1.hitokoto.cn", true);
	xhr.send();

	var iUpElements = document.querySelectorAll(".iUp");
	iUpElements.forEach(function (element) {
		iUp.up(element);
	});

	var avatarElement = document.querySelector(".js-avatar");
	avatarElement.addEventListener('load', function () {
		avatarElement.classList.add("show");
	});
});

var btnMobileMenu = document.querySelector('.btn-mobile-menu__icon');
var navigationWrapper = document.querySelector('.navigation-wrapper');

btnMobileMenu.addEventListener('click', function () {
	if (navigationWrapper.style.display == "block") {
		navigationWrapper.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			navigationWrapper.classList.toggle('visible');
			navigationWrapper.classList.toggle('animated');
			navigationWrapper.classList.toggle('bounceOutUp');
			navigationWrapper.removeEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', arguments.callee);
		});
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceOutUp');
	} else {
		navigationWrapper.classList.toggle('visible');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
	}
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-list');
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-angleup');
	btnMobileMenu.classList.toggle('animated');
	btnMobileMenu.classList.toggle('fadeIn');
});
var audio = document.getElementById("audioPlayer");
		var playButton = document.getElementById("playButton");
	
		function togglePlay() {
			if (audio.paused) {
				audio.play();
				playButton.innerHTML = "暂停";
			} else {
				audio.pause();
				playButton.innerHTML = "播放";
			}
		}
		
		function updateTime() {
		    const date1 = new Date("11/02/2023 00:00:00.000");
		    const date2 = Date.now();
		    const Difference_In_Time = date2 - date1.getTime();
		
		    const days = String(Math.floor(Difference_In_Time / (1000 * 60 * 60 * 24))).padStart(2, '0');
		    const hours = String(Math.floor((Difference_In_Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
		    const minutes = String(Math.floor((Difference_In_Time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
		    const seconds = String(Math.floor((Difference_In_Time % (1000 * 60)) / 1000)).padStart(2, '0');
		    const milliseconds = String(Difference_In_Time % 1000).padStart(3, '0');
		 
		    const timeString = days + "," + hours + "," + minutes + "," + seconds + "," + milliseconds + "Data";
		    document.getElementById("state1").innerHTML = timeString;
		}
		
		setInterval(updateTime, 1);

	function toggleAnonymous() {
	  var checkBox = document.getElementById("anonymous");
	  var text = document.getElementById("fname");
	  if (checkBox.checked == true){
		text.value = "匿名";
		text.disabled = true;
	  } else {
		text.value = "";
		text.disabled = false;
	  }
	}
	