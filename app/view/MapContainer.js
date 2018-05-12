Ext.define('evoca.view.MapContainer', {
    extend: 'Ext.NavigationView',
    xtype: 'MapContainer',
    
    config: {
        title: 'Maps',
        iconCls: 'maps',        
        items: [{
            xtype: 'Map'
        }]
    },
})