import React from 'react';

const Keypad = ({ handleClick, handleClear, handleEqual }) => {
  const buttonConfig = [
    { label: '7', type: 'digit-button' },
    { label: '8', type: 'digit-button' },
    { label: '9', type: 'digit-button' },
    { label: '÷', type: 'operator-button', value: '/' },
    { label: '4', type: 'digit-button' },
    { label: '5', type: 'digit-button' },
    { label: '6', type: 'digit-button' },
    { label: '×', type: 'operator-button', value: '*' },
    { label: '1', type: 'digit-button' },
    { label: '2', type: 'digit-button' },
    { label: '3', type: 'digit-button' },
    { label: '-', type: 'operator-button', value: '-' },
    { label: '0', type: 'digit-button bottom-left-corner' },
    { label: '=', type: 'fun-button bottom-right-corner', onClick: handleEqual },
    { label: 'C', type: 'fun-button', onClick: handleClear },
    { label: '+', type: 'operator-button' },
  ];

  const gridConfig = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
  ];

  return (  
    <div className='keypad'>
      {gridConfig.map((row, rowIndex) => (
        <div key={rowIndex} className='row'>
          {row.map((buttonIndex) => {
            const { label, type, value, onClick } = buttonConfig[buttonIndex];
            return (
              <button
                key={label}
                className={type}
                onClick={() => handleClick(value || label)}
                {...(onClick ? { onClick } : null)}
              >
                {label}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
