
function navegarViaAjax(url, seletor) {
  const elemento = document.querySelector(seletor);
  fetch.get(url)
    .then((resp) => resp.text())
    .then((html) => {
      elemento.innerHTML = html;
    });
}
