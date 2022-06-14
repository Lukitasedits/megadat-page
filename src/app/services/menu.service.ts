import { Imagen } from './../models/imagen';
import { Injectable } from '@angular/core';
import MenusInfo from '../../assets/jsons/menus.json'
import { Menu } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus: Menu[] = MenusInfo;
  constructor() { }
  getMenus(): Menu[]{
    return this.menus;
  }
}
