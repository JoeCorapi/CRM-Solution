﻿declare namespace Form.salesorder.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "order information"): XrmBase.PageSection;
                get(name: "totals"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Shipping extends XrmBase.SectionCollectionBase {
                get(name: "dates"): XrmBase.PageSection;
                get(name: "shipping information"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Addresses extends XrmBase.SectionCollectionBase {
                get(name: "bill to address"): XrmBase.PageSection;
                get(name: "ship to address"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Administration extends XrmBase.SectionCollectionBase {
                get(name: "internal information"): XrmBase.PageSection;
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
            get(name: "billto_city"): XrmBase.StringAttribute;
            get(name: "billto_contactname"): XrmBase.StringAttribute;
            get(name: "billto_country"): XrmBase.StringAttribute;
            get(name: "billto_fax"): XrmBase.StringAttribute;
            get(name: "billto_line1"): XrmBase.StringAttribute;
            get(name: "billto_line2"): XrmBase.StringAttribute;
            get(name: "billto_line3"): XrmBase.StringAttribute;
            get(name: "billto_name"): XrmBase.StringAttribute;
            get(name: "billto_postalcode"): XrmBase.StringAttribute;
            get(name: "billto_stateorprovince"): XrmBase.StringAttribute;
            get(name: "billto_telephone"): XrmBase.StringAttribute;
            get(name: "campaignid"): XrmBase.LookupAttribute<"campaign">;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "datefulfilled"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "discountamount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "freightamount"): XrmBase.NumberAttribute;
            get(name: "freighttermscode"): XrmBase.OptionSetAttribute<salesorder_freighttermscode>;
            get(name: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
            get(name: "ordernumber"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<salesorder_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "quoteid"): XrmBase.LookupAttribute<"quote">;
            get(name: "requestdeliveryby"): XrmBase.DateAttribute;
            get(name: "shippingmethodcode"): XrmBase.OptionSetAttribute<salesorder_shippingmethodcode>;
            get(name: "shipto_city"): XrmBase.StringAttribute;
            get(name: "shipto_contactname"): XrmBase.StringAttribute;
            get(name: "shipto_country"): XrmBase.StringAttribute;
            get(name: "shipto_fax"): XrmBase.StringAttribute;
            get(name: "shipto_line1"): XrmBase.StringAttribute;
            get(name: "shipto_line2"): XrmBase.StringAttribute;
            get(name: "shipto_line3"): XrmBase.StringAttribute;
            get(name: "shipto_name"): XrmBase.StringAttribute;
            get(name: "shipto_postalcode"): XrmBase.StringAttribute;
            get(name: "shipto_stateorprovince"): XrmBase.StringAttribute;
            get(name: "shipto_telephone"): XrmBase.StringAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<salesorder_statuscode>;
            get(name: "totalamount"): XrmBase.NumberAttribute;
            get(name: "totalamountlessfreight"): XrmBase.NumberAttribute;
            get(name: "totallineitemamount"): XrmBase.NumberAttribute;
            get(name: "totaltax"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "willcall"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "billto_city"): XrmBase.StringControl;
            get(name: "billto_contactname"): XrmBase.StringControl;
            get(name: "billto_country"): XrmBase.StringControl;
            get(name: "billto_fax"): XrmBase.StringControl;
            get(name: "billto_line1"): XrmBase.StringControl;
            get(name: "billto_line2"): XrmBase.StringControl;
            get(name: "billto_line3"): XrmBase.StringControl;
            get(name: "billto_name"): XrmBase.StringControl;
            get(name: "billto_postalcode"): XrmBase.StringControl;
            get(name: "billto_stateorprovince"): XrmBase.StringControl;
            get(name: "billto_telephone"): XrmBase.StringControl;
            get(name: "campaignid"): XrmBase.LookupControl<"campaign">;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "datefulfilled"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "discountamount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "freightamount"): XrmBase.NumberControl;
            get(name: "freighttermscode"): XrmBase.OptionSetControl<salesorder_freighttermscode>;
            get(name: "ispricelocked"): XrmBase.OptionSetControl<any>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "ordernumber"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<salesorder_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "quoteid"): XrmBase.LookupControl<"quote">;
            get(name: "requestdeliveryby"): XrmBase.DateControl;
            get(name: "shippingmethodcode"): XrmBase.OptionSetControl<salesorder_shippingmethodcode>;
            get(name: "shipto_city"): XrmBase.StringControl;
            get(name: "shipto_contactname"): XrmBase.StringControl;
            get(name: "shipto_country"): XrmBase.StringControl;
            get(name: "shipto_fax"): XrmBase.StringControl;
            get(name: "shipto_line1"): XrmBase.StringControl;
            get(name: "shipto_line2"): XrmBase.StringControl;
            get(name: "shipto_line3"): XrmBase.StringControl;
            get(name: "shipto_name"): XrmBase.StringControl;
            get(name: "shipto_postalcode"): XrmBase.StringControl;
            get(name: "shipto_stateorprovince"): XrmBase.StringControl;
            get(name: "shipto_telephone"): XrmBase.StringControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<salesorder_statuscode>;
            get(name: "totalamount"): XrmBase.NumberControl;
            get(name: "totalamountlessfreight"): XrmBase.NumberControl;
            get(name: "totallineitemamount"): XrmBase.NumberControl;
            get(name: "totaltax"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "willcall"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "shipping"): XrmBase.PageTab<Tabs.Shipping>;
            get(name: "addresses"): XrmBase.PageTab<Tabs.Addresses>;
            get(name: "administration"): XrmBase.PageTab<Tabs.Administration>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ordernumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "totallineitemamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamountlessfreight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "freightamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaltax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "requestdeliveryby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "datefulfilled"): XrmBase.DateAttribute;
        getAttribute(attributeName: "shippingmethodcode"): XrmBase.OptionSetAttribute<salesorder_shippingmethodcode>;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<salesorder_paymenttermscode>;
        getAttribute(attributeName: "freighttermscode"): XrmBase.OptionSetAttribute<salesorder_freighttermscode>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_telephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_contactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shipto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_telephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_contactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<salesorder_statuscode>;
        getAttribute(attributeName: "quoteid"): XrmBase.LookupAttribute<"quote">;
        getAttribute(attributeName: "campaignid"): XrmBase.LookupAttribute<"campaign">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ordernumber"): XrmBase.StringControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "totallineitemamount"): XrmBase.NumberControl;
        getControl(controlName: "ispricelocked"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "discountamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamountlessfreight"): XrmBase.NumberControl;
        getControl(controlName: "freightamount"): XrmBase.NumberControl;
        getControl(controlName: "totaltax"): XrmBase.NumberControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: "requestdeliveryby"): XrmBase.DateControl;
        getControl(controlName: "datefulfilled"): XrmBase.DateControl;
        getControl(controlName: "shippingmethodcode"): XrmBase.OptionSetControl<salesorder_shippingmethodcode>;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<salesorder_paymenttermscode>;
        getControl(controlName: "freighttermscode"): XrmBase.OptionSetControl<salesorder_freighttermscode>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "billto_name"): XrmBase.StringControl;
        getControl(controlName: "billto_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "billto_line1"): XrmBase.StringControl;
        getControl(controlName: "billto_postalcode"): XrmBase.StringControl;
        getControl(controlName: "billto_line2"): XrmBase.StringControl;
        getControl(controlName: "billto_country"): XrmBase.StringControl;
        getControl(controlName: "billto_line3"): XrmBase.StringControl;
        getControl(controlName: "billto_telephone"): XrmBase.StringControl;
        getControl(controlName: "billto_city"): XrmBase.StringControl;
        getControl(controlName: "billto_fax"): XrmBase.StringControl;
        getControl(controlName: "billto_contactname"): XrmBase.StringControl;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shipto_name"): XrmBase.StringControl;
        getControl(controlName: "shipto_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "shipto_line1"): XrmBase.StringControl;
        getControl(controlName: "shipto_postalcode"): XrmBase.StringControl;
        getControl(controlName: "shipto_line2"): XrmBase.StringControl;
        getControl(controlName: "shipto_country"): XrmBase.StringControl;
        getControl(controlName: "shipto_line3"): XrmBase.StringControl;
        getControl(controlName: "shipto_telephone"): XrmBase.StringControl;
        getControl(controlName: "shipto_city"): XrmBase.StringControl;
        getControl(controlName: "shipto_fax"): XrmBase.StringControl;
        getControl(controlName: "shipto_contactname"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<salesorder_statuscode>;
        getControl(controlName: "quoteid"): XrmBase.LookupControl<"quote">;
        getControl(controlName: "campaignid"): XrmBase.LookupControl<"campaign">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
