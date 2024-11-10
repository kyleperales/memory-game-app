import './../styles/Score.css'

function Score({ currentScore, bestScore }) {
    return (
        <div className='score-container'>
            <h2>Score: {currentScore}</h2>            
            <h2>Best Score: {bestScore}</h2>
        </div>
    )
}

export default Score