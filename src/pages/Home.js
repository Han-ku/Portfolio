import React, { useEffect, useState } from 'react'

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

    return (
        <>
            <div className="flex header">
                <div className="user-info">
                    <h1>Hanna Kunitskaya</h1>
                    {loading ? (
                    <div className="loadingState">
                        <i className="fa-solid fa-gear fa-spin"></i>
                    </div>
                    ) : (
                    <>
                        <pre>{fileContent}</pre>
                        <div className='cv_container'>
                            <a href="/about_me/CV_Kunitskaya_Hanna.pdf" target="_blank">Open my CV</a>
                            <a href="/about_me/CV_Kunitskaya_Hanna.pdf" download>Download my CV</a>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home