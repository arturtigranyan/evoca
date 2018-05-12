Ext.define('evoca.view.Content', {
    extend: 'Ext.Panel',
    // extend: 'Ext.dataview.List',
    xtype: 'Content', 
    // layout: 'fit',   

    config: {
        title : 'Content',
        iconCls: 'action',  
        
        html: '<div id="content"></div>',
        items: [
        {
            xtype: 'titlebar',           
            title: 'Content',
            docked: 'top'
            
        },        
        {
            html: '<p>HIII</p>',
            xtype: 'button',
            id: 'myButton',
            width: '120px',
            height: '20px',
            handler: 'onClickLoadData',
            
            // listeners: {
            //     tap: function(button, e, eOpts){
            //         console.log('Button clicked');
            //     }
            // }
        },
        {
            // html: '<p>MAP</p>',
            // xtype: 'map',     
            // useCurrentLocation: true,            
            // width: '700px',
            // height: '400px',  
                  
        }
        ]           
    }
})