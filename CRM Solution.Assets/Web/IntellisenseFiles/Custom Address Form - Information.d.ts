declare namespace Form.ss_customaddress.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "ss_city"): XrmBase.StringAttribute;
            get(name: "ss_country"): XrmBase.StringAttribute;
            get(name: "ss_line1"): XrmBase.StringAttribute;
            get(name: "ss_line2"): XrmBase.StringAttribute;
            get(name: "ss_line3"): XrmBase.StringAttribute;
            get(name: "ss_name"): XrmBase.StringAttribute;
            get(name: "ss_postalcode"): XrmBase.StringAttribute;
            get(name: "ss_state"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ss_city"): XrmBase.StringControl;
            get(name: "ss_country"): XrmBase.StringControl;
            get(name: "ss_line1"): XrmBase.StringControl;
            get(name: "ss_line2"): XrmBase.StringControl;
            get(name: "ss_line3"): XrmBase.StringControl;
            get(name: "ss_name"): XrmBase.StringControl;
            get(name: "ss_postalcode"): XrmBase.StringControl;
            get(name: "ss_state"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ss_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_state"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ss_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ss_name"): XrmBase.StringControl;
        getControl(controlName: "ss_line1"): XrmBase.StringControl;
        getControl(controlName: "ss_line2"): XrmBase.StringControl;
        getControl(controlName: "ss_line3"): XrmBase.StringControl;
        getControl(controlName: "ss_city"): XrmBase.StringControl;
        getControl(controlName: "ss_state"): XrmBase.StringControl;
        getControl(controlName: "ss_country"): XrmBase.StringControl;
        getControl(controlName: "ss_postalcode"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
