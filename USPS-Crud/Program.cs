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
            //  CreateAccount();
            RetrieveMultipleAccounts();
            // UpdateAccount();
            Console.Read();
        }
        public static void CreateAccount()
        {
            Entity entAccount = new Entity("account");
            entAccount.Attributes["name"] = "Smoothstakaccount 1234";
            svc.Create(entAccount);
        }
        public static void UpdateAccount()
        {
            Entity entAccount = new Entity("account");
            entAccount.Id = new Guid("Smoothstakaccount 123");
            entAccount.Attributes["name"] = "updateSmoothstakaccount 123";
            svc.Update(entAccount);
        }
        public static void DeleteAccount()
        {
            svc.Delete("account", new Guid());
        }
        public static void RetrieveAccount()
        {
            svc.Retrieve("account", new Guid(), new Microsoft.Xrm.Sdk.Query.ColumnSet(new string[] { "name" }));
        }
        public static void RetrieveMultipleAccounts()
        {
            string strFetchXML = @"<fetch distinct='false' mapping='logical' output-format='xml-platform' version='1.0'>
                                        <entity name='account'>
                                            <attribute name='name'/>
                                            <attribute name='primarycontactid'/>
                                            <attribute name='telephone1'/>
                                            <attribute name='accountid'/>
                                                <order descending='false' attribute='name'/>
                                            <filter type='and'>
                                                <condition attribute='createdon' operator='today'/>
                                            </filter>
                                        </entity>
                                    </fetch>";
            EntityCollection entAccountCollection = svc.RetrieveMultiple(new FetchExpression(strFetchXML));
            for (int intCount = 0; intCount < entAccountCollection.Entities.Count; intCount++)
            {
                Console.WriteLine("Name of the Account : " + entAccountCollection.Entities[intCount].Attributes["name"].ToString());
            }
        }
    }
}