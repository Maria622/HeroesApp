import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DcPage, HeroPage, MarvelPage, SearchPages } from '../pages'


export const HeroesRoutes = () => {
  return (
    <>
    
    <Navbar/>

    <div className='container'>
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />


            <Route path="search" element={<SearchPages />} />
            <Route path="hero/:id" element={<HeroPage />} />

            <Route path= "/" element={<Navigate to="/marvel"/>}/>


        </Routes>
    </div>

    </>
  )
}
