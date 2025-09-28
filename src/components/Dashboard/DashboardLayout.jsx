import { useState } from 'react'
import { motion } from 'framer-motion';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { useStoreContext } from '../../contextApi/ContextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from './ShortenUrlList'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'
import { dummyData } from '../../dummyData/data';

const DashboardLayout = () => {
    // const refetch = false;
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [shortenPopUp, setShortenPopUp] = useState(false);

    console.log(useFetchTotalClicks(token, onError));

    const {isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError)

    const {isLoading: loader, data: totalClicks} = useFetchTotalClicks(token, onError)

    function onError() {
      navigate("/error");
    }

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
        {loader ? ( 
            <Loader />
        ): ( 
        <div className="lg:w-[90%] w-full mx-auto py-16">
            <div className=" h-96 relative ">
                {totalClicks.length === 0 && (
                     <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                     <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                       No Data For This Time Period
                     </h1>
                     <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
                       Share your short link to view where your engagements are
                       coming from
                     </h3>
                   </div>
                )}
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={totalClicks}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='py-5 sm:text-end text-center'>
                <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg font-semibold text-black shadow-lg"
                    whileHover={{ scale: 1.07, boxShadow: "0 8px 24px rgba(255, 193, 7, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onClick={() => setShortenPopUp(true)}
                >
                    Create a New Short URL
                </motion.button>
            </div>

            <div>
              {!isLoading && myShortenUrls.length === 0 ? (
                <div className="flex justify-center pt-16">
                  <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
                    <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
                      You haven't created any short link yet
                    </h1>
                    <FaLink className="text-blue-500 sm:text-xl text-sm " />
                  </div>
              </div>
              ) : (
                  <ShortenUrlList data={myShortenUrls} />
              )}
            </div>
        </div>
        )}

        <ShortenPopUp
          refetch={refetch}
          open={shortenPopUp}
          setOpen={setShortenPopUp}
        />
    </div>
  )
}


// Testing with small dummy data graph

// const DashboardLayout = () => {
//     return (
//         <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
//             <div className="lg:w-[90%] w-full mx-auto py-16">
//                 <div className="h-96 flex justify-center items-center">
//                     <Graph graphData={dummyData} />
//                 </div>
//             </div>
//         </div>
//     )
// }

export default DashboardLayout