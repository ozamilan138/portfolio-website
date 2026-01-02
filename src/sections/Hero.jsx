import DecryptedText from "../components/DecryptedText";
import profileImage from "../assets/ai_generated_sitting_on_chair_image.png";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative z-10
        min-h-[75vh] md:min-h-[80vh]
        flex items-center
        px-6
        scroll-mt-28
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          w-full
          grid
          grid-cols-1
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* LEFT: TEXT */}
        <div className="space-y-6">
          <p className="text-gray-400 text-sm tracking-wide">Hello, I’m</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <DecryptedText
              text="Milan Prajapati"
              animateOn="view"
              revealDirection="center"
            />
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            <DecryptedText
              text="Full Stack Developer"
              speed={80}
              maxIterations={18}
              animateOn="view"
            />
          </h2>

          <p className="text-gray-400 max-w-md">
            I build scalable, high-performance web applications with modern
            frontend and backend technologies.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <a href="#projects">
              {" "}
              <button
                className="
                px-6 py-3
                rounded-full
                bg-white text-black
                font-medium
                hover:bg-gray-200
                transition
                cursor-pointer
              "
              >
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button
                className="
                px-6 py-3
                rounded-full
                border border-white/20
                text-white
                hover:bg-white/10
                transition
                cursor-pointer
              "
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              relative
              w-64 h-78
              md:w-80 md:h-100
              rounded-3xl
              overflow-hidden
              border border-white/20
              bg-white/5
              backdrop-blur-sm
            "
          >
            <img
              src={profileImage}
              alt="Milan Prajapati"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
