import { fireEvent,render,screen } from"@testing-library/react"
import { AuthContext } from "../../../../src/auth/context/AuthContext"
import { Navbar } from "../../../../src/ui/components/Navbar"
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockdUseNavigate = jest.fn();

//mock de algun customhook
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockdUseNavigate,
}));


describe('pruebas en el navbar', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Juan Carlos'
       
        },
        logout: jest.fn()
         //si yo quiero evaluar que algo se llame significa que por ahi va un jest FN
    }

    beforeEach(() => jest.clearAllMocks() );
       
        


    test('debe de mostrar el nombre del usuario loggeado', () => { 

        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );



    expect( screen.getByText('Juan Carlos') ).toBeTruthy();

     })

     test('debe de llamar el logout y navigate cuando se hace click en el boton', () => { 

        //hacer el mock de useanavigate
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        //tomar el boton
        const logoutBtn= screen.getByRole('button')
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockdUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});



      })

 })