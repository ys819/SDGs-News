import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext10';
import NewsArticle10 from '../NewsArticle/NewsArticle10';
import img from '../Img/E_Elyx_10.png'


function News10(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle10 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News10;
