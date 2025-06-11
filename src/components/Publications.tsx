import React from 'react';
import { ExternalLink, Newspaper } from 'lucide-react';

interface Publication {
  year: string;
  authors: string;
  title: string;
  journal: string;
  doi?: string;
  press?: Array<{ name: string; url: string }>;
}

const Publications = () => {
  const publications: Publication[] = [
    {
      year: "2025",
      authors: "George Day, Thomas Bolderstone, Greg J. Conway, Tony Cross, Tony Davis, Matilda Dolan, Mervyn Greening, Colin Neale, Ian Nicholson, Kim Nicholson, Ann Ward, Nik Ward, Graeme Fox, Ewan Harney, Helen Hipperson, Kathryn Maher, Jamie Thompson, Rachel Tucker, Dean Waters, Kate L. Durrant, Terry Burke, Jon Slate, Kathryn E. Arnold",
      title: "The Genomic Signature of Demographic Decline in a Long-Distance Migrant in a Range-Extreme Population",
      journal: "Molecular Ecology e17805",
      doi: "https://doi.org/10.1111/mec.17805"
    },
    {
      year: "2025",
      authors: "Simon Deacon, Inswasti Cahyani, Nadine Holmes, Graeme Fox, Rory Munro, Satrio Wibowo, Thomas Murray, Hannah Mason, Mark Housley, Daniel Martin, Abdi Sharif, Areeba Patel, Robert Goldspring, Sebastian Brandner, Felix Sahm, Stuart Smith, Simon Paine, Matthew Loose",
      title: "ROBIN: A unified nanopore-based assay integrating intraoperative methylome classification and next-day comprehensive profiling for ultra-rapid tumor diagnosis",
      journal: "Neuro-Oncology 2025;, noaf103",
      doi: "https://doi.org/10.1093/neuonc/noaf103",
      press: [
        { name: "BBC News", url: "https://www.bbc.co.uk/news/articles/cpvkmkk4pv4o" },
        { name: "The Guardian", url: "https://www.theguardian.com/science/2025/may/21/brain-tumour-diagnosis-could-be-made-within-hours-say-researchers" }
      ]
    },
    {
      year: "2025",
      authors: "Nash, A., Lee, IN., Fox, G. et al.",
      title: "An evaluation of spraying as a delivery method for human mesenchymal stem cells suspended in low-methyl pectin solutions",
      journal: "Stem Cell Res Ther 16, 246",
      doi: "https://doi.org/10.1186/s13287-025-04331-4"
    },
    {
      year: "2025",
      authors: "Patel, A., Göbel, K., Ille, S. et al.",
      title: "Prospective, multicenter validation of a platform for rapid molecular profiling of central nervous system tumors",
      journal: "Nature Medicine",
      doi: "https://doi.org/10.1038/s41591-025-03562-5"
    },
    {
      year: "2024",
      authors: "George Day, Graeme Fox, Helen Hipperson, Kathryn H. Maher, Rachel Tucker, Gavin J. Horsburgh, Dean Waters, Kate L. Durant, Terry Burke, Jon Slate, Kathryn E. Arnold",
      title: "Revealing the Demographic History of the European Nightjar (Caprimulgus europaeus)",
      journal: "Ecology and Evolution. Volume 14, Issue 10 October 2024 e70460",
      doi: "https://doi.org/10.1002/ece3.70460"
    },
    {
      year: "2022",
      authors: "Graeme Fox, Latha R. Vellaniparambil, Loreto Ros, Joshua Sammy, Richard F. Preziosi, Jennifer K. Rowntree",
      title: "Complex urban environments provide Apis mellifera with a richer plant forage than suburban and more rural landscapes",
      journal: "Ecology and Evolution. Volume 12, Issue 11 e9490",
      doi: "https://doi.org/10.1002/ece3.9490"
    },
    {
      year: "2022",
      authors: "Steven, W.J. Canty, John Paul Kennedy, Graeme Fox, Kenan Matterson, Vanessa L. González, Mayra L. Núñez-Vallecillo, Richard F. Preziosi & Jennifer K. Rowntree",
      title: "Mangrove diversity is more than fringe deep",
      journal: "Scientific Reports 12, Article Number 1695 (2022)",
      doi: "https://doi.org/10.1038/s41598-022-05847-y"
    }
  ];

  const groupedPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Published Work</h2>
        
        <div className="space-y-12">
          {Object.entries(groupedPublications)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, pubs]) => (
              <div key={year} className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">
                  {year}
                </h3>
                
                <div className="space-y-6">
                  {pubs.map((pub, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {pub.authors.split(', ').map((author, idx) => {
                            const isGraemeFox = author.includes('Graeme Fox') || author.includes('Fox, G');
                            return (
                              <span key={idx}>
                                {isGraemeFox ? (
                                  <strong className="text-blue-700">{author}</strong>
                                ) : (
                                  author
                                )}
                                {idx < pub.authors.split(', ').length - 1 ? ', ' : ''}
                              </span>
                            );
                          })}
                        </p>
                        
                        <h4 className="text-lg font-semibold text-gray-900 leading-snug">
                          {pub.title}
                        </h4>
                        
                        <p className="text-blue-600 font-medium italic">
                          {pub.journal}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                          {pub.doi && (
                            <a
                              href={pub.doi}
                              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                              <ExternalLink className="w-4 h-4" />
                              DOI Link
                            </a>
                          )}
                          
                          {pub.press && pub.press.length > 0 && (
                            <div className="flex items-center gap-2">
                              <Newspaper className="w-4 h-4 text-amber-600" />
                              <span className="text-sm text-gray-600">Press:</span>
                              {pub.press.map((press, idx) => (
                                <a
                                  key={idx}
                                  href={press.url}
                                  className="text-sm text-amber-600 hover:text-amber-800 transition-colors duration-200"
                                >
                                  {press.name}
                                  {idx < pub.press!.length - 1 ? ',' : ''}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;