import React from "react";

const Footer = () => {
  return (
    <>
      <footer 
        className="relative z-10 bg-white dark:bg-dark py-10 md:py-20 px-6 sm:px-10"
        style={{ boxShadow: "inset 0 8px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="text-center md:text-left">
              <a href="/" className="font-bold text-3xl leading-10 text-blue-400 hover:text-5xl hover:transition-all duration-500">
                Smile
              </a>
              <p className="mt-4 text-base text-body-color dark:text-dark-6">
                Your go-to destination for premium fashion, quality, and style in every piece.
              </p>
              <p className="mt-4 text-sm font-medium text-dark">
                <span>📞 +111 (111) 111 11</span>
              </p>
            </div>

            {/* Links Sections */}
            <LinkGroup header="Resources">
              <NavLink link="/#" label="Web Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="Naksu Store" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h4 className="mb-4 text-lg font-semibold text-dark">Follow Us On</h4>
              <div className="flex justify-center md:justify-start space-x-3">
                <SocialIcon link="https://www.facebook.com/facebook" icon="facebook" />
                <SocialIcon link="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" icon="linkedin" />
                <SocialIcon link="https://twitter.com" icon="twitter" />
                <SocialIcon link="https://instagram.com" icon="instagram" />
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <div className="text-center md:text-left">
      <h4 className="mb-4 text-lg font-semibold text-dark">{header}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-dark hover:text-primary hover:text-blue-400 dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

const SocialIcon = ({ link, icon }) => {
  const icons = {
    facebook: "M12 2.04c-5.52 0-10 4.48-10 10 0 5 3.66 9.16 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.2c0-2.5 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v6.98c4.78-.72 8.44-4.88 8.44-9.88 0-5.52-4.48-10-10-10z",
    linkedin: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.57z",
    twitter: "M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.59 8.59 0 0 1-2.72 1.04 4.26 4.26 0 0 0-7.26 3.89 12.1 12.1 0 0 1-8.77-4.45 4.26 4.26 0 0 0 1.32 5.69 4.2 4.2 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96 8.54 8.54 0 0 1-5.29 1.82 8.71 8.71 0 0 1-2.59-.38 12.07 12.07 0 0 0 6.55 1.92c7.87 0 12.18-6.53 12.18-12.18 0-.19-.01-.38-.02-.57a8.7 8.7 0 0 0 2.14-2.22z",
    instagram: "M7 2C4.243 2 2 4.243 2 7v6c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm6.5 1a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 10.5v-6A1.5 1.5 0 0 1 7.5 3h6zM8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4.406-6.845a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  };
  
  return (
    <a
      href={link}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-dark hover:border-blue-400 hover:bg-blue-400 transition-all"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current text-blue-400">
        <path d={icons[icon]} />
      </svg>
    </a>
  );
};

export default Footer;
