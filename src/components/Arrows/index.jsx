import React, { useState, useRef } from 'react';
import './index.css'

function App() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  // const [ setInputValue] = useState(''); 
  // inputValue,
  const inputRef = useRef(null); // Define inputRef here

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleArrowClick = () => {
    toggleInputVisibility();
    // Optionally, you can focus on the input field when the arrow is clicked
    if (!isInputVisible) {
        // inputRef.current.focus();
    }
  };

  return (
    <div className='arrow-container-width'>
      <div className='arrow'>
        <div className='sidebar-picon'>
            <p>IDEAL FOR</p>
            <p onClick={handleArrowClick}>{isInputVisible ? 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72003 10.73L7.0667 6.38489C7.58003 5.87174 8.42003 5.87174 8.93336 6.38489L13.28 10.73" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            }</p>
        </div>
        <span>All</span>
        {isInputVisible && (
            <div className='arrow-container'>
              <p>Unselect all</p>
              <label>
                <input
                type="checkbox"
                // checked={inputValue}
                // onChange={handleInputChange}
                ref={{inputRef}}
                />
                Men
              </label>
                <label>
                <input
                type="checkbox"
                // checked={inputValue}
                // onChange={handleInputChange}
                ref={{inputRef}}
                />
                Women
            </label>
                <label>
                <input
                type="checkbox"
                // checked={inputValue}
                // onChange={handleInputChange}
                ref={{inputRef}}
                />
                Baby & Kids
            </label>
            
          </div>
        )}
      </div>
      <hr/>
    </div>
  );
}

export default App;
