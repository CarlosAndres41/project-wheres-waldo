import React from 'react';

const SelectLevel = ({ children }) => {
    return (
        <div className='level-select'>
            <div className='level-select-title'>
                <h2>Select Level</h2>
            </div>
            {children}
        </div>
    );
};

export default SelectLevel;
