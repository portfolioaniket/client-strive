export interface Client{
	clientId : number
	contactPersonName : string
	companyName : string
	address : string
	city : string
	pincode : string
	state : string
	employeeStrength : number
	EmployeeStrength : number
	gstNo : string
	contactNo : string
	regNo : string
}
export interface APIResponse{
	message : string
	result : boolean
	data : any
}
