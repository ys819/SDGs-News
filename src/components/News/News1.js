import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext1';
import NewsArticle1 from '../NewsArticle/NewsArticle1';
import img from '../itemData/E_Elyx_01.png'

function News1(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle1 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News1;
