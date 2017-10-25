'use strict';

function setProgress(progressElem, percentage) {
  progressElem.css('width', percentage + '%');
  progressElem.html(percentage + '%');
  // document.querySelector('.progress-bar').style.width = '20%'
  // document.querySelector('.progress-bar').style.innerHTML = '20%'
}

setInterval(() => {
  setProgress($('.progress-bar-primary'), Math.floor((Math.random() * 100) + 1));
  setProgress($('.progress-bar-success'), Math.floor((Math.random() * 100) + 1));
  setProgress($('.progress-bar-danger'), Math.floor((Math.random() * 100) + 1));
}, 2000);
