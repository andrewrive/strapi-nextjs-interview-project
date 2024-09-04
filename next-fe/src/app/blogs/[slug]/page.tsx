import { fetchBlogBySlug } from "@/actions/blogs/blogs.actions";
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
  const response = await fetchBlogBySlug(params.slug);

  if (!response || !response.data) {
    return notFound();
  }
  const blog = response.data;

  return (
    <Stack spacing={4}>
      <Link href={ROUTES.blogs.index}>
        <Button startIcon={<ChevronLeft />}>Back to all articles</Button>
      </Link>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <img src={blog.image.url} height="400" alt="article thumbnail" />
        <Typography variant="h1">{blog.title}</Typography>
        <Stack spacing={1} justifyContent="center" alignItems="center">
          <Typography variant="body1">
            {format(blog.publish_date, "dd MMM, yyyy")}
          </Typography>
          <Typography variant="body1">{blog.read_time} minutes read</Typography>
        </Stack>
      </Stack>
      <Typography variant="body2">{blog.body}</Typography>
    </Stack>
  );
}
