sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.navigation2.controller.Main", {
		onInit : function(oEvent) {
			var navigationParameter = this.getOwnerComponent().getComponentData();
			var helloText = navigationParameter.startupParameters.Text[0];
			var oLabel = this.getView().byId("helloText");
			oLabel.setText(helloText);
			
			
		}
	});

});