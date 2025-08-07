import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const PaymentHistoy = () => {
    const [payments, setPayments] = useState([]);
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
      useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/payments/${user.email}`).then((res) => {
        setPayments(res.data);
      });
    }
  }, [axiosSecure, user]);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment.transactionId}</td>
                <td>${payment.price}</td>
                <td>{payment.status}</td>
                <td>{new Date(payment.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default PaymentHistoy;