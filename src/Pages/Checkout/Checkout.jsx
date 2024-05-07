import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { title,_id, img,price} = service;
    const {user}  = useContext(AuthContext);
    console.log(service);
    const handleChekout = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const order = {name,email,date,price,service_id:_id,img,title};
        fetch('http://localhost:3000/checkout',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (

        <div>
            <form onSubmit={handleChekout} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="number" name='price' defaultValue={price} className="input input-bordered" required />
                        
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;