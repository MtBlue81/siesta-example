Ext.define('Memo.view.List', {
    extend: 'Ext.dataview.List',
    xtype: 'memolist',
    requires: [
    ],
    config: {
        store   : "Memos",
        itemTpl : "{title}"
    }
});
