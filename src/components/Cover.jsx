import React from 'react'

function Cover(props) {

    // Capitalize the first letter of each word
    function capitalize(string) {
        return (string.charAt(0).toUpperCase() + string.slice(1))
    }

    // Render the Cover component
    return (
        <div className="cover-page">

            <div className="content">
                <h1 className="title">Quizzical</h1>
                <h1 className="title">Quizzical</h1>
            </div>

            <p className="description">Test your knowledge in a trivia game across various categories from geography to pop culture! Play solo or with friends to see who can outsmart each other!</p>

            
            <div className="difficulty-level">
                <label className="difficulty-label">Select a difficulty:</label>
                <select 
                    className="difficulty-select form-select shadow-none" 
                    value={props.selectedDifficulty} 
                    onChange={(e) => props.setSelectedDifficulty(e.target.value)}
                >
                    {props.difficultyLevels.map((difficulty, index) => {
                        return <option key={index} value={difficulty}>{capitalize(difficulty)}</option>
                    })}
                </select>
            </div>

            <div className="category-options">
                <label className="category-label">Select a category:</label>
                <select 
                    className="category-select form-select shadow-none"
                    value={props.selectedCategory} 
                    onChange={(e) => props.setSelectedCategory(e.target.value)}
                >
                    {props.categoryOptions.map((category, index) => {
                        return <option key={index} value={category.index}>{category.type}</option>
                    })}
                </select>
            </div>

            <button className="btn btn-black btn-start" onClick={() => props.setStart(true)}>Start quiz</button>
            
            {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}

        </div>
    );
}

export default Cover;