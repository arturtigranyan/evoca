Ext.define('evoca.view.Content', {
    extend: 'Ext.Panel',    
    xtype: 'Content',
    fullscreen: true,

    config: {
        title : 'Հետադարձ կապ',
        iconCls: 'compose',
        xtype: 'frompanel',  
        // layout: 'fit', 
        // html: '<div id="content"></div>',   
       
        items:[
        {
            html: ['<p>Հասցե ք. Երևան, 0010, Հանրապետության 44/2 (Գլխամասային գրասենյակ)</p>',
        '<hr>',
        '<p>Հեռ., +374 10 60 55 55, 56 20 36, 58 29 77</p>',
        '<hr>',
        '<p>e-mail, hello@evocabank.am</p>',
        ].join(""),
        },
        {
            xtype: 'textfield',
            name: 'firstname',
            label: 'First Name'
        },
        {
            xtype: 'textfield',
            name: 'lastname',
            label: 'Last name'
        },
        {
            xtype: 'emailfield',
            label: 'Email',
            name: 'email',
            required: true
        },
        {
            xtype: 'passwordfield',
            label: 'Password',
            name: 'password',
            required: true
        },
        {
            xtype: 'textareafield',
            label: 'Details',
            maxRows: 3,
            placeHolder: 'Enter your email content',
            maxLength: 120,
            name: 'details'
        },
        {
            xtype: 'button',
            text: 'Submit',
            width: '150px',
            ui: 'action',
            handler: function(){
                this.up('formpanel').submit();
            }
        }
        ]
        
    }
})