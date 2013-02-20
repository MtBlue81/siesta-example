StartTest(function(t) {
    t.diag('Testing Main View');
    Ext.Loader.setPath({
        'Ext': '../../../apps/memo/touch/src',
        'Memo': '../../../apps/memo/app'
    });
    t.requireOk(
        [
            'Memo.view.Main'
        ],
        function() {
            var view = Ext.create("Memo.view.Main");
            Ext.Viewport.show().add(view);
            t.waitForComponent(view, true, function() {
                var dock = view.getDockedItems()[0];
                t.is(dock.getTitle(), "メモ", "docked title is checked.");
                var navi = view.getNavigationBar();
                t.ok(navi.query("button[action=add]"), "add button is checked.");
            });
        }
    );

});
