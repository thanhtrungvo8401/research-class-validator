import { IsEmail, IsNotEmpty, IsUrl, MaxLength } from "class-validator";

interface ISite {
  name: string;
  url: string;
  emailAddress: string;
  password: string;
}

export default class Site implements ISite {
  @IsNotEmpty({
    message: "Name is required.",
  })
  @MaxLength(100, {
    message: "Name must be shorter than or equal to $constraint1 characters.",
  })
  public name!: string;

  @IsNotEmpty({
    message: "Url is required.",
  })
  @IsUrl(undefined, {
    message: "Url must be a URL.",
  })
  @MaxLength(1000, {
    message: "Url must be shorter than or equal to $constraint1 characters.",
  })
  public url!: string;

  @IsNotEmpty({
    message: "Email address is required.",
  })
  @IsEmail(undefined, {
    message: "Email address must be an email address.",
  })
  @MaxLength(100, {
    message:
      "Email address must be shorter than or equal to $constraint1 characters.",
  })
  public emailAddress!: string;

  @IsNotEmpty({
    message: "Password is required.",
  })
  @MaxLength(100, {
    message:
      "Password must be shorter than or equal to $constraint1 characters.",
  })
  public password!: string;

  // constructor(
  //   site: ISite = {
  //     name: "",
  //     password: "",
  //     url: "",
  //     emailAddress: ""
  //   }
  // ) {
  //   this.name = site.name;
  //   this.url = site.url;
  //   this.emailAddress = site.emailAddress;
  //   this.password = site.password;
  // }
}
