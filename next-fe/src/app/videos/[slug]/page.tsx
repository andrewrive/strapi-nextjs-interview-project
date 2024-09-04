import { fetchBlogBySlug } from "@/actions/blogs/blogs.actions";
import { fetchVideoBySlug } from "@/actions/videos/videos.actions";
import { ROUTES } from "@/constants/routes";
import { ChevronLeft } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { format } from "date-fns/format";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogBySlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const response = await fetchVideoBySlug(params.slug);

  if (!response || !response.data) {
    return notFound();
  }
  const video = response.data;

  return (
    <Stack spacing={4}>
      <Link href={ROUTES.videos.index}>
        <Button startIcon={<ChevronLeft />}>Back to all videos</Button>
      </Link>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <video src={video.url} height="400" controls />
        <Typography variant="h1">{video.title}</Typography>
        <Stack spacing={1} justifyContent="center" alignItems="center">
          <Typography variant="body1">
            {format(video.publish_date, "dd MMM, yyyy")}
          </Typography>
          <Typography variant="body1">{video.duration} minutes</Typography>
        </Stack>
      </Stack>
      <Typography variant="body2">{video.video_description}</Typography>
    </Stack>
  );
}
