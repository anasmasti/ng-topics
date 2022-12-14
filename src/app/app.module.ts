import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FormComponent } from './components/shared/form/form.component';
import { InputComponent } from './components/shared/input/input.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/shared/button/button.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './store/reducer';
import { MoviesComponent } from './components/movies/movies.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormComponent,
    InputComponent,
    LayoutComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderComponent,
    MoviesComponent,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ movie: movieReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
