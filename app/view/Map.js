Ext.define('evoca.view.Map', {
    extend: 'Ext.Panel',  
    xtype: 'Map',
    
    config: {
        title : 'Map',
        iconCls: 'maps',
        layout: 'fit',
        items: [            
            {            
            xtype: 'list',
            store: 'Mapstore',
            itemTpl: '<h1><b>{Address:ellipsis(35)}</b></h1>, {Description}',            
            itemCls: 'post-entry'
            },
            {
                xtype: 'button',
                text: "The button",
                width: 200,
                height: 100,
                margin: '30, 5, 5, 30',               
                id: 'myButton',
                listeners: {
                    tap: function(button, e, eOpts){
                        // console.log('Button clicked');
                    }
                }
            }
        ],   
    },
})

