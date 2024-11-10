import { useState } from 'react'

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

export default Cards