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
import classnames from "classnames";
import React from "react";
// javascript plugin used to create scrollbars on windows
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default function AdminTable() {
    const [users, setUsers] = React.useState([]);
    const [userIDFocus, setuserIDFocus] = React.useState(false);
    const [searchedUserID, setSearchedUserID] = React.useState("");
    
    React.useEffect(() => {
        const baseURL =  "https://jsonplaceholder.typicode.com/users";
        axios.get(baseURL).then((response) => {
            setUsers(response.data);
        });
    }, []);

    function deleteUser(userID) {
        console.log("User ID");
        console.log(userID);
        const deleteURL = "https://jsonplaceholder.typicode.com/users/" + userID;
        console.log(deleteURL);
        axios
            .delete(deleteURL)
            .then((response) => {
                console.log(response.data);
            });
    };

    function searchUser(userID) {
        console.log("User ID");
        console.log(userID);
        const searchUserURL = "https://jsonplaceholder.typicode.com/users/" + userID;
        axios
            .get(searchUserURL)
            .then((response) => {
                setUsers([response.data]);
            });
    };

    function showUsers() {
        const URL = "https://jsonplaceholder.typicode.com/users/";
        axios
            .get(URL)
            .then((response) => {
                setUsers(response.data);
            });
    };
    
    if (!users[0]) return "No Users";

    return (
        <div>
            <h4 className="title">Users</h4>
            <Form className="form">
                <InputGroup className={classnames({
                    "input-group-focus": userIDFocus,
                    })}>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="UserID"
                        type="text"
                        value={searchedUserID}
                        onFocus={(e) => setuserIDFocus(true)}
                        onBlur={(e) => setuserIDFocus(false)}
                        onChange={(e) => setSearchedUserID(e.target.value)}
                    />
                </InputGroup>
                <Button onClick={() => searchUser(searchedUserID)} className="btn-round" color="primary" size="md">
                    Search
                </Button>
                <Button onClick={() => showUsers()} className="btn-round" color="primary" size="md">
                    Show all
                </Button>
            </Form>
            <Card className="card-coin card-plain">
                <CardBody>
                    <Form>
                    <Table className="tablesorter" responsive>
                        <thead className="text-primary">
                            <tr>
                                <th className="header">userID</th>
                                <th className="header">First Name</th>
                                <th className="header">Last Name</th>
                                <th className="header">Email</th>
                                <th className="header">Address</th>
                                <th className="header">Address</th>
                                <th className="header">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user => 
                                <tr>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>name Last </td>
                                    <td>{user.email}</td>
                                    <td>address</td>
                                    <td>{user.id}</td>
                                    <td>
                                        <Button onClick={() => deleteUser(user.id)} className="btn-round" color="primary" size="sm">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}