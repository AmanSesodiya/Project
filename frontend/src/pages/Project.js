import React from 'react';
import { Typography, Card, CardBody, Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import alpha from '../assest/alpha.jpeg';
import beta from '../assest/beta.png';
import gamma from '../assest/gamma.png';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A comprehensive solution for managing business operations and enhancing productivity.',
    imageUrl: alpha,
    link: '#',
  },
  {
    title: 'Project Beta',
    description: 'An innovative platform that leverages AI to provide insightful data analysis.',
    imageUrl: beta,
    link: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile app that simplifies daily tasks and increases efficiency.',
    imageUrl: gamma,
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-center font-bold mb-12"
        >
          Our Projects
        </Typography>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shadow-lg rounded-lg overflow-hidden bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Card className="bg-white">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover" // Adjust the height here
                />
                <CardBody className="p-6 flex flex-col justify-between">
                  <div>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-bold mb-2"
                    >
                      {project.title}
                    </Typography>
                    <Typography color="blue-gray" className="mb-4">
                      {project.description}
                    </Typography>
                  </div>
                  <Button
                    color="blue"
                    className="mt-4"
                    href={project.link}
                    target="_blank"
                  >
                    Learn More
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
