using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

/// <summary>
/// Customer should not be linked to an applicaiton as a lookup. AppName, Destination, And AppType are the requried fields.
/// </summary>

namespace USPSCrud
{
    class crmCrud
    {
        static string strConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["MyCDSServer"].ToString();
        static CrmServiceClient svc = new CrmServiceClient(strConnectionString);
        static void Main(string[] args)
        {
            CreateApplication("c test", "Cliff Didcock", "Package Submission");
            // RetrieveApplication();
            // RetrieveMultipleApplications();
            // UpdateApplication();
            Console.Read();
        }

        public static void importCSVData(String filePath)
        {
            String filePath = 
        }
        public static void CreateApplication(String appName, String appCustomer, String appType)
        {
            int appTypeValue;
            // Address Change     = 717800000
            // Mail Forwarding    = 717800001
            // Package Submission = 717800002

            if (appType.Equals("Address Change"))
            {
                appTypeValue = 717800000;
            } else if (appType.Equals("Mail Forwarding"))
            {
                appTypeValue = 717800001;
            } else if (appType.Equals("Package Submission"))
            {
                appTypeValue = 717800002;
            } else
            {
                throw new Exception("Invalid app type value");
            }

            Entity eApplication = new Entity("ss_application");
            eApplication.Attributes["ss_name"] = appName;
            //eApplication.Attributes["ss_customer"] = appCustomer;
            eApplication.Attributes["ss_applicationtype"] = new OptionSetValue(appTypeValue);

            svc.Create(eApplication);
        }

        public static void UpdateApplication(Entity application, String appName, String appCustomer, String appType)
        {
            application.Id = new Guid("SmoothstakApplication");
            application.Attributes["name"] = "updateSmoothstakApplication";
            svc.Update(application);
        }

        public static void DeleteApplication(Guid guid)
        {
            svc.Delete("ss_application", guid);
        }

        public static Entity RetrieveApplication(String applicationName)
        {
            ConditionExpression condition1 = new ConditionExpression();
            condition1.AttributeName = "ss_name";
            condition1.Operator = ConditionOperator.Equal;
            condition1.Values.Add(applicationName);

            FilterExpression filter1 = new FilterExpression();
            filter1.Conditions.Add(condition1);

            QueryExpression query = new QueryExpression("ss_application");
            query.ColumnSet.AddColumns("ss_name", "ss_customer", "ss_applicationtype");
            query.Criteria.AddFilter(filter1);

            EntityCollection result1 = svc.RetrieveMultiple(query);
            Console.WriteLine(); Console.WriteLine("Query using Query Expression with ConditionExpression and FilterExpression");
            Console.WriteLine("---------------------------------------");

            if (result1.Entities.Count > 0)
            {
                var record = result1.Entities[0];
                Console.WriteLine("Name: " + record.Attributes["ss_name"] + " App Type: " + record.FormattedValues["ss_applicationtype"].ToString());
                return record;
            }

            return null;
        }

        public static void RetrieveMultipleApplications()
        {
            string strFetchXML = @"<fetch distinct='false' mapping='logical' output-format='xml-platform' version='1.0'>
                                        <entity name='Application'>
                                            <attribute name='name'/>
                                            <attribute name='primarycontactid'/>
                                            <attribute name='telephone1'/>
                                            <attribute name='Applicationid'/>
                                                <order descending='false' attribute='name'/>
                                            <filter type='and'>
                                                <condition attribute='createdon' operator='today'/>
                                            </filter>
                                        </entity>
                                    </fetch>";
            EntityCollection entApplicationCollection = svc.RetrieveMultiple(new FetchExpression(strFetchXML));
            for (int intCount = 0; intCount < entApplicationCollection.Entities.Count; intCount++)
            {
                Console.WriteLine("Name of the Application : " + entApplicationCollection.Entities[intCount].Attributes["name"].ToString());
            }
        }

        public static void ImportCSVData()
        {

        }
    }
}