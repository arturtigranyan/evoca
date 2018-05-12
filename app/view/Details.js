Ext.define('evoca.view.Details', {
    extend: 'Ext.Panel',
    xtype: 'details',
    config: {
        layout: 'fit',
        scrollable: true,
        styleHtmlContent: true,
        styleHtmlCls: 'Details',
        tpl: '{Address}, {Description}'
    }
})