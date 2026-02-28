// using UseState
import React, {useState} from 'react';

function Content() {
const [name, setName] = useState('FRUITS');
const [count, setCount] = useState(0);

const handleNameChange = () => {
        const names = ['APPLE','PAPAYA','CINNAMON','BANANA','WATERMELON','MANGO'];
           const int = Math.floor(Math.random() * names.length);
           setName(names[int]);
        
    }

    const handleCount = () => {
    setCount(c => c + 1);
}
    return(
        <div className="MainContainer">
            {/* Available fruits on the market */}
            <p style={{color:'green', 
            }}>AVAILABLE: {name}</p>
             <button className='Btn'
             onClick={handleNameChange}
             >GO THROUGH</button>
            {/* count button of available fruits */}
        <p>Fruits on count: {count}</p>
            <button className='fruitCount'
            onClick={handleCount}
            >See fruits
            </button>
           
        </div>
    );
}
export default Content;