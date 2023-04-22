export const selectCount = (table: string): string => {
  return `select count(*) as c from ${table}`;
};

export const selectRowById = (id: number, table: string): string => {
  return `select * from ${table} where id = ${id}`;
};

export const selectCategoryByTitle = (title: string): string => {
  throw new Error(`todo`);
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  throw new Error(`todo`);
};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  return `select count(distinct "${columnName}") as c from ${tableName}`;
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `select * from ${appId} where author = ${author}`;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  throw new Error(`todo`);
};

