"use server";

import { request } from "@/utils/request";
import { IPaginatedResponse } from "../actions.types";
import { IStrapiVideo, IVideo } from "./videos.types";
import { formatStrapiVideo } from "./videos.formatters";

export async function fetchVideos({
  page,
}: {
  page: number;
}): Promise<IPaginatedResponse<IVideo[]>> {
  const params = new URLSearchParams();
  params.set("sort[0]", "publish_date:desc");
  params.set("populate[0]", "video");
  params.set("pagination[page]", page.toString());
  // fields
  ["id", "title", "publish_date", "slug", "duration"].forEach(
    (field, index) => {
      params.set(`fields[${index}]`, field);
    }
  );

  const data = await request<IPaginatedResponse<IStrapiVideo[]>>(
    `/api/videos?${params.toString()}`
  );
  return {
    data: data.data.map(formatStrapiVideo),
    meta: data.meta,
  };
}

export async function fetchVideoBySlug(slug: string) {
  const params = new URLSearchParams();
  params.set("filters[slug][$eq]", slug);
  params.set("populate[0]", "video");
  const data = await request<IPaginatedResponse<IStrapiVideo[]>>(
    `/api/videos?${params.toString()}`
  );

  return {
    data:
      data.data && data.data.length ? formatStrapiVideo(data.data[0]) : null,
  };
}
