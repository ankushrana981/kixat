import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';
import { ContactusService } from './contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  isSubmited: boolean = false;
  form!:FormGroup;
  icons = SVG_ICONS;
  isLoading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private service:UserService,
    private contactService: ContactusService
  ) { 
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      title: [''],
      comment: [''],
    })
  }

  ngOnInit() {
    this.getContact();
  }

  onSubmit() {
    this.isLoading = true;
    this.contactService.addContact(this.form.value).subscribe(data=> {
      this.isLoading = false;
      this.isSubmited = true;
    }, error => {
      this.isLoading = false;
    })
  }

  getContact() {
    this.contactService.getContact().subscribe(data=> {
      console.log('getContact', data);
    }, error=> {
      console.log('getContact error', error)
    })
  }
}
