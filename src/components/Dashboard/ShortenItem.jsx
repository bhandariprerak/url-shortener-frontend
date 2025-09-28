import dayjs from 'dayjs';
import { useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import { LiaCheckSolid } from 'react-icons/lia';
import { MdAnalytics, MdOutlineAdsClick } from 'react-icons/md';
import api from '../../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../contextApi/ContextApi';
import { Hourglass } from 'react-loader-spinner';
import Graph from './Graph';
import { motion } from 'framer-motion';

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);
    const [analyticToggle, setAnalyticToggle] = useState(false);
    const [loader, setLoader] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState("");
    const [analyticsData, setAnalyticsData] = useState([]);

    const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(
        /^https?:\/\//,
        ""
      );

    const analyticsHandler = (shortUrl) => {
        if (!analyticToggle) {
            setSelectedUrl(shortUrl);
        }
        setAnalyticToggle(!analyticToggle);
    }

    const fetchMyShortUrl = async () => {
        setLoader(true);
        try {
             const { data } = await api.get(`/api/urls/analytics/${selectedUrl}?startDate=2024-12-01T00:00:00&endDate=2030-12-31T23:59:59`, { // TODO: change this date to dynamic date.
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                          Authorization: "Bearer " + token,
                        },
                      });
            setAnalyticsData(data);
            setSelectedUrl("");
            console.log(data);
            
        } catch (error) {
            navigate("/error");
            console.log(error);
        } finally {
            setLoader(false);
        }
    }


    useEffect(() => {
        if (selectedUrl) {
            fetchMyShortUrl();
        }
    }, [selectedUrl]);

  return (
    <div className={`bg-white shadow-md border border-gray-200 rounded-lg px-8 sm:py-6 py-5 transition-all duration-150 font-inter`}>
    <div className={`flex sm:flex-row flex-col sm:justify-between w-full sm:gap-0 gap-6 py-5 `}>
      <div className="flex-1 sm:space-y-2 max-w-full overflow-x-auto overflow-y-hidden ">
        <div className="text-gray-900 pb-2 sm:pb-0 flex items-center gap-3 font-semibold text-lg tracking-wide">
            <Link
              target='_blank'
              className='text-primary-600 hover:text-primary-800 underline underline-offset-2 transition-colors duration-200 font-inter font-semibold flex items-center gap-2'
              to={import.meta.env.VITE_REACT_FRONT_END_URL + '/' + `${shortUrl}`}>
                  {subDomain + '/' + `${shortUrl}`}
                  <FaExternalLinkAlt className="text-primary-600 text-[20px]" />
            </Link>
            </div>

        <div className="flex items-center gap-2 ">
            <h3 className=" text-gray-700 font-normal text-base font-inter break-words">
              {originalUrl}
            </h3>
          </div>

          <div className="flex items-center gap-10 pt-7 ">
            <div className="flex gap-2 items-center font-semibold text-green-700 text-lg">
              <MdOutlineAdsClick className="text-[26px]" />
              <span className="text-lg">{clickCount}</span>
              <span className="text-base ">
                {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>

            <div className="flex items-center gap-3 font-semibold text-lg text-gray-800">
              <FaRegCalendarAlt className="text-[22px]" />
              <span className="text-lg">
                {dayjs(createdDate).format("MMM DD, YYYY")}
              </span>
            </div>
            </div>
        </div>

        <div className="flex flex-1 sm:justify-end items-center gap-6">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(
                            // `${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`}` //TODO: use this later. add /s/ in backend. to avoid conflict with frontend or backend routes.
                            `${import.meta.env.VITE_REACT_FRONT_END_URL + '/' + `${shortUrl}`}` // this is what the copied link will look like.
                        );
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 2000);
                    } catch (err) {
                        // Optionally handle error
                    }
                }}
                className="flex cursor-pointer gap-2 items-center bg-blue-600 hover:bg-blue-700 py-3 px-7 rounded-lg shadow-lg text-white font-semibold select-none"
            >
                <button className="font-inter text-white">{isCopied ? "Copied" : "Copy"}</button>
                {isCopied ? (
                    <LiaCheckSolid className="text-lg" />
                ) : (
                    <IoCopy className="text-lg" />
                )}
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => analyticsHandler(shortUrl)}
                className="flex cursor-pointer gap-2 items-center bg-rose-600 hover:bg-rose-700 py-3 px-7 rounded-lg shadow-lg text-white font-semibold select-none"
            >
                <button className="font-inter">Analytics</button>
                <MdAnalytics className="text-lg" />
          </motion.div>
          </div>
        </div>
    <React.Fragment>
        <div className={`${
            analyticToggle ? "flex" : "hidden"
          } max-h-[500px] min-h-[500px] sm:mt-0 mt-6 relative border-t-2 w-full overflow-visible px-6 py-4 pb-8 rounded-b-lg bg-gray-50`}>
            {loader ? (
                <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
                    <div className="flex flex-col items-center gap-3">
                    <Hourglass
                        visible={true}
                        height="60"
                        width="60"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#2563eb', '#3b82f6']}
                        />
                        <p className='text-gray-700 font-inter text-base font-medium'>Please wait...</p>
                    </div>
                </div>
                ) : ( 
                    <>
                      {analyticsData.length === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                          <div className="bg-gray-100 border border-gray-300 shadow-md rounded-xl px-8 py-10 flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <h1 className="text-gray-800 font-serif text-2xl sm:text-3xl font-bold mb-4 font-inter text-center">
                              No Data For This Time Period
                            </h1>
                            <h3 className="text-center text-lg sm:text-xl text-gray-600 font-inter mt-2">
                              Share your short link to view where your engagements are coming from
                            </h3>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-center items-center w-full h-full">
                        <Graph graphData={analyticsData} />
                      </div>
                    </>
                    )}
        </div>
    </React.Fragment>
    </div>
  )
}

export default ShortenItem