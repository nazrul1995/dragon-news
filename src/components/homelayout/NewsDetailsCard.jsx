import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    return (
        <div>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2>{news.title}</h2>
            <p>{news.details}</p>
            <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>Back to category</Link>
        </div>
    );
};

export default NewsDetailsCard;