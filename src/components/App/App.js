import React, {Component} from 'react';
import './App.css';

import {MuiThemeProvider} from '@material-ui/core';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import FirebaseService from "../../services/FirebaseService";

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
    FirebaseService.getDataList('posts', (dataReceived) =>    this.setState({data: dataReceived}))
  }

  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <React.Fragment>
            <AppBar position="static">
              <Toolbar>
                <Typography type="title" color="inherit">
                  My Awesome React App
                </Typography>
              </Toolbar>
            </AppBar>
          </React.Fragment>
        </MuiThemeProvider>
    );
  }
}
