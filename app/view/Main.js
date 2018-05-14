Ext.define('evoca.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    config: {
        tabBarPosition: 'bottom',    
        items: [      
            {
                xtype: 'toolbar',                
                docked: 'top',                   
                items: [{
                    xtype: 'button',
                    iconCls: 'list',   
                    ui: 'plain',                                     
                    handler: function(){
                        if(Ext.Viewport.getMenus().left.isHidden()){
                            Ext.Viewport.showMenu('left');
                        }
                        else{
                            Ext.Viewport.hideMenu('left')
                        }
                    }
                }                    
                ] 
            },               
            {xtype: 'home'},
            {xtype: 'exchange'},
            {xtype: 'MapContainer'},
            {xtype: 'Content'}            
        ],
        listeners: {
            initialize: function() {
                Ext.Viewport.setMenu(this.createMenu(),{
                    side: 'left',
                    reveal: true
                })
            }
        }        
    },
    createMenu: function(){
        var items = [
            // {                
            //     xtype: 'button',
            //     text: 'կապ',
            //     iconCls: 'user',
            //     cls: 'menu-button'
                
            // },
            // {
            //     xtype: 'button',              
            //     text: 'փոխարժեք',
            //     iconCls: 'action'
            // },
            // {
            //     xtype: 'button',
            //     text: 'քարտեզ',
            //     iconCls: 'maps'
            // }
        ];
        return Ext.create('Ext.Menu', {
            style: 'padding: 0',
            id: 'menu',
            width: 200,
            scrollable: 'vertical',
            items: items
        })
    }
    
});
