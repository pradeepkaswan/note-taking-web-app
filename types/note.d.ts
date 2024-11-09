export type Note = {
  id: string;
  title: string;
  content: string;
  archived: boolean;
  authorId: string;
  tags: Tag[];
  createdAt: Date;
  updatedAt: Date;
};

export type Tag = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
