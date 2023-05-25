import React from 'react';

const SelectLevel = ({ children }) => {
    return (
        <div className='level-select'>
            <div className='level-select-title'>
                <h2>Select Level</h2>
            </div>
            <div className='all-levels'>{children}</div>
        </div>
    );
};

export default SelectLevel;
