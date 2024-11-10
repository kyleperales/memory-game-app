import { useState } from 'react'
import Cards from './Cards'
import Score from './Score'

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