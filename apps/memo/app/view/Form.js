Ext.define('Memo.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'memoform',
    requires: [
    ],
    config: {
        items : [{
            xtype  : "textareafield",
            name   : "memo",
            height : 800
        },{
            xtype  : "toolbar",
            docked : "bottom",
            items : [{
                xtype : "spacer"
            },{
                xtype    : "button",
                ui       : "flat",
                iconCls  : "trash",
                iconMask : true,
                action   : "remove"
            }]
        }]
    }
});
