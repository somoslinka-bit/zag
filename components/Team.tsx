import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    { 
      name: "Martina", 
      role: "Co Founder / Ads & Project Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "https://www.linkedin.com/in/martina-zuzulich/"
    },
    { 
      name: "Agustina", 
      role: "Co Founder / Brand & Project Manager",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "https://www.linkedin.com/in/martina-zuzulich/"
    },
    { 
      name: "Francisco", 
      role: "Especialista en Ads (Google, Meta, TikTok, LinkedIn) y Landing Page",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "https://www.linkedin.com/in/francisco-martin-mendiberri"
    },
    { 
      name: "Antonella", 
      role: "Community Manager / Brand Manager Auxiliar",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      linkedin: "https://www.linkedin.com/in/martina-zuzulich/"
    },
    { 
      name: "Lucía", 
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "https://www.linkedin.com/in/martina-zuzulich/"
    },
    { 
      name: "Valentina", 
      role: "Diseñadora Gráfica",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    linkedin: "https://www.linkedin.com/in/martina-zuzulich/"
    }
  ];

  return (
    <section id="team" className="py-24 bg-white border-t border-gray-100 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-gray-900">Cada estrategia es el resultado del trabajo de un equipo que la hace posible.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <a
  key={index}
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-shadow border border-transparent cursor-pointer group"
>
  <img
    src={member.image}
    alt={member.name}
    className="w-16 h-16 rounded-full object-cover border border-gray-200 shadow-sm"
  />

  <div>
    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
      {member.name}
    </h3>
    <p className="text-sm text-gray-500 font-light">
      {member.role}
    </p>
  </div>
</a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;