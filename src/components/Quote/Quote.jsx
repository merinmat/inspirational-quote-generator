import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "./Quote.css";

const BASE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function Quote() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const fetchData = await fetch(BASE_URL);
    const jsonResponse = await fetchData.json();
    const quoteText = jsonResponse.quote;
    setQuote(quoteText);
    setIsLoading(false);
  };

  {
    isLoading && <p>Loading...</p>;
  }

  return (
    <div className="quote">
      <div>{quote.text}</div>
      {isLoading && <p>Loading...</p>}

      <Typography color="text.secondary">- {quote.author}</Typography>

      <button className="button" onClick={fetchQuote}>
        Word of the Day
      </button>
    </div>
  );
}

export default Quote;
