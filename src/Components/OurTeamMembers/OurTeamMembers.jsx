import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


const OurTeamMembers = ({ teamMember }) => {
    const { image, name, position, social_links } = teamMember;

    return (
        <div className='shadow-md'>
            <img className='w-[350px]' src={image} alt="" />
            <div className='flex justify-between items-center bg-slate-300 p-2'>
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <h2 className='text-sm italic'>{position}</h2>
                </div>
                <div>
                    <ul  className='flex items-center gap-4'>
                        <li><FaFacebook></FaFacebook></li>
                        <li><FaLinkedin></FaLinkedin></li>
                        <li><FaTwitterSquare></FaTwitterSquare></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OurTeamMembers;