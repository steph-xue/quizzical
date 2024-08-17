import React from 'react'

function Cover(props) {

    // Render the Cover component
    return (
        <div className="cover-page">
            <div className="content">
                <h1 className="title">Quizzical</h1>
                <h1 className="title">Quizzical</h1>
            </div>
            <p className="description">Test your knowledge in a trivia game across various categories from geography to pop culture! Play solo or with friends to see who can outsmart each other!</p>
            <button className="btn btn-black btn-start" onClick={() => props.setStart(true)}>Start quiz</button>
        </div>
    );
}

export default Cover;