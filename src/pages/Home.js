import React, { useEffect, useState } from 'react'
import backgroundVideo from '../asserts/background_video.mp4'

const Home = () => {
    const [fileContent, setFileContent] = useState('')
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/about_me/text.txt')
      .then(response => response.text())
      .then(data => {
        setFileContent(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching the text file:', error)
        setFileContent('Failed to load content.')
        setLoading(false);
      })
  }, [])

  const highlightText = (text) => {
    const words = text.split(' ').map((word, index) => (
      <span key={index} className="highlight">{word} </span>
    ));
    return <>{words}</>;
  };

    return (
        <div className='home'>
            <div className="video-wrapper">
                <video src={backgroundVideo} className="video-background" autoPlay loop muted/>
            </div>
            <div className="content">
                <div className="flex header">
                    <div className="user-info">
                        <h1 className='title'>Hanna Kunitskaya</h1>
                        {loading ? (
                        <div className="loadingState">
                            <i className="fa-solid fa-gear fa-spin"></i>
                        </div>
                        ) : (
                        <>
                            {fileContent.split('\n\n').map((paragraph, index) => (
                                <pre key={index}>{highlightText(paragraph)}</pre>
                            ))}
                            <div className='cv_container'>
                                <a href="/about_me/CV_Kunitskaya_Hanna.pdf" target="_blank">Open my CV</a>
                                <a href="/about_me/CV_Kunitskaya_Hanna.pdf" download>Download my CV</a>
                            </div>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home