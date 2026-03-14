export default function TeamSection() {

  const teamMembers = [
    { name: "Om Prakash", role: "Frontend Developer" },
    { name: "Rahul Sharma", role: "Backend Developer" },
    { name: "Anjali Mehta", role: "UI/UX Designer" },
    { name: "Arjun Patel", role: "Data Engineer" },
    { name: "Priya Verma", role: "Product Manager" },
    { name: "Rohan Singh", role: "DevOps Engineer" }
  ];

  return (
    <section className="relative bg-[#f9f7f2] py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

      
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE INFO */}
        <div className="max-w-xl">

          <span className="mb-5 inline-flex rounded-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 px-5 py-1.5 text-sm font-semibold text-white">
            Our Team
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet The People
            <span className="text-emerald-600"> Behind Innovation</span>
          </h2>

          <p className="text-lg font-bold text-gray-700 leading-relaxed">
            Our team combines expertise in engineering, analytics, and
            design to build intelligent solutions that transform
            industries through data-driven innovation.
          </p>

        </div>


        {/* RIGHT SIDE TEAM LIST */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-10">
          

          {teamMembers.map((member, index) => (
            

         <div
  key={index}
  className="relative pr-6"
>
<div
  key={index}
  className="relative pl-6"
>

  {/* Border */}
  <span className="absolute left-0 top-1 h-6 w-[3px] bg-emerald-500"></span>

  {/* Text */}
  <h3 className="text-sm font-semibold text-gray-800">
    {member.name}
  </h3>

  <p className="text-xs text-gray-500">
    {member.role}
  </p>

</div>


</div>


          ))}

        </div>

      </div>

    </section>
  );
}
