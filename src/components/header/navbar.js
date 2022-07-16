import logo from './images/artemis-negro2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'materialize-css/dist/css/materialize.min.css';
import { NavLink, Link } from 'react-router-dom';
import { context } from "../../context/cartContext";
import { useContext, useEffect } from "react";



const NavBar = () => {
    const { productos } = useContext(context)
    useEffect(()=>{
    },[productos])
    const categories = [
        { name: 'inicio', id: 0, route: '/' },
        { name: 'electronics', id: 1, route: '/category/electronics' },
        { name: 'jewelery', id: 2, route: '/category/jewelery' },
        { name: "men's clothing", id: 3, route: "/category/men's clothing" },
        { name: "women's clothing", id: 4, route: "/category/women's clothing" },
    ]

    return (
        <header style={styles.container} class='nav-wrapper'>
            <Link to="/" style={styles.logoContainer}><img src={logo} alt="" style={styles.logo} class='material-icons' /></Link>
            <nav style={styles.navbar} class="hide-on-med-and-down">
                {categories.map((category) => (<NavLink to={category.route} style={styles.anchors}>{category.name}</NavLink>))}
                <Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} style={styles.cart} /> <span class="badge" style={styles.new}>{productos.length}</span></Link>
            </nav>
        </header>
    );
}

export default NavBar;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: '7%',
        marginRight: '7%',
        marginTop: 10,
        backgroundColor: '#111517',
    },
    anchors: {
        fontSize: '100%',
        margin: 10,
        textTransform: 'uppercase'
    },
    logo: {
        width: '100%',
    },
    logoContainer: {
        width: '20%'
    },
    navbar: {
        backgroundColor: '#111517',
        width: "max-content"
    },
    cart: {
        fontSize: '30',
    },
    new: {
        width: 'max-content',
        margin: 0
    }
}