import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="gwmdrupasinghe@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 763 301 158" Image={FiPhone} />
      <SingleInfo text="Srilanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
