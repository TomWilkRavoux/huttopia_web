import axios from 'axios';
import { Client } from './client';

export function Delete(){
    const handleDelete = (id_client)=>{
        if(window.confirm('etes vous sur de vouloir supprimer ?')){
            axios.delete("hhttp://localhost:5000/api/remove/${id_client")
            setTimeout(()=>loadData(), 5000)
        }
    }
}