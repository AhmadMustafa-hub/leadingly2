export type PageProps = {
  showSuccessNotification: (message: string | JSX.Element) => void;
  showInfoNotification: (message: string | JSX.Element) => void;
  showWarningNotification: (message: string | JSX.Element) => void;
  showErrorNotification: (message: string | JSX.Element) => void;
};

export interface Chapter {
  id: number;
  attributes: {
    chapterNumber: number;
    title: string;
    slug: string;
    bannerImage: Object;
    introduction: string;
    lessons: Lesson[];
    categories: Category[];
    dataCollectionQuizzs: DataCollectionQuizz[];
    chapterQuizzs: Quizz[];
    seo: Seo;
    published_at: string;
  };
}

export interface Lesson {
  title: string;
  content: string;
  lessonQuizzs?: Quizz;
}

export interface Quizz {
  id: number;
  question: string;
  successMessage: string;
  errorMessage: string;
  answers: Answer[];
}
export interface Answer {
  id: number;
  text: string;
  isTrue: boolean;
}

export interface DataCollectionQuizz {
  id: number;
  question: string;
  response: string;
}

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  shareImage: Object;
}

export interface Category {
  id: number;
  attributes: {
    name: string;
    slug: boolean;
    chapters: Chapter[];
  };
}
