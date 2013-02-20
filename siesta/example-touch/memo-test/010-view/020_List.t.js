StartTest(function(t) {
    t.diag('Testing List View');
    Ext.Loader.setPath({
        'Ext': '../../../apps/memo/touch/src',
        'Memo': '../../../apps/memo/app'
    });
    t.requireOk(
        [
            'Memo.view.List'
        ],
        function() {
            var view = Ext.create("Memo.view.List",{
                id : "TEST",
                data: [
                    { title: 'ham', id : "hoge"},
                    { title: 'egg' },
                    { title: 'spam' }
                ]
            });
            Ext.Viewport.show().add(view);
            t.waitForComponent(view, true, function() {
                var d = view.getData();
                t.is(d[0].title, "ham", "first data is checked.");
                t.is(d[2].title, "spam", "last data is checked.");

            });
        }
    );

});
