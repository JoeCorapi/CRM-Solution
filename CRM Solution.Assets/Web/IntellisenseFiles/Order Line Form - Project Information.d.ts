declare namespace Form.salesorderdetail.Main {
    namespace ProjectInformation {
        namespace Tabs {
            interface ProductTypeTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_8_section_1"): XrmBase.PageSection;
                get(name: "ProductTypeTab_section_2"): XrmBase.PageSection;
                get(name: "ProductTypeTab_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface GeneralProjectTab extends XrmBase.SectionCollectionBase {
                get(name: "ProjectSection"): XrmBase.PageSection;
                get(name: "TransactionTypesSection"): XrmBase.PageSection;
                get(name: "AmountSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface GeneralProductTab extends XrmBase.SectionCollectionBase {
                get(name: "ProductSection"): XrmBase.PageSection;
                get(name: "CostSection"): XrmBase.PageSection;
                get(name: "SalesSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ChargeableRolesTab extends XrmBase.SectionCollectionBase {
                get(name: "ChargeableRoles"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ChargeableCategoriesTab extends XrmBase.SectionCollectionBase {
                get(name: "ChargeableCategories"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TransactionsTab extends XrmBase.SectionCollectionBase {
                get(name: "TransactionsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface InvoiceScheduleTab extends XrmBase.SectionCollectionBase {
                get(name: "InvoiceScheduleSection"): XrmBase.PageSection;
                get(name: "MilestoneSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "sales order detail information"): XrmBase.PageSection;
                get(name: "pricing"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Delivery extends XrmBase.SectionCollectionBase {
                get(name: "delivery information"): XrmBase.PageSection;
                get(name: "fulfillment"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Address extends XrmBase.SectionCollectionBase {
                get(name: "ship to address"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "baseamount"): XrmBase.NumberAttribute;
            get(name: "extendedamount"): XrmBase.NumberAttribute;
            get(name: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "manualdiscountamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_billingmethod"): XrmBase.OptionSetAttribute<msdyn_billingmethod>;
            get(name: "msdyn_billingstartdate"): XrmBase.DateAttribute;
            get(name: "msdyn_billingstatus"): XrmBase.OptionSetAttribute<msdyn_billingstatus>;
            get(name: "msdyn_budgetamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_costamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_costpriceperunit"): XrmBase.NumberAttribute;
            get(name: "msdyn_includeexpense"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_includefee"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_includetime"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_invoicefrequency"): XrmBase.LookupAttribute<"msdyn_invoicefrequency">;
            get(name: "msdyn_linetype"): XrmBase.OptionSetAttribute<msdyn_linetype>;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "priceperunit"): XrmBase.NumberAttribute;
            get(name: "productdescription"): XrmBase.StringAttribute;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "producttypecode"): XrmBase.OptionSetAttribute<qooiproduct_producttype>;
            get(name: "quantity"): XrmBase.NumberAttribute;
            get(name: "quantitybackordered"): XrmBase.NumberAttribute;
            get(name: "quantitycancelled"): XrmBase.NumberAttribute;
            get(name: "quantityshipped"): XrmBase.NumberAttribute;
            get(name: "requestdeliveryby"): XrmBase.DateAttribute;
            get(name: "salesorderid"): XrmBase.LookupAttribute<"salesorder">;
            get(name: "salesrepid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "shipto_city"): XrmBase.StringAttribute;
            get(name: "shipto_contactname"): XrmBase.StringAttribute;
            get(name: "shipto_country"): XrmBase.StringAttribute;
            get(name: "shipto_fax"): XrmBase.StringAttribute;
            get(name: "shipto_freighttermscode"): XrmBase.OptionSetAttribute<salesorderdetail_shipto_freighttermscode>;
            get(name: "shipto_line1"): XrmBase.StringAttribute;
            get(name: "shipto_line2"): XrmBase.StringAttribute;
            get(name: "shipto_line3"): XrmBase.StringAttribute;
            get(name: "shipto_name"): XrmBase.StringAttribute;
            get(name: "shipto_postalcode"): XrmBase.StringAttribute;
            get(name: "shipto_stateorprovince"): XrmBase.StringAttribute;
            get(name: "shipto_telephone"): XrmBase.StringAttribute;
            get(name: "tax"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupAttribute<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberAttribute;
            get(name: "willcall"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "baseamount"): XrmBase.NumberControl;
            get(name: "ChargeableCategoriesGrid"): XrmBase.BaseControl;
            get(name: "ChargeableRolesGrid"): XrmBase.BaseControl;
            get(name: "ContractLineDetails"): XrmBase.BaseControl;
            get(name: "extendedamount"): XrmBase.NumberControl;
            get(name: "InvoiceScheduleGrid"): XrmBase.SubGridControl<"msdyn_contractlineinvoiceschedule">;
            get(name: "ispriceoverridden"): XrmBase.OptionSetControl<any>;
            get(name: "isproductoverridden"): XrmBase.OptionSetControl<any>;
            get(name: "manualdiscountamount"): XrmBase.NumberControl;
            get(name: "MilestonesGrid"): XrmBase.SubGridControl<"msdyn_contractlinescheduleofvalue">;
            get(name: "msdyn_billingmethod"): XrmBase.OptionSetControl<msdyn_billingmethod>;
            get(name: "msdyn_billingstartdate"): XrmBase.DateControl;
            get(name: "msdyn_billingstatus"): XrmBase.OptionSetControl<msdyn_billingstatus>;
            get(name: "msdyn_budgetamount"): XrmBase.NumberControl;
            get(name: "msdyn_costamount"): XrmBase.NumberControl;
            get(name: "msdyn_costpriceperunit"): XrmBase.NumberControl;
            get(name: "msdyn_includeexpense"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_includefee"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_includetime"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_invoicefrequency"): XrmBase.LookupControl<"msdyn_invoicefrequency">;
            get(name: "msdyn_linetype"): XrmBase.OptionSetControl<msdyn_linetype>;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "priceperunit"): XrmBase.NumberControl;
            get(name: "productdescription"): XrmBase.StringControl;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "producttypecode"): XrmBase.OptionSetControl<qooiproduct_producttype>;
            get(name: "quantity"): XrmBase.NumberControl;
            get(name: "quantitybackordered"): XrmBase.NumberControl;
            get(name: "quantitycancelled"): XrmBase.NumberControl;
            get(name: "quantityshipped"): XrmBase.NumberControl;
            get(name: "requestdeliveryby"): XrmBase.DateControl;
            get(name: "salesorderid"): XrmBase.LookupControl<"salesorder">;
            get(name: "salesrepid"): XrmBase.LookupControl<"systemuser">;
            get(name: "shipto_city"): XrmBase.StringControl;
            get(name: "shipto_contactname"): XrmBase.StringControl;
            get(name: "shipto_country"): XrmBase.StringControl;
            get(name: "shipto_fax"): XrmBase.StringControl;
            get(name: "shipto_freighttermscode"): XrmBase.OptionSetControl<salesorderdetail_shipto_freighttermscode>;
            get(name: "shipto_line1"): XrmBase.StringControl;
            get(name: "shipto_line2"): XrmBase.StringControl;
            get(name: "shipto_line3"): XrmBase.StringControl;
            get(name: "shipto_name"): XrmBase.StringControl;
            get(name: "shipto_postalcode"): XrmBase.StringControl;
            get(name: "shipto_stateorprovince"): XrmBase.StringControl;
            get(name: "shipto_telephone"): XrmBase.StringControl;
            get(name: "tax"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupControl<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberControl;
            get(name: "willcall"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "ProductTypeTab"): XrmBase.PageTab<Tabs.ProductTypeTab>;
            get(name: "GeneralProjectTab"): XrmBase.PageTab<Tabs.GeneralProjectTab>;
            get(name: "GeneralProductTab"): XrmBase.PageTab<Tabs.GeneralProductTab>;
            get(name: "ChargeableRolesTab"): XrmBase.PageTab<Tabs.ChargeableRolesTab>;
            get(name: "ChargeableCategoriesTab"): XrmBase.PageTab<Tabs.ChargeableCategoriesTab>;
            get(name: "TransactionsTab"): XrmBase.PageTab<Tabs.TransactionsTab>;
            get(name: "InvoiceScheduleTab"): XrmBase.PageTab<Tabs.InvoiceScheduleTab>;
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "delivery"): XrmBase.PageTab<Tabs.Delivery>;
            get(name: "address"): XrmBase.PageTab<Tabs.Address>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "producttypecode"): XrmBase.OptionSetAttribute<qooiproduct_producttype>;
        getAttribute(attributeName: "msdyn_linetype"): XrmBase.OptionSetAttribute<msdyn_linetype>;
        getAttribute(attributeName: "salesorderid"): XrmBase.LookupAttribute<"salesorder">;
        getAttribute(attributeName: "productdescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_billingmethod"): XrmBase.OptionSetAttribute<msdyn_billingmethod>;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_includetime"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_includeexpense"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_includefee"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "priceperunit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "extendedamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_budgetamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_invoicefrequency"): XrmBase.LookupAttribute<"msdyn_invoicefrequency">;
        getAttribute(attributeName: "msdyn_billingstartdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "requestdeliveryby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "uomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_costpriceperunit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_costamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_billingstatus"): XrmBase.OptionSetAttribute<msdyn_billingstatus>;
        getAttribute(attributeName: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "volumediscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "baseamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "manualdiscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "salesrepid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "quantityshipped"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "quantitybackordered"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "quantitycancelled"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shipto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_telephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_freighttermscode"): XrmBase.OptionSetAttribute<salesorderdetail_shipto_freighttermscode>;
        getAttribute(attributeName: "shipto_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_contactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "producttypecode"): XrmBase.OptionSetControl<qooiproduct_producttype>;
        getControl(controlName: "msdyn_linetype"): XrmBase.OptionSetControl<msdyn_linetype>;
        getControl(controlName: "salesorderid"): XrmBase.LookupControl<"salesorder">;
        getControl(controlName: "productdescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_billingmethod"): XrmBase.OptionSetControl<msdyn_billingmethod>;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_includetime"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_includeexpense"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_includefee"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "priceperunit"): XrmBase.NumberControl;
        getControl(controlName: "tax"): XrmBase.NumberControl;
        getControl(controlName: "extendedamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_budgetamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_invoicefrequency"): XrmBase.LookupControl<"msdyn_invoicefrequency">;
        getControl(controlName: "msdyn_billingstartdate"): XrmBase.DateControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "isproductoverridden"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "requestdeliveryby"): XrmBase.DateControl;
        getControl(controlName: "quantity"): XrmBase.NumberControl;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "uomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_costpriceperunit"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_costamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_billingstatus"): XrmBase.OptionSetControl<msdyn_billingstatus>;
        getControl(controlName: "ChargeableRolesGrid"): XrmBase.BaseControl;
        getControl(controlName: "ChargeableCategoriesGrid"): XrmBase.BaseControl;
        getControl(controlName: "ContractLineDetails"): XrmBase.BaseControl;
        getControl(controlName: "InvoiceScheduleGrid"): XrmBase.SubGridControl<"msdyn_contractlineinvoiceschedule">;
        getControl(controlName: "MilestonesGrid"): XrmBase.SubGridControl<"msdyn_contractlinescheduleofvalue">;
        getControl(controlName: "ispriceoverridden"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "volumediscountamount"): XrmBase.NumberControl;
        getControl(controlName: "baseamount"): XrmBase.NumberControl;
        getControl(controlName: "manualdiscountamount"): XrmBase.NumberControl;
        getControl(controlName: "salesrepid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "quantityshipped"): XrmBase.NumberControl;
        getControl(controlName: "quantitybackordered"): XrmBase.NumberControl;
        getControl(controlName: "quantitycancelled"): XrmBase.NumberControl;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shipto_name"): XrmBase.StringControl;
        getControl(controlName: "shipto_postalcode"): XrmBase.StringControl;
        getControl(controlName: "shipto_line1"): XrmBase.StringControl;
        getControl(controlName: "shipto_country"): XrmBase.StringControl;
        getControl(controlName: "shipto_line2"): XrmBase.StringControl;
        getControl(controlName: "shipto_telephone"): XrmBase.StringControl;
        getControl(controlName: "shipto_line3"): XrmBase.StringControl;
        getControl(controlName: "shipto_fax"): XrmBase.StringControl;
        getControl(controlName: "shipto_city"): XrmBase.StringControl;
        getControl(controlName: "shipto_freighttermscode"): XrmBase.OptionSetControl<salesorderdetail_shipto_freighttermscode>;
        getControl(controlName: "shipto_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "shipto_contactname"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
