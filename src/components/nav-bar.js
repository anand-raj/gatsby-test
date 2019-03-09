import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Strong = ({ children }) => {
    return (<strong><div style={{ textTransform: "uppercase", fontSize: 14, width: 100 }}>
        {children}
    </div></strong>)
}

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/" style={{ color: "red" }}><strong>GATSBY</strong></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/LinkOne/"><Strong>LinkOne</Strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/LinkTwo/"><Strong>LinkTwo</Strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/LinkThree/"><Strong>LinkThree</Strong></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <Strong><DropdownToggle nav caret>
                                    Options
                                </DropdownToggle></Strong>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Option 3
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}