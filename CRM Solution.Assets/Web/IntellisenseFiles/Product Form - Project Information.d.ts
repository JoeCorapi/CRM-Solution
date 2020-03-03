declare namespace Form.product.Main {
    namespace ProjectInformation {
        namespace Tabs {
            interface Productdetails extends XrmBase.SectionCollectionBase {
                get(name: "product information"): XrmBase.PageSection;
                get(name: "costs"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Productassocaitionitems extends XrmBase.SectionCollectionBase {
                get(name: "productassocaition_items_section"): XrmBase.PageSection;
                get(name: "DynamicProperties"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Productdynamicproperties extends XrmBase.SectionCollectionBase {
                get(name: "product_dynamic_properties_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Productcomputedfields extends XrmBase.SectionCollectionBase {
                get(name: "tab_6_section_1"): XrmBase.PageSection;
                get(name: "tab_6_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Pricelistitems extends XrmBase.SectionCollectionBase {
                get(name: "price_list_items_section"): XrmBase.PageSection;
                get(name: "productsubstitute_items_section"): XrmBase.PageSection;
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
            get(name: "parentproductid"): XrmBase.LookupAttribute<"product">;
            get(name: "price"): XrmBase.NumberAttribute;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "productnumber"): XrmBase.StringAttribute;
            get(name: "quantitydecimal"): XrmBase.NumberAttribute;
            get(name: "standardcost"): XrmBase.NumberAttribute;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: "validfromdate"): XrmBase.DateAttribute;
            get(name: "validtodate"): XrmBase.DateAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Computed_Fields"): XrmBase.SubGridControl<"msdyn_fieldcomputation">;
            get(name: "currentcost"): XrmBase.NumberControl;
            get(name: "defaultuomid"): XrmBase.LookupControl<"uom">;
            get(name: "defaultuomscheduleid"): XrmBase.LookupControl<"uomschedule">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "parentproductid"): XrmBase.LookupControl<"product">;
            get(name: "price"): XrmBase.NumberControl;
            get(name: "Price_List_Items"): XrmBase.SubGridControl<"productpricelevel">;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "product_dynamic_properties"): XrmBase.SubGridControl<"dynamicproperty">;
            get(name: "productassocaition_items"): XrmBase.SubGridControl<"productassociation">;
            get(name: "productnumber"): XrmBase.StringControl;
            get(name: "productsubstitute_items"): XrmBase.SubGridControl<"productsubstitute">;
            get(name: "quantitydecimal"): XrmBase.NumberControl;
            get(name: "standardcost"): XrmBase.NumberControl;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: "validfromdate"): XrmBase.DateControl;
            get(name: "validtodate"): XrmBase.DateControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "product_details"): XrmBase.PageTab<Tabs.Productdetails>;
            get(name: "productassocaition_items"): XrmBase.PageTab<Tabs.Productassocaitionitems>;
            get(name: "product_dynamic_properties"): XrmBase.PageTab<Tabs.Productdynamicproperties>;
            get(name: "product_computed_fields"): XrmBase.PageTab<Tabs.Productcomputedfields>;
            get(name: "price_list_items"): XrmBase.PageTab<Tabs.Pricelistitems>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "productnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentproductid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "validfromdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "validtodate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "defaultuomscheduleid"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "defaultuomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "quantitydecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "price"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "standardcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "currentcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "productnumber"): XrmBase.StringControl;
        getControl(controlName: "parentproductid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "validfromdate"): XrmBase.DateControl;
        getControl(controlName: "validtodate"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "defaultuomscheduleid"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "defaultuomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "quantitydecimal"): XrmBase.NumberControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "price"): XrmBase.NumberControl;
        getControl(controlName: "standardcost"): XrmBase.NumberControl;
        getControl(controlName: "currentcost"): XrmBase.NumberControl;
        getControl(controlName: "productassocaition_items"): XrmBase.SubGridControl<"productassociation">;
        getControl(controlName: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "product_dynamic_properties"): XrmBase.SubGridControl<"dynamicproperty">;
        getControl(controlName: "Computed_Fields"): XrmBase.SubGridControl<"msdyn_fieldcomputation">;
        getControl(controlName: "Price_List_Items"): XrmBase.SubGridControl<"productpricelevel">;
        getControl(controlName: "productsubstitute_items"): XrmBase.SubGridControl<"productsubstitute">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
