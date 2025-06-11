import React from 'react';
import { Award, DollarSign, Presentation, Newspaper } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Grants</h3>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Awards</h3>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Presentation className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Conferences</h3>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Media</h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Grants */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-600" />
              Grants Awarded
            </h3>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <p className="text-gray-700">
                <strong>November 2020</strong> - Awarded a grant from the{' '}
                <a 
                  href="https://www.evacranetrust.org/" 
                  className="text-green-600 hover:text-green-800 transition-colors duration-200 font-medium"
                >
                  Eva Crane Trust
                </a>{' '}
                for the project: "Healthy diet, healthy guts, healthy bees."
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Award className="w-6 h-6 text-blue-600" />
              Awards
            </h3>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700">
                <strong>February 2020</strong> - Post-Graduate Research Paper Award{' '}
                <span className="text-blue-600 font-semibold">(1st place)</span> – 
                Ecology and Environment Research Centre, Manchester Metropolitan University.
              </p>
            </div>
          </div>
        </div>

        {/* Conference Talks & Posters */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Presentation className="w-6 h-6 text-purple-600" />
            Conference Talks & Posters
          </h3>
          
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <p className="text-gray-700">
                <strong>December 2020</strong> - British Ecological Society Annual Meeting 2020: 
                Talk titled "A Hive of Activity – GIS and DNA sequencing reveal the effect urban spaces have on bee diet"
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <p className="text-gray-700">
                <strong>December 2019</strong> - British Ecological Society Annual Meeting 2019: 
                Talk titled "Why you should be using multiple genomes when developing new microsatellite markers. 
                A new tool for a multiple genome approach to microsatellite design (MiMi)."
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <p className="text-gray-700">
                <strong>December 2016</strong> - British Ecological Society Annual Meeting 2016: 
                Poster titled "<em>Ex situ</em> conservation of the endangered undulate ray (<em>Raja undulata</em>)."
              </p>
            </div>
          </div>
        </div>

        {/* Work In The Press */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Newspaper className="w-6 h-6 text-amber-600" />
            Work In The Press
          </h3>
          
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <p className="text-gray-700 mb-4">
                Some work the department performed on trade in 'hatha jodi': a root believed to bring good luck in some cultures. 
                Trade in the plant has been fuelling illicit trade in animal parts.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://gizmodo.com/if-you-ordered-a-rare-indian-root-online-its-probably-1796245321"
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200 font-medium"
                >
                  Gizmodo
                </a>
                <a 
                  href="https://www.telegraph.co.uk/news/2017/06/20/lizard-penis-passed-lucky-plant-wide-ranging-scam/"
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200 font-medium"
                >
                  The Telegraph
                </a>
                <a 
                  href="http://www.bbc.co.uk/news/world-asia-india-40323340"
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200 font-medium"
                >
                  BBC
                </a>
              </div>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <p className="text-gray-700">
                My work on captive populations of <em>Raja undulata</em> has been featured on{' '}
                <a 
                  href="http://www.bbc.co.uk/earth/story/20141112-ray-dna-mapped-to-stop-inbreeding"
                  className="text-amber-600 hover:text-amber-800 transition-colors duration-200 font-medium"
                >
                  BBC Earth
                </a>{' '}
                and Manchester University News.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;