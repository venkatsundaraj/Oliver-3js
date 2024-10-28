import React from "react";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ashutosh Tiwari",
    role: "Founding Partner | Director",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Aseem Chhiber",
    role: "Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Shiv Subramaniam",
    role: "Principal",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Rajan Puri",
    role: "Partner Designate",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Nivedita Chandra",
    role: "Principal",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Nishith Sharan",
    role: "Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Vivek Manthur",
    role: "Partner Designate",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Vidyut Verma",
    role: "Partner Designate",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },

  {
    name: "Vikram Korde",
    role: "Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Shekhar Nevgi",
    role: "Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Arindam Sarkar",
    role: "Founding Partner - Africa",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Jeremy Holmes",
    role: "Founder | Director",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },

  {
    name: "Ninad Pandharkar",
    role: "Partner Designate",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Kanika Singal",
    role: "Founding Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Rajeev Garg",
    role: "Founding Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Hitesh Sethi",
    role: "Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },

  {
    name: "V Harikes",
    role: "Director",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Krishna Thothadri",
    role: "Founder | Director",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
  {
    name: "Sheetal Dasgupta",
    role: "Associate Partner",
    imageUrl: "https://via.placeholder.com/150", // Dummy image URL
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white text-center py-12 w-screen">
      <div className="container max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.imageUrl}
                alt={`${member.name}, ${member.role}`}
                className="w-full h-72 object-cover  mb-4 bg-gray-400"
              />
              <h3 className="text-[#00aeef] text-[30px] text-left font-heading">
                {member.name}
              </h3>
              <p className=" text-left font-paragraph">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
