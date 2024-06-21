import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: { question: string, options: string[], correctAnswer: string }[] = [];
  selectedAnswers: { [key: number]: string } = {};
  score: number | null = null;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    // Obtiene las preguntas del servicio
    this.questions = this.questionService.getQuestions();
  }

  selectOption(questionIndex: number, selectedOption: string): void {
    // Guarda la opción seleccionada para la pregunta especificada
    this.selectedAnswers[questionIndex] = selectedOption;
  }

  isCorrectAnswer(questionIndex: number): boolean {
    // Verifica si la respuesta seleccionada es correcta
    const question = this.questions[questionIndex];
    return this.selectedAnswers[questionIndex] === question.correctAnswer;
  }

  showScore(): void {
    // Calcula la puntuación basándose en las respuestas correctas
    this.score = Object.keys(this.selectedAnswers).reduce((score, key) => {
      const questionIndex = parseInt(key, 10);
      if (this.isCorrectAnswer(questionIndex)) {
        score++;
      }
      return score;
    }, 0);
  }
}
