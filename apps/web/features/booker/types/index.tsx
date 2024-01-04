export type Bookmark = {
  id: string;
  name: string;
  displayOrder: number | null;
};

export type Link = {
  id: string;
  url: string;
  title: string | null;
  description: string | null;
  siteName: string | null;
  image: string | null;
  displayOrder: number | null;
  createdAt: Date;
  updatedAt: Date;
  bookmarkId: string;
  bookmark: {
    id: string;
    name: string;
  };
};

export type UpdateLinkData = {
  id: string;
  url: string;
  title: string | null;
  description: string | null;
  siteName: string | null;
  image: string | null;
  bookmarkId: string;
};
