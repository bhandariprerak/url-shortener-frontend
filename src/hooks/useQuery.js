import { useQuery } from "@tanstack/react-query"
import { urlApi, userApi } from "../api/api"


export const useFetchMyShortUrls = (token, onError) => {
    return useQuery({
        queryKey: ["my-shortenurls"],
        queryFn: async () => {
            return await urlApi.get(
                "/api/urls/myurls",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        select: (data) => {
            const sortedData = data.data.sort(
                (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
            );
            return sortedData;
        },
        onError,
        staleTime: 5000
    });
};

// Fetch total clicks within a date range and transform the data into an array of objects.
// Need to pass the Authorization token. If error occurs, call onError.
export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick"], // param1 - this is the query key
        queryFn: async () => { // param2 - this is the function that returns a promise
            return await urlApi.get(
                "/api/urls/totalClicks?startDate=2024-01-01&endDate=2030-12-31", // TODO: make the start and end date dynamic to take user input. For now, hardcoding it.
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        // param3 - this is the options object
        select: (data) => {
            // data.data =>
                //  {
                //     "2024-01-01": 120,
                //     "2024-01-02": 95,
                //     "2024-01-03": 110,
                //   };
                    
            const convertToArray = Object.keys(data.data).map((key) => ({
                clickDate: key,
                count: data.data[key], // data.data[2024-01-01]
            }));
            // Object.keys(data.data) => ["2024-01-01", "2024-01-02", "2024-01-03"]

            // FINAL:
            //   [
            //     { clickDate: "2024-01-01", count: 120 },
            //     { clickDate: "2024-01-02", count: 95 },
            //     { clickDate: "2024-01-03", count: 110 },
            //   ]
            return convertToArray;
        },
        onError,
        staleTime: 5000
    });
};