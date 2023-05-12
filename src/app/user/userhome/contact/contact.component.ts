import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() prod:string | undefined;
  contactForm:any;

       constructor(private fb:FormBuilder,private cs:ContactService){
       this.contactForm = this.fb.group({
          name:['',[Validators.required,Validators.minLength(3)]],
          message:['',[Validators.required,Validators.minLength(10)]],
          email:['',[Validators.required, Validators.pattern(
            "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],

          
        });
       }
       saveContact(product:any){
        
        var temp:any={
          id: Math.round(Math.random()*10000),
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message:this.contactForm.value.message,
          product:product

        }
        this.cs.postContact(temp).subscribe(
         { 
          next: data=>{
            alert('Thanks for contacting us')
            location.reload();
          },
          error:(error)=>alert('Not saved ---some Error')
        }

        )

      }
}
