import React from 'react';
type EmployeeProps = {
    firstName: String
};
export const Employee = ({firstName}: EmployeeProps) => {
    return (
        <h1>
            This is the employee {firstName}   
        </h1>
    );
};