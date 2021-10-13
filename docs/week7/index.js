

const images = ["bike (9).jpg","bike (10).jpg","bike (17).jpg"];
const title = ["bike 9", "bike 10", "bike 17"];



console.log("hello world");
console.log(Math.floor(Math.random()*3));
console.log ( document.getElementsByClassName('options')[0].innerHTML);



for(i=0;i<document.getElementsByClassName('options').length;i++){


  document.getElementsByClassName('label')[i].innerHTML = title[i];

  console.log(document.getElementsByClassName('options')[i].innerHTML);

  // document.getElementsByClassName('options')[i].innerHTML += '<img scr="assets/' + images[i] + ' "> ';
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
}
