import React from 'react';
import Content from '../Content';

const ServiceFrom = () => {
    return (
        <Content>
            <div data-aos="fade-up"
     data-aos-duration="2000">
            <div className='grid lg:grid-cols-2 my-20 gap-20 lg:w-full w-[500px]'>

                <div className='h-[500px] lg:w-full w-[400px] mx-auto'>
                    <h2 className='text-3xl font-semibold mb-5'>Get Quite for Service</h2>
                    <p>
                        The error message you're encountering "Cannot read properties of undefined reading 'filter" usually occurs when you're trying to perform
                    </p>

                    <div>
                        <form className=' py-10 space-y-5'>
                            <div className='flex gap-5'>
                                <input className='border w-[50%] p-2' type="text" name="" id="" placeholder='First name' />
                                <input className='border  w-[50%] p-2' type="text" name="" id="" placeholder='Last Name' />
                            </div>
                            <div className='flex gap-5'>
                                <input className='border w-[50%] p-2' type="text" name="" id="" placeholder='Email' />

                                <div className="w-[50] md:w-1/3   mb-6 md:mb-0">                                    
                                    <div className="relative w-full">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <textarea className='border w-full h-[100px]' placeholder='Write Your Message'>

                                </textarea>

                            </div>

                            <div className='   flex justify-end'>
                                <button className='bg-orange-600 p-2 text-white rounded-md'>Submit</button>
                            </div>

                        </form>
                    </div>

                </div>
                <div  className='h-[500px] w-full'>
                    <img className='h-[400px] w-full' src="https://i.ibb.co/gmjqmM0/photo-1514432324607-a09d9b4aefdd.jpg" alt="" />
                </div>
                </div>
            </div>
        </Content>
    );
};

export default ServiceFrom;