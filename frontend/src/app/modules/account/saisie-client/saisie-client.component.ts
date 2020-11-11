import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Client } from "../../../../models/client";
import { AccountService } from "../account.service";

@Component({
  selector: "app-saisie-client",
  templateUrl: "./saisie-client.component.html",
  styleUrls: ["./saisie-client.component.css"]
})

// Tuto suivi : https://medium.com/@babatundelamidi/build-an-angular-contact-form-and-post-data-to-email-7b7327e56ad3
export class SaisieClientComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private accountService: AccountService
  ) {}

  client = new Client();
  ClientForm: FormGroup;
  submitted = false;

  // Patterns
  adressePattern = "[A-Za-z0-9 ]{1,100}$";
  villePattern = "[A-Za-z]{1,50}$";
  telPattern = "[0-9]{9}$";
  emailPattern = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$";
  loginPattern = "[A-Za-z0-9]{4,15}$";

  ngOnInit() {
    this.ClientForm = this.builder.group({
      civilite: ["Femme", Validators.required],
      prenom: ["", Validators.required],
      nom: ["", Validators.required],
      adresse: [
        "",
        [Validators.required, Validators.pattern(this.adressePattern)]
      ],
      cp: ["", Validators.required],
      ville: ["", [Validators.required, Validators.pattern(this.villePattern)]],
      pays: ["", Validators.required],
      tel: ["", [Validators.required, Validators.pattern(this.telPattern)]],
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      login: ["", [Validators.required, Validators.pattern(this.loginPattern)]],
      password: ["", Validators.required]
    });
  }

  submitForm() {
    this.submitted = true;
    if (!this.ClientForm.invalid) {
      this.createClient();
    }
    //this.submitted = false;
  }

  createClient() {
    this.client.createClient(
      this.civilite.value,
      this.prenom.value,
      this.nom.value,
      this.adresse.value,
      this.cp.value,
      this.ville.value,
      this.pays.value,
      this.tel.value,
      this.email.value,
      this.login.value,
      this.password.value
    );
    this.accountService.register(this.client).subscribe(response => {
      if (response.body.success == true) {
        console.log("register");
      } else {
        console.log("error");
      }
    });
  }

  get civilite(): AbstractControl {
    return this.ClientForm.get("civilite");
  }
  get prenom(): AbstractControl {
    return this.ClientForm.get("prenom");
  }
  get nom(): AbstractControl {
    return this.ClientForm.get("nom");
  }
  get adresse(): AbstractControl {
    return this.ClientForm.get("adresse");
  }
  get cp(): AbstractControl {
    return this.ClientForm.get("cp");
  }
  get ville(): AbstractControl {
    return this.ClientForm.get("ville");
  }
  get pays(): AbstractControl {
    return this.ClientForm.get("pays");
  }
  get tel(): AbstractControl {
    return this.ClientForm.get("tel");
  }
  get email(): AbstractControl {
    return this.ClientForm.get("email");
  }
  get login(): AbstractControl {
    return this.ClientForm.get("login");
  }
  get password(): AbstractControl {
    return this.ClientForm.get("password");
  }
}
