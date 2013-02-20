Ext.define('Memo.controller.Memo', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.util.DelayedTask'
    ],
    config: {
        refs: {
            main     : "main",
            form     : "memoform",
            addButton : "button[action=add]"
        },
        control: {
            "button[action=add]" : {
                tap : "onAddButtonTap"
            },
            "memoform textareafield" : {
                change : "onFieldChange",
                activate : function(textfield) {
                    var task = Ext.create('Ext.util.DelayedTask', function() {
                        textfield.focus();
                    }).delay(100);
                }
            },
            "memolist" : {
                itemtap : "onItemTap",
                activate  : function() {
                    var btn = this.getAddButton();
                    if (btn) {
                        btn.enable();
                    }
                },
                deactivate  : function() {
                    var btn = this.getAddButton();
                    if (btn) {
                        btn.disable();
                    }
                }
            },
            "button[action=remove]" : {
                tap : "onRemoveButtonTap"
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onAddButtonTap : function(btn) {
        var record = Ext.create("Memo.model.Memo", {
            id : "memo-"+Ext.Date.now()
        });
        this.getMain().push({
            xtype  : "memoform",
            record : record
        });
    },

    onFieldChange : function(field, value) {
        var form = this.getForm(),
            record = form.getRecord(),
            store = Ext.getStore("Memos");

        record.set("title", Ext.String.ellipsis(value, 10));
        record.set("memo", value);

        if (Ext.isEmpty(store.findRecord("id", record.get("id")))) {
            store.add(record);
        }
        store.sync();
    },

    onItemTap : function(list, index, target, record) {
        this.getMain().push({
            xtype  : "memoform",
            record : record,
            title  : record.get("title")
        });
    },

    onRemoveButtonTap : function(btn) {
        var me = this,
            record = me.getForm().getRecord(),
            store = Ext.getStore("Memos");
        store.remove(record);
        store.sync();
        me.getMain().onBackButtonTap();
    }
});