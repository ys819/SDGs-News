import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext1';
import NewsArticle2 from '../NewsArticle/NewsArticle2';
import img from '../Img/E_Elyx_01.png'

function News1(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle2 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News1;
