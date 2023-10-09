import { render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { SearchPages } from "../../../../src/heroes/pages/SearchPages";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('pruebas en <SearchPage(>', () => { 

test('debe de mostrarse correctamente con valores por defecto', () => { 

    const {container} = render(
        <MemoryRouter>
            <SearchPages/>
        </MemoryRouter>

    );
    expect(container).toMatchSnapshot();

 });

 test('debe de mostar a batman y el input con el valor del queryString', () => { 

  render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPages/>
        </MemoryRouter>

    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');
    


    const img = screen.getByRole('img');
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg")
    

    // const alert = screen.getByLabelText('alert-danger');
    // expect(alert.style.display).toBe('none')
    // const alert = screen.getByLabelText('alert-danger');
    // expect( alert.style.display ).toBe('none');

});
    test('debe de mostrar un error si no se encuentra el hero(batman123)', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPages/>
            </MemoryRouter>
    

   

        );
screen.debug();
    // const alert = screen.getByLabelText('alert-danger');
    // expect( alert.style.display ).toBe('');

     })

    test('debe de llamar el navigate a la pantalla nueva', () => { 

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPages />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }})
        
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`)


     })


})