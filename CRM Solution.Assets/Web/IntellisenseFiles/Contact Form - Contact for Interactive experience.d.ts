declare namespace Form.contact.Main {
    namespace ContactForInteractiveExperience {
        namespace Tabs {
            interface SUMMARYTAB extends XrmBase.SectionCollectionBase {
                get(name: "CONTACT_INFORMATION"): XrmBase.PageSection;
                get(name: "Timeline"): XrmBase.PageSection;
                get(name: "ref_pan_CUSTOMER_DETAILS_TAB"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DETAILSTAB extends XrmBase.SectionCollectionBase {
                get(name: "PERSONAL INFORMATION"): XrmBase.PageSection;
                get(name: "PERSONAL_NOTES_SECTION"): XrmBase.PageSection;
                get(name: "marketing information"): XrmBase.PageSection;
                get(name: "CONTACT_PREFERENCES"): XrmBase.PageSection;
                get(name: "billing information"): XrmBase.PageSection;
                get(name: "shipping information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Conflictstab extends XrmBase.SectionCollectionBase {
                get(name: "conflictssection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "address1_freighttermscode"): XrmBase.OptionSetAttribute<contact_address1_freighttermscode>;
            get(name: "address1_shippingmethodcode"): XrmBase.OptionSetAttribute<contact_address1_shippingmethodcode>;
            get(name: "anniversary"): XrmBase.DateAttribute;
            get(name: "birthdate"): XrmBase.DateAttribute;
            get(name: "creditlimit"): XrmBase.NumberAttribute;
            get(name: "creditonhold"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotfax"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "emailaddress1"): XrmBase.StringAttribute;
            get(name: "familystatuscode"): XrmBase.OptionSetAttribute<contact_familystatuscode>;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "firstname"): XrmBase.StringAttribute;
            get(name: "followemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "gendercode"): XrmBase.OptionSetAttribute<contact_gendercode>;
            get(name: "lastname"): XrmBase.StringAttribute;
            get(name: "lastusedincampaign"): XrmBase.DateAttribute;
            get(name: "mobilephone"): XrmBase.StringAttribute;
            get(name: "originatingleadid"): XrmBase.LookupAttribute<"lead">;
            get(name: "parentcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<contact_paymenttermscode>;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<contact_preferredcontactmethodcode>;
            get(name: "spousesname"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "address1_freighttermscode"): XrmBase.OptionSetControl<contact_address1_freighttermscode>;
            get(name: "address1_shippingmethodcode"): XrmBase.OptionSetControl<contact_address1_shippingmethodcode>;
            get(name: "anniversary"): XrmBase.DateControl;
            get(name: "birthdate"): XrmBase.DateControl;
            get(name: "contactcasessgrid"): XrmBase.BaseControl;
            get(name: "contactopportunitiesgrid"): XrmBase.BaseControl;
            get(name: "contactquickform"): XrmBase.BaseControl;
            get(name: "creditlimit"): XrmBase.NumberControl;
            get(name: "creditonhold"): XrmBase.OptionSetControl<any>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "donotbulkemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotfax"): XrmBase.OptionSetControl<any>;
            get(name: "donotphone"): XrmBase.OptionSetControl<any>;
            get(name: "donotpostalmail"): XrmBase.OptionSetControl<any>;
            get(name: "donotsendmm"): XrmBase.OptionSetControl<any>;
            get(name: "emailaddress1"): XrmBase.StringControl;
            get(name: "familystatuscode"): XrmBase.OptionSetControl<contact_familystatuscode>;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "firstname"): XrmBase.StringControl;
            get(name: "followemail"): XrmBase.OptionSetControl<any>;
            get(name: "gendercode"): XrmBase.OptionSetControl<contact_gendercode>;
            get(name: "lastname"): XrmBase.StringControl;
            get(name: "lastusedincampaign"): XrmBase.DateControl;
            get(name: "mobilephone"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "originatingleadid"): XrmBase.LookupControl<"lead">;
            get(name: "parentcustomerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<contact_paymenttermscode>;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetControl<contact_preferredcontactmethodcode>;
            get(name: "spousesname"): XrmBase.StringControl;
            get(name: "subgrid_Entitlement"): XrmBase.BaseControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "SUMMARY_TAB"): XrmBase.PageTab<Tabs.SUMMARYTAB>;
            get(name: "DETAILS_TAB"): XrmBase.PageTab<Tabs.DETAILSTAB>;
            get(name: "conflictstab"): XrmBase.PageTab<Tabs.Conflictstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ContactForInteractiveExperience extends XrmBase.PageBase<ContactForInteractiveExperience.Attributes, ContactForInteractiveExperience.Tabs, ContactForInteractiveExperience.Controls> {
        getAttribute(attributeName: "parentcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "firstname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "lastname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mobilephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<contact_preferredcontactmethodcode>;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "gendercode"): XrmBase.OptionSetAttribute<contact_gendercode>;
        getAttribute(attributeName: "familystatuscode"): XrmBase.OptionSetAttribute<contact_familystatuscode>;
        getAttribute(attributeName: "spousesname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "birthdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "anniversary"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "originatingleadid"): XrmBase.LookupAttribute<"lead">;
        getAttribute(attributeName: "lastusedincampaign"): XrmBase.DateAttribute;
        getAttribute(attributeName: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "followemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotfax"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "creditlimit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "creditonhold"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<contact_paymenttermscode>;
        getAttribute(attributeName: "address1_shippingmethodcode"): XrmBase.OptionSetAttribute<contact_address1_shippingmethodcode>;
        getAttribute(attributeName: "address1_freighttermscode"): XrmBase.OptionSetAttribute<contact_address1_freighttermscode>;
        getAttribute(attributeName: "emailaddress1"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "contactquickform"): XrmBase.BaseControl;
        getControl(controlName: "firstname"): XrmBase.StringControl;
        getControl(controlName: "lastname"): XrmBase.StringControl;
        getControl(controlName: "parentcustomerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "mobilephone"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "preferredcontactmethodcode"): XrmBase.OptionSetControl<contact_preferredcontactmethodcode>;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "contactopportunitiesgrid"): XrmBase.BaseControl;
        getControl(controlName: "contactcasessgrid"): XrmBase.BaseControl;
        getControl(controlName: "subgrid_Entitlement"): XrmBase.BaseControl;
        getControl(controlName: "gendercode"): XrmBase.OptionSetControl<contact_gendercode>;
        getControl(controlName: "familystatuscode"): XrmBase.OptionSetControl<contact_familystatuscode>;
        getControl(controlName: "spousesname"): XrmBase.StringControl;
        getControl(controlName: "birthdate"): XrmBase.DateControl;
        getControl(controlName: "anniversary"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "originatingleadid"): XrmBase.LookupControl<"lead">;
        getControl(controlName: "lastusedincampaign"): XrmBase.DateControl;
        getControl(controlName: "donotsendmm"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "followemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotbulkemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotphone"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotfax"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotpostalmail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "creditlimit"): XrmBase.NumberControl;
        getControl(controlName: "creditonhold"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<contact_paymenttermscode>;
        getControl(controlName: "address1_shippingmethodcode"): XrmBase.OptionSetControl<contact_address1_shippingmethodcode>;
        getControl(controlName: "address1_freighttermscode"): XrmBase.OptionSetControl<contact_address1_freighttermscode>;
        getControl(controlName: "emailaddress1"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
