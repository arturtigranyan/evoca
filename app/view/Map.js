Ext.define('evoca.view.Map', {
    extend: 'Ext.Panel',
    extend: 'Ext.List',    
    xtype: 'map',
    
    config: {
        title : 'Map',
        iconCls: 'maps',
        layout: 'fit',
        items: [            
            {            
            xtype: 'list',
            store: 'Mapstore',
            itemTpl: '<h1><b>{Address:ellipsis(35)}</b></h1>, {Description}, {Name}, {Latitude}',            
            itemCls: 'post-entry'
            },
        ],     
    },
})

