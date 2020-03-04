function displayProductFields(context) {

    let formContext = context.getFormContext();
    let applicationType = formContext.getAttribute("ss_applicationtype").getValue();

    function displayFields(boolean) {
        formContext.getControl("ss_itemcontents").setVisible(boolean);
        formContext.getControl("ss_packageheight").setVisible(boolean);
        formContext.getControl("ss_packagelength").setVisible(boolean);
        formContext.getControl("ss_packagewidth").setVisible(boolean);
        formContext.getControl("ss_packageweight").setVisible(boolean);
        formContext.getControl("ss_packagevolume").setVisible(boolean);
        formContext.getControl("ss_shippingspeed").setVisible(boolean);
        formContext.getControl("ss_estimateddeliverydate").setVisible(boolean);
    }

    if (applicationType === 717800002) { // type = Submit package
        displayFields(true);
    } else {
        displayFields(false);
    }
}
