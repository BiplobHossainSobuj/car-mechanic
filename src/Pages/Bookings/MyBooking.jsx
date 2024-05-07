import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const MyBooking = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:3000/checkout?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = (id)=>{
        const process = confirm("Are you sure");
        if(process){
            fetch(`http://localhost:3000/checkout/${id}`,{
                method:"DELETE",
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    const remaining = services.filter(service=>service._id!==id);
                    setServices(remaining);
                }
            })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service=><BookingRow key={service._id} handleDelete={handleDelete} bookingInfo={service}></BookingRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBooking;