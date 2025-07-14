
import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our seasoned professionals bring years of digital marketing expertise to every project."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business growth and ROI."
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized for excellence in digital marketing and web design by industry leaders."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About DigitalPro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2019, DigitalPro has been at the forefront of digital transformation, 
            helping small and medium businesses establish their online presence and achieve remarkable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              We started DigitalPro with a simple mission: to democratize digital marketing for small businesses. 
              We noticed that many small business owners struggled with the complexity and cost of digital marketing, 
              often missing out on the incredible opportunities the digital world offers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to have helped over 150 businesses transform their online presence, 
              increase their revenue, and build lasting relationships with their customers. Our approach combines 
              cutting-edge technology with personalized service to deliver solutions that truly work.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
              <p className="text-gray-700">
                To empower small businesses with world-class digital marketing solutions that drive growth, 
                build brand awareness, and create lasting customer relationships.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Growing Together</h4>
                <p className="text-gray-600">Since 2019, helping businesses soar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover-scale">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
