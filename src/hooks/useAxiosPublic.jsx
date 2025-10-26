import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-production-d1dd.up.railway.app/'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;