import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from "../components/HeroCard";
import { getHerosByName } from '../helpers/getHerosByName';


export const SearchPages = () => {
  
  //leer el  query parametrer
  const location = useLocation();
  const navigate = useNavigate();
  
//queystring s epuede utilizar para extraer todo lo de search
 //tomar el queryparametres de una manera mas facil instalar el paquete queryString
 const {q = ''} = queryString.parse(location.search);

 const heroes = getHerosByName(q);

  // const showSearch = (q.length===0)? true: false;


  const {searchText,onInputChange} = useForm({
    searchText: q
  });

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(searchText.trim().length <=1) return;

    navigate(`?q=${searchText}`);
       
  }

  return (
   <>
   <h1>Search</h1>
   <hr />

    <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
            <hr />
              <form onSubmit={handleSubmit}>
                <input 
                  placeholder='Search a hero'
                  className='form-control'
                  name='searchText'
                  autoComplete='off'
                  type="text" 
                  value={searchText}
                  onChange={onInputChange}/>
                <button className='btn btn-outline-primary mt-1'>
                  Search
                </button>
              </form>
         </div>
      <div className="col-7">
        <h4>Results</h4>
          <hr />

          {
            (q== '')
            ?<div className='alert alert-primary'> Search a hero</div>
            :(heroes.length ==0) 
            &&<div aria-label="alert-danger" className='alert alert-danger'>  No hero with <b>{q}</b></div>

          } 
        
      

        {
              heroes.map( hero => (
                <HeroCard key={ hero.id } {...hero } />
              ))
            }
        

      </div>
    </div>


   </>
  )
}
