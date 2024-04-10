import Rectangle from '../Rectangle'
import './index.css'

export default function Details(){
    return(
        <div className='details'>
            <nv className="nav-home-shop">
                <ul>
                    <li><a className='home-color' href='#Home'>HOME</a></li>
                    <li><a href='#|'>|</a></li>
                    <li><a href='#Shop'>SHOP</a></li>
                </ul>
            </nv>
            <div className="details-container">
            <h1>Discover our products</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <hr/>
            <Rectangle />
        </div>
    )
}