import React, { useState } from "react";
import {HeaderCpnt} from './HeaderCpnt';
import {SearchCpnt} from './SearchCpnt';
import NewsListCpnt from "./NewsListCpnt";
import axios from "axios";

const NewsPage = () => {
    const [news, setnews] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleChangeInput = (e) => {
        const { value } = e.target;
        console.log(value);
        setSearchText(value);
    };

    const handleClickSearchButton = () => {
        //   sending axios request
        console.debug("test");
        let newsUrl = `https://newsapi.org/v2/everything?from=2021-04-26&sortBy=publishedAt&q=${searchText}&apiKey=6eca200bc816404da1d8871971ef2456&language=ko`;
        axios.get(newsUrl).then((response) => {
          let resultNewsList = response.data.articles;
          setnews(resultNewsList);
        });
    };

    return (
        <div>
            <HeaderCpnt title="News"></HeaderCpnt>

            <SearchCpnt
            ChangeSearchInput={handleChangeInput}
            ClickSearchButton={handleClickSearchButton}
            ></SearchCpnt>

            <NewsListCpnt news={news}></NewsListCpnt>
        </div>
    );
};

export default NewsPage;