import { useGlobalContext } from "../AppContext";
import clouds from "../assets/clouds.jpg";
import { motion } from "framer-motion";
import CustomerReviewCard from "../components/CustomerReviewCard";

export default function Home() {
  const {} = useGlobalContext();

  return (
    <>
    <div className="w-screen  min-h-screen overflow-hidden">
      <section className="relative w-full h-2/3 sm:h-11/12  md:h-full  ">
      <img
        src={clouds}
        
        className="w-full  h-full  border-none shadow  object-cover "
        />
       
       <div className="absolute inset-0 flex flex-col sm:pb-20 md:pb-36 items-center justify-center text-center ">
          <motion.h1 
          className="text-white text-sm sm:text-3xl md:text-4xl font-bold text-center "
           initial={{ opacity: 0,y:100}}
           animate={{ opacity: 1 ,y:0 }}
          transition={{ duration: 1, delay: 0.6 }}
            >
            Delivering <p className="inline text-blue-400">fast </p>& Scaling <p  className="inline text-blue-800"> Smart.</p>
            </motion.h1>
            
            
            <motion.h3 
            className="text-xs md:text-lg text-white mt-1 sm:mt-2 md:mt-4  font-normal block"
              initial={{ opacity: 0,y:100}}
             animate={{ opacity: 1 ,y:0 }}
            transition={{ duration: 1, delay: 0.7 }}>
            Your trusted partner in dropshipping and logistics.
            </motion.h3>
        </div>
      </section>

      <section className="h-38 sm:h-62 px-4 w-auto  flex items-center my-8 bg-[#007FFF]  justify-start">
        <div className="text-xl sm:text-3xl  text-white  pl-2 sm:pl-8 md:pl-10 font-semibold  sm:w-2/3">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">We work for you that.</h2>
          <p className="text-[#00FFFF] leading-6 sm:leading-8 text-2xl sm:text-4xl  "> you can work on what really matters to you.</p>
        </div>

      </section>

      <section className="h-82 w-68 rounded-2xl sm:w-11/12 mx-4 overflow-hidden my-4 shadow-xl bg-[#007FFF]">
        <div className="flex-cols   items-center justify-center h-full w-full px-2 sm:px-4 md:px-6">
          <h1 className="font-semibold text-3xl sm:text-4xl text-center py-4 text-shadow-2xs text-white">Our Customers</h1>
         <div className="overflow-x-auto   py-2">
  <div className="flex gap-4">
    <div className="inline-block w-60 sm:w-72 shrink-0">
      <CustomerReviewCard
        name="Anjali Singh"
        location="Mumbai, India"
        review="I was amazed at how accurate and detailed the shipment tracking was. Truly professional service!"
        rating={5}
      />
    </div>

    <div className="inline-block w-80 shrink-0">
      <CustomerReviewCard
        name="David Kim"
        location="Seoul, South Korea"
        review="The real-time updates and smooth delivery process exceeded my expectations. Highly reliable logistics partner!"
        rating={5}
      />
    </div>

    {/* Add more cards here */}
  </div>
</div>
</div>
      </section>
      </div>
    </>
  )
}
