import { NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
 


}
