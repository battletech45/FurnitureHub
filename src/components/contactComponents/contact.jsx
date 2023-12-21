import React from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import { MapPin, Phone, Clock4 } from "lucide-react";
import ContactData from "./contactData";
import ContactField from "./contactField";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";

const ContactPage = () => {
  return (
    <div className="bg-white flex flex-col">
      <Navbar bgColor={"white"} />
      <HeroBanner title={"Contact"} />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-black font-semibold text-4xl mb-2">
          Get In Touch With Us
        </h2>
        <h4 className="text-[#9F9F9F] text-center text-base font-normal w-2/5">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </h4>
        <div className="flex items-start justify-evenly mt-32 w-full">
          <div className="flex flex-col gap-8">
            <ContactData
              title={"Address"}
              data={"236 5th SE Avenue, New York NY10000, United States"}
              photo={<MapPin color="black" />}
            />
            <ContactData
              title={"Phone"}
              data={"Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"}
              photo={<Phone color="black" />}
            />
            <ContactData
              title={"Working Time"}
              data={"Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"}
              photo={<Clock4 color="black" />}
            />
          </div>
          <div className="gap-12 flex flex-col">
            <ContactField title={"Your name"} />
            <ContactField title={"Email address"} />
            <ContactField title={"Subject"} />
            <ContactField title={"Message"} />
            <button
              type="submit"
              className="py-2 px-16 rounded-2xl border border-black cursor-pointer text-black text-xl font-normal w-56 mb-20"
            >
              Submit
            </button>
          </div>
        </div>
        <Banner />
        <Footer />
        <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
        <div className="justify-start items-start flex w-9/12">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
