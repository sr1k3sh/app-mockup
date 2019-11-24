import React, { useState } from 'react';
import Switch from 'react-input-switch';

const Switcher = () => {
    const [value, setValue] = useState('yes');

    return <Switch on="yes" off="no" value={value} onChange={setValue} />;
};
export default Switcher;