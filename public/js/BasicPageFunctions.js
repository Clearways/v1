document.getElementById('XB').onclick = function () {
    document.getElementById('tabmanagerc').style.display = 'none';
}

document.getElementById('TabHolder').onclick = function () {
    var TBMGR = document.getElementById('tabmanagerc');
    TBMGR.style.display = TBMGR.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('refreshbutton').onclick = function () {
    const TabIframe = document.getElementById(`${tabModule.ReturnTab()}_iframe`);

    TabIframe.contentDocument.location.reload();
}

document.getElementById('homepage').onclick = function () {
    const TabIframe = document.getElementById(`${tabModule.ReturnTab()}_iframe`);
    TabIframe.src = 'homepage.html';
}

document.getElementById('fullscreen').onclick = function () {
    const TabIframe = document.getElementById(`${tabModule.ReturnTab()}_iframe`);
    TabIframe.requestFullscreen();
}

document.getElementById('javascript_').onclick = function () {
    const TabIframe = document.getElementById(`${tabModule.ReturnTab()}_iframe`);
    const JSCode = prompt('Enter your JS/Bookmarklet Code:');
    const TabDocument = TabIframe.contentDocument;
    const Script = TabDocument.createElement('script');
    Script.textContent = 'eval(`' + JSCode +'`)';
    TabDocument.body.appendChild(Script);
}

document.getElementById('searchway').addEventListener("submit", async (event) => {
    event.preventDefault();
    const TabIframe = document.getElementById(`${tabModule.ReturnTab()}_iframe`);
    const url = search(document.getElementById('searchway_input').value, 'https://www.google.com/search?q=%s');
    TabIframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  });



  function worker() {
    const SW = '../system-sw.js';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration(SW).then(function(registration) {
          if (!registration) {
            navigator.serviceWorker.register(SW, {
              scope: __uv$config.prefix
            }).then(function() {
              console.log('Service worker registered successfully.');
            }).catch(function(error) {
              console.error('Service worker registration failed:', error);
            });
          } else {
            console.log('Service worker already registered.');
          }
        }).catch(function(error) {
          console.error('Error checking service worker registration:', error);
        });
      } else {
        console.log('Service workers are not supported in this browser.');
      }
}

document.body.onload = function () {
    worker()
    tabModule.NewTab()
}