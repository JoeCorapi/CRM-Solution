declare namespace Form.msdyn_consoleapplicationtype.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_displayname"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_renderingorder"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_displayname"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_renderingorder"): XrmBase.NumberControl;
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
        getAttribute(attributeName: "msdyn_displayname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_renderingorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_displayname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_renderingorder"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
