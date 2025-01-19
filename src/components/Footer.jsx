import React from 'react'

// Simple Link component
const Link = ({ href, children, ...props }) => (
    <a href={href} {...props}>{children}</a>
  );
  
  // Simple Image component
  const Image = ({ src, alt, width, height, ...props }) => (
    <img src={src || "/placeholder.svg"} alt={alt} width={width} height={height} {...props} />
  );
  
  // Icons (simplified versions)
  const Facebook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
  
  const Linkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
  
  const Github = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
const Footer = () => {
  return (
    <div>
       <footer className="w-full bg-black px-6 py-6 border-t-2 border-[#915EFF]">
      <div className="container max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center  gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#915EFF] text-white font-bold text-xl">
                S
              </div>
              <span className="text-white text-xl font-semibold">Sahil</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Crafting digital experiences with modern web technologies and innovative solutions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center  justify-between pt-6 gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 - Present Sahil | All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="#" 
              className="text-gray-400 hover:text-[#915EFF] transition-all transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook />
            </Link>
            <Link 
              href="#https://www.linkedin.com/in/sahil-mahmood-b50159337/" 
              className="text-gray-400 hover:text-[#915EFF] transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
            <Link 
              href="#https://github.com/sahilphantom" 
              className="text-gray-400 hover:text-[#915EFF] transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github />
            </Link>
            <Link 
              href="#" 
              className="group transition-all transform hover:scale-110"
              aria-label="Fiverr"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sfowgs78yAs6LyWIirgJyBHCIcuiN0.png"
                alt="Fiverr"
                width={24}
                height={24}
                className="opacity-75 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
