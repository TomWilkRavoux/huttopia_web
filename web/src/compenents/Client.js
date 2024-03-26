import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../index.css';

export  function Client() {

    const  [data,setData] = useState([])

    const loaddata = async () => {
        const response = await axios.get("http://localhost:5000/api/get")
        console.log(response.data)
        setData(response.data)

    }

    useEffect(()=>{
        loaddata()
    })

  return (

    

    <div>
        <table >
          <thead>
            <th className='text-blue'>id</th>
            <th>nom</th>
            <th>emplacement</th>
            <th>email</th>
            <th>telephone</th>
          </thead>
          <tbody>
            {data.map(da => (
              <tr>
                <td>{da.id_client}</td>
                <td>{da.nom}</td>
                <td>{da.emplacement}</td>
                <td>{da.email}</td>
                <td>{da.telephone}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
