import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return(
        <div className = "ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo = "Today at 4.55pm" comment = "Nice blog post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="xyz" timeAgo = "Today at 4.56pm" comment = "Good blog post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="qwa" timeAgo = "Today at 5.00pm" comment = "Awesome blog post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
         
        </div>
    );
};

ReactDom.render(<App/>,document.querySelector('#root'));