import { fetchVideos } from "@/actions/videos/videos.actions";
import QueryParamsPagination from "@/components/QueryParamsPagination";
import { ROUTES } from "@/constants/routes";
import {
  Card,
  CardActions,
  CardContent,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page || "1");
  const videos = await fetchVideos({ page });

  return (
    <Stack spacing={4}>
      <Typography variant="h1">Blog</Typography>
      <Grid2 container spacing={2}>
        {videos.data.map((blog) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={blog.id}>
            <Link href={ROUTES.videos.bySlug(blog.slug)}>
              <Card>
                <CardContent>
                  <Typography variant="h4">{blog.title}</Typography>
                </CardContent>
                <CardActions>{blog.duration} minutes</CardActions>
              </Card>
            </Link>
          </Grid2>
        ))}
      </Grid2>
      <QueryParamsPagination pagination={videos.meta.pagination} />
    </Stack>
  );
}
