declare namespace Form.ss_apptoorderclassic.Main {
    namespace Information {
        namespace Tabs {
            interface StageStep3 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep3_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep11 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep11_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep33 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep33_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep41 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep41_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep47 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep47_section1"): XrmBase.PageSection;
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
            get(name: "4a012e3c-fccd-4809-aaab-ce14a145b4ac:ac75f158-c7d6-4c00-a519-b3871ed51401_actionstep"): XrmBase.BaseControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_applicationtype"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_customer"): XrmBase.BaseControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_destinationaddress"): XrmBase.BaseControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_details"): XrmBase.StringControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_estimateddeliverydate"): XrmBase.DateControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_itemcontents"): XrmBase.StringControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_name"): XrmBase.StringControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_packageheight"): XrmBase.NumberControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_packagelength"): XrmBase.NumberControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_packageweight"): XrmBase.NumberControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_packagewidth"): XrmBase.NumberControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_product"): XrmBase.BaseControl;
            get(name: "bpf_ss_application_ss_apptoorderclassic:ss_shippingspeed"): XrmBase.BaseControl;
            get(name: "db767a6d-93f6-4f31-a287-1abb6f2e8069:fad287d2-9eec-47bf-9a64-e90f1d6ff7e6_actionstep"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "StageStep3"): XrmBase.PageTab<Tabs.StageStep3>;
            get(name: "StageStep11"): XrmBase.PageTab<Tabs.StageStep11>;
            get(name: "StageStep33"): XrmBase.PageTab<Tabs.StageStep33>;
            get(name: "StageStep41"): XrmBase.PageTab<Tabs.StageStep41>;
            get(name: "StageStep47"): XrmBase.PageTab<Tabs.StageStep47>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_name"): XrmBase.StringControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_customer"): XrmBase.BaseControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_applicationtype"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_product"): XrmBase.BaseControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_shippingspeed"): XrmBase.BaseControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_destinationaddress"): XrmBase.BaseControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_itemcontents"): XrmBase.StringControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_packagelength"): XrmBase.NumberControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_packagewidth"): XrmBase.NumberControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_packageheight"): XrmBase.NumberControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_packageweight"): XrmBase.NumberControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_estimateddeliverydate"): XrmBase.DateControl;
        getControl(controlName: "bpf_ss_application_ss_apptoorderclassic:ss_details"): XrmBase.StringControl;
        getControl(controlName: "4a012e3c-fccd-4809-aaab-ce14a145b4ac:ac75f158-c7d6-4c00-a519-b3871ed51401_actionstep"): XrmBase.BaseControl;
        getControl(controlName: "db767a6d-93f6-4f31-a287-1abb6f2e8069:fad287d2-9eec-47bf-9a64-e90f1d6ff7e6_actionstep"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
