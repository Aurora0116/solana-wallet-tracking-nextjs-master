import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationFilter(props: { setPaginationNum: Function, perPage: string, loading: boolean, paginationNum: string }) {
  const [page, setPage] = React.useState(parseInt(props.paginationNum));
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    props.setPaginationNum(value);
  };

  React.useEffect(() => {
    setPage(1)
    props.setPaginationNum(1);
  }, [props.perPage])

  React.useEffect(() => {
    setPage(parseInt(props.paginationNum));
  }, [props.paginationNum])

  return (
    <div className={!props.loading ? "pagination-filter" : "display-none"}>
      <Pagination
        count={Math.ceil(568 / parseInt(props.perPage))}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}
