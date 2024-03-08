import React, { useEffect, useState } from 'react'

const URL = 'https://reqres.in/api/users';

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(URL).then(resp => resp.json()).then(data => {
      console.log(data.data);
      const sortedData = data.data.sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });
      console.log(sortedData);
      setTableData(sortedData);
    })
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((item) => (
              <tr>
                <td>{item.first_name} {item.last_name}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table


