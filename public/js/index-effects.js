const form = document.getElementById("FormIdentification");
const address = document.getElementById("addressbox");
const searchEngine = document.getElementById("Engine");
const Configuration = JSON.parse(localStorage.getItem('Client-LastVisited'))
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = search(address.value, Configuration.search_engine);
  document.body.innerHTML = '';

  if (Configuration.Mode == 'open') {
    if (Configuration.proxy == 'uv') {
      window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else if(Configuration.proxy == 'Dynamic') {
      window.location.href = __dn$config.prefix + __uv$config.encodeUrl(url);
    } else if (Configuration.proxy == 'Rammerhead') {
      localStorage.setItem('rh_target_url', url)
      window.location.href = 'rammerhead.html';
    } else if (Configuration.proxy == 'Node') {
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
      window.open(__dn$config.prefix + __uv$config.encodeUrl(url));
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
