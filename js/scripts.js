// var btn = document.querySelector('.btn-success');
// var counter = 0;


// btn.addEventListener('click', onClick);

// function onClick() {
//   setInterval(function () {
//     if( counter <= 5){
//     counter++
//     console.log(counter);
//   }  else {
//     btn.removeEventListener('click', onClick);
//   }
//   }, 1000);
// }

var btn = document.querySelector('.btn-success');
var counter = 0;


btn.addEventListener('click', onClick);

function onClick() {
  setInterval(function () {
    if( counter <= 5){
    counter++
    console.log(counter);
  }  else {
    btn.removeEventListener('click', onClick);
  }
  }, 1000);
}

btn.addEventListener('click', onClickStop);

function onClickStop() {
  btn.removeEventListener('click', onClick);
}







// btn.removeEventListener('click', start);






//   btn.onclick = function(){
//       function start(){
//         counter++;
//       }
//   }

//   setInterval(function start(){
//     counter++
//   },1000);

//   // function stop(){
//   //   this.onclick = null;
//   // }