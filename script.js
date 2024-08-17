const quote=document.getElementsByTagName("blockquote");

const tweetbtn= document.getElementById("twitter");

document.addEventListener('DOMContentLoaded',fetchJoke)

function fetchJoke() {
    
      fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      }).then(data=>data.json())
      .then(obj=>quote[0].innerHTML=obj.joke)
    }
  
function tweet() {

    window.open("https://twitter.com/intent/tweet?text="+"The joke I liked  -  "+quote[0].innerHTML,"Tweet Window","width=600,height=350");

    }
    

    