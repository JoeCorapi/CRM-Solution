function CancelApplication(primaryControl) {
    var formContext = primaryControl; 
    formContext.getAttribute("statecode").setValue(1);
    formContext.getAttribute("statuscode").setValue(2);
}