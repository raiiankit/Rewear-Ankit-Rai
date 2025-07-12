
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Package, ArrowUpDown, Heart, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { mockUser, featuredItems } from "@/data/mockData";

const Dashboard = () => {
  const [user] = useState(mockUser);
  const [userItems] = useState(featuredItems.slice(0, 2)); // Mock user items
  const [activeSwaps] = useState([
    {
      id: '1',
      itemTitle: 'Vintage Band T-Shirt',
      partnerName: 'Alex K.',
      status: 'pending',
      createdAt: '2024-01-10'
    },
    {
      id: '2',
      itemTitle: 'Designer Jeans',
      partnerName: 'Maria S.',
      status: 'confirmed',
      createdAt: '2024-01-08'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-green-100 text-green-600 text-xl font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Welcome back, {user.name.split(' ')[0]}!
                  </h1>
                  <p className="text-gray-600">
                    Member since {new Date(user.joinedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              <Link to="/list-item">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  List New Item
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Points Balance</p>
                    <p className="text-3xl font-bold">{user.points}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Items Listed</p>
                    <p className="text-3xl font-bold text-gray-800">{user.itemsListed}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Swaps Completed</p>
                    <p className="text-3xl font-bold text-gray-800">{user.swapsCompleted}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <ArrowUpDown className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Rating</p>
                    <div className="flex items-center gap-2">
                      <p className="text-3xl font-bold text-gray-800">{user.rating}</p>
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="items">My Items</TabsTrigger>
              <TabsTrigger value="swaps">Swaps</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions on ReWear</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Plus className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Listed new item</p>
                        <p className="text-xs text-gray-600">Vintage Denim Jacket - 2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <ArrowUpDown className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Swap completed</p>
                        <p className="text-xs text-gray-600">With Maria S. - 5 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Earned 25 points</p>
                        <p className="text-xs text-gray-600">Item listing bonus - 1 week ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Points Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Points Progress</CardTitle>
                    <CardDescription>Earn points by listing items and completing swaps</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Next Level</span>
                        <span className="text-sm text-gray-600">250/500 points</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Ways to earn points:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">List an item</span>
                          <span className="font-medium text-green-600">+10 points</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Complete a swap</span>
                          <span className="font-medium text-green-600">+25 points</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Receive 5-star rating</span>
                          <span className="font-medium text-green-600">+15 points</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="items" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Your Listed Items</h3>
                <Link to="/list-item">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Item
                  </Button>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-2 left-2 bg-green-600">
                          {item.points} pts
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className="absolute top-2 right-2"
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="swaps" className="space-y-6">
              <h3 className="text-lg font-semibold">Active Swaps</h3>
              
              <div className="space-y-4">
                {activeSwaps.map((swap) => (
                  <Card key={swap.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <ArrowUpDown className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{swap.itemTitle}</h4>
                            <p className="text-sm text-gray-600">
                              Swapping with {swap.partnerName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={getStatusColor(swap.status)}>
                            {swap.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your account details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-green-100 text-green-600 text-2xl font-semibold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Change Photo
                      </Button>
                    </div>
                  </div>
                  
                  {user.bio && (
                    <div>
                      <h4 className="font-medium mb-2">Bio</h4>
                      <p className="text-gray-600">{user.bio}</p>
                    </div>
                  )}
                  
                  <div className="pt-4 space-y-3">
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full">
                      Account Settings
                    </Button>
                    <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
