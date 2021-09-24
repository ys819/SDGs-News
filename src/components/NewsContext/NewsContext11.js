import React, { createContext, useEffect, useState } from 'react' ;
import axios from 'axios';

export const Newscontext = createContext();

export const NewscontextProvider11 = (props) => {
    const [data, setData] = useState()
    const apikey = "fed10691873141628d64d303229fb40f";

    const date = new Date();
    const month = date.getMonth() + 1
    const today = date.getFullYear() + "-" + month + "-" + date.getDate();
    console.log(today);



    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/everything?q=urban&sortBy=popularity&apiKey=${apikey}`
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));

    }, []);

    return(
        <Newscontext.Provider value={{ data }}>
            {props.children}
        </Newscontext.Provider>
    );
}