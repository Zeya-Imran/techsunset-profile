import Image from "next/image";
import Link from "next/link";
import {
  Sportsuncle,
  Boxsedgreens,
  Tripmore,
  Greenlanedelivery,
  Franchisedirect,
  Intermiles,
} from "../../utils";

const projects = [
  // Techsunset projects
  {
    id: 1,
    title: "SportsUncle",
    url: "https://sportsuncle.com",
    description: "SportsUncle is an online sports store in India.",
    imgUrl: Sportsuncle,
  },
  {
    id: 2,
    title: "Boxed Green",
    url: "https://boxedgreens.com",
    description: "Boxed Greens delivers certified organic produce.",
    imgUrl: Boxsedgreens,
  },
  {
    id: 3,
    title: "Green Lane",
    url: "https://www.greenlanedelivery.com",
    description: "Food transportation emits significant CO2.",
    imgUrl: Greenlanedelivery,
  },
  {
    id: 4,
    title: "Tripmore",
    url: "https://tripmore.in",
    description: "Tripmore a passionate travel company.",
    imgUrl: Tripmore,
  },
  {
    id: 5,
    title: "Franchise Direct",
    url: "https://www.franchisedirect.com",
    description: "Franchise Direct connects clients & franchisors..",
    imgUrl: Franchisedirect,
  },
  {
    id: 6,
    title: "Intermiles",
    url: "https://www.intermiles.com",
    description: "A Online Booking site for Hotels & Flight.",
    imgUrl: Intermiles,
  },
];

const Projects = () => {
  return (
    <section
      className="w-10/12 pt-10 mx-auto bg-gray-50 rounded-xl mb-10"
      id="project"
    >
      <h1 className="text-center mb-10 text-4xl montserrat-medium">
        My Work & Projects
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8">
        {projects.map((item, i) => {
          // console.log(item.url);
          return (
            <Link href={item.url} key={i}>
              <div className="projects-box-wraper flex flex-col gap-5 relative bg-[#eccb51] mb-5 rounded-3xl shadow-md">
                <div className="projects-box">
                  <Image src={item.imgUrl} alt={item.id} width={0} height={0} />
                </div>
                <div className="mb-5 px-2 flex justify-between items-end overflow-hidden">
                  <div>
                    <h1 className=" montserrat-medium text-xl">{item.title}</h1>
                    <p className="palanquin-regular">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
