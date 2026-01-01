import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Home Services Booking Platform",
    subtitle: "Large-scale, real-time service marketplace",
    type: "confidential",
    description:
      "A large-scale home services platform handling bookings, professionals, drivers, payments, and real-time tracking.",
    highlights: [
      "NestJS-based microservices architecture",
      "PostgreSQL with Prisma ORM",
      "Real-time tracking using WebSockets",
      "Subscription and payment integrations",
      "AWS deployment and infrastructure management",
    ],
    tech: ["NestJS", "PostgreSQL", "Prisma", "WebSockets", "AWS"],
  },
  {
    title: "Communication & Media Platform",
    subtitle: "Real-time chat & video calling system",
    type: "confidential",
    description:
      "A social media platform with real-time messaging and video calling features.",
    highlights: [
      "One-to-one and group chat using XMPP",
      "Video and group calls using WebRTC",
      "React + Tailwind UI",
      "Real-time updates via WebSockets",
    ],
    tech: ["React", "WebRTC", "WebSockets", "XMPP", "Tailwind"],
  },
  {
    title: "Personal Project",
    subtitle: "Full Stack Web Application",
    type: "public",
    description:
      "A personal project showcasing end-to-end full stack development.",
    highlights: [
      "Frontend built with React",
      "Backend API using Node.js",
      "Authentication and protected routes",
    ],
    tech: ["React", "Node.js", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-16 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="mt-4 text-gray-400">
            Selected work showcasing real-world systems and applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
