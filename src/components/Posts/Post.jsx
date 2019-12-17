import React, {Fragment} from "react";
import "./Post.css"

export const Post = ({data}) => {
    return (
        <Fragment>
            <div className="post">
                <h2>Post</h2>
                <p>Conteúdo</p>
            </div>
        </Fragment>
    )
};