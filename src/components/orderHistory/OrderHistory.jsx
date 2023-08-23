import React, { useState } from 'react'
import './orderHistory.css';
import { useDispatch } from 'react-redux'
import { setLoading } from '../../features/productsSlice.tsx'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const OrderHistory = () => {

    const [orders, setOrders] = useState();
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {

        const fetchOrders = async () => {

            dispatch(setLoading(true));

            try {

            const response = await fetch(`${process.env.REACT_APP_BASE_URL}orders/user/${user.sub}`);
            const json = await response.json();

            if (response.ok) {
                dispatch(setLoading(false));
                setOrders(json);
                console.log(json);
            }

            } catch(err) {
                dispatch(setLoading(false));
                console.log(err.message);
            }
        }

        fetchOrders();

    }, [user]);



  return (
    <div className='orderHistory'>
        <h2>Order History</h2>
        <div className="orderHistory__container">
        
            <table className='orderHistory_table' >
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Item Count</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    { orders && orders.map((order, key) => {
                        return (<tr key={key}>
                            <td>{order._id}</td>
                            <td>21/08/2023</td>
                            <td>{order.paymentStatus}</td>
                            <td>{order.itemCount}</td>
                            <td>{order.value}</td>
                        </tr>)
                    }) }
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default OrderHistory