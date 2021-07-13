import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { AssignCustomersComponent } from './components/assign-customers/assign-customers.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SubmittedComponent } from './components/submitted/submitted.component';
import { SupportingDocumentsComponent } from './components/supporting-documents/supporting-documents.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'create-user', component: CreateUserComponent},
  { path: 'users', component: UsersComponent},
  { path: 'personal-details', component: PersonalDetailsComponent},
  { path: 'address-details', component: AddressDetailsComponent},
  { path: 'assign-role', component: AssignRoleComponent },
  { path: 'assign-customers', component: AssignCustomersComponent },
  { path: 'supporting-documents', component: SupportingDocumentsComponent },
  { path: 'submitted', component: SubmittedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
