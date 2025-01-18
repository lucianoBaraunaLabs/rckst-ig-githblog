/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_GITHUB_ORGANIZATIONNAME: string
  readonly VITE_GITHUB_REPONAME: string
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
