Ext.define('evoca.store.Mapstore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'evoca.model.Mapmodel',
        autoLoad: true,

        sorters: 'Address',
        grouper : function(record) {
            return record.get('Address')[0];
        },        
        proxy: {
            type: 'ajax',            
            url: 'https://online.evocabank.am/internetbank/api/mappoints',   
            headers: {'X-Version': "4.20.30"},         
            reader: {                
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
})