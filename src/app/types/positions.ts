export interface CareerProgression {
  level: string;
  responsibilities: string[];
  salaryRange: string;
}

export interface Position {
  id: number;
  name: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  salaryRange: string;
  examples: string[];
  careerProgression: CareerProgression[];
  certifications: {
    name: string;
    provider: string;
    description: string;
  }[];
  keyTools: {
    name: string;
    description: string;
  }[];
  futureScope: string[];
  challenges: string[];
  commonInterviewQuestions: string[];
  resourcesForLearning: string[];
}
