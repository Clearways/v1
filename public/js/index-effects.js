const form = document.getElementById("FormIdentification");
const address = document.getElementById("addressbox");
const searchEngine = document.getElementById("Engine");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  RegisterMe()
  setTimeout(() => {
    const url = search(address.value, searchEngine.value);
  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  }, 50);
});


function RegisterMe() {
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



function search(input, template) {
    try {
      return new URL(input).toString();
    } catch (err) {
    }
  
    try {
      const url = new URL(`http://${input}`);
      if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
    }
    return template.replace("%s", encodeURIComponent(input));
  }