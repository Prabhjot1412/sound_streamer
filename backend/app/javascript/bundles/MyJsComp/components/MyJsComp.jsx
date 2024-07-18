import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const MyJsComp = (props) => {
  const [time, setCount] = useState(0);

  useEffect(() => {

    //Implementing the setInterval method
    const interval = setInterval(() => {
        setCount(props.time);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [time]);

  return (
    <div>
      <h3>Hello {props.time }</h3>
    </div>
  );
};

MyJsComp.propTypes = {
  name: PropTypes.string // this is passed from the Rails view
};

export default MyJsComp;
