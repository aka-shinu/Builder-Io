interface InsightUpdatesProps {
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
      className={`px-3 py-1 text-xs font-semibold leading-5 rounded-sm bg-[#00C7BE] text-white`}
    >
      {category}
    </span>
  );
};

export default function InsightUpdates({ data }: InsightUpdatesProps) {
  console.log(data);
  return (
    <section className="bg-[#F1F1F3] w-full h-fit py-24 p-20">
      <div className="container mx-auto  px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-center text-cyan-500 font-semibold tracking-wider">
            {data.category.toUpperCase()}
          </p>
          <h2 className="mt-2 whitespace-nowrap text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {data.title}
          </h2>
          <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-600">
            {data.description}
          </p>
        </div>
        <div className="grid border w-full gap-8 lg:grid-cols-3 lg:max-w-none">
          {data.cardData.map((card) => (
            <div
              key={card.title}
              className="flex whitespace-nowrap flex-col w-full  rounded-xl shadow-lg overflow-hidden bg-white"
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
                  <div className="flex items-baseline space-x-3">
                    <CategoryPill category={card.category} />
                    <p className="text-sm text-gray-500">{card.time} mins</p>
                  </div>
                  <div className="mt-4">
                    <p className="md:text-xl font-semibold text-gray-900">
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
                    className="font-semibold text-cyan-600 hover:text-cyan-700 flex items-center"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}