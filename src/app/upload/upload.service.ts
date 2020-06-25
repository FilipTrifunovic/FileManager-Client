import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http'
import { Subject } from 'rxjs'
import { Observable } from 'rxjs'

const url = 'http://localhost:8000/upload'

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) {}

  isFileAllowed(fileName: string) {
    let isFileAllowed = false;
    const allowedFiles = ['.txt'];
    const regex = /(?:\.([^.]+))?$/;
    const extension = regex.exec(fileName);

    if (undefined !== extension && null !== extension) {
        for (const ext of allowedFiles) {
            if (ext === extension[0]) {
                isFileAllowed = true;
            }
        }
    }
    return isFileAllowed;
}
}