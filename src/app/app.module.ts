import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatDialogModule, MatPaginatorIntl } from '@angular/material';



import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { routes } from './router';
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { AuthenticationService } from './common/services/authentication.service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { BookmarksService } from './auth/bookmarks/services/bookmarks.service';

import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { BookmarksComponent } from './auth/bookmarks/bookmarks.component';
import { WindowReferenceService } from './common/services/window-reference.service';
import { EditBookmarkComponent } from './auth/bookmarks/edit-bookmark/edit-bookmark.component';
import { ModalErrorLoginComponent } from './public/login/modal-error-login/modal-error-login.component';
import { MatPaginatorIntlSpanishprovider } from './common/paginator/mat-paginator-intl-spanish-provider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    BookmarksComponent,
    EditBookmarkComponent,
    ModalErrorLoginComponent
  ],
  entryComponents: [
    EditBookmarkComponent,
    ModalErrorLoginComponent
  ],
  imports: [
    // core
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    // Custom
    Ng2Webstorage,
  ],
  providers: [
    PublicGuard,
    AuthGuard,
    AuthenticationService,
    BookmarksService,
    WindowReferenceService,
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    },
    {
      provide: MatPaginatorIntl, useClass: MatPaginatorIntlSpanishprovider
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

