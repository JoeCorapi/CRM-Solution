function crmAlert(Context) {

    let myUniqueId = "_myUniqueId"; // Define an ID for the notification
    let currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    let message = currentUserName + ": Your JavaScript code in action!";

    alert(message);

    Context.
}