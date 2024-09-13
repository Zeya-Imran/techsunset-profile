import Image from "next/image";
const projectData = [
  { name: "Team Management website", date: "Apr 2024 - Aug 2024" },
  { name: "Green Lane", date: "Oct 2023 - Mar 2024" },
  { name: "Inter Miles", date: "Jan 2023 - Aug 2023" },
  { name: "Franchise Direct", date: "Sep 2022 - Jan 2023" },
  { name: "Trip More", date: "Feb 2022 - Sep 2022" },
  { name: "Boxed Green", date: "Aug 2021 - Dec 2021" },
  { name: "Sports Uncle", date: "Mar 2021 - Jul 2021" },
];

const Resume = () => {
  return (
    <div
      className="w-10/12 bg-[#e1f8fe] rounded-2xl mx-auto mt-10 mb-10 py-10 p-1"
      id="resume"
    >
      <h1 className="text-center mb-10 text-4xl montserrat-medium tracking-wide">
        My Detailed Information.
      </h1>
      <div className="max-w-5xl mx-auto rounded-lg px-16 py-10 shadow-lg border-[12px] border-[#2563eb]">
        {/* Top Section - Photo and Name */}
        <div className="grid grid-cols-3 gap-6">
          {/* Name and Title */}
          <div className="col-span-2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-[#2563eb] tracking-widest">
              MD ZEYA IMRAN
            </h1>
            <p className="text-lg font-semibold text-slate-900 tracking-wider">
              Full Stack Web Developer{" "}
              <span className="text-xs">At Techsunset, Banglore.</span>
            </p>
            <p className="text-slate-900 text-sm mt-4 text-justify">
              Hi! I am Seasoned Full-Stack MERN Developer with deep expertise in
              React, Node.js, Express, and MongoDB. Proven track record in
              developing robust web applications, managing end-to-end projects,
              and delivering high-performance, scalable solutions.
            </p>
          </div>
          {/* Photo */}
          <div className="col-span-1 flex justify-end items-end">
            <div className="w-40 h-40 rounded overflow-hidden shadow-lg bg-white">
              <Image
                src="/avtar.png"
                alt="Profile Picture"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-slate-400 mt-5"></div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {/* Left Section */}
          <div className="col-span-1 flex flex-col justify-between">
            {/* Contact */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#2563eb]">Contact</h2>
              <ul className="text-slate-900 mt-2">
                <li>📞 +91 9241364377</li>
                <li>📧 zeyaimran.techsunset@gmail.com </li>
                <li>🏠 Ashok rajpath, Patna, Bihar, India</li>
              </ul>
            </div>

            {/* Language */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#2563eb]">
                Language
              </h2>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-4">
                <li>English</li>
                <li>Hindi</li>
                <li>Urdu</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#2563eb]">
                Soft Skills
              </h2>
              <ul className="list-disc list-inside text-slate-900 mt-2">
                <li>Product Design</li>
                <li>Cost Effective</li>
                <li>Adaptability and Flexibility</li>
                <li>Problem-Solving</li>
                <li>Teamwork and Collaboration</li>
                <li>Time Management</li>
                <li>Attention to Detail</li>
                <li>Patience and Persistence</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2">
            {/* Expertise */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#2563eb] bg-[#ffd640] rounded-sm pl-2">
                Expertise
              </h2>
              <ul className="grid grid-cols-3 gap-2 text-slate-900 mt-2 list-disc list-inside">
                <li>
                  <strong>ReactJS</strong>
                </li>
                <li>
                  <strong>NextJS</strong>
                </li>
                <li>
                  <strong>NodeJS</strong>
                </li>
                <li>
                  <strong>ExpressJS</strong>
                </li>
                <li>
                  <strong>MongoDB</strong>
                </li>
                <li>
                  <strong>Redis</strong>
                </li>
                <li>
                  <strong>AWS Cloud</strong>
                </li>
                <li>
                  <strong>Jira</strong>
                </li>
                <li>
                  <strong>Git & Github</strong>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#2563eb] bg-[#ffd640] rounded-sm pl-2">
                Experience
              </h2>
              <div className="text-slate-900 mt-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    Techsunset - Bangalore, India
                  </h3>
                  <p>2021 - 2024</p>
                </div>
                <ul className="list-disc list-inside mt-1">
                  <li>
                    Responsible for building user interfaces and APIs for
                    clients and companies.
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#2563eb] bg-[#ffd640] rounded-sm pl-2">
                Projects
              </h2>
              <ul className="text-slate-900 mt-2 space-y-2">
                {projectData.map((project, index) => (
                  <li key={index} className="flex justify-between">
                    <p className="font-semibold"> {project.name}</p>
                    <small>{project.date}</small>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2563eb] bg-[#ffd640] rounded-sm pl-2">
                Education
              </h2>
              <ul className="text-slate-900 mt-2">
                <li className="flex justify-between">
                  <p className="font-semibold">MERN Stack Web Development</p>{" "}
                  <small>2020 - 2021</small>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold">
                    Master of Computer Application
                  </p>{" "}
                  <small>2016 - 2020</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
