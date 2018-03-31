import React from 'react';


const Axis = () => {
    const groundStyle = {
        fill: 'red',
    };
    const division = {
        stroke: '#458232',
        strokeWidth: '3px',
    };

    return (
        <a id="Axis">
            <circle cx={0} cy={0} r={5}/>
            <path d = "M 20 0 C 20 90, 110 90, 110 0"
                  stroke = "black"
                  fill = "transparent"/>
            <circle cx={20} cy={0} r={2}/>
            <circle cx={-20} cy={-20} r={2}/>
            <circle cx={20} cy={90} r={3}/>
            <circle cx={110} cy={90} r={3}/>
            <circle cx={110} cy={0} r={2}/>
        </a>



)
    ;
};

export default Axis;