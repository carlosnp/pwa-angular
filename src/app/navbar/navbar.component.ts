import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('drawer') sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}
  reason = '';
  showMenu = false;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  open(reason: string): void {
    this.showMenu = true;
    this.reason = reason;
    this.sidenav.open();
  }

  close(reason: string): void {
    this.showMenu = false;
    this.reason = reason;
    this.sidenav.close();
  }

}
