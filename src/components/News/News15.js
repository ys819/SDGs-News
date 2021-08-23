import React, { useContext } from 'react';
import { Newscontext } from '../../NewsContext';
import NewsArticle15 from '../NewsArticle/NewsArticle15';


function News15(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <h1 className="news__text">SDGs News App</h1>
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle15 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News15;
