export const ROUTES = {
  home: "/",
  blogs: {
    index: "/blogs",
    bySlug: (slug: string) => `${ROUTES.blogs.index}/${slug}`,
  },
  videos: {
    index: "/videos",
    byId: (id: string) => `${ROUTES.videos.index}/${id}`,
  },
};
