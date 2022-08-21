import { validate } from "class-validator";
import Site from "./Site";

const params = {
  // Causing max length error
  name:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam tortor vitae neque iaculis tincidunt.",
  // Causing not valid email address error
  emailAddress: "invalidemail",
  url: "http://test.com",
  // Causing the required error
  password: "1"
};

const exampleSite = new Site();
exampleSite.name = 'params.name';
exampleSite.emailAddress = params.emailAddress;
exampleSite.url = params.url;
exampleSite.password = params.password;
exampleSite.minName = 40

validate(exampleSite).then(errors => {
    if (errors.length > 0) {
        console.log("validation failed. errors: ", errors.map((e: any) => ({
        prop: e.property,
        breaks: e.constraints
        })));
    } else {
        console.log("validation succeed");
    }
});
