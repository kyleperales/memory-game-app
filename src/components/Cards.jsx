import { useEffect, useState } from 'react'
import './../styles/Cards.css'

function Card({ pokemonName, imageUrl, onClickHandler }) {
    return (
        <div className='card' onClick={onClickHandler}>
          {imageUrl && <img src={imageUrl} alt={pokemonName}/>}
          <span>{pokemonName}</span>  
        </div>
    )
}


function Cards({ onCardSelect, onGameReset }) {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [pokemonMap, setPokemonMap] = useState({})
    const pokemons = [
        "charmander",
        "charmeleon",
        "charizard",
        "squirtle",
        "wartortle",
        "blastoise",
        "bulbasaur",
        "ivysaur",
        "venusaur",
        "pichu",
        "pikachu",
        "raichu",
    ]
    
    let url = ''
    useEffect(() => {
        const fetchPokemon = async (pokemon) => {
            url =  `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
    
                const data = await response.json()

                setPokemonMap((prev) => {
                    return {
                        ...prev,
                        [pokemon]: data.sprites.other["official-artwork"].front_default
                    }
                })
            } catch (error) {
                console.error('Error:', error)
            }
        }
        
        pokemons.forEach(pokemon => {
            fetchPokemon(pokemon)
        })
    }, [url])
        

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
            <div className='cards-container'>
                {
                    Object.keys(pokemonMap)
                        .sort(() => Math.random() - 0.5)
                        .map((pokemonKey, index) => {
                            return (
                                <Card key={pokemonKey}
                                    pokemonName={pokemonKey}
                                    imageUrl={pokemonMap[pokemonKey]}
                                    onClickHandler={() => onClickHandler(pokemonKey)}/>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Cards