import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { AssignCustomersComponent } from './components/assign-customers/assign-customers.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ReviewAcComponent } from './components/review-ac/review-ac.component';
import { ReviewAdComponent } from './components/review-ad/review-ad.component';
import { ReviewArComponent } from './components/review-ar/review-ar.component';
import { ReviewPdComponent } from './components/review-pd/review-pd.component';
import { ReviewSdComponent } from './components/review-sd/review-sd.component';
import { SubmittedComponent } from './components/submitted/submitted.component';
import { SupportingDocumentsComponent } from './components/supporting-documents/supporting-documents.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user-type', component: UserTypeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'personal-details', component: PersonalDetailsComponent},
  { path: 'address-details', component: AddressDetailsComponent},
  { path: 'assign-role', component: AssignRoleComponent },
  { path: 'assign-customers', component: AssignCustomersComponent },
  { path: 'supporting-documents', component: SupportingDocumentsComponent },
  { path: 'submitted', component: SubmittedComponent },
  { path: 'review-pd', component: ReviewPdComponent},
  { path: 'review-ad', component: ReviewAdComponent},
  { path: 'review-ar', component: ReviewArComponent},
  { path: 'review-ac', component: ReviewAcComponent},
  { path: 'review-sd', component: ReviewSdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
