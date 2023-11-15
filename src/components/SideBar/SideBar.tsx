    import React, { useState } from 'react'
    import { FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench, FaRegChartBar, FaStickyNote, FaRegCalendarAlt, FaChevronLeft, FaBolt } from 'react-icons/fa';

    export default function SideBar() {
        
    return (
        <div className='bg-primary h-screen px-[25px]'>
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-secondary/[0.3]'>
                <h1 className='text-on-primary text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-secondary/[0.3]'>
                <FaTachometerAlt color='white'/>
                <p className='text-[14px] leading-[20px] font-bold text-on-primary'>Dahboard</p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-secondary/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-on-primary/[0.4]'>INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-on-primary'>Pages</p>
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-on-primary'>Charts</p>
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                
            </div>
            <div className='pt-[15px] border-b-[1px] border-secondary/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-on-primary/[0.4]'>ADDONS</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-on-primary'>Components</p>
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-on-primary'>Utilities</p>
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegCalendarAlt color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-on-primary'>Tables</p>
                    </div>
                    <FaChevronRight color='white'/>
                </div>
            </div>
            
            <div className='flex items-center justify-center pt-[15px]'>
                <div className='h-[40px] w-[40px] bg-secondary rounded-full flex items-center justify-center cursor-pointer'>
                    <FaChevronLeft color='white'/>
                </div>
            </div>
            <div className='bg-secondary mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <FaBolt color='white'/>
                <p className='text-[12px] leading-[18px] font-normal text-on-primary/[0.4] text-center'>Lorem ipsum</p>
                <button className='bg-success text-on-secondary flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Upgrade to pro!</button>
            </div>
            </div>
        
    )
    }
