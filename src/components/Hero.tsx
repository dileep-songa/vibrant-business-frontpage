
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Grow Your Business
              <span className="text-primary block">Digitally</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              We help small businesses thrive in the digital world with cutting-edge marketing strategies, 
              stunning web design, and data-driven solutions that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold hover-scale"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-end justify-center">
                    <div className="text-2xl font-bold text-gray-700">+245%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-pulse">
              💡
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-xl animate-pulse">
              📈
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
