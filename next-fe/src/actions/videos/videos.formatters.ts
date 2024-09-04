import { IStrapiVideo, IVideo } from "./videos.types";

export const formatStrapiVideo = (video: IStrapiVideo) => {
  const formattedVideo: IVideo = {
    id: video.id,
    ...video.attributes,
    url: `${process.env.API_BASE}${video.attributes.video.data.attributes.url}`,
  };

  return formattedVideo;
};
