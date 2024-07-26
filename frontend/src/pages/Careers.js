import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the ArrowLeft icon
import career from '../assest/career.jpg'

const Careers = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
            Careers
          </Typography>
          <Typography variant="lead" className="text-lg lg:text-xl text-gray-600">
            Join our team and be part of our journey towards innovation and excellence.
          </Typography>
        </div>

        {/* Current Openings Section */}
        <div className="mb-16">
          <Typography variant="h3" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 text-center">
            Current Openings
          </Typography>
          <div className="space-y-8">
            {/* Job Listing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                Software Engineer
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700 mb-4">
                We are looking for a talented Software Engineer to join our development team. The ideal candidate should have experience with modern web technologies and a passion for coding.
              </Typography>
              <Link to="/apply" className="inline-block">
                <Button
                  color="blue"
                  size="md"
                  className="flex items-center gap-2 px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Job Listing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                Marketing Manager
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700 mb-4">
                We are seeking a creative Marketing Manager to lead our marketing efforts. The successful candidate will have experience in developing marketing strategies and managing campaigns.
              </Typography>
              <Link to="/apply" className="inline-block">
                <Button
                  color="blue"
                  size="md"
                  className="flex items-center gap-2 px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Job Listing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                UX/UI Designer
              </Typography>
              <Typography className="text-base lg:text-lg text-gray-700 mb-4">
                We are on the lookout for a UX/UI Designer who is passionate about creating user-centered designs. The ideal candidate will have a strong portfolio and experience with design tools.
              </Typography>
              <Link to="/apply" className="inline-block">
                <Button
                  color="blue"
                  size="md"
                  className="flex items-center gap-2 px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Company Culture Section */}
        <div className="mb-16">
          <Typography variant="h3" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 text-center">
            Our Company Culture
          </Typography>
          <Typography className="text-base lg:text-lg text-gray-700 mb-8">
            At Digital Deals, we foster a collaborative and inclusive environment where every team member's voice is heard. Our culture is built on the values of innovation, respect, and continuous learning. We believe in empowering our employees to reach their full potential and celebrate their achievements.
          </Typography>
          <div className="flex justify-center">
            <img
              src={career}
              alt="Company Culture"
              className="object-cover w-full h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="mb-16">
          <Typography variant="h3" className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 text-center">
            How to Apply
          </Typography>
          <Typography className="text-base lg:text-lg text-gray-700 mb-6">
            Ready to join our team? Applying is easy! Follow these steps to submit your application:
          </Typography>
          <ol className="list-decimal list-inside text-base lg:text-lg text-gray-700 mb-6 ml-6">
            <li>Visit our <Link to="/careers" className="text-blue-600 hover:underline">Application Page</Link>.</li>
            <li>Choose the position you are interested in.</li>
            <li>Fill out the online application form with your details and resume.</li>
            <li>Submit your application and wait for a response from our HR team.</li>
          </ol>
          <Typography className="text-base lg:text-lg text-gray-700">
            We look forward to hearing from you and exploring the possibilities of working together!
          </Typography>
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <Link to="/" className="inline-block">
            <Button
              color="blue"
              size="lg"
              className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaArrowLeft size={20} />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;
