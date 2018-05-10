Ext.define('evoca.controller.Maps', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {

        },
        control: {
            'mapContainer map list': {
                itemtap: function(){
                    console.log("Item taped");
                }
            }

        }
    },

    //called when the Application is launched, remove if not needed
    // launch: function(app) {

    // }
});
