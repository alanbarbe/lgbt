const $$ = (el) => document.querySelectorAll(el);
const LINK = [
  "pag9(Lesb).html",
  "pag6(gay).html",
  "pag8(bi).html",
  "pagina11(transexual).html",
  "pag10(intersexual).html",
  "pagina15(queer).html",
  "pag7(hetero).html",
];
const LINK2 = [
  "pagina12(masc).html",
  "pagina13(fem).html",
  "pagina14(nobin).html",
];
$$(".s1 > .carousel-inner > .carousel-item > img").forEach((el, index) => {
  el.addEventListener("click", () => {
    window.open(LINK[index], "_self"); // abre link en la misma pagina (self)
  });
});
$$(".s2 > .carousel-inner > .carousel-item > img").forEach((el, index) => {
  el.addEventListener("click", () => {
    window.open(LINK2[index], "_self"); // abre link en la misma pagina (self)
  });
});
