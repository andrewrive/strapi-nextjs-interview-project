import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { ROUTES } from "../constants/routes";

export default function Home() {
  return (
    <Stack
      gap={4}
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      sx={{ width: "100%", height: "100vh" }}
    >
      <Link href={ROUTES.blogs.index}>
        <Button variant="contained">Blogs</Button>
      </Link>
      <Link href={ROUTES.videos.index}>
        <Button variant="contained">Videos</Button>
      </Link>
    </Stack>
  );
}
