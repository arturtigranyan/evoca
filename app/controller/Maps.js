Ext.define('evoca.controller.Maps', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            MapContainer:'MapContainer'
        },
        control: {
            'MapContainer Map list':{
                itemtap: function(list, index, targed, record){
                    // console.log("Item taped")
                    var detailsView = Ext.create('evoca.view.Details');
					detailsView.setData(record.data);
					this.getMapContainer().push(detailsView);
				}
            }
        }
    },
});
