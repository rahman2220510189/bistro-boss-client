import Cover from "../Shared/Cover/Cover";
import contact from'../../assets/contact/banner.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Address from "../Address/Address";
import ContactForm from "../ContactForm/ContactForm";

const ContactUs = () => {
    return (
        <div>
            <Cover img={contact} title={'CONTACT US'}></Cover>

            <SectionTitle 
            subHeading={'Visit Us'}
            heading={'our location'}
            ></SectionTitle>
            <Address></Address>
            <SectionTitle subHeading={'Send Us a Message'}
            heading={'CONTACT FORM'}
            >
                

            </SectionTitle>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;