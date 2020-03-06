using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace USPSCrud
{
    class crmCrud
    {
        static string strConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["MyCDSServer"].ToString();
        static CrmServiceClient svc = new CrmServiceClient(strConnectionString);
        static void Main(string[] args)
        {
            // CreateApplication();
            RetrieveApplication();
            // RetrieveMultipleApplications();
            // UpdateApplication();
            Console.Read();
        }
        public static void CreateApplication()
        {
            Entity eApplication = new Entity("ss_application");
            eApplication.Attributes["ss_name"] = "CRUD App";
            svc.Create(eApplication);
        }

        public static void UpdateApplication()
        {
            Entity eApplication = new Entity("Application");
            eApplication.Id = new Guid("SmoothstakApplication 123");
            eApplication.Attributes["name"] = "updateSmoothstakApplication 123";
            svc.Update(eApplication);
        }

        public static void DeleteApplication()
        {
            svc.Delete("Application", new Guid());
        }

        public static Entity RetrieveApplication()
        {
            ConditionExpression condition1 = new ConditionExpression();
            condition1.AttributeName = "ss_name";
            condition1.Operator = ConditionOperator.Equal;
            condition1.Values.Add("Action Test");

            FilterExpression filter1 = new FilterExpression();
            filter1.Conditions.Add(condition1);

            QueryExpression query = new QueryExpression("ss_application");
            query.ColumnSet.AddColumns("ss_name", "ss_customer", "ss_applicationtype");
            query.Criteria.AddFilter(filter1);

            EntityCollection result1 = svc.RetrieveMultiple(query);
            Console.WriteLine(); Console.WriteLine("Query using Query Expression with ConditionExpression and FilterExpression");
            Console.WriteLine("---------------------------------------");
            foreach (var a in result1.Entities)
            {
                Console.WriteLine("Name: " + a.Attributes["ss_name"] + " App Type: " + a.FormattedValues["ss_applicationtype"].ToString());
                return a;
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
    }
}