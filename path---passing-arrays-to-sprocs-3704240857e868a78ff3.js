webpackJsonp([0xe6cd612a032d],{355:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Passing "arrays" to stored procedures - XML is the answer !</h1>\n<p>I had come across a situation where I had my code behind in c# making a call to a stored procedure in Transact-SQL in a database to return a result set based upon the Id coming in as SqlParameter(Which is a pretty common thing ... right ?!)\nAlright, lets make this interesting, what if the c# code behind makes a call to a stored procedure which would return a result set given \'n\' no. of Ids. For each of these n ids, I wanted the stored procedure to take each one of them and get a result set, all the result sets are then UNIONed together and returned as one result set. I wanted the parameters to the stored procedures work something like passing an array or like MethodName(params int[] parameterName)\nOne of the ways which this can be done, which I found really convenient is passing in XML as parameter to the stored procedure and then using "IN" in the SELECT statement.</p>\n<pre><code class="language-sql">ALTER PROCEDURE [dbo].[GetResultsUsingIds]\n@ids_xml Text\nAS\nBEGIN\n-- SET NOCOUNT ON added to prevent extra result sets from\n-- interfering with SELECT statements.\nSET NOCOUNT ON;\n \nDECLARE @hDoc int\n \nexec sp_xml_preparedocument @hDoc OUTPUT, @ids_xml\n \nBEGIN\n \nSELECT\n*\nFROM studenttable\nWHERE student_id IN\n(SELECT Id FROM OPENXML(@hDoc,\'/Ids/StudentId\',1) WITH(Id int))\n \nUNION ALL\n \nSELECT\n*\nFROM studenttable\nWHERE section_id IN\n(SELECT Id FROM OPENXML(@hDoc,\'/Ids/SectionId\',1) WITH(Id int))\n \nEND\n \nEXEC sp_xml_removedocument @hDoc\n \nEND\n</code></pre>\n<p>The input parameter for the above stored procedure may look like :</p>\n<p>ids_xml :</p>\n<pre><code class="language-xml">&#x3C;ids>\n&#x3C;studentid id="1">&#x3C;/studentid>\n&#x3C;studentid id="2">&#x3C;/studentid>\n&#x3C;sectionid id="7">&#x3C;/sectionid>\n&#x3C;sectionid id="8">&#x3C;/sectionid>\n&#x3C;/ids>\n</code></pre>\n<p>Will return from student table:</p>\n<p>all result sets with student<em>Id as 1 + all result sets with student</em>Id as 2 + all result sets with section<em>Id as 7 + all result sets with section</em>Id as 8</p>\n<h2>sp<em>xml</em>preparedocument and sp<em>xml</em>removedocument</h2>\n<p><i>"Reads the XML text provided as input, parses the text by using the MSXML parser (Msxmlsql.dll), and provides the parsed document in a state ready for consumption. This parsed document is a tree representation of the various nodes in the XML document: elements, attributes, text, comments, and so on.</p>\n<p>sp<em>xml</em>preparedocument returns a handle that can be used to access the newly created internal representation of the XML document. This handle is valid for the duration of the session or until the handle is invalidated by executing sp<em>xml</em>removedocument."</i> - MSDN</p>\n<h2>OPENXML(@hDoc,\'/Ids/StudentId\',1)</h2>\n<p>hDoc is the document handle of the internal representation of an XML document. The internal representation of an XML document is created by calling sp<em>xml</em>preparedocument.</p>\n<p>\'/Ids/StudentId\' is the XPath pattern used to identify the nodes (in the XML document whose handle is passed in the idoc parameter) to be processed as rows.</p>\n<p>1 indicates the mapping that should be used between the XML data and the relational rowset, and how the spill-over column should be filled. flags is an optional input parameter, and can be one of the values mentioned in the next section.</p>\n<h2>Byte Value Description</h2>\n<p>0 : Defaults to attribute-centric mapping.</p>\n<p>1 : Use the attribute-centric mapping.\nCan be combined with XML_ELEMENTS; in which case, attribute-centric mapping is applied first, and then element-centric mapping is applied for all columns not yet dealt with.</p>\n<p>2 : Use the element-centric mapping.Can be combined with XML_ATTRIBUTES; in which case, attribute-centric mapping is applied first, and then element-centric mapping is applied for all columns not yet dealt with.</p>\n<p>8 : Can be combined (logical OR) with XML<em>ATTRIBUTES or XML</em>ELEMENTS.In context of retrieval, this flag indicates that the consumed data should not be copied to the overflow property @mp:xmltext.</p>\n<p>For more description of OPENXML() see :\n<a href="http://msdn.microsoft.com/en-us/library/aa276847(SQL.80).aspx">http://msdn.microsoft.com/en-us/library/aa276847(SQL.80).aspx</a></p>',frontmatter:{date:"September 07, 2010",path:"/passing_arrays_to_sprocs",title:"Passing arrays to stored procedures - XML is the answer !"}}},pathContext:{}}}});
//# sourceMappingURL=path---passing-arrays-to-sprocs-3704240857e868a78ff3.js.map