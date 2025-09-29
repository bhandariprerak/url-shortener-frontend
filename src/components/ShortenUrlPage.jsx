import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + `/${slug}`;
        }
    }, [slug]);
  return <p>Redirecting...</p>;
}

export default ShortenUrlPage