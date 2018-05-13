Ext.define('evoca.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    config: {
        title: 'Գլխավոր',
        iconCls: 'home',
        layout: 'fit',        
        scrollable: true,        
        styleHtmlContent: true,
        styleHtmlCls: 'home',
        html: "<img src=\"touch/resources/images/evoca.png\">"       
    }
})