function PlaceOrder(context) {

    var parameters = {};
    var entity = {};
    let formContext = context;
    entity.id = formContext.data.entity.getId();
    entity.entityType = "ss_application";
    parameters.entity = entity;

    var ss_ConverttoOrderRequest = {
        entity: parameters.entity,

        getMetadata: function () {
            return {
                boundParameter: "entity",
                parameterTypes: {
                    "entity": {
                        "typeName": "mscrm.ss_application",
                        "structuralProperty": 5
                    }
                },
                operationType: 0,
                operationName: "ss_ConverttoOrder"
            };
        }
    };

    Xrm.WebApi.online.execute(ss_ConverttoOrderRequest).then(
        function success(result) {
            if (result.ok) {

                formContext.getAttribute("statecode").setValue(1); //deactivated
                formContext.getAttribute("statuscode").setValue(2); //"Inactive"
                formContext.data.entity.save();
            }
        },
        function (error) {
            Xrm.Utility.alertDialog(error.message);
        }
    );
}