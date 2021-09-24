import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext8';
import NewsArticle8 from '../NewsArticle/NewsArticle8';
import img from '../Img/E_Elyx_08.png'


function News8(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle8 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News8;
