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
        var store = Ext.create('evoca.store.Mapstore');

        var data = store.getData();
        
        console.log(data);


        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        
        // button.setBadgeText("You clicked me")
       
    },
    onClickLoadData : function(button){
        console.log("SSSSSSSSSSSSSSSSSS")
        //  var gridStore = this.getStore('perosnnelstore');
        //  var columnsArray = getStore.getProxy().getReader().dataAndMetaData.columns;
        //  this.getView().query('grid')[0].reconfigure(gridStore, columnsArray);
    },
    launch: function(app) {
        console.log("AAAA")
    },
});
