import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext3';
import NewsArticle3 from '../NewsArticle/NewsArticle3';
import img from '../Img/E_Elyx_03.png'


function News3(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle3 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News3;
