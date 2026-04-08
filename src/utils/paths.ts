const ABSOLUTE_PROTOCOL = /^(?:[a-z]+:)?\/\//i;

export const withBase = (path = "") => {
  if (!path || path === "/") {
    return import.meta.env.BASE_URL;
  }

  if (ABSOLUTE_PROTOCOL.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  const normalizedBase = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}`;
};

export const projectPath = (slug: string) => withBase(`games/${slug}/`);
export const musicPath = () => withBase("music/");
