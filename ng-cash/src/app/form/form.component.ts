import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup
  @Input() label:string = ''
  @Input() labelFor:string = ''
  @Input() inputType:string = ''

  constructor(private formBuilder:FormBuilder ) {
    this.form = this.formBuilder.group({
      user: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern('/0|1|2|3|4|5|6|7|8|9/'), Validators.pattern('/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/'),Validators.pattern('/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/') ]],
      passConfirm: [null, [Validators.required, Validators.minLength(8)], ],
      cashInFor: [null, [Validators.required]],
      valor: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

}
