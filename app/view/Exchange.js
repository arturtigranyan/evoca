Ext.define('evoca.view.Exchange', {
    extend: 'Ext.Panel',
    extend: 'Ext.dataview.List',
    xtype: 'exchange',

    config: {
        title : 'Փոխարժեք',
        iconCls: 'action',
        items: [       
        {
            xtype: 'list',
            store: 'Exchangestore',
            itemTpl: '{Currency}, {Purchase}, {Sale}'
        }
        ]           
    }
})