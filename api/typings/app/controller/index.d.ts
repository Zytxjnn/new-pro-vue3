// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApi from '../../../app/controller/api';

declare module 'egg' {
  interface IController {
    api: ExportApi;
  }
}