import Image from "next/image"
import serviceOne from '../../../public/assets/services_1.png'
import serviceTwo from '../../../public/assets/services_2.png'
import serviceThree from '../../../public/assets/services_3.png'
import serviceFour from '../../../public/assets/services_4.png'

const page = () => {
  return (
    <div className="px-16 py-10">
      <div>
        <h1 className="font-semibold text-3xl text-center border-b-2 border-black pb-2">Our <span className="text-green-600">Expertise</span>, Your <span className="text-green-600">Success</span></h1>
      </div>
      <div className="mt-6 flex flex-col gap-4">
            <h3><span className="font-semibold">1. Custom Research:</span> We offer in-depth analysis meticulously tailored to your unique needs, ensuring you gain valuable insights that drive impactful decisions. Our expert team delves into your specific challenges, providing data-driven strategies and actionable recommendations. Whether you're exploring market trends, consumer behavior, or industry dynamics, our custom research solutions are designed to uncover opportunities and address critical questions. With a focus on precision and relevance, we empower you to stay ahead in a competitive landscape.</h3>
            <Image className="mx-auto my-2" src={serviceOne} width={600} height={600} alt="services-image" />
            <h3><span className="font-semibold">2. Content Creation:</span> We deliver creative solutions that not only inspire but also inform, helping you connect with your audience in meaningful ways. From compelling storytelling to engaging visuals, our content is designed to captivate attention and communicate your message effectively. Whether you need blogs, videos, social media campaigns, or marketing materials, we craft content that aligns with your brand's voice and vision. With a focus on quality and innovation, we ensure your content stands out, drives engagement, and achieves your communication goals.</h3>
            <Image className="mx-auto my-2" src={serviceTwo} width={600} height={600} alt="services-image" />
            <h3><span className="font-semibold">3. Transform Data into Powerful Insights:</span> Unlock the full potential of your data with our expertise in turning raw information into actionable insights. We analyze complex datasets to reveal patterns, trends, and opportunities that drive smarter decisions and strategic growth. Whether it's market analysis, customer behavior, or performance metrics, we help you uncover the stories behind the numbers. By translating data into clear and meaningful insights, we empower you to navigate challenges, seize opportunities, and stay ahead in a rapidly evolving landscape.</h3>
            <Image className="mx-auto my-2" src={serviceThree} width={600} height={600} alt="services-image" />
            <h3><span className="font-semibold">4. Strategic Consultation:</span> Gain access to expert advice designed to help you navigate challenges with confidence and clarity. Our strategic consultation services focus on understanding your unique goals and crafting tailored solutions to address complex issues. Whether you're facing market uncertainties, organizational changes, or growth obstacles, we provide actionable guidance to streamline decision-making and foster long-term success. With a forward-thinking approach and deep industry expertise, we empower you to overcome barriers, leverage opportunities, and achieve your vision with precision and impact.</h3>
            <Image className="mx-auto my-2" src={serviceFour} width={600} height={600} alt="services-image" />
        </div>
    </div>
  )
}

export default page
