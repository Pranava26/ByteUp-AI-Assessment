import Image from "next/image";
import heroImage from '../../public/assets/hero_team_collaboration.png'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="flex flex-col lg:flex-row items-center gap-4 p-12 bg-gray-50 justify-between mb-4">
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold">Discover Insights, Empower Growth</h1>
            <h2 className="text-green-600 text-sm italic">At InsightHub, we provide actionable knowledge and transformative services to help you thrive in a connected world, empowering you to make informed decisions, unlock new opportunities, and drive meaningful progress in every aspect of your journey.</h2>
          </div>
          <Link className="bg-green-500 hover:bg-green-600 transition ease-in duration-300 w-fit font-semibold text-white px-3 py-2 rounded-md" href='/services' >Explore Our Services</Link>
        </div>
        <div>
          <Image src={heroImage} width={600} height={600} alt="hero-image" />
        </div>
      </div>

      {/* Services overview */}
      <div className="p-12">
        <h1 className="font-bold text-3xl">Services Overview</h1>
        <h1 className="font-bold text-xl">Our <span className="text-green-600">Expertise</span>, Your <span className="text-green-600">Success</span></h1>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <h3 className="shadow-xl font-semibold hover:shadow-2xl transition ease-in duration-300 rounded-md px-4 py-12 text-center">
              <p className="text-lg mb-2 text-green-600">Custom Research</p>
              <p>In-depth analysis tailored to your needs.</p></h3>
            <h3 className="shadow-xl font-semibold hover:shadow-2xl transition ease-in duration-300 rounded-md px-4 py-12 text-center">
              <p className="text-lg mb-2 text-green-600">Content Creation</p>
              <p>Creative solutions that inspire and inform.</p></h3>
            <h3 className="shadow-xl font-semibold hover:shadow-2xl transition ease-in duration-300 rounded-md px-4 py-12 text-center">
              <p className="text-lg mb-2 text-green-600">Data Analytics</p>
              <p>Transform data into powerful insights.</p></h3>
            <h3 className="shadow-xl font-semibold hover:shadow-2xl transition ease-in duration-300 rounded-md px-4 py-12 text-center">
              <p className="text-lg mb-2 text-green-600">Strategic Consultation</p>
              <p>Expert advice to help you navigate challenges.</p></h3>
        </div>
      </div>

    </div>
  );
}
