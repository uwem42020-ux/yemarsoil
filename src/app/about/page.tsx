import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Yemars Oil and Gas, our mission, vision, and the team behind our reliable energy solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Yemars Oil and Gas",
    description:
      "Discover the story, mission, and team of Yemars Oil and Gas.",
    url: "https://yemars.com/about",
    siteName: "Yemars Oil and Gas",
    images: [
      {
        url: "/yemarslogo-og.png",
        width: 1200,
        height: 630,
        alt: "Yemars Oil and Gas Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 md:py-40"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('/images/yemars-oil-gas-hero.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Yemars Oil and Gas
          </h1>
          <p className="text-white mt-4 text-lg max-w-2xl mx-auto">
            Delivering reliable energy and engineering solutions across Nigeria
            and beyond.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/yemars-ceo.jpeg"
              alt="CEO of Yemars Oil and Gas"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg text-red-600 font-semibold uppercase">
              Our Story
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-2">
              A Legacy of Excellence in Energy
            </h2>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Yemars Oil and Gas was founded with a clear vision: to become a
              trusted partner in the oil, gas, and power sectors. From our
              humble beginnings, we have grown into a full‑service engineering,
              procurement, and construction (EPC) company, serving clients
              across Nigeria and internationally.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our journey is built on a foundation of integrity, safety, and
              innovation. We combine local expertise with global best practices
              to deliver projects that not only meet but exceed expectations.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Today, our dedicated team of professionals continues to drive our
              success, ensuring that every project is completed on time, within
              budget, and to the highest standards of quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide reliable, safe, and cost‑effective energy solutions
              that empower our clients and contribute to the sustainable
              development of the communities we serve.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading indigenous energy services company in Africa,
              recognized for our technical excellence, commitment to safety,
              and unwavering dedication to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg text-red-600 font-semibold uppercase">
              Why Choose Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Safety First",
                description:
                  "We prioritize the health and safety of our people, partners, and the environment in everything we do.",
              },
              {
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards, ensuring transparency and honesty in all our dealings.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and creative solutions to deliver superior results.",
              },
              {
                title: "Excellence",
                description:
                  "We are committed to delivering quality workmanship and outstanding service on every project.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg text-red-600 font-semibold uppercase">
              The People Behind Our Success
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-2">
              Meet Our Team
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/yemars-team-group.png"
                  alt="Yemars Oil and Gas management team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-blue-700">Management Team</h3>
                <p className="text-sm text-gray-600">
                  Experienced leaders guiding our strategic direction.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/yemars-construction-site.png"
                  alt="Yemars Oil and Gas field engineers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-blue-700">Field Engineers</h3>
                <p className="text-sm text-gray-600">
                  Skilled professionals delivering on‑site excellence.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/yemars-field-engineer.png"
                  alt="Yemars Oil and Gas technical staff"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-blue-700">Technical Staff</h3>
                <p className="text-sm text-gray-600">
                  Dedicated specialists ensuring quality and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Partner With Us Today
          </h2>
          <p className="text-lg mb-8">
            Let’s build the future of energy together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}