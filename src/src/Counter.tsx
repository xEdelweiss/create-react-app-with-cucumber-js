import React, {useState} from 'react';

export interface CounterProps {
    startWith: Number;
}

const Counter = ({startWith}: CounterProps) => {
    const [value, setValue] = useState(startWith);

    return (
        <div>
            <p>value: {value}</p>
            <button onClick={() => setValue(current => current + 1)}>add</button>
        </div>
    );
};

Counter.defaultProps = {
    startWith: 0,
};

export default Counter;
