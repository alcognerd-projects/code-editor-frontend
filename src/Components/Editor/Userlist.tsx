import { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { IoMdMic, IoMdMicOff } from "react-icons/io";

interface User {
  username: string;
  email: string;
  fullName: string;
  age: number;
  isAdmin: boolean;
  isMic: boolean;
  address: {
    city: string;
    country: string;
  };
  lastLogin: Date;
}

const initialUsers: User[] = [
  {
    username: "arjun_verma",
    email: "arjun.verma@example.com",
    fullName: "Arjun Verma",
    age: 28,
    isAdmin: false,
    isMic: false,
    address: { city: "Delhi", country: "India" },
    lastLogin: new Date("2025-03-06T10:00:00"),
  },
  {
    username: "priya_sharma",
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    age: 26,
    isAdmin: false,
    isMic: false,
    address: { city: "Mumbai", country: "India" },
    lastLogin: new Date("2025-03-06T12:30:00"),
  },
  {
    username: "rahul_nair",
    email: "rahul.nair@example.com",
    fullName: "Rahul Nair",
    age: 30,
    isAdmin: true,
    isMic: false,
    address: { city: "Bangalore", country: "India" },
    lastLogin: new Date("2025-03-07T08:15:00"),
  },
  {
    username: "aisha_khan",
    email: "aisha.khan@example.com",
    fullName: "Aisha Khan",
    age: 27,
    isAdmin: true,
    isMic: false,
    address: { city: "Hyderabad", country: "India" },
    lastLogin: new Date("2025-03-07T09:45:00"),
  },
  {
    username: "sanjay_patel",
    email: "sanjay.patel@example.com",
    fullName: "Sanjay Patel",
    age: 35,
    isAdmin: false,
    isMic: false,
    address: { city: "Ahmedabad", country: "India" },
    lastLogin: new Date("2025-03-07T11:20:00"),
  },
  {
    username: "vikram_singh",
    email: "vikram.singh@example.com",
    fullName: "Vikram Singh",
    age: 32,
    isAdmin: true,
    isMic: false,
    address: { city: "Jaipur", country: "India" },
    lastLogin: new Date("2025-03-06T15:50:00"),
  },
  {
    username: "rhea_das",
    email: "rhea.das@example.com",
    fullName: "Rhea Das",
    age: 25,
    isAdmin: false,
    isMic: false,
    address: { city: "Kolkata", country: "India" },
    lastLogin: new Date("2025-03-07T07:30:00"),
  },
  {
    username: "meera_iyer",
    email: "meera.iyer@example.com",
    fullName: "Meera Iyer",
    age: 24,
    isAdmin: false,
    isMic: false,
    address: { city: "Chennai", country: "India" },
    lastLogin: new Date("2025-03-06T22:10:00"),
  },
];

const Userlist = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const toggleMic = (index: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, isMic: !user.isMic } : user
      )
    );
  };

  return (
    <div className="h-[90%] w-full   rounded-md flex flex-col gap-2 py-1 justify-between text-slate-100 py-2">
      <div className="h-[560px] w-full border-2 border-blue-300 rounded-md p-1">
        <ul className="h-full w-full grid grid-cols-1 gap-2 p-2 overflow-y-auto">
          {users.map((user, index) => (
            <li
              key={index}
              className="bg-gray-700 p-2 h-[175px] rounded-md flex items-end justify-between">
              <button onClick={() => toggleMic(index)}>
                {user.isMic ? (
                  <IoMdMic className="text-green-500 cursor-pointer text-xl " />
                ) : (
                  <IoMdMicOff className="text-red-500 cursor-pointer text-xl" />
                )}
              </button>
              <p className="font-semibold">{user.fullName}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[70px] w-full flex justify-around items-center p-2 rounded-md">
        <button className="py-2 px-8 bg-blue-700 rounded-md cursor-pointer text-white">
          <FaMicrophone />
        </button>
        <button className="py-2 px-8 bg-green-600 rounded-md cursor-pointer text-white font-bold">
          <IoShareSocial />
        </button>
      </div>
    </div>
  );
};

export default Userlist;
