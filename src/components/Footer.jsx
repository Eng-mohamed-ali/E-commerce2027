import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Instagram, 
  Disc as Discord, 
  HelpCircle, 
  ShoppingBag, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp, navLinkHover } from './animations/MotionPresets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Extension', path: '/extension' },
        { name: 'Mobile App', path: '/mobile-app' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Affiliate', path: '/affiliate' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Privacy', path: '/privacy' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, external: true },
        { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, external: true },
        { name: 'Discord', href: 'https://discord.com', icon: Discord, external: true },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Discord, href: 'https://discord.com', label: 'Discord' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={slideUp}>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-8 h-8 text-primary-400" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-white">MarketMosaic</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The ultimate AI companion for your online shopping journey.
              We help you find better products at lower prices.
            </p>

            <address className="not-italic space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:support@marketmosaic.com" className="hover:text-white transition-colors">
                  support@marketmosaic.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>San Francisco, CA</span>
              </div>
            </address>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <motion.nav
              key={section.title}
              variants={slideUp}
              aria-labelledby={`footer-${section.title}`}
            >
              <h3
                id={`footer-${section.title}`}
                className="font-semibold text-white mb-4"
              >
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.links.map((link) => {
                  const Icon = link.icon;

                  const content = (
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                      {link.name}
                    </span>
                  );

                  if (link.external) {
                    return (
                      <motion.li key={link.name} {...navLinkHover}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {content}
                        </a>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li key={link.name} {...navLinkHover}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {content}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} MarketMosaic Technologies Inc. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;