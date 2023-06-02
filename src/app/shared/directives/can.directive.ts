import { Directive, Input, ElementRef } from '@angular/core';
import { AuthService, AppService } from '../services';

@Directive({
  selector: '[ng-can]',
})
export class CanDirective {
  @Input() permission!: string;
  allPermissions!: string[];
  constructor(
    private elementRef: ElementRef,
    private authService: AuthService,
    private appServie: AppService
  ) {
    this.elementRef.nativeElement.style.display = 'none';
      this.appServie.permissions$.subscribe((permissions: string []) => {
        if (permissions && permissions.length) {
          this.allPermissions = permissions
          if (this.allPermissions.length) {
            this.updateView();
          }
        }
      })
    // }
  }
  async ngOnInit() {
    if (!this.allPermissions) {
      this.allPermissions = this.authService.getUserRoles()
    }
    this.updateView();
  }
  updateView() {
    if (this.allPermissions && this.allPermissions.includes(this.permission)) {
      this.elementRef.nativeElement.style.display = 'initial';
    } else {
      this.elementRef.nativeElement.style.display = 'none';
      this.elementRef.nativeElement.remove();
    }
  }
}
