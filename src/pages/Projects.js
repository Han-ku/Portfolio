import React from 'react'

const Projects = () => {
    return (
        <>
            <h2 className='center p-2'>My Projects</h2>
            <div className="flex">
                <div className='p-2'>
                    <h3>Facebook</h3>
                    <div><img src="https://bit.ly/3Ai9Wdq" alt="Facebook" className='img-responsive' /></div>
                    <p>A social network to stay in touch with friends.</p>
                </div>
                <div className='p-2'>
                    <h3>Email</h3>
                    <div><img src="https://bit.ly/3Ai9Wdq" alt="Email" className='img-responsive' /></div>
                    <p>A social network to stay in touch with friends.</p>
                </div>
            </div>
        </>
    )
}

export default Projects