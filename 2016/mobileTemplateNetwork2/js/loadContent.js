function loadPage(url, into)
{
    into = document.getElementById(into);
      into.innerHTML = 'loading';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        into.innerHTML = xhr.response;
      };

    xhr.send(null);
  }

window.onload = function()
{
    var menu = document.getElementById('menu');
    var list = [].slice.call(menu.getElementsByTagName('a'));

    list.forEach(function(link) {
      link.onclick = function()
        {
            loadPage(this.href, 'content');
            return false;
          };
      });
    };
