import React , { useContext,useEffect } from 'react';
import './navbar.css';
import carticon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../content/store';

 const Navbar = () => {
    const { cartCount } = useContext(CartContext);
     

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted
    }, []);


    return (
        <div className='navbar' style={{position:"fixed"}}>
             <Link to='/'> <h1><b>TeeRex Store</b></h1> </Link>
            <div className="navbar-right">
                <Link to='/' className='pro'>Products</Link>
                <div className="navbar-cart">
                    <Link to='/cart'><img src={carticon} alt="Cart Icon" /></Link>
                    <div className="navbar-cart-count">{cartCount}</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


 
