
const Wish = document.getElementById('demo');
const btn = document.getElementById('btn');



btn.addEventListener('click',getWish);

getWish();

function getWish(){
    fetch("https://flyingsonu122.github.io/JSON/db.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    let index = Math.floor(Math.random() * data.length);
    // console.log(index);
    Wish.textContent = data[index].wish;
    
  });
}

