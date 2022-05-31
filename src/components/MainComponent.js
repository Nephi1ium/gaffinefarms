import React, {Component} from "react";
import {Card, CardBody, CardTitle, Modal, Label, Jumbotron, Navbar, NavbarBrand, NavItem, NavbarToggler, NavLink} from 'reactstrap';


class Main extends Component{

    constructor(props) {
        super(props);


        };
        render() {
            return(
                <React.Fragment>
                    <Label > MORE INFO COMING SOON </Label>
                    <Navbar
                    color="dark"
                    expand="md">
                        <NavbarBrand
                        className="me-auto"
                        href="#">
                        </NavbarBrand>
                            <NavbarToggler />
                            <NavItem>
                            <NavLink href="/HomeComponent">
                                Home
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/AboutComponent">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/GalleryComponent">
                                    Gallery
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/ContactComponent">
                                    Contact
                                </NavLink>
                            </NavItem>


                    </Navbar>
                </React.Fragment>
            )
        }

    }


export default Main;