import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext16';
import NewsArticle16 from '../NewsArticle/NewsArticle16';
import img from '../Img/E_Elyx_16.png'


function News16(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle16 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News16;
