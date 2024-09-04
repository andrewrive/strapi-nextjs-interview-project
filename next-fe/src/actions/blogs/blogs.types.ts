export interface IBlog {
  id: number;
  title: string;
  slug: string;
  publish_date: Date;
  video: any; // TODO;
  video_description: string;
  read_time: number;
  image: {
    id: number;
    url: string;
    thumbnailUrl?: string;
  };
}

export interface IStrapiBlog {
  id: number;
  attributes: {
    title: string;
    slug: string;
    publish_date: Date;
    video: any; // TODO;
    video_description: string;
    read_time: number;
    image: {
      data: IStrapiImage;
    };
  };
}

export interface IStrapiImage {
  id: number;
  attributes: {
    name: string;
    width: number;
    height: number;
    ext: string;
    mime: string;
    url: string;
    formats: {
      thumbnail?: {
        name: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        url: string;
      };
      small?: {
        name: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        url: string;
      };
    };
  };
}
