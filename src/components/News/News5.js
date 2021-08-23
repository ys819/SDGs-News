import React, { useContext } from 'react';
import { Newscontext } from '../../NewsContext';
import NewsArticle5 from '../NewsArticle/NewsArticle5';


function News5(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <h1 className="news__text">SDGs News App</h1>
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle5 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News5;
