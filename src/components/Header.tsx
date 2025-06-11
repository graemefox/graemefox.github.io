import React from 'react';
import { Mail, MapPin, GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="profile.jpg"
              alt="Graeme Fox"
              className="w-64 h-64 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
            />
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Graeme Fox
            </h1>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xl text-blue-200">
                <GraduationCap className="w-6 h-6" />
                <span>Research Fellow Bioinformatician</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 text-lg text-blue-200">
                <MapPin className="w-5 h-5" />
                <span>DeepSEQ, The University of Nottingham</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 text-lg text-blue-200">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:graeme.fox@nottingham.ac.uk"
                  className="hover:text-white transition-colors duration-200"
                >
                  graeme.fox@nottingham.ac.uk
                </a>
              </div>
            </div>
            
            <div className="text-blue-100 text-lg space-y-2">
              <p className="font-medium">PhD (Manchester Metropolitan University)</p>
              <p className="font-medium">MSc & BSc (Hons) (The University of Liverpool)</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;