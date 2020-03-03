<main>
  <xaml>
    <Activity x:Class="XrmWorkflowac75f158c7d64c00a519b3871ed51401" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxs="clr-namespace:Microsoft.Xrm.Sdk;assembly=Microsoft.Xrm.Sdk, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" xmlns:s="clr-namespace:System;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:srs="clr-namespace:System.Runtime.Serialization;assembly=System.Runtime.Serialization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" xmlns:this="clr-namespace:" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
      <x:Members>
        <x:Property Name="InputEntities" Type="InArgument(scg:IDictionary(x:String, mxs:Entity))" />
        <x:Property Name="CreatedEntities" Type="InArgument(scg:IDictionary(x:String, mxs:Entity))" />
      </x:Members>
      <this:XrmWorkflowac75f158c7d64c00a519b3871ed51401.InputEntities>
        <InArgument x:TypeArguments="scg:IDictionary(x:String, mxs:Entity)" />
      </this:XrmWorkflowac75f158c7d64c00a519b3871ed51401.InputEntities>
      <this:XrmWorkflowac75f158c7d64c00a519b3871ed51401.CreatedEntities>
        <InArgument x:TypeArguments="scg:IDictionary(x:String, mxs:Entity)" />
      </this:XrmWorkflowac75f158c7d64c00a519b3871ed51401.CreatedEntities>
      <mva:VisualBasic.Settings>Assembly references and imported namespaces for internal implementation</mva:VisualBasic.Settings>
      <mxswa:Workflow>
        <Sequence DisplayName="CreateStep1">
          <Sequence.Variables>
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_1" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_2" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_3" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_4" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_5" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_6" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_7" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_8" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_9" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_10" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_11" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_12" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_13" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_14" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_15" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_16" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_17" />
            <Variable x:TypeArguments="x:Object" Name="CreateStep1_18" />
          </Sequence.Variables>
          <Assign x:TypeArguments="mxs:Entity" To="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" Value="[New Entity(&quot;salesorder&quot;)]" />
          <mxswa:GetEntityProperty Attribute="ss_applicationid" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="ss_application" Value="[CreateStep1_2]">
            <mxswa:GetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
            </mxswa:GetEntityProperty.TargetType>
          </mxswa:GetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">SelectFirstNonNull</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { CreateStep1_2 }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_1]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="ss_application" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_1]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.String, " Order for ", "String" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:String" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_4]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:GetEntityProperty Attribute="ss_name" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="ss_application" Value="[CreateStep1_6]">
            <mxswa:GetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:String" />
              </InArgument>
            </mxswa:GetEntityProperty.TargetType>
          </mxswa:GetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">SelectFirstNonNull</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { CreateStep1_6 }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:String" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_5]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">Add</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { CreateStep1_4, CreateStep1_5 }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:String" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_3]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="name" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_3]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:String" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.Guid, "a35c61d2-ad4a-ea11-a820-000d3a334f1d", "Key" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_8]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.EntityReference, "transactioncurrency", "US Dollar", CreateStep1_8, "Lookup" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_7]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="transactioncurrencyid" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_7]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.Guid, "a1ed87a0-374d-ea11-a812-000d3a35b8ce", "Key" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_10]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.EntityReference, "pricelevel", "USPS Products", CreateStep1_10, "Lookup" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_9]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="pricelevelid" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_9]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.OptionSetValue, "5", "Picklist" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_11]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="shippingmethodcode" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_11]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.Boolean, "False" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:Boolean" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_12]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="willcall" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_12]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="x:Boolean" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:GetEntityProperty Attribute="ss_customer" Entity="[InputEntities(&quot;primaryEntity&quot;)]" EntityName="ss_application" Value="[CreateStep1_14]">
            <mxswa:GetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
            </mxswa:GetEntityProperty.TargetType>
          </mxswa:GetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">SelectFirstNonNull</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { CreateStep1_14 }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_13]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="customerid" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_13]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:EntityReference" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.OptionSetValue, "192350002", "Picklist" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_15]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="msdyn_psastate" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_15]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.OptionSetValue, "192350001", "Picklist" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_16]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="msdyn_psastatusreason" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_16]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.OptionSetValue, "1", "Picklist" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_17]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="prioritycode" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_17]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" DisplayName="EvaluateExpression">
            <mxswa:ActivityReference.Arguments>
              <InArgument x:TypeArguments="x:String" x:Key="ExpressionOperator">CreateCrmType</InArgument>
              <InArgument x:TypeArguments="s:Object[]" x:Key="Parameters">[New Object() { Microsoft.Xrm.Sdk.Workflow.WorkflowPropertyType.OptionSetValue, "1", "Picklist" }]</InArgument>
              <InArgument x:TypeArguments="s:Type" x:Key="TargetType">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
              <OutArgument x:TypeArguments="x:Object" x:Key="Result">[CreateStep1_18]</OutArgument>
            </mxswa:ActivityReference.Arguments>
          </mxswa:ActivityReference>
          <mxswa:SetEntityProperty Attribute="shipto_freighttermscode" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" Value="[CreateStep1_18]">
            <mxswa:SetEntityProperty.TargetType>
              <InArgument x:TypeArguments="s:Type">
                <mxswa:ReferenceLiteral x:TypeArguments="s:Type" Value="mxs:OptionSetValue" />
              </InArgument>
            </mxswa:SetEntityProperty.TargetType>
          </mxswa:SetEntityProperty>
          <mxswa:CreateEntity EntityId="{x:Null}" DisplayName="CreateStep1" Entity="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" EntityName="salesorder" />
          <Assign x:TypeArguments="mxs:Entity" To="[CreatedEntities(&quot;CreateStep1_localParameter&quot;)]" Value="[CreatedEntities(&quot;CreateStep1_localParameter#Temp&quot;)]" />
        </Sequence>
      </mxswa:Workflow>
    </Activity>
  </xaml>
</main>