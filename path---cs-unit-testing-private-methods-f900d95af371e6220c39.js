webpackJsonp([0xffc4014a1be7],{348:function(e,t){e.exports={data:{markdownRemark:{html:'<p>When a developer writes a piece of code, he(or she) would like to verify and validate that what was just written by him is exactly what he intended to do. How can he be sure ? </p>\n<p>One of the possibilities is to run(execute) the code and see the output, which is possible when if its some small program/project. But when you are working on a huge project (e.g. a project with some back ends talking to a database or talking over the wire, a logical layer and multiple GUIs which may be using other assemblies) loading up the whole project and running it to verify if a small functionality is working isn\'t sensible. This is due to the facts that the project itself may take a long time to load and execute, it may require loading and linking multiple assemblies(.dll) which will take up resources and its an expensive operation. Wasting so much time and resources for a small functionality test is not worth it. And its definitely not sensible when you have to keep testing repetitively.</p>\n<p>Instead. a developer can test a piece of his code by writing Unit Tests for that function. Its pretty simple when you are testing public methods.Following is a format for a normal public method of a public class being tested:</p>\n<p>If you don\'t know what is a Unit Test, please take a look <a href="http://en.wikipedia.org/wiki/Unit_testing">here</a></p>\n<p>For e.g. :</p>\n<pre><code class="language-cs">//The Class you want to test\n \npublic class foo\n{\n    .\n    .\n    .\n    //The PUBLIC method you want to test\n    public int bar(int c)\n    {\n        //Logic and result returned\n    }\n}\n \n//In the test class\npublic class fooTest\n{\n    //System Under Test (Class foo) whose method needs to be tested\n    private static foo _sut = new foo();\n    .\n    .\n    //Test for bar\n    //TestMethod is the method attribute which tells CLR that this is a test\n    //method and not a normal method\n    [TestMethod]\n    public void barTest()\n    {\n        //Arrange (Any arrangement which might be needed before calling the method\n        //to test\n \n        //Act (The actual call)\n        int y = _sut.bar(x);\n \n        //Assert for \'y\' (Assert the result of the method under test)\n    }\n}\n</code></pre>\n<p>If you don\'t know what is a [TestMethod] attribute, please look <a href="http://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.testmethodattribute%28VS.80%29.aspx">here</a>.</p>\n<p>The above format/set up is only possible if its a public method you are testing. Usually, it makes sense for the developer to test only the public methods. Private helper methods aren\'t usually tested. </p>\n<p>But, there are times when a developer would like to write tests for a private method. This is possible when the private method contains some critical logic which plays an important part in many other public methods. For developer\'s satisfaction and verification testing private methods may be needed. You can use the built-in MSTest private method testing methods which creates an accessor to the private methods,but that accessor is not compatible to Team Build. In that case, the above set up will require modification. Two different scenarios depending on if you are testing just Private methods or Private Static methods.</p>\n<p>If you don\'t know what is MSTest, please take a look <a href="http://en.wikipedia.org/wiki/MSTest">here</a>.</p>\n<p>If you don\'t know what is Team Build, please take a look <a href="http://en.wikipedia.org/wiki/Team_Foundation_Server">here</a>.</p>\n<p>Following is the scenario for a Private Method:</p>\n<pre><code class="language-cs">//The Class you want to test\n \npublic class foo\n{\n    .\n    .\n    .\n    //The PRIVATE method you want to test\n    private int bar(int c)\n    {\n        //Logic and result returned\n    }\n}\n \n//In the test class\npublic class fooTest\n{\n    .\n    .\n    .\n    //Test for bar\n    //TestMethod is the method attribute which tells CLR that this is a test\n    //method and not a normal method\n    [TestMethod]\n    public void barTest()\n    {\n        //Arrange (Any arrangement which might be needed before calling the method\n        //to test\n \n        //Act (The actual call)\n        //Creating an instance of PrivateObject class with the instance of the class\n        //whose private method needs to be tested.\n        PrivateObject privateObject = new PrivateObject(new foo());\n \n        //Invoking the private method\n        int y = privateObject.Invoke("bar", intParameter) as Integer;\n \n        //Assert for \'y\' (Assert the result of the method under test)\n    }\n}\n</code></pre>\n<p>If you don\'t know about PrivateObject, please take a look <a href="http://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.privateobject%28VS.80%29.aspx">here</a></p>\n<p>The private method\'s name has to be spelled correctly followed by correct no. of parameter. The invocation of the method returns you back an Object which needs to be cast to the expected type.</p>\n<p>To test Private Static methods replace the above PrivateObject instance creation with PrivateType as following:</p>\n<pre><code class="language-cs">PrivateType privateType = new PrivateType(typeof(foo));\n</code></pre>\n<p>and invoke the test method like this :</p>\n<pre><code class="language-cs">Integer y = (Integer)privateType.InvokeStatic("bar",int someParameter);\n</code></pre>\n<p>Unit testing has become really popular with the practice of TDD (Test Driven Development).</p>\n<p>If you don\'t know about the PrivateType class, please take a look <a href="http://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.privatetype%28VS.80%29.aspx">here</a>.</p>\n<p>If you don\'t know what is TDD, please take a look <a href="http://en.wikipedia.org/wiki/Test-driven_development">here</a>.</p>\n<p>Unit tests also act as rules as to what should be expected from a method. Also its a great way of documenting what is expected from the method. A new developer can just look at the tests and see what is to be expected from the method under test.</p>',frontmatter:{date:"Monday May 17 2010 06:42:00 PM",path:"/cs_unit_testing_private_methods",title:"C# : Unit Testing Private Methods",keywords:"",description:"",image_url:"",image_alt:"",image_width:"",image_height:""}}},pathContext:{}}}});
//# sourceMappingURL=path---cs-unit-testing-private-methods-f900d95af371e6220c39.js.map