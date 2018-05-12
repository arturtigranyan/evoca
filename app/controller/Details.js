Ext.define('evoca.controller.Details', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            theButton: '#myButton'
        },
        control: {
            theButton: {
                tap: 'handleButtonClick'
            }
        }
    },
    handleButtonClick: function(current, record){
        console.log("Button clicked!!!!");
        // var store = Ext.create('evoca.store.Mapstore');

        // var data = store.getData();

        var markers = [];
        var myStore = Ext.create('evoca.store.Mapstore');
      
        myStore.on('load', function () {

            
            
            // var script = document.createElement('script');
            // script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBKkI2kjwBzPu2UDLQH0fXUZG4uCH6Oe2M';
            // document.getElementsByTagName('head')[0].appendChild(script);

                map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 2,
                  center: new google.maps.LatLng(2.8,-187.3),
                  mapTypeId: 'terrain'
                });
        
                // Create a <script> tag and set the USGS URL as the source.
                var script = document.createElement('script');
                script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
                document.getElementsByTagName('head')[0].appendChild(script);
               
                
              window.eqfeed_callback = function(results) {
                
                myStore.data.each(function(item,  index, totalItems ) {                   
                     var lang = parseFloat(item.data['Latitude']);
                      var latLng = new google.maps.LatLng(lang);
                      
                      var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                      });                       
                });
              }
        
        });        
},

    launch: function(app) {       
        console.log("AAAA")
    },
});