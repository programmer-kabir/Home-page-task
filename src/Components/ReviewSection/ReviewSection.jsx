import React from 'react';
import Content from '../Content';
import TitleSection from '../../ShearSection/TitleSection/TitleSection';
import TeamMembersData from '../../Hook/TeamMembersData';
import OurTeamMembers from '../OurTeamMembers/OurTeamMembers';

const ReviewSection = () => {
    const  [teamData] = TeamMembersData()
    console.log(teamData);
    return (
        <Content>
            <div>
                   <TitleSection title={'Our Special Team Member'} subTitle={'The error message you re encountering Cannot read properties of undefined reading filter usually occurs when you re trying to perform'}></TitleSection>
            </div>

            <div className='grid grid-cols-4 gap-5'>
                {
                    teamData.slice(0,4).map(teamMember => <OurTeamMembers key={teamMember.name} teamMember={teamMember}></OurTeamMembers>)
                }
            </div>

        </Content>
    );
};

export default ReviewSection;