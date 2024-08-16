import React from 'react'

function Cover() {
    return (
        <div className="cover-page">
            <h1 className="title">Quizzical</h1>
            <p className="description">Test your knowledge in a trivia game across various categories from geography to pop culture! Play solo or with friends to see who can outsmart each other!</p>
            <button className="btn btn-blue btn-start"onClick={() => setStart(true)}>Start quiz</button>
        </div>
    );
}

export default Cover;