import logo from './images/artemis-negro2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'materialize-css/dist/css/materialize.min.css';

const NavBar = () => {
    return(
        <header style={styles.container} class='nav-wrapper'>
            <img src={logo} alt="" style={styles.logo} class='material-icons' />
            <nav style={styles.navbar} class="hide-on-med-and-down">
                <a href='#' style={styles.anchors}>Inicio</a>
                <a href='#' style={styles.anchors}>Regalos</a>
                <a href='#' style={styles.anchors}>Bebidas</a>
                <a href='#' style={styles.anchors} class='active'>Otros</a>
                <FontAwesomeIcon icon={faCartShopping} style={styles.cart} />
            </nav>
        </header>
    );
}

export default NavBar;

const styles={
    container:{
        display:'flex',
        justifyContent:'space-around',
        alignItems: "center",
        marginLeft:'7%',
        marginRight:'7%',
        paddingLeft:20,
        paddingRight:20,
        marginTop: 10,
        backgroundColor:'#111517',
    },
    anchors:{
        margin:10,
        fontSize:30,
    },
    logo: {
        width:'15%',
    },
    cart:{
        fontSize:'40',
    },
    navbar:{
        backgroundColor:'#111517',
        width:"max-content"
    }
}