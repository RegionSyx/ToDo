import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

export class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            drawerOpen: false,
        };
    }

    render() {
        return <div>
            <AppBar
                title="ToDo"
                onLeftIconButtonTouchTap={() => this.setState({drawerOpen: true})}
                iconElementRight={
                    <IconMenu iconButtonElement={<IconButton><MoreVertIcon/></IconButton>} >
                        <MenuItem primaryText="Logout" onClick={this.props.logout}/>
                    </IconMenu>
                }
            />
            <Drawer
                docked={false}
                open={this.state.drawerOpen}
                onRequestChange={(open) => this.setState({drawerOpen: open})}
            >
                    <MenuItem
                        primaryText="Home"
                        containerElement={<Link to='/home' />}
                        onClick={() => this.setState({drawerOpen: false})}
                    />
                    <Divider />
                    <Subheader>Apps</Subheader>
                    <MenuItem
                        primaryText="GitHub"
                        containerElement={<Link to='/settings/github' />}
                        onClick={() => this.setState({drawerOpen: false})}
                    />
            </Drawer>
        </div>
    }
}

let selectState = state => { return { }; }
let selectProps = { logout }

export default withRouter(connect(selectState, selectProps)(Navigation));
