import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any[] = [];
  selectedAnswers: { [key: number]: string } = {};
  score: number | null = null;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

  selectOption(questionIndex: number, selectedOption: string): void {
    this.selectedAnswers[questionIndex] = selectedOption;
  }

  isCorrectAnswer(questionIndex: number): boolean {
    const question = this.questions[questionIndex];
    return this.selectedAnswers[questionIndex] === question.correctAnswer;
  }

  showScore(): void {
    this.score = Object.keys(this.selectedAnswers).reduce((score, key) => {
      const questionIndex = parseInt(key, 10);
      if (this.isCorrectAnswer(questionIndex)) {
        score++;
      }
      return score;
    }, 0);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { QuestionService } from '../question-service.service';

// @Component({
//   selector: 'app-question',
//   templateUrl: './question.component.html',
//   styleUrls: ['./question.component.css']
// })
// export class QuestionComponent implements OnInit {
//   questions: any[] = [];
  
//   constructor(private questionService: QuestionService) {}

//   ngOnInit(): void {
//     this.questions = this.questionService.getQuestions();
//   }
// }
