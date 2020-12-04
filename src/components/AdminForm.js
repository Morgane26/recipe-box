import React from 'react'

const AdminForm = ({
    id: key,
    majRecette,
    recettes,
    supprimerRecette
}) => {
    const recette = recettes[key] 

    const handleChange = (event, key) => {
        const { name, value } =  event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)

    }

    return (
        <div className='card'>
            <form className='admin-form'>
                <input value={recette.nom} onChange={event => handleChange(event, key)} type='text' name='nom' placeholder='Nom de la recette'/>
                <input value={recette.image} onChange={event => handleChange(event, key)} type='text' name='image' placeholder="Adresse de l'image"/>
                <textarea value={recette.ingredients} onChange={event => handleChange(event, key)} name='ingredients' placeholder='Liste des ingrédients'/>
                <textarea value={recette.instructions} onChange={event => handleChange(event, key)} name='instructions' placeholder='Liste des instructions'/>
            </form>
            <button onClick={() => supprimerRecette(key)}>Supprimer</button>
        </div>
    )
}

export default AdminForm