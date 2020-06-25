import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordsDto } from 'src/app/words/words.model';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { WordsModalComponent } from './words-modal/words-modal.component';

@Component({
    selector: 'word-table',
    templateUrl: './words-table.component.html',
    styleUrls: ['./words-table.component.scss'],

})
export class WordsTableComponent implements OnInit {

    displayedColumns = ['Word', 'Value','Action'];
    dataSource:WordsDto[];
    @ViewChild('table') table: MatTable<WordsDto>;
    selected = 'all';
    
    constructor(private http:HttpClient,public dialog: MatDialog) {}

    ngOnInit() {
      this.getAllWords();
    }


    getAllWords(){
      this.http.get(`http://localhost:5000/api/Words/${this.selected}`)
      .subscribe((data:WordsDto[])=>{
          console.log(data);
          this.dataSource=data;
      });
    }

    openDialog(action,obj:WordsDto) {
        // obj.action = action;
        const dialogRef = this.dialog.open(WordsModalComponent, {
          width: '350px',
          data:{object:obj,action},
          disableClose:true
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if(result.event == 'Add'){
            this.addRowData(result.data);
          }else if(result.event == 'Update'){
            this.updateRowData(result.data);
          }else if(result.event == 'Delete'){
            this.deleteRowData(result.data);
         
          }
        });
      }

      addRowData(obj:WordsDto){
        this.http.post('http://localhost:5000/api/Words', obj).subscribe((res:WordsDto) => {
            this.dataSource.push({
                id:res.id,
                text:res.text,
                value:res.value
            });
             this.table.renderRows();
        });

        
      }
      updateRowData(obj:WordsDto){
        this.http.put(`http://localhost:5000/api/Words`,obj).subscribe(data=>{
            if(data){
                var index = this.dataSource.findIndex((value)=>value.id === obj.id);
                this.dataSource[index].value = obj.value;
                this.dataSource[index].text = obj.text;
            }
        })
      }
      deleteRowData(obj:any){
        this.http.delete(`http://localhost:5000/api/Words/${obj.id}`).subscribe(data=>{
            if(data){
                this.dataSource = this.dataSource.filter((value,key)=>{
                  return value.id != obj.id;
                });
            }
        })
      }

      someMethod(){
        console.log(this.selected);
        this.getAllWords();
      }
}
