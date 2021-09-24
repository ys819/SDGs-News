import React, { useContext } from 'react';
import { Newscontext } from '../NewsContext/NewsContext9';
import NewsArticle9 from '../NewsArticle/NewsArticle9';
import img from '../Img/E_Elyx_09.png'


function News9(props) {
    const { data } = useContext(Newscontext);
    console.log(data);
    
    return (
        <div>
            <img src={img} width='100%' />
        <div className="all__news">
         {data
           ? data.articles.map((news) => (
           <NewsArticle9 data={news} key={news.url} />
         ))
         : "Loading"}
        </div>
    </div>
    );
}

export default News9;
