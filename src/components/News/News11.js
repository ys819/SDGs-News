import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext11';
import NewsArticle11 from '../NewsArticle/NewsArticle11';
import img from '../Img/E_Elyx_11.png'


function News11(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle11 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News11;
