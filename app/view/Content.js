Ext.define('evoca.view.Content', {
    extend: 'Ext.Panel',
    extend: 'Ext.dataview.List',
    xtype: 'Content',

    config: {
        title : 'Content',
        iconCls: 'action',        
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
        }
        ]           
    }
})