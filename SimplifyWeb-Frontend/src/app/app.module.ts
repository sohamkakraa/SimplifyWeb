import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';
import { AssignCustomersComponent } from './components/assign-customers/assign-customers.component';
import { SupportingDocumentsComponent } from './components/supporting-documents/supporting-documents.component';
import { SubmittedComponent } from './components/submitted/submitted.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { ReviewPdComponent } from './components/review-pd/review-pd.component';
import { ReviewAdComponent } from './components/review-ad/review-ad.component';
import { ReviewArComponent } from './components/review-ar/review-ar.component';
import { ReviewAcComponent } from './components/review-ac/review-ac.component';
import { ReviewSdComponent } from './components/review-sd/review-sd.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    PersonalDetailsComponent,
    SidebarComponent,
    AddressDetailsComponent,
    AssignRoleComponent,
    AssignCustomersComponent,
    SupportingDocumentsComponent,
    SubmittedComponent,
    UserTypeComponent,
    ReviewPdComponent,
    ReviewAdComponent,
    ReviewArComponent,
    ReviewAcComponent,
    ReviewSdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonToggleModule,
    FormsModule,
    MatSelectModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
