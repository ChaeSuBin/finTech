import React from "react";

export const SearchCpnt = ({ ClickSearchButton, ChangeSearchInput }) => {
    return (
      <div>
        <input onChange={ChangeSearchInput}></input>

        <button onClick={ClickSearchButton}>search</button>
      </div>
    );
  };