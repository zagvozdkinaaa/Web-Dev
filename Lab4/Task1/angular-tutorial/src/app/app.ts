import { Component } from '@angular/core';
import {Task1} from './lessons/task1/task1';
import {Task2} from './lessons/task2/task2';
import {Task3} from './lessons/task3/task3';
import {Task4} from './lessons/task4/task4';
import {Task5} from './lessons/task5/task5';
import {Task6} from './lessons/task6/task6';
import {Task7} from './lessons/task7/task7';
import {Task8} from './lessons/task8/task8';
import {Task9} from './lessons/task9/task9';
import {Task10} from './lessons/task10/task10';
import {Task11} from './lessons/task11/task11';
import {Task14} from './lessons/task14/task14';
import {Task15} from './lessons/task15/task15';
import {Task16} from './lessons/task16/task16';
import {Task17} from './lessons/task17/task17';
import {Task18} from './lessons/task18/task18';
import {Task20} from './lessons/task20/task20';
import {Task21} from './lessons/task21/task21';
import {Task22} from './lessons/task22/task22';
import {Task23} from './lessons/task23/task23';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Task1, Task2, Task3, Task4, Task5, Task6, Task7, Task8, Task9, Task10, Task11,
    Task14, Task15, Task16, Task17, Task18, Task20, Task21, Task22, Task23],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}


