export type Bookmark = {
  id: string;
  name: string;
};

export type Link = {
  id: string;
  url: string;
  title: string | null;
  description: string | null;
  siteName: string | null;
  image: string | null;
  bookmarkId: string;
};
