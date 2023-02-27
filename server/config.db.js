import {createPool} from 'mysql2/promise';
import { DBPORT } from './config.js';

export const poolProducts=createPool({
    host:"localhost",
    user:"root",
    password:"Andymacnab1",
    database:"managedb",
    port:DBPORT
});

export const poolSucursal=createPool({
    host:"localhost",
    user:"root",
    password:"Andymacnab1",
    database:"managedb",
    port: DBPORT
})