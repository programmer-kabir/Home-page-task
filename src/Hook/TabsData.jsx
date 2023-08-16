import { useEffect, useState } from "react";


const TabsData = () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        fetch('/public/API/TableDataAll.json')
            .then(res => res.json())
            .then(data => {
      
                setTableData(data)
            })
            .catch(error => console.log(error))
    }, [])
    return [tableData];
};

export default TabsData;