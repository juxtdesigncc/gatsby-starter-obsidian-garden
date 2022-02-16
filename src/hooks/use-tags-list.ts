import { useStaticQuery, graphql } from 'gatsby';

const useTagsList = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMdx {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMdx.group.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });
};

export default useTagsList;
