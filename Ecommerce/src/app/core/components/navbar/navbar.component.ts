import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NavItem } from '../../model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  initialNavItems: NavItem[] = [];
  acitveNavItem: NavItem | null = null;
  showMenu: boolean = false;
  @Input() navList: NavItem[] | undefined;
  @Input() isSubNav: boolean = false;

  get navItems(): NavItem[] | undefined {
    return this.isSubNav ? this.navList : this.initialNavItems;
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initialNavItems = [
      {
        id: 1,
        name: 'Home',
        link: '/',
        subCategories: [
          {
            id: 11,
            name: 'Sub1',
            link: '/sub1',
            subCategories: [
              {
                id: 111,
                name: 'Sub1-1',
                link: '/sub1-1',
                subCategories: [
                  { id: 1111, name: 'Sub1-1-1', link: '/sub1-1-1' },
                  { id: 1112, name: 'Sub1-1-2', link: '/sub1-1-2' },
                ],
              },
              { id: 112, name: 'Sub1-2', link: '/sub1-2', subCategories: [] },
            ],
          },
          {
            id: 12,
            name: 'Sub2',
            link: '/sub2',
            subCategories: [
              { id: 121, name: 'Sub2-1', link: '/sub2-1' },
              { id: 122, name: 'Sub2-2', link: '/sub2-2' },
            ],
          },
        ],
        icon: 'laptop',
      },
      {
        id: 2,
        name: 'Pages',
        link: '/search/mascara',
        subCategories: [
          { id: 21, name: 'Sub3', link: '/sub1' },
          { id: 22, name: 'Sub4', link: '/sub2' },
        ],
        icon: 'user-o',
      },
      { id: 3, name: 'Women', link: '/contact', icon: 'user-o' },
      {
        id: 4,
        name: 'Electronics',
        link: '/search/electronics',
        icon: 'laptop',
      },
      { id: 5, name: 'Blog', link: '/search/all', icon: 'pencil' },
      { id: 6, name: 'Popular', link: '/search/all', icon: 'coffee' },
      { id: 7, name: 'Contact us', link: '/search/all', icon: 'phone' },
      { id: 8, name: 'Sale', link: '/search/all', icon: 'book' },
    ];
    // this.acitveNavItem = this.initialNavItems[0].subCategories?.[0] as any;
    this.cd.markForCheck();
  }

  onHover(item?: NavItem): void {
    if (item) {
      this.acitveNavItem = item;
    } else {
      this.acitveNavItem = null;
    }
    this.cd.markForCheck();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
