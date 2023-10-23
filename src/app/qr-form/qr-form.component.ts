import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QrLinkService } from '../services/qr-link.service';


// Validador personalizado para verificar que es una url
function isUrl(control: AbstractControl): { [key: string]: any } | null {
  const formatoUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const tieneFormatoUrl = formatoUrl.test(control.value);
 
 return tieneFormatoUrl ? { formatoUrl: true } : null;
}


@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent {

  public url: string = 'google.com';
  public errorCorLevel: any = 'M';
  public testUrl : string = 'https://www.linkedin.com/in/santiagosalamancadev';

  public myForm : FormGroup = this.fb.group({ 
    url: [this.testUrl, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]]
  });


  constructor( 
    private fb : FormBuilder,
    private qrLinkService : QrLinkService,
  ) { }

  enviarFormulario() : void {
    this.myForm.markAllAsTouched;
    this.url = this.myForm.controls['url'].value;
    
    this.qrLinkService.setUrl(this.myForm.controls['url'].value);

  }


}
