import {Button, TextField, Typography, TextareaAutosize} from "@material-ui/core";
import React, {Component} from "react";
import FirebaseService from "../../services/FirebaseService";
import {withRouter} from "react-router-dom";

import "./Add.css"

class Add extends Component {

    submit = (event) => {
        event.preventDefault();

        let data = new Date();
        let dia = data.getDate();
        let mes = data.getMonth();
        let hora = data.getHours();
        let min = data.getMinutes();
        let ano4 = data.getFullYear();
        let str_data = dia + '/' + (mes + 1) + '/' + ano4;
        let str_hora = hora + ':' + min;
        let now = str_data + ", " + str_hora;


        const {title} = this;
        const {content} = this;
        const date = now;
        const author = FirebaseService.getNome();


        FirebaseService.pushData('posts', {
            title,
            content,
            date,
            author,
        });

        // this.props.history.push(urls.data.path);

    };

    render = () => (<React.Fragment>

        <Typography variant="headline" component="h2">Novo Post</Typography>
        <form onSubmit={this.submit}>

            <TextField className="input-field"
                       type="text"
                       defaultValue={''}
                       label="Título"
                       required
                       onChange={e => this.title = e.target.value}/>


            <TextareaAutosize className="input-field"
                              type="text"
                              required
                              onChange={e => this.content = e.target.value}/>

            <Button type="submit"
                    style={{marginTop: '20px', display: 'inline-block'}}>
                Publicar
            </Button>
        </form>
    </React.Fragment>)
}

export default withRouter(Add);