declare namespace Form.orderclose.Main {
    namespace Information {
        namespace Tabs {
            interface Resolution extends XrmBase.SectionCollectionBase {
                get(name: "information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "actualend"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actualend"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "subject"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "resolution"): XrmBase.PageTab<Tabs.Resolution>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "actualend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "actualend"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
