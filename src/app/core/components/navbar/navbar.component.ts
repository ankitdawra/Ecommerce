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
      },
      {
        id: 2,
        name: 'Products',
        link: '/products',
        subCategories: [
          { id: 21, name: 'Sub3', link: '/sub1' },
          { id: 22, name: 'Sub4', link: '/sub2' },
        ],
      },
      { id: 3, name: 'Contact', link: '/contact' },
    ];
    this.acitveNavItem = this.initialNavItems[0];
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
}
