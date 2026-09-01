import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 md:py-40"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('/images/slider.JPG')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-white text-lg uppercase tracking-wider">
              Oil & Gas Solutions in Nigeria
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
              YOUR TRUSTED ENERGY PARTNER
            </h1>
            <p className="text-white mt-6 text-lg">
              Yemars Oil and Gas delivers engineering, procurement, and
              construction services for the oil, gas, and power industries.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-lg text-red-600 font-semibold uppercase">
              Introduction
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-2">
              Yemars Oil and Gas
            </h2>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Yemars Oil and Gas is a leading engineering, procurement, and
              construction (EPC) company providing specialized services in oil
              and gas projects, power generation, and allied industries.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our core focus has always been on customer satisfaction—achieved
              through a dedicated team of qualified, committed, and
              experienced professionals who respond to the evolving needs of
              the industry.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              The contribution of these professionals has resulted in a
              passionate commitment to our clients, delivering engineering
              projects using the best available technology and products in
              terms of quality and timeliness, adding significant value to our
              clients.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/portfolio.jpg"
              alt="Yemars Oil and Gas team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg text-red-600 font-semibold uppercase">
              What we do
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-2">
              Our Professional Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our primary focus is on customer delight, brought about by our
              rich task force of qualified, committed, and experienced
              professionals catering to the changing needs of the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering",
                image: "/images/other%20picture%20of%20engineers.JPG",
                description:
                  "Front-end engineering design, detailed engineering, and project management.",
              },
              {
                title: "Procurement",
                image: "/images/lanscape%20image.JPG",
                description:
                  "Global sourcing, vendor management, and logistics for all project materials.",
              },
              {
                title: "Construction & Installation",
                image: "/images/installation%20potraite.JPG",
                description:
                  "Onshore and offshore construction, steel fabrication, and equipment installation.",
              },
              {
                title: "Pipeline Maintenance",
                image: "/images/pipe%20line%20maintaence.JPG",
                description:
                  "Routine inspection, repair, and maintenance of pipelines to ensure integrity.",
              },
              {
                title: "Corrosion Prevention & Control",
                image: "/images/slider%202.JPG",
                description:
                  "Blasting, painting, and cathodic protection to extend asset life.",
              },
              {
                title: "Underwater Leak Repair",
                image: "/images/under%20water%20leak.JPG",
                description:
                  "Specialized underwater intervention and leak sealing for subsea infrastructure.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8">
            Contact our team today to discuss your energy project needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}