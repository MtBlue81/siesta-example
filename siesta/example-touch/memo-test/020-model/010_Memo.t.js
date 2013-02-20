StartTest(function(t) {
    Ext.Loader.setPath({
        'Ext': '../../../apps/memo/touch/src',
        'Memo': '../../../apps/memo/app'
    });

    t.requireOk('Memo.model.Memo', function() {
        var mod = Ext.create('Memo.model.Memo', {
            id    : 'memo-1111',
            title : 'This Me...',
            memo  : 'This Memo is written by SEC.'
        });

        t.is(mod.get('id'), 'memo-1111', 'check id field');
        t.is(mod.get('title'), 'This Me...', 'check title field');
        t.is(mod.get('memo'), 'This Memo is written by SEC.', 'check memo field');
    });
});
