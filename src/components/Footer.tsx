import React from 'react';
import { Mail, MapPin, CaseSensitive as University } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto:graeme.fox@nottingham.ac.uk"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  graeme.fox@nottingham.ac.uk
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p>DeepSEQ</p>
                  <p>The University of Nottingham</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Research Focus</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Genomics & Bioinformatics</li>
              <li>• Ecological Genetics</li>
              <li>• Next-Generation Sequencing</li>
              <li>• Conservation Biology</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Qualifications</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <University className="w-4 h-4" />
                <span>PhD - Manchester Metropolitan University</span>
              </div>
              <div className="flex items-center gap-2">
                <University className="w-4 h-4" />
                <span>MSc & BSc (Hons) - University of Liverpool</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Graeme Fox. Academic Portfolio Website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;