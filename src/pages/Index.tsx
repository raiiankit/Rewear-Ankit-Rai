
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Recycle, Users, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { featuredItems } from "@/data/mockData";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-orange-500/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              ReWear
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join the sustainable fashion revolution. Exchange, reuse, and reduce textile waste 
              while discovering unique pieces from your community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Link to="/browse">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg hover-scale">
                  Start Swapping <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/browse">
                <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                  Browse Items
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Recycle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10K+</h3>
              <p className="text-gray-600">Items Exchanged</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5K+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Star className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">4.9</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Items
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <Card className="mx-4 hover:shadow-xl transition-all duration-300 hover-scale">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-80 md:h-96">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover rounded-l-xl"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-green-600 text-white">
                                {item.points} points
                              </Badge>
                            </div>
                            <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                              <Heart className="h-5 w-5 text-gray-600" />
                            </button>
                          </div>
                          <div className="p-8 flex flex-col justify-center">
                            <Badge variant="outline" className="w-fit mb-3">
                              {item.category}
                            </Badge>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <span className="text-green-600 font-semibold text-sm">
                                    {item.owner.charAt(0)}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-600">{item.owner}</span>
                              </div>
                              <Badge variant="secondary">Size {item.size}</Badge>
                            </div>
                            <Link to={`/item/${item.id}`}>
                              <Button className="w-full bg-green-600 hover:bg-green-700">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            How ReWear Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">List Your Items</h3>
              <p className="text-gray-600">Upload photos and details of clothing you no longer wear. Earn points for every item you list.</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse & Swap</h3>
              <p className="text-gray-600">Discover unique pieces from other members. Request direct swaps or use your points to redeem items.</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Enjoy & Repeat</h3>
              <p className="text-gray-600">Refresh your wardrobe sustainably while helping reduce textile waste and building community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sustainable Fashion Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of fashion-conscious individuals making a positive impact on the environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg hover-scale">
                Join ReWear Today
              </Button>
            </Link>
            <Link to="/list-item">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                List Your First Item
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
