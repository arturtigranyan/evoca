Ext.define('evoca.view.Map', {
    extend: 'Ext.Panel',  
    // extend: 'Ext.grid.Panel',    
    // extend: 'Ext.tab.Panel',

    

    




    xtype: 'Map',
    
    config: {
        title : 'Map',        
        iconCls: 'maps',
        
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
                renderTo: Ext.getBody(),
                title: 'Sci-Fi Television',
                height: 250,
                width: 250,
                // store: 'Mapstore',
                // plugins: {
                //     gridfilters: true
                // },
                    columns: [{
                        dataIndex: 'id',
                        text: 'ID',
                        width: 50
                    },{
                        dataIndex: 'show',
                        text: 'Show',
                        flex: 1,
                        filter: {
                            // required configs
                            type: 'string',
                            // optional configs
                            value: 'star',  // setting a value makes the filter active.
                            itemDefaults: {
                                // any Ext.form.field.Text configs accepted
                            }
                        }
                    }],

            },




            {
                html: '<p>Map</p>',
                xtype: 'button',
                id: 'clickButton',                
                width: '120px',
                height: '20px',                
            },
            {          
                id: 'map',   
                margin: '10 200 80 250',
                width: '50%'                
            },       
            // {
            //     xtype: 'button',
            //     text: "The button",
            //     width: 200,
            //     height: 100,
            //     margin: '30, 5, 5, 30',               
            //     id: 'myButton',
            //     listeners: {
            //         tap: function(button, e, eOpts){
            //             // console.log('Button clicked');
            //         }
            //     }
            // }

        ],   
    },
})

