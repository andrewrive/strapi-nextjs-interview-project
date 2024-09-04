export const ROUTES = {
  home: "/",
  blogs: {
    index: "/blogs",
    byId: (id: string | number) => `${ROUTES.blogs.index}/${id}`,
  },
  videos: {
    index: "/videos",
    byId: (id: string) => `${ROUTES.videos.index}/${id}`,
  },
};
