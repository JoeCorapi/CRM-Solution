declare namespace Form.contact.Main {
    namespace TimelineWallControlContactMain {
        namespace Tabs {
            interface SUMMARYTAB extends XrmBase.SectionCollectionBase {
                get(name: "SOCIAL_PANE_TAB"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "SUMMARY_TAB"): XrmBase.PageTab<Tabs.SUMMARYTAB>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface TimelineWallControlContactMain extends XrmBase.PageBase<TimelineWallControlContactMain.Attributes, TimelineWallControlContactMain.Tabs, TimelineWallControlContactMain.Controls> {
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
