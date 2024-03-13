const form = document.getElementById("FormIdentification");
const address = document.getElementById("addressbox");
const searchEngine = document.getElementById("Engine");
const Configuration = JSON.parse(localStorage.getItem('Client-LastVisited'))
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = search(address.value, Configuration.search_engine);

  if (Configuration.Mode == 'open') {
    if (Configuration.proxy == 'uv') {
      document.body.innerHTML = '';
      window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else if(Configuration.proxy == 'Dynamic') {
      RegisterDN()
      window.location.href = __dynamic$config.prefix + Ultraviolet.codec.xor.encode(url);
      document.body.innerHTML = '';
    } else if (Configuration.proxy == 'Rammerhead') {
      document.body.innerHTML = '';
      localStorage.setItem('rh_target_url', url)
      window.location.href = 'rammerhead.html';
    } else if (Configuration.proxy == 'Node') {
      document.body.innerHTML = '';
      window.location.href = `/webinstance/${url}`
    } else {
      const H1 = document.createElement('h1');
      document.body.appendChild(H1);
      H1.textContent = 'Invalid Proxy Configuration'
    }
  } else if (Configuration.Mode == 'direct') {
    if (Configuration.proxy == 'uv') {
      window.open(__uv$config.prefix + __uv$config.encodeUrl(url));
    } else if(Configuration.proxy == 'Dynamic') {
      RegisterDN()
      window.open(__dynamic$config.prefix + Ultraviolet.codec.xor.encode(url));
    } else if (Configuration.proxy == 'Rammerhead') {
      localStorage.setItem('rh_target_url', url)
      window.open('rammerhead.html');
    } else if (Configuration.proxy == 'Node') {
      window.open(`/webinstance/${url}`)
    } else {
      const H1 = document.createElement('h1');
      document.body.appendChild(H1);
      H1.textContent = 'Invalid Proxy Configuration'
    }
  } else if(Configuration.Mode == 'ab') {
   
    const H1 = document.createElement('h1');
      document.body.appendChild(H1);
      H1.textContent = 'not done yet!';
  } else{
    console.error('Invalidaiton')
  }
});



function RegisterDN() {
  navigator.serviceWorker.register("../dynamic-sw.js", {
    scope: "/adventuring/"
  });
}