import React from "react";

const PartnerSection: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "Green Living Partner",
      image: "/partners/living.jpg",
    },
    {
      id: 2,
      name: "Real Estate Partner",
      image: "/partners/daksha.png",
    },
    {
      id: 3,
      name: "Jewellery Partner",
      image: "/partners/suman.png",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-3">
            Our Partners
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted Collaborators
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We are proud to partner with leading organizations across various
            industries to deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:border-red-800/40 transition-all duration-300"
            >
              {/* Partner Image */}
              <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Partner Info */}
              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-red-800 transition-colors">
                  {partner.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
