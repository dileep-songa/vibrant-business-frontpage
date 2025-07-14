
import React from 'react';
import { Globe, Search, PenTool, BarChart3, Smartphone, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Custom, responsive websites that convert visitors into customers with modern design and optimal user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      price: "Starting at $2,999"
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improve your search rankings and drive organic traffic with our proven SEO strategies and techniques.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Local SEO"],
      price: "Starting at $899/month"
    },
    {
      icon: PenTool,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social media platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
      price: "Starting at $1,299/month"
    },
    {
      icon: BarChart3,
      title: "Digital Analytics",
      description: "Data-driven insights to optimize your marketing performance and maximize your return on investment.",
      features: ["Performance Tracking", "Conversion Analysis", "Custom Reports", "ROI Optimization"],
      price: "Starting at $599/month"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide exceptional user experiences.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
      price: "Starting at $9,999"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store setup and optimization to maximize your e-commerce sales and conversions.",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Marketing Automation"],
      price: "Starting at $4,999"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover-scale">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              We understand that every business is unique. Let's discuss how we can create a tailored 
              digital marketing strategy that fits your specific needs and budget.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
