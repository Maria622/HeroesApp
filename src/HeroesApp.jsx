import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './Router/AppRouter'

export const HeroesApp = () => {
  return (
    <>
    <AuthProvider>

      <AppRouter/>

    </AuthProvider>
    
    </>
  )
}
