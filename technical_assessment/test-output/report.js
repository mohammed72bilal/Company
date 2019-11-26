$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/qa/features/SellRequest.feature");
formatter.feature({
  "name": "Car sell request in Auto1.com",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User need to recieve sell request from company",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User has to select the car detail from list",
  "keyword": "Given "
});
formatter.match({
  "location": "SellRequestSteps.User_has_to_select_the_car_detail_from_list(String)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Step [User has to select the car detail from list] is defined with 1 parameters at \u0027com.qa.StepDefinition.SellRequestSteps.User_has_to_select_the_car_detail_from_list(String) in file:/home/priya/Downloads/Auto1-master/target/test-classes/\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: User has to select the car detail from list\n\tat cucumber.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:84)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:36)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\n",
  "status": "failed"
});
formatter.step({
  "name": "User select the car make",
  "keyword": "When "
});
formatter.match({
  "location": "SellRequestSteps.User_select_the_car_make(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the car Model",
  "keyword": "And "
});
formatter.match({
  "location": "SellRequestSteps.User_select_the_car_Model(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the manufacture year",
  "keyword": "And "
});
formatter.match({
  "location": "SellRequestSteps.User_select_the_manufacture_year(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "On submitting user recieve offer from Auto1",
  "keyword": "Then "
});
formatter.match({
  "location": "SellRequestSteps.On_submitting_user_recieve_offer_from_Auto1()"
});
formatter.result({
  "status": "skipped"
});
});