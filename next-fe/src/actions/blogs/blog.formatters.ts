import { IBlog, IStrapiBlog } from "./blogs.types";

export const formatStrapiBlog = (blog: IStrapiBlog) => {
  const formattedBlog: IBlog = {
    id: blog.id,
    ...blog.attributes,
    read_time: blog.attributes.read_time,
    image: {
      id: blog.attributes.image.data.id,
      url: `${process.env.API_BASE}${blog.attributes.image.data.attributes.url}`,
      thumbnailUrl: `${process.env.API_BASE}${blog.attributes.image.data.attributes.formats?.thumbnail?.url}`,
    },
  };
  return formattedBlog;
};
