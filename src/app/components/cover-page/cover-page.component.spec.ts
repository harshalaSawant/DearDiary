import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject, of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CoverPageComponent } from './cover-page.component';


// const MockStudentService: StudentDetailsService = {
//   studentData: [
//     {
//       id: 101,
//       name: 'Ginny Weasley',
//       grade: 1,
//       email: 'gw@school.com',
//       performance: [
//         {
//           subject: 'Maths',
//           score: 100
//         },
//         {
//           subject: 'Science',
//           score: 80
//         },
//         {
//           subject: 'Social',
//           score: 80
//         },
//         {
//           subject: 'English',
//           score: 80
//         },
//         {
//           subject: 'French',
//           score: 90
//         }
//       ],
//       result: 'Pass'
//     },
//     {
//       id: 201,
//       name: 'Harry Potter',
//       grade: 2,
//       email: 'hp@school.com',
//       performance: [
//         {
//           subject: 'Maths',
//           score: 80
//         },
//         {
//           subject: 'Science',
//           score: 80
//         },
//         {
//           subject: 'Social',
//           score: 80
//         },
//         {
//           subject: 'English',
//           score: 80
//         },
//         {
//           subject: 'French',
//           score: 65
//         }
//       ],
//       result: 'Pass'
//     },
//     {
//       id: 301,
//       name: 'Angelina Johnson',
//       grade: 3,
//       email: 'aj@school.com',
//       performance: [
//         {
//           subject: 'Maths',
//           score: 95
//         },
//         {
//           subject: 'Science',
//           score: 80
//         },
//         {
//           subject: 'Social',
//           score: 80
//         },
//         {
//           subject: 'English',
//           score: 95
//         },
//         {
//           subject: 'French',
//           score: 85
//         }
//       ],
//       result: 'Pass'
//     }
//   ],
//   scoreChanged:  new Subject(),
//   getData: () => {return of([
//     {
//       id: 101,
//       name: 'Ginny Weasley',
//       grade: 1,
//       email: 'gw@school.com',
//       performance: [
//         {
//           subject: 'Maths',
//           score: 100
//         },
//         {
//           subject: 'Science',
//           score: 80
//         },
//         {
//           subject: 'Social',
//           score: 80
//         },
//         {
//           subject: 'English',
//           score: 80
//         },
//         {
//           subject: 'French',
//           score: 90
//         }
//       ],
//       result: 'Pass'
//     },
//     {
//       id: 201,
//       name: 'Harry Potter',
//       grade: 2,
//       email: 'hp@school.com',
//       performance: [
//         {
//           subject: 'Maths',
//           score: 80
//         },
//         {
//           subject: 'Science',
//           score: 80
//         },
//         {
//           subject: 'Social',
//           score: 80
//         },
//         {
//           subject: 'English',
//           score: 80
//         },
//         {
//           subject: 'French',
//           score: 65
//         }
//       ],
//       result: 'Pass'
//     },
//     {
//       id: 301,
//       name: 'Angelina Johnson',
//       grade: 3,
//       email: 'aj@school.com',
//       performance: [
//         {
//           subject: 'Maths',
//           score: 95
//         },
//         {
//           subject: 'Science',
//           score: 80
//         },
//         {
//           subject: 'Social',
//           score: 80
//         },
//         {
//           subject: 'English',
//           score: 95
//         },
//         {
//           subject: 'French',
//           score: 85
//         }
//       ],
//       result: 'Pass'
//     }
//   ])},
//   changeScore: () => {},
//   saveNewScores: () => {}
// }

describe('CoverPageComponent', () => {
  let component: CoverPageComponent;
  let fixture: ComponentFixture<CoverPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
