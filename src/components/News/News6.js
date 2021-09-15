import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext6';
import NewsArticle6 from '../NewsArticle/NewsArticle6';
import img from '../itemData/E_Elyx_06.png'


function News6(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle6 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News6;
