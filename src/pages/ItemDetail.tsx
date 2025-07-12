
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Heart, Share2, MessageCircle, Star, MapPin, Calendar, Tag } from 'lucide-react';
import { featuredItems, mockUser } from '@/data/mockData';
import Navbar from '@/components/Navbar';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the item by ID
  const item = featuredItems.find(item => item.id === id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
        <Navbar />
        <div className="container mx-auto px-4 pt-20 pb-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Item Not Found</h1>
            <p className="text-gray-600 mb-6">The item you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/browse')} className="bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700">
              Browse Items
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleSwapRequest = () => {
    toast({
      title: "Swap Request Sent!",
      description: "Your swap request has been sent to the item owner.",
    });
  };

  const handleRedeemPoints = () => {
    if (mockUser.points >= item.points) {
      toast({
        title: "Item Redeemed!",
        description: `You've successfully redeemed this item for ${item.points} points.`,
      });
    } else {
      toast({
        title: "Insufficient Points",
        description: `You need ${item.points - mockUser.points} more points to redeem this item.`,
        variant: "destructive",
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Item link has been copied to your clipboard.",
    });
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Favorites" : "Added to Favorites",
      description: isLiked ? "Item removed from your favorites." : "Item added to your favorites.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-white/80"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={item.images[currentImageIndex] || item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {item.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h1>
                <Badge 
                  variant={item.status === 'available' ? 'default' : 'secondary'}
                  className="mb-4"
                >
                  {item.status === 'available' ? 'Available' : 'Not Available'}
                </Badge>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleLike}
                  className={isLiked ? 'text-red-500 border-red-200' : ''}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="outline" size="icon" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Owner Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>{item.owner.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.owner}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>4.8</span>
                      <span className="ml-2">12 swaps completed</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Item Details */}
            <Card>
              <CardHeader>
                <CardTitle>Item Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{item.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Category:</span>
                    <span className="ml-2 text-gray-600">{item.category}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Type:</span>
                    <span className="ml-2 text-gray-600">{item.type}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Size:</span>
                    <span className="ml-2 text-gray-600">{item.size}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Condition:</span>
                    <span className="ml-2 text-gray-600">{item.condition}</span>
                  </div>
                </div>

                {item.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Listed on {new Date(item.createdAt).toLocaleDateString()}</span>
                </div>

                {item.tags.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-gray-600" />
                      <span className="font-medium text-gray-900">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            {item.status === 'available' && (
              <div className="space-y-3">
                <Button
                  onClick={handleSwapRequest}
                  className="w-full bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700"
                  size="lg"
                >
                  Request Swap
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gradient-to-br from-green-50 via-white to-orange-50 text-gray-500">
                      or
                    </span>
                  </div>
                </div>
                
                <Button
                  onClick={handleRedeemPoints}
                  variant="outline"
                  className="w-full"
                  size="lg"
                  disabled={mockUser.points < item.points}
                >
                  Redeem for {item.points} Points
                  {mockUser.points < item.points && (
                    <span className="ml-2 text-red-500">
                      (Need {item.points - mockUser.points} more)
                    </span>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
