import React from 'react';

const Google = ({ children, ...otherProps }) => {
    return (
        <button data-toggle="tooltip" data-original-title="Log In with Google"  {...otherProps}> {children}</button>
    )
}

export default Google;
