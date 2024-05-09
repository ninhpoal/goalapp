 // Function to get URL parameters
 function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Get parameters from URL
  var mahh = getUrlParameter('mahh');
  var tenhh = getUrlParameter('tenhh');
  var dvt = getUrlParameter('dvt');
   var ncc = getUrlParameter('ncc');
  // Display parameters on the page
  document.getElementById('mahh').textContent = mahh;
  document.getElementById('tenhh').textContent = tenhh;
  document.getElementById('dvt').textContent = dvt;
   document.getElementById('ncc').textContent = ncc;
  window.onload = function() {
    window.print();
  };