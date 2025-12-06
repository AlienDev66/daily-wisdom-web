import { useState } from "react";

import { useApiFetchQuotes } from "./api-fetch-get-quotes";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const { data: quote, isLoading, refetch } = useApiFetchQuotes();

  // const fetchQuote = async () => {
  //   const { data } = await axios.get("https://buddha-api.com/api/random");
  //   return data.quote;
  // };

  // const {
  //   data: quote,
  //   isLoading,
  //   refetch,
  // } = useQuery("dailyQuote", fetchQuote, {
  //   refetchOnWindowFocus: false,
  // });

  const handleCopy = () => {
    navigator.clipboard.writeText(quote?.text!);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      quote?.text!
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  console.log("QUOTES", quote);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">✨ Daily Wisdom ✨</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 text-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p
              onClick={handleCopy}
              className="text-xl mb-4 cursor-pointer hover:underline"
              title="Click to copy">
              {quote?.text}
            </p>
            {copied && (
              <p className="text-green-400 text-sm">Copied to clipboard!</p>
            )}
            <button
              onClick={handleShareWhatsApp}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-white font-medium transition">
              Share on WhatsApp
            </button>
          </>
        )}
      </div>
      <p className="text-sm mt-4 text-gray-400">
        Return tomorrow for a new dose of inspiration ✨
      </p>
      <button
        onClick={() => refetch()}
        className="mt-4 text-blue-400 hover:underline text-sm">
        Refresh Quote
      </button>
    </div>
  );
}
