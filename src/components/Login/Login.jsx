import React, {Component, Fragment} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import FirebaseService from "../../services/FirebaseService";

export default class Login extends Component {

    submit = (event) => {
        event.preventDefault();

        const {email} = this;
        const {password} = this;

        FirebaseService.login(email, password);
    };

    render() {
        return (
            <Fragment>
                <Typography variant="headline" component="h2">Login</Typography>
                <form onSubmit={this.submit}>
                    <TextField className="input-field"
                               type="email"
                               defaultValue={''}
                               label="Email"
                               required
                               onChange={e => this.email = e.target.value}/>

                    <TextField className="input-field"
                               type="password"
                               defaultValue={''}
                               label="Senha"
                               required
                               onChange={e => this.password = e.target.value}/>
                    <Button type="submit"
                            style={{marginTop: '20px', display: 'inline-block'}}>
                        Entrar
                    </Button>
                </form>
            </Fragment>
        )
    }
}