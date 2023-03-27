sap.ui.define(
    [
    'sap/ui/core/mvc/Controller',
    "table/model/Model"
    ], 
    function(Controller, Model) {
    'use strict';
    return Controller.extend("table.controller.Main", {

        onInit: function() {
            var oModel = Model.CreateJSONModel("model/data/models.json")
            sap.ui.getCore().setModel(oModel, "M1")
        },
        onExit: function() {
            
        },
        onBeforeRendering: function() {
            
        },
        onAfterRendering: function() {
            
        },
        tableRow: function(oEvent) {
            // var oPath = oEvent.mParameters.rowContext.sPath;
            var oPath = oEvent.mParameters.listItem.oBindingContexts.M1.sPath;
            
            var oSimple = this.getView().byId("idSimple");
            oSimple.bindElement("M1>"+oPath);
        },
    });
});