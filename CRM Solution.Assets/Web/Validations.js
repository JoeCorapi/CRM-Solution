function destinationIsValid() {}

function destinationIsNotOrigin(executionContext) {

    let formContext = executionContext.getFormContext();
    let globalContext = Xrm.Utility.getGlobalContext();
    let clientUrl = globalContext.getClientUrl();

    let destinationId = formContext.getAttribute("ss_destinationaddress").getValue()[0].id;
    let destinationAddress = destinationId.replace("}", "").replace("{", "");

    if (formContext.getAttribute("ss_customer") !== null && formContext.getAttribute("ss_customer").getValue() !== null && formContext.getAttribute("ss_customer").getValue()[0].id !== null)
        var customerId = formContext.getAttribute("ss_customer").getValue()[0].id;
    if (customerId !== null) {
        let req = new XMLHttpRequest();
        req.open("GET", clientUrl + "/api/data/v9.1/contacts(" + customerId.replace("}", "").replace("{", "") + ")?$select=_ss_contactcustomaddress_value", true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    let result = JSON.parse(this.response);
                    let _ss_contactcustomaddress_value = result["_ss_contactcustomaddress_value"];
                    let _ss_contactcustomaddress_value_formatted = result["_ss_contactcustomaddress_value@OData.Community.Display.V1.FormattedValue"];
                    let _ss_contactcustomaddress_value_lookuplogicalname = result["_ss_contactcustomaddress_value@Microsoft.Dynamics.CRM.lookuplogicalname"];

                    if (destinationAddress.toLowerCase() === _ss_contactcustomaddress_value.toLowerCase()) {
                        formContext.ui.setFormNotification("The destination address cannot be the same as the origin.", "ERROR", "destNotOriginErr");
                        //alert(executionContext.getEventArgs().getSaveMode());
                        formContext.getAttribute("ss_destinationaddress").setValue(null);
                        executionContext.getEventArgs().preventDefault();
                        //alert(executionContext.getEventArgs().isDefaultPrevented());
                    }

                } else {
                    Xrm.Utility.alertDialog(this.statusText);
                }
            }
        };
        req.send();
    }
}