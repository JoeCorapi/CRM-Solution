function CancelApplication(primaryControl) {
    let formContext = primaryControl; 
    formContext.getAttribute("statecode").setValue(1);
    formContext.getAttribute("statuscode").setValue(2);
    formContext.data.entity.save();
}