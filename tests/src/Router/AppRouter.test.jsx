import { render,screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../../src/Router/AppRouter";
describe('pruebas en AppRouter', () => { 

    test('debe de mostart el login si no esta autenticado', () => { 


        const contextValue={
            logged: false,
        }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={{contextValue}}>
                    <AppRouter>

                    </AppRouter>
                </AuthContext.Provider>
            </MemoryRouter>
           
        );

            expect(screen.getAllByText('Login').length).toBe(2);

     })

     test('debe de mostrar el componente de marvel si esta autenticado', () => { 


        const contextValue={
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan Carlos'
            }
           }
           render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

         
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);       

      })

 })