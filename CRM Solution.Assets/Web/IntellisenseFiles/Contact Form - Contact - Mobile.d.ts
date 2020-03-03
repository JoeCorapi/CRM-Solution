declare namespace Form.contact.Main {
    namespace ContactMobile {
        namespace Tabs {
            interface Fstabsummary extends XrmBase.SectionCollectionBase {
                get(name: "fstab_summary_section_contact_information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabaddress extends XrmBase.SectionCollectionBase {
                get(name: "fstab_address_section_address"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: "tab_2_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabother extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: "tab_4_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "fstab_sub_grids_section"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "emailaddress1"): XrmBase.StringAttribute;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "fullname"): XrmBase.StringAttribute;
            get(name: "jobtitle"): XrmBase.StringAttribute;
            get(name: "mobilephone"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "parentcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<contact_preferredcontactmethodcode>;
            get(name: "telephone1"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "CONTACTS"): XrmBase.SubGridControl<"contact">;
            get(name: "emailaddress1"): XrmBase.StringControl;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "fullname"): XrmBase.StringControl;
            get(name: "INVOICES"): XrmBase.SubGridControl<"invoice">;
            get(name: "jobtitle"): XrmBase.StringControl;
            get(name: "mobilephone"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ORDERS"): XrmBase.SubGridControl<"salesorder">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "parentcustomerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetControl<contact_preferredcontactmethodcode>;
            get(name: "QUOTES"): XrmBase.SubGridControl<"quote">;
            get(name: "telephone1"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_summary"): XrmBase.PageTab<Tabs.Fstabsummary>;
            get(name: "fstab_address"): XrmBase.PageTab<Tabs.Fstabaddress>;
            get(name: "fstab_other"): XrmBase.PageTab<Tabs.Fstabother>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ContactMobile extends XrmBase.PageBase<ContactMobile.Attributes, ContactMobile.Tabs, ContactMobile.Controls> {
        getAttribute(attributeName: "parentcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "jobtitle"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mobilephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<contact_preferredcontactmethodcode>;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "parentcustomerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "fullname"): XrmBase.StringControl;
        getControl(controlName: "jobtitle"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "mobilephone"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "emailaddress1"): XrmBase.StringControl;
        getControl(controlName: "preferredcontactmethodcode"): XrmBase.OptionSetControl<contact_preferredcontactmethodcode>;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "CONTACTS"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: "QUOTES"): XrmBase.SubGridControl<"quote">;
        getControl(controlName: "ORDERS"): XrmBase.SubGridControl<"salesorder">;
        getControl(controlName: "INVOICES"): XrmBase.SubGridControl<"invoice">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
