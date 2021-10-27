import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/platform-detector/platform-detector.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[apImediateClick]'
})
export class ImediateClickDirective implements OnInit {

  constructor(private element: ElementRef,
              private platformDetector: PlatformDetectorService) {
  }

  ngOnInit(): void {
    if (this.platformDetector.isPlatformBrowser()) {
      this.element.nativeElement.click();
    }
  }

}
