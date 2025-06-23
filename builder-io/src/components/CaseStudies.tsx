interface CaseStudiesProps {
  data: {
    category: string;
    title: string;
    description: string;
    image: string;
    cardData: {
      image: string;
      title: string;
      description: string;
      category: string;
      time: number;
    }[];
  };
}

const CategoryPill = ({ category }: { category: string }) => {
  

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold leading-5 rounded-md bg-[#00C7BE] text-white`}
    >
      {category}
    </span>
  );
};

export default function CaseStudies({ data }: CaseStudiesProps) {
  return (
    <section className="bg-white py-24 p-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-centre text-[#00C7BE] font-semibold tracking-wider">
            {data.category.toUpperCase()}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {data.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {data.description}
          </p>
        </div>
        <div className="grid max-w-md mx-auto gap-8 lg:grid-cols-3 lg:max-w-none">
          {data.cardData.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-xl overflow-hidden bg-white"
            >
              <div className="flex-shrink-0">
              <img
                  className="w-full object-cover"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-baseline space-x-3 capitalize">
                    <CategoryPill category={card.category}/>
                    <p className="text-sm text-gray-500 lowercase">{card.time} mins</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-900">
                      {card.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="font-semibold text-[#00C7BE] hover:text-cyan-700 flex items-center"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            type="button"
            className="rounded-lg border border-[#00C7BE] bg-white px-6 py-3 text-base font-semibold text-[#00C7BE]  shadow-sm hover:bg-gray-50"
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
}