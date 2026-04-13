import { Inquiry, Project, NoteCategory } from './types';

export const INQUIRIES: Inquiry[] = [
  {
    id: '1',
    period: 'Spring 2026',
    title: 'Intro Statistics',
    description: 'ECON10 - Dartmouth College',
    type: 'Syllabus',
    link: '#'
  },
  {
    id: '2',
    period: 'Spring 2026',
    title: 'Quantum Information Theory',
    description: 'Decoherence and error correction in multi-qubit systems.',
    type: 'Notes',
    link: '#'
  },
  {
    id: '3',
    period: 'Winter 2025',
    title: 'Topological Data Analysis',
    description: 'Persistent homology in high-dimensional datasets.',
    type: 'Review',
    link: '#'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    year: '2024',
    archiveId: 'ARCHIVE_01',
    title: 'Lattice Structure Optimization',
    description: 'A study on recursive spatial structures generated through a custom GAN architecture. The project explores the boundaries between physical weight and algorithmic lightness.',
    links: [
      { label: 'REPOSITORY', url: '#' },
      { label: 'VIEW CASE', url: '#' }
    ]
  },
  {
    id: 'p2',
    year: '2023',
    archiveId: 'ARCHIVE_02',
    title: 'Kinetic Typography Engine',
    description: "Mapping the non-visible connections of Tokyo's industrial sprawl. Utilizing diffusion models to predict historical evolution patterns that never occurred.",
    links: [
      { label: 'LIVE DEMO', url: '#' }
    ]
  },
  {
    id: 'p3',
    year: '2023',
    archiveId: 'ARCHIVE_03',
    title: 'Synthetic Vestige',
    description: 'Reconstructing lost monolithic artifacts through predictive vision algorithms. A preservation effort for things that existed only in the collective subconscious.',
    links: [
      { label: 'WHITEPAPER', url: '#' }
    ]
  }
];

export const NOTE_CATEGORIES: NoteCategory[] = [
  {
    name: 'Electrical Engineering and Computer Science',
    notes: [
      {
        id: 'n1',
        code: 'ENGS 109',
        isGraduate: true,
        title: 'Distributed Systems: Consensus Protocols',
        term: 'Spring 2024',
        link: '#'
      },
      {
        id: 'n2',
        code: 'COSC 50',
        title: 'Automata Theory & Formal Languages',
        term: 'Fall 2023',
        link: '#'
      }
    ]
  },
  {
    name: 'Mathematics',
    notes: [
      {
        id: 'n3',
        code: 'Math 70',
        isGraduate: true,
        title: 'Linear Algebra: Spectral Theorem Proofs',
        term: 'Spring 2024',
        link: '#'
      },
      {
        id: 'n4',
        code: 'Math 54',
        title: 'Complex Analysis & Residue Calculus',
        term: 'Fall 2023',
        link: '#'
      },
      {
        id: 'n5',
        code: 'Math 63',
        title: 'Introduction to Topology: Metric Spaces',
        term: 'Winter 2023',
        link: '#'
      },
      {
        id: 'n6',
        code: 'Math 22',
        title: 'Advanced Linear Algebra',
        term: 'Placement',
        link: '#'
      }
    ]
  }
];
