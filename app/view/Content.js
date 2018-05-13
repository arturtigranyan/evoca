Ext.define('evoca.view.Content', {
    extend: 'Ext.Panel',
    // extend: 'Ext.dataview.List',
    // extend: 'Ext.grid.Panel',
    xtype: 'Content',


    config: {
        title : 'Contact',
        iconCls: 'action',  
        layout: 'fit', 
        html: '<div id="content"></div>',
        // width: '700px',
        items: [
        {
            xtype: 'titlebar',           
            title: 'Map',
            docked: 'top'
            
        },        
        // {
        //     html: '<p>Map</p>',
        //     xtype: 'button',
        //     id: 'clickButton',
        //     width: '120px',
        //     height: '20px',
        //     // handler: 'onClickLoadData',
        //     listeners: {
        //         tap: function(button, e, eOpts){
        //             // console.log('Button clicked');
        //         }
        //     }
        // },
        // {            
        //     xtype: 'list',
        //     store: 'Mapstore',           
        //     itemTpl: '<h1><b>{Address:ellipsis(35)}</b></h1>, {Description}',            
        //     itemCls: 'post-entry'
        //     },        
        // {          
        //     id: 'map',                 
            
        // }
        ]           
    }
})