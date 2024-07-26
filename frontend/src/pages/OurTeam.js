import React from 'react';
import { Typography, Card, CardBody } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import pic1 from '../assest/pic1.jpeg';
import pic2 from '../assest/pic2.jpeg';
import pic4 from '../assest/pic4.jpeg';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    imageUrl: pic1,
    bio: 'John is the visionary behind our company, with over 20 years of experience in the industry.',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    imageUrl: pic2,
    bio: 'Jane leads our technology team with a passion for innovation and a background in software engineering.',
  },
  {
    name: 'Mike Johnson',
    position: 'COO',
    imageUrl: pic4,
    bio: 'Mike ensures our operations run smoothly, bringing a wealth of experience in operational management.',
  },
];

const OurTeam = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-center font-bold mb-12"
        >
          Meet Our Team
        </Typography>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <Card className="bg-white">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} // Adjust dimensions here
                />
                <CardBody className="text-center p-6">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold mb-2"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="blue-gray"
                    className="text-sm uppercase tracking-wide mb-4"
                  >
                    {member.position}
                  </Typography>
                  <Typography color="blue-gray" className="text-sm">
                    {member.bio}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
