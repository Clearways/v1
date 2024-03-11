//set original values

document.getElementById('Rammerhead').style.display = 'none';
document.getElementById('Node').style.display = 'none';


fetch('../config.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.isRammerheadEnabled == true) {
            document.getElementById('Rammerhead').style.display = 'flex';
        }
        if (data.isNodeUnblockerEnabled == true) {
            document.getElementById('Node').style.display = 'flex';
        }
      })
      .catch(error => {
        console.error('There was a problem fetching the config:', error);
      });