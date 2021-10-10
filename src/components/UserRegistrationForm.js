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
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [addressFocus, setAddressFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

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
              "input-group-focus": fullNameFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-single-02" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Full Name"
              type="text"
              onFocus={(e) => setFullNameFocus(true)}
              onBlur={(e) => setFullNameFocus(false)}
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
              placeholder="Address"
              type="text"
              onFocus={(e) => setAddressFocus(true)}
              onBlur={(e) => setAddressFocus(false)}
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
              placeholder="Email"
              type="text"
              onFocus={(e) => setEmailFocus(true)}
              onBlur={(e) => setEmailFocus(false)}
            />
          </InputGroup>
          <InputGroup
            className={classnames({
              "input-group-focus": passwordFocus,
            })}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-lock-circle" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Password"
              type="text"
              onFocus={(e) => setPasswordFocus(true)}
              onBlur={(e) => setPasswordFocus(false)}
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
        <Button className="btn-round" color="primary" size="lg">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
