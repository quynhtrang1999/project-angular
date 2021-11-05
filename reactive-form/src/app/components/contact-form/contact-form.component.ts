import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  rfContact!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.minLength(3)]],
      contactEmail: this.fb.array([
        this.fb.control('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
      ]),
      contactPhone: this.fb.array([
        this.fb.control('', [Validators.required, Validators.minLength(3), Validators.pattern("^0[35789]{1}[0-9]{8}$")])
      ]),
      // contactPhone: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^0[35789]{1}[0-9]{8}$")]],
      contactMessage: ['', [Validators.required, Validators.minLength(3)]],
    });
  }


  get contactEmail(): FormArray {
    return this.rfContact.get("contactEmail") as FormArray;
  }

  get contactPhone(): FormArray {
    return this.rfContact.get("contactPhone") as FormArray;
  }

  addEmail() {
    return this.contactEmail.push(this.fb.control('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]));
  }

  addPhone() {
    return this.contactPhone.push(this.fb.control('', [Validators.required, Validators.minLength(3), Validators.pattern("^0[35789]{1}[0-9]{8}$")]));
  }

  onSubmit() {
    console.log(this.rfContact);
  }


}
