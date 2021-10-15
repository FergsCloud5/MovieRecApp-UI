import axios from "axios";
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardImg,
  CardTitle,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default function UserRegistrationForm() {
  const [firstNameFocus, setFirstNameFocus] = React.useState(false);
  const [lastNameFocus, setLastNameFocus] = React.useState(false);
  const [addressFocus, setAddressFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [streetNumber, setStreetNumber] = React.useState("");
  const [streetName, setStreetName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");

  function createUser() {
    axios.post("http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/addresses", {
      streetNo: streetNumber,
      streetName1: streetName,
      city: city,
      region: region,
      countryCode: countryCode,
      postalCode: postalCode,
    }).then((response) => {
      console.log(response.data);
    });

    axios.post("http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/users", {
      nameLast: lastName,
      nameFirst: firstName,
      email: email,
      addressID: 5,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Card className="card-register">
      <CardHeader>
        <CardImg
          alt="..."
          src={require("assets/img/square-purple-1.png").default}
        />
        <CardTitle tag="h4">Register</CardTitle>
      </CardHeader>
      <CardBody>
        <Form className="form">
          <InputGroup
            className={classnames({
              "input-group-focus": firstNameFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-single-02" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="First Name"      
              type="text"
              value={firstName}
              onFocus={(e) => setFirstNameFocus(true)}
              onBlur={(e) => setFirstNameFocus(false)}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": lastNameFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-single-02" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Last Name"      
              type="text"
              value={lastName}
              onFocus={(e) => setLastNameFocus(true)}
              onBlur={(e) => setLastNameFocus(false)}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": emailFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-email-85" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id="email"
              placeholder="Email"
              type="text"
              value={email}
              onFocus={(e) => setEmailFocus(true)}
              onBlur={(e) => setEmailFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": addressFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-lock-circle" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Street Number"
              type="text"
              value={streetNumber}
              onFocus={(e) => setAddressFocus(true)}
              onBlur={(e) => setAddressFocus(false)}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": addressFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-lock-circle" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Street Name"
              type="text"
              value={streetName}
              onFocus={(e) => setAddressFocus(true)}
              onBlur={(e) => setAddressFocus(false)}
              onChange={(e) => setStreetName(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": addressFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-lock-circle" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="City"
              type="text"
              value={city}
              onFocus={(e) => setAddressFocus(true)}
              onBlur={(e) => setAddressFocus(false)}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": addressFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-lock-circle" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Region"
              type="text"
              value={region}
              onFocus={(e) => setAddressFocus(true)}
              onBlur={(e) => setAddressFocus(false)}
              onChange={(e) => setRegion(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": addressFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-lock-circle" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Country Code"
              type="text"
              value={countryCode}
              onFocus={(e) => setAddressFocus(true)}
              onBlur={(e) => setAddressFocus(false)}
              onChange={(e) => setCountryCode(e.target.value)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": addressFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-lock-circle" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Postal Code"
              type="text"
              value={postalCode}
              onFocus={(e) => setAddressFocus(true)}
              onBlur={(e) => setAddressFocus(false)}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </InputGroup>
          <FormGroup check className="text-left">
            <Label check>
              <Input type="checkbox" />
              <span className="form-check-sign" />I agree to the{" "}
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                terms and conditions
              </a>
              .
            </Label>
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter>
        <Button onClick={createUser} className="btn-round" color="primary" size="lg">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
