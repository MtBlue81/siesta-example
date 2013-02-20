StartTest(function(t) {
    t.diag('Testing Whole App');

    t.chain(
        { waitFor : 'componentQuery', args : ['viewport'] },
        function(next, view) {
            view[0].setSize(400, 500); // resize viewport
            var list = Ext.ComponentQuery.query("memolist")[0],
                store = list.getStore();
            store.removeAll();
            store.sync();
            t.ok(!list.getItemAt(0), "check no items");
            next();
        },
        { waitFor : 1000 }, // delay
        // ここから新規作成
        { waitFor : 'componentQuery', args : ['button[action=add]'] },
        
        // 'result' is the result from the waitFor callback method - in this case the ComponentQuery result.
        function(next, result) {
            t.diag("start add item");
            t.ok(!Ext.ComponentQuery.query("memoform")[0], "check form is not exist");
            next();
        },
        { action : 'tap', target : '>>button[action=add]' },
        { waitFor : 'componentQuery', args : ['memoform'] },
        function(next, form){
            t.ok(form[0].isRendered(), "check form is exist");
            next();
        },
        { action : 'type', target : 'form textarea', text:"testtesthogefugapiyo" },
        function(next){
            var backBtn = Ext.ComponentQuery.query("button[ui=back]")[0];
            t.tap(backBtn, next);
        },
        { waitFor : 500 }, // delay
        function(next){
            t.ok(!Ext.ComponentQuery.query("memoform")[0], "check form is not exist");
            var list = Ext.ComponentQuery.query("memolist")[0],
                store = list.getStore();
            t.ok(list.getItemAt(0), "check item is exist");
            t.is(store.getAt(0).get("title"), "testtes...", "check stored data[title]");
            t.is(store.getAt(0).get("memo"), "testtesthogefugapiyo", "check stored data[memo]");
            next();
        },
        // ここから再編集
        function(next) {
            t.diag("start edit item");
            var list = Ext.ComponentQuery.query("memolist")[0];
            t.tap(list.getItemAt(0), next);
        },
        { waitFor : 'componentQuery', args : ['memoform'] },
        function(next, form){
            t.ok(form[0].isRendered(), "check form is exist");
            next();
        },
        function(next) {
            t.selectText("form textarea", 0, 100); // いっぱい選択して
            t.type("form textarea", "[DELETE]", next); // Deleteキー
        },
        { action : 'type', target : 'form textarea', text:"てすと" },
        function(next){
            var backBtn = Ext.ComponentQuery.query("button[ui=back]")[0];
            t.tap(backBtn, next);
        },
        { waitFor : 500 }, // delay
        function(next){
            var list = Ext.ComponentQuery.query("memolist")[0],
                store = list.getStore();
            t.is(store.getAt(0).get("title"), "てすと", "check edit data[title]");
            t.is(store.getAt(0).get("memo"), "てすと", "check edit data[memo]");
            next();
        },
        // さらに追加
        { action : 'tap', target : '>>button[action=add]' },
        { waitFor : 'componentQuery', args : ['memoform'] },
        { action : 'type', target : 'form textarea', text:"second data" },
        function(next){
            var backBtn = Ext.ComponentQuery.query("button[ui=back]")[0];
            t.tap(backBtn, next);
        },
        { waitFor : 500 }, // delay
        function(next){
            var list = Ext.ComponentQuery.query("memolist")[0],
                store = list.getStore();
            t.ok(list.getItemAt(1), "check item is exist");
            t.is(store.getAt(1).get("title"), "second ...", "check stored data[title]");
            t.is(store.getAt(1).get("memo"), "second data", "check stored data[memo]");
            next();
        },
        // ここから削除
        function(next) {
            t.diag("start remove item");
            var list = Ext.ComponentQuery.query("memolist")[0];
            t.tap(list.getItemAt(0), next);
        },
        { waitFor : 500 }, // delay
        { waitFor : 'componentQuery', args : ['memoform'] },
        function(next){
            var removeBtn = Ext.ComponentQuery.query("button[action=remove]")[0];
            console.log(removeBtn);
            t.tap(removeBtn, next);
        },
        { waitFor : 500 }, // delay
        { waitFor : 'componentQuery', args : ['memolist'] },
        function(next, list){
            var store = list[0].getStore();
            t.ok(!list[0].getItemAt(1), "check second item is NOT exist");
            t.is(store.getAt(0).get("title"), "second ...", "check stored data after remove[title]");
            t.is(store.getAt(0).get("memo"), "second data", "check stored data after remove[memo]");
            next();
        }
    );
});
