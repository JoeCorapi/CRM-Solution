declare namespace Form.msdyn_consoleapplicationtemplate.Main {
    namespace Information {
        namespace Tabs {
            interface _1c7ca19956274de2b6c483d0be0be5be extends XrmBase.SectionCollectionBase {
                get(name: "{1c7ca199-5627-4de2-b6c4-83d0be0be5be}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_icon"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_pagetype"): XrmBase.LookupAttribute<"msdyn_consoleapplicationtype">;
            get(name: "msdyn_pinned"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_title"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_icon"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_pagetype"): XrmBase.LookupControl<"msdyn_consoleapplicationtype">;
            get(name: "msdyn_pinned"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_title"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"">;
            get(name: "Parameters"): XrmBase.SubGridControl<"msdyn_consoleapplicationtemplateparameter">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{1c7ca199-5627-4de2-b6c4-83d0be0be5be}"): XrmBase.PageTab<Tabs._1c7ca19956274de2b6c483d0be0be5be>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_icon"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_pagetype"): XrmBase.LookupAttribute<"msdyn_consoleapplicationtype">;
        getAttribute(attributeName: "msdyn_pinned"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_icon"): XrmBase.StringControl;
        getControl(controlName: "msdyn_title"): XrmBase.StringControl;
        getControl(controlName: "msdyn_pagetype"): XrmBase.LookupControl<"msdyn_consoleapplicationtype">;
        getControl(controlName: "msdyn_pinned"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "Parameters"): XrmBase.SubGridControl<"msdyn_consoleapplicationtemplateparameter">;
        getControl(controlName: string): undefined;
    }
}
