export interface ILink {
  id?: number;
  href: string;
  name?: string;
}

export const links = [
  { id: 1, href: "news", name: "News" },
  { id: 2, href: "bands", name: "Bands" },
  { id: 3, href: "albums", name: "Albums" },
  { id: 4, href: "musicians", name: "Musicians" },
];
