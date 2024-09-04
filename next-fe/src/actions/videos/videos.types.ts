export interface IVideo {
  id: number;
  title: string;
  slug: string;
  video_description: string;
  publish_date: Date;
  duration: number;
  url: string;
}

export interface IStrapiVideo {
  id: number;
  attributes: {
    title: string;
    slug: string;
    video_description: string;
    publish_date: Date;
    duration: number;
    video: { data: IStrapiMediaVideo };
  };
}

export interface IStrapiMediaVideo {
  id: number;
  attributes: {
    name: string;
    width: number;
    height: number;
    ext: string;
    mime: string;
    url: string;
  };
}
