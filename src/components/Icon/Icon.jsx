import React from 'react';


const Icon = ({className, name}) => {
  return (
    <svg className={`${className}`}>
        <use xlinkHref={`/images/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;