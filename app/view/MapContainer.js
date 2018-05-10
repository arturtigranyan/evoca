Ext.define('evoca.view.MapContainer', {
    extend: 'Ext.NavigationView',
    xtype: 'mapContainer',
    config: {
        title: 'Maps',
        iconCls: 'maps',
        items: [{
            xtype: 'map'
        }]
    }
})