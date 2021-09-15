import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext14';
import NewsArticle14 from '../NewsArticle/NewsArticle14';
import img from '../itemData/E_Elyx_14.png'


function News14(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
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
