const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Stellarmind.ai",
    duration: "Jul 2024 – Dec 2025",
    summary:
      "Worked on multiple production-grade platforms involving real-time communication, microservices, and cloud-native systems.",
    points: [
      "Designed and developed scalable backend systems using NestJS-based microservices",
      "Implemented real-time features using WebSockets, Socket.IO, and WebRTC",
      "Designed PostgreSQL schemas and optimized queries using Prisma ORM",
      "Integrated cloud infrastructure and handled production deployments on AWS",
      "Collaborated with product and UI/UX teams; led code reviews and mentored juniors",
    ],
  },
  {
    role: "Trainee Web Developer",
    company: "Heptagon Global Services",
    duration: "Jan 2024 – Jun 2024",
    summary:
      "Contributed to client-facing web applications while building strong frontend and backend fundamentals.",
    points: [
      "Developed responsive user interfaces using React.js",
      "Integrated RESTful APIs for dynamic data rendering",
      "Built backend services using Node.js and Express",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 py-16 scroll-mt-28">
      <div className="mx-auto max-w-4xl">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience & Work
          </h2>
          <p className="mt-4 text-gray-400">
            Professional experience building scalable, production-ready systems
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="
                rounded-2xl
                bg-white/5
                backdrop-blur-md
                border border-white/10
                p-6
              "
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-400">
                  {exp.company} · {exp.duration}
                </p>
              </div>

              {/* Summary */}
              <p className="text-gray-300 mb-4">
                {exp.summary}
              </p>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {/* Confidentiality */}
              <p className="mt-4 text-sm text-gray-500 italic">
                Code and internal systems are not public due to confidentiality.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;

