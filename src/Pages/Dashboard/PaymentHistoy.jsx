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
        <div className="px-4 md:px-6 lg:px-8 py-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700">Payment History</h2>
                <p className="text-sm text-gray-400 mt-1">Total transactions: {payments.length}</p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl shadow-md">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Transaction ID</th>
                            <th className="py-3 px-4">Amount</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id} className="hover:bg-orange-50 transition-colors duration-150 border-b border-gray-100">
                                <td className="py-3 px-4 text-gray-500 font-medium">
                                    {index + 1}
                                </td>
                                <td className="py-3 px-4 text-xs md:text-sm font-mono text-gray-600 break-all">
                                    {payment.transactionId}
                                </td>
                                <td className="py-3 px-4 text-orange-500 font-bold">
                                    ${payment.price.toFixed(2)}
                                </td>
                                <td className="py-3 px-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        payment.status === 'paid'
                                            ? 'bg-green-100 text-green-700'
                                            : payment.status === 'pending'
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                    }`}>
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-gray-500 text-xs md:text-sm whitespace-nowrap">
                                    {new Date(payment.date).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Empty State */}
                {payments.length === 0 &&
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-4xl mb-3">💳</p>
                        <p className="text-lg font-medium">No payment history found</p>
                        <p className="text-sm mt-1">Your transactions will appear here</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default PaymentHistoy;