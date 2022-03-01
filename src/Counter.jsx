// @flow 
import React, { useState } from 'react';

export const Counter = () => {
    const [ count, SetCount ] = useState(0);

    return (
        <>
            <p>The counter is:{count} </p>
            <button type="" onClick={() => SetCount(count + 1)}>Increment</button>
            <button type="" onClick={() => SetCount(count - 1)}>Decrement</button>
        </>
    );
};
