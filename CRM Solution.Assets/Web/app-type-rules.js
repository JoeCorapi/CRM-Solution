function displayProductFields(context) {

    let formContext = context.getFormContext();
    let applicationType = formContext.getAttribute("ss_applicationtype").getValue();

    let fields = [
        "ss_itemcontents",
        "ss_packageheight",
        "ss_packagelength",
        "ss_packagewidth",
        "ss_packageweight",
        "ss_packagevolume",
        "ss_shippingspeed",
        "ss_estimateddeliverydate"];

    function displayFields(field, boolean) {
        formContext.getControl(field).setVisible(boolean);
    }

    if (applicationType === 717800002) { // type = Submit package
        fields.forEach(value => displayFields(value, true));
    } else {
        fields.forEach(value => displayFields(value, false));
    }
}
