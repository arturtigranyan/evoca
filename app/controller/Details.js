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

    init: function() {

        this.control({

            '#contact_search':{  //  the id or itemId we gave our searchfield
                scope: this,
                clearicontap: this.onSearchClearIconTap,
                keyup: this.onSearchKeyUp
            }

        });
    },
    onSearchKeyUp: function(field) {

        console.log("Search result")       
       
        var value = field.getValue(),
        store = Ext.getStore('Mapstore');

        console.log(store);
       
        store.clearFilter();

        if (value) {
            var searches = value.split(' '),
            regexps = [],
            i;
             for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;
                regexps.push(new RegExp(searches[i], 'i'));
            }
                store.filter(function(record) {
                var matched = [];
                for (i = 0; i < regexps.length; i++) {
                            var search = regexps[i],  
                            didMatch = record.get('Address').match(search);                      
                            matched.push(didMatch);
                    }
              if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    },

    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function() {       
        Ext.getCmp('contactlist').getStore().clearFilter();
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
       
    },
});