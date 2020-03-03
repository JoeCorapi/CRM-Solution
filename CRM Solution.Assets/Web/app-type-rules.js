function crmAlert(context) {

    let formContext = context.getFormContext();
    let applicationType = formContext.getAttribute("ss_applicationtype").getValue();

    function hideFields() {
        formContext.ui.tabs.sections.controls.get("Package Contents").setVisible(false);
    }

    function showFields() {
        formContext.ui.tabs.sections.controls.get("Package Contents").setVisible(true);
    }

    if (applicationType === 717800002) {
        hideFields;
    } else {
        showFields;
    }

    alert(applicationType);
}
