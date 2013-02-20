Ext.define('Memo.store.Memos', {
    extend: 'Ext.data.Store',
    id : "Memos",
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model : "Memo.model.Memo",
        proxy : {
            type : "localstorage",
            id   : "memo"
        },
        autoLoad : true
    }
});