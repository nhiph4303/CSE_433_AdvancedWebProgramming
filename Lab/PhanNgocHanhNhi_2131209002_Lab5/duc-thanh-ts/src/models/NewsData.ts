export type NewsData = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  publishedAt: Date;
  createdById: string;
};

export type NewsDataForHomePage = {
  id: string;
  title: string;
  thumbnail: string;
  summary: string;
};
