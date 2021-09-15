import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext2';
import NewsArticle2 from '../NewsArticle/NewsArticle2';
import img from '../itemData/E_Elyx_02.png'

function News2(props) {
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

export default News2;
