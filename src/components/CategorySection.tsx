
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Landmark, School, Building, Hospital, CheckCircle, FileText, Laptop, Microscope, HardDrive, Beaker } from "lucide-react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    {
      title: "Institution Types",
      items: [
        { name: "Engineering Colleges", icon: School, count: 128 },
        { name: "Medical Institutes", icon: Hospital, count: 72 },
        { name: "Pharmaceutical Labs", icon: Beaker, count: 45 },
        { name: "Research Centers", icon: Microscope, count: 37 },
      ],
    },
    {
      title: "Scrap Categories",
      items: [
        { name: "Paper Waste", icon: FileText, count: 315 },
        { name: "Metal/Steel", icon: Building, count: 246 },
        { name: "Electronic Devices", icon: Laptop, count: 198 },
        { name: "Computer Hardware", icon: HardDrive, count: 158 },
        { name: "Medical Disposables", icon: CheckCircle, count: 92 },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse By Category</h2>
          <p className="mt-4 text-lg text-gray-600">
            Find exactly what you're looking for with our organized listings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <Card key={idx} className="border-0 shadow-sm">
              <CardHeader>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, i) => (
                    <Link 
                      key={i}
                      to={`/browse?category=${encodeURIComponent(item.name)}`}
                      className="flex items-center p-3 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.count} listings</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
