import React from 'react';



const CommentDetail = props =>{
    return(
        <div className = "comment">
        <a href = "/" className = "Avatar">
            <img alt = "avatar" src = {props.avatar}/>
        </a>
        <div className = "content">
            <a href = "/" className = "Author">
                {props.author}
            </a>
            <div className = "metadata">
                <span className = "Date">{props.timeAgo}</span>
            </div>
            <div className = "text">
                {props.comment}
            </div>
        </div>
    </div>

    );
};

export default CommentDetail;