import React from 'react';
import { Dna, Microscope, Leaf } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              I am currently a research fellow at The University of Nottingham based within{' '}
              <a 
                href="https://www.nottingham.ac.uk/deepseq/" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                DeepSEQ
              </a>
              ; the bioinformatics and genomics core facility.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Dna className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Genomics</h3>
                <p className="text-sm text-gray-600">Next-generation sequencing technologies and applications</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Microscope className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Bioinformatics</h3>
                <p className="text-sm text-gray-600">Computational approaches to biological questions</p>
              </div>
              
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <Leaf className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Ecological Genetics</h3>
                <p className="text-sm text-gray-600">Conservation and ecological applications</p>
              </div>
            </div>
            
            <p className="mb-6">
              I have a very general interest in genomics and bioinformatics, with particular focus on ecological 
              genetics. My work involves using cutting edge next-generation sequencing technologies and 
              bioinformatics approaches to answer a broad range of biological questions.
            </p>
            
            <p className="mb-6">
              My previous roles have included research and training at the NEOF facility at The University of Sheffield, 
              and roles involving the use of genomics and bioinformatics approaches for diet analysis in{' '}
              <em>A. mellifera</em>, and qPCR approaches to describe changes in the gut microbiome of{' '}
              <em>B. terrestris</em>. My PhD and role as a research associate at Manchester Metropolitan 
              University involved various next-generation sequencing methods and applications in 
              conservation and ecology.
            </p>
            
            <p>
              I also have experience as a research technician at The University of Manchester in both the soil 
              ecology group and genomics core facility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;