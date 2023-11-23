sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("tutorial.myui5app.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "tutorial.myui5app",
                    async: true,
                    manifest: true,
                },
            });
        },
    });
});
