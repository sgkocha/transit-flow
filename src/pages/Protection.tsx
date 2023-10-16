import React from 'react'
import './Protection.css'

const Protection = () => {
    return (
        <main>
            <div className="protection-main">
                <div className="protection-main-caption d-f">
                    <div className="protection-main-pattern"></div>
                    <div className="protection-main-above">Protection</div>
                </div>
                <h2 className="protection-main-title">Password Protection</h2>
            </div>
            <div className="protection-pwd">
                <h3 className="protection-pwd-title">Enter Password</h3>
                <form action="" className='protection-pwd-fm d-f'>
                    <input type="password" name="password" placeholder='Enter Your Password' required />
                    <button>Submit</button>
                </form>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Protection