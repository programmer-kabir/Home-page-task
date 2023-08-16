import React, { useEffect, useState } from 'react';

const TeamMembersData = () => {
    const [teamData, setTeamData] = useState([]);
     
    useEffect(() => {
        fetch('/public/API/TeamMember.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTeamData(data);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return [teamData]
};

export default TeamMembersData;