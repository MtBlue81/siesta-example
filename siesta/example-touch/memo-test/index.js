var Harness = Siesta.Harness.Browser.SenchaTouch;

Harness.configure({
    title               : 'Memo App',
    transparentEx       : false,
    autoCheckGlobals    : true,
    expectedGlobals     : [
        'Ext',
        'Memo'
    ],
    preload : [
        "../../../apps/memo/touch/resources/css/sencha-touch.css",
        "../../../apps/memo/touch/sencha-touch-all-debug.js"
    ]
});

// NOTE: This harness assumes you have a local Sencha Touch 2.x SDK at the same place as your Siesta folder.

Harness.start(
    {
        group : 'View',

        items : [
            {
                url : '010-view/010_Main.t.js'
            },
            {
                url : '010-view/020_List.t.js'
            },
            {
                url : '010-view/030_Form.t.js'
            }
        ]
    },
    {
        group : 'Model',

        items : [
            {
                url : '020-model/010_Memo.t.js'
            }
        ]
    },
    {
        group : 'App',
        items : [
            {
                autoCheckGlobals    : false,
                preload : [],
                url         : '100-all/010_Main.t.js',
                hostPageUrl : '100-all/app.html'
            }
        ]
    }
);
// eof Harness.start

