Ext.define('evoca.view.Map', {
    extend: 'Ext.Panel',
    extend: 'Ext.dataview.List',
    xtype: 'map',
    config: {
        title : 'Map',
        iconCls: 'maps',
        items: [
            {
            xtype: 'titlebar',
            title: 'Map',
            docked: 'top',            
            },
            {
            xtype: 'list',
            store: 'Mapstore',
            itemTpl: '{Address}, {Description}, {Name}',            
            },
        ],     
    },
})