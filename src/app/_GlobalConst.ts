import { environment } from "../environmets/environment"

const baseUrl=environment.API_URL
export const HEADER ={
    TITLE: 'PROJECT MANAGEMENT SYSTEM',
    NAV_LINKS:{
        HOME:'Home',
        EMPLOYEE:'Employee',
        CLIENT:'Client',
        SAMPLE:'Sample'
    }
}

export const API_ENDPOINTS={
    GET_ALL_EMPLOYEE: baseUrl+'GetAllEmployee',
    DELETE_EMP_BY_ID: baseUrl+'DeleteEmployeeByEmpId',
    CREATE_NEW_EMPLOYEE: baseUrl+'CreateNewEmployee',
    GET_ALL_ROLES:baseUrl+'GetAllRoles',
    GET_ALL_DESIGNATION: baseUrl+'GetAllDesignation',
    GET_EMPLOYEE_BY_ID: baseUrl+'GetEmployeeByEmployeeId',
    UPDATE_EMPLOYEE: baseUrl+'UpdateEmployee'
}