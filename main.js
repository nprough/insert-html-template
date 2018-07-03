define(function (require, exports, module) {
    "use strict";
    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
        Menus = brackets.getModule("command/Menus");
    
    function htmlTemplate() {
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var template =  "<!DOCTYPE HTML>\n"+
                            "<html lang=\"en\">\n"+
                            "\t<head>\n"+
                            "\t\t<meta charset=\"UTF-8\">\n"+
                            "\t\t<title></title>\n"+
                            "\t</head>\n"+
                            "\t<body>\n\n"+
                            "\t</body>\n"+
                            "</html>";
            var inPos = editor.getCursorPos();
            editor.document.replaceRange(template,inPos);
        }
};
    var COMMAND_ID = "inserthtmltemplate.nickprough";
    CommandManager.register("Insert HTML Template", COMMAND_ID, htmlTemplate);
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(COMMAND_ID);
    KeyBindingManager.addBinding(COMMAND_ID, "Ctrl-Alt-N", "mac");
    KeyBindingManager.addBinding(COMMAND_ID, "Ctrl-Alt-N", "win");
});
