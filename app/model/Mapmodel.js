Ext.define('evoca.model.Mapmodel', {
    extend: 'Ext.data.Model',
   
    resultText: {
        title: 'title'
    },
    config: {    
        fields: ['Id', 'Type', 'Address', 'Description', 'Latitude', 'Longitude', 'Name']
    }
})