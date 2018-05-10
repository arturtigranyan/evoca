Ext.define('evoca.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    config: {
        title: 'Home',
        iconCls: 'home',
        layout: 'fit',
        scrollable: true,
        styleHtmlContent: true,
        styleHtmlCls: 'home',
        html: ['<h1>Evoca Bank Home Page',
        '<hr>',
        '<p>This is Evoca Bank home page</p>'].join(""),
        items:[
            {
                xtype: 'titlebar',
                title: 'Home Page',
                docked: 'top'
            },
            
        ]
    }
})