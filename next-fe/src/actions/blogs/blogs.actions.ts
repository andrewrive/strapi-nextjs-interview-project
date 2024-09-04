"use server";

import { request } from "@/utils/request";
import { IPaginatedResponse } from "../actions.types";
import { IBlog, IStrapiBlog } from "./blogs.types";
import { formatStrapiBlog } from "./blog.formatters";

export async function fetchBlogs({
  page,
}: {
  page: number;
}): Promise<IPaginatedResponse<IBlog[]>> {
  const params = new URLSearchParams();
  params.set("sort[0]", "publish_date:desc");
  params.set("populate[0]", "image");
  params.set("pagination[page]", page.toString());

  const data = await request<IPaginatedResponse<IStrapiBlog[]>>(
    `/api/blogs?${params.toString()}`
  );
  return {
    data: data.data.map(formatStrapiBlog),
    meta: data.meta,
  };
}
