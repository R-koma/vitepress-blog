import { createContentLoader } from "vitepress";

export default createContentLoader("posts/*.md", {
  transform(rawData) {
    const filterData = rawData.filter(
      (page) => page.url !== "/posts/postList.html"
    );

    const sortedData = filterData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
    });

    return sortedData;
  },
});
