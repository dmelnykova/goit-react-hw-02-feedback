import React from 'react';

export const Section = ({ title, children }) => (
    <>
        <h2>{title}</h2>
        {children}
    </>
);
