
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Bloom Bakery",
      image: "👩‍💼",
      rating: 5,
      text: "DigitalPro transformed our online presence completely. Our website looks amazing and our online orders have increased by 300% in just 6 months. Their team is professional, responsive, and truly understands small business needs."
    },
    {
      name: "Michael Chen",
      company: "Tech Repair Solutions",
      image: "👨‍💻",
      rating: 5,
      text: "The SEO results speak for themselves - we're now ranking #1 for our main keywords and getting 5x more organic traffic. The ROI has been incredible. I couldn't be happier with their service and expertise."
    },
    {
      name: "Emma Rodriguez",
      company: "Fitness First Gym",
      image: "👩‍🏫",
      rating: 5,
      text: "Their social media management has been a game-changer for us. Our engagement rates have skyrocketed and we're attracting new members every week. The content they create is exactly what our audience wants to see."
    },
    {
      name: "David Thompson",
      company: "Thompson Law Firm",
      image: "👨‍💼",
      rating: 5,
      text: "Professional, reliable, and results-driven. DigitalPro helped us establish a strong online presence and now we're getting high-quality leads regularly. Their attention to detail and strategic approach impressed us from day one."
    },
    {
      name: "Lisa Park",
      company: "Artisan Coffee Roasters",
      image: "👩‍🍳",
      rating: 5,
      text: "The e-commerce website they built for us is beautiful and functional. Online sales now make up 40% of our revenue, and the user experience is seamless. Their ongoing support has been exceptional."
    },
    {
      name: "Robert Williams",
      company: "Home Renovation Plus",
      image: "👷‍♂️",
      rating: 5,
      text: "DigitalPro's digital marketing strategy helped us double our business in one year. The lead generation system they set up brings us consistent, high-quality prospects. Best investment we've made for our business."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real business owners have to say about their experience with DigitalPro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover-scale relative">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Success Stories</h3>
            <p className="text-gray-600 mb-6">
              Ready to see similar results for your business? Let's discuss how we can help you achieve your digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
