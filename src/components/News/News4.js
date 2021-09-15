import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext4';
import NewsArticle4 from '../NewsArticle/NewsArticle4';
import img from '../itemData/E_Elyx_04.png'


function News4(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle4 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News4;
