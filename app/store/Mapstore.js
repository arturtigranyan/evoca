Ext.define('evoca.store.Mapstore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'evoca.model.Mapmodel',
        autoLoad: true,
        
        proxy: {
            type: 'ajax',            
            url: 'https://online.evocabank.am/internetbank/api/mappoints',   
            headers: {'X-Version': "4.20.30"},         
            reader: {                
                type: 'json',
                rootProperty: 'items'
            }
        }

        // data: [
        //     {
        //     Address: "Qochar",
        //     Description: "Somehow",
        //     Name: "Yerevan"
        //     },
        //     {
        //         Address: "Kentron",
        //         Description: "Somehow1",
        //         Name: "Yerevan"
        //     },
        //     {
        //         Address: "Komitas",
        //         Description: "Somehow2",
        //         Name: "Yerevan"
        //     }
        // ],
    }
})