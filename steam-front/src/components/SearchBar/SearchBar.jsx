import React, { useState, useEffect } from "react";
import DropDownMyStore from "./components/DropDownMyStore";
import DropDownNew from "./components/DropDownNew";
import DropDownCategory from "./components/DropDownCategory";
import "./style/SearchBar.css";

const SearchBar = () => {
  const [searchHover, setSearchHover] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const SearchData = [
    "내 상점",
    "신규 및 특집",
    "카테고리",
    "포인트 상점",
    "뉴스",
    "실험실",
  ];

  const searchDropDown = {
    "내 상점": "myStore",
    "신규 및 특집": "newAndSpecial",
    카테고리: "Category",
    "포인트 상점": "none",
    뉴스: "none",
    실험실: "none",
    마우스아웃: "none",
  };

  useEffect(() => {
    if (searchHover !== "마우스아웃") {
      setShowDropdown(false);
      const timeoutId = setTimeout(() => {
        setShowDropdown(true);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setShowDropdown(false);
    }
  }, [searchHover]);

  const onSearchFocus = () => {
    setSearchFocus(true);
  };

  const onSearchBlur = () => {
    setSearchFocus(false);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="SearchBar">
      <div className="searchBar-Data">
        {SearchData.map((value, index) => {
          return (
            <div
              className="searchBarMenu"
              key={index}
              value={value}
              onMouseEnter={() => setSearchHover(value)}
              onMouseLeave={() => setSearchHover("마우스아웃")}
            >
              {value}
            </div>
          );
        })}
        {showDropdown &&
          (searchDropDown[searchHover] === "none" ? (
            ""
          ) : searchDropDown[searchHover] === "myStore" ? (
            <DropDownMyStore setSearchHover={setSearchHover} />
          ) : searchDropDown[searchHover] === "newAndSpecial" ? (
            <DropDownNew setSearchHover={setSearchHover} />
          ) : searchDropDown[searchHover] === "Category" ? (
            <DropDownCategory setSearchHover={setSearchHover} />
          ) : (
            ""
          ))}
      </div>
      <div className="searchBar-Search">
        <div className="searchBar-Search-Box">
          <input
            className={"searchBar-Input" + (searchFocus ? "" : " blur")}
            type="text"
            placeholder={searchFocus ? "" : "검색하기"}
            onFocus={onSearchFocus}
            onBlur={() => !searchInput && onSearchBlur()}
            onChange={handleSearch}
          />
          <img src="https://store.cloudflare.steamstatic.com/public/images/v6/search_icon_btn.png" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
