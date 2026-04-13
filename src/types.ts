export interface Inquiry {
  id: string;
  period: string;
  title: string;
  description: string;
  type: string;
  link: string;
}

export interface Project {
  id: string;
  year: string;
  archiveId: string;
  title: string;
  description: string;
  links: {
    label: string;
    url: string;
  }[];
}

export interface Note {
  id: string;
  code: string;
  isGraduate?: boolean;
  title: string;
  term: string;
  link: string;
}

export interface NoteCategory {
  name: string;
  notes: Note[];
}
