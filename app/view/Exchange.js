Ext.define('evoca.view.Exchange', {
    extend: 'Ext.Panel',
    extend: 'Ext.dataview.List',
    xtype: 'exchange',

    config: {
        title : 'Exchange',
        iconCls: 'action',
        items: [
        {
            xtype: 'titlebar',           
            title: 'Exchange',
            docked: 'top'
        },
        {
            xtype: 'list',
            store: 'Exchangestore',
            itemTpl: '{Currency}, {Purchase}, {Sale}'
        }
        ]           
    }
})