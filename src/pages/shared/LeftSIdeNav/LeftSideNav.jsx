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
        <div className='space-y-4'>
            <h2 className='text-2xl'>All Categories</h2>
            {
                categories.map(category=><Link className='block text-xl font-semibold' key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

LeftSideNav.propTypes = {
    
};

export default LeftSideNav;