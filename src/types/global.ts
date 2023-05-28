export interface ReactFN {
  children: React.ReactNode;
}

export interface Repository {
  __typename?: "Repository" | undefined;
  id: string;
  name: string;
  pushedAt?: any;
  url: any;
  description?: string | null | undefined;
  primaryLanguage?:
    | {
        __typename?: "Language" | undefined;
        name: string;
      }
    | null
    | undefined;
}
