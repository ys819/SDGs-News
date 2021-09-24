import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext15';
import NewsArticle15 from '../NewsArticle/NewsArticle15';
import img from '../Img/E_Elyx_15.png'


function News15(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle15 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News15;
