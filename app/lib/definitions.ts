// type User = {
//   id: string;
//   googleId: string;
//   name: string;
// };

export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Tag = {
  id: string;
  name: string;
};
