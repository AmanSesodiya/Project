// src/Blog.js
import React from 'react';
import { Typography, Card, CardBody, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import hook from '../assest/hook.png'
import css from '../assest/css.jpeg'
import js from '../assest/js.png'



// Sample blog posts with more detailed content and images
const blogPosts = [
  {
    title: 'Understanding React Hooks',
    excerpt: 'React Hooks allow you to use state and other React features without writing a class. Learn how hooks can simplify your code and make it more reusable.',
    imageUrl: hook,
    link: '/blog',
    date: 'July 25, 2024',
    author: 'Jane Doe',
    content: 'In this article, we will dive deep into React Hooks, starting with the basics and moving on to more advanced use cases. We will cover useState, useEffect, and custom hooks, exploring how they can make your React components cleaner and more manageable. By the end of this article, you will have a solid understanding of how to use hooks to enhance your React applications.'
  },
  {
    title: 'Getting Started with Tailwind CSS',
    excerpt: 'Tailwind CSS is a utility-first CSS framework that can speed up your development process. Discover how to get started with Tailwind and its utility classes.',
    imageUrl: css,
    link: '/blog',
    date: 'July 18, 2024',
    author: 'John Smith',
    content: 'Tailwind CSS provides a set of utility classes that can be combined to build complex designs directly in your markup. This article will guide you through setting up Tailwind CSS in your project, understanding its utility classes, and using them to create responsive and stylish components. Tailwind’s approach to styling is different from traditional CSS frameworks, offering a more flexible and customizable way to design your web pages.'
  },
  {
    title: 'The Evolution of JavaScript Frameworks',
    excerpt: 'Explore the journey of JavaScript frameworks from their inception to modern-day advancements. This post will compare popular frameworks and their impact on web development.',
    imageUrl: js,
    link: '/blog',
    date: 'July 10, 2024',
    author: 'Alice Johnson',
    content: 'JavaScript frameworks have revolutionized web development over the years. From the early days of jQuery to the introduction of Angular, React, and Vue.js, each framework has brought its own set of features and benefits. This article will explore the evolution of these frameworks, how they have shaped modern web development, and what the future might hold for JavaScript frameworks. You will gain insights into the strengths and weaknesses of each framework and how they fit into the current web development landscape.'
  },
];

const blogCardStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  overflow: 'hidden',
};

const imgStyle = {
  height: '240px',
  objectFit: 'cover',
};

const buttonStyle = {
  background: 'linear-gradient(90deg, rgba(3, 182, 252, 1) 0%, rgba(3, 105, 252, 1) 100%)',
  color: '#fff',
  padding: '12px',
  borderRadius: '4px',
  width: '100%',
};

const Blog = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-center font-bold mb-12"
        >
          Blog
        </Typography>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} style={blogCardStyle}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={imgStyle}
              />
              <CardBody className="p-6">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="font-bold mb-2"
                >
                  {post.title}
                </Typography>
                <Typography color="blue-gray" className="text-sm mb-4">
                  {post.date} | By {post.author}
                </Typography>
                <Typography color="blue-gray" className="mb-4">
                  {post.excerpt}
                </Typography>
                <Link to={post.link}>
                  <Button
                    variant="gradient"
                    color="lightBlue"
                    ripple={true}
                    style={buttonStyle}
                  >
                    Read More
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
