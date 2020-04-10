import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  RequiredValidator,
  Validators,
} from "@angular/forms";

@Component({
  templateUrl: "./right.component.html",
  styleUrls: ["./right.component.less"],
})
export class RightComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: this.fb.control(null, [Validators.required]),
    });
  }

  validate() {}

  get titleCtl() {
    return this.form.get("title");
  }
}
