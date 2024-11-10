import { useState } from "react"

function Score({ currentScore, bestScore }) {
    return (
        <div>
            <h1>Score: {currentScore}</h1>            
            <h1>Best Score: {bestScore}</h1>
        </div>
    )
}

function Cards({ onCardSelect, onGameReset }) {
    const [selectedIndex, setSelectedIndex] = useState(null)

    const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4']

    const onClickHandler = (index) => {
        if (selectedIndex === index) {
            setSelectedIndex(null)
            onGameReset()
            return
        }
        
        setSelectedIndex(index)
        onCardSelect()
    }

    return (
        <div>
            <h1>Memory Game</h1>
            <div>
                {
                    cards
                        .sort(() => Math.random() - 0.5)
                        .map((card, index) => {
                            return (
                                <div key={index} onClick={() => onClickHandler(index)}>
                                    <h2>{card}</h2>
                                </div>
                                
                            )
                        })
                }
            </div>
        </div>
    )
}

function MemoryGame() {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const onCardSelect = () => {
        setScore(score + 1)
        console.log(score)
    }

    const onGameReset = () => {
        setBestScore((curBest) => {
            if (score > curBest) {
                return score
            }
            return curBest
        })
        setScore(0)
        
        console.log('reset!')
    }

    return (
        <>
            <Score currentScore={score} bestScore={bestScore}/>
            <Cards onCardSelect={onCardSelect} onGameReset={onGameReset}/>
        </>
    )
}

export default MemoryGame