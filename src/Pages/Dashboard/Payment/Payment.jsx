import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import ChakeOutForm from "./ChakeOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMET_GATEWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'payment'} subHeading={'please pay to eat'}></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                 <ChakeOutForm></ChakeOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
