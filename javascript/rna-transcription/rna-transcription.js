//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = ([...dna]) => {
  const rnaConvert = {
     'G': 'C',
     'C': 'G',
     'T': 'A',
     'A': 'U',
     'default': ''
  }

  const rna = dna.map(x => 
    (rnaConvert[x] || rnaConvert['default'])
  );

  return rna.join('');
};
