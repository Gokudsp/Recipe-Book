import { useState } from "react";
import { useGlobalContext } from "../context";
import "./Search.css"

const Search = () => {

    const [text,setText] = useState('');
    const {setSearchTerm,fetchRandomMeal} = useGlobalContext();
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            setSearchTerm(text);
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm('');
        setText('');
        fetchRandomMeal();
    }
    const handleRandomMeals = () => {
        setSearchTerm('');
        setText('');
        fetchRandomMeal();
    }

    return <div className="search-container">
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="search a meal"  value={text} onChange={handleChange} className="form-input" />
            <button type='submit' className="btn">search</button>
            <button type='button' className="btn btn-hipster" onClick={handleRandomMeal}>surprise me!</button>
            <button type='button' className="hipster" onClick={handleRandomMeals}>Recipe</button>
        </form>
    </div>
    
  }
  export default Search;