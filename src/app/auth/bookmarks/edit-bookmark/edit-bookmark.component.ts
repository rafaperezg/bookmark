import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  isBeingSave = false;
  title = new FormControl('', [Validators.required]);
  url = new FormControl('', [Validators.required, Validators.pattern(/$http|https:\/\/.*/)]);

  constructor(public dialogRef: MatDialogRef<EditBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public bookmark: any) {

  }

  ngOnInit() {
  }

  getErrorMessageForTitle() {
    return this.title.hasError('required') ? 'Por favor ingresa un valor' : '';
  }

  getErrorMessageForURL() {
    return this.url.hasError('required') ? 'Por favor ingresa una URL válida' : '';
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.title.value, this.url.value);
    this.isBeingSave = true;

    // @TOOD: Call to bookmarks' service
  }

}
