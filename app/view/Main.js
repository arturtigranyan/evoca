Ext.define('evoca.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    config: {
        tabBarPosition: 'top',
        

        items: [
            {
                xtype: 'home'
            },
            {
                xtype: 'exchange'
            },
            {
                xtype: 'map'
            }
        ]
    }
});
