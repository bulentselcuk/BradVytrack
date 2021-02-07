package com.vytrack.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = "com/vytrack/stepdefinitions",
        features = "src/test/resources",
        dryRun = false,
        tags = "@scenario_outline",
        plugin = {
                "html:target/default-report",
                "json:target/cucumber-report.json",
                "rerun:target/rerun.txt"
        }

)
public class CucumberRunner {


}
