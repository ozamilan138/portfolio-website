import TiltWrapper from "./TiltWrapper";

function ProjectCard({ project }) {
  return (
    <TiltWrapper
      className="
        rounded-3xl
        bg-white/5
        border border-white/10
        backdrop-blur-md
        p-6
        h-full
        flex
        flex-col
      "
    >
      <h3 className="text-xl font-semibold mb-1">
        {project.title}
      </h3>

      <p className="text-sm text-gray-400 mb-4">
        {project.subtitle}
      </p>

      <p className="text-gray-300 mb-4">
        {project.description}
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border border-white/10
              px-3 py-1
              text-xs
              text-gray-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6">
        {project.type === "public" ? (
          <div className="flex gap-4 text-sm">
            <a href={project.liveUrl} className="underline">
              Live
            </a>
            <a href={project.githubUrl} className="underline">
              GitHub
            </a>
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">
            Confidential · Code not publicly available
          </p>
        )}
      </div>
    </TiltWrapper>
  );
}

export default ProjectCard;
