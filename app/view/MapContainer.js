Ext.define('evoca.view.MapContainer', {
    extend: 'Ext.NavigationView',
    xtype: 'MapContainer',
    
    config: {
        title: 'Քարտեզ',
        iconCls: 'maps',        
        items: [{
            xtype: 'Map'
        }]
    },
})