import React from 'react';
import './UserOutput.css';


const userOutput=(props)=>{
return (<div className='container'>
    <p className='user'>{props.userName}</p>
    <p>Me too</p>
</div>);
}

export default userOutput;