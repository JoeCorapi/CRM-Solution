function crmAlert(context) {

    let formContext = context.getFormContext();
    let applicationType = formContext.getAttribute("ss_applicationtype").getValue()

    let message = applicationType;

    alert(message);

    Context.
}