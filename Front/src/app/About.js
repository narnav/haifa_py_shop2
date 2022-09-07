import React from 'react'
import { selectFullScreen,setFullScreen } from './loginSlice'
import { useSelector, useDispatch } from 'react-redux';


const About = () => {
    const dispatch = useDispatch();
    const fullScreen = useSelector(setFullScreen);
    return (
        <div>About
            {setFullScreen ? "true" : "false"}
            <button  onClick={()=>dispatch(setFullScreen(!fullScreen))}>set full screen</button>
            <button  onClick={()=>dispatch(setFullScreen(fullScreen))}>set full screen</button>


        </div>
    )
}

export default About