import axios from "axios";
import React, { useState } from "react";
import { ListItem, StatusMessages } from "../../interfaces";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import "./SearchBar.scss";
import { endpoint } from "../../endpoints";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<ListItem[]>([]);
  const [typingTimer, setTypingTimer] = useState<any>();
  const [searchState, setSearchState] = useState<boolean>(false);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>(
    StatusMessages.INITIAL_STATE
  );

  const handleChange = (value: string) => {
    setInputValue(value);
    clearTimeout(typingTimer);
    setTypingTimer(
      setTimeout(async () => {
        if (value) {
          setSearchState(true);
          setMessageText(StatusMessages.SEARCHING);

          try {
            setShowSpinner(true);
            const options = { params: { limit: 10, filter: inputValue } };
            const { data } = await axios.get(endpoint.cities(), options);
            if (data.data.length === 0){
              setMessageText(StatusMessages.NOT_FOUND);
            } 
            setList(data.data);
          } catch (error) {
            setMessageText(StatusMessages.ERROR);
          } finally {
            setShowSpinner(false);
            setSearchState(false);
          }
        }
      }, 750)
    );
  };

  return (
    <div className="search_bar">
      <h1 className="search_bar--title">Select your favourite cities</h1>
      <p>
        Please type on the search bar below to filter by city name or country:
      </p>
      <input
        className="search_box"
        autoFocus
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleChange(e.target.value)
        }
        placeholder="City name or country"
        type="text"
        value={inputValue}
      />
      {searchState || list.length === 0 ? (
        <Loader showSpinner={showSpinner} text={messageText} />
      ) : (
        <ItemList list={list} />
      )}
    </div>
  );
};

export default SearchBar;
