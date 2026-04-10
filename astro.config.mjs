import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repo] = repository.split('/');
const isUserSite = owner && repo && repo === `${owner}.github.io`;
const defaultBase = repo ? (isUserSite ? '/' : `/${repo}`) : '/My_Portfolio';

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: defaultBase,
});
