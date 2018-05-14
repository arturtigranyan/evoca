Ext.define('evoca.view.Map', {
    extend: 'Ext.Panel', 
    xtype: 'Map',
    alias:'widget.contactlist',


    config: {
        title : 'Քարտեզ',        
        iconCls: 'maps', 
        id: 'contactlist',                      
        layout: 'fit',        
        items: [ 
            {    
            xtype: 'list',            
            width: '50%',  
            height: '100%',  
            margin:'250',                    
            store: 'Mapstore',            
            itemTpl: '<h1><b>{Address:ellipsis(35)}</b></h1>, {Description}',            
            itemCls: 'post-entry'
            },
            {
                // xtype:'toolbar',       
                docked:'top',
               
                items:[{
                    xtype: 'searchfield',
                    itemId:'contact_search',
                    id:'contact_search', 
                    placeHolder: 'Search'                    
                }]
            },            
            {
                html: '<p>Show Map</p>',
                xtype: 'button',
                id: 'clickButton',                
                width: '120px',
                height: '20px',                
            },
            {          
                id: 'map',   
                margin: '10 200 80 250',
                width: '50%',   
                height: '55%'             
            },                   
        ],   
    },
})