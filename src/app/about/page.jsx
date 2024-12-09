const page = () => {
  return (
    <div className="px-16 py-10">
      <h1 className="font-semibold text-3xl text-center border-b-2 border-black pb-2">About <span className="text-green-600">Us</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="my-2 shadow-lg hover:shadow-2xl transition ease-in duration-300 px-4 py-8 rounded-md">
          <h1 className="text-3xl font-bold text-center">Our <span className="text-green-600">Mission</span></h1>
          <p className="mt-2">We are dedicated to empowering individuals and businesses by providing the insights and tools they need to unlock their full potential. Through innovative solutions, actionable knowledge, and personalized support, we help our clients overcome challenges and achieve their goals. Whether it’s driving growth, enhancing efficiency, or navigating complex landscapes, our mission is to be your trusted partner in realizing success and creating lasting impact.</p>
        </div>
        <div className="my-2 shadow-lg hover:shadow-2xl transition ease-in duration-300 px-4 py-8 rounded-md">
          <h1 className="text-3xl font-bold text-center">Our <span className="text-green-600">Vision</span></h1>
          <p className="mt-2">We envision a world where knowledge is accessible to everyone, connections are meaningful, and growth knows no bounds. A world where individuals and businesses thrive through collaboration, innovation, and informed decision-making. By fostering an environment of continuous learning and meaningful engagement, we aim to create opportunities that inspire progress, drive transformation, and empower communities to achieve limitless potential.</p>
        </div>
      </div>
    </div>
  )
}

export default page
