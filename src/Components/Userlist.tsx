
import { FaMicrophone } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
interface User {
    username: string;
    email: string;
    fullName: string;
    age: number;
    isAdmin: boolean;
    address: {
        city: string;
        country: string;
    };
    lastLogin: Date;
}

const users: User[] = [
    {
        username: "arjun_verma",
        email: "arjun.verma@example.com",
        fullName: "Arjun Verma",
        age: 28,
        isAdmin: false,
        address: { city: "Delhi", country: "India" },
        lastLogin: new Date("2025-03-06T10:00:00")
    },
    {
        username: "priya_sharma",
        email: "priya.sharma@example.com",
        fullName: "Priya Sharma",
        age: 26,
        isAdmin: false,
        address: { city: "Mumbai", country: "India" },
        lastLogin: new Date("2025-03-06T12:30:00")
    },
    {
        username: "rahul_nair",
        email: "rahul.nair@example.com",
        fullName: "Rahul Nair",
        age: 30,
        isAdmin: true,
        address: { city: "Bangalore", country: "India" },
        lastLogin: new Date("2025-03-07T08:15:00")
    },
    {
        username: "aisha_khan",
        email: "aisha.khan@example.com",
        fullName: "Aisha Khan",
        age: 27,
        isAdmin: true,
        address: { city: "Hyderabad", country: "India" },
        lastLogin: new Date("2025-03-07T09:45:00")
    },
    {
        username: "sanjay_patel",
        email: "sanjay.patel@example.com",
        fullName: "Sanjay Patel",
        age: 35,
        isAdmin: false,
        address: { city: "Ahmedabad", country: "India" },
        lastLogin: new Date("2025-03-07T11:20:00")
    },
    {
        username: "meera_iyer",
        email: "meera.iyer@example.com",
        fullName: "Meera Iyer",
        age: 24,
        isAdmin: false,
        address: { city: "Chennai", country: "India" },
        lastLogin: new Date("2025-03-06T22:10:00")
    },
    {
        username: "vikram_singh",
        email: "vikram.singh@example.com",
        fullName: "Vikram Singh",
        age: 32,
        isAdmin: true,
        address: { city: "Jaipur", country: "India" },
        lastLogin: new Date("2025-03-06T15:50:00")
    },
    {
        username: "rhea_das",
        email: "rhea.das@example.com",
        fullName: "Rhea Das",
        age: 25,
        isAdmin: false,
        address: { city: "Kolkata", country: "India" },
        lastLogin: new Date("2025-03-07T07:30:00")
    },
    {
        username: "anirudh_reddy",
        email: "anirudh.reddy@example.com",
        fullName: "Anirudh Reddy",
        age: 29,
        isAdmin: false,
        address: { city: "Pune", country: "India" },
        lastLogin: new Date("2025-03-07T06:40:00")
    },
    {
        username: "tanvi_joshi",
        email: "tanvi.joshi@example.com",
        fullName: "Tanvi Joshi",
        age: 23,
        isAdmin: true,
        address: { city: "Nagpur", country: "India" },
        lastLogin: new Date("2025-03-07T04:55:00")
    }
];


const Userlist = () => {
  return (
    <div className="h-full w-full bg-gray-900  border-2 border-blue-300 rounded-md flex  flex-col text-slate-100  ">
        <div className="h-full w-full ">

        <ul className="h-4/5 w-full flex flex-col justify-between   ">
         
        {users.map((user,index)=><li key={index} className="px-5 py-4">{user.username}</li>)}
        </ul>

        </div>
        <div className="h-full w-full flex justify-around items-center p-2">
            <button className="py-3 px-8 bg-blue-700 rounded-md cursor-pointer text-white">
            <FaMicrophone/>
            </button>
            <button className="py-3 px-8 bg-green-600 rounded-md cursor-pointer text-white font-bold ">
            <IoShareSocial/>
            </button>
        </div>
       
    </div>
  )
}

export default Userlist
