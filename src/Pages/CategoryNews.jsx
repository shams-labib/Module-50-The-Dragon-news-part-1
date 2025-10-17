import React, {  useEffect, useState  } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {

    
    const {id} = useParams();
    const parseIntId = parseInt(id)
    const data = useLoaderData();
    
    const [categoryNews, setCategoryNews] = useState([])
    

    useEffect(()=>{

        if(parseIntId === 0) {
            setCategoryNews(data);
            return
        }else if (parseIntId === 1){
             const filtered = data.filter((news) => news.others.is_today_pick === true);
              setCategoryNews(filtered)
        }else{
            // main mal hosce ei sala! jeta 1st e korsilam
            const filtered = data.filter(news => news.category_id == parseIntId);
            setCategoryNews(filtered)
        }
    },[data, parseIntId])


    console.log(categoryNews)

    return (
        <div>
            <h1>Category - {categoryNews.length} Found</h1>
        </div>
    );
};

export default CategoryNews;