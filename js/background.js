/* body의 이미지가 새로고침(다시 들어올때)할때마다 바뀜*/
// 이미지가 새로 고침할때마다 바뀜
// : body를 새로 불때마다 바뀜 - js 호출
// 1) 이미지가 여러 개 
// 2) 이미지는 랜덤으로 바뀜  
// 랜덤) Math.random()
// 정수값을 사용하기 위해 원하는 횟수 곱함
// 소수 부분은 버림

const body = document.querySelector("body")

const images = ["3.jpg","4.jpg","5.jpg"];

const randomIndex = Math.floor(Math.random()*0+1);

body.style.backgroundImage = `url(./img/${images[randomIndex]})`;
body.style.backgroundSize = "600px 1400px";

