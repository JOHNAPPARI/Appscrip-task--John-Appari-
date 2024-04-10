import './index.css'
import React, {useState} from 'react';
import ProductList from '../ProductList';
import Arrows from '../Arrows'

export default function Rectangle() {
    const [isVisible, setIsVisible] = useState(true);
    const [hideFilter, showFilter] = useState('Hide Contect')

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        showFilter(isVisible ? "SHOW FILTER" : "HIDE FILTER")
    };

    return(
        <div>
            <div className='rectangle-contain'>
                <div className='rectangle-filter-contain'>
                <div className='rectangle'>
                    <span>3425 ITEMS</span>
                    <div className='rectangle-icon'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span onClick={toggleVisibility}>{hideFilter}</span>
                    </div>
                </div>
                <div className='rectangle-filter'>
                    <div><span>FILTER</span></div>
                    <div><span>|</span></div>
                    
                </div>
                </div>
                <div>
                <select>
                    <option className='option' value="RECOMMENED">RECOMMENED</option>
                    <option value="NEWEST FIRST">NEWEST FIRST</option>
                    <option value="POPULAR">POPULAR</option>
                    <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
                    <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
                </select>
                </div>
            </div>
            <hr/>
            <div className='side-items-container'>
            {isVisible && (
                <div className='side-bar'>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"> Customizble </label>
                <hr/>
                <div>
                    <div>
                        <Arrows />
                    </div>
                    {/* <div className='sidebar-picon'>
                        <p>IDEAL FOR</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                    <hr/> */}
                    <div className='sidebar-picon'>
                        <p>OCCASION</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                    <hr/>
                    <div className='sidebar-picon'>
                        <p>WORK</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                    <hr/>
                    <div className='sidebar-picon'>
                        <p>FEBRIC</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                    <hr/>
                    <div className='sidebar-picon'>
                        <p>SEGMENT</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                    <hr/>
                    <div className='sidebar-picon'>
                        <p>SUITABLE FOR</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                    <hr/>
                    <div className='sidebar-picon'>
                        <p>RAW MATERIALS</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                    <hr/>
                    <div className='sidebar-picon'>
                        <p>PATTERN</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>All</span>
                </div>
                </div> 
            )}
            <div className='item-container'>
                <ProductList />
            </div>
            </div>
        </div>
    )
}