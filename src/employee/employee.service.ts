import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertEmployeeDTO } from './dto/upsert-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {}
  async create(createEmployeeDto: UpsertEmployeeDTO) {
    const employee = await this.employeeRepository.create(createEmployeeDto);
    await this.employeeRepository.save(employee);
    return {message: "Employee criado!"}
  }

  findAll() {
    const employees = this.employeeRepository.find();
    if(!employees){
      throw new NotFoundException('Não há funcionários cadastrados.');
    }
    return employees;
  }

  findOne(id: number) {
    const employee = this.employeeRepository.find({where: {id}});
    if(!employee){
      throw new NotFoundException('Employee não encontrado.');
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpsertEmployeeDTO) {
    const employee = this.employeeRepository.update(id, updateEmployeeDto);
    if(!employee){
      throw new NotFoundException('Employee não encontrado.');
    }
    return {message: "Employee atualizado!"}
  }

  remove(id: number) {
    const employee = this.employeeRepository.delete(id);
    if(!employee){
      throw new NotFoundException('Employee não encontrado.');
    }
    return {message: "Employee deletado!"}
  }
}
