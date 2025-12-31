import {
  Layout,
  Layers,
  Server,
  Radio,
  Database,
  Cloud,
  Network
} from "lucide-react";


const skills = [
  {
    title: "Frontend Development",
    icon: Layout,
    items: ["React", "Next.js", "JavaScript (ES6)", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "State Management",
    icon: Layers,
    items: ["Redux", "Redux Toolkit"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Real-time & Communication",
    icon: Radio,
    items: ["WebSockets", "Socket.IO", "WebRTC"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS (EC2, S3, IAM)", "Docker", "DigitalOcean", "Vercel", "Render"],
  },
  {
    title: "Architecture & Messaging",
    icon: Network,
    items: ["Microservices", "RabbitMQ", "Kafka"],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-gray-400">
            Technologies I use to build scalable, production-ready systems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-md
                  border border-white/10
                  p-6
                  transition
                  hover:bg-white/10
                "
              >
                {/* Card Header */}
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full
                      bg-white/10
                      border border-white/20
                    "
                  >
                    <Icon className="h-5 w-5 text-white/80" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {skill.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border border-white/10
                        px-3 py-1
                        text-sm
                        text-gray-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
