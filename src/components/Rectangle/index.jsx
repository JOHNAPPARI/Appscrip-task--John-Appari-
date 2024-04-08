import './index.css'

export default function Rectangle() {
    return(
        <div>
            <div className='rectangle-contain'>
                <div>
                    <p>3425 ITEMS</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <span>HIDE FILTER</span>
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
        </div>
    )
}