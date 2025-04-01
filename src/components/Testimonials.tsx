
import { User2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "We've been able to monetize our waste materials effectively while ensuring they're properly recycled. The competitive bidding has increased our returns by nearly 30%.",
    author: "Dr. Sharma",
    role: "Facilities Director",
    organization: "National Engineering University",
  },
  {
    quote: "As a scrap dealer, this platform has opened up access to high-quality material sources that weren't previously available. The verification system ensures I'm bidding on legitimate listings.",
    author: "Rajesh Kumar",
    role: "Owner",
    organization: "Green Recycling Solutions",
  },
  {
    quote: "The transparent bidding process helps us comply with disposal regulations while getting the best value for our laboratory waste. The reporting tools have simplified our audit process.",
    author: "Dr. Priya Patel",
    role: "Administrator",
    organization: "City Medical Institute",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from institutions and dealers who have transformed their scrap management process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="flex-grow">
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </blockquote>
                
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <User2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.organization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
