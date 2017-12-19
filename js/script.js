
  function initMap() {
    var uluru = {lat: 19.222620, lng: -70.532768};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

// data table

$(document).ready(function() {
    $('#example').DataTable();
} );