import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"
const ListaEstilizada = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo = "iconos/home-inactivo.png" activo>
                     Inicio
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo = "iconos/mas-vistas-inactivo.png">
                     Más visitados
                    </ItemNavegacion>
                    <ItemNavegacion iconoInctivo="iconos/me-gusta-inactivo.png" iconoInactivo = "iconos/me-gusta-inactivo.png">
                     Más Me Gusta
                    </ItemNavegacion>
                    <ItemNavegacion iconoInctivo="iconos/nuevas-inactivo.png" iconoInactivo = "iconos/nuevas-inactivo.png">
                     Nuevas
                    </ItemNavegacion>
                    <ItemNavegacion iconoInctivo="iconos/sorprendeme-inactivo.png" iconoInactivo = "iconos/sorprendeme-inactivo.png">
                     Sorprendeme
                    </ItemNavegacion>
                    
                </ListaEstilizada>
            </nav>

        </aside>)
}

export default BarraLateral