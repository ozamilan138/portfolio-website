import { Mail, Linkedin, Twitter } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-16 scroll-mt-28">
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">Let’s Work Together</h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          I’m always open to discussing new opportunities, interesting projects,
          or collaborations.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:ozamilan138@gmail.com"
            className="
              group
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-6
              transition
              hover:bg-white/10
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-white/10
                  border border-white/20
                "
              >
                <Mail className="h-5 w-5 text-white/80" />
              </div>

              <div className="text-left">
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-400">ozamilan138@gmail.com</p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/milan-prajapati-5a976419b/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-6
              transition
              hover:bg-white/10
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-white/10
                  border border-white/20
                "
              >
                <Linkedin className="h-5 w-5 text-white/80" />
              </div>

              <div className="text-left">
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-gray-400">Connect with me</p>
              </div>
            </div>
          </a>

          <a
            href="https://x.com/ozamilan138"
            target="_blank"
            rel="noopener noreferrer"
            className="
            group
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            p-6
            transition
            hover:bg-white/10
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                flex h-12 w-12 items-center justify-center
                rounded-full
                bg-white/10
                border border-white/20
                "
              >
                <Twitter className="h-5 w-5 text-white/80" />
              </div>

              <div className="text-left">
                <p className="font-medium">X (Twitter)</p>
                <p className="text-sm text-gray-400">Tech updates & thoughts</p>
              </div>
            </div>
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Milan Prajapati
        </p>
      </div>
    </section>
  );
}

export default Contact;
