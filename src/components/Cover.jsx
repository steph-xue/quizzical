import React from 'react'

function Cover(props) {

    // Capitalize the first letter of each word
    function capitalize(string) {
        return (string.charAt(0).toUpperCase() + string.slice(1))
    }

    // Render the Cover component
    return (
        <div className="cover-page">
            <img src="/images/blob1.png" alt="blob" className="blob1" />
            <img src="/images/blob2.png" alt="blob" className="blob2" />

            {/* Renders the animated title */}
            <div className="content">
                <h1 className="title">Quizzical</h1>
                <h1 className="title">Quizzical</h1>
            </div>

            {/* Renders the description */}
            <p className="description">Test your knowledge in a trivia game across various categories from geography to pop culture! Play solo or with friends to see who can outsmart each other!</p>

            {/* Renders the selection of difficulty levels */}
            <div className="difficulty-level">
                <label className="difficulty-label">Select a difficulty:</label>
                <select 
                    className="difficulty-select form-select shadow-none" 
                    value={props.selectedDifficulty} 
                    onChange={(event) => props.setSelectedDifficulty(event.target.value)}
                >
                    {props.difficultyLevels.map((difficulty, index) => {
                        return <option key={index} value={difficulty}>{capitalize(difficulty)}</option>
                    })}
                </select>
            </div>

            {/* Renders the selection of categories */}
            <div className="category-options">
                <label className="category-label">Select a category:</label>
                <select 
                    className="category-select form-select shadow-none"
                    value={props.selectedCategory} 
                    onChange={(event) => props.setSelectedCategory(event.target.value)}
                >
                    {props.categoryOptions.map((category, index) => {
                        return <option key={index} value={category.index}>{category.type}</option>
                    })}
                </select>
            </div>
                    
            {/* Renders the start button */}
            <button className="btn btn-black btn-start" onClick={() => props.setStart(true)}>Start quiz</button>
            
            {/* Renders the error message if there is one */}
            {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}

        </div>
    );
}

export default Cover;