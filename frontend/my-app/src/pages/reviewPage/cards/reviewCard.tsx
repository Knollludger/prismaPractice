import React from 'react';
import './reviewCard.scss';
interface reviewProps {
    id:number;
    title: string;
}

const ReviewPage = (props:reviewProps): React.ReactElement<reviewProps> => {
    let titleContent = (
        <div id="hello">
            <h3>{props.title}</h3>
        </div>
    )

    return (
        <div>
            {titleContent}
            <h3>Hi there {props.id}!</h3>
        </div>
    )
}

export default ReviewPage