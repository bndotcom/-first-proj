import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const ListsAndKeys = () => {
    const [items, setItems] = useState([
        {id: 1,
            checked: false,
            item: 'Pineapple'
        },{id: 2,
            checked: false,
            item: 'Yellow bananas'
        },{id: 3,
            checked: false,
            item: 'Raw tomatoes'
        },{id: 4,
            checked: false,
            item: 'Brocholi'
        }, {id: 5,
            checked: false,
            item: 'Spinach'
        },]);

       const handleChecked = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shopping list', JSON.stringify(listItems));
       }
    
       const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shopping list', JSON.stringify(listItems));

       }
   

    return(
        <div className='list&key'>
            {items.length ? (
       <ul>
        {items.map((item) =>(
          <li className='item'
          key={items.id}>
            <input type='checkbox'
            onChange={() => handleChecked(item.id)}
            checked={items.checked} />
            <label 
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
            onChangeClick={() => handleChecked(item.id)}
            > {item.item}</label>
            <FaTrashAlt 
            onClick={() => handleDelete(item.id)}
            role='button' tabIndex='0' 
            />
          </li>  
        ))}
       </ul>
            ) : (
                <p style={{margin: '2rem', color: 'red', }}>Your list is empty</p>
            )}
            
        </div>
    );
}
export default ListsAndKeys;