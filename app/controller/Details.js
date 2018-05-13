Ext.define('evoca.controller.Details', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            theButton: '#clickButton',
            markerEvent: '#marker'
        },
        control: {
            theButton: {
                tap: 'handleButtonClick'
            }            
        }
    },
   

    handleButtonClick: function(current, record){
        console.log("Button clicked!!!!");      

        this.markers = {};
        var myStore = Ext.create('evoca.store.Mapstore');
      
        myStore.on('load', function () {
                map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 12,
                  center: new google.maps.LatLng(40.177200, 44.503490),
                  mapTypeId: 'terrain'
                });
        
                // Create a <script> tag and set the USGS URL as the source.
                var script = document.createElement('script');
                script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
                document.getElementsByTagName('head')[0].appendChild(script);               
                
              window.eqfeed_callback = function(results) {
                
                myStore.data.each(function(item,  index, totalItems ) {                   

                     var lat = parseFloat(item.data['Latitude']);
                     var lng = parseFloat(item.data['Longitude']);
                      
                     var latLng = new google.maps.LatLng(lat, lng);
                      var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                      });                                  
                });
              }
              console.log(this.markers)
        });        
},

    launch: function(app) {       
        console.log("AAAA")
    },
});