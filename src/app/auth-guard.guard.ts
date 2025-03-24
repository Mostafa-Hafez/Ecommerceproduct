import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('access_token')){
    return true;
  }
  alert("You don't have permission, please login first")
  return false;
};
