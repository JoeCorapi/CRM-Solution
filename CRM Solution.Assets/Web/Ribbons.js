function CancelApplication(primaryControl) {
    let formContext = primaryControl; 

    formContext.getAttribute("statecode").setValue(1); //deactivated
    formContext.getAttribute("statuscode").setValue(2); //"Inactive"
    formContext.data.entity.save();
}