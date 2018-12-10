import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import html2canvas from 'html2canvas';

@Directive({
  selector: '[snapshot]'
})
export class SnapshotDirective {

  @Input()
  imageFormat: string = 'image/png';

  @Input()
  fileName: string = 'download';

  @Input()
  eleRef: string;

  constructor(private element: ElementRef) { }

  @HostListener('click', ['$event']) onClick($event) {
    console.log($event);
    let element = document.getElementById(this.eleRef);
    if(html2canvas && element){
      html2canvas(element).then(canvas => {
        let cavImage = document.createElement('img');
        let dwnLink = document.createElement('a');
        let fileExt: string;

        let splitFileName = this.fileName.split("/");

        if(splitFileName && splitFileName.length > 0 && splitFileName[1]){
          fileExt = splitFileName[1];
        }else{
          fileExt = 'png'
        }

        cavImage.src = canvas.toDataURL();
        dwnLink.href = canvas.toDataURL(this.imageFormat);
        dwnLink.download = `${this.fileName}.${fileExt}`;
        dwnLink.click();
      });
    }else{
      console.error('html2canvas not found or you  have not attached the refference');
    }
  }

}