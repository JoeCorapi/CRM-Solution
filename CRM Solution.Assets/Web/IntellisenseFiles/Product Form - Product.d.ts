declare namespace Form.product.Main {
    namespace Product {
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
            interface FieldService extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_3_section_4"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
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
            get(name: "msdyn_converttocustomerasset"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_defaultvendor"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_fieldserviceproducttype"): XrmBase.OptionSetAttribute<msdyn_fieldserviceproducttype>;
            get(name: "msdyn_purchasename"): XrmBase.StringAttribute;
            get(name: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_upccode"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "parentproductid"): XrmBase.LookupAttribute<"product">;
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
            get(name: "currentcost"): XrmBase.NumberControl;
            get(name: "defaultuomid"): XrmBase.LookupControl<"uom">;
            get(name: "defaultuomscheduleid"): XrmBase.LookupControl<"uomschedule">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
            get(name: "editableParentControl"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_converttocustomerasset"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_defaultvendor"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_fieldserviceproducttype"): XrmBase.OptionSetControl<msdyn_fieldserviceproducttype>;
            get(name: "msdyn_purchasename"): XrmBase.StringControl;
            get(name: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_upccode"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "parentproductid"): XrmBase.LookupControl<"product">;
            get(name: "Price_List_Items"): XrmBase.SubGridControl<"productpricelevel">;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "product_dynamic_properties"): XrmBase.SubGridControl<"dynamicproperty">;
            get(name: "product_dynamic_properties_offline"): XrmBase.SubGridControl<"dynamicproperty">;
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
            get(name: "price_list_items"): XrmBase.PageTab<Tabs.Pricelistitems>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: "FieldService"): XrmBase.PageTab<Tabs.FieldService>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Product extends XrmBase.PageBase<Product.Attributes, Product.Tabs, Product.Controls> {
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
        getAttribute(attributeName: "msdyn_fieldserviceproducttype"): XrmBase.OptionSetAttribute<msdyn_fieldserviceproducttype>;
        getAttribute(attributeName: "msdyn_upccode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_converttocustomerasset"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_defaultvendor"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_purchasename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "currentcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "standardcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "productnumber"): XrmBase.StringControl;
        getControl(controlName: "editableParentControl"): XrmBase.LookupControl<"product">;
        getControl(controlName: "parentproductid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "validfromdate"): XrmBase.DateControl;
        getControl(controlName: "validtodate"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "defaultuomscheduleid"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "defaultuomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "quantitydecimal"): XrmBase.NumberControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "productassocaition_items"): XrmBase.SubGridControl<"productassociation">;
        getControl(controlName: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "product_dynamic_properties"): XrmBase.SubGridControl<"dynamicproperty">;
        getControl(controlName: "product_dynamic_properties_offline"): XrmBase.SubGridControl<"dynamicproperty">;
        getControl(controlName: "Price_List_Items"): XrmBase.SubGridControl<"productpricelevel">;
        getControl(controlName: "productsubstitute_items"): XrmBase.SubGridControl<"productsubstitute">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_fieldserviceproducttype"): XrmBase.OptionSetControl<msdyn_fieldserviceproducttype>;
        getControl(controlName: "msdyn_upccode"): XrmBase.StringControl;
        getControl(controlName: "msdyn_converttocustomerasset"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_defaultvendor"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_purchasename"): XrmBase.StringControl;
        getControl(controlName: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "currentcost"): XrmBase.NumberControl;
        getControl(controlName: "standardcost"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
