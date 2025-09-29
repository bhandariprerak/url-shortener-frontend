import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const { url } = useParams();
    console.log("url:", url);
    useEffect(() => {
        if (url) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
        }
    }, [url]);
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <p className="text-white font-inter text-lg">Redirecting you to your destination...</p>
    </div>
  );
}

export default ShortenUrlPage