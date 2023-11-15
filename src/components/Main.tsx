import React from 'react'
import { FaRegCalendarMinus, FaEllipsisV } from 'react-icons/fa';
import Chart from './Chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PieComponent from './PieComponent';
import { Progress } from 'antd';
import error from '../assets/error.png';
import { useUserContext } from '../userContext';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Main:React.FC =  () => {
    const { value } = useUserContext();
  const { user, setUser, loginState, logoutState } = value;

  const logoutUser = async () => {
    logoutState();
    window.location.href = "/";
  };
  
  return (
    <div className='p-[25px] px-[25px] bg-tertiary-container'>
        <div className='flex items-center justify-between'>
            <h1 className='text-primary text-[28px] leading-[14px] font-normal cursor-pointer'>DashBoard</h1>
            <button className='bg-info h-[32px] rounde-[3px] text-on-secondary flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
        </div>
        <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
            <div className='h-[100px] rounded-[8px] bg-on-primary border-l-[4px] border-secondary flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
                <div>
                    <h2 className='text-outline text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-outline mt-[5px]'>$40,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color=''/>
            </div>
            <div className='h-[100px] rounded-[8px] bg-on-primary border-l-[4px] border-secondary flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
                <div>
                    <h2 className='text-success text-[11px] leading-[17px] font-bold'>EARNINGS (ANNUALLY)</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-outline mt-[5px]'>$40,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color=''/>
            </div>
            <div className='h-[100px] rounded-[8px] bg-on-primary border-l-[4px] border-secondary flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
                <div>
                    <h2 className='text-primary text-[11px] leading-[17px] font-bold'>TASKS</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-outline mt-[5px]'>$40,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color=''/>
            </div>
            <div className='h-[100px] rounded-[8px] bg-on-primary border-l-[4px] border-secondary flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in'>
                <div>
                    <h2 className='text-warning text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
                    <h1 className='text-[20px] leading-[24px] font-bold text-outline mt-[5px]'>$40,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color=''/>
            </div>
        </div>
        <div className='flex mt-[22px] w-full gap-[30px]'>
            <div className='basis-[70%] border bg-on-primary shadow-md cursor-pointer rounded-[4px]'>
               <div className='bg-tertiary-container flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-on-primary mb-[20px]'>
                <h2>Earnings overview</h2>
                <FaEllipsisV color='gray' className='cursor-pointer' />
            </div>
            <div>
                <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
            </div>
            </div>
            <div className='basis-[30%] border bg-on-primary shadow-md cursor-pointer rounded-[4px]'>
                <div className='bg-tertiary-container flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-on-secondary'>
                    <h2>Revenue resource</h2>
                    <FaEllipsisV color='gray' className='cursor-point' />
                </div>
                <div className='pl-[35px] py-[20px]'>
                    <PieComponent/>
                </div>
            </div>
        </div>
        <div className='flex mt-[22px] w-full gap-[30px]'>
            <div className='basis-[55%] border bg-on-primary cursor-pointer rounded-[4px]'>
                <div className='bg-tertiary-container flex items-center justify-between py-[15px] px-[20px]'>
                    <h2 className='text-secondary text-[16px] leading-[19px] font-bold'>Projects Overview</h2>
                    <FaEllipsisV color='gray' className='cursor-pointer' />
                </div>
                <div className='px-[25px] space-y-[15px] py-[15px]'>
                    <div className=''>
                        <h2>Server migration</h2>
                        <Progress percent={30} strokeColor="#E74A3B" />
                    </div>
                    <div className=''>
                        <h2>Sales tracking</h2>
                        <Progress percent={30} status='active' strokeColor="#F6C23E" />
                    </div>
                </div>
            </div>
            <div className='basis-[45%] border bg-on-primary cursor-pointer rounded-[4px]'>
                <div className='bg-tertiary-container flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-on-secondary'>
                    <h2 className='text-secondary text-[16px] leading-[19px] font-bold'>Resources</h2>
                    <FaEllipsisV color='gray' className='cursor-pointer'/>
                </div>
                <div className='pl-[35px] flex items-center justify-center h-[100%]'>
                    <div className=' block items-center justify-center'>
                        <img src={error} alt='error loading data' style={{ height: 50, width: 50}}/>
                        <p className='text-center mt-[15px] font-semibold text-gay-500'>No data available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;