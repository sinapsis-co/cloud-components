export interface BlogEntryData {
  imgSrc: string;
  author: string;
  date: Date;
  time: string;
  title: string;
  text: React.ReactNode;
  link: string;
  tags: string[];
}
