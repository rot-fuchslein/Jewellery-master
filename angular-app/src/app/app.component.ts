import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, NgFor, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
