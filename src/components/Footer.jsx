import React from 'react';

// Simple Link component to replace Next.js Link
const Link = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
);

// Simple Image component to replace Next.js Image
const Image = ({ src, alt, width, height, ...props }) => (
  <img src={src || "/placeholder.svg"} alt={alt} width={width} height={height} {...props} />
);

// Simplified icon components
const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-20 bg-[#000] border-solid border-t-[1px] border-[#915EFF]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#915EFF] text-white font-bold">
            S
          </div>
          <span className="text-white text-xl">Sahil</span>
        </div>

        {/* Center - Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm sm:text-base md:text-lg text-gray-400 text-center sm:text-left">
          <span>© 2025 - Present Sahil</span>
          <span className="hidden sm:inline">—</span>
          <Link 
            href="mailto:sahil@example.com"
            className="hover:text-white transition-colors"
          >
            sahilmahmood188@gmail.com
          </Link>
        </div>

        {/* Right - Social Links */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://www.facebook.com/yourusername" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/sahil-mahmood-b50159337/" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="https://github.com/sahilphantom" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;

