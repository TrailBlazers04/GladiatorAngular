import { Injectable } from '@angular/core';
import { StudentModel } from '../student.model';
import { Routes, RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  StudentList : StudentModel[] = [];
  constructor() { }
  saveAlbum(album : StudentModel)
  {
    //add album to album list array
    this.StudentList.push(album);
  } 
  getList() : StudentModel[]
  {
    return this.StudentList;
  }
  deleteAlbum(index:number)
  {
    //delete a record from specified index;
    return this.StudentList.splice(index,1);
  }
}
