// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heart_button = document.querySelectorAll('.like-glyph')
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')



  heart_button.forEach(heart=>{
    heart.addEventListener('click', () => {
      mimicServerCall()
      .then((resp) => {
        changeHeart(heart)
      })
      .catch((error) => {
        modal.classList.toggle('hidden')
        modalMessage.innerText = error
        setTimeout(()=>{modal.setAttribute("class", "hidden")}, 5000)
      });
    })
  })

  function changeHeart(heart){
    if (heart.innerText ===  EMPTY_HEART){
      heart.innerText = FULL_HEART
      toggleHeartClass(heart)
    }
  else if (heart.innerText === FULL_HEART){
      heart.innerText = EMPTY_HEART
      toggleHeartClass(heart)
    }
  };

  function toggleHeartClass(heart){
    heart.classList.toggle('activated-heart')
  }




  // FLATIRON ANSWER:
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// let glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// let colorStates = {
//   "red" : "",
//   "": "red"
// };

// let articleHearts = document.querySelectorAll(".like");

// function likeCallback(e) {
//   let heart = e.target;
//   mimicServerCall("bogusUrl")
//    //OR: mimicServerCall("bogusUrl", {forceFailure: true})
//     .then(function(serverMessage){
//        heart.innerText = glyphStates[heart.innerText];
//        heart.style.color = colorStates[heart.style.color];
//     })
//     .catch(function(error) {
//       // Basic
//       // alert("Something went wrong!");
//       // or....
//       document.getElementById("modal").className = "";
//     });
// }

// for (let glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
