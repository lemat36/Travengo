import { FaBus, FaPlane } from "react-icons/fa";
import { MdCalendarToday, MdStar } from "react-icons/md";

const tours = [
  {
    title: "Wonderful USA",
    description: "Explore USA: Dallas, Chicago, Brooklyn",
    price: 2200,
    image: "/images/10d79113-4986-4081-beec-1890a14c8487.jpg",
    icons: [
      <FaBus key="car" />,
      <MdCalendarToday key="calendar" />,
      <MdStar key="star" />,
    ],
    duration: "10 days",
  },
  {
    title: "Wonderful Norway",
    description: "Explore Norway: Oslo, Bergen, Trondheim",
    price: 700,
    image: "/images/1636bdbd-d1a0-4a58-9d65-b6665961e05e.jpg",
    icons: [
      <FaBus key="walk" />,
      <MdCalendarToday key="calendar" />,
      <MdStar key="star" />,
    ],
    duration: "8 days",
  },
  {
    title: "Wonderful Argentina",
    description: "Explore Argentina: Córdoba, Rosario, Mendoza",
    price: 800,
    image: "/images/3037cc90-8101-4389-b16e-c6469c7a7b59.jpg",
    icons: [
      <FaBus key="bus" />,
      <MdCalendarToday key="calendar" />,
      <MdStar key="star" />,
    ],
    duration: "7 days",
  },
  {
    title: "Magnificent Poland",
    description: "Explore Poland: Warsaw, Krakow, Wroclaw",
    price: 1200,
    image: "/images/453db514-02ac-478b-9115-a767f1efd01b.jpg",
    icons: [
      <FaBus key="bus" />,
      <MdCalendarToday key="calendar" />,
      <MdStar key="star" />,
    ],
    duration: "14 days",
  },
  {
    title: "Magnificent France",
    description: "Explore France: Paris, Lyon, Toulouse",
    price: 1200,
    image: "/images/4c47dc82-ef55-4c1e-944e-3f3966bcbeb2.jpg",
    icons: [
      <FaPlane key="plane" />,
      <MdCalendarToday key="calendar" />,
      <MdStar key="star" />,
    ],
    duration: "7 days",
  },
  {
    title: "Magnificent Sweden",
    description: "Explore Sweden: Stockholm, Malmo, Uppsala",
    price: 4000,
    image: "/images/56ed2e60-09a9-441b-9e35-75736a3cf89a.jpg",
    icons: [
      <FaPlane key="plane" />,
      <MdCalendarToday key="calendar" />,
      <MdStar key="star" />,
    ],
    duration: "14 days",
  },
];

const PopularTours = () => {
  return (
    <section className="py-8 px-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Popular Tours</h2>
        <p className="text-gray-600">
          Check out the Most Popular Tours offered by Travengo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {tours.map((tour) => (
          <div
            key={tour.title}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-orange-500 text-lg font-bold">
                From ${tour.price}
              </div>
              <h3 className="text-xl font-semibold mt-2">{tour.title}</h3>
              <p className="text-gray-600">{tour.description}</p>
              <div className="flex items-center justify-between mt-4 text-gray-500">
                <div className="flex items-center space-x-2">
                  {tour.icons[0]}
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-500 ">
                  {tour.icons[1]}
                  {tour.icons[2]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-orange-500 text-white px-4 py-3 ">
          Show All
        </button>
      </div>
    </section>
  );
};

export default PopularTours;
