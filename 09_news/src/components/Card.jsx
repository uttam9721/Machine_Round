// import React from "react";
// // import "./styles.css";

// const Card = ({ data }) => {
//   return (
//     <div className="news-container">
//       {data.map((news, index) => (
//         <div key={index} className="news-card">
//           <img src={news.urlToImage} alt={news.title} className="news-image" />
//           <div className="news-content">
//             <h2 className="news-title">{news.title}</h2>
//             <p className="news-description">
//               {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
//             </p>
//             <div className="news-footer">
//               <span className="news-author">By {news.author || "Unknown"}</span>
//               <span className="news-source">{news.source.name}</span>
//             </div>
//             <a href={news.url} target="_blank" rel="noopener noreferrer" className="read-more">
//               Read More →
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

import React from 'react';
// import './Card.css';

const Card = ({ data, darkMode }) => {
    return (
        <div className="card-container">
            {data && data.length > 0 ? (
                data.map((article, index) => (
                    <div key={index} className={`card ${darkMode ? 'dark-card' : 'light-card'}`}>
                        <img src={article.urlToImage} alt="News" className="card-img" />
                        <div className="card-content">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <span>By {article.author || "Unknown"}</span>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read More
                            </a>
                        </div>
                    </div>
                ))
            ) : (
                <p>No News Found</p>
            )}
        </div>
    );
};

export default Card;
