// src/ContactUs.js
import React, { useState } from 'react';
import { Typography, Input, Textarea, Button, Card, CardBody } from '@material-tailwind/react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(''); // Reset success message before submission

    try {
      // Here you would typically send the formData to your backend
      // For demonstration, we simulate a successful submission with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Show success message and reset form data
      setSuccessMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Handle submission error
      console.error('Submission error:', error);
      setSuccessMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl shadow-xl rounded-lg bg-white">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="text-center mb-6 font-bold"
            >
              Contact Us
            </Typography>
            {successMessage && (
              <Typography
                variant="body1"
                color={successMessage.includes('successfully') ? 'green' : 'red'}
                className="text-center mb-6 font-semibold"
              >
                {successMessage}
              </Typography>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    color="lightBlue"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    label="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    color="lightBlue"
                  />
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  label="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  color="lightBlue"
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  color="lightBlue"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
        <div className="mt-12 text-center">
          <Typography variant="body1" color="blue-gray" className="font-semibold">
            You can also reach us at:
          </Typography>
          <Typography variant="body1" color="blue-gray" className="mt-2">
            Email: <a href="mailto:support@example.com" className="text-lightBlue-500 hover:underline">support@example.com</a>
          </Typography>
          <Typography variant="body1" color="blue-gray" className="mt-2">
            Phone: <a href="tel:+1234567890" className="text-lightBlue-500 hover:underline">+1 234 567 890</a>
          </Typography>
          <Typography variant="body1" color="blue-gray" className="mt-2">
            Address: 1234 Main Street, Anytown, USA
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
