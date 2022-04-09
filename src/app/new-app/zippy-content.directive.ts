import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}