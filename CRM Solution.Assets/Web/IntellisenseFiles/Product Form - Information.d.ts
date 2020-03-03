declare namespace Form.product.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "product information"): XrmBase.PageSection;
                get(name: "costs"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Description extends XrmBase.SectionCollectionBase {
                get(name: "description information"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Notes extends XrmBase.SectionCollectionBase {
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "currentcost"): XrmBase.NumberAttribute;
            get(name: "defaultuomid"): XrmBase.LookupAttribute<"uom">;
            get(name: "defaultuomscheduleid"): XrmBase.LookupAttribute<"uomschedule">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "price"): XrmBase.NumberAttribute;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "productnumber"): XrmBase.StringAttribute;
            get(name: "producttypecode"): XrmBase.OptionSetAttribute<product_producttypecode>;
            get(name: "producturl"): XrmBase.StringAttribute;
            get(name: "quantitydecimal"): XrmBase.NumberAttribute;
            get(name: "quantityonhand"): XrmBase.NumberAttribute;
            get(name: "standardcost"): XrmBase.NumberAttribute;
            get(name: "stockvolume"): XrmBase.NumberAttribute;
            get(name: "stockweight"): XrmBase.NumberAttribute;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "vendorname"): XrmBase.StringAttribute;
            get(name: "vendorpartnumber"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "currentcost"): XrmBase.NumberControl;
            get(name: "defaultuomid"): XrmBase.LookupControl<"uom">;
            get(name: "defaultuomscheduleid"): XrmBase.LookupControl<"uomschedule">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "price"): XrmBase.NumberControl;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "productnumber"): XrmBase.StringControl;
            get(name: "producttypecode"): XrmBase.OptionSetControl<product_producttypecode>;
            get(name: "producturl"): XrmBase.StringControl;
            get(name: "quantitydecimal"): XrmBase.NumberControl;
            get(name: "quantityonhand"): XrmBase.NumberControl;
            get(name: "standardcost"): XrmBase.NumberControl;
            get(name: "stockvolume"): XrmBase.NumberControl;
            get(name: "stockweight"): XrmBase.NumberControl;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "vendorname"): XrmBase.StringControl;
            get(name: "vendorpartnumber"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "description"): XrmBase.PageTab<Tabs.Description>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "productnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "producttypecode"): XrmBase.OptionSetAttribute<product_producttypecode>;
        getAttribute(attributeName: "defaultuomscheduleid"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "quantityonhand"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "defaultuomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "producturl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "price"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "quantitydecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "standardcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "currentcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "vendorname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "stockweight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "vendorpartnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "stockvolume"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "productnumber"): XrmBase.StringControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "producttypecode"): XrmBase.OptionSetControl<product_producttypecode>;
        getControl(controlName: "defaultuomscheduleid"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "quantityonhand"): XrmBase.NumberControl;
        getControl(controlName: "defaultuomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "producturl"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "price"): XrmBase.NumberControl;
        getControl(controlName: "quantitydecimal"): XrmBase.NumberControl;
        getControl(controlName: "standardcost"): XrmBase.NumberControl;
        getControl(controlName: "currentcost"): XrmBase.NumberControl;
        getControl(controlName: "vendorname"): XrmBase.StringControl;
        getControl(controlName: "stockweight"): XrmBase.NumberControl;
        getControl(controlName: "vendorpartnumber"): XrmBase.StringControl;
        getControl(controlName: "stockvolume"): XrmBase.NumberControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
