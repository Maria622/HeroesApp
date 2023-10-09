import React, { useMemo } from 'react'
import { Navigate,useNavigate, useParams } from "react-router-dom";
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {

      const {id} = useParams();
      const navigate = useNavigate()

      const hero = useMemo(()=>getHeroById(id), [id]); 
    //estilos y determinar si es dc retornarlo a
    // dc y si es de marvel a marvel
      const onNavigateBack =()=>{
        navigate(-1)
      }
 

if( !hero ){
  return <Navigate to="/marvel"/>
}

  return (
    <div className='row mt-5 animate__fadeInDown'>
      <div className="col-4">
        <img className='img-thumbnail animate__animated animate__fadeInLeft'
        src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero} />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Alter ego:</b>{hero.alter_ego}</li>
            <li className='list-group-item'><b>Publisher</b>{hero.publisher}</li>
            <li className='list-group-item'><b>First Appearence</b>{hero.first_appearance}</li>
        </ul>

        <h1 className='mt-3'>Characters</h1>
        <p>{hero.characters}</p>


        <button className='btn btn-outline-info'
        onClick={onNavigateBack}>
          Back
        </button>
      </div>

    </div>
  )
}
