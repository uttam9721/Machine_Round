import React, { useState, useEffect } from 'react';
import Card from './Card';

const News = () => {
    const [search, setSearch] = useState('');
    const [newsData, setNewsData] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Sports'); // Default category set to 'Sports'
    const API_KEY = '5551880c37a141e682c497a5d16a3ec2';
    const getData = async () => {
        const url = selectedCategory
            ? `https://newsapi.org/v2/everything?q=${selectedCategory}&from=2025-01-17&sortBy=publishedAt&apiKey=${API_KEY}`
            : `https://newsapi.org/v2/everything?q=${search}&from=2025-01-17&sortBy=publishedAt&apiKey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setNewsData(data.articles || []);
    };

    // Fetch data when the component mounts or category changes
    useEffect(() => {
        getData(); // Fetch sports news by default
    }, [selectedCategory]); // Only re-fetch when the category changes

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <nav className="navbar">
                <div className="logo">
                    <h1>Trendy News</h1>
                </div>
                <ul className="nav-links">
                    <a href="#">All News</a>
                    <a href="#">Trending</a>
                </ul>
                <div className="search-bar">
                    <input type="search" placeholder="Search" onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
                <button className="toggle-btn" onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </nav>

            <div className="content">
                <div className="categories">
                    <button onClick={() => handleCategoryClick('Sports')}>Sports</button>
                    <button onClick={() => handleCategoryClick('Politics')}>Politics</button>
                    <button onClick={() => handleCategoryClick('Entertainment')}>Entertainment</button>
                    <button onClick={() => handleCategoryClick('Health')}>Health</button>
                    <button onClick={() => handleCategoryClick('Fitness')}>Fitness</button>
                </div>

                <div className="card-container">
                    <Card data={newsData} darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
};

export default News;
