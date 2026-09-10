document.body.innerHTML += `
    <style>
  @keyframes rainbow {
    0%   { color: #b00000; } /* deep red */
    16%  { color: #c04000; } /* burnt orange */
    33%  { color: #8b6508; } /* dark gold */
    50%  { color: #0d5c0d; } /* deep green */
    66%  { color: #00208c; } /* navy blue */
    83%  { color: #360061; } /* dark indigo */
    100% { color: #5c0066; } /* dark violet */
  }
  .rainbow {
    animation: rainbow 3s linear infinite;
    text-shadow: 0 0 1px rgba(0,0,0,0.15);
  }
</style>
`

let name;
let bio;

if(window.location.href.includes("vo-ar")){    

    bio = `<div style="text-align: center;">
      <h1 class="rainbow">ong bro fr fr</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOH0bZmlg2qCF8cGIaHaPkj3JhTByKqKXwXojYQzB3uw&s" alt="">
    </div>`

    document.body.querySelector('.sss').innerHTML = bio;
    
    name = document.querySelector(".f-s-25");
    name.innerHTML = `<a href="javascript:alert('>_< nyaa~')" class="rainbow">Click Me :D</a>`
    document.querySelectorAll('a').forEach(el => {el.style.color='pink'})
    document.querySelectorAll(".naskh-r").textContent = 'nigger | certified child lover'
}
else {
    alert("this site is not properly secured, your accounts / info may be in danger - sussy baka")
    bio = `<div style="text-align: center;">
      <h1 class="rainbow">ong bro fr fr</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOH0bZmlg2qCF8cGIaHaPkj3JhTByKqKXwXojYQzB3uw&s" alt="">
    </div>`

    document.body.querySelector('.sss').innerHTML = bio;
    
    name = document.querySelector(".f-s-25");
    name.innerHTML = `<a href="javascript:alert('>_< nyaa~')" class="rainbow">Click Me :D</a>`
    document.querySelectorAll('a').forEach(el => {el.style.color='pink'})
    document.querySelectorAll(".naskh-r").textContent = 'nigger | certified child lover'
}

