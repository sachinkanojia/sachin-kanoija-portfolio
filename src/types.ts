export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export interface SkillTag {
  label: string;
  variant: 'outline' | 'amber';
  hasIcon?: boolean;
}

