import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {fromEvent, map, merge, Subject, takeUntil} from "rxjs";

@Directive({
  selector: '[tilt]',
})
export class TiltDirective {
  @Input('tilt') rotationDegree = 30;
  /*
    @HostListener('mouseenter', ['$event.pageX', '$event.target'])
    onMouseEnter(pageX: number, target: HTMLElement) {
      const pos = determineDirection(pageX, target);

      this.rotation =
        pos === 0
          ? `rotate(${this.rotationDegree}deg)`
          : `rotate(-${this.rotationDegree}deg)`;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
      this.rotation = 'rotate(0deg)';
    }

    @HostBinding('style.transform')
    rotation = 'rotate(0deg)';
  */
  private destroy$ = new Subject<void>;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    // this is where we are going to work now
    const rotate$ = fromEvent<MouseEvent>(this.elementRef.nativeElement, 'mouseenter')
      .pipe(
        map(({ pageX, target }) => {
          const pos = determineDirection(pageX, target as HTMLElement);

          return pos === 0
            ? `rotate(${this.rotationDegree}deg)`
            : `rotate(-${this.rotationDegree}deg)`;
        })
      );
    const reset$ =  fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(
      map(() => `rotate(0deg)`));

    // create a sideEffect function for setting the rotation value to the element
    const effect = (rotation: string) => this.elementRef.nativeElement.style.transform = rotation;

    merge(
      rotate$,
      reset$
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(effect);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}

/**
 * returns 0 if entered from left, 1 if entered from right
 */
function determineDirection(pos: number, element: HTMLElement): 0 | 1 {
  const width = element.clientWidth;
  const middle = element.getBoundingClientRect().left + width / 2;
  return pos > middle ? 1 : 0;
}
