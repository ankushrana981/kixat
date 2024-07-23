import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SVG_ICONS } from 'src/app/shared/svg-icons';
import { MyAccountService } from '../my-account.service';

@Component({
  selector: 'app-my-addressses',
  templateUrl: './my-addressses.component.html',
  styleUrls: ['./my-addressses.component.scss'],
})
export class MyAddresssesComponent {
  icons = SVG_ICONS;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private myAccountService: MyAccountService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      governorate: [],
      city: [],
      address: [],
      title: [],
    });
  }
  ngOnInit(): void {
    this.getStateProvinces();
  }
  getStateProvinces() {
    this.myAccountService.getStateProvinces().subscribe((data) => {
      console.log(data, 'state province');
    });
  }
}
