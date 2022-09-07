import React, { useEffect, useState } from 'react'
import MyNav from './MyNav';

const Left_m = () => {
    const [showLoader, setShowLoader] = useState(true)
    useEffect(() => {
        setTimeout(setLoaderOff, 3000);
    })

    const setLoaderOff = () => {
        setShowLoader(false)
    }

    return (
        <div>
            {showLoader && <div class="loader"></div>}
            {!showLoader && <div><h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div style={{height:"200px"}}> <MyNav ></MyNav></div>
               
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                <h3 className="mt-4">Some Links</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>


                </ul>
            </div>}
            <hr className="d-sm-none" /></div>
    )
}

export default Left_m