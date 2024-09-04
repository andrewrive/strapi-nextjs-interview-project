"use client";

import { IPagination } from "@/actions/actions.types";
import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type QueryParamsPaginationProps = {
  pagination: IPagination;
};
const QueryParamsPagination = ({ pagination }: QueryParamsPaginationProps) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const onPageChange = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page.toString());
    push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <Pagination
      page={pagination.page}
      count={pagination.pageCount}
      onChange={(_, page) => onPageChange(page)}
    />
  );
};

export default QueryParamsPagination;
