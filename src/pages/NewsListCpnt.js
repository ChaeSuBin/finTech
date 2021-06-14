import React from "react";

const NewsListCpnt = ({ news }) => {
    return (
      <div>
        {news.map((data) => {
          return <p>{data.title}</p>;
        })}
      </div>
    );
  };
  export default NewsListCpnt;