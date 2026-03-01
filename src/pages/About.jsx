import { Target, Eye } from "lucide-react";
import AboutPage from "../assets/About_page.svg";
import { Compass } from "lucide-react";



export default function AboutSection() {
  return (
    <section className="relative bg-[#f9f7f2] py-20">
     
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-2">

        <div className="max-w-xl">

         
          <span className="mb-5 inline-flex rounded-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 px-5 py-1.5 text-sm font-semibold text-white">
            About Us
          </span>

         
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            Revolutionizing Industries
            <span className="text-emerald-600"> Through Intelligent Data</span>
          </h2>

         
          <p className="mb-10 font-bold text-lg leading-relaxed ">
            Innoflect Solutions empowers agriculture, food, and life
            sciences with advanced data logging sensors and intelligent
            analytics—transforming raw data into actionable insights
            that drive efficiency, accuracy, and sustainability.
          </p>

          
          <div className="space-y-7">

            <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
             
<div className="flex h-12 w-12 items-center justify-center rounded-xl 
                bg-white/60 backdrop-blur-md 
                border border-indigo-200 
               text-gray-600 shadow">
 <Compass size={24} />
</div>

              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Our Mission</h3>
                <p className="leading-relaxed text-gray-600 font-bold">
                  To redefine how industries leverage data by delivering
                  precise sensor technologies and intelligent analytics
                  that optimize operations, reduce resource waste, and
                  enable smarter, sustainable decision-making.
                </p>
              </div>
            </div>

           
            <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl 
                bg-white/60 backdrop-blur-md 
                border border-indigo-200 
              text-gray-600 shadow">
  <Eye size={24} />
</div>

              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Our Vision</h3>
                <p className="leading-relaxed text-gray-600 font-bold">
                  To create a data-driven future where businesses grow
                  responsibly, guided by intelligent insights that
                  protect our planet and empower long-term innovation.
                </p>
              </div>
            </div>

          </div>

         
          <div className="mt-12">
            <button className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow transition hover:bg-emerald-700">
              Contact Us
            </button>
          </div>

        </div>

        
        <div className="flex justify-center">
          <img
            src={AboutPage}
            alt="Data analytics and sensor technology illustration"
            className="w-full max-w-md drop-shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
