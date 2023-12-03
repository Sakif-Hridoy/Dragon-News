import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id,title,thumbnail_url,image_url,details} = news;
    return (
        <div className="mt-14 card bg-base-100 shadow-xl">
          <h2 className="card-title">{title}</h2>
        <figure><img className='' src={image_url} alt="" /></figure>
        <div className="card-body">
          {
            details.length >200 ? <p>{details.slice(0,200)}<Link className='text-blue-600 font-bold' to={`/news/${_id}`}>Read More</Link></p>  : <p>{details}</p>
          }
          
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    );
};

export default NewsCard;