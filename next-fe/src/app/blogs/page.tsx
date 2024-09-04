import { fetchBlogs } from "@/actions/blogs/blogs.actions";
import QueryParamsPagination from "@/components/QueryParamsPagination";
import QueryParamsSearch from "@/components/QueryParamsSearch";
import { ROUTES } from "@/constants/routes";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page: string; search: string };
}) {
  const page = parseInt(searchParams.page || "1");
  const search = searchParams.search || "";
  const blogs = await fetchBlogs({ page, search });

  return (
    <Stack spacing={4}>
      <Typography variant="h1">Blog</Typography>
      <QueryParamsSearch search={search} />
      <Grid2 container spacing={2}>
        {blogs.data.map((blog) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={blog.id}>
            <Link href={ROUTES.blogs.bySlug(blog.slug)}>
              <Card>
                <CardMedia
                  component="img"
                  height="194"
                  image={blog.image.thumbnailUrl || blog.image.url}
                />
                <CardContent>
                  <Typography variant="h4">{blog.title}</Typography>
                </CardContent>
                <CardActions>{blog.read_time} minutes read</CardActions>
              </Card>
            </Link>
          </Grid2>
        ))}
      </Grid2>
      <QueryParamsPagination pagination={blogs.meta.pagination} />
    </Stack>
  );
}
