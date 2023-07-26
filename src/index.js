import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
const pages1 = document.getElementsByClassName("nav-link");
pages1[0].addEventListener("click", function (e) {
  window.location.href = "anasayfa.com";
});
pages1[1].addEventListener("click", function (e) {
  window.location.href = "hakkımızda.com";
});
pages1[2].addEventListener("click", function (e) {
  window.location.href = "blog.com";
});
pages1[3].addEventListener("click", function (e) {
  window.location.href = "iletisim.com";
});

const iHeader2 = document.querySelector(".intro h2");
iHeader2.addEventListener("mouseenter", function (e) {
  iHeader2.style.background = "yellow";
});
iHeader2.addEventListener("mouseleave", function (e) {
  iHeader2.style.background = "white";
});
