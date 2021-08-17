import React from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap';

function CharacterProfile(props) {
    const { index } = useParams()

    const character = props.characters[index]

    console.log(character)

    return (
        
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th> Name</th>
                    <th>Height</th>
                    <th>Gender</th>
                    <th>Mass</th>
                    <th>Hair Color</th>
                    <th>Skin Color</th>
                    <th>Eye Color</th>
                    <th>Birth Year</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{character.name}</td>
                    <td>{character.height}</td>
                    <td>{character.gender}</td>
                    <td>{character.mass}</td>
                    <td>{character.hair_color}</td>
                    <td>{character.skin_color}</td>
                    <td>{character.eye_color}</td>
                    <td>{character.birth_year}</td>
                    
                </tr>
            
            </tbody>
        </Table>
    )
}

export default CharacterProfile
