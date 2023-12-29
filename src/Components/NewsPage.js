import React, { useState } from 'react'
import NewsItem from './NewsItem'
import { useEffect } from 'react';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


export default function NewsPage(props) {


    const url = `https://newsdata.io/api/1/news?apikey=${props.apikey}&country=${props.country}&language=en&category=${props.category}&size=${props.size}&image=1`

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalresult, setTotalResult] = useState(0)
    const [nextURL, setNextURL] = useState(url)
    const [nxtPage, setnxtPage] = useState(0)
    
    useEffect(() => {
        fetchMoreData()
    },[])
    
    // const newsUpdate = async () => {
    //     await fetchMoreData();
    // }


    const fetchMoreData = async () => {
        setLoading(true)
        let data = await fetch(nextURL)
        let parseData = await data.json()
        setnxtPage(parseData.nextPage)
        setArticle(article.concat(parseData.results))
        setTotalResult(parseData.totalresult)
        setLoading(false)
        setNextURL(nextURL.slice(0, nextURL.length - 19).concat(nxtPage))
        console.log(nextURL)
    }

    return (
        <>
            <div className="container">
                <h2 className='text-center mt-5'>News-Berg : Top News World-Wide</h2>
                {loading && <Loader />}
                <div className="container">
                    <InfiniteScroll
                        dataLength={article.length}
                        next={fetchMoreData}
                        hasMore={article.length !== totalresult}
                        loader={<Loader />}>
                        <div className="row">
                            {article.map((elem) => {
                                return (
                                    <div className="col-md-4" key={elem.link}>
                                        <NewsItem title={elem.title ? elem.title : ""} img={elem.image_url ? elem.image_url : "https://i.kym-cdn.com/photos/images/original/002/652/460/d70.jpg"} desc={elem.description ? elem.description.slice(0, 55) : ""} articleURL={elem.link} source={elem.source_id} published={elem.pubDate} />
                                    </div>
                                )
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )
}



NewsPage.defaultProps = {
    category: "top",
    country: "in",
    size: 5
}