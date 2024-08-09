import { Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { LoginComponent } from './screen/login/login.component';
import { RegisterComponent } from './screen/register/register.component';
import { ArchivedComponent } from './screen/archived/archived.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Angular Quick note',
    component: HomeComponent
  },
  {
    path: 'login',
    title: 'Đăng nhập',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    title: 'Đăng ký',
    component: RegisterComponent
  },
  {
    path: 'archived',
    title: 'Lưu trữ',
    component: ArchivedComponent
  },
  // {
  //   path: '',
  //   title: 'Angular Quick note',
  //   component: HomeComponent
  // },
];
