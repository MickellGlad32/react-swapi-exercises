import React from 'react'
import { useParams } from 'react-router-dom'

function CharacterProfile(props) {
    const { index } = useParams()

    const character = props.characters[index]

    return (
        <div>
            {character.name}<br />
            {character.height}<br />
            {character.mass}<br />
            {character.hair_color}<br />
            {character.eye_color}<br />
            {character.birth_year}<br />
            {character.gender}<br />
        </div>
    )
}

export default CharacterProfile
