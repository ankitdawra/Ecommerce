export interface NavItem {
  id: number;
  name: string;
  link: string;
  subCategories?: NavItem[];
  icon?: string;
}
