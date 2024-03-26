import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



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

    const handleDelete = (id)=>{
        if(window.confirm('etes vous sur de vouloir supprimer ?')){
            axios.delete(`http://localhost:5000/api/remove/${id}`)
            setTimeout(()=>loaddata(), 5000)
        }
    }

    


return (
    <div>
        <table>
            <thead>
                <th>
                    id
                </th>
                <th>
                    nom
                </th>
                <th>
                    emplacement
                </th>
                <th>
                    email
                </th>
                <th>
                    telephone
                </th>
            </thead>
            <tbody>
                {
                    data.map(da => (
                        <tr>
                            <td>
                                {da.id}
                            </td>
                            <td>
                                {da.nom}
                            </td>
                            <td>
                                {da.emplacement}
                            </td>
                            <td>
                                {da.email}
                            </td>
                            <td>
                                {da.telephone}
                            </td>
                            <td>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>handleDelete(da.id)}>Supprimer</button>
                                <Link to={`/update/${da.id}`}>
                                <button class='bg-blue-700 text-white font-bold py-2 px-4 border' > modifier</button>
                                </Link>
                            </td>
                            
                        </tr>
                        
                    ))    
                }
                <Link to="/adduser" className='bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>ajouter</Link>
            </tbody>
        </table>
    </div>
)
}