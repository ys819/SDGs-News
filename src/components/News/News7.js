import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext7';
import NewsArticle7 from '../NewsArticle/NewsArticle7';
import img from '../itemData/E_Elyx_07.png'


function News7(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle7 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News7;
