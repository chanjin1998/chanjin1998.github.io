function showPhoto() {
  $("#photo").show(); /* body-content를 보이게 합니다. */
}
function hidePhoto() {
  $("#photo").hide();
}

function showMemo() {
  $("#memo").show(); /* body-content를 보이게 합니다. */
}
function hideMemo() {
  $("#memo").hide();
}

function showMusic() {
  $("#music").show(); /* body-content를 보이게 합니다. */
}
function hideMusic() {
  $("#music").hide();
}

function showCamera() {
  $("#camera").show(); /* body-content를 보이게 합니다. */
}
function hideCamera() {
  $("#camera").hide();
}

function showMovie() {
  $("#movie").show(); /* body-content를 보이게 합니다. */
}
function hideMovie() {
  $("#movie").hide();
}
function rotate() {
  const body_content1 = document.querySelector('.body_content1');
  body_content1.style.transform = 'rotateY(180deg)';
  setTimeout(function() {
    body_content1.innerHTML = '정찬진';
    body_content1.style.transform = 'rotateY(0deg)';
  }, 800);
}
function rotate1() {
  const body_content2 = document.querySelector('.body_content2');
  body_content2.style.transform = 'rotateY(180deg)';
  setTimeout(function() {
    body_content2.innerHTML = '1998.06.29';
    body_content2.style.transform = 'rotateY(0deg)';
  }, 800);
}
function rotate2() {
  const body_content3 = document.querySelector('.body_content3');
  body_content3.style.transform = 'rotateY(180deg)';
  setTimeout(function() {
    body_content3.innerHTML = '음악듣기<br>카페가기<br>혼자여행가기';
    body_content3.style.transform = 'rotateY(0deg)';
  }, 800);
}
function rotate3() {
  const body_content4 = document.querySelector('.body_content4');
  body_content4.style.transform = 'rotateY(180deg)';
  setTimeout(function() {
    body_content4.innerHTML = 'E(60%)<br>S(55%)<br>F(53%)<br>P(68%)<br>ver.2023/03/19';
    body_content4.style.transform = 'rotateY(0deg)';
  }, 800);
}
function rotate4() {
  const body_content5 = document.querySelector('.body_content5');
  body_content5.style.transform = 'rotateY(180deg)';
  setTimeout(function() {
    body_content5.innerHTML = 'Toil<br>Charlie Puth <br>Lauv<br>Grio';
    body_content5.style.transform = 'rotateY(0deg)';
  }, 800);
}