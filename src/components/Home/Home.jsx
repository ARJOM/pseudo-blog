import {urls} from "../../util/urlUtils";
import {Button, Typography} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

export default () => {
    return (
        <React.Fragment>
            <Typography variant="headline"
                        component="h2"
            >
                Bem vindo
            </Typography>
            {
                Object.values(urls).map((url, index) => {
                    return <Button raised
                                   key={index}
                                   component={ props =>
                                       <Link to={url.path} {...props}/>
                                   }
                    >
                        {url.name}
                    </Button>
                })
            }
            <p>Este é um projeto de desenvolvimento em React</p>
        </React.Fragment>
    )
};

// import React, {Fragment} from "react";
// import "./Home.css"
//
// export default () => {
//     return (
//         <Fragment>
//
//         </Fragment>
//
//     )
// };
