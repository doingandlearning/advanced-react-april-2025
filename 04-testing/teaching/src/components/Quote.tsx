import React, { useEffect, useState } from 'react';

export default function RandomQuote() {
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.example.com/quote');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setQuote(data.quote);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <p>Loading quote...</p>;
  if (error) return <p>Error: {error}</p>;
  return <blockquote>{quote}</blockquote>;
}
