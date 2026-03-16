import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly languages = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];

  selectedLanguage = 'ru';

  constructor(private readonly translateService: TranslateService) {
    this.translateService.addLangs(this.languages.map((language) => language.code));
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  changeLanguage(language: string): void {
    this.selectedLanguage = language;
    this.translateService.use(language);
  }
}
