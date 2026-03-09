export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 border-t border-zinc-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">

        {/* Brand */}

        <div className="col-span-2">
          <h2 className="text-white text-xl font-bold mb-4">Dihue</h2>

          <p className="text-sm leading-relaxed">
            A curated collection of beautiful gradients and color palettes
            for designers and developers around the world.
          </p>

          <p className="text-xs mt-6">
            © {new Date().getFullYear()} Dihue.
          </p>
        </div>

        {/* Product */}

        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>

          <ul className="space-y-2 text-sm">
            <li><a href="/generator" className="hover:text-white">Gradient Generator</a></li>
            <li><a href="/gradients" className="hover:text-white">Explore Gradients</a></li>
            <li><a href="/palettes" className="hover:text-white">Color Palettes</a></li>
          </ul>
        </div>

        {/* Creator */}

        <div>
          <h3 className="text-white font-semibold mb-4">Creator</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://your-portfolio-link.com"
                target="_blank"
                className="hover:text-white"
              >
                raikardivya15
              </a>
            </li>

            <li>
              <a
                href="https://github.com/raikardivya15"
                target="_blank"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}

        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <ul className="space-y-2 text-sm">
            <li><a href="https://www.linkedin.com/in/raikardivya15" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://x.com/raikardivya15" className="hover:text-white">Twitter</a></li>
            <li><a href="https://www.instagram.com/raikardivya15" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}

      <div className="text-center text-xs pb-6 text-gray-500">
        Created with ❤️ by{" "}
        <a
          href="https://raikardivya15.me"
          target="_blank"
          className="text-purple-400 hover:text-purple-300"
        >
          raikardivya15
        </a>
      </div>

    </footer>
  )
}