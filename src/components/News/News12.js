import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext12';
import NewsArticle12 from '../NewsArticle/NewsArticle12';
import img from '../Img/E_Elyx_12.png'


function News12(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle12 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News12;
