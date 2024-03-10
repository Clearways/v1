const form = document.getElementById("FormIdentification");
const address = document.getElementById("addressbox");
const searchEngine = document.getElementById("Engine");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = search(address.value, searchEngine.value);
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  document.body.innerHTML = '';
});