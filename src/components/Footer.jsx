import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="container-custom">
      <div className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))]  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 py-12 ">

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Innoflect Solutions
            </h3>

            <p className="opacity-70 mb-6">
              Specializing in data logging sensors and analysis services for
              agriculture, food, and life sciences sectors.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/innoflect-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
             </div>
            
           <div>
            <h4 className="text-lg font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary))] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary))] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary))] transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary))] transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary))] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[hsl(var(--primary))] shrink-0 mt-1" size={18} />
                <span className="text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary))] ">
                  Flat no.111, Omm paradise apartment, Shampur, Bhubaneswar,
                  Odisha 751003, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[hsl(var(--primary))] shrink-0" size={18} />
                <a
                  href="tel:+919583277415"
                  className="text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  +91 9583277415
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[hsl(var(--primary))] shrink-0" size={18} />
                <a
                  href="mailto:innoflectsolutions05@gmail.com"
                  className="text-[hsl(var(--footer-foreground)/0.7)]  hover:text-[hsl(var(--primary))] transition-colors"
                >
                  innoflectsolutions05@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
             <h4 className="text-lg font-semibold mb-6">Recognitions</h4>
            <div className="space-y-4">
              <a
                href="https://recognition-be.startupindia.gov.in/s3/download/document/RECOGNITION_CERTIFICATE/5b6b5c7d-0ecc-4bed-84a7-62900d52a08b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary)) transition-colors text-sm"
              >
                ✓ Recognised by Startup India
              </a>
              <a
                href="https://startupodisha.gov.in/wf_new/StartupOdisha/V1/Startup_Controller/show_recognition_data?has=U1RBUlRSRUdfU1RBUlQyMTIxNzExNjkzNjgz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[hsl(var(--footer-foreground)/0.7)] hover:text-[hsl(var(--primary)) transition-colors text-sm"
              >
                ✓ Recognised by Startup Odisha
              </a>
            </div>
          </div>


          
          </div>
      <div className="border-t border-[hsl(var(--footer-foreground)/0.1)] mt-12 pt-8 mb-6 text-center">
        <p className="text-[hsl(var(--footer-foreground)/0.5)] text-sm">
          © 2024 INNOFLECT SOLUTIONS Private Limited. All Rights Reserved.
        </p>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
