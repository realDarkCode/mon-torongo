const TeamMemberCard = ({ member, scale = "" }) => (
  <div
    className={`relative flex flex-col items-center text-center group ${scale} select-none`}
  >
    <img
      src={member.imageUrl}
      alt={member.name}
      className="size-24 md:size-28 rounded-full object-cover border-4 border-brand-500 bg-neutral-200  transition-all duration-300 group-hover:border-brand-600 group-hover:scale-105 shadow-md group-hover:shadow-lg"
    />
    <div className="mt-4">
      <div className="relative">
        <h3 className="font-bold text-neutral-800 text-md">{member.name}</h3>
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 w-max bg-neutral-800 text-white text-xs rounded-md py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {member.englishTitle}
        </span>
      </div>
      <p className="text-sm text-gray-500 font-medium">{member.position}</p>
    </div>
  </div>
);

const Team = ({ teamData }) => {
  const allTeamMembers = [
    teamData,
    ...teamData.children.flatMap((c) => [c, ...c.children]),
  ];

  return (
    <section className="py-20 md:py-20 bg-neutral-100">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-neutral-800  mb-20">
          আড়ালের মানুষগুলো
        </h2>
        {/* Desktop Tree-like Structure */}
        <div className="hidden md:flex flex-col items-center space-y-4 md:space-y-8">
          {/* CEO */}
          <TeamMemberCard member={teamData} />

          {/* Leads */}
          <div className="flex justify-center items-start gap-x-10 lg:gap-x-16">
            {teamData.children.map((lead) => (
              <div
                key={lead.name}
                className="flex flex-col items-center space-y-5"
              >
                <TeamMemberCard member={lead} scale="scale-95" />
                {lead.children.length > 0 && (
                  <div className="flex flex-col items-center space-y-10">
                    <div className="flex gap-x-8 lg:gap-x-10">
                      {lead.children.map((member) => (
                        <TeamMemberCard
                          key={member.name}
                          member={member}
                          scale="scale-90"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Grid Structure */}
        <div className="md:hidden grid grid-cols-2 gap-8">
          {allTeamMembers.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
