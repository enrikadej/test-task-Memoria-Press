const URL = 'https://test-task-j.herokuapp.com/data';

export const getStudents = async (page: number, size: number) => {
  const response = await fetch(
    `${URL}?page=${page}&size=${size}`,
  );

  // eslint-disable-next-line no-console
  console.log(response);

  return response.json();
};

export const getSortStudents = async (
  page: number,
  size: number,
  category: string,
  sortDir: number,
) => {
  const response = await fetch(
    `${URL}?page=${page}&size=${size}&sortBy=${category}&sortDir=${sortDir}`,
  );

  return response.json();
};

export const getSearchStudents = async (
  page: number,
  size: number,
  search: string,
) => {
  const response = await fetch(
    `${URL}?page=${page}&size=${size}&search=${search}`,
  );

  return response.json();
};
