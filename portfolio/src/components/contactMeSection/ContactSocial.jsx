import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/dhananjaya-rupasinghe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/GWMDhananjaya"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=99fvupj"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
