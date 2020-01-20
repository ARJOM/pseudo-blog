import React, {useCallback, Fragment} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import FirebaseService from "../../services/FirebaseService";
import {firebaseImpl as app} from "../../util/firebaseUtils";


const Register = ({ history }) => {

    const handleRegister = useCallback(async event => {
        event.preventDefault();
        const { name, email, password } = event.target.elements;
        try {
            await app.auth().createUserWithEmailAndPassword(email.value, password.value);
            await FirebaseService.pushData('users', {
                name: name.value,
                email: email.value
            });
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <Fragment>
            <Typography variant="headline" component="h2">Cadastro</Typography>
            <form onSubmit={handleRegister}>
                <TextField className="input-field"
                           type="text"
                           name="name"
                           defaultValue={''}
                           label="Nome"
                           required/>
                <TextField className="input-field"
                           type="email"
                           name="email"
                           defaultValue={''}
                           label="Email"
                           required/>
                <TextField className="input-field"
                           type="password"
                           name="password"
                           defaultValue={''}
                           label="Senha"
                           required/>
                <Button type="submit"
                        style={{marginTop: '20px', display: 'inline-block'}}>
                    Cadastrar
                </Button>
            </form>
        </Fragment>
    )
};
export default Register