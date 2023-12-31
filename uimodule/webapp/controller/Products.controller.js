sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("tutorial.myui5app.controller.Products", {

            onInit: function () {
              this.addHistoryEntry({
                  title: "All Products",
                  icon: "sap-icon://product",
                  intent: "#display-uimodule"
              }, true);
            },
            
            handleListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
                oRouter.navTo("ProductDetail", {
                  productId: selectedProductId
                });
                
              }
        });
    },
);
