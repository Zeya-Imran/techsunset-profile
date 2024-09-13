import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center py-10" id="about">
      <div className="w-10/12 grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="rounded-2xl bg-[#e1f8fe] md:px-16 px-8 py-8 space-y-6">
          <div>
            <h1 className="text-4xl ">
              I am{" "}
              <span className="montserrat-medium tracking-widest">
                Zeya Imran
              </span>
            </h1>
            <h2 className="text-xl">
              Mern Full Stack Developer,
              <span className="text-sm"> at Techsunt, Banglore</span>
            </h2>
          </div>
          <p className="text-slate-950 leading-6 text-justify">
            Experienced MERN Stack Developer skilled in creating robust web
            applications with MongoDB, Express, React, and Node.js. Expert in
            backend systems, API integration, and front-end development.
            Proficient in state management, performance optimization, and cloud
            deployment. Known for problem-solving, code quality, and effective
            teamwork. Committed to staying current with new technologies and
            delivering impactful solutions.
          </p>
          <div>
            <button className="bg-blue-600 px-4 py-2 text-white rounded-lg">
              Resume <span className="rounded-full">&#8595;</span>
            </button>
            <button className="px-4 py-2 bg-[#ffd640] text-black rounded-lg ml-4">
              View Project
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-[#ffd640]  px-16 py-8 space-y-6 relative h-[430px]">
          <Image
            src="/model2.png"
            alt="model"
            width={230}
            height={0}
            className="absolute bottom-0 left-[30%]"
          />
        </div>
      </div>

      {/* skill icon list */}
      <div className="flex gap-10">
        <Image src="/javascript.png" alt="react" width={90} height={90} />
        <Image src="/react.png" alt="react" width={90} height={90} />
        <Image src="/next.png" alt="react" width={90} height={90} />
        <Image src="/nodejs.png" alt="react" width={90} height={90} />
        <Image src="/express.png" alt="react" width={90} height={90} />
        <Image src="/docker.png" alt="react" width={90} height={90} />
        <Image src="/aws.png" alt="react" width={90} height={90} />
        <Image src="/redis.png" alt="react" width={90} height={90} />
        <Image src="/git.png" alt="react" width={90} height={90} />
        <Image src="/jira.png" alt="react" width={90} height={90} />
      </div>
    </div>
  );
};

export default Home;
