webpackJsonp([68285458588220],{356:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Sharepoint : Custom redirection HttpModule based on UserProfile Property</h1>\n<p>When a request is made to an ASP.NET application, an instance of HttpApplication class is made to process this request. One instance of the HttpApplication class can process multiple requests during its lifetime, however only one at a time.</p>\n<p>When the request is being processed, the application raises a chain of events on to which an implementation of IHttpModule can be hooked on.</p>\n<p>If you don’t know about HttpApplication class and the chain of events, please look <a href="http://msdn.microsoft.com/en-us/library/system.web.httpapplication.aspx">here</a>.</p>\n<p>If you don’t know about IHttpModule interface, please look <a href="http://msdn.microsoft.com/en-us/library/system.web.ihttpmodule.aspx">here</a>.</p>\n<p>Assuming that you are developing for Sharepoint 2007.</p>\n<p>Install WSPBuilder on Visual Studio from <a href="http://wspbuilder.codeplex.com/">here</a>.</p>\n<ol>\n<li>Create new WSPBuilder Project in Visual Studio.</li>\n<li>Add Sharepoint Resources : Microsoft.Office.Server.dll and Microsoft.Sharepoint.dll</li>\n<li>Write a class which implement interface IHttpModule. </li>\n<li>"PostAuthenticateRequest" is a EventHandler to which you can add an event (delegate) which here is fulfilled by OnAuthenticationCustomRedirect.</li>\n</ol>\n<p>The HttpModule’s functionality is to redirect a user based on user’s chosen user profile property. To redirect the user or to write in the event logs on the server, the commands need to be run with elevated privileges and that is exactly what the private functions do.</p>\n<p>The redirection happens only if the request is coming from a different host. If surfing within the website the redirection will not take place. This is done by comparing the hosts of the incoming url from current request and the previous url from previous request.</p>\n<p>If you don\'t know about accessing previous urls, please look <a href="http://msdn.microsoft.com/en-us/library/system.web.httprequest.urlreferrer.aspx">here</a>.</p>\n<p>If the Sharepoint user doesn’t exist and <i>userProfileManager.GetUserProfile(“name”)</i> is called. An exception is thrown. This is the reason why the module is under try-catch block. If such an error occurs then an error is recorded in the Event Log on the server.</p>\n<p>By comparing the value of the properties, we can then redirect the user in a customized manner.</p>\n<pre><code class="language-cs">public class RedirectModule : IHttpModule\n{\n\n#region Implementation of IHttpModule\n/// &#x3C;summary>\n/// Initializes a module and prepares it to handle requests.\n/// &#x3C;/summary>\n/// &#x3C;param name="context">An &#x3C;see cref="T:System.Web.HttpApplication"> that provides access to the methods, properties, and events common to all application objects within an ASP.NET application \npublic void Init(HttpApplication context)\n{\n//Adding an event handler to handle and redirect the incoming request to corresponding address\ncontext.PostAuthenticateRequest += OnAuthenticationCustomRedirect;\n}\n \n/// &#x3C;summary>\n/// Disposes of the resources (other than memory) used by the module that implements &#x3C;see cref="T:System.Web.IHttpModule">.\n/// &#x3C;/see>&#x3C;/summary>\npublic void Dispose()\n{\n \n}\n \n#endregion Implementation of IHttpModule\n \n#region Redirection based on User Profile Module\n \nprivate static void OnAuthenticationCustomRedirect(object sender,EventArgs eventArgs)\n{\n//The user who is trying to access tabnet\nSPUser spUser = null;\n \ntry\n{\n//Getting the HttpRequest\nHttpRequest request = ((HttpApplication) sender).Request;\n \n//Host Domain\nString requestUrlDomain = "http://" + request.Url.Host;\n \n//Previous Host Domain\nString previousRequestUrlDomain = String.Empty;\n\nif(request.UrlReferrer != null)\n{\npreviousRequestUrlDomain = "http://" + request.UrlReferrer.Host;\n}\n \n//If coming from within same host, no redirection required\nif(!requestUrlDomain.Equals(previousRequestUrlDomain))\n{\n//Redirect only if going to the home page\nif (request.Url.ToString().Equals(requestUrlDomain + "originalhomepage.aspx"))\n{\n//Getting the HttpContext\nHttpContext context = ((HttpApplication)sender).Context;\n \n//Creating SPSite object\nSPSite spSite;\n//Creating SPWeb object\nSPWeb spWeb;\n \n//Checking for the current SPContext\nif (SPContext.Current != null)\n{\n//Getting the SPSite\nspSite = SPContext.Current.Site;\n//Getting the SPWeb\nspWeb = spSite.RootWeb;\n//Get the SPUser\nspUser = spWeb.CurrentUser;\n \n//Creating the UserProfileManager for the site\nUserProfileManager userProfileManager = new UserProfileManager(ServerContext.GetContext(spSite));\n \n//Getting the user profile from the name using the UserProfileManager\nUserProfile userProfile = userProfileManager.GetUserProfile(spUser.LoginName);\n \n//Getting all the properties from the UserProfileManager\nPropertyCollection propertyCollection = userProfileManager.Properties;\n//Filtering out the single property which we are interested in\nProperty property = propertyCollection.GetPropertyByName("PropertyName");\n \n//Finding that property in the user profile for value\nif (userProfile[property.Name].Value != null)\n{\nString propertyString = userProfile[property.Name].Value.ToString();\n \n//Different actions depending on hosts of each user\nswitch (propertyString.ToUpper())\n{\ncase "property value 1":\ncase "property value 2":\n//Write the information with the user login name to eventlog\nWriteToEventLog("OnAuthenticationCustomRedirect", spUser.LoginName + " has been redirected",EventLogEntryType.Information);\n//Actual redirection\nResponseRedirectElevatedPriviliges(context, requestUrlDomain + "newhomepage.aspx");\nbreak;\n//anything else no redirection\ndefault:\nbreak;\n}\n}\n}\n}\n}\n}\ncatch (Exception exception)\n{\nString message = "Exception Stack Trace : " + exception.StackTrace;\n \nif(spUser!=null)\n{\nmessage += " User Login Name : " + spUser.LoginName;\n}\n \n//Write the error with stack trace to the event log\nWriteToEventLog("OnAuthenticationCustomRedirect",message, EventLogEntryType.Error);\n}\n}\n \n#endregion Redirection based on User Profile Module\n \n#region Methods to Run With Elevated Priviliges\n \n/// &#x3C;summary>\n/// This method runs with elevated privileges which writes a log entry to eventlog\n/// &#x3C;/summary>\n/// &#x3C;param name="source">\n/// &#x3C;param name="message">\n/// &#x3C;param name="eventLogEntryType">\nprivate static void WriteToEventLog(String source, String message, EventLogEntryType eventLogEntryType)\n{\nSPSecurity.RunWithElevatedPrivileges(\n() => EventLog.WriteEntry(source, message, eventLogEntryType));\n}\n \n/// &#x3C;summary>\n/// This method runs with elevated privileges which redirects the user to the new URL via the response.\n/// &#x3C;/summary>\n/// &#x3C;param name="context">\n/// &#x3C;param name="url">    \nprivate static void ResponseRedirectElevatedPriviliges(HttpContext context,String url)\n    {\n        SPSecurity.RunWithElevatedPrivileges(() => context.Response.Redirect(url, false));\n    }\n \n    #endregion Methods to Run With Elevated Priviliges\n}\n</code></pre>',frontmatter:{date:"April 26, 2010",path:"/sharepoint_custom_redirection_httpmodule",title:"Sharepoint : Custom redirection HttpModule based on UserProfile Property",keywords:"",description:"",image:"",image_alt:"",image_width:"",image_height:""}}},pathContext:{}}}});
//# sourceMappingURL=path---sharepoint-custom-redirection-httpmodule-e4f33623ed1ac3a4d442.js.map