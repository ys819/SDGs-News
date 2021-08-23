import React, { useContext } from 'react';
import { Newscontext } from '../../NewsContext';
import NewsArticle14 from '../NewsArticle/NewsArticle14';


function News14(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <h1 className="news__text">SDGs News App</h1>
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle14 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News14;
