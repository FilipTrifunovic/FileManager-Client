import { Component, ViewChild } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UploadService } from './upload.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  public files: NgxFileDropEntry[] = [];
  gradedFiles = [];



  constructor(private http: HttpClient, private uploadService: UploadService, private _snackBar: MatSnackBar) { }


  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;

    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (!this.uploadService.isFileAllowed(file.name)) {
            this.files.pop();
            this._snackBar.open('File type not supported please use .txt file format', null, {
              duration: 2000,
              horizontalPosition: "center",
              verticalPosition: "bottom"
            });
            return;
          }

          // Here you can access the real file
          const formData: FormData = new FormData();
          var fileDto = new FileForCreationDto();
          formData.append('file', file, file.name);
          fileDto.File = formData;
          fileDto.Description = file.name;



          this.http.post('http://localhost:5000/api/files', formData)
            .subscribe(data => {
              this.gradedFiles.push({ fileName: file.name, grade: data });
            });


        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }


  onSubmitText(f) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    console.log(f.value.textInput);
    this.http.post('http://localhost:5000/api/files/text', JSON.stringify(f.value.textInput), { headers })
      .subscribe(data => {
        this._snackBar.open(`The input text has a score of ${data}`, "Ok", {
          duration: 4000,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      });
  }

}

class FileForCreationDto {


  File: FormData;

  Description: string;

  DateTime: Date;

  PublicId: string;

}