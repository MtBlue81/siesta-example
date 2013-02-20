StartTest(function(t) {
    t.diag('Testing Form View');
    Ext.Loader.setPath({
        'Ext': '../../../apps/memo/touch/src',
        'Memo': '../../../apps/memo/app'
    });
    t.requireOk(
        [
            'Memo.view.Form'
        ],
        function() {
            var view = Ext.create("Memo.view.Form");
            Ext.Viewport.show().add(view);
            Ext.Viewport.setSize(300, 300);
            t.waitForComponent(view, true, function() {
                var removeBtn = view.down("button[action=remove]"),
                    textField = view.down("textareafield");

                t.ok(removeBtn, "check remove btn is exist.");
                t.ok(textField, "check text field is exist.");

                t.firesOnce(removeBtn, "tap", "check remove btn is tapped");

                t.tap(removeBtn);
                var memo = "テストデータ書き込み";
                t.type("form textarea", memo, function(){
                    t.is(textField.getValue(), memo, "check text input");
                });
            });
        }
    );

});
