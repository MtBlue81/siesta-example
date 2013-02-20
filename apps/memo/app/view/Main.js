Ext.define('Memo.view.Main', {
    extend: 'Ext.navigation.View',
    requires : [
        'Memo.view.List'
    ],
    xtype: 'main',
    config: {
        useTitleForBackButtonText : true,
        navigationBar : {
            items: [{
                xtype    : "button",
                ui       : "flat",
                iconCls  : "add",
                iconMask : true,
                align    : "right",
                action   : "add"
            }]
        },
        items : [{
            title : "メモ",
            xtype : "memolist"
        }]
    }
});
