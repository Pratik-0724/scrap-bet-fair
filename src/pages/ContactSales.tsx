
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneIcon, Mail, MapPin, Building, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSales = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [userType, setUserType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, phone, company, userType, message });
    
    // Display success message
    toast({
      title: "Message sent!",
      description: "Our sales team will get back to you within 24 hours.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setUserType("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Our Sales Team</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Have questions about ScrapBid? Our team is here to help you get started with our platform.
            </p>
          </div>
        </div>

        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company/Institution</label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="userType" className="text-sm font-medium">I am a</label>
                  <Select value={userType} onValueChange={setUserType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="institution">Institution</SelectItem>
                      <SelectItem value="dealer">Scrap Dealer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Company Information</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Building className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">About ScrapBid</h3>
                        <p className="text-gray-600 mt-1">
                          ScrapBid is a leading platform connecting institutions with certified scrap dealers through a transparent auction system. Founded in 2020, we've helped hundreds of organizations monetize waste and support sustainability.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Headquarters</h3>
                        <p className="text-gray-600 mt-1">
                          123 Green Street<br />
                          EcoTech Park, Mumbai 400001<br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600 mt-1">sales@scrapbid.com</p>
                        <p className="text-gray-600">support@scrapbid.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <PhoneIcon className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600 mt-1">+91 22 1234 5678</p>
                        <p className="text-gray-600">+91 98765 43210 (Sales)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Working Hours</h3>
                        <p className="text-gray-600 mt-1">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Closed on Sundays and Public Holidays
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactSales;
