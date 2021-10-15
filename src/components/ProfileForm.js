/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import axios from "axios";
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

export default function ProfileForm() {
    const [tabs, setTabs] = React.useState(1);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [streetNumber, setStreetNumber] = React.useState("");
    const [streetName, setStreetName] = React.useState("");
    const [city, setCity] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [countryCode, setCountryCode] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");
    
    const [user, setUser] = React.useState([]);
    const [address, setAddress] = React.useState([]);

    React.useEffect(() => {
        const userURL = "http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/users/3";
        axios.get(userURL).then((response) => {
            setUser(response.data[0]);
        });

        const addressURL = "http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/addresses/5";
        axios.get(addressURL).then((response) => {
            setAddress(response.data[0]);
        });
    }, [firstName, lastName, email, streetNumber, streetName, city, region, countryCode, postalCode]);

    function editUserOrAddress() {
        const editedUser = {};
        if (firstName) editedUser.firstName = firstName;
        if (lastName) editedUser.lastName = lastName;
        if (email) editedUser.email = email;

        const editedAddress = {};
        if (streetNumber) editedAddress.streetNumber = streetNumber;
        if (streetName) editedAddress.streetName = streetName;
        if (city) editedAddress.city = city;
        if (region) editedAddress.region = region;
        if (countryCode) editedAddress.countryCode = countryCode;
        if (postalCode) editedAddress.postalCode = postalCode;

        if (editedUser) {
            axios.put("http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/users/3",
                editedUser
            ).then((response) => {
                console.log(response.data);
            });
        }

        if (editedAddress) {
            axios.put("http://ec2-3-23-92-210.us-east-2.compute.amazonaws.com:5000/addresses/5",
                editedAddress
            ).then((response) => {
                console.log(response.data);
            });
        }
    }
    

    if (!user || !address) return "No user";

    return (
        <Card className="card-coin card-plain">
            <CardHeader>
                <h4 className="title">Profile Info</h4>
            </CardHeader>
            <CardBody>
                <Nav
                    className="nav-tabs-primary justify-content-center"
                    tabs
                >
                    <NavItem>
                        <NavLink
                            className={classnames({
                            active: tabs === 1,
                            })}
                            onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                            }}
                            href="#pablo"
                        >
                            Info
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: tabs === 2,
                            })}
                            onClick={(e) => {
                                e.preventDefault();
                                setTabs(2);
                            }}
                            href="#pablo"
                        >
                            Edit
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent
                    className="tab-subcategories"
                    activeTab={"tab" + tabs}
                >
                    <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{user.nameFirst}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{user.nameLast}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Street Number</td>
                                <td>{address.streetNo}</td>
                            </tr>
                            <tr>
                                <td>Street Name</td>
                                <td>{address.streetName1}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{address.city}</td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td>{address.region}</td>
                            </tr>
                            <tr>
                                <td>Country Code</td>
                                <td>{address.countryCode}</td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td>{address.postalCode}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </TabPane>
                    <TabPane tabId="tab2">
                        <Row>
                            <Label sm="3">First Name</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input 
                                    placeholder="First Name" 
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} 
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label sm="3">Last Name</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input 
                                    placeholder="Last Name" 
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} 
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label sm="3">Email</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input 
                                    placeholder="email" 
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label sm="3">Street Name</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input
                                    placeholder="Street Name"
                                    type="text"
                                    value={streetName}
                                    onChange={(e) => setStreetName(e.target.value)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label sm="3">City</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input
                                    placeholder="City"
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label sm="3">Region</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input
                                    placeholder="Region"
                                    type="text"
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label sm="3">Country Code</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input
                                    placeholder="Country Code"
                                    type="text"
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Label sm="3">Postal Code</Label>
                            <Col sm="9">
                            <FormGroup>
                                <Input
                                    placeholder="Postal Code"
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Button
                            className="btn-simple btn-icon btn-round float-right"
                            color="primary"
                            type="submit"
                            onClick={editUserOrAddress}
                        >
                            Save
                        </Button>
                        
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    );
}