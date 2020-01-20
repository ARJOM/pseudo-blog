import React, { Fragment, useState } from "react";
import "./Post.css";
import {Link, Route, Switch} from "react-router-dom";
import {urls} from "../../util/urlUtils";
import {Button} from "@material-ui/core";



export const Post = ({data}) => {

    return (
        <Fragment>
            {
                data.map((post, index) => {

                    return (
                        <div>
                        <Button raised
                                key={index}
                                component={props =>
                                    <Link to={"/"+post.title} {...props}/>
                                }
                        >
                            {post.title}
                        </Button>
                        </div>
                    )
                })
            }
        </Fragment>
    )
};