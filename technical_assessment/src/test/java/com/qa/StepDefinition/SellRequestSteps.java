package com.qa.StepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class SellRequestSteps {

	private RequestSpecification request;
	private Response response;

	String URL = "Kindly enter URL here";
	String WA_KEY = "Kindly enter Wa_key here";

	private RequestSpecification Authentication() {
		return given().param("wa_key", WA_KEY);
	}

	@Given("User has to select the car detail from list")
	public void User_has_to_select_the_car_detail_from_list(String locale) {

		request = Authentication();

	}

	@When("User select the car make")
	public void User_select_the_car_make(String locale) {
		request = request.param("locale", locale);
		response = request.given().get(URL + "/manufacturer");

	}

	@And("User select the car Model")
	public void User_select_the_car_Model(String locale, String manufacturer) {
		request = request.param("manufacturer", manufacturer).param("locale", locale);
		response = request.given().get(URL + "/main-types");

	}

	@And("User select the manufacture year")
	public void User_select_the_manufacture_year(String locale, String manufacturer, String mainType) {
		request = request.param("locale", locale).param("manufacturer", manufacturer).param("main-type", mainType);
		response = request.given().get(URL + "/built-dates");

		String body = response.getBody().asString();
		assertEquals("2147483647", response.jsonPath().getString("pageSize"));
		assertEquals("0", response.jsonPath().getString("page"));
		assertEquals("1", response.jsonPath().getString("totalPageCount"));
		body.contains("\"wkda\":");
		assertEquals(200, response.getStatusCode());
	}

	@Then("On submitting user recieve offer from Auto1")
	public void On_submitting_user_recieve_offer_from_Auto1() {

	}
}
