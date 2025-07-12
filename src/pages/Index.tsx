
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Recycle, Users, Award, Heart, MapPin, Star, Truck, Shield, Leaf, Clock, TrendingUp } from 'lucide-react';
import { featuredItems } from '@/data/mockData';
import Navbar from '@/components/Navbar';

const Index = () => {
  const stats = [
    { label: 'Items Exchanged', value: '50,000+', icon: Recycle },
    { label: 'Active Members', value: '15,000+', icon: Users },
    { label: 'CO2 Saved', value: '25 Tons', icon: Leaf },
    { label: 'Cities Covered', value: '100+', icon: MapPin }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Fashion Enthusiast',
      content: 'ReWear has completely changed how I think about fashion. I\'ve found amazing vintage pieces and made great friends!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9b6b5b8?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Marcus Johnson',
      role: 'Sustainable Living Advocate',
      content: 'Love the community aspect and knowing my clothes are getting a second life instead of ending up in landfills.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      role: 'College Student',
      content: 'Perfect for updating my wardrobe on a budget. The point system makes it so fun and rewarding!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Give Your Clothes a
              <span className="block bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                Second Life
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join ReWear's community-driven clothing exchange. Swap, redeem, and discover 
              pre-loved fashion while making a positive impact on the environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/browse">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white px-8 py-4 text-lg">
                  Start Swapping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/list-item">
                <Button variant="outline" size="lg" className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 text-lg">
                  List an Item
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ReWear Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes sustainable fashion accessible through simple swapping and point-based redemption
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">List Your Items</h3>
              <p className="text-gray-600">Upload photos and details of clothes you no longer wear</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect & Swap</h3>
              <p className="text-gray-600">Find items you love and connect with other community members</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Points</h3>
              <p className="text-gray-600">Redeem points for items or build your sustainable wardrobe</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/how-it-works">
              <Button variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50">
                Learn More About How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Items</h2>
            <p className="text-gray-600">Discover amazing pieces from our community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {featuredItems.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{item.category}</Badge>
                      <Badge variant="outline">Size {item.size}</Badge>
                      <Badge variant="outline">{item.condition}</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">
                          {item.points} points
                        </span>
                        {item.location && (
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <MapPin className="h-3 w-3" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                      
                      <span className="text-sm text-gray-500">by {item.owner}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/browse">
              <Button variant="outline" size="lg" className="border-2 border-green-600 text-green-700 hover:bg-green-50">
                Browse All Items
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose ReWear */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ReWear?</h2>
            <p className="text-gray-600">Join the sustainable fashion revolution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Local Pickup</h3>
              <p className="text-gray-600">Convenient pickup and delivery in your area</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Verified members and secure transactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Swaps</h3>
              <p className="text-gray-600">Find and swap items within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trending Items</h3>
              <p className="text-gray-600">Discover the latest fashion trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-gray-600">Join thousands of satisfied members</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-orange-100">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Making a Real Difference</h2>
            <p className="text-lg text-gray-700 mb-8">
              Every swap on ReWear helps reduce textile waste and supports sustainable fashion. 
              Together, we're building a more conscious approach to clothing consumption.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/70 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-600 mb-2">25 Tons</h3>
                <p className="text-gray-700">CO2 Emissions Saved</p>
              </div>
              <div className="bg-white/70 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-600 mb-2">50,000+</h3>
                <p className="text-gray-700">Items Given New Life</p>
              </div>
              <div className="bg-white/70 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-600 mb-2">15,000+</h3>
                <p className="text-gray-700">Community Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <footer className="bg-gradient-to-r from-green-700 to-orange-600 text-white pt-16 pb-8 px-6">
  <div className="container mx-auto grid md:grid-cols-4 gap-12">
    {/* Brand */}
    <div>
      <h3 className="text-2xl font-bold mb-4">ReWear</h3>
      <p className="text-sm opacity-90">
        Sustainable fashion, simplified. Join us in the mission to reduce waste and look great doing it.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Navigation</h4>
      <ul className="space-y-2 text-sm">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/browse" className="hover:underline">Browse Items</Link></li>
        <li><Link to="/how-it-works" className="hover:underline">How It Works</Link></li>
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-200 transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-gray-200 transition"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-gray-200 transition"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-gray-200 transition"><i className="fab fa-pinterest"></i></a>
      </div>
    </div>

    {/* Newsletter */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Stay in the Loop</h4>
      <form className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded bg-white text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-green-700 hover:bg-gray-100 px-4 py-2 rounded font-semibold"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm opacity-80">
    © {new Date().getFullYear()} ReWear. All rights reserved.
  </div>
</footer>

    </div>
  );
};

export default Index;
