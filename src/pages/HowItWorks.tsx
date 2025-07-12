
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Upload, Search, Users, Award, Recycle, Heart, Star, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar'; 

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How ReWear Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our sustainable fashion community in three simple steps. Give your clothes a second life 
            while discovering unique pieces from others.
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Upload className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. List Your Items</h3>
              <p className="text-gray-600 mb-6">
                Upload photos of clothes you no longer wear. Add descriptions, set your asking points, 
                and choose whether to swap or sell for points.
              </p>
              <Badge variant="secondary" className="mb-4">Earn 10-100 points per item</Badge>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Search className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Discover & Browse</h3>
              <p className="text-gray-600 mb-6">
                Explore thousands of unique items from our community. Filter by size, category, 
                condition, and location to find exactly what you're looking for.
              </p>
              <Badge variant="secondary" className="mb-4">1000+ items available</Badge>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Swap & Connect</h3>
              <p className="text-gray-600 mb-6">
                Connect with other members, arrange swaps, or redeem points for items you love. 
                Build relationships in our sustainable fashion community.
              </p>
              <Badge variant="secondary" className="mb-4">5000+ active members</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Point System */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <div className="text-center mb-8">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Point System</h2>
            <p className="text-gray-600">Earn and spend points to get the items you want</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Earn Points By:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Listing quality items (10-100 points)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Completing successful swaps (5-20 points)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Referring friends (50 points)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Daily check-ins (1-5 points)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spend Points On:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Redeeming items you love</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Boosting your listings visibility</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Premium features access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Supporting eco-friendly initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Fashion</h3>
            <p className="text-gray-600">Reduce textile waste by giving clothes a second life</p>
          </div>
          
          <div className="text-center">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
            <p className="text-gray-600">Connect with like-minded fashion enthusiasts</p>
          </div>
          
          <div className="text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Verified members and secure transaction system</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of fashion lovers making a positive impact
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            
            <Link to="/browse">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Browse Items
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
