import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const ChakeOutForm = () => {
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState('')
    const elements = useElements();
    const [transactionId, setTransactionId] = useState('')
    const {user} = useAuth();
    const [error, setError] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(()=>{
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null){
            return
        }

        setIsProcessing(true)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
        })
        if(error){
            console.log('payment error', error)
            setError(error.message);
            setIsProcessing(false)
        }
        else{
            console.log('payment method', paymentMethod)
            setError('')
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if(confirmError){
            console.log('confirm error')
            setIsProcessing(false)
        }
        else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                };

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                refetch();
                setIsProcessing(false)
            }
        }
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">

                {/* Order Summary */}
                <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Amount to Pay</p>
                    <p className="text-3xl font-bold text-orange-500">${totalPrice.toFixed(2)}</p>
                    <p className="text-xs text-gray-400 mt-1">{cart.length} item(s) in cart</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Card Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Card Details
                        </label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 focus-within:border-orange-400 transition-colors duration-200">
                            <CardElement
                                options={{
                                    style:{
                                        base:{
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid:{
                                            color: '#9e2146',
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Error Message */}
                    {error &&
                        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                            <span>⚠️</span>
                            <p>{error}</p>
                        </div>
                    }

                    {/* Success Message */}
                    {transactionId &&
                        <div className="flex items-start gap-2 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
                            <span>✅</span>
                            <div>
                                <p className="font-semibold">Payment Successful!</p>
                                <p className="text-xs mt-1 break-all">Transaction ID: {transactionId}</p>
                            </div>
                        </div>
                    }

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!stripe || !clientSecret || isProcessing}
                        className="btn w-full bg-orange-500 hover:bg-orange-600 text-white border-0 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {isProcessing ? (
                            <span className="flex items-center gap-2">
                                <span className="loading loading-spinner loading-sm"></span>
                                Processing...
                            </span>
                        ) : (
                            `Pay $${totalPrice.toFixed(2)}`
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChakeOutForm;