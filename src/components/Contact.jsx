import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Card, Input, Textarea, Button, Typography } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const onSubmit = async (data) => {
    setStatus("Sending...");
    try {
      // Send data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "298939c5-78f7-4da3-9c64-063ff9093e64", // Your access key
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        setStatus("");
      } else {
        toast.error("Failed to send message. Please try again.");
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Error occurred while sending the message.");
      setStatus("Error occurred while sending the message.");
    }

    reset();
    navigate("/"); // Redirect to home after submitting
  };

  return (
    <div id="contact" className="w-full py-16 lg:px-32">
      <div>
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-primary font-secondary underline text-center mb-2"
        >
          Contact
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-primary font-semibold text-lg mt-4 mb-8"
        >
          We are always here to help you
        </p>
        <div className="lg:flex lg:gap-6 lg:justify-center bg-[#f4f5ff] p-8 rounded-lg">
          {/* Contact Information */}
          <div
            data-aos="slide-left"
            className="lg:w-[40%] flex flex-col gap-6 border-t-2 border-b-2 border-[#000080] py-8 font-secondary text-primary"
          > 
           <a href="https://yashsuthar-portfolio.netlify.app/">
            <div  data-aos="fade-down" className="flex gap-4 items-center">
              <div  className="text-primary text-2xl p-4 bg-primary rounded-md">
                <PersonOutlineIcon />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Portfolio Web</h3>
                <p className="text-lg" >yashsuthar-portfolio.netlify.app</p>
              </div>
            </div>
            </a>
            <a href="http://linkedin.com/in/yash-suthar-23140028b">
            <div data-aos="fade-down" className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 bg-primary rounded-md">
                <LinkedInIcon />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="text-lg">yash-suthar-23140028b</p>
              </div>
            </div>
            </a>
            <div data-aos="fade-down" className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 bg-primary rounded-md">
                <MdOutlineMailOutline />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-lg">yashsuthar883@gmail.com</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 bg-primary rounded-md">
                <IoCall />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-lg">+91 7877209020</p>
              </div>
            </div>
            
            <div data-aos="fade-up" className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 bg-primary rounded-md">
                <FaLocationDot />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-lg">Rajasthan & Mumbai, India</p>
              </div>
            </div>
           
          </div>

          {/* Contact Form */}
          <div
            data-aos="slide-right"
            className="lg:w-[60%] p-6 border-t-2 border-b-2 border-[#000080] py-8 font-secondary text-primary"
          >
            <Card color="transparent" shadow={false}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mb-2 w-70 max-w-screen-lg sm:w-96"
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 text-primary"
                  >
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your name"
                    className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.name ? "border-red-500" : ""}`}
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}

                  <Typography variant="h6" className="-mb-3 text-primary">
                    Your Email
                  </Typography>
                  <Input
                    size="md"
                    placeholder="name@mail.com"
                    className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.email ? "border-red-500" : ""}`}
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}

                  <Typography variant="h6" className="-mb-3 text-primary">
                    Message
                  </Typography>
                  <Textarea
                    size="md"
                    label="Message"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="mt-6 bg-orange-600 hover:bg-orange-500 hover:shadow hover:shadow-orange-500 text-lg text-[#f4f5ff] rounded-xl px-4 py-2 transition-all duration-300"
                  fullWidth
                >
                  Send
                </Button>
              </form>
            </Card>
          </div>
        </div>
        {/* Status message */}
        {status && (
          <div className="mt-4 text-center">
            <Typography variant="h6" color="blue-gray">
              {status}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
