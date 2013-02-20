Ext.define('Memo.model.Memo', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'title', type: 'auto'},
            {name: 'memo', type: 'auto'}
        ]
    }
});