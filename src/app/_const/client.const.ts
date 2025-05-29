import { environment } from '../../environmets/environment';

const baseUrl = environment.API_URL;
export const CLIENT = {
  API_ENDPOINTS: {
    GET_ALL_CLIENTS: baseUrl + 'GetAllClients',
    ADD_UPDATE_CLIENT:baseUrl+'AddUpdateClient',
    GET_CLIENT_BY_CLIENT_ID:baseUrl+'GetClientByClientId',
    DELETE_CLIENT:baseUrl+'DeleteClientByClientId',
  },
  TABLE_INFO:{
    HEADER:"Client List",
    COLUMNS:{
      SR_NO:"Sr No",
      PERSON_NAME:"Person Name",
      COMPANY_NAME:"Company Name",
      CITY:"City",
      EMP_STN:"Employee Strength",
      CONTACT:"Contact No",
      ACTION:"Action"
    },
    BUTTONS:{
      ADD:"ADD CLIENT",
      EDIT:"Edit",
      DELETE:"Delete",
      CANCEL:"Cancel",
      SUBMIT:"Submit"
    }
  }
};
export const ADD_CLIENT={
  HEADER:"Add a New Client",
  LABELS:{
    PERSON_NAME:"Person Name",
    COMPANY_NAME:"Company Name",
    CITY:"City",
    STATE:"State",
    PIN_CODE:"Pin Code",
    ADDRESS:"Address",
    CONTACT_NO:"Contact No",
    EMPLOYEE_STRENGTH:"Employee Strength",
    GST_NO:"GST No",
    REG_NO:"Registration Number"
  },
   BUTTONS:{
      CANCEL:"Cancel",
      SUBMIT:"Submit"
    }
}