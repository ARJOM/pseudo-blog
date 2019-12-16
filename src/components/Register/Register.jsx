import React, {Component, Fragment} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import FirebaseService from "../../services/FirebaseService";

export default class Register extends Component{

    submit = (event) => {
        event.preventDefault();

        const {name} = this;
        const {email} = this;
        const {password} = this;
        FirebaseService.register(email, password);
        FirebaseService.pushData('users', {
            name: name,
            email: email
        });
    };

    render() {
        return(
            <Fragment>
                <Typography variant="headline" component="h2">Cadastro</Typography>
                <form onSubmit={this.submit}>
                    <TextField className="input-field"
                               type="text"
                               defaultValue={''}
                               label="Nome"
                               required
                               onChange={e => this.name = e.target.value}/>
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
                        Cadastrar
                    </Button>
                </form>
            </Fragment>
        )
    }
}