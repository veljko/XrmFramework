/// <reference path="../../../xrm.d.ts" />
/// <reference path="../../../_internal/EntityEnum/contact.d.ts" />
declare namespace Form.contact.Main {
  namespace Contact {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_INFORMATION"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "CUSTOMER_DETAILS_TAB"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "PERSONAL INFORMATION"): Xrm.PageSection;
        get(name: "PERSONAL_NOTES_SECTION"): Xrm.PageSection;
        get(name: "marketing information"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "billing information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): Xrm.EmptyPageSection;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "fullname"): Xrm.Attribute<string>;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "parentcustomerid"): Xrm.LookupAttribute;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "address1_composite"): Xrm.Attribute<string>;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "originatingleadid"): Xrm.LookupAttribute;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "ownerid"): Xrm.LookupAttribute;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: string): Xrm.EmptyAttribute;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "fullname"): Xrm.StringControl;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl;
      get(name: "parentcustomerid1"): Xrm.LookupControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "address1_composite"): Xrm.StringControl;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "contactcasessgrid"): Xrm.SubGridControl;
      get(name: "contactopportunitiesgrid"): Xrm.SubGridControl;
      get(name: "subgrid_Entitlement"): Xrm.SubGridControl;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "originatingleadid"): Xrm.LookupControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "header_ownerid"): Xrm.LookupControl;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl;
      get(name: string): Xrm.EmptyControl;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: string): Xrm.EmptyPageTab;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Contact extends Xrm.PageBase<Contact.Attributes,Contact.Tabs,Contact.Controls> {
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): Xrm.EmptyAttribute;
    getControl(controlName: "fullname"): Xrm.StringControl;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl;
    getControl(controlName: "parentcustomerid1"): Xrm.LookupControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "address1_composite"): Xrm.StringControl;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "contactcasessgrid"): Xrm.SubGridControl;
    getControl(controlName: "contactopportunitiesgrid"): Xrm.SubGridControl;
    getControl(controlName: "subgrid_Entitlement"): Xrm.SubGridControl;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl;
    getControl(controlName: string): Xrm.EmptyControl;
  }
}
