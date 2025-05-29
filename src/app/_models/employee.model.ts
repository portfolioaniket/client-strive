export interface CreateEmployee{
	roleId : number
	userName : string
	empCode : string
	empId ?: number
	empName : string
	empEmailId : string
	empDesignationId : number
	empContactNo : string
	empAltContactNo : string
	empPersonalEmailId : string
	empExpTotalYear : number
	empExpTotalMonth : number
	empCity : string
	empState : string
	empPinCode : string
	empAddress : string
	empPerCity : string
	empPerState : string
	empPerPinCode : string
	empPerAddress : string
	password : string
	ErpEmployeeSkills ?: Array<EmpExperience>
	ErmEmpExperiences ?: Array<EmpExperience>
}

export interface EmpExperience{
	empExpId : number
	empId : number
	companyName : string
	startDate : string
	endDate : string
	designation : string
	projectsWorkedOn : string
}

export interface EmpSkils{
	empSkillId : number
	empId : number
	skill : string
	totalYearExp : number
	lastVersionUsed : string
}

export interface APIResponse{
	message : string
	result : boolean
	data : any
}
export interface Employee {
	empName : string
	empId : number
	empCode : string
	empEmailId : string
	empDesignation : string
	role : string
}
export interface Roles{
	roleId : number
	role : string
}
export interface Designation{
	designationId : number
	designation : string
}

