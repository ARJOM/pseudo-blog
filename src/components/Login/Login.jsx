import React, {Fragment, useCallback, useContext} from "react";
import { withRouter, Redirect } from "react-router";
import {Button, TextField, Typography} from "@material-ui/core";
import {firebaseImpl as app} from "../../util/firebaseUtils";
import {AuthContext} from "../../util/Auth";

const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
        return (
            <Fragment>
                <Typography variant="headline" component="h2">Login</Typography>
                <form onSubmit={handleLogin}>
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
                        Entrar
                    </Button>
                </form>
            </Fragment>
        )
};
export default withRouter(Login);