package com.vytrack.stepdefinitions;

import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtilities;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefinitions {

    LoginPage loginPage=new LoginPage ();

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        System.out.println ( "Open login Page" );

    }

    @When("user logs in as a sales manager")
    public void user_logs_in_as_a_sales_manager() {
        System.out.println ( "Login as Store Manager" );
        loginPage.login ();
    }

    @Then("user should verify that title is a Dashboard")
    public void user_should_verify_that_title_is_a_Dashboard() {
        System.out.println ( "Verify that title is a Dashboard" );
        BrowserUtilities.waitForPageToLoad ( 10 );
        BrowserUtilities.wait ( 2 );
        Assert.assertEquals ( "Dashboard", Driver.getDriver ().getTitle () );

    }

    //Login DDT
    @Given("users is on the login page")
    public void users_is_on_the_login_page() {
        System.out.println ( "Open login Page" );
    }

    @When("user enters {string} username and {string} password")
    public void user_enters_username_and_password(String string, String string2) {
        System.out.printf ( "Login with user name %s and %s password\n", string, string2 );
        loginPage.login ( string, string2 );

    }

    @Then("user name should be {string}")
    public void user_name_should_be(String string) {
        BrowserUtilities.waitForPageToLoad ( 10 );
        BrowserUtilities.wait ( 2 );
        Assert.assertEquals ( "Dashboard", Driver.getDriver ().getTitle () );
    }

}


