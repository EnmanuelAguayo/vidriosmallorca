
  document.getElementsByClassName('sidenav-trigger')[0].addEventListener('click', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
