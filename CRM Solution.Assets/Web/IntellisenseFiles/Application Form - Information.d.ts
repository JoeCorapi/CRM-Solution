declare namespace Form.ss_application.Main {
    namespace Information {
        namespace Tabs {
            interface _8ae013e28110486ebb424e458696a2a6 extends XrmBase.SectionCollectionBase {
                get(name: "{5add1909-bd52-400d-9882-bbb3a4d7d0be}"): XrmBase.PageSection;
                get(name: "{8ae013e2-8110-486e-bb42-4e458696a2a6}_section_4"): XrmBase.PageSection;
                get(name: "{8ae013e2-8110-486e-bb42-4e458696a2a6}_section_3"): XrmBase.PageSection;
                get(name: "{8ae013e2-8110-486e-bb42-4e458696a2a6}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "ss_applicationtype"): XrmBase.OptionSetAttribute<ss_application_ss_applicationtype>;
            get(name: "ss_customer"): XrmBase.LookupAttribute<"contact">;
            get(name: "ss_destinationaddress"): XrmBase.LookupAttribute<"ss_customaddress">;
            get(name: "ss_details"): XrmBase.StringAttribute;
            get(name: "ss_estimateddeliverydate"): XrmBase.DateAttribute;
            get(name: "ss_itemcontents"): XrmBase.StringAttribute;
            get(name: "ss_name"): XrmBase.StringAttribute;
            get(name: "ss_packageheight"): XrmBase.NumberAttribute;
            get(name: "ss_packagelength"): XrmBase.NumberAttribute;
            get(name: "ss_packagevolume"): XrmBase.NumberAttribute;
            get(name: "ss_packageweight"): XrmBase.NumberAttribute;
            get(name: "ss_packagewidth"): XrmBase.NumberAttribute;
            get(name: "ss_product"): XrmBase.LookupAttribute<"product">;
            get(name: "ss_shippingspeed"): XrmBase.LookupAttribute<"product">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AddressView"): XrmBase.BaseControl;
            get(name: "customer_info"): XrmBase.BaseControl;
            get(name: "ss_applicationtype"): XrmBase.BaseControl;
            get(name: "ss_customer"): XrmBase.LookupControl<"contact">;
            get(name: "ss_destinationaddress"): XrmBase.LookupControl<"ss_customaddress">;
            get(name: "ss_details"): XrmBase.StringControl;
            get(name: "ss_estimateddeliverydate"): XrmBase.DateControl;
            get(name: "ss_itemcontents"): XrmBase.StringControl;
            get(name: "ss_name"): XrmBase.StringControl;
            get(name: "ss_packageheight"): XrmBase.NumberControl;
            get(name: "ss_packagelength"): XrmBase.NumberControl;
            get(name: "ss_packagevolume"): XrmBase.NumberControl;
            get(name: "ss_packageweight"): XrmBase.NumberControl;
            get(name: "ss_packagewidth"): XrmBase.NumberControl;
            get(name: "ss_product"): XrmBase.LookupControl<"product">;
            get(name: "ss_shippingspeed"): XrmBase.LookupControl<"product">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{8ae013e2-8110-486e-bb42-4e458696a2a6}"): XrmBase.PageTab<Tabs._8ae013e28110486ebb424e458696a2a6>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ss_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_customer"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "ss_destinationaddress"): XrmBase.LookupAttribute<"ss_customaddress">;
        getAttribute(attributeName: "ss_applicationtype"): XrmBase.OptionSetAttribute<ss_application_ss_applicationtype>;
        getAttribute(attributeName: "ss_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "ss_shippingspeed"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "ss_itemcontents"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_packagelength"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_packagewidth"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_packageheight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_packagevolume"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_packageweight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_estimateddeliverydate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ss_details"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ss_name"): XrmBase.StringControl;
        getControl(controlName: "ss_customer"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "customer_info"): XrmBase.BaseControl;
        getControl(controlName: "ss_destinationaddress"): XrmBase.LookupControl<"ss_customaddress">;
        getControl(controlName: "AddressView"): XrmBase.BaseControl;
        getControl(controlName: "ss_applicationtype"): XrmBase.BaseControl;
        getControl(controlName: "ss_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "ss_shippingspeed"): XrmBase.LookupControl<"product">;
        getControl(controlName: "ss_itemcontents"): XrmBase.StringControl;
        getControl(controlName: "ss_packagelength"): XrmBase.NumberControl;
        getControl(controlName: "ss_packagewidth"): XrmBase.NumberControl;
        getControl(controlName: "ss_packageheight"): XrmBase.NumberControl;
        getControl(controlName: "ss_packagevolume"): XrmBase.NumberControl;
        getControl(controlName: "ss_packageweight"): XrmBase.NumberControl;
        getControl(controlName: "ss_estimateddeliverydate"): XrmBase.DateControl;
        getControl(controlName: "ss_details"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
