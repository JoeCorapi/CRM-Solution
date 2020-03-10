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
            const string desktopPath = @"C:\Users\Ubnik\Desktop\Active Applications 1 - 31 - 2020 5 - 29 - 51 PM.csv";
            const string laptopPath = @"C:\Users\Me\Desktop\simple.csv"; //uspsCSVdata.csv
            const string filePath = laptopPath;
            const string entityName = "ss_application";
            string[] fieldLabels = new string[]{"ss_name", "ss_applicationtype", "ss_destinationaddress"};

            //Entity app = RetrieveRecord("ss_application", "ss_name", "CSV Import", ["ss_name", "ss_applicationtype", "createdon"]);
            //UpdateApplication(app, "CSV Update", "Cliff Didcock", "Mail Forwarding");

            ImportCSVData(filePath, entityName, fieldLabels);
            // CreateApplication("c test", "Cliff Didcock", "Package Submission");
            // RetrieveRecord();
            // RetrieveMultipleApplications();
            // UpdateApplication();
            Console.Read();
        }

        public static void setDataType(string value)
        {
            
        }
        public static void ImportCSVData(string filePath, string entityName, string[] fieldLabels)
        {
            try
            {
                string csvData = File.ReadAllText(filePath);
                var file = csvData.Split('\n');

                //Starts reading where data starts on row 2 
                for (int row = 1; row <= file.Length - 1; row++)
                {
                    Console.WriteLine(file.Length);
                    var record = file[row].Replace('\r', ' ').Split(',');

                    var keyValues = new Dictionary<string, string>();
                    for (int i = 0; i < fieldLabels.Length; i++)
                    {
                        keyValues.Add(fieldLabels[i], record[i]);
                    }
                    CreateApplication(entityName, keyValues);
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
        public static void CreateApplication(string entityName, Dictionary<string, string> keyValues)
        {
            Entity eApplication = new Entity(entityName);

            foreach (KeyValuePair<string, string> record in keyValues)
            {
                if (record.Key.Equals("ss_name"))
                {
                    string typeValue = record.Value;
                    eApplication.Attributes[record.Key] = typeValue;
                }
                else if (record.Key.Equals("ss_applicationtype"))
                {
                    OptionSetValue typeValue = GetAppTypeValue(record.Value);
                    eApplication.Attributes[record.Key] = typeValue;
                } else if (record.Key.Equals("ss_destinationaddress"))
                {
                    Entity contact = RetrieveRecord("ss_customaddress", "ss_name", record.Value, new string[] {"ss_customaddressid"});
                    Console.WriteLine(contact.Attributes["ss_customaddressid"]);

                    Guid id = contact.Id;
                    Console.WriteLine(id);
                    EntityReference typeValue = new EntityReference ("ss_customaddress", id);
                    eApplication.Attributes[record.Key] = typeValue;
                } else
                {
                    string typeValue = record.Value;
                    eApplication.Attributes[record.Key] = typeValue;
                }
            }

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
        public static Entity RetrieveRecord(string entityName, string keyField, string keyValue, string[] columns)
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
                //Console.WriteLine("Name: " + record.Attributes["ss_name"] + " App Type: " + record.FormattedValues["ss_applicationtype"].ToString());
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