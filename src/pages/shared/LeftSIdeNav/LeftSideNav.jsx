import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LeftSideNav = props => {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div>
            <h2 className='text-2xl mb-6'>All Categories</h2>
          <div className='space-y-2'>
          {
                categories.map(category=><Link className='block text-xl font-semibold align-start' key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
          </div>
        </div>
    );
};

LeftSideNav.propTypes = {
    
};

export default LeftSideNav;