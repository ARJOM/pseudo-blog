import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import {IconButton, MuiThemeProvider} from '@material-ui/core';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import FirebaseService from "../../services/FirebaseService";

import Home from "../Home/Home";
import {Link} from "react-router-dom";
import {urls} from "../../util/urlUtils";
import MenuIcon from "@material-ui/icons/Menu";
import {Post} from "../Posts/Post";
import Add from "../Add/Add";
import Register from "../Register/Register";
import Login from "../Login/Login";

import {Card, CardContent} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

export default class App extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        FirebaseService.getDataList('posts', (dataReceived) => this.setState({data: dataReceived}))
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar position="static" id="titulo">
                        <Toolbar>

                            <IconButton color="inherit" aria-label="Menu"
                                        component={props =>
                                            <Link to={urls.home.path} {...props}/>}
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Typography type="title" color="inherit">
                                Pseudo-Blog
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    <Card className="card">
                        <CardContent>

                            <Route exact
                                   path={urls.home.path}
                                   render={(props) =>
                                       <Home {...props}/>}
                            />

                            <Route exact
                                   path={urls.post.path}
                                   render={(props) =>
                                       <Post {...props} data={this.state.data}/>}
                            />

                            <Route exact
                                   path={urls.add.path}
                                   render={(props) =>
                                       <Add {...props}/>}
                            />
                            <Route exact
                                   path={urls.register.path}
                                   render={(props) =>
                                       <Register {...props}/>}
                            />
                            <Route exact
                                   path={urls.login.path}
                                   render={(props) =>
                                       <Login {...props}/>}
                            />
                        </CardContent>
                    </Card>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
