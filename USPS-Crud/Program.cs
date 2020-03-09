using System;
using System.IO;
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
            string desktopPath = @"C:\Users\Ubnik\Desktop\Active Applications 1 - 31 - 2020 5 - 29 - 51 PM.csv";
            string laptopPath = @"C:\Users\Me\Desktop\uspsCSVdata.csv";
            string filePath = laptopPath;

            Entity app = RetrieveApplication("ss_application", "ss_name", "CSV Import", ["ss_name", "ss_applicationtype", "createdon"]);
            UpdateApplication(app, "CSV Update", "Cliff Didcock", "Mail Forwarding");

            // ImportCSVData(filePath);
            // CreateApplication("c test", "Cliff Didcock", "Package Submission");
            // RetrieveApplication();
            // RetrieveMultipleApplications();
            // UpdateApplication();
            Console.Read();
        }

        public static void ImportCSVData(string filePath)
        {
            try
            {
                string csvData = File.ReadAllText(filePath);
                var file = csvData.Split('\n');

                //int app = 0;
                //int veh = 0;
                //int cont = 0;

                for (int row = 1; row <= file.Length - 1; row++)
                {
                    Console.WriteLine(file.Length);
                    var record = file[row].Replace('\r', ' ').Split(',');

                    var keyValues = new Dictionary<String, String>()
                    {
                        {String appName: record[0]},

                    }
                    keyValues.Add()
                    string appName = record[0];
                    string appCustomer = record[1];
                    string appType = record[2];
                    string appDate = record[3];

                    Console.WriteLine(appName + ", " + appCustomer + ", " + appType + ", " + appDate);
                    CreateApplication(appName, appCustomer, appType);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Unable to access file data");
                Console.WriteLine(e.Message);
            }
        }

        public static OptionSetValue GetAppTypeValue(string appTypeLabel)
        {
            int appTypeValue;
            // Address Change     = 717800000
            // Mail Forwarding    = 717800001
            // Package Submission = 717800002

            if (appTypeLabel.Equals("Address Change"))
            {
                appTypeValue = 717800000;
            } else if (appTypeLabel.Equals("Mail Forwarding"))
            {
                appTypeValue = 717800001;
            } else if (appTypeLabel.Equals("Package Submission"))
            {
                appTypeValue = 717800002;
            } else
            {
                throw new Exception("Invalid app type value");
            }
            return new OptionSetValue(appTypeValue);
        }
        public static void CreateApplication(string appName, string appCustomer, string appTypeLabel)
        {
            Entity eApplication = new Entity("ss_application");
            eApplication.Attributes["ss_name"] = appName;
            //eApplication.Attributes["ss_customer"] = appCustomer;
            eApplication.Attributes["ss_applicationtype"] = GetAppTypeValue(appTypeLabel);

            svc.Create(eApplication);
        }

        public static void UpdateApplication(Entity application, string appName, string appCustomer, string appTypeLabel)
        { 
            application.Attributes["ss_name"] = appName;
            //application.Attributes["ss_customer"] = appCustomer;
            application.Attributes["ss_applicationtype"] = GetAppTypeValue(appTypeLabel);
            //application.Attributes["ss_createdon"] = "updateSmoothstakApplication";

            svc.Update(application);
        }

        public static void DeleteApplication(Guid guid)
        {
            svc.Delete("ss_application", guid);
        }

        public static QueryExpression QueryBuilder(string entityName, string[] columns)
        {
            QueryExpression query = new QueryExpression(entityName);
            query.ColumnSet.AddColumns(columns);

            return query;
        }
        public static Entity RetrieveApplication(string entityName, string keyField, string keyValue, string[] columns)
        {
            ConditionExpression condition1 = new ConditionExpression
            {
                AttributeName = keyField,
                Operator = ConditionOperator.Equal
        };
            condition1.Values.Add(keyValue);

            FilterExpression filter1 = new FilterExpression();
            filter1.Conditions.Add(condition1);

            QueryExpression query = QueryBuilder(entityName, columns);
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