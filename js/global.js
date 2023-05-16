const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let pagAtual = 0;

const pageUrls = [
    "../posts/post1.html",
    "../posts/post2.html",
    "../posts/post3.html",
    "../posts/post4.html"
];
function loadHeader(){
    const header = document.querySelector('header');
    fetch("../../assets/header/header.html")
      .then(response => response.text())
      .then(data => {
        header.innerHTML = data;
      })
      .catch(error => {
        console.error(`Erro ao carregar a página:`, error);
    });
}
function loadPageContent() {
    const postContent = document.querySelector('#post-content');
    const pageUrl = pageUrls[pagAtual];
    console.log(pagAtual);
  
    fetch(pageUrl)
      .then(response => response.text())
      .then(data => {
        postContent.innerHTML = data;
      })
      .catch(error => {
        console.error(`Erro ao carregar a página ${pageUrl}:`, error);
    });
}
window.onload = (loadHeader());
loadPageContent();

if(prevBtn){
    prevBtn.addEventListener('click', () => {
        if (pagAtual > 0) {
            pagAtual--;
            loadPageContent();
        }
    });
}

if(nextBtn){
    nextBtn.addEventListener('click', () => {
        if (pagAtual < pageUrls.length - 1) {
            pagAtual++;
            loadPageContent();
        }
});
        
}

