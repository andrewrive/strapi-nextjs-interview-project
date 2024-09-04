export const ROUTES = {
  home: "/",
  blogs: {
    index: "/blogs",
    bySlug: (slug: string) => `${ROUTES.blogs.index}/${slug}`,
  },
  videos: {
    index: "/videos",
    bySlug: (slug: string) => `${ROUTES.videos.index}/${slug}`,
  },
};
