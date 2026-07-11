// add header to all pages:
const header_html = `
    <header>
        <div id="header_content">
            <h1 id="brand"> ChatApp</h1>
            <div>
                <a href="/login">login</a> | 
                <a href="/sign-up">sign-up</a> | 
                <a href="/account">account</a>
            </div>
        </div>
        <hr>
    </header>
`
document.body.innerHTML += header_html;


// click brand = /:
brand = document.getElementById("brand")
brand.addEventListener("click", () => {
    window.location.href = "/"
})


// favicon:
function setFavicon(url) {
  let link = document.querySelector("link[rel~='icon']");

  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = url;
}
setFavicon("public/assets/favicon.jpg")


