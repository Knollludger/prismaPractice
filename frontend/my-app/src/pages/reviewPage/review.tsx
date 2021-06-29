import React from 'react';

interface reviewProps {
    id:number;
}

const ReviewPage = (props:reviewProps): React.ReactElement<reviewProps> => {
    return (
        <h3>Hi there {props.id}!</h3>
    )
}

export default ReviewPage