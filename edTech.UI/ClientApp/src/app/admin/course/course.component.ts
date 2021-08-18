import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {
  courseForm: FormGroup;
  categories: Category[];
  config = {
    placeholder: '',
    tabsize: 2,
    height: 200,
    toolbar: [
      ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['insert', ['table', 'link']],
      ['misc', ['codeview']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }
  fileToUpload: any;
  constructor(private fb: FormBuilder, private courseService: CourseService, private router: Router, private fileService: FileService, private categoryService: CategoryService) {
    this.courseForm = this.fb.group({
      id: [0],
      name: [null, Validators.required],
      summary: [null, [Validators.required]],
      description: [null, Validators.required],
      difficultyType: ['', Validators.required],
      unitPrice: [null, Validators.required],
      categoryId: ['', Validators.required],
      url: [null, Validators.required],
      imageUrl: ['']
    });
  }

  ngOnInit() {
    this.categoryService.GetCategories().subscribe(res => {
      if (res.status == 200 && res.body != null) {
        this.categories = res.body;
      }
    });
  }
  changeFile(files: any) {
    if (files.length === 0) {
      return;
    }
    this.fileToUpload = <File>files[0];
    // console.log(this.fileToUpload)
  }
  saveData() {
    if (this.courseForm.valid) {
      const formData = new FormData();
      formData.append('file', this.fileToUpload, this.fileToUpload.name);
      this.fileService.UploadFile(formData).subscribe(res => {
        if (res.status == 200) {
          let filePath = res.body.dbPath;
          console.log(res.body);
          this.courseForm.patchValue({
            imageUrl: filePath,
          });
          console.log(this.courseForm.value);
          if (filePath != '') {
            this.courseService.AddCourse(this.courseForm.value).subscribe(res => {
              if (res.status == 201) {
                this.router.navigate(['/admin/courses']);
              }
            });
          }
        }
      });
    }
  }
}
