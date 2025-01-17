package com.qa.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/java/com/qa/features/SellRequest.feature" }, glue = {
		"com.qa.StepDefinition" }, plugin = { "pretty", "html:test-output",
				"json:json_output/cucumber.json" }, monochrome = true, strict = true, dryRun = false)
public class TestRunner {
}
