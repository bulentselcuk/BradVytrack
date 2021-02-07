package com.vytrack.pages;

import com.vytrack.utilities.BrowserUtilities;
import com.vytrack.utilities.ConfigurationReader;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{

    // Finding WebLocators

    @FindBy(id="prependedInput")
    public WebElement username;
    @FindBy(id="prependedInput2")
    public WebElement password;
    @FindBy(id="_submit")
    public WebElement login;

    public void login() {
        username.sendKeys(ConfigurationReader.getProperty("store_manager"));
        password.sendKeys(ConfigurationReader.getProperty("password"), Keys.ENTER);
        BrowserUtilities.waitForPageToLoad(10);
        BrowserUtilities.wait(3);
    }
    public void login(String usernameValue, String passwordValue) {
        username.sendKeys ( usernameValue );
        password.sendKeys ( passwordValue, Keys.ENTER );
        BrowserUtilities.waitForPageToLoad ( 10 );
        BrowserUtilities.wait ( 3 );
    }
}
