import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { User } from '../interfaces/user.interface';
import { DataTransferService } from 'src/app/shared/services/dataTransfer.service';

@Component({
  selector: 'crud-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public allCountries?: string[];
  public dataOrigin = '';

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.minLength(6)]],
    password2: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsServ.emailPattern)]],
    offerts: [''],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
  },
  {
    validators: [
      this.validatorsServ.isFieldOneEqualFieldTwo( 'password', 'password2' ),
    ]
  });

  constructor(
    private fb: FormBuilder,
    private countriesServ:CountriesService,
    private validatorsServ: ValidatorsService,
    private dataServ: DataTransferService
  ) {}

  ngOnInit(): void {
    this.getCountries();
    this.editUser();
  }

  getCountries():void {
    this.countriesServ.getCountries().subscribe( countries => {
      this.allCountries = countries;
    });
  }

  isValidField( field: string ): boolean | null{
    return this.validatorsServ.isValidField(field, this.myForm);
  }

  onSubmit(): void{

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    //Construimos en user con los valores del formulario
    const user: User = {
      name: this.myForm.value['name'],
      password: this.myForm.value['password'],
      email: this.myForm.value['email'],
      suscription: this.myForm.value['offerts'],
      country: this.myForm.value['country'],
      city: this.myForm.value['city'],
    };

    this.dataServ.setDataOrigin("registro");
    this.dataServ.sendData(user);

    //Limpiamos el formulario
    this.myForm.reset();

  }

  editUser(): void{

    this.dataServ.getEditedUser().subscribe(user => {
      this.myForm.patchValue({
        name: user.name,
        password: user.password,
        password2: user.password,
        email: user.email,
        offerts: user.suscription,
        country: user.country,
        city: user.city,
      });
    });

    this.dataServ.dataOrigin.subscribe( origin => {
      this.dataOrigin = origin;
      console.log(origin);
    });

  }

  onEdit(){

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const user: User = {
      name: this.myForm.value['name'],
      password: this.myForm.value['password'],
      email: this.myForm.value['email'],
      suscription: this.myForm.value['offerts'],
      country: this.myForm.value['country'],
      city: this.myForm.value['city'],
    };

    this.dataServ.sendEditUser(user);

    this.dataOrigin = '';
    this.myForm.reset();

  }

  cancelAction(){
    this.dataOrigin = '';
    this.myForm.reset();
  }

}
