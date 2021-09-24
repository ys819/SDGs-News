import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext13';
import NewsArticle13 from '../NewsArticle/NewsArticle13';
import img from '../Img/E_Elyx_13.png'


function News13(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle13 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News13;
