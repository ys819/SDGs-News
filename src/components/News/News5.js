import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext5';
import NewsArticle5 from '../NewsArticle/NewsArticle5';
import img from '../Img/E_Elyx_05.png'


function News5(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle5 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News5;
