sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
    "use strict";
    return {
      CreateJSONModel: function(sFilePath) {
        //Step-1: create brand new model object
        var oModel = new JSONModel();
        //Step-2: Load or set the data to the model
        // oModel.setData();
        oModel.loadData(sFilePath);
        return oModel;
      },
    };
  });
  