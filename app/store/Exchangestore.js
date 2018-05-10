Ext.define('evoca.store.Exchangestore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'evoca.model.Exchangemodel',
        autoLoad: true,
        
        proxy: {
            type: 'ajax',            
            url: 'https://online.evocabank.am/internetbank/api/exchangerates',   
            headers: {'X-Version': "4.20.30"},         
            reader: {                
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
})